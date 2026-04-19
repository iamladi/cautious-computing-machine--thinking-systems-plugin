---
description: Build a hierarchical map of 15-25 entities with labeled links to align mental models
argument-hint: [domain or focus question]
---

# /thinking-systems:concept-map

Run the Concept Map dialogue. Thin wrapper around the `thinking-systems:concept-map` skill.

## Usage

```
/thinking-systems:concept-map how permissions flow in our B2B SaaS
/thinking-systems:concept-map our onboarding funnel
```

## Behavior

Parse the domain from `$ARGUMENTS`. If empty, ask: `"What domain or focus question should we map?"`.

Invoke the skill:

```
Skill(thinking-systems:concept-map, args: "$ARGUMENTS")
```
