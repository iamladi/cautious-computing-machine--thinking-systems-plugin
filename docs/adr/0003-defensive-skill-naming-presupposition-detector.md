# Name the defensive framing Skill `presupposition-detector` (narrow), not `frame-audit` (wide)

**Status**: accepted

## Context

The defensive Skill in the framing bundle had three candidate names with different load-bearing moves:
- `presupposition-detector` (Claude) — load-bearing: surfacing the unstated assumption embedded as fact in the grammar
- `frame-audit` (Codex) — load-bearing: premise-before-rebuttal extraction (wider scope; subsumes role-assignment, preferred-answer-design, default anchors, false binaries alongside presupposition)
- `frame-defense` (Gemini) — load-bearing: pre-agreement extraction (similar to Codex but different verb)

Codex's `frame-audit` is the most general; Claude's `presupposition-detector` is the most testable.

## Decision

Use `presupposition-detector` with the narrower load-bearing move (surfacing the unstated assumption embedded as fact). Document Codex's wider scope (role-assignment, preferred-answer-design, default anchors, false binaries) as **named sub-passes inside Loop Round 2**, not as the load-bearing move itself.

## Rationale

The plugin's `.gnhf` audit measures whether the load-bearing phrase appears verbatim across description / Priorities / Role / Input Handling / Example / Completion. A narrow, testable move ("surface every grammatically-embedded assumption") passes the audit cleanly because the failure mechanic is observable (a `since` / `given that` / `now that` / `when we` / `once we've` clause survives unsurfaced). A wider move ("premise-before-rebuttal extraction") is less testable because "premise" can include presuppositions, role assignments, defaults, and binaries — five different failure modes that resist a single audit clause.

Codex's wider scope is preserved by listing role-assignment, preferred-answer-design, default anchors, and false binaries as explicit Round 2 sub-passes. This gives the maintainer the wider coverage without sacrificing audit cleanliness.

## Consequences

- Slash command path is `/thinking-systems:presupposition-detector`.
- Auto-trigger keywords include "presupposition", "scan this for assumptions", "what am I missing here", "this feels off".
- Wider-scope detection (role-assignment, preferred-answer-design) still happens, but inside the Loop, not in the load-bearing audit.
- Future maintainer who prefers `frame-audit` can rename via global find-replace; the .gnhf audit cleanliness survives the rename because the load-bearing phrase is the move's content, not its skill-name.
