---
description: Walk from defined problem to resourced plan through six stages (DRIVE framework)
argument-hint: [problem]
---

# /thinking-systems:productive-thinking-model

Run the Productive Thinking Model dialogue. Thin wrapper around the `thinking-systems:productive-thinking-model` skill.

## Usage

```
/thinking-systems:productive-thinking-model enterprise prospect stuck in late-stage sales
/thinking-systems:productive-thinking-model reduce support ticket volume
```

## Behavior

Parse the problem from `$ARGUMENTS`. If empty, ask: `"What problem should we work through?"`.

Invoke the skill:

```
Skill(thinking-systems:productive-thinking-model, args: "$ARGUMENTS")
```
