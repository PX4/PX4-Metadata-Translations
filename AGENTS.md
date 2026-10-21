# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this repo is

This repo is the translation pipeline for PX4 metadata: parameter and event descriptions shown in ground stations such as QGroundControl.
It has almost no code. Nearly all commits are made by bots:

- **Daily CI** (`.github/workflows/daily_sync.yml`, 06:00 UTC) downloads the latest PX4 `main` metadata, regenerates the source strings, recompresses the translations, rewrites the summary files and auto-commits as `[AUTO COMMIT] update metadata and summary`. To sync on demand, start a new run from the Actions tab ("Run workflow"). Don't re-run an old run: a re-run checks out that run's original commit, so its auto-commit push is rejected once `main` has moved on.
- **Crowdin** ([px4-metadata-translations](https://crowdin.com/project/px4-metadata-translations)) pushes `New translations <file>.ts (<Language>)` commits to the `l10n_main` branch. A maintainer then merges them into `main` with a PR.

Consumers fetch the files straight from `main` over `raw.githubusercontent.com`. PX4 firmware hard-codes the summary URLs in `PX4-Autopilot/src/lib/component_information/CMakeLists.txt`:

- `translated/parameters_summary.json`
- `translated/events_summary.json`

The firmware publishes these URLs to ground stations as `translationUri` (MAVLink [Component Metadata > Translation](https://mavlink.io/en/services/component_information.html#translation)). **File names, paths and the summary JSON format are therefore a public API.** Do not rename, move or restructure them.

## Layout

| Path | Contents | Written by |
| --- | --- | --- |
| `metadata/*.json` | PX4 metadata (`parameters.json`, `events.json`), copied as-is from PX4 CI artifacts | CI |
| `to_translate/*.ts` | Qt Linguist TS source files extracted from `metadata/` (the Crowdin source) | `scripts/prepare_ts_all.sh` |
| `translated/<name>_<ll_CC>.ts` | Translations per locale | Crowdin |
| `translated/*.ts.xz` | xz-compressed copies of the above (these are what consumers download) | `scripts/update_summary.py` |
| `translated/<name>_summary.json` | `{locale: {url, last-modified}}` index per metadata type | `scripts/update_summary.py` |
| `crowdin.yml` | Maps `to_translate/*.ts` → `translated/%file_name%_%locale_with_underscore%.ts` | maintainers |

Every file in `metadata/`, `to_translate/` and `translated/` is generated. Don't hand-edit them. Fix the generator, the upstream PX4 metadata, or the translation in Crowdin instead.
A manual edit to `translated/*.ts` is overwritten by the next Crowdin sync.

## Scripts

All scripts are Python 3 and use only the standard library. No dependencies need installing.

```sh
./scripts/prepare_ts_all.sh            # metadata/*.json -> to_translate/*.ts (runs prepare_ts.py on each)
./scripts/prepare_ts.py <in.json> <out.ts>
./scripts/update_summary.py translated # writes translated/*.ts.xz and translated/*_summary.json
```

### `prepare_ts.py`

- It reads the `translation` object embedded in each metadata JSON. PX4 defines that object, which follows PX4's `translation.schema.json`. The script does not choose which fields are translated. To change that, change the metadata schema/generator in PX4-Autopilot.
- It supports the schema keys `items` (with `*` wildcard), `list` (with optional `key`), `translate`, `translate-global` and `$ref`/`$defs`.
- Each string becomes one `<context>`, whose `<name>` is a slash path into the JSON (for example `/parameters/ADSB_CALLSIGN_1/shortDesc`). Lists are keyed by `key` or by index.
- `translate-global` values (for example parameter `category`/`group`) are deduplicated into `$globals/<field>/<value>` contexts.
- **Context names are the translation keys.** QGroundControl looks up translations by `<name>` only and never compares `<source>`. Changing how names are built invalidates every existing translation, so treat that as a breaking change.
- If a JSON has no `translation` key, the script prints a warning and writes nothing.
- The output must stay deterministic: `$globals` values are collected in a `set`, so they are written out sorted. Unsorted output would reorder lines on every run and cause churn in every daily commit and Crowdin sync.

### `update_summary.py`

- File names must match `<metadata>_<ll>_<CC>.ts`: the script asserts on a 5-character locale.
- It skips `en_*` because English is the source language. Summary URLs point at `https://raw.githubusercontent.com/PX4/PX4-Metadata-Translations/main/translated/<file>.ts.xz`.
- `last-modified` comes from the file mtime. In CI the mtime is the checkout time, so every run rewrites the summary files. The daily auto-commit touching only `*_summary.json` is expected, not a bug.

## Translating with Claude (`tools/crowdin/`)

Claude pre-translates strings and reviews existing translations. Humans approve in Crowdin. The goal is that only approved translations are exported.
The tools talk to the Crowdin API as a dedicated bot account, so everything Claude adds can be filtered in the Crowdin Editor by *Translated by* or *Approved by*.

- Term sheets in `tools/crowdin/terms/<lang>.md` record the mandatory terminology per language. Update them when a terminology decision is made.
- Use the `crowdin-translate` skill (`.claude/skills/crowdin-translate/SKILL.md`) for a session. It runs this pipeline:
  1. `export_strings.py`: exports the strings, and `chunks.py split` groups them into chunks.
  2. Claude works through them in chunks, following `TRANSLATION_GUIDE.md`.
  3. `chunks.py merge` combines the results, and `check_translations.py` checks them.
  4. `apply_results.py`: applies them. It's a dry run unless `--apply` is given.
- Credentials come from `CROWDIN_PERSONAL_TOKEN` and `CROWDIN_PROJECT_ID`. Never commit or print the token.
- `check_translations.py` is the mechanical safety net: tags, `{placeholders}`, code, URLs, identifiers, numbers and line structure. It also blocks approval of existing translations that break those rules. Tighten its rules rather than loosen them.
- QGC shows any `<translation>` text in the published files, even a stale one, so the approval gate in Crowdin is what keeps unreviewed or superseded text away from users.
- Session files go in `work/`, which is git-ignored.
- The tools use only the standard library, like `scripts/`. They need network access and a token, and they don't run in the daily sync.

## Known quirks (don't "fix" without asking)

- Actuator metadata is not translated here. PX4 publishes it only per board (there is no `_general/actuators.json.xz` for CI to sync), and the firmware gives actuators an empty translation URI.
- The `.ts.xz` artifacts are committed on purpose.

## Working conventions

- Keep the scripts dependency-free and runnable by the GitHub Actions `ubuntu-latest` image with only `xz-utils` installed.
- Dependabot (`.github/dependabot.yml`) checks the workflow's actions every month and opens PRs for new major versions. Actions are pinned to major tags (for example `@v7`), so minor and patch releases apply without a PR. Before merging a Dependabot PR, check its release notes for breaking changes that affect `daily_sync.yml`.
- To check a script change, run it against the committed data and inspect `git diff`. There is no test suite. Running `./scripts/prepare_ts_all.sh` twice should produce identical output, so any diff between runs comes from your change.
- Scope changes narrowly. A script change regenerates large files: `parameters.ts` is about 1 MB, and each locale adds more. Commit generated output separately from script changes, or leave regeneration to CI.
- Don't commit to `l10n_main`. It belongs to Crowdin.
- Language coverage, and which locales exist, is managed in Crowdin, not in this repo.
