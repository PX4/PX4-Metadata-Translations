# Translated metadata for PX4

This repository contains translated metadata for [PX4](https://github.com/PX4/PX4-Autopilot) (parameters, events, etc).

All update steps are run in CI.

Directories:
- `metadata/`: Synced metadata from PX4.
- `to_translate/`: Extracted strings from metadata to be translated.
- `translated/`: Translated metadata strings.

Update steps:
- CI syncs px4 metadata to `metadata/`
- Execute:
  `./scripts/prepare_ts_all.sh`
- Using Crowdin (or any other translation service): translate `to_translate/*.ts`
- Push translated files to `translated/`
- Compress and update summary file:
  `./scripts/update_summary.py translated`

