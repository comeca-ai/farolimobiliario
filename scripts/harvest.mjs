#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { harvestAll } from "../src/lib/harvest.ts";

const MIN_KEEP = 80;

function dump(value) {
  return JSON.stringify(value, null, 2).replace(/[\u2028\u2029]/g, " ");
}

const { listings, report } = await harvestAll();
console.log(
  `harvest: raw ${report.raw} · kept ${report.kept} · dropped ${report.dropped} · portal ${report.portalListed ?? "?"} · feeds ${report.feedsOk}/${report.feedsOk + report.feedsFail}`,
);
console.log("por fonte", report.bySource);
console.log("bairros", Object.keys(report.byBairro).length);

if (report.kept < MIN_KEEP) {
  console.error(`harvest: pouco demais (${report.kept} < ${MIN_KEEP}). Snapshot anterior permanece.`);
  process.exit(1);
}

const file = `import type { Listing } from "./listings.ts";
import type { HarvestReport } from "@/lib/harvest";

export const HARVEST_REPORT: HarvestReport = ${dump(report)} as HarvestReport;

export const HARVESTED_LISTINGS: Listing[] = ${dump(listings)} as Listing[];
`;

mkdirSync("src/data", { recursive: true });
writeFileSync("src/data/harvested.ts", file);
console.log(`harvest: gravou src/data/harvested.ts (${listings.length} sinais)`);
