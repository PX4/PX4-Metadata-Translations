#! /usr/bin/env python3
""" Convert a json metadata file to a TS translation file """

import argparse
import sys
import json
import codecs
from xml.sax.saxutils import escape


parser = argparse.ArgumentParser(description='Convert a json metadata file to a TS translation file')
parser.add_argument('json_file', help='JSON input file')
parser.add_argument('file_output', help='.ts output file')

args = parser.parse_args()
json_file = args.json_file
output_file = args.file_output

# load the json file
with open(json_file, 'r') as stream:
    metadata = json.load(stream)

if 'translation' not in metadata:
    print("Warning: json file does not contain translation information, no output is generated")
    sys.exit(0)

# This is expected to follow the translation.schema.json
translation = metadata['translation']

def get_ref_name(ref):
    # expected format: '#/$defs/<name>'
    return ref[8:]

def process_items(prefix, defs, translation, json_data, global_translations):
    """ processes an 'items' entry
        :return: list of (context, source string) tuples
    """
    ret = []

    def process_translation(prefix, defs, translation, json_data, global_translations):
        """ processes an entry that potentially contans a 'translate' """
        ret = []

        if 'list' in translation:
            translation_list = translation['list']
            key = translation_list.get('key', None)
            all_values = set()
            for idx, list_entry in enumerate(json_data):
                if key is not None and key in list_entry:
                    value = str(list_entry[key])
                else:
                    value = str(idx)
                ret.extend(process_translation(prefix+'/'+value, defs, translation_list, list_entry, global_translations))
                # ensure value is unique
                assert value not in all_values, "Key {:} is not unique".format(value)
                all_values.add(value)
        if 'translate' in translation:
            for translate_name in translation['translate']:
                if translate_name in json_data:
                    if isinstance(json_data[translate_name], str):
                        ret.append((prefix+'/'+translate_name, json_data[translate_name]))
                    elif isinstance(json_data[translate_name], list): # list of strings
                        for idx, item in enumerate(json_data[translate_name]):
                            assert isinstance(item, str)
                            ret.append((prefix+'/'+translate_name+'/'+str(idx), item))
        if 'translate-global' in translation:
            for translate_name in translation['translate-global']:
                if translate_name in json_data:
                    if translate_name not in global_translations:
                        global_translations[translate_name] = set()
                    # globals will turn into '$globals/<translate_name>/<json_data[translate_name]>'
                    if isinstance(json_data[translate_name], str):
                        global_translations[translate_name].add(json_data[translate_name])
                    elif isinstance(json_data[translate_name], list): # list of strings
                        for idx, item in enumerate(json_data[translate_name]):
                            assert isinstance(item, str)
                            global_translations[translate_name].add(item)
        if 'items' in translation:
            ret.extend(process_items(prefix, defs, translation['items'], json_data, global_translations))
        if '$ref' in translation:
            ret.extend(process_translation(prefix, defs, defs[get_ref_name(translation['$ref'])], json_data, global_translations))
        return ret

    for translation_item in translation:
        if translation_item == '*':
            translation_keys = json_data.keys()
        else:
            translation_keys = [translation_item]
        for json_item in translation_keys:
            next_prefix = prefix+'/'+json_item
            next_translation = translation[translation_item]
            if json_item in json_data:
                next_json_data = json_data[json_item]
                ret.extend(process_translation(next_prefix, defs, next_translation, next_json_data, global_translations))
    return ret


tuples = []
global_translations = {}
defs = translation.get('$defs', {})
if 'items' in translation:
    tuples = process_items('', defs, translation['items'], metadata, global_translations)
if '$ref' in translation:
    tuples.extend(process_items('', defs, defs[get_ref_name(translation['$ref'])], metadata, global_translations))

# write the .ts file
ts_file = codecs.open(output_file, 'w', "utf-8")
ts_file.write("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n")
ts_file.write("<!DOCTYPE TS>\n")
ts_file.write("<TS version=\"2.1\">\n")
for context, string in tuples:
    ts_file.write("<context>\n")
    ts_file.write("  <name>{:}</name>\n".format(escape(context)))
    ts_file.write("  <message>\n")
    ts_file.write("  <source>{:}</source>\n".format(escape(string)))
    ts_file.write("  </message>\n")
    ts_file.write("</context>\n")

for global_translation in sorted(global_translations):
    for string in global_translations[global_translation]:
        ts_file.write("<context>\n")
        ts_file.write("  <name>{:}</name>\n".format('$globals/'+escape(global_translation)+'/'+escape(string)))
        ts_file.write("  <message>\n")
        ts_file.write("  <source>{:}</source>\n".format(escape(string)))
        ts_file.write("  </message>\n")
        ts_file.write("</context>\n")
ts_file.write("</TS>\n")
ts_file.close()

