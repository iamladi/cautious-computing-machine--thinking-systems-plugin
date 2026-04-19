---
description: Reframe a problem up (why) and down (how) the abstraction ladder
argument-hint: [problem statement]
---

# /thinking-systems:abstraction-laddering

Run the Abstraction Laddering dialogue. Thin wrapper around the `thinking-systems:abstraction-laddering` skill.

## Usage

```
/thinking-systems:abstraction-laddering design a better can opener
/thinking-systems:abstraction-laddering build a faster deploy pipeline
```

## Behavior

Parse the problem from `$ARGUMENTS`. If empty, ask: `"What problem statement should we climb the ladder on?"`.

Invoke the skill:

```
Skill(thinking-systems:abstraction-laddering, args: "$ARGUMENTS")
```
