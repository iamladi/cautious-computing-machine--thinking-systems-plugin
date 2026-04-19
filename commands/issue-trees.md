---
description: MECE-decompose a problem or goal into a branching tree; prioritize with 80/20
argument-hint: [problem or goal]
---

# /thinking-systems:issue-trees

Run the Issue Trees dialogue. Thin wrapper around the `thinking-systems:issue-trees` skill.

## Usage

```
/thinking-systems:issue-trees low adoption of Feature X
/thinking-systems:issue-trees double ARR this year
```

## Behavior

Parse the root from `$ARGUMENTS`. If empty, ask: `"What problem or goal should we decompose?"`.

Invoke the skill:

```
Skill(thinking-systems:issue-trees, args: "$ARGUMENTS")
```
