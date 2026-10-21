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

1. **Check credentials:** `CROWDIN_PERSONAL_TOKEN` and `CROWDIN_PROJECT_ID` must be set in the shell the tools run in. Don't ask the user to type the token after a `!` prefix: anything typed that way appears in the conversation.
   Have them put both variables in a file in their own terminal, for example `~/.config/crowdin/px4-metadata.env` with mode `600`. Then load it at the start of each command with `set -a; . ~/.config/crowdin/px4-metadata.env; set +a`, and never print it.
2. **Confirm the export gate.** Crowdin's **Settings → Export → Export only approved translations** must be on (the bot account can't read this setting, so ask). If it's off, Crowdin publishes the newest translation of each unapproved string, which is the bot's.
3. **Export:**
   ```sh
   mkdir -p work
   python3 tools/crowdin/export_strings.py --lang <lang> --mode <mode> --out work/<lang>-<mode>.jsonl
   ```
   Report the counts it prints. Each export also refreshes `work/<lang>-glossary.jsonl`, the approved translations.
4. **Split into chunks:**
   ```sh
   python3 tools/crowdin/chunks.py split --export work/<lang>-<mode>.jsonl --out-dir work/<lang>-<mode>-chunks
   ```
   In `untranslated` mode, records are grouped by English text, so each distinct text is translated once. This roughly halves the work and keeps repeated labels consistent.
5. **Translate or review the chunks with subagents,** one chunk each. Give each subagent:
   - the guide `tools/crowdin/TRANSLATION_GUIDE.md`
   - the term sheet `tools/crowdin/terms/<lang>.md`, as mandatory terminology
   - the glossary `work/<lang>-glossary.jsonl`
   - its chunk `work/<lang>-<mode>-chunks/in-NNN.jsonl`
   - the instruction to write exactly one result per record to `work/<lang>-<mode>-chunks/out-NNN.jsonl`, in the guide's output format, then run `check_translations.py` on that chunk until it passes. Tell each subagent to keep any temporary files in its own folder (for example `work/<lang>-<mode>-chunks/tmp-NNN/`): parallel subagents share the scratchpad and can overwrite each other's files

   **Run one pilot chunk per language first.** Spot-check its output, and add any terms it had to choose to the term sheet. Then run the rest in waves of about 9 subagents.
   - Add terms that come up between waves to the sheet, so later chunks use them.
   - Commit term sheet changes, because the sheet is the record of terminology decisions.
   - Reviews and translations agree better when the sheet follows the terms in already-approved translations.

   For `review` mode, remind each subagent of the approve criteria: approve if correct, and suggest only for real errors, not for style.
6. **Merge and check:**
   ```sh
   python3 tools/crowdin/chunks.py merge --export work/<lang>-<mode>.jsonl --chunk-dir work/<lang>-<mode>-chunks --out work/<lang>-<mode>-results.jsonl
   python3 tools/crowdin/check_translations.py -q --export work/<lang>-<mode>.jsonl work/<lang>-<mode>-results.jsonl
   ```
   - In `untranslated` mode, `merge` copies each translation to every string with the same English text, and drops translations identical to the source.
   - In `review` mode, look for chunks that disagree. A suggestion for an English text and an approval of the same existing translation in another chunk should become a suggestion everywhere, using one wording. Also look for term drift across chunks, for example two renderings of the same concept.

   Handle each check error:
   - **A `translate`/`suggest` error:** fix the text (by hand or with a subagent) and re-check.
   - **An `approve` blocked by an "existing translation" error:** the human translation breaks a mechanical rule. Change it to a `suggest` with a corrected text.
   - **"exported strings have no result":** expected for strings dropped as identical to their source. Otherwise, re-run those records.
7. **Dry run:**
   ```sh
   python3 tools/crowdin/apply_results.py --export work/<lang>-<mode>.jsonl work/<lang>-<mode>-results.jsonl
   ```
   Show the user the counts and a sample of about 10 records: some approves, and some suggests with their reasons. **Ask for confirmation before applying.**
8. **Apply a small test first** with `--apply --limit 5`. Verify those strings with the API (`GET /translations?stringId=&languageId=` and `GET /approvals?translationId=`), or ask the user to check them in the Crowdin Editor. They should be attributed to the bot, and new translations should be unapproved.
   Then run `--apply` for everything else, in the background for large runs. Already-applied records are skipped, using the logs in `work/`, so an interrupted run can simply be started again.
9. **Report:**
   - the per-language counts (approved, suggested, translated, skipped because of check errors, API errors)
   - the log file path
   - a few notable problems found in the human translations

`work/` is git-ignored. Never commit exports, results or logs.
