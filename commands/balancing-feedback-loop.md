---
description: Identify the goal-seeking mechanism that keeps a system at equilibrium; surface delays
argument-hint: [system or change effort]
---

# /thinking-systems:balancing-feedback-loop

Run the Balancing Feedback Loop dialogue. Thin wrapper around the `thinking-systems:balancing-feedback-loop` skill.

## Usage

```
/thinking-systems:balancing-feedback-loop on-call rotation bugs keep re-emerging
/thinking-systems:balancing-feedback-loop process-change initiatives keep reverting
```

## Behavior

Parse the system from `$ARGUMENTS`. If empty, ask: `"What system or change effort should we analyze?"`.

Invoke the skill:

```
Skill(thinking-systems:balancing-feedback-loop, args: "$ARGUMENTS")
```
