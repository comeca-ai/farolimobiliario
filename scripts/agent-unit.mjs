#!/usr/bin/env node
import { spawnSync } from "node:child_process";

const r = spawnSync(
  process.execPath,
  [
    "--import",
    "./scripts/register-alias.mjs",
    "--experimental-strip-types",
    "--test",
    "src/lib/brief.test.ts",
    "src/lib/job.test.ts",
    "src/lib/evento.test.ts",
    "scripts/job-tela.test.mjs",
  ],
  { stdio: "inherit" },
);
process.exit(r.status ?? 1);
