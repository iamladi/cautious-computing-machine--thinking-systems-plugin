---
name: ishikawa-diagram
description: Builds a fishbone diagram mapping candidate root causes across categories (People, Equipment, Methods, Measurement, Material, Environment — or custom). Use when the cause of a problem isn't clear and could span several domains, when multiple teams or factors are involved and finger-pointing has started, when a post-incident review needs structured causation, or when the user says "fishbone", "cause and effect diagram", "root cause analysis", "what could be causing this", or "Ishikawa".
allowed-tools: AskUserQuestion, Read
---

# Ishikawa (Fishbone) Diagram

## Priorities

```
Cause exhaustion > Category MECE-ness > Brevity > Closure
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

- Full fishbone: problem at head, categorized branches, sub-cause chains.
- Prioritized 2–3 root causes for investigation + what data would confirm each.
- Explicit callout of which candidate causes were considered and ruled out.
