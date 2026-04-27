# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-04-27

### Added

- Framing-tactics skills in the Communication category (and matching slash commands):
  - **frame-control** — plan a statement+question pair after reading the frame already running; includes Round 0 pre-suasion check.
  - **presupposition-detector** — defensive scan of an inbound for grammatically-embedded assumptions and Heritage-style optimised questions.
  - **concession-then-ask** — pair a real pre-emptive disclosure (or Ackerman 65/85/95/100 numerical anchor sequence) with a hard question.
  - **conversational-recovery** — class-shift recovery loop after a missed frame, with four-way miss-type diagnosis (not-heard / heard-and-rejected / reactance / wrong-problem-frame).

### Changed

- `situation-behavior-impact` — added skip-and-route to `frame-control` when recipient is hostile/higher-status; added optional concession-check round.
- `conflict-resolution-diagram` — added presupposition-surfacing pass before extracting positions.
- `minto-pyramid` — added frame-fit framing of the audience-fit check; routes to `frame-control` for hostile/skeptical readers.
- `abstraction-laddering` — added skip-and-route to `frame-control` when the "stuck problem" is a stuck conversation.
- `ooda-loop` — added explicit framing of frame-reading as an Orient act; routes to `frame-control` for explicit statement+question planning.
- `ladder-of-inference` — added skip-and-route to `presupposition-detector` for incoming loaded messages.
- README.md — Communication category expanded; auto-trigger examples expanded; Credits expanded to name modern conversational-architecture lineages including Heritage and Oyserman.

## [0.1.0] - 2026-04-19

### Added

- Initial plugin scaffolding.
- 25 guided-dialogue skills covering classical thinking tools:
  - **Decision Making (10)**: six-thinking-hats, eisenhower-matrix, second-order-thinking, decision-matrix, impact-effort-matrix, ladder-of-inference, hard-choice-model, ooda-loop, cynefin-framework, confidence-determines-speed-vs-quality.
  - **Problem Solving (8)**: ishikawa-diagram, abstraction-laddering, conflict-resolution-diagram, zwicky-box, productive-thinking-model, inversion, issue-trees, first-principles.
  - **Systems Thinking (5)**: iceberg-model, connection-circles, concept-map, balancing-feedback-loop, reinforcing-feedback-loop.
  - **Communication (2)**: situation-behavior-impact, minto-pyramid.
- 25 matching slash commands (`/thinking-systems:<tool>`) as thin wrappers over the skills.
