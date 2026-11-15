import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];
const ignored = new Set([".git", "node_modules", "dist", "build", "coverage"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const files = walk(root);
const relative = (file) => path.relative(root, file).split(path.sep).join("/");
const exists = (p) => fs.existsSync(p);

for (const required of [
  "README.md", "AGENTS.md", "CLAUDE.md",
  "00-CONTEXT-SYSTEM/KNOWLEDGE-INDEX.md",
  "00-METHODOLOGY/MASTER-METHODOLOGY.md",
  "07-QUALITY-CONTROL/ACCEPTANCE-AND-RELEASE-CHECKLIST.md",
  "03-AGENT-SKILLS/EVALUATION-FRAMEWORK.md"
]) {
  if (!exists(path.join(root, required))) errors.push("Missing required file: " + required);
}

const claudeMd = fs.readFileSync(path.join(root, "CLAUDE.md"), "utf8");
const agentsMd = fs.readFileSync(path.join(root, "AGENTS.md"), "utf8");
if (claudeMd.length > 3000) warnings.push("CLAUDE.md is over 3000 characters; review always-on token cost.");
if (agentsMd.length > 4000) warnings.push("AGENTS.md is over 4000 characters; review duplicated instructions.");

const settingsPath = path.join(root, ".claude/settings.json");
try { JSON.parse(fs.readFileSync(settingsPath, "utf8")); }
catch (error) { errors.push("Invalid .claude/settings.json: " + error.message); }

const skills = files.filter((file) => file.endsWith(path.join("SKILL.md")));
const skillNames = new Set();
for (const file of skills) {
  const content = fs.readFileSync(file, "utf8");
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) { errors.push("Missing YAML frontmatter: " + relative(file)); continue; }
  const name = match[1].match(/^name:\s*([a-z0-9-]+)\s*$/m)?.[1];
  const description = match[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (!name) errors.push("Missing/invalid Skill name: " + relative(file));
  if (!description) errors.push("Missing Skill description: " + relative(file));
  if (description && description.length > 1024) errors.push("Skill description exceeds 1024 chars: " + relative(file));
  if (name) {
    const folder = path.basename(path.dirname(file));
    if (name !== folder) errors.push("Skill name must match folder: " + relative(file));
    if (skillNames.has(name)) errors.push("Duplicate Skill name: " + name);
    skillNames.add(name);
  }
}
if (skills.length === 0) errors.push("No SKILL.md files found.");

const catalogPath = path.join(root, "01-REFERENCE-LIBRARY/MOTION-AND-INTERACTION-SYSTEM/PATTERN-CATALOG.md");
if (exists(catalogPath)) {
  const content = fs.readFileSync(catalogPath, "utf8");
  const ids = [...content.matchAll(/^\|\s*(M-\d+)\s*\|/gm)].map((match) => match[1]);
  if (new Set(ids).size !== ids.length) errors.push("Duplicate motion pattern IDs in catalog.");
}

const markdownFiles = files.filter((file) => file.endsWith(".md"));
const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(linkPattern)) {
    let target = match[1].trim().split(/\s+/)[0];
    if (!target || /^(https?:|mailto:|tel:|#)/i.test(target)) continue;
    target = decodeURIComponent(target.split("#")[0]);
    if (!target) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!exists(resolved)) errors.push("Broken local link in " + relative(file) + ": " + target);
  }
}

console.log("Knowledge base validation");
console.log("Markdown files:", markdownFiles.length);
console.log("Skills:", skills.length);
console.log("Agents:", files.filter((file) => file.startsWith(path.join(root, ".claude/agents")) && file.endsWith(".md")).length);
for (const warning of warnings) console.warn("WARNING:", warning);
for (const error of errors) console.error("ERROR:", error);
if (errors.length) process.exitCode = 1;
else console.log("PASS — no structural issues detected.");
