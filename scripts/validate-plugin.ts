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
  const pattern = /(?:use|route(?:\s+up|\s+down)?\s+to|via|→)\s+([a-z][a-z-]+[a-z])(?:\s+or\s+([a-z][a-z-]+[a-z]))?/gi;
  for (const match of roleText.matchAll(pattern)) {
    if (match[1]?.includes("-")) refs.add(match[1]);
    if (match[2]?.includes("-")) refs.add(match[2]);
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

  if (/\$ARGUMENTS/.test(body)) {
    issues.push({ skill: dir, level: "warn", message: "contains literal $ARGUMENTS (skills do not substitute)" });
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
