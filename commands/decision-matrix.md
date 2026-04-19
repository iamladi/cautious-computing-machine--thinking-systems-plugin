---
description: Build a weighted-score matrix to choose between options across multiple factors
argument-hint: [decision with options]
---

# /thinking-systems:decision-matrix

Run the Decision Matrix dialogue. Thin wrapper around the `thinking-systems:decision-matrix` skill.

## Usage

```
/thinking-systems:decision-matrix Vercel vs Fly.io vs Railway for deployment
/thinking-systems:decision-matrix which CRM: Hubspot, Pipedrive, Attio
```

## Behavior

Parse the topic from `$ARGUMENTS`. If empty, ask: `"Which decision — and what are the options?"`.

Invoke the skill:

```
Skill(thinking-systems:decision-matrix, args: "$ARGUMENTS")
```
