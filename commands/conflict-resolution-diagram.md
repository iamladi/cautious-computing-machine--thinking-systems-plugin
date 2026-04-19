---
description: Surface needs behind opposing demands; find the assumption that makes them seem mutually exclusive
argument-hint: [conflict]
---

# /thinking-systems:conflict-resolution-diagram

Run the Conflict Resolution Diagram (Evaporating Cloud) dialogue. Thin wrapper around the `thinking-systems:conflict-resolution-diagram` skill.

## Usage

```
/thinking-systems:conflict-resolution-diagram eng wants rewrite, product wants features
/thinking-systems:conflict-resolution-diagram sales wants SLA, ops wants cost reduction
```

## Behavior

Parse the conflict from `$ARGUMENTS`. If empty, ask: `"What conflict should we evaporate?"`.

Invoke the skill:

```
Skill(thinking-systems:conflict-resolution-diagram, args: "$ARGUMENTS")
```
