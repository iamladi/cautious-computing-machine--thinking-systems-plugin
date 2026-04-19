---
description: Map downstream consequences of a decision across 10-min / 10-month / 10-year horizons
argument-hint: [decision or topic]
---

# /thinking-systems:second-order-thinking

Run the Second-Order Thinking dialogue. Thin wrapper around the `thinking-systems:second-order-thinking` skill.

## Usage

```
/thinking-systems:second-order-thinking should I take the remote job in another city
/thinking-systems:second-order-thinking move our infra to a single cloud
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What decision's downstream effects should we map?"`.

Invoke the skill:

```
Skill(thinking-systems:second-order-thinking, args: "$ARGUMENTS")
```
