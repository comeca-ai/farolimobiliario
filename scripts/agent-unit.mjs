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
  ],
  { stdio: "inherit" },
);
process.exit(r.status ?? 1);
