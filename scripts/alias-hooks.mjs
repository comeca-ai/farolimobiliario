import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const SRC = join(process.cwd(), "src");

function mapAlias(specifier) {
  if (!specifier.startsWith("@/")) return null;
  const rel = specifier.slice(2);
  const abs = join(SRC, rel);
  if (existsSync(abs)) return abs;
  if (existsSync(`${abs}.ts`)) return `${abs}.ts`;
  if (existsSync(`${abs}.tsx`)) return `${abs}.tsx`;
  if (existsSync(join(abs, "index.ts"))) return join(abs, "index.ts");
  return `${abs}.ts`;
}

export async function resolve(specifier, context, nextResolve) {
  const mapped = mapAlias(specifier);
  if (mapped) {
    return { url: pathToFileURL(mapped).href, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
