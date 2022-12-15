#! /bin/bash

cd "$(dirname "$(readlink -f "$0")")"/..

for file in metadata/*.json; do
	echo "Processing $file"
	./scripts/prepare_ts.py $file to_translate/`basename $file .json`.ts
done

