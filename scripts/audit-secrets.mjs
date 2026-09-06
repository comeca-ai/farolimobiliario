#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const PATTERNS = [
  /cfut_[A-Za-z0-9]+/,
  /ghp_[A-Za-z0-9]{20,}/,
  /github_pat_[A-Za-z0-9_]+/,
  /sk_live_[A-Za-z0-9]+/,
  /CLOUDFLARE_API_TOKEN\s*=\s*['\"]?cf/,
  /BEGIN (RSA |OPENSSH )?PRIVATE KEY/,
  /AKIA[0-9A-Z]{16}/,
];

const files = execFileSync("git", ["ls-files"], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean)
  .filter((f) => !f.startsWith("attachments/"));

const hits = [];
for (const file of files) {
  let text = "";
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (text.includes("\0")) continue;
  for (const re of PATTERNS) {
    if (re.test(text)) hits.push({ file, pattern: String(re) });
  }
}

if (hits.length) {
  console.error("Segredo no git:");
  for (const h of hits) console.error(`  ${h.file}  ${h.pattern}`);
  process.exit(1);
}

console.log("audit-secrets: nenhum token no git.");
