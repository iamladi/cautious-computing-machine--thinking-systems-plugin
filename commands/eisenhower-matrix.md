---
description: Sort tasks into the Urgent × Important matrix (Do / Schedule / Delegate / Eliminate)
argument-hint: [task list or context]
---

# /thinking-systems:eisenhower-matrix

Run the Eisenhower Matrix dialogue to triage a task list. Thin wrapper around the `thinking-systems:eisenhower-matrix` skill.

## Usage

```
/thinking-systems:eisenhower-matrix this week's backlog
/thinking-systems:eisenhower-matrix ./todo.md
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"What tasks should I triage?"`.

Invoke the skill:

```
Skill(thinking-systems:eisenhower-matrix, args: "$ARGUMENTS")
```
