---
description: Walk a decision through all six thinking hats (White/Yellow/Black/Red/Green/Blue) as a guided dialogue
argument-hint: [decision or topic]
---

# /thinking-systems:six-thinking-hats

Run the Six Thinking Hats dialogue on a decision. Thin wrapper around the `thinking-systems:six-thinking-hats` skill.

## Usage

```
/thinking-systems:six-thinking-hats should we migrate payments to Stripe Connect
/thinking-systems:six-thinking-hats hiring decision for the senior role
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What decision should we walk through with six hats?"`.

Invoke the skill:

```
Skill(thinking-systems:six-thinking-hats, args: "$ARGUMENTS")
```
