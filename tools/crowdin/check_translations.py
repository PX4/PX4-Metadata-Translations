#! /usr/bin/env python3
""" Check Claude translation/review results against their source strings

Errors block a record from being applied; warnings are only reported.
Checks that the translation keeps everything that must not be translated:
markup tags, {placeholders}, `code`, URLs, identifiers (e.g. EKF2_GPS_CHECK),
numbers and the line structure.
"""

import argparse
import collections
import json
import re
import sys

ACTIONS = ('approve', 'suggest', 'translate')

PRESERVED = [
    ('markup tag', re.compile(r'</?[a-zA-Z][^>]*>')),
    ('placeholder', re.compile(r'\{[^{}]*\}')),
    ('code span', re.compile(r'`[^`\n]+`')),
    ('URL', re.compile(r'https?://[^\s<>)"\']+')),
    # ASCII-only boundaries: \b would not match next to CJK characters
    ('identifier', re.compile(r'(?<![A-Za-z0-9_])[A-Za-z][A-Za-z0-9]*_[A-Za-z0-9_]+(?![A-Za-z0-9_])')),
]
NUMBER = re.compile(r'(?<![A-Za-z0-9_.])-?\d+(?:\.\d+)?(?![A-Za-z0-9_.])')


def _strip_preserved(text):
    for _, pattern in PRESERVED:
        text = pattern.sub(' ', text)
    return text


def check(source, text):
    """ :return: (errors, warnings) lists of messages for a translation of source """
    errors = []
    warnings = []
    if not text or not text.strip():
        return ['translation is empty'], warnings

    for name, pattern in PRESERVED:
        expected = collections.Counter(pattern.findall(source))
        found = collections.Counter(pattern.findall(text))
        missing = expected - found
        if missing:
            errors.append(f'{name} missing or changed: {sorted(missing)}')
        extra = found - expected
        if extra and name != 'identifier':
            errors.append(f'unexpected {name}: {sorted(extra)}')

    missing_numbers = collections.Counter(NUMBER.findall(_strip_preserved(source))) - \
        collections.Counter(NUMBER.findall(_strip_preserved(text)))
    if missing_numbers:
        errors.append(f'number missing or changed: {sorted(missing_numbers)}')

    if source.count('\n') != text.count('\n'):
        errors.append(f'line count differs: source has {source.count(chr(10))} newlines, translation {text.count(chr(10))}')
    if source.endswith('\n') != text.endswith('\n') or source.startswith(' ') != text.startswith(' '):
        warnings.append('leading/trailing whitespace differs')
    if text.strip() == source.strip() and re.search(r'[A-Za-z]{3,}', _strip_preserved(source)):
        warnings.append('translation is identical to the source')
    return errors, warnings


def load_jsonl(path):
    with open(path, encoding='utf-8') as stream:
        return [json.loads(line) for line in stream if line.strip()]


def check_results(export_records, results):
    """ Validate result records against the export they were produced from.
        :return: list of (result, errors, warnings)
    """
    by_id = {r['stringId']: r for r in export_records}
    seen = set()
    checked = []
    for result in results:
        errors = []
        warnings = []
        string = by_id.get(result.get('stringId'))
        action = result.get('action')
        if string is None:
            errors.append('stringId not in export')
        elif action not in ACTIONS:
            errors.append(f'unknown action {action!r}')
        elif result['stringId'] in seen:
            errors.append('duplicate stringId')
        elif action == 'approve':
            translation = string.get('translation')
            if translation is None or result.get('translationId') != translation['id']:
                errors.append('approve: translationId does not match the exported translation')
            else:
                errors, warnings = check(string['source'], translation['text'])
                errors = ['existing translation: ' + e for e in errors]
        else:
            errors, warnings = check(string['source'], result.get('text', ''))
        seen.add(result.get('stringId'))
        checked.append((result, errors, warnings))
    return checked


def main():
    parser = argparse.ArgumentParser(description='Check Claude translation/review results')
    parser.add_argument('--export', required=True, help='The .jsonl written by export_strings.py')
    parser.add_argument('results', nargs='+', help='Result .jsonl files')
    parser.add_argument('-q', '--quiet', action='store_true', help='Only print the summary and errors')
    args = parser.parse_args()

    export_records = load_jsonl(args.export)
    results = [r for path in args.results for r in load_jsonl(path)]
    checked = check_results(export_records, results)

    counts = collections.Counter()
    for result, errors, warnings in checked:
        counts[result.get('action')] += 1
        if errors:
            counts['errors'] += 1
        for message in errors:
            print(f"ERROR   {result.get('stringId')}: {message}")
        if not args.quiet:
            for message in warnings:
                print(f"warning {result.get('stringId')}: {message}")
    missing = len({r['stringId'] for r in export_records} - {r.get('stringId') for r in results})
    print(f'{len(results)} results: ' + ', '.join(f'{k}={v}' for k, v in sorted(counts.items())) +
          f'; {missing} exported strings have no result')
    sys.exit(1 if counts['errors'] else 0)


if __name__ == '__main__':
    main()
