---
description: Strip assumptions, reach irreducible truths, rebuild a solution from the ground up
argument-hint: [problem]
---

# /thinking-systems:first-principles

Run the First Principles dialogue. Thin wrapper around the `thinking-systems:first-principles` skill.

## Usage

```
/thinking-systems:first-principles our mobile onboarding takes 4 minutes
/thinking-systems:first-principles should we rewrite the auth layer
```

## Behavior

Parse the problem from `$ARGUMENTS`. If empty, ask: `"What problem should we tackle from first principles?"`.

Invoke the skill:

```
Skill(thinking-systems:first-principles, args: "$ARGUMENTS")
```
