---
description: Sort backlog tasks into Quick Wins / Major Projects / Fill-ins / Thankless Tasks
argument-hint: [task list or backlog]
---

# /thinking-systems:impact-effort-matrix

Run the Impact-Effort Matrix dialogue. Thin wrapper around the `thinking-systems:impact-effort-matrix` skill.

## Usage

```
/thinking-systems:impact-effort-matrix Q2 backlog
/thinking-systems:impact-effort-matrix ./backlog.md
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"Which backlog or task set should we prioritize?"`.

Invoke the skill:

```
Skill(thinking-systems:impact-effort-matrix, args: "$ARGUMENTS")
```
