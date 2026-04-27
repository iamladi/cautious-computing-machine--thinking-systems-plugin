# Add framing skills to Communication, not a new Conversation category

**Status**: accepted

## Context

All three independent analyses initially considered creating a new top-level **Conversation** category for the framing skills (live-interaction is structurally different from output-shaping like `minto-pyramid` or single-incident feedback like `situation-behavior-impact`). After cross-pollination refinement, all three converged on expanding the existing **Communication** category instead.

## Decision

Place all four framing Skills (`frame-control`, `presupposition-detector`, `concession-then-ask`, `conversational-recovery`) inside the existing **Communication** category. No new top-level category.

## Rationale

The plugin's existing categories — Decision Making (10), Problem Solving (8), Systems Thinking (5), Communication (2) — are intentionally broad and group on outcome-shape, not interaction-mode. Adding 4 framing Skills brings Communication to 6, finally giving it parity with Systems Thinking. A new Conversation category for 3 Skills (Codex's count) would create a thin category that competes with Communication for discoverability and forces every future communication-adjacent Skill to choose between two near-synonymous buckets.

## Consequences

- README.md `Communication` row gets all 4 new Skills.
- No URL changes (slash commands stay `/thinking-systems:<name>` regardless of category).
- Future addition of more conversation-specific Skills (e.g., a generic dialogue facilitator) can still earn a category split later if the count justifies it; deferring the split is cheaper than retracting one.
