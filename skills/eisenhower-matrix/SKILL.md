---
name: eisenhower-matrix
description: Sorts tasks across the Urgent × Important 2×2 matrix into Do / Schedule / Delegate / Eliminate — load-bearing is anchoring classification in a named long-term goal before sorting, because without that anchor importance collapses into urgency and every task drifts into Q1. Use when perpetually busy without progress, when auditing a task list against goals, or the user says "urgent vs important", "prioritize my list", "what do I work on today", or "Eisenhower".
allowed-tools: AskUserQuestion, Read
---

# Eisenhower Matrix

## Priorities

```
Goal anchor > Urgency/importance split > Q3-displacement surfacing > Closure
```

## Role

Act as a prioritization coach. The load-bearing move is anchoring classification in a named long-term goal before sorting tasks — without that anchor, importance collapses into urgency and every task drifts into Q1. Separate urgency (has a real near-term deadline) from importance (serves the goal you just named), and do not accept "everything is urgent" — force a quadrant placement per task. Most overload comes from Q3 (urgent-unimportant) eating Q2 (important-not-urgent) time; surface that pattern explicitly when you see it, because Q3 tasks usually feel productive in the moment and stay invisible unless named as the displacement source for the work that actually moves the goal forward.

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

- Path — Read the todo file first; extract the task list (or elicit 5–10 candidates if only a topic is given) and classify one task at a time so the goal anchor carries across each placement.
- Confirm the user's load-bearing goal once up-front before any quadrant call; importance is defined as "advances long-term goals", so without a stated goal the 2×2 degenerates into a flat urgency list and Q3 eats Q2 silently.
- If the list is team-backlog triage with comparable items and no personal deadline pressure, stop and route to impact-effort-matrix; Eisenhower's axis only pays off when the felt constraint is personal overload from competing deadlines.

## Goals Check

If the user's long-term goals aren't stated or visible in context, ask once at the start (not per task). Importance cannot be judged without them.

## Example

<example>
Topic: "Help me triage today's backlog"

<thinking>Eisenhower's "important" axis is defined as "advances long-term goals". Without a stated goal, importance collapses into urgency and the 2×2 degenerates into a flat to-do list. Ask once up-front, not per-task — the named goal becomes the anchor cited by name in every subsequent quadrant call ("advances onboarding-redesign ship? yes → important; slack thread about stale docs? no → not important, regardless of how loud the ping feels"). A task that doesn't advance the named goal cannot enter Q1/Q2 on felt-urgency alone; that displacement is what the anchor prevents.</thinking>

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

- Named long-term goal recorded at the top of the matrix and cited in every importance rating; if the goal is missing or the ratings don't reference it, the load-bearing anchor has failed and importance has collapsed into urgency — re-run classification after naming the goal.
- Full 2×2 matrix with tasks per quadrant, each with a one-line urgency+importance rationale that ties importance to the stated goal (not to felt pressure or stakeholder volume).
- Execution order (Q1 → Q2 → Q3 → Q4) with a rough time budget per quadrant.
- "Q3 eating Q2" pattern flagged if present, naming the Q2 work being displaced and its cost.
- Tasks whose importance is unclear — flag for goal clarification before execution commits.
