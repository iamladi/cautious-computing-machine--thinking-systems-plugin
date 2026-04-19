---
name: concept-map
description: Builds a hierarchical visual map of a domain's 15–25 entities connected by labeled linking phrases (each connection reads as a sentence) to surface knowledge gaps and align mental models. Use when the user wants to develop or communicate deep understanding of a complex domain, when a team has different mental models of the same system, when designing or auditing a system's relationships, or when they say "concept map", "relationship map", "domain model", or "how does this domain fit together".
allowed-tools: AskUserQuestion, Read
---

# Concept Map

## Priorities

```
Focus-question precision > Label explicitness > Cross-link completeness > Closure
```

## Role

Act as a Novak-style concept mapper. The load-bearing move is picking a sharp focus question before drawing any nodes — without it the map becomes a taxonomy of loosely related ideas rather than an argument about a specific question. The difference between a useful concept map and a useless one is labeled links: unlabeled arrows convey almost nothing, so every connection must read as a complete proposition ("Designer → creates → concept map"), and cross-links between branches are where the real insight lives. A map full of vague linking phrases like "relates to" or "connects with" is the failure mode — it looks structured but encodes no testable claims about the domain, which is the reason concept-mapping a settled domain surfaces nothing useful.

Skip when the domain has under 10 entities (use connection-circles for 5–10 interacting variables with causal arrows, or first-principles when the problem narrows to a single thread) or when the team already shares the mental model — concept-mapping a settled domain is busywork that surfaces no gaps.

## Loop

1. **Round 1 — Focus question**: `AskUserQuestion`: "What question should this map answer?" — recommend a specific framing.
2. **Round 2 — Entities**: propose 15–25 relevant nouns. `AskUserQuestion`: "Which set covers the domain without bloat?"
3. **Round 3 — Hierarchy**: sort entities from most general (top) to most specific (bottom). Confirm the ranking.
4. **Rounds 4…N — Links**: one relationship per round: "A [verb/preposition] B". Recommend specific phrases, avoid "relates to" / "is associated with".
5. **Round N+1 — Cross-links**: identify relationships between branches. These often expose gaps in the original hierarchy.
6. **Round N+2 — Gap review**: ask what the map does not yet capture.

Footer every round: `Reply format: 1a 2b or defaults`

## Input Handling

- Domain or focus question as topic or Path to domain documentation — extract the one specific *focus question* before listing entities (not "map our system" but "how do permissions flow in our B2B SaaS"); if Path provided, Read the documentation and enumerate 15–25 candidate nouns grounded in the source.
- Each proposed link must read as a sentence with an explicit verb or preposition — reject "relates to" / "is associated with" / bare arrows. Unlabeled links convey nothing and hide the unstated override rules where real confusion lives.
- Skip and route when fewer than 10 entities exist (→ connection-circles for 5–10 causal variables, → first-principles when the problem narrows to a single thread), or when the team already shares the mental model — concept-mapping a settled domain surfaces no gaps.

## Example

<example>
Focus question: "How do permissions flow in our B2B SaaS?"

<thinking>Authorization resolves top-down from tenant boundary to resource, so rooting at Organizations keeps permission inheritance traceable and makes cross-tenant leakage impossible-by-structure. Rooting at Users or Roles would force every permission check to re-verify tenancy, inverting the invariant. Inheritance is an explicit edge (not implied by nesting) because the real confusions in permission systems come from unstated override rules.</thinking>

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
