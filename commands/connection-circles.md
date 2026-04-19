---
description: Map a system's 5-10 elements with labeled causal arrows to surface feedback loops
argument-hint: [system or recurring problem]
---

# /thinking-systems:connection-circles

Run the Connection Circles dialogue. Thin wrapper around the `thinking-systems:connection-circles` skill.

## Usage

```
/thinking-systems:connection-circles customer-support spiral
/thinking-systems:connection-circles team burnout dynamics
```

## Behavior

Parse the system from `$ARGUMENTS`. If empty, ask: `"What system should we map?"`.

Invoke the skill:

```
Skill(thinking-systems:connection-circles, args: "$ARGUMENTS")
```
