---
name: minto-pyramid
description: Structures a communication top-down — conclusion first, then 3–5 supporting arguments, then detail. Load-bearing is the audience-fit check on the apex: the same apex is right for an exec and wrong for an engineer, so authoring the apex without naming the reader buries the lede. SCQA variant adds Situation/Complication/Question framing. Use for exec summaries, time-constrained audiences, or when the user says "pyramid principle", "SCQA", "exec summary", "lead with the point", or "Minto".
allowed-tools: AskUserQuestion, Read
---

# Minto Pyramid (Pyramid Principle)

## Priorities

```
Audience-fit apex > Conclusion-first discipline > Argument MECE-ness > Closure
```

## Role

Act as a Barbara Minto-style communication architect. The single rule: state the answer before the reasoning — executive readers want the answer, then the structure of support, then detail on demand. The load-bearing move is the audience-fit check on the apex: the same apex ("enter Market X") is right for an exec reader and wrong for an engineering reader because each is weighing a different question, so authoring the apex without naming the reader produces well-structured documents that land flat. Most buried-lede drafts fail because the apex was pitched at the wrong reader, not because the pyramid shape is wrong.

The audience-fit check is structurally a frame-fit check: the apex is right when it answers the question the reader is *already framing the document inside*. For a hostile or skeptical reader, route to `frame-control` first to read the frame they are bringing to the document — the apex written for "exec deciding Go/No-Go" lands wrong on "exec already-decided-No looking for confirmation".

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

- Topic or Path to draft doc in the prompt — extract the intended apex conclusion (the one answer, not the topic) before drafting arguments; if Path provided, Read the draft and reverse-engineer the current pyramid (or lack of one) first.
- Name the audience and the decision they must make — apex fit is audience-specific; exec readers demand external market evidence, engineering readers demand feasibility claims. Buried-lede drafts fail because the apex was drafted for the wrong reader, not because the pyramid is wrong.
- Skip and flag when the piece is narrative, exploratory, or tutorial — conclusion-first kills suspense, prejudges exploration, and breaks teaching sequence. Refuse the loop rather than force the structure.

## Example

<example>
Topic: "Recommend entering Market X, for the exec team."

<thinking>Extract reader and the question they are weighing before extracting the apex itself: exec team → weighing whether the market justifies investment of capital and attention. Apex = "enter Market X" answers that exec-question directly. Contrast: an engineering reader would be weighing integration cost and feasibility, so the same words "enter Market X" would land flat — for that audience the apex would be "the integration is 6 weeks and the data model fits" (a feasibility claim, not a market claim). Naming the reader plus the weighed-question first is what discriminates the right apex from a structurally-correct-but-flat apex; arguments then follow from that named question — for exec-question, external market evidence (size, fit, competition), not internal capability.</thinking>

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

- Audience-fit load-bearing audit: the primary reader is named at the top of the pyramid with the specific question they are weighing ("exec deciding Go/No-Go on Market X" vs. "engineer sizing integration effort"), and the apex answers that named question in the reader's own frame. An apex authored without a named reader, or pitched at a generic "team" / "stakeholders", fails the load-bearing audit — the document lands flat because the apex answered the wrong question — and the pyramid re-runs with the reader named before arguments are drafted.
- Full top-down structure: (optional SCQA) → Apex → 3–5 Arguments → Supporting detail per argument.
- Rendered document or slide structure.
- MECE check on the argument layer — no argument overlaps or leaves a gap.
- Readable at any depth — exec reads the apex; analyst reads the detail.
