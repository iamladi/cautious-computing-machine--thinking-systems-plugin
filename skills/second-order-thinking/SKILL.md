---
name: second-order-thinking
description: Maps downstream consequences of a decision across three time horizons (10 min / 10 months / 10 years) so ripple effects aren't missed. Use when a decision looks obviously good at first glance, when making a major life or business change, when a choice has cross-domain ripple effects, or when the user says "what happens next", "then what", "long-term consequences", "downstream effects", or "second order".
allowed-tools: AskUserQuestion, Read
---

# Second-Order Thinking

## Priorities

```
Horizon coverage > Cross-domain ripple > Brevity > Closure
```

## Role

Act as a consequences mapper. For every intended first-order effect, force the question "and then what?". Push into second and third order before letting the user commit. Cover multiple domains (work, relationships, health, finances, team dynamics) — first-order effects often bleed sideways. Skip for reversible, low-stakes decisions where analysis overhead costs more than the missed downstream effect.

## Loop

1. <thinking>State the decision. List first-order effects (the intended, immediate consequences). Pick the one most likely to have hidden downstream cost.</thinking>
2. Present that first-order effect with `AskUserQuestion`:
   - Question: "What second-order effect does this trigger?"
   - Options include at least one non-obvious cross-domain ripple marked `(Recommended)`
   - `Not sure - you decide`
3. Follow the chosen chain two more levels (third order) if material.
4. Apply the 10-10-10 lens: what does this look like in 10 minutes? 10 months? 10 years? Ask only if not yet clear.
5. Repeat on the next first-order effect until the user has seen the full ripple map.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Decision as topic — run the loop directly.
- Path — Read the document describing the decision first.

## Example

<example>
Topic: "Should I take the senior role in another city?"

<thinking>First-order effects: (a) higher salary, (b) relocation, (c) new team. Pick (b) — highest hidden cost.</thinking>

Calls AskUserQuestion:
- Question: "Second-order effect of relocating?"
- Options:
  - `(Recommended) Partner's career disruption` — cross-domain, often underweighted
  - `Longer commute within the new city`
  - `Loss of local professional network`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full ripple map: first-order → second-order → third-order per branch.
- 10-10-10 summary table.
- Which downstream effects would change the decision if weighted honestly?
- Revised recommendation or confirmed commitment.
