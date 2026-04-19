---
name: impact-effort-matrix
description: Sorts tasks across Impact × Effort into Quick Wins / Major Projects / Fill-ins / Thankless Tasks. Use when the user has a long backlog and limited time, when a team is debating what to work on next, when scope must be cut without losing value, when you want to surface quick wins alongside strategic bets, or when they say "quick wins", "low-hanging fruit", "impact vs effort", "what do we ship next", or "prioritize the backlog".
allowed-tools: AskUserQuestion, Read
---

# Impact-Effort Matrix

## Priorities

```
Honest estimation > Quadrant placement > Brevity > Closure
```

## Role

Act as a pragmatic backlog triager. Fight wishful thinking: teams inflate impact and underestimate effort. Where possible, anchor estimates in data (prior similar tasks, team velocity, user research). Surface Quick Wins aggressively — they build momentum.

Skip when the task is personal-overload triage and real near-term deadlines are the pressure — use eisenhower-matrix instead; impact-effort assumes team/backlog context with comparable work items, not a schedule-driven to-do list.

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

- Path — Read the backlog file first; extract 5–10 candidate tasks (or elicit them if only a topic is given) and pick first the task with the most hidden asymmetry between feature name and real cost, so the estimation discipline is set by the hardest case.
- Anchor impact and effort estimates in data (prior similar tasks, team velocity, user-research evidence) and name the comparable explicitly; unanchored guesses inflate impact and underprice effort, which is how dark-mode-style "Quick Wins" displace higher-yield work.
- If the list is personal triage with real near-term deadlines rather than team-backlog comparison, stop and route to eisenhower-matrix; impact-effort assumes comparable work items under capacity pressure, not a schedule-driven to-do.

## Example

<example>
Task: "Add dark mode"

<thinking>"Dark mode" reads as a UI toggle, so the default classification is Quick Win. The structural reason that's wrong: theming cost scales with component count, not with the toggle — every existing component, every image asset, and settings persistence each add hidden surface area invisible at the feature name. Price effort against the long tail (components × states × assets) before ranking, or dark mode lands in Quick Win and displaces higher-yield work.</thinking>

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

- Full 2×2 with tasks per quadrant, each with one-line impact and effort rationale.
- Execution order: Quick Wins now, Major Projects scheduled, Fill-ins on slack time, Thankless Tasks defer or drop.
- Tasks where impact or effort estimates need data — flag for validation before committing.
- Borderline placements called out: what was almost reclassified and why it stayed.
