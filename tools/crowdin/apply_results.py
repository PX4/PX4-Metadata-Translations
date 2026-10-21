#! /usr/bin/env python3
""" Apply Claude translation/review results to Crowdin

Result records (one JSON object per line):
  {"stringId": 1, "action": "approve", "translationId": 2, "reason": "..."}   approve the exported translation
  {"stringId": 1, "action": "suggest", "text": "...", "reason": "..."}        add an alternative (unapproved) translation
  {"stringId": 1, "action": "translate", "text": "..."}                       add a new (unapproved) translation

Records failing check_translations.py are skipped, as are records already applied
successfully according to earlier logs in --log-dir (so a run can be resumed or
extended after a --limit test). Without --apply this is a dry run.
"""

import argparse
import collections
import concurrent.futures
import datetime
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from check_translations import check_results, load_jsonl  # noqa: E402
from crowdin_api import Crowdin, CrowdinError  # noqa: E402

MAX_WORKERS = 8


def record_key(result, language):
    # string ids are shared by all languages, so the language is part of the key
    return (language, result['stringId'], result['action'], result.get('translationId'), result.get('text'))


def previously_applied(log_dir):
    """ Keys of records logged as successfully applied by earlier runs """
    done = set()
    if os.path.isdir(log_dir):
        for name in os.listdir(log_dir):
            if name.startswith('apply-') and name.endswith('.jsonl'):
                done.update(record_key(r, r.get('lang')) for r in load_jsonl(os.path.join(log_dir, name))
                            if r.get('status') == 'ok')
    return done


def main():
    parser = argparse.ArgumentParser(description='Apply Claude translation/review results to Crowdin')
    parser.add_argument('--export', required=True, help='The .jsonl written by export_strings.py')
    parser.add_argument('results', nargs='+', help='Result .jsonl files')
    parser.add_argument('--apply', action='store_true', help='Make the changes (default: dry run)')
    parser.add_argument('--limit', type=int, help='Only apply the first N valid records')
    parser.add_argument('--log-dir', default='work', help='Directory for the action log (default: work)')
    args = parser.parse_args()

    export_records = load_jsonl(args.export)
    lang = {r['stringId']: r['lang'] for r in export_records}
    results = [r for path in args.results for r in load_jsonl(path)]

    done = previously_applied(args.log_dir)
    valid = []
    skipped = 0
    already_applied = 0
    for result, errors, _ in check_results(export_records, results):
        if errors:
            skipped += 1
            print(f"skip {result.get('stringId')} ({result.get('action')}): {'; '.join(errors)}")
        elif record_key(result, lang[result['stringId']]) in done:
            already_applied += 1
        else:
            valid.append(result)
    if args.limit is not None:
        valid = valid[:args.limit]

    counts = collections.Counter(r['action'] for r in valid)
    print(f"{len(valid)} records to apply ({', '.join(f'{k}={v}' for k, v in sorted(counts.items()))}), "
          f'{skipped} skipped because of check errors, {already_applied} already applied')
    if not args.apply:
        print('Dry run: nothing changed. Re-run with --apply to make these changes.')
        return

    crowdin = Crowdin()
    print(f"Applying as Crowdin user '{crowdin.current_user()['username']}'")

    def apply(result):
        result = dict(result, lang=lang[result['stringId']])
        try:
            if result['action'] == 'approve':
                response = crowdin.approve(result['translationId'])
            else:
                response = crowdin.add_translation(result['stringId'], lang[result['stringId']], result['text'])
            return dict(result, status='ok', responseId=response.get('id'))
        except CrowdinError as e:
            if 'Duplicate translation' in str(e):
                # the same text is already a translation of this string (e.g. from an interrupted run)
                return dict(result, status='ok', note='already present')
            return dict(result, status='error', error=str(e))
        except Exception as e:  # never let one record abort the run and lose the log of the others
            return dict(result, status='error', error=f'{type(e).__name__}: {e}')

    os.makedirs(args.log_dir, exist_ok=True)
    timestamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S.%fZ')
    log_file = os.path.join(args.log_dir, f'apply-{timestamp}.jsonl')
    status = collections.Counter()
    with open(log_file, 'w', encoding='utf-8') as log, \
            concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        for outcome in pool.map(apply, valid):
            log.write(json.dumps(outcome, ensure_ascii=False) + '\n')
            status[outcome['status']] += 1
            if outcome['status'] == 'error':
                print(f"error {outcome['stringId']} ({outcome['action']}): {outcome['error']}")
    print(f"Done: {status['ok']} ok, {status['error']} errors. Log: {log_file}")
    sys.exit(1 if status['error'] else 0)


if __name__ == '__main__':
    main()
