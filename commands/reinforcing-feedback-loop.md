---
description: Map a self-amplifying loop producing exponential growth or decline; find its ceiling
argument-hint: [system or trend]
---

# /thinking-systems:reinforcing-feedback-loop

Run the Reinforcing Feedback Loop dialogue. Thin wrapper around the `thinking-systems:reinforcing-feedback-loop` skill.

## Usage

```
/thinking-systems:reinforcing-feedback-loop AI-feature usage growing faster than revenue
/thinking-systems:reinforcing-feedback-loop referral program flywheel
```

## Behavior

Parse the trend from `$ARGUMENTS`. If empty, ask: `"What trend or system should we analyze?"`.

Invoke the skill:

```
Skill(thinking-systems:reinforcing-feedback-loop, args: "$ARGUMENTS")
```
