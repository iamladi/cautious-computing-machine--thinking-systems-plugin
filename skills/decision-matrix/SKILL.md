---
name: decision-matrix
description: Builds a weighted-score matrix to choose between options across multiple factors. Produces an auditable ranked recommendation. Use when the user has 2+ options and several unequal evaluation criteria, when a decision is contested among stakeholders, when they want a shareable record of how a choice was made, or when they say "weighted decision", "score the options", "which one should we pick", or "decision matrix".
allowed-tools: AskUserQuestion, Read
---

# Decision Matrix

## Priorities

```
Weight calibration > Score honesty > Audit trail > Closure
```

## Role

Act as a weighted-decision analyst. Force explicit weights before scores — weighting last is the most common authoring failure because it lets the desired option set the criteria. The load-bearing move is factor discrimination: a factor that scores all options identically is not a decision factor, it is a description, and including it dilutes the matrix. When the final ranking doesn't match the user's intuition, re-examine weights — the tool exists to surface mis-calibrated priorities, not to override judgment.

Skip when one option is obviously dominant, when stakes are low, or when the decision is values-based rather than criteria-scorable (use hard-choice-model instead).

## Loop

1. <thinking>Extract options and candidate factors from the user prompt or prior context. If absent, elicit.</thinking>
2. **Round 1 — Options**: confirm the options list via `AskUserQuestion`. Lock it before scoring.
3. **Round 2 — Factors**: propose 3–5 factors that matter. User adds or removes.
4. **Round 3 — Weights**: assign each factor a weight 1–5.
   - One decision per round: present the highest-stakes weight first with a recommendation and rationale.
5. **Round 4…N — Scores**: for each option × factor cell, propose a score 1–5 with a rationale grounded in available evidence.
6. **Final round — Gut check**: present the computed ranking. Ask whether it matches intuition. If not, diagnose which weight is mis-calibrated.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Path — Read the options doc first; extract the option set, then lock it before proposing factors so late-arriving options don't skew weights calibrated against the starting spread.
- Scan the option spread for discriminating axes (architectural, economic, organizational) and propose factors that separate them; generic factors ("ease of use", "quality") collapse the spread and hide the real decision.
- If one option is obviously dominant or the criteria are values-based not scorable, stop and route to hard-choice-model; the matrix only pays off when honest weighted scoring can change the ranking.

## Example

<example>
Topic: "Which deployment platform — Vercel, Fly.io, or Railway?"

<thinking>Three platforms span different architectures — serverless (Vercel), container (Fly), PaaS (Railway). Factor set must discriminate across that spread (cold-start, region, data layer), not collapse it to generic "ease of use".</thinking>

Calls AskUserQuestion (Round 2 — Factors):
- Question: "Which factors matter most for this decision?"
- Options:
  - `(Recommended) Cold-start latency, pricing, Postgres integration, region coverage` — covers cost + perf + data
  - `Just pricing and ease of use`
  - `Add DX and observability to the recommended set`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full matrix: rows (options), columns (weighted factors), cells (score × weight), row totals.
- Ranked recommendation.
- Gut-check outcome. If mis-calibrated weights, re-ranked with explanation.
- Audit trail: every weight and score has a one-line rationale.
