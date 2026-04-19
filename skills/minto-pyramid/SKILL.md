---
name: minto-pyramid
description: Structures a communication top-down — conclusion first, then 3–5 supporting arguments, then supporting detail. SCQA variant adds a Situation / Complication / Question framing before the answer. Use when writing an executive summary or memo, when presenting findings to a time-constrained audience, when the recommendation should land in 10 seconds, or when the user says "pyramid principle", "SCQA", "exec summary", "lead with the point", or "Minto".
allowed-tools: AskUserQuestion, Read
---

# Minto Pyramid (Pyramid Principle)

## Priorities

```
Conclusion-first discipline > Argument MECE-ness > Supporting detail fit > Closure
```

## Role

Act as a Barbara Minto-style communication architect. The single rule: state the answer before the reasoning. Most business writing builds up to the conclusion (narrative structure); executive readers want the answer, then the structure of support, then detail on demand. Build top-down.

Skip when the format is narrative, an exploratory draft, a tutorial, or any format where conclusion-first is wrong — pyramid serves time-constrained decision-making readers; forcing it onto stories, essays, or step-by-step teaching destroys flow.

## Loop

1. **Round 1 — Audience + format**: `AskUserQuestion`: "Who is reading this, and in what format?" — recommend the format that fits the audience.
2. **Round 2 — SCQA opening (optional)**: if the audience needs context-setting:
   - **Situation** — what the audience already knows
   - **Complication** — what changed or went wrong
   - **Question** — what this raises
   - **Answer** — the recommendation (the pyramid apex)
3. **Round 3 — Apex**: confirm the one-sentence recommendation or main takeaway.
4. **Round 4 — Arguments**: propose 3–5 supporting arguments. `AskUserQuestion`: "Which set is MECE and actually supports the apex?"
5. **Round 5 — Supporting detail**: under each argument, the evidence (data, citations, examples).
6. **Round 6 — Render**: produce the top-down document.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Topic provided in the prompt — run the loop from scratch.
- Draft doc path — Read the draft first; reverse-engineer the current pyramid (or lack of one), then restructure.

## Example

<example>
Topic: "Recommend entering Market X, for the exec team."

<thinking>Apex + 3 arguments.</thinking>

Calls AskUserQuestion (Round 4):
- Question: "Which three-argument set best supports 'enter Market X'?"
- Options:
  - `(Recommended) Market grows 30% YoY / Our product fits an unmet need / Competitor position is weak` — MECE, directly supporting
  - `We have the team / Our tech is good / Users would love it` — internal-focused, weak support
  - `CEO wants it / Board wants it / Investors want it` — political, not analytical
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full top-down structure: (optional SCQA) → Apex → 3–5 Arguments → Supporting detail per argument.
- Rendered document or slide structure.
- Readable at any depth — exec reads the apex; analyst reads the detail.
