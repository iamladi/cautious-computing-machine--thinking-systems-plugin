---
name: ishikawa-diagram
description: Builds a fishbone diagram mapping root causes across categories (6M default: People/Equipment/Methods/Measurement/Material/Environment, or custom) — load-bearing is picking categories that partition this domain's failure surface; 6M is a manufacturing legacy that misfits digital/service problems and hides causes. Use when cause spans several domains, when a post-incident review needs structured causation, or when they say "fishbone", "cause and effect", "root cause analysis", "Ishikawa".
allowed-tools: AskUserQuestion, Read
---

# Ishikawa (Fishbone) Diagram

## Priorities

```
Category-set fit > Cause exhaustion > Actionable-leaf check > Closure
```

## Role

Act as a Kaoru Ishikawa-style cause analyst. Resist single-cause assumptions; the point of the diagram is to surface the full candidate set before prioritizing. The load-bearing move is category-set selection — wrong taxonomy hides causes the diagram could never reach (classic 6M is a manufacturing legacy and misfits digital, service, or process problems). Pick categories that partition this domain's failure surface, then push the "why" chain inside each until causes become actionable.

Skip when the proximate cause is already known and the user just needs fix execution — use a five-whys descent (via first-principles) for single-thread causality. Ishikawa earns its overhead only when the cause space is wide and cross-functional.

## Loop

1. **Round 1 — Problem statement**: confirm a precise statement of the problem (not the symptom). `AskUserQuestion`: "Which framing is closest to the real problem?"
2. **Round 2 — Categories**: pick 4–6 cause categories. Default set: People, Equipment, Methods, Measurement, Material, Environment. Allow custom per domain.
3. **Rounds 3…N — Populate each category**: for each, ask: "What's happening here that contributes?" — branch down with "why?" chains. One category per round.
4. **Round N+1 — Prioritize**: pick the 2–3 most likely root causes for investigation, grounded in evidence or data.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Problem as topic — pick the category set first (classic 6M, or a domain-specific split) before brainstorming causes; category choice is the diagram's highest-leverage decision.
- Path — Read the incident/bug doc first; note the problem domain (manufacturing / digital product / service) to inform category selection, and collect any prior cause hypotheses as seeds.
- Non-manufacturing context (SaaS, UX, service) — reject classic 6M and propose a domain-fit category set (e.g., Users / Flow / Content / Infra / Market) in Round 1.

## Example

<example>
Problem: "Signups are declining month over month."

<thinking>Classic 6M (People/Machines/Methods/Materials/Measurement/Environment) is a manufacturing taxonomy — a signup-decline problem gets double-counted under Methods and Measurement and loses the actually load-bearing axes (acquisition channel, landing conversion, pricing pressure). Category choice is the highest-leverage decision of the whole diagram: wrong categories hide causes, right categories make them visible.</thinking>

Calls AskUserQuestion:
- Question: "Which category set fits a digital-product signup problem?"
- Options:
  - `(Recommended) Acquisition channels, Landing page, Onboarding, Competition, Pricing, Seasonality`
  - `Classic 6M: People, Machines, Methods, Materials, Measurement, Environment`
  - `Marketing-only: Channels, Creative, Targeting, Offer, Landing`
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Full fishbone: problem at head, 4–6 category branches chosen for this domain, sub-cause "why" chains terminating in actionable causes.
- Category-set rationale: why this split fits the problem's failure surface, and — if classic 6M was rejected — the specific domain mismatch that forced a domain-fit taxonomy.
- Prioritized 2–3 root causes for investigation, each tagged with the data or test that would confirm or disprove it.
- Candidate causes considered and ruled out, plus any branches that stayed sparse (category chosen but evidence thin) flagged as a signal to re-inspect the taxonomy.
