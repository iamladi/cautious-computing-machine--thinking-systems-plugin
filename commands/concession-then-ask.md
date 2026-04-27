---
description: Pair a real concession (acknowledging a specific cost the counterpart paid, or an Ackerman 65/85/95/100 numerical anchor sequence) with the hard question the concession earns the right to ask
argument-hint: [the hard question + relationship context — what costs has the counterpart paid?]
---

# /thinking-systems:concession-then-ask

Draft the concession-then-question two-move pair so the hard question lands as direct rather than arrogant. Thin wrapper around the `thinking-systems:concession-then-ask` skill.

## Usage

```
/thinking-systems:concession-then-ask need to ask client for an extension, but we already missed the last one
/thinking-systems:concession-then-ask asking the team for one more weekend on the launch
```

## Behavior

Parse the ask from `$ARGUMENTS`. If empty, ask: `"What is the hard question you want to be able to ask, and what cost has your counterpart paid?"`.

Invoke the skill: `Skill(thinking-systems:concession-then-ask, args: "$ARGUMENTS")`
