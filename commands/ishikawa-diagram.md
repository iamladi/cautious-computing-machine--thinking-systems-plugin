---
description: Build a fishbone diagram mapping candidate root causes across categories
argument-hint: [problem]
---

# /thinking-systems:ishikawa-diagram

Run the Ishikawa (Fishbone) dialogue. Thin wrapper around the `thinking-systems:ishikawa-diagram` skill.

## Usage

```
/thinking-systems:ishikawa-diagram signups declining month over month
/thinking-systems:ishikawa-diagram deploys keep breaking on Fridays
```

## Behavior

Parse the problem from `$ARGUMENTS`. If empty, ask: `"What problem should we diagram?"`.

Invoke the skill:

```
Skill(thinking-systems:ishikawa-diagram, args: "$ARGUMENTS")
```
