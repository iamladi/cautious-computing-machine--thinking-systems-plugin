---
description: Descend Events → Patterns → Structures → Mental Models to find systemic causes
argument-hint: [recurring problem]
---

# /thinking-systems:iceberg-model

Run the Iceberg Model dialogue. Thin wrapper around the `thinking-systems:iceberg-model` skill.

## Usage

```
/thinking-systems:iceberg-model bugs keep shipping in production
/thinking-systems:iceberg-model senior engineers keep leaving
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What recurring problem should we descend?"`.

Invoke the skill:

```
Skill(thinking-systems:iceberg-model, args: "$ARGUMENTS")
```
