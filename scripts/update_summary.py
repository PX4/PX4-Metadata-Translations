#! /usr/bin/env python3
""" Compress translated files and update summary json file """

import argparse
import json
import os
import lzma
from datetime import datetime, timezone

def save_compressed(filename):
    # create xz compressed version
    xz_filename=filename+'.xz'
    with lzma.open(xz_filename, 'wt', preset=9) as f:
        with open(filename, 'r') as content_file:
            f.write(content_file.read())


parser = argparse.ArgumentParser(description='Compress translated files and update summary json file')
parser.add_argument('path', help='Directory with TS translations')

url_base = 'https://raw.githubusercontent.com/PX4/PX4-Metadata-Translations/main/translated/'

args = parser.parse_args()
path = args.path

path_fs = os.fsencode(path)
metadata = {}

for file in os.listdir(path_fs):
    basename = os.fsdecode(file)
    filename = os.path.join(path, os.fsdecode(file))
    if filename.lower().endswith('.ts'):
        print(f'Processing {filename}')

        # Expected format: <metadata>_de_DE.ts
        assert basename[-9] == '_'
        metadata_index = basename[:-9]
        locale = basename[-8:-3]

        if metadata_index not in metadata:
            metadata[metadata_index] = {}

        last_modified = os.path.getmtime(filename)
        iso8601_timestamp = datetime.fromtimestamp(last_modified, tz=timezone.utc).isoformat()

        url = url_base + basename + '.xz'
        metadata[metadata_index][locale] = {
            'url': url,
            'last-modified': iso8601_timestamp,
        }

        save_compressed(filename)

for metadata_index in metadata:
    # Write the json file
    summary_filename = os.path.join(path, metadata_index+'_summary.json')
    print(f'Writing {summary_filename}')
    with open(summary_filename, 'w') as stream:
        json.dump(metadata[metadata_index], stream)

