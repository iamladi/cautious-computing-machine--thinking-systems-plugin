---
description: Classify a situation into Clear / Complicated / Complex / Chaotic / Disorder and prescribe response
argument-hint: [situation]
---

# /thinking-systems:cynefin-framework

Run the Cynefin Framework dialogue. Thin wrapper around the `thinking-systems:cynefin-framework` skill.

## Usage

```
/thinking-systems:cynefin-framework launching in a new market segment
/thinking-systems:cynefin-framework production outage triage
```

## Behavior

Parse the situation from `$ARGUMENTS`. If empty, ask: `"What situation should we classify?"`.

Invoke the skill:

```
Skill(thinking-systems:cynefin-framework, args: "$ARGUMENTS")
```
