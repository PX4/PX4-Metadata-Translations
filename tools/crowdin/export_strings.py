#! /usr/bin/env python3
""" Export strings from Crowdin for Claude to translate or review

Modes:
  untranslated  strings with no translation, plus strings whose only translation is
                unapproved and older than the source text (superseded)
  review        unapproved translations not made by the token's account (i.e. human
                translations awaiting review)

Writes one JSON object per line:
  {"stringId", "lang", "file", "key", "source", "translation": {"id", "text", "user", "stale"} | null}
and a glossary file of approved translations (same format, for terminology reference).
"""

import argparse
import json
import os
import random
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from crowdin_api import Crowdin  # noqa: E402

GLOSSARY_SIZE = 300


def main():
    parser = argparse.ArgumentParser(description='Export Crowdin strings for translation or review')
    parser.add_argument('--lang', required=True, help='Crowdin language id, e.g. uk or zh-CN')
    parser.add_argument('--mode', required=True, choices=['untranslated', 'review'])
    parser.add_argument('--out', required=True, help='Output .jsonl file')
    parser.add_argument('--glossary', help='Glossary output .jsonl (default: <out dir>/<lang>-glossary.jsonl)')
    parser.add_argument('--file', action='append', help='Only these Crowdin file names (e.g. events.ts); repeatable')
    args = parser.parse_args()

    crowdin = Crowdin()
    me = crowdin.current_user()
    print(f"Acting as Crowdin user '{me['username']}' (id {me['id']})")

    records = []
    glossary = []
    for file in crowdin.files():
        if args.file and file['name'] not in args.file:
            continue
        strings = {s['id']: s for s in crowdin.strings(file['id']) if not s.get('isHidden')}
        current = {t['stringId']: t for t in crowdin.language_translations(args.lang, file['id'])}
        approved = {t['stringId']: t for t in crowdin.language_translations(args.lang, file['id'], approved_only=True)}
        print(f"{file['name']}: {len(strings)} strings, {len(current)} translated, {len(approved)} approved")

        for string_id, string in strings.items():
            record = {
                'stringId': string_id,
                'lang': args.lang,
                'file': file['name'],
                'key': string.get('identifier') or string.get('context'),
                'source': string['text'],
                'translation': None,
            }
            if string_id in approved:
                record['translation'] = {'id': approved[string_id]['translationId'], 'text': approved[string_id]['text']}
                glossary.append(record)
                continue

            translation = current.get(string_id)
            if translation is not None:
                user = translation.get('user') or {}
                # ISO 8601 UTC timestamps compare correctly as strings
                stale = (translation.get('createdAt') or '') < (string.get('updatedAt') or '')
                record['translation'] = {
                    'id': translation['translationId'],
                    'text': translation['text'],
                    'user': user.get('username'),
                    'stale': stale,
                }

            if args.mode == 'untranslated':
                if translation is None or record['translation']['stale']:
                    records.append(record)
            elif translation is not None and user.get('id') != me['id']:
                records.append(record)

    with open(args.out, 'w', encoding='utf-8') as stream:
        for record in records:
            stream.write(json.dumps(record, ensure_ascii=False) + '\n')
    print(f'Wrote {len(records)} {args.mode} strings to {args.out}')

    glossary_file = args.glossary or os.path.join(os.path.dirname(args.out) or '.', f'{args.lang}-glossary.jsonl')
    # prefer short strings (short descriptions, categories, groups) as terminology examples
    glossary.sort(key=lambda r: len(r['source']))
    sample = glossary[:GLOSSARY_SIZE * 2]
    random.Random(0).shuffle(sample)
    with open(glossary_file, 'w', encoding='utf-8') as stream:
        for record in sample[:GLOSSARY_SIZE]:
            stream.write(json.dumps(record, ensure_ascii=False) + '\n')
    print(f'Wrote {min(len(sample), GLOSSARY_SIZE)} approved examples to {glossary_file}')


if __name__ == '__main__':
    main()
