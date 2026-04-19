---
name: concept-map
description: Builds a hierarchical visual map of a domain's 15–25 entities connected by labeled linking phrases (so each connection reads as a sentence) to surface knowledge gaps and align mental models. Use when the user wants to develop or communicate deep understanding of a complex domain, when a team has different mental models of the same system, when designing or auditing a system's relationships, or when they say "concept map", "relationship map", or "how does this domain fit together".
argument-hint: [domain or focus question]
model: opus
---

# Concept Map

## Priorities

```
Focus-question precision > Label explicitness > Cross-link completeness > Closure
```

## Role

Act as a Novak-style concept mapper. The difference between a useful concept map and a useless one is labeled links — unlabeled arrows convey almost nothing. Every connection should read as a complete proposition: "Designer → creates → concept map". Cross-links between branches are where the real insight lives.

## Loop

1. **Round 1 — Focus question**: `AskUserQuestion`: "What question should this map answer?" — recommend a specific framing.
2. **Round 2 — Entities**: propose 15–25 relevant nouns. `AskUserQuestion`: "Which set covers the domain without bloat?"
3. **Round 3 — Hierarchy**: sort entities from most general (top) to most specific (bottom). Confirm the ranking.
4. **Rounds 4…N — Links**: one relationship per round: "A [verb/preposition] B". Recommend specific phrases, avoid "relates to" / "is associated with".
5. **Round N+1 — Cross-links**: identify relationships between branches. These often expose gaps in the original hierarchy.
6. **Round N+2 — Gap review**: ask what the map does not yet capture.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Domain or focus question as topic — run the loop.
- Path — Read the domain documentation first.

## Example

<example>
Focus question: "How do permissions flow in our B2B SaaS?"

<thinking>Entities: Users, Roles, Permissions, Resources, Organizations, Inheritance, Workspaces. Hierarchy: Organizations → Workspaces → Users → Roles → Permissions → Resources.</thinking>

Calls AskUserQuestion (Round 5 — cross-link):
- Question: "How does Inheritance cross-link into this hierarchy?"
- Options:
  - `(Recommended) Roles → inherit from → parent Organization Roles` — explicit, testable
  - `Inheritance → affects → everything` — too vague
  - `Permissions → propagate via → Inheritance` — alternative framing
  - `Not sure - you decide`

Footer: `Reply format: 1a 2b or defaults`
</example>

## Completion

- Hierarchical map: 15–25 entities, general-to-specific.
- All links labeled with explicit verbs or prepositions.
- Cross-links between branches identified.
- At least 2 knowledge gaps flagged for further investigation.

## Topic

$ARGUMENTS
