---
description: Run Observe-Orient-Decide-Act cycle for time-pressured decisions with incomplete info
argument-hint: [situation]
---

# /thinking-systems:ooda-loop

Run the OODA Loop dialogue. Thin wrapper around the `thinking-systems:ooda-loop` skill.

## Usage

```
/thinking-systems:ooda-loop competitor launched a new pricing tier
/thinking-systems:ooda-loop production incident in payments service
```

## Behavior

Parse the situation from `$ARGUMENTS`. If empty, ask: `"What situation should we run OODA on?"`.

Invoke the skill:

```
Skill(thinking-systems:ooda-loop, args: "$ARGUMENTS")
```
