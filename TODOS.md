# TODOS

Deferred items captured during planning. Each entry says why it matters, what to know when revisiting, and what must exist first.

## Wider-scope `frame-audit` Skill (v0.3.0 candidate)

Why: Codex's preferred shape for the defensive Skill subsumes role-assignment, preferred-answer-design, default anchors, and false binaries alongside grammatical presupposition. The narrower `presupposition-detector` shipped in v0.2.0 catches the highest-leverage class but misses these.
Context: `presupposition-detector` Loop Round 2 already lists role-assignment / preferred-answer-design / default anchors as sub-passes. If user feedback shows the narrow scope misses too many non-grammatical Frame installations, expand. ADR-0003 documents the tradeoff.
Dependencies: User feedback on v0.2.0 `presupposition-detector` real-world usage; decision on whether to rename or add a new Skill.

## Per-channel framing adapters (Slack / async email)

Why: Gemini's "Naked Pacing in low-fidelity text" risk — pacing statements ("we've been going back and forth on this for weeks now") feel uncanny in async / text channels.
Context: v0.2.0 Skills assume the upcoming exchange is high-fidelity (synchronous voice or in-person). A `framing-async` companion or per-Skill channel-aware Round could detect the channel and warn against pacing in text-only contexts.
Dependencies: v0.2.0 ships first; gather feedback on cross-channel use.

## Brehm BYAF ("But You Are Free") autonomy-supportive wrapper

Why: Gemini contribution. Reactance research (Brehm 1966; Carpenter 2013) shows explicitly stating "the choice is yours" doubles success rate of the framing move.
Context: Currently a *named option* inside `frame-control` Round 4 (no-oriented question). Could be elevated to a dedicated Round (autonomy-supportive language wrapper) if reactance-as-miss-type telemetry justifies a dedicated step.
Dependencies: `conversational-recovery` Miss-type tracking shows reactance-to-pressure as the most common miss type in field use.

## Defensive companion to `concession-then-ask`

Why: Detect concessions made *to* you that are trivial / fake / wrong-target. Symmetric to the offensive `concession-then-ask` audit.
Context: When a counterpart concedes "I know your time is valuable" to set up an ask, the user should recognise the trivial concession the same way the offensive Skill rejects it.
Dependencies: User feedback on whether this pattern appears often enough to earn a dedicated Skill, or whether it folds into `presupposition-detector` as a new Round.

## Programmatic `.gnhf` audit CLI

Why: Audit currently runs out-of-band; the v0.2.0 plan replaces it with an `awk` slot-by-slot check. A real CLI (`bun run audit`) would let CI enforce the 5-slot invariant on every commit.
Context: `.gnhf/runs/` already records audit cycles. The CLI would walk every `skills/<name>/SKILL.md`, extract the load-bearing phrase from `description`, verify the phrase appears in Priorities / Role / Input Handling / Example / Completion, and exit non-zero with a slot-by-slot report on miss.
Dependencies: Decision on whether to embed audit logic in `scripts/` (Bun + TypeScript) or as a standalone tool. Plugin's existing `scripts/validate-plugin.ts` is a natural extension point.

## Audit-clause escape hatch template refresh

Why: Gemini blindspot #15 — current audit clauses re-run the loop indefinitely if the load-bearing move keeps missing. An explicit 2-attempt cap with route-to-alternative-skill would prevent edge-case lock-ins.
Context: Pattern would be: *"If the load-bearing move cannot be performed after 2 attempts, explain the limitation and offer to route the user to [Alternative Skill] or end the loop."* Requires updating the audit-clause text in all 25+ existing Skills (and the 4 new framing Skills).
Dependencies: Confirmed need from a real lock-in case (currently theoretical); review of which Skills already have implicit escape via `Not sure - you decide`.

## Long-input granularity guard for `presupposition-detector`

Why: Gemini blindspot #14 — pasting a 5,000-word email thread will explode the Says/Presupposes output and lose triage focus.
Context: Add a check at Round 1: if input >2,000 words, ask user to select the "most loaded" paragraph(s) before scanning.
Dependencies: User telemetry showing routine pastes >2,000 words. Currently low-incidence in practice.

## Runtime canonical-term lookup from CONTEXT.md

Why: Gemini blindspot #13 — `CONTEXT.md` is glossary at plan-write time but Skills don't read it at runtime. If a Skill could `Read CONTEXT.md` to confirm a canonical term before responding, terminology drift in user prompts would auto-resolve.
Context: Would require adding `CONTEXT.md` to the `allowed-tools: Read` whitelist for relevant Skills, plus a Loop step that does the lookup. Cost: extra token usage per invocation. Benefit: consistent canonical vocabulary across all Skills.
Dependencies: Demonstrated terminology-drift problem in real Skill output (currently theoretical).
