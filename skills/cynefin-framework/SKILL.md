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

Act as a Dave Snowden-style sense-maker. The framework's value is routing a problem to the right response-type before tools are picked: Clear domains use known playbooks, Complicated domains use expert analysis, Complex domains require safe-to-fail experiments to let cause-and-effect emerge, Chaotic domains demand immediate stabilizing action. The load-bearing move is probing cause-and-effect knowability — ask whether a domain expert could reliably predict the outcome of a given action; if yes the domain is at most Complicated, if no it is Complex or Chaotic. The single biggest error is misclassifying Complex as Complicated (leads to over-analysis instead of probes) or Chaotic as Complex (leads to analysis paralysis during a crisis). When in Disorder, decompose the situation into parts and classify each.

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
- Path — Read the situation report or incident doc first; extract the specific action or decision being contemplated, not just the domain backdrop.
- Probe cause-effect knowability before classifying: if experts can predict outcomes (Clear/Complicated), if cause only emerges after action (Complex), or if stabilization must precede analysis (Chaotic). Skip the skill when classification is already settled upstream — re-litigating domain is zero-value work.

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

- Domain classification with the action sequence prescribed for that domain (sense-categorize-respond / sense-analyze-respond / probe-sense-respond / act-sense-respond).
- Knowability rationale: classification cites what IS or ISN'T knowable about cause-and-effect — best-practice known (Simple), expert analysis would reveal cause (Complicated), only retrospective coherence available (Complex), no cause-effect at all (Chaotic). A classification arrived at by "gut feel" without this probe is a misclassification signal and must be re-run.
- Experiments or analyses to start immediately use the domain's action verb — probes for Complex, analyses for Complicated, stabilizing acts for Chaotic; running best-practice plays in Complex or probes in Simple wastes the cycle and is a validation failure.
- Drift risks (which domain might this slip into?) with observable triggers that would reclassify, plus boundary cases where a short probe would disambiguate before committing to a strategy.
