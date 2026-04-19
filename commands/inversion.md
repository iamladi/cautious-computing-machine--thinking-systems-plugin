---
description: Pre-mortem — ask how this would fail, then derive preventive actions
argument-hint: [plan or decision]
---

# /thinking-systems:inversion

Run the Inversion / Pre-mortem dialogue. Thin wrapper around the `thinking-systems:inversion` skill.

## Usage

```
/thinking-systems:inversion ship the onboarding redesign in 6 weeks
/thinking-systems:inversion Q3 launch plan
```

## Behavior

Parse the plan from `$ARGUMENTS`. If empty, ask: `"What plan or decision should we invert?"`.

Invoke the skill:

```
Skill(thinking-systems:inversion, args: "$ARGUMENTS")
```
