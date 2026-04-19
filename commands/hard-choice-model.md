---
description: Classify a decision into No-Brainer / Apples-and-Oranges / Big Choice / Hard Choice
argument-hint: [decision]
---

# /thinking-systems:hard-choice-model

Run the Hard Choice Model dialogue. Thin wrapper around the `thinking-systems:hard-choice-model` skill.

## Usage

```
/thinking-systems:hard-choice-model take the new job or stay
/thinking-systems:hard-choice-model rewrite vs incremental refactor
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"Which decision should we classify?"`.

Invoke the skill:

```
Skill(thinking-systems:hard-choice-model, args: "$ARGUMENTS")
```
