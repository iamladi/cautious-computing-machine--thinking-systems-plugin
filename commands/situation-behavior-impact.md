---
description: Deliver feedback using SBI — Situation + observable Behavior + Impact (+ optional Intent)
argument-hint: [feedback to deliver]
---

# /thinking-systems:situation-behavior-impact

Run the SBI Feedback dialogue. Thin wrapper around the `thinking-systems:situation-behavior-impact` skill.

## Usage

```
/thinking-systems:situation-behavior-impact Alex missed context in yesterday's review
/thinking-systems:situation-behavior-impact positive feedback for Priya's onboarding work
```

## Behavior

Parse the feedback topic from `$ARGUMENTS`. If empty, ask: `"Who is the feedback for, and what happened?"`.

Invoke the skill:

```
Skill(thinking-systems:situation-behavior-impact, args: "$ARGUMENTS")
```
