# thinking-systems

25 classical thinking tools packaged as Claude Code skills and slash commands. Each tool runs as a guided dialogue — one decision per round, with recommendations and tradeoffs.

## What's inside

| Category | Tools |
|---|---|
| **Decision Making** | `six-thinking-hats`, `eisenhower-matrix`, `second-order-thinking`, `decision-matrix`, `impact-effort-matrix`, `ladder-of-inference`, `hard-choice-model`, `ooda-loop`, `cynefin-framework`, `confidence-determines-speed-vs-quality` |
| **Problem Solving** | `ishikawa-diagram`, `abstraction-laddering`, `conflict-resolution-diagram`, `zwicky-box`, `productive-thinking-model`, `inversion`, `issue-trees`, `first-principles` |
| **Systems Thinking** | `iceberg-model`, `connection-circles`, `concept-map`, `balancing-feedback-loop`, `reinforcing-feedback-loop` |
| **Communication** | `situation-behavior-impact`, `minto-pyramid` |

## How to use

Two invocation paths — both run the same guided dialogue.

### Slash command (explicit)

```
/thinking-systems:first-principles should I rewrite the auth layer
/thinking-systems:eisenhower-matrix this week's task list
/thinking-systems:cynefin-framework incident triage
```

### Auto-trigger (implicit)

Skills auto-fire when your prompt matches their description triggers. Examples:

- "I'm stuck — let me think from scratch" → `first-principles`
- "What happens 6 months after we ship this?" → `second-order-thinking`
- "How would this fail?" → `inversion`
- "Urgent vs important — what do I work on today?" → `eisenhower-matrix`

## Per-tool skill shape

Each skill walks through the tool's stages one round at a time using `AskUserQuestion`:

1. Recommendation marked `(Recommended)` with a one-line rationale.
2. 2–3 alternatives, each with its tradeoff.
3. `Not sure - you decide` escape hatch.

Footer each round: `Reply format: 1a 2b or defaults`.

On completion, the skill synthesizes across all stages into a recommendation and next step.

## Credits

Methods are classical thinking frameworks (Eisenhower, de Bono, Boyd, Snowden, Goldratt, Ackoff, Minto, and others). Individual attributions appear in each skill where relevant.
