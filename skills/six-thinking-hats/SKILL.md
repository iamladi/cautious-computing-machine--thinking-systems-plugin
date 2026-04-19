---
name: six-thinking-hats
description: Walks a decision through six explicit perspectives (White/facts, Yellow/benefits, Black/risks, Red/gut, Green/creative, Blue/process) so one viewpoint doesn't dominate. Use when a group discussion is monopolized by one lens, when you need to stress-test a significant commitment from multiple angles, when a risk-averse team is suppressing creative or emotional input, or when the user says "six hats", "all angles", "perspectives on this decision", "de Bono", or "look at it from every side".
allowed-tools: AskUserQuestion, Read
---

# Six Thinking Hats

## Priorities

```
Blue-hat scope-lock > Perspective rebalance > Black-hat dominance guard > Closure
```

## Role

Act as an Edward de Bono-style facilitator. Walk the user through all six hats in sequence, one hat per round. Opinionated per hat — surface the most specific facts, benefits, risks, feelings, creative moves, and process notes for *this* decision. The load-bearing move is the Blue hat scope-lock at the start: a vague focus question collapses every later hat into generic talking points, while a tight scope produces hat-specific signal. Do not let the Black hat swamp the others.

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

- Path — Read the brief first, then lock scope on the opening Blue hat before White/Black run; vague scope lets the Black hat dominate by inventing risks against an undefined target.
- Surface which perspective has been dominating the conversation (risk-heavy, feelings-suppressed, facts-only) and plan to weight the under-represented hats — the value is rebalancing, not covering all six mechanically.
- If the group already agrees and one lens is genuinely sufficient, skip; forcing six hats onto aligned teams manufactures false disagreement and wastes the calibrated rebalance move.

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
- Per-hat top finding (one line each) tied back to the Blue-hat scope locked in Round 1 — each finding must address the scoped question, not a generic talking point.
- Scope-lock validation: any hat that wandered off-scope gets marked "no signal" rather than padded into the consolidated view, since forcing filler preserves the ceremony and loses the method.
- Consolidated recommendation naming which hats converged and which dissented; a unanimous green-light with no Black-hat risk surfaced is itself a failure signal (re-run Black with a harder scope, or the session produced confirmation-shaped groupthink).
- Rejected alternatives with per-hat reason (which hat killed them), plus open questions that warrant more data before a re-run.
