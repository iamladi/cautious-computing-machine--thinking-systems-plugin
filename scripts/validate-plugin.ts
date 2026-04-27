#!/usr/bin/env bun
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";

const ROOT = new URL("..", import.meta.url).pathname;
const SKILLS_DIR = join(ROOT, "skills");

const FrontmatterSchema = z
  .object({
    name: z.string().min(1),
    description: z.string().min(50).max(500),
    "allowed-tools": z.string().min(1),
    version: z.string().optional(),
    audit: z.enum(["load-bearing-5-slot"]).optional(),
    "audit-refusal-gate": z.literal("required").optional(),
    "audit-lineage-attribution": z.literal("required").optional(),
    "audit-failure-mode-named": z.literal("required").optional(),
    "audit-residual-handoff": z.literal("required").optional(),
    "audit-reply-format-footer": z.literal("required").optional(),
    "audit-example-loop-anchor": z.literal("required").optional(),
  })
  .strict();

const CANONICAL_KEYS = new Set(Object.keys(FrontmatterSchema.shape));

type Issue = { skill: string; level: "error" | "warn"; message: string };

function parseFrontmatter(source: string): Record<string, string> | null {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const out: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^([A-Za-z-]+):\s*(.+)$/);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
}

function extractSkillReferences(roleText: string): string[] {
  const refs = new Set<string>();
  const primary = /(?:\buse\b|\bprefer\b|\broute(?:\s+up|\s+down)?\s+to\b|\bvia\b|→|\bgo\s+(?:straight\s+|directly\s+)?to\b)\s+([a-z][a-z-]+[a-z])(?:\s*,?\s*(?:or|and|\+)\s+([a-z][a-z-]+[a-z]))?/gi;
  for (const match of roleText.matchAll(primary)) {
    if (match[1]?.includes("-")) refs.add(match[1]);
    if (match[2]?.includes("-")) refs.add(match[2]);
  }
  const continuation = /[,.;—]\s+(?:or|and)\s+([a-z][a-z-]+[a-z])(?=\s+(?:when|for|because|—|if|to)\b|\s*[,.])/gi;
  for (const match of roleText.matchAll(continuation)) {
    if (match[1]?.includes("-")) refs.add(match[1]);
  }
  const reasonChain = /\b(?:or|and)\s+([a-z][a-z-]+[a-z])\s+when\b/gi;
  for (const match of roleText.matchAll(reasonChain)) {
    if (match[1]?.includes("-")) refs.add(match[1]);
  }
  return [...refs];
}

const STOPWORDS = new Set([
  "a","an","the","of","in","to","on","and","or","that","which","who","what",
  "before","after","when","with","by","for","is","was","be","been","being",
  "has","have","had","this","those","these","its","their","our","your",
  "some","any","but","then","than","into","onto","from","as","at","still",
  "not","only","also","both","either","neither","because","since","just",
  "very","more","most","they","them","you","one","two","each","every",
  "across","via","yet","over","about","between","among",
]);

function tokenizeFingerprint(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[-/]/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 4 && !STOPWORDS.has(t));
}

function extractLoadBearingPhrase(description: string): string | null {
  const m1 = description.match(/[Ll]oad-bearing(?:\s+move)?\s+is\s+([^.,;—:]+)/);
  if (m1) return m1[1];
  const m2 = description.match(/—\s*([^.,;—:]+?)\s+is\s+load-bearing/i);
  if (m2) return m2[1];
  const m3 = description.match(/([^.,;—:]{1,120}?)\s+is\s+load-bearing/i);
  if (m3) return m3[1];
  return null;
}

function pickFingerprintTokens(phrase: string): string[] {
  const toks = Array.from(new Set(tokenizeFingerprint(phrase)));
  toks.sort((a, b) => b.length - a.length || a.localeCompare(b));
  return toks.slice(0, 3);
}

function slotHasToken(slotText: string, token: string): boolean {
  const prefix = token.slice(0, Math.min(4, token.length));
  const norm = ` ${slotText.toLowerCase().replace(/[-/]/g, " ").replace(/[^a-z0-9\s]/g, " ")} `;
  return new RegExp(`\\s${prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(norm);
}

function validateLoadBearing(dir: string, body: string, fm: Record<string, string>): Issue[] {
  const issues: Issue[] = [];
  if (fm?.audit !== "load-bearing-5-slot") return issues;
  const description = fm?.description;
  if (!description) return issues;
  const phrase = extractLoadBearingPhrase(description);
  if (!phrase) {
    return [{ skill: dir, level: "error", message: `audit: load-bearing-5-slot opted in but description has no "[Ll]oad-bearing is X" phrase` }];
  }
  const tokens = pickFingerprintTokens(phrase);
  if (tokens.length === 0) return issues;

  const slots: Array<{ name: string; text: string }> = [];
  for (const sec of ["Priorities", "Role", "Input Handling", "Example", "Completion"]) {
    const re = new RegExp(`## ${sec}\\n([\\s\\S]*?)(?=\\n## |\\n*$)`);
    const m = body.match(re);
    slots.push({ name: sec, text: m ? m[1] : "" });
  }
  const exampleSlot = slots.find((s) => s.name === "Example");
  if (exampleSlot) {
    const tm = exampleSlot.text.match(/<thinking>([\s\S]*?)<\/thinking>/);
    if (tm) exampleSlot.text = tm[1];
  }

  const required = tokens.length >= 3 ? 2 : tokens.length;
  for (const slot of slots) {
    const hits = tokens.filter((t) => slotHasToken(slot.text, t));
    if (hits.length < required) {
      const missing = tokens.filter((t) => !hits.includes(t));
      issues.push({
        skill: dir,
        level: "error",
        message: `load-bearing audit: slot "${slot.name}" missing [${missing.join(", ")}]; need ≥${required} of [${tokens.join(", ")}]`,
      });
    }
  }
  return issues;
}

function extractRoundBlock(loopText: string, headerRe: RegExp): string | null {
  const lines = loopText.split("\n");
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (headerRe.test(lines[i])) { startIdx = i; break; }
  }
  if (startIdx === -1) return null;
  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (/^\d+\.\s+\*\*Round\b/.test(lines[i])) { endIdx = i; break; }
  }
  return lines.slice(startIdx, endIdx).join("\n");
}

function validateRefusalGate(dir: string, body: string, fm: Record<string, string>): Issue[] {
  if (fm?.["audit-refusal-gate"] !== "required") return [];
  const issues: Issue[] = [];

  const loopMatch = body.match(/## Loop\n([\s\S]*?)(?=\n## )/);
  if (!loopMatch) {
    return [{ skill: dir, level: "error", message: "audit-refusal-gate: ## Loop section missing" }];
  }
  const loop = loopMatch[1];

  const gateBlock = extractRoundBlock(loop, /\*\*Round\s+\d+\s+—\s+Counterpart status gate\s+\(refusal-first\)\*\*/);
  if (!gateBlock) {
    return [{ skill: dir, level: "error", message: 'audit-refusal-gate: Loop missing "**Round N — Counterpart status gate (refusal-first)**" header' }];
  }

  const requiredClasses = ["subordinate", "vulnerable", "unaware", "unclear"];
  const lower = gateBlock.toLowerCase();
  const missingClasses = requiredClasses.filter((c) => !lower.includes(c));
  if (missingClasses.length > 0) {
    issues.push({ skill: dir, level: "error", message: `audit-refusal-gate: gate round missing refusal class(es) [${missingClasses.join(", ")}]` });
  }

  const refusalPhrases = [/end the loop immediately/i, /do not draft/i, /loop ends/i];
  if (!refusalPhrases.some((re) => re.test(gateBlock))) {
    issues.push({ skill: dir, level: "error", message: 'audit-refusal-gate: gate round missing explicit refusal language ("end the loop immediately" / "do not draft" / "loop ends")' });
  }

  const orderingPhrases = [/fires?\s+\*?before\*?/i, /before any (?:offensive|concession|redeploy)/i, /cannot be bypassed/i];
  if (!orderingPhrases.some((re) => re.test(gateBlock))) {
    issues.push({ skill: dir, level: "error", message: 'audit-refusal-gate: gate round missing ordering invariant ("fires before ..." / "cannot be bypassed")' });
  }

  const completionMatch = body.match(/## Completion\n([\s\S]*?)(?=\n## |\n*$)/);
  if (!completionMatch) {
    issues.push({ skill: dir, level: "error", message: "audit-refusal-gate: ## Completion section missing" });
  } else {
    const comp = completionMatch[1];
    const bypassClause = /(?:if the gate was bypassed|gate.*bypass|bypassed.*gate)/i;
    if (!bypassClause.test(comp)) {
      issues.push({ skill: dir, level: "error", message: 'audit-refusal-gate: Completion missing gate-bypass failure clause ("If the gate was bypassed ...")' });
    }
    if (!/counterpart[- ]status gate/i.test(comp)) {
      issues.push({ skill: dir, level: "error", message: 'audit-refusal-gate: Completion missing "Counterpart-status gate" deliverable bullet' });
    }
  }

  const roleMatch = body.match(/## Role\n([\s\S]*?)(?=\n## )/);
  if (roleMatch) {
    const skipPara = roleMatch[1].split(/\n\s*\n/).find((p) => /Skip when/.test(p));
    if (skipPara) {
      const skipLower = skipPara.toLowerCase();
      const missing = requiredClasses.filter((c) => !skipLower.includes(c));
      if (missing.length > 0) {
        issues.push({
          skill: dir,
          level: "error",
          message: `audit-refusal-gate: Role 'Skip when' paragraph missing refusal class(es) [${missing.join(", ")}] — drift from gate's enforced classes`,
        });
      }
    }
  }

  const inputMatch = body.match(/## Input Handling\n([\s\S]*?)(?=\n## )/);
  if (inputMatch) {
    const inputLower = inputMatch[1].toLowerCase();
    const missing = requiredClasses.filter((c) => !inputLower.includes(c));
    if (missing.length > 0) {
      issues.push({
        skill: dir,
        level: "error",
        message: `audit-refusal-gate: Input Handling missing refusal class(es) [${missing.join(", ")}] — drift from gate's enforced classes`,
      });
    }
  }

  return issues;
}

function validateSkill(dir: string, knownSkills: Set<string>): Issue[] {
  const issues: Issue[] = [];
  const skillPath = join(SKILLS_DIR, dir, "SKILL.md");
  let body: string;
  try {
    body = readFileSync(skillPath, "utf8");
  } catch {
    return [{ skill: dir, level: "error", message: "SKILL.md missing" }];
  }

  const fm = parseFrontmatter(body);
  if (!fm) {
    return [{ skill: dir, level: "error", message: "frontmatter missing or malformed" }];
  }

  for (const key of Object.keys(fm)) {
    if (!CANONICAL_KEYS.has(key)) {
      issues.push({ skill: dir, level: "warn", message: `non-canonical frontmatter key "${key}"` });
    }
  }

  const parsed = FrontmatterSchema.safeParse(fm);
  if (!parsed.success) {
    for (const err of parsed.error.issues) {
      issues.push({
        skill: dir,
        level: "error",
        message: `${err.path.join(".")}: ${err.message}`,
      });
    }
  } else if (parsed.data.name !== dir) {
    issues.push({
      skill: dir,
      level: "error",
      message: `name "${parsed.data.name}" does not match directory "${dir}"`,
    });
  }

  const roleMatch = body.match(/## Role\n([\s\S]*?)(?=\n## )/);
  if (!roleMatch) {
    issues.push({ skill: dir, level: "error", message: "missing ## Role section" });
  } else {
    const roleBody = roleMatch[1];
    if (!/Skip when/.test(roleBody)) {
      issues.push({ skill: dir, level: "warn", message: "Role section lacks 'Skip when' anti-trigger" });
    }
    const rolePara = roleBody.trim().split(/\n\s*\n/).filter((p) => p.trim().length > 0);
    const personaPara = rolePara.find((p) => !/^Skip when/.test(p.trim()));
    const skipPara = rolePara.find((p) => /^Skip when/.test(p.trim()));
    if (rolePara.length < 2 || !personaPara || !skipPara) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Role should have persona paragraph followed by separate 'Skip when' anti-trigger paragraph",
      });
    }
    if (personaPara && !/^Act as\b/.test(personaPara.trim())) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Role persona paragraph should open with canonical 'Act as ...' phrasing",
      });
    }
    for (const ref of extractSkillReferences(roleBody)) {
      if (!knownSkills.has(ref) && ref !== dir) {
        issues.push({
          skill: dir,
          level: "warn",
          message: `Role references unknown skill "${ref}" (not a directory in skills/)`,
        });
      }
    }
  }

  for (const section of ["Priorities", "Loop", "Input Handling", "Example", "Completion"]) {
    const re = new RegExp(`^## ${section}\\b`, "m");
    if (!re.test(body)) {
      issues.push({ skill: dir, level: "error", message: `missing ## ${section} section` });
    }
  }

  const prioritiesMatch = body.match(/## Priorities\n([\s\S]*?)(?=\n## )/);
  if (prioritiesMatch) {
    const fence = prioritiesMatch[1].match(/```\n([\s\S]*?)\n```/);
    if (!fence) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Priorities should be a fenced code block containing the '>'-separated pipeline",
      });
    } else if (!/>/.test(fence[1])) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Priorities pipeline should separate stages with '>' (e.g. 'Depth > Rigor > Closure')",
      });
    }
  }

  const completionMatch = body.match(/## Completion\n([\s\S]*?)(?=\n## |\n*$)/);
  if (completionMatch) {
    const bulletCount = (completionMatch[1].match(/^- /gm) ?? []).length;
    if (bulletCount < 3) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `Completion has ${bulletCount} bullet(s); recommend ≥3 for a complete deliverable checklist`,
      });
    }
  }

  const FOOTER = "Reply format: 1a 2b or defaults";
  const loopMatch = body.match(/## Loop\n([\s\S]*?)(?=\n## )/);
  if (loopMatch) {
    const loopBody = loopMatch[1];
    const numberedSteps = (loopBody.match(/^\d+\.\s/gm) ?? []).length;
    if (numberedSteps < 2) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `Loop has ${numberedSteps} numbered step(s); recommend ≥2 for a structured loop`,
      });
    }
    if (!loopBody.includes("AskUserQuestion")) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Loop does not reference AskUserQuestion despite allowed-tools declaring it",
      });
    }
    if (!loopBody.includes(FOOTER)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `Loop missing canonical footer "${FOOTER}"`,
      });
    }
  }

  const exampleMatch = body.match(/## Example\n([\s\S]*?)(?=\n## )/);
  if (exampleMatch) {
    const exampleBody = exampleMatch[1];
    if (!exampleBody.includes(FOOTER)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `Example missing canonical footer "${FOOTER}"`,
      });
    }
    if (!/<example>[\s\S]*<\/example>/.test(exampleBody)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example missing <example>...</example> wrapper tags",
      });
    }
    if (!/<thinking>[\s\S]*?<\/thinking>/.test(exampleBody)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example missing <thinking>...</thinking> reasoning block",
      });
    }
    if (!exampleBody.includes("(Recommended)")) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example missing canonical '(Recommended)' option marker",
      });
    }
    if (!exampleBody.includes("Not sure - you decide")) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example missing canonical 'Not sure - you decide' fallback option",
      });
    }
    if (!exampleBody.includes("AskUserQuestion")) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example does not reference AskUserQuestion (should demo the tool declared in allowed-tools)",
      });
    }
    const innerMatch = exampleBody.match(/<example>\n([\s\S]*?)<\/example>/);
    const innerBody = innerMatch ? innerMatch[1] : exampleBody;
    if (!/^[A-Z][A-Za-z ]{1,30}: "/m.test(innerBody)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example should open with a labeled quoted scenario (e.g., 'Topic: \"...\"', 'Problem: \"...\"')",
      });
    }
    if (!/^- Question\b/m.test(exampleBody)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example missing canonical '- Question' bullet (AskUserQuestion body)",
      });
    }
    if (!/^- Options:/m.test(exampleBody)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Example missing canonical '- Options:' bullet",
      });
    }
    const optionBullets = (exampleBody.match(/^  - `[^`]+`/gm) ?? []).length;
    if (optionBullets < 4) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `Example has ${optionBullets} backtick-wrapped option(s); recommend ≥4 (3 recommendations + 'Not sure' fallback)`,
      });
    }
  }

  const inputMatch = body.match(/## Input Handling\n([\s\S]*?)(?=\n## )/);
  if (inputMatch) {
    const inputBody = inputMatch[1];
    const bulletCount = (inputBody.match(/^- /gm) ?? []).length;
    if (bulletCount < 2) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `Input Handling has ${bulletCount} bullet(s); recommend ≥2 to cover topic + path cases`,
      });
    }
    if (!/\bPath\b/.test(inputBody)) {
      issues.push({
        skill: dir,
        level: "warn",
        message: "Input Handling missing 'Path' bullet for file-input case (canonical: '- Path — Read ... first.')",
      });
    }
  }

  if (parsed.success) {
    const quoteCount = (parsed.data.description.match(/"/g) ?? []).length;
    if (quoteCount < 4) {
      issues.push({
        skill: dir,
        level: "warn",
        message: `description has ${quoteCount / 2} quoted trigger phrase(s); recommend ≥2 for discovery`,
      });
    }
  }

  if (/\$ARGUMENTS/.test(body)) {
    issues.push({ skill: dir, level: "warn", message: "contains literal $ARGUMENTS (skills do not substitute)" });
  }

  issues.push(...validateLoadBearing(dir, body, fm));
  issues.push(...validateRefusalGate(dir, body, fm));
  issues.push(...validateLineageAttribution(dir, body, fm));
  issues.push(...validateFailureModeNamed(dir, body, fm));
  issues.push(...validateResidualHandoff(dir, body, fm, knownSkills));
  issues.push(...validateReplyFormatFooter(dir, body, fm));
  issues.push(...validateExampleLoopAnchor(dir, body, fm));

  return issues;
}

function validateExampleLoopAnchor(dir: string, body: string, fm: Record<string, string>): Issue[] {
  if (fm?.["audit-example-loop-anchor"] !== "required") return [];
  const issues: Issue[] = [];

  const exampleMatch = body.match(/## Example\n([\s\S]*?)(?=\n## )/);
  if (!exampleMatch) {
    return [{ skill: dir, level: "error", message: "audit-example-loop-anchor: ## Example section missing" }];
  }
  const example = exampleMatch[1];

  const anchorRe = /Calls AskUserQuestion \(Round\s+\d+(?:\s*—\s*[^)]+)?\)/;
  const anchorMatch = example.match(anchorRe);
  if (!anchorMatch) {
    issues.push({
      skill: dir,
      level: "error",
      message: 'audit-example-loop-anchor: Example missing "Calls AskUserQuestion (Round N — <descriptor>)" round-anchor — without it, Example drifts from mid-loop interaction snapshot to static narrative summary that no longer demonstrates the Loop discipline',
    });
    return issues;
  }
  const anchor = anchorMatch[0];

  if (fm?.["audit-refusal-gate"] === "required") {
    const isGateRound = /status gate/i.test(anchor);
    const hasGatePassageClause = /after the Round \d+ status gate passed/i.test(example);
    if (!isGateRound && !hasGatePassageClause) {
      issues.push({
        skill: dir,
        level: "error",
        message: 'audit-example-loop-anchor: Example anchor demonstrates a non-gate round but lacks "fired only after the Round N status gate passed" clause — coherence break between gate-enforcing Loop and gate-unaware Example demonstration; reader cannot tell whether the gate ran',
      });
    }
  }

  return issues;
}

function validateReplyFormatFooter(dir: string, body: string, fm: Record<string, string>): Issue[] {
  if (fm?.["audit-reply-format-footer"] !== "required") return [];
  const issues: Issue[] = [];

  const CANONICAL = "`Reply format: 1a 2b or defaults`";
  const LOOP_LINE = "Footer every round: `Reply format: 1a 2b or defaults`";
  const EXAMPLE_LINE = "Footer: `Reply format: 1a 2b or defaults`";

  const loopMatch = body.match(/## Loop\n([\s\S]*?)(?=\n## )/);
  if (!loopMatch) {
    issues.push({ skill: dir, level: "error", message: "audit-reply-format-footer: ## Loop section missing" });
  } else if (!loopMatch[1].includes(LOOP_LINE)) {
    const hasNakedFooter = /Footer.*Reply format/.test(loopMatch[1]);
    issues.push({
      skill: dir,
      level: "error",
      message: hasNakedFooter
        ? `audit-reply-format-footer: Loop has Footer line but does not match canonical "${LOOP_LINE}" — drift in wording, backticks, or reply-format string breaks the AskUserQuestion response convention silently`
        : `audit-reply-format-footer: Loop missing canonical "${LOOP_LINE}" footer line — without it, AskUserQuestion calls do not surface the response convention to users`,
    });
  }

  const exampleMatch = body.match(/## Example\n([\s\S]*?)(?=\n## )/);
  if (!exampleMatch) {
    issues.push({ skill: dir, level: "error", message: "audit-reply-format-footer: ## Example section missing" });
  } else if (!exampleMatch[1].includes(EXAMPLE_LINE)) {
    const hasNakedFooter = /Footer:.*Reply format/.test(exampleMatch[1]);
    issues.push({
      skill: dir,
      level: "error",
      message: hasNakedFooter
        ? `audit-reply-format-footer: Example has Footer line but does not match canonical "${EXAMPLE_LINE}" — drift between Loop's instruction and Example's demonstration produces inconsistent UX contract`
        : `audit-reply-format-footer: Example missing canonical "${EXAMPLE_LINE}" footer line — Example must demonstrate the same reply-format convention the Loop instructs`,
    });
  }

  if (loopMatch && exampleMatch) {
    const loopFooters = [...loopMatch[1].matchAll(/`Reply format: [^`]+`/g)].map((m) => m[0]);
    const exampleFooters = [...exampleMatch[1].matchAll(/`Reply format: [^`]+`/g)].map((m) => m[0]);
    const all = [...loopFooters, ...exampleFooters];
    const drifted = all.filter((f) => f !== CANONICAL);
    if (drifted.length > 0) {
      issues.push({
        skill: dir,
        level: "error",
        message: `audit-reply-format-footer: reply-format string drift detected — found [${drifted.join(", ")}], canonical is ${CANONICAL}`,
      });
    }
  }

  return issues;
}

function validateResidualHandoff(dir: string, body: string, fm: Record<string, string>, knownSkills: Set<string>): Issue[] {
  if (fm?.["audit-residual-handoff"] !== "required") return [];
  const issues: Issue[] = [];

  const completionMatch = body.match(/## Completion\n([\s\S]*?)(?=\n## |\n*$)/);
  if (!completionMatch) {
    return [{ skill: dir, level: "error", message: "audit-residual-handoff: ## Completion section missing" }];
  }
  const comp = completionMatch[1];

  const residualMatch = comp.match(/^-\s*Residual:\s*([\s\S]*?)(?=\n-\s|\n*$)/m);
  if (!residualMatch) {
    return [{
      skill: dir,
      level: "error",
      message: 'audit-residual-handoff: Completion missing "- Residual:" closing bullet — without explicit spillover handoff, foreign artefacts the user brought in get silently absorbed and skill drifts from a routed step into a closed-system absorber',
    }];
  }
  const residual = residualMatch[1];

  if (!/\bflag(?:ged|s)?\b/i.test(residual)) {
    issues.push({
      skill: dir,
      level: "error",
      message: 'audit-residual-handoff: Residual bullet missing "flag/flagged" spillover-discipline language — discipline is to flag foreign artefacts, not silently swallow them',
    });
  }

  const backtickSkillMatches = [...residual.matchAll(/`([a-z][a-z0-9-]+[a-z0-9])`/g)];
  const routedSkills: string[] = [];
  const unknownSkills: string[] = [];
  for (const match of backtickSkillMatches) {
    const name = match[1];
    if (name === dir) continue;
    if (knownSkills.has(name)) {
      routedSkills.push(name);
    } else if (name.includes("-")) {
      unknownSkills.push(name);
    }
  }
  if (routedSkills.length === 0) {
    issues.push({
      skill: dir,
      level: "error",
      message: `audit-residual-handoff: Residual bullet routes to 0 known sibling skills via backticks; need ≥1 valid \`skill-name\` handoff target so spillover artefacts have a real next step rather than dead-ending in this skill${unknownSkills.length > 0 ? ` (found unknown: [${unknownSkills.join(", ")}])` : ""}`,
    });
  }
  if (unknownSkills.length > 0) {
    issues.push({
      skill: dir,
      level: "error",
      message: `audit-residual-handoff: Residual bullet routes to non-existent skill(s) [${unknownSkills.join(", ")}] — dead route, drift from rename/delete in skills/`,
    });
  }

  return issues;
}

function validateFailureModeNamed(dir: string, body: string, fm: Record<string, string>): Issue[] {
  if (fm?.["audit-failure-mode-named"] !== "required") return [];
  const issues: Issue[] = [];

  const roleMatch = body.match(/## Role\n([\s\S]*?)(?=\n## )/);
  if (!roleMatch) {
    return [{ skill: dir, level: "error", message: "audit-failure-mode-named: ## Role section missing" }];
  }
  const personaPara = roleMatch[1].trim().split(/\n\s*\n/).find((p) => !/^Skip when/.test(p.trim()));
  if (!personaPara) {
    return [{ skill: dir, level: "error", message: "audit-failure-mode-named: Role persona paragraph missing" }];
  }
  if (!/structural failure mode is\b/i.test(personaPara)) {
    issues.push({
      skill: dir,
      level: "error",
      message: 'audit-failure-mode-named: Role persona missing canonical "The structural failure mode is X" self-locating clause — protects against drift from load-bearing-aware skill to doctrinal claim',
    });
  }

  const completionMatch = body.match(/## Completion\n([\s\S]*?)(?=\n## |\n*$)/);
  if (!completionMatch) {
    issues.push({ skill: dir, level: "error", message: "audit-failure-mode-named: ## Completion section missing" });
    return issues;
  }
  const comp = completionMatch[1];

  if (!/load-bearing move has failed/i.test(comp)) {
    issues.push({
      skill: dir,
      level: "error",
      message: 'audit-failure-mode-named: Completion missing canonical "the load-bearing move has failed" clause — closure check that detects fingerprint bypass before declaring success',
    });
  }

  const rerunPatterns = [
    /loop re-runs/i,
    /re-runs from/i,
    /pass re-runs/i,
    /surfacing.*re-runs/i,
  ];
  if (!rerunPatterns.some((re) => re.test(comp))) {
    issues.push({
      skill: dir,
      level: "error",
      message: 'audit-failure-mode-named: Completion missing explicit loop-rerun instruction ("loop re-runs from Round N" / "pass re-runs") — without rerun, failure detection has no remediation and skill can declare success on a bypassed fingerprint',
    });
  }

  return issues;
}

const HISTORICAL_AUTHORITIES = [
  "voss", "cialdini", "goffman", "heritage", "argyris", "lakoff",
  "pillet-shore", "watzlawick", "schein", "oyserman", "fisher",
  "ury", "ackerman",
];

function validateLineageAttribution(dir: string, body: string, fm: Record<string, string>): Issue[] {
  if (fm?.["audit-lineage-attribution"] !== "required") return [];
  const issues: Issue[] = [];

  const roleMatch = body.match(/## Role\n([\s\S]*?)(?=\n## )/);
  if (!roleMatch) {
    return [{ skill: dir, level: "error", message: "audit-lineage-attribution: ## Role section missing" }];
  }
  const personaPara = roleMatch[1].trim().split(/\n\s*\n/).find((p) => !/^Skip when/.test(p.trim()));
  if (!personaPara) {
    return [{ skill: dir, level: "error", message: "audit-lineage-attribution: Role persona paragraph missing" }];
  }

  const cited: string[] = [];
  for (const name of HISTORICAL_AUTHORITIES) {
    const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (re.test(personaPara)) cited.push(name);
  }
  if (cited.length < 3) {
    issues.push({
      skill: dir,
      level: "error",
      message: `audit-lineage-attribution: Role persona cites ${cited.length} historical authorities [${cited.join(", ") || "none"}]; need ≥3 from {${HISTORICAL_AUTHORITIES.join(", ")}} to anchor the lineage cross-check`,
    });
  }

  const restaterPatterns = [
    /Hughes credited as one recent restater/i,
    /cross-checked against those older traditions/i,
  ];
  if (!restaterPatterns.some((re) => re.test(personaPara))) {
    issues.push({
      skill: dir,
      level: "error",
      message: 'audit-lineage-attribution: Role persona missing canonical restater clause ("Hughes credited as one recent restater" / "cross-checked against those older traditions") — protects against collapse to single-source doctrinal claim',
    });
  }

  return issues;
}

function extractTriggerPhrases(description: string): string[] {
  const out: string[] = [];
  const re = /"([^"]+)"/g;
  for (const match of description.matchAll(re)) {
    out.push(match[1].toLowerCase().trim());
  }
  return out;
}

function validateTriggerUniqueness(skills: string[]): Issue[] {
  const triggerToSkills = new Map<string, string[]>();
  for (const dir of skills) {
    const body = readFileSync(join(SKILLS_DIR, dir, "SKILL.md"), "utf8");
    const fm = parseFrontmatter(body);
    if (!fm?.description) continue;
    for (const trig of extractTriggerPhrases(fm.description)) {
      const list = triggerToSkills.get(trig) ?? [];
      list.push(dir);
      triggerToSkills.set(trig, list);
    }
  }
  const issues: Issue[] = [];
  for (const [trig, owners] of triggerToSkills) {
    if (owners.length > 1) {
      for (const owner of owners) {
        issues.push({
          skill: owner,
          level: "warn",
          message: `trigger phrase "${trig}" also claimed by ${owners.filter((o) => o !== owner).join(", ")}`,
        });
      }
    }
  }
  return issues;
}

function validatePluginManifest(): Issue[] {
  const manifestPath = join(ROOT, ".claude-plugin", "plugin.json");
  try {
    const raw = readFileSync(manifestPath, "utf8");
    const data = JSON.parse(raw);
    const schema = z.object({
      name: z.string().min(1),
      description: z.string().min(10),
      version: z.string().regex(/^\d+\.\d+\.\d+$/),
    }).passthrough();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return parsed.error.issues.map((err) => ({
        skill: "<plugin.json>",
        level: "error" as const,
        message: `${err.path.join(".")}: ${err.message}`,
      }));
    }
    return [];
  } catch (e) {
    return [{ skill: "<plugin.json>", level: "error", message: `unreadable: ${(e as Error).message}` }];
  }
}

function main(): number {
  const skills = readdirSync(SKILLS_DIR).filter((d) =>
    statSync(join(SKILLS_DIR, d)).isDirectory(),
  );
  const knownSkills = new Set(skills);

  const allIssues = [
    ...validatePluginManifest(),
    ...skills.flatMap((d) => validateSkill(d, knownSkills)),
    ...validateTriggerUniqueness(skills),
  ];

  const errors = allIssues.filter((i) => i.level === "error");
  const warnings = allIssues.filter((i) => i.level === "warn");

  for (const issue of allIssues) {
    const tag = issue.level === "error" ? "ERROR" : "WARN ";
    console.log(`${tag}  ${issue.skill}: ${issue.message}`);
  }

  console.log("");
  console.log(`Checked ${skills.length} skills. ${errors.length} error(s), ${warnings.length} warning(s).`);
  return errors.length > 0 ? 1 : 0;
}

process.exit(main());
