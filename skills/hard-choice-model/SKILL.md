---
name: hard-choice-model
description: Classifies a decision by impact (low/high) and comparability (easy/hard) into No-Brainer / Apples-and-Oranges / Big Choice / Hard Choice, then matches a deliberation strategy. Use when the user is spending too much time on a decision and can't tell if the effort is justified, when a decision feels hard but they can't say why, or when they say "should I even be thinking about this", "is this worth deliberating", "stuck between options", or "hard choice".
allowed-tools: AskUserQuestion, Read
---

# Hard Choice Model

## Priorities

```
Classification accuracy > Deliberation match > Brevity > Closure
```

## Role

Act as a decision-type triager. The goal is not to make the decision — it is to determine what kind of decision this is, so the user applies the right amount of deliberation. A Hard Choice (high impact, hard to compare) cannot be resolved by more analysis; it turns on values and identity, not spreadsheets.

## Loop

1. **Round 1 — Impact**: `AskUserQuestion`: "How much does this decision actually affect your life/organization?"
   - Recommendation marked, alternatives with rationale, escape hatch.
2. **Round 2 — Comparability**: `AskUserQuestion`: "How easily can you compare the options on concrete dimensions?"
3. **Round 3 — Classification**: state the quadrant and prescribe the strategy:
   - **No-brainer** (low impact, easy): decide quickly. Stop deliberating.
   - **Apples and Oranges** (low impact, hard): pick either. The comparison isn't worth resolving.
   - **Big Choice** (high impact, easy): gather data, compare carefully, take time.
   - **Hard Choice** (high impact, hard): no rational comparison will resolve this. Turn to values: what kind of person/organization do I want to be?
4. **Round 4 — Strategy fit**: confirm the prescribed strategy matches the user's bandwidth; adjust if not.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Decision as topic — run the loop.
- Path — Read the doc first; classify the decision it describes.

## Example

<example>
Topic: "Take the new job or stay?"

<thinking>Impact is high. Comparability depends on how the two offers compare on comparable dimensions.</thinking>

Calls AskUserQuestion (Round 2):
- Question: "Can you compare the two options on the same dimensions (salary, seniority, growth)?"
- Options:
  - `(Recommended) Yes, most dimensions map cleanly` → Big Choice, invest analysis time
  - `Mostly — but the cultural fit is hard to judge` → Big Choice leaning Hard
  - `No — they are fundamentally different paths (management vs IC)` → Hard Choice, turn to values
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Quadrant classification with rationale.
- Prescribed strategy + rough time budget.
- If Hard Choice: surface the values at stake, not a scoring exercise.
- Suggested next action consistent with the class.

## Topic

$ARGUMENTS
