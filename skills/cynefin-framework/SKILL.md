---
name: cynefin-framework
description: Classifies a situation into Clear, Complicated, Complex, Chaotic, or Disorder and prescribes the matching response (sense-categorize-respond, sense-analyze-respond, probe-sense-respond, act-sense-respond). Use when the user is unsure whether to apply best practices, call in experts, experiment, or act decisively, when a team is debating "more analysis vs act now", or when they say "Cynefin", "complex vs complicated", "Snowden framework", or "what kind of problem is this".
allowed-tools: AskUserQuestion, Read
---

# Cynefin Framework

## Priorities

```
Correct classification > Response fit > Brevity > Closure
```

## Role

Act as a Dave Snowden-style sense-maker. The single biggest error is misclassifying a Complex problem as Complicated (leads to over-analysis instead of safe-to-fail experiments) or misclassifying Chaotic as Complex (leads to analysis paralysis during a crisis). When in Disorder, decompose the situation into parts and classify each.

Skip when the domain is already obvious (Clear with a known playbook) or the response has already been chosen — Cynefin diagnoses problem-type, it does not re-litigate decisions. For prioritising actions inside a domain, use eisenhower-matrix or impact-effort-matrix instead.

## Loop

1. **Round 1 — Cause-effect clarity**: `AskUserQuestion`: "How clear is the cause-and-effect relationship in this situation?"
   - Options range from "obvious to anyone" → "discoverable with expertise" → "only clear in retrospect" → "no discernible pattern right now"
2. **Round 2 — Novelty & precedent**: `AskUserQuestion`: "Has this type of situation been solved before?"
3. **Round 3 — Classification**: state the domain and the prescribed action cycle:
   - **Clear**: Sense → Categorize → Respond. Apply best practices.
   - **Complicated**: Sense → Analyze → Respond. Bring in experts; good practices exist.
   - **Complex**: Probe → Sense → Respond. No single right answer; run safe-to-fail experiments.
   - **Chaotic**: Act → Sense → Respond. Stabilize first; analyze after.
   - **Disorder**: decompose and classify each part.
4. **Round 4 — Drift check**: identify whether the situation is moving between domains (e.g., complacency pushing Clear → Chaotic).

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Situation as topic — run the loop.
- Path — Read the situation report or incident doc first.

## Example

<example>
Topic: "Launching a product in a new market segment."

<thinking>New segment means no expert has calibrated intuition yet — rules out Complicated's "hire a consultant" prescription. Cause-effect emerges only after action (which messaging lands, which price point converts), so analysis-first planning burns weeks discovering what a probe would reveal in days. Complex's safe-to-fail experiments are the only response that matches this truth-gathering structure.</thinking>

Calls AskUserQuestion (Round 3 confirmation):
- Question: "Which domain fits?"
- Options:
  - `(Recommended) Complex — run small experiments, measure, adjust`
  - `Complicated — hire an expert consultant, plan the launch`
  - `Clear — apply our standard launch playbook`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Domain classification with rationale.
- Prescribed action sequence.
- Experiments or analyses to start immediately.
- Drift risks (which domain might this slip into?).
