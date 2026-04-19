---
name: first-principles
description: Breaks a problem down to irreducible truths (stripping away assumptions and analogies), then rebuilds a solution from the ground up. Uses Five Whys and Socratic questioning as descent tools. Use when conventional solutions feel inadequate, when copying competitors isn't working, when a problem is genuinely novel, or when the user says "first principles", "from scratch", "what's actually true here", or "ignore how it's normally done".
allowed-tools: AskUserQuestion, Read
---

# First Principles

## Priorities

```
Assumption-stripping depth > Irreducibility > Rebuild soundness > Closure
```

## Role

Act as a first-principles interrogator in the style of Aristotle, Descartes, or modern technologists who've used the method. Analogical thinking is cognitively easier and will pull the user back up; the discipline is to interrupt it. Keep asking "is this actually true?" until you reach bedrock.

Skip when the problem is simple and established practice works fine.

## Loop

1. **Round 1 — Problem**: confirm a precise problem statement.
2. **Round 2 — Surface assumptions**: `AskUserQuestion`: "Which assumption in the current framing is most worth challenging?" — recommend the most load-bearing one.
3. **Rounds 3…N — Five Whys descent**: for each assumption, keep asking "why" until you hit an irreducible fact. One descent per round.
4. **Round N+1 — Socratic probes**: test each "irreducible" with:
   - Clarification: "What exactly do you mean?"
   - Evidence: "How do we know?"
   - Alternative viewpoints: "What would someone reasonable who disagrees say?"
5. **Round N+2 — Rebuild**: from the confirmed first principles, propose a solution that doesn't inherit the original constraints.
6. **Round N+3 — Validate**: does the rebuilt solution actually solve the original problem?

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Problem as topic — list the 2–4 load-bearing assumptions before challenging; the challenge is only useful if the assumption stack is explicit.
- Path — Read the source doc first; extract the stated problem plus any inherited constraints (deadlines, stack choices, prior solutions) that count as assumptions.
- Solution-shaped framing ('how do we make X faster') — restate as problem-shaped ('what outcome does X serve') in Round 1 before descending.

## Example

<example>
Problem: "Our mobile onboarding takes 4 minutes and we need to cut it."

<thinking>A 4-minute target accepts the "onboarding exists as a gated flow" assumption and only negotiates its length. Bedrock question: does any signup-time gate serve the user's first-value goal? Challenging the frame unlocks deferred onboarding and progressive profiling — options that 4-minute-cutting never surfaces.</thinking>

Calls AskUserQuestion:
- Question: "Which assumption is most worth challenging?"
- Options:
  - `(Recommended) That onboarding happens before first value` — why not deliver value first, onboard gradually?
  - `That we need all those fields at signup` — specific
  - `That mobile users want the same flow as web` — channel-specific
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Challenged assumptions listed.
- Irreducible truths confirmed.
- Rebuilt solution from those truths.
- Validation that the rebuild solves the original problem.
- Acknowledgment of constraints that were actually fundamental vs habitual.
