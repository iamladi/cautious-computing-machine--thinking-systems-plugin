---
description: Generate novel solution combinations via a morphological attribute × value matrix
argument-hint: [problem]
---

# /thinking-systems:zwicky-box

Run the Zwicky Box dialogue. Thin wrapper around the `thinking-systems:zwicky-box` skill.

## Usage

```
/thinking-systems:zwicky-box customer feedback system design
/thinking-systems:zwicky-box novel onboarding experience
```

## Behavior

Parse the problem from `$ARGUMENTS`. If empty, ask: `"What problem should we explore morphologically?"`.

Invoke the skill:

```
Skill(thinking-systems:zwicky-box, args: "$ARGUMENTS")
```
