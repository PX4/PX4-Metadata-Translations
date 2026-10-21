---
name: crowdin-translate
description: Translate or review PX4 metadata strings (parameters, events) in Crowdin with Claude. Use when asked to pre-translate new or untranslated strings, re-translate superseded strings, or review existing (human) translations for a language such as uk or zh-CN. AI output is pushed to Crowdin unapproved; only review "approve" verdicts approve anything.
---

# Crowdin translate / review session

Claude is the translator here. The work is pushed to the Crowdin project `px4-metadata-translations` through the bot account that owns `CROWDIN_PERSONAL_TOKEN`.
Translations Claude adds are **unapproved**, and only approved translations are exported to `translated/`. Read `tools/crowdin/TRANSLATION_GUIDE.md` before starting.

## Inputs to confirm with the user
- **Language(s):** Crowdin language ids, for example `uk` or `zh-CN`.
- **Mode:**
  - `untranslated`: new and superseded strings.
  - `review`: existing human translations awaiting approval.
- **Optional:** a file filter (`--file events.ts`) to keep a session small.

## Steps

1. **Check credentials:** `CROWDIN_PERSONAL_TOKEN` and `CROWDIN_PROJECT_ID` must be set. If they aren't, ask the user to export them; never print the token.
2. **Export:**
   ```sh
   mkdir -p work
   python3 tools/crowdin/export_strings.py --lang <lang> --mode <mode> --out work/<lang>-<mode>.jsonl
   ```
   Report the counts it prints.
3. **Split into chunks** of about 150 records:
   ```sh
   mkdir -p work/<lang>-<mode>-chunks && split -l 150 -d -a 3 --additional-suffix=.jsonl work/<lang>-<mode>.jsonl work/<lang>-<mode>-chunks/in-
   ```
4. **Translate or review the chunks with subagents.** Run several in parallel, one chunk each. Give each subagent:
   - the guide `tools/crowdin/TRANSLATION_GUIDE.md`
   - the glossary `work/<lang>-glossary.jsonl`
   - its chunk `work/<lang>-<mode>-chunks/in-NNN.jsonl`
   - the instruction to write exactly one result per record to `work/<lang>-<mode>-chunks/out-NNN.jsonl`, in the guide's output format

   For `review` mode, remind it of the approve criteria: approve if correct, and suggest only for real errors, not for style.
5. **Check:**
   ```sh
   python3 tools/crowdin/check_translations.py -q --export work/<lang>-<mode>.jsonl work/<lang>-<mode>-chunks/out-*.jsonl
   ```
   Handle each error:
   - **A `translate`/`suggest` error:** fix the text (by hand or with a subagent) and re-check.
   - **An `approve` blocked by an "existing translation" error:** the human translation breaks a mechanical rule. Change it to a `suggest` with a corrected text.
   - **"exported strings have no result":** re-run those records.
6. **Dry run:**
   ```sh
   python3 tools/crowdin/apply_results.py --export work/<lang>-<mode>.jsonl work/<lang>-<mode>-chunks/out-*.jsonl
   ```
   Show the user the counts and a sample of about 10 records: some approves, and some suggests with their reasons. **Ask for confirmation before applying.**
7. **Apply a small test first** with `--apply --limit 5`. Ask the user to check those strings in the Crowdin Editor: they should be attributed to the bot, and translations should be unapproved. Then run `--apply` for everything else. Already-applied records are skipped, using the logs in `work/`.
8. **Report:**
   - the per-language counts (approved, suggested, translated, skipped because of check errors, API errors)
   - the log file path
   - a few notable problems found in the human translations

`work/` is git-ignored. Never commit exports, results or logs.
