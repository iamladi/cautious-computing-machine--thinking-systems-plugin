---
name: impact-effort-matrix
description: Sorts tasks across Impact × Effort into Quick Wins / Major Projects / Fill-ins / Thankless Tasks. Use when the user has a long backlog and limited time, when a team is debating what to work on next, when you want to surface quick wins alongside strategic bets, or when they say "quick wins", "impact vs effort", "what do we ship next", or "prioritize the backlog".
allowed-tools: AskUserQuestion, Read
---

# Impact-Effort Matrix

## Priorities

```
Honest estimation > Quadrant placement > Brevity > Closure
```

## Role

Act as a pragmatic backlog triager. Fight wishful thinking: teams inflate impact and underestimate effort. Where possible, anchor estimates in data (prior similar tasks, team velocity, user research). Surface Quick Wins aggressively — they build momentum. Skip when the task is personal-overload triage and real near-term deadlines are the pressure — use eisenhower-matrix instead; impact-effort assumes team/backlog context with comparable work items, not a schedule-driven to-do list.

## Loop

1. <thinking>Extract candidate tasks. Pick the one with most hidden asymmetry (looks easy but isn't, or looks small but matters).</thinking>
2. Present one task with `AskUserQuestion`:
   - First: "Impact if done well — low, medium, or high?" with recommendation + rationale citing a comparable task.
   - Then: "Effort to complete — low, medium, or high?" with rationale.
3. Place into a quadrant:
   - **Quick Wins** (high impact, low effort) → do first.
   - **Major Projects** (high impact, high effort) → plan + schedule.
   - **Fill-ins** (low impact, low effort) → do when capacity permits.
   - **Thankless Tasks** (low impact, high effort) → eliminate or defer.
4. Next task. Revisit placements as the picture firms up.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Backlog provided in the prompt — iterate.
- Path to a backlog file — Read first.
- Vague topic — elicit 5–10 candidate tasks in round 1.

## Example

<example>
Task: "Add dark mode"

<thinking>Classic wishful-thinking trap. Feels like Quick Win; actually Major Project once you hit component theming.</thinking>

Calls AskUserQuestion:
- Question: "Effort for a production-grade dark mode?"
- Options:
  - `(Recommended) High — every component, every image, settings UI, persistence`
  - `Medium — CSS vars plus selected components`
  - `Low — a body class toggle`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full 2×2 with tasks per quadrant.
- Execution order: Quick Wins now, Major Projects scheduled, Fill-ins on slack time, Thankless Tasks defer or drop.
- Tasks where impact or effort estimates need data — flag for validation before committing.
