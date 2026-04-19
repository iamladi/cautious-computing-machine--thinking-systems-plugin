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
