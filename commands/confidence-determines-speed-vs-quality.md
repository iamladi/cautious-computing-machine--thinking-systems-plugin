---
description: Decide speed-vs-quality strategy based on confidence in problem and solution
argument-hint: [project or feature]
---

# /thinking-systems:confidence-determines-speed-vs-quality

Run the Confidence-Speed-Quality dialogue. Thin wrapper around the `thinking-systems:confidence-determines-speed-vs-quality` skill.

## Usage

```
/thinking-systems:confidence-determines-speed-vs-quality the new AI search feature
/thinking-systems:confidence-determines-speed-vs-quality rewriting the auth layer
```

## Behavior

Parse the project from `$ARGUMENTS`. If empty, ask: `"Which project or feature should we strategize on?"`.

Invoke the skill:

```
Skill(thinking-systems:confidence-determines-speed-vs-quality, args: "$ARGUMENTS")
```
