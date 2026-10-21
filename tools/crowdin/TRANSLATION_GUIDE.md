# PX4 metadata translation guide

These are the rules for translating and reviewing PX4 metadata strings: parameter descriptions and event (arming check / failsafe) messages.
They are shown to pilots and integrators in QGroundControl, in the parameter editor and as vehicle notifications.
`tools/crowdin/check_translations.py` enforces the mechanical rules, and a record that fails is not applied.

## Context of a string

Each exported record has a `key`, which is the string's path in the PX4 metadata. It tells you what the string is:

| Key pattern | What it is | Style |
| --- | --- | --- |
| `/parameters/<NAME>/shortDesc` | Parameter title (one line) | Short noun phrase, no final full stop unless the source has one |
| `/parameters/<NAME>/longDesc` | Parameter description | Full sentences, keep the paragraph and line structure |
| `/parameters/<NAME>/values/<v>/description`, `.../bitmask/<bit>/description` | Label of an enum value or bitmask bit | As short as the source |
| `$globals/category/<value>`, `$globals/group/<value>` | Parameter category or group name, shown as a section heading | Short and consistent: the same English word must always get the same translation |
| `/components/.../events/<id>/message` | Event message: a notification shown to the pilot | Short, direct, imperative where the source is |
| `/components/.../events/<id>/description` | Event details | Full sentences |
| `/components/.../enums/.../description` | Event argument value | As short as the source |

`<NAME>` is the parameter name, for example `MPC_XY_VEL_MAX`. The prefix tells you the subsystem: `MPC_` multicopter position control, `EKF2_` estimator, `COM_` commander, `NAV_` navigator, `SENS_` sensors, `CAL_` calibration, `BAT_` battery, `FW_` fixed-wing, and so on.

## Never translate or change

- **Identifiers:** parameter names (`EKF2_GPS_CHECK`), module and topic names (`vehicle_status`, `radio_status`), and anything with underscores.
- **Markup:** `<param>…</param>`, `<profile name="dev">…</profile>` and `<a>…</a>`. Keep each tag exactly as it is, including attributes. Translate the text between tags, but not the parameter name inside `<param>`.
- **Placeholders:** `{1}`, `{2:.1}`, `{3:.1m/s}`, and so on. Copy them byte for byte. **Never translate the unit inside a placeholder** (`{3:.1m/s}` must not become `{3:.1м/с}`), because QGC uses it to format the value.
- **Code spans** in backticks, and URLs.
- **Numbers:** keep `.` as the decimal separator and keep the digits. Write `3-axis` with the digit, not the word.

## Units

- Units outside placeholders may use the target language's usual abbreviation when one is standard (Ukrainian `м/с`, `°C`; Chinese usually keeps `m/s`), but keep the value.
- Keep SI prefixes and symbols such as `Hz`, `rad/s`, `%`, `°`.

## Structure

- Keep the same number of line breaks. Keep leading and trailing whitespace and the trailing newline.
- Keep lists, Markdown and emphasis as they are in the source.

## Terminology and register

- Use the established technical term in the target language for aviation, control and robotics concepts: attitude, yaw, roll, pitch, setpoint, failsafe, arming, geofence, mission, offboard, estimator, airspeed, throttle.
- Common acronyms stay in Latin script: GPS, RC, ESC, IMU, EKF, PWM, UAVCAN/DroneCAN, MAVLink, ADS-B, PX4, QGC.
- Before inventing a term, check the glossary file (`<lang>-glossary.jsonl`, which holds approved translations) and the strings already translated in your batch, and use the same term.
- Use a neutral, technical register. Address the user the way the target language's software UIs normally do (see the language notes).
- Don't add explanations, and don't drop information. If the source is ambiguous, translate it faithfully rather than guessing a "better" meaning.

## Language notes

### Ukrainian (`uk`)
- Address the user formally (`ви` forms and imperatives: `Перевірте`, `Зачекайте`).
- Use Ukrainian, not Russian, terminology and orthography.
- The decimal separator stays `.` (see Numbers).

### Chinese Simplified (`zh-CN`)
- Use full-width Chinese punctuation (`，。：；（）`) inside Chinese text.
- Keep ASCII punctuation inside identifiers, placeholders, code and URLs.
- Don't put spaces between Chinese characters. Spaces next to Latin words and numbers are optional, but use them consistently.

## Reviewing an existing translation

Use **approve** only if all of these are true:
1. The meaning matches the current source completely, with nothing added or missing.
2. Every "never translate or change" rule is met.
3. The terminology is correct and consistent with the glossary.
4. The text is grammatical and natural.

Otherwise use **suggest** and give a corrected translation. Examples of what needs a suggestion:
- a wrong parameter name (often copied from a similar string)
- a translated placeholder unit
- a missing sentence
- a stale translation of older source text (`translation.stale` is true and the meaning no longer matches)

Minor stylistic preferences are **not** a reason to suggest: approve a correct translation even if you would phrase it differently.
The conventions in the language notes (verb form, register, keeping acronyms in Latin script) are rules for **new** translations. In review they are preferences. Suggest only when the existing wording is wrong, unnatural, or uses a term with a different meaning. For example, `Швидкість польоту` (flight speed) for "Airspeed" needs a suggestion. `Тримати нерухомо` for "Hold still" doesn't.

- **Stale records** (`translation.stale` is true): the source changed after the translation was made, and the old source isn't available. Judge the translation against the current source only.
- **Glossary entries** are approved translations used as a terminology reference. They aren't under review.

## Output format

Write one JSON object per line (JSONL), with exactly one result for each input record:

```json
{"stringId": 123, "action": "approve", "translationId": 456, "reason": "accurate"}
{"stringId": 124, "action": "suggest", "text": "corrected translation", "reason": "wrong parameter name: MPC_Z_V_AUTO_DN instead of MPC_VEL_MANUAL"}
{"stringId": 125, "action": "translate", "text": "new translation"}
```

- `approve` is only for review records. `translationId` must be the record's `translation.id`.
- `suggest` is only for review records. `reason` must say what is wrong.
- `translate` is for untranslated records. It also applies to stale records in untranslated mode.
- `text` is the plain translated string, with no surrounding quotes, notes or explanation.
