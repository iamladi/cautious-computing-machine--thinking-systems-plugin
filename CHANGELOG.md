# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-04-19

### Added

- Initial plugin scaffolding.
- 25 guided-dialogue skills covering classical thinking tools:
  - **Decision Making (10)**: six-thinking-hats, eisenhower-matrix, second-order-thinking, decision-matrix, impact-effort-matrix, ladder-of-inference, hard-choice-model, ooda-loop, cynefin-framework, confidence-determines-speed-vs-quality.
  - **Problem Solving (8)**: ishikawa-diagram, abstraction-laddering, conflict-resolution-diagram, zwicky-box, productive-thinking-model, inversion, issue-trees, first-principles.
  - **Systems Thinking (5)**: iceberg-model, connection-circles, concept-map, balancing-feedback-loop, reinforcing-feedback-loop.
  - **Communication (2)**: situation-behavior-impact, minto-pyramid.
- 25 matching slash commands (`/thinking-systems:<tool>`) as thin wrappers over the skills.
