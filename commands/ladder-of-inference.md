---
description: Trace a belief back down the reasoning chain to raw observable data
argument-hint: [belief or conclusion]
---

# /thinking-systems:ladder-of-inference

Run the Ladder of Inference dialogue. Thin wrapper around the `thinking-systems:ladder-of-inference` skill.

## Usage

```
/thinking-systems:ladder-of-inference Alex is not a team player
/thinking-systems:ladder-of-inference the new release is broken
```

## Behavior

Parse the belief from `$ARGUMENTS`. If empty, ask: `"What belief or conclusion should we descend the ladder on?"`.

Invoke the skill:

```
Skill(thinking-systems:ladder-of-inference, args: "$ARGUMENTS")
```
