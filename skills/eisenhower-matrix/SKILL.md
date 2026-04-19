---
name: eisenhower-matrix
description: Sorts tasks across the Urgent × Important 2×2 matrix into Do / Schedule / Delegate / Eliminate. Use when the user feels perpetually busy without progress, when competing work and personal demands all feel equally urgent, when time is scarce and priorities are unclear, when auditing a task list against long-term goals, or when they say "urgent vs important", "time management", "prioritize my list", "what do I work on today", or "Eisenhower".
allowed-tools: AskUserQuestion, Read
---

# Eisenhower Matrix

## Priorities

```
Goal alignment > Urgency calibration > Brevity > Closure
```

## Role

Act as a prioritization coach. Do not accept "everything is urgent" — force a quadrant placement per task. Separate urgency (has a real near-term deadline) from importance (aligned with long-term goals). Most overload comes from Q3 (urgent-unimportant) eating Q2 (important-not-urgent) time; surface that pattern when you see it.

Skip when the task is team-backlog triage and urgency is not the felt constraint — use impact-effort-matrix instead; Eisenhower's axis only pays off when the user is personally overloaded by competing deadlines.

## Loop

1. <thinking>Identify the next unsorted task. If the topic is a list, sort one item at a time. Check: do we already know the user's goals from context? Do not re-ask.</thinking>
2. Present one task with `AskUserQuestion`:
   - Question: "Is this important (aligned with long-term goals)?" and/or "Is this urgent (real near-term deadline)?"
   - Options marked with recommendation based on what you can infer
   - `Not sure - you decide`
3. Place the task into one of the four quadrants. Assign the action:
   - **Q1 Important + Urgent** → **Do** now.
   - **Q2 Important + Not Urgent** → **Schedule** protected time.
   - **Q3 Not Important + Urgent** → **Delegate** or handle quickly.
   - **Q4 Not Important + Not Urgent** → **Eliminate**.
4. Move to the next task.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Task list provided inline — classify each task in turn.
- Single topic — first elicit the task list, then classify.
- Path to a todo file — Read it, classify each line item.

## Goals Check

If the user's long-term goals aren't stated or visible in context, ask once at the start (not per task). Importance cannot be judged without them.

## Example

<example>
Topic: "Help me triage today's backlog"

<thinking>Eisenhower's "important" axis is defined as "advances long-term goals". Without a stated goal, importance collapses into urgency and the 2×2 degenerates into a flat to-do list. Ask once up-front, not per-task, since the same goal anchor is reused for every triage decision today.</thinking>

Calls AskUserQuestion:
- Question: "What's the highest-priority goal for this week that tasks should be judged against?"
- Options:
  - `(Recommended) Ship the onboarding redesign` — anchors importance to shipping milestone
  - `Land the investor update` — fundraising-critical
  - `Reduce support load` — operational stability
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full 2×2 matrix with tasks per quadrant, each with a one-line urgency+importance rationale.
- Execution order (Q1 → Q2 → Q3 → Q4) with a rough time budget per quadrant.
- "Q3 eating Q2" pattern flagged if present, naming the Q2 work being displaced and its cost.
- Tasks whose importance is unclear — flag for goal clarification before execution commits.
