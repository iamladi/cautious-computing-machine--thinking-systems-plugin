# Ship a 4-skill framing bundle (frame-control + presupposition-detector + concession-then-ask + conversational-recovery)

**Status**: accepted

## Context

The framing-tactics deep-research synthesis (`research/research-framing-tactics-deep.md`) produced two defensible bundles: a 3-skill set (Codex + Gemini consensus — fold `concession-then-ask` as a subroutine inside `frame-control`) and a 4-skill set (Claude — keep `concession-then-ask` standalone because its load-bearing move and failure mechanic are quantitatively distinct).

## Decision

Ship the 4-skill bundle. `concession-then-ask` is a top-level Skill, not a Round inside `frame-control`.

## Rationale

The plugin's existing house pattern splits on **mechanism**, not on menu (e.g., `balancing-feedback-loop` and `reinforcing-feedback-loop` are separate Skills despite both being "feedback loops"). `concession-then-ask` has its own load-bearing move (pre-emptive disclosure that earns the hard question), its own failure mechanic (trivial / fake / wrong-target concession), and its own quantitative discipline (Ackerman 65/85/95/100 numerical anchor sequence — no other Statement class has a numerical analog). Folding these into `frame-control` Round 3 would put two load-bearing phrases in competition for the same Completion section and dilute both `.gnhf` audits.

## Consequences

- Communication category grows from 2 → 6 Skills (parity with Systems Thinking at 5).
- Plugin grows 25 → 29 Skills total.
- Maintainer who later prefers the 3-skill shape can deprecate `concession-then-ask` and copy its Loop into `frame-control` Round 3 without breaking the other three Skills — reversal cost is real but contained.
