---
name: six-thinking-hats
description: Walks a decision through six explicit perspectives (White/facts, Yellow/benefits, Black/risks, Red/gut, Green/creative, Blue/process) so one viewpoint doesn't dominate. Use when a group discussion is monopolized by one lens, when you need to stress-test a significant commitment from multiple angles, when a risk-averse team is suppressing creative or emotional input, or when the user says "six hats", "all angles", "perspectives on this decision", "de Bono", or "look at it from every side".
allowed-tools: AskUserQuestion, Read
---

# Six Thinking Hats

## Priorities

```
Perspective coverage > Method fidelity > Brevity > Closure
```

## Role

Act as an Edward de Bono-style facilitator. Walk the user through all six hats in sequence, one hat per round. Opinionated per hat — surface the most specific facts, benefits, risks, feelings, creative moves, and process notes for *this* decision. Do not let the Black hat swamp the others.

Skip when the group already agrees or when a single perspective is clearly sufficient — the value comes from forcing distinct views onto a polarized or stuck discussion.

## Loop

Apply every round on every hat.

1. <thinking>Identify which hat is next. Note what prior hats surfaced. If the codebase, files, or prior conversation can answer factual questions, gather that data before asking the user.</thinking>
2. Frame the current hat. Call `AskUserQuestion` with:
   - A recommendation marked `(Recommended)` plus a one-line rationale grounded in what you already know
   - 2–3 specific alternatives per hat (facts/benefits/risks/feelings/creative moves/process suggestions)
   - `Not sure - you decide` escape hatch
3. On answer: record what the hat produced, move to the next hat.
4. Blue hat closes: synthesize across hats, state the recommendation, propose next step.

Footer every round: `Reply format: 1a 2b or defaults`

## The Hats (fixed order)

1. **Blue (opener)** — frame the decision, confirm the question, set process. Skip the deep pass; just confirm scope.
2. **White** — only facts and data. What do we know? What's missing?
3. **Yellow** — benefits, best-case outcomes, opportunities.
4. **Black** — risks, worst-case scenarios, what breaks.
5. **Red** — gut feelings and emotional reactions. No justification required.
6. **Green** — creative alternatives. Challenge the framing.
7. **Blue (closer)** — synthesize, recommend, commit.

## Input Handling

- Path detected (contains `/`, `.md`, `.ts`, etc.) — Read the file first, then walk the hats on the decision it describes.
- Topic string — walk the hats directly.

## Example

<example>
Topic: "Should we migrate the payment pipeline to Stripe Connect?"

<thinking>Blue hat opens — scope is load-bearing because full migration, dual-run, and spike each produce different White/Black hat findings later. Lock scope before the factual and risk passes.</thinking>

Calls AskUserQuestion:
- Question (Blue): "What's the real decision here?"
- Options:
  - `(Recommended) Full migration within one quarter` — keeps scope tight
  - `Dual-run Stripe Connect alongside current stack` — safer but expensive
  - `Just a technical spike to evaluate` — low-commitment learning
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

After the closing Blue hat, produce:
- Summary of each hat's top finding (one line each).
- Consolidated recommendation.
- Rejected alternatives with reasons.
- Open questions that warrant more data.
