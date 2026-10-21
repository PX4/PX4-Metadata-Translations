#! /usr/bin/env python3
""" Split an export into chunks for Claude, and merge the chunk results back

  split  Group the records of an export by source text, so each distinct English
         text is translated once, and write chunks of about --chunk-chars characters.
         Each chunk record is the first record of its group, plus 'keys' (up to 3
         example keys) and 'occurrences'. Review exports are split per record.
  merge  Combine the chunk results into one results file. For translate results,
         copy each translation to every exported record with the same source text,
         and drop translations identical to their source.
"""

import argparse
import glob
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from check_translations import load_jsonl  # noqa: E402


def write_jsonl(path, records):
    with open(path, 'w', encoding='utf-8') as stream:
        for record in records:
            stream.write(json.dumps(record, ensure_ascii=False) + '\n')


def split(args):
    records = load_jsonl(args.export)
    groups = {}
    for record in records:
        # only untranslated records can share a translation; review records each have their own
        group_key = record['source'] if record.get('translation') is None or args.dedupe_all else record['stringId']
        groups.setdefault(group_key, []).append(record)

    chunks, current, size = [], [], 0
    # sort by key so related strings (e.g. all strings of one parameter) share a chunk
    for group in sorted(groups.values(), key=lambda g: g[0]['key'] or ''):
        representative = dict(group[0], keys=[r['key'] for r in group[:3]], occurrences=len(group))
        current.append(representative)
        size += len(representative['source'])
        if size >= args.chunk_chars:
            chunks.append(current)
            current, size = [], 0
    if current:
        chunks.append(current)

    os.makedirs(args.out_dir, exist_ok=True)
    for old in glob.glob(os.path.join(args.out_dir, 'in-*.jsonl')):
        os.remove(old)
    for i, chunk in enumerate(chunks):
        write_jsonl(os.path.join(args.out_dir, f'in-{i:03d}.jsonl'), chunk)
    print(f'{len(records)} records, {len(groups)} distinct -> {len(chunks)} chunks in {args.out_dir}: '
          f'{[len(c) for c in chunks]}')


def merge(args):
    records = load_jsonl(args.export)
    by_source = {}
    others = []
    for path in sorted(glob.glob(os.path.join(args.chunk_dir, 'out-*.jsonl'))):
        chunk_in = {r['stringId']: r for r in load_jsonl(path.replace('out-', 'in-'))}
        for result in load_jsonl(path):
            if result['action'] == 'translate':
                by_source[chunk_in[result['stringId']]['source']] = result['text']
            else:
                others.append(result)

    merged = list(others)
    identical = 0
    for record in records:
        text = by_source.get(record['source'])
        if text is None:
            continue
        if text.strip() == record['source'].strip():
            identical += 1
            continue
        merged.append({'stringId': record['stringId'], 'action': 'translate', 'text': text})
    write_jsonl(args.out, merged)
    print(f'Wrote {len(merged)} results to {args.out} ({len(others)} review results, '
          f'{len(merged) - len(others)} translations; {identical} identical to source dropped)')


def main():
    parser = argparse.ArgumentParser(description='Split exports into chunks and merge chunk results')
    sub = parser.add_subparsers(dest='command', required=True)
    p = sub.add_parser('split', help='Split an export into chunks')
    p.add_argument('--export', required=True, help='The .jsonl written by export_strings.py')
    p.add_argument('--out-dir', required=True, help='Directory for in-NNN.jsonl chunks')
    p.add_argument('--chunk-chars', type=int, default=25000, help='Approximate source characters per chunk')
    p.add_argument('--dedupe-all', action='store_true', help='Also group review records by source text')
    p.set_defaults(func=split)
    p = sub.add_parser('merge', help='Merge out-NNN.jsonl chunk results')
    p.add_argument('--export', required=True, help='The .jsonl the chunks were split from')
    p.add_argument('--chunk-dir', required=True, help='Directory with in-NNN.jsonl and out-NNN.jsonl')
    p.add_argument('--out', required=True, help='Merged results .jsonl')
    p.set_defaults(func=merge)
    args = parser.parse_args()
    args.func(args)


if __name__ == '__main__':
    main()
