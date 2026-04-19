---
description: Structure communication top-down — conclusion first, then arguments, then detail (SCQA optional)
argument-hint: [topic or draft]
---

# /thinking-systems:minto-pyramid

Run the Minto Pyramid dialogue. Thin wrapper around the `thinking-systems:minto-pyramid` skill.

## Usage

```
/thinking-systems:minto-pyramid recommend entering Market X for the exec team
/thinking-systems:minto-pyramid restructure this draft memo
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What communication should we structure?"`.

Invoke the skill:

```
Skill(thinking-systems:minto-pyramid, args: "$ARGUMENTS")
```
