import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const index = readFileSync("src/routes/index.tsx", "utf8");
const door = readFileSync("src/components/job-door.tsx", "utf8");
const rumo = readFileSync("src/components/rumo-list.tsx", "utf8");
const job = readFileSync("src/lib/job.ts", "utf8");

describe("tela do job", () => {
  it("home carrega o job, não a lenda", () => {
    assert.match(index, /JobDoor/);
    assert.equal(/from "@\/components\/briefing"/.test(index), false);
    assert.equal(/<Landing/.test(index), false);
    assert.equal(/from "@\/components\/objetivos"/.test(index), false);
  });

  it("caminho feliz: rumo + cadastro mínimo + CTA no primeiro viewport", () => {
    assert.match(job, /Flat → Airbnb/);
    assert.match(job, /Abaixo do preço/);
    assert.match(door, /HOME_LABEL/);
    assert.match(door, /type="email"/);
    assert.match(door, /WhatsApp/);
    assert.match(door, /Ver 3 oportunidades/);
  });

  it("erro visível no cadastro", () => {
    assert.match(door, /role="alert"/);
    assert.match(door, /jobSubmitError/);
  });

  it("card mostra o problema", () => {
    assert.match(rumo, /listingProblem/);
    assert.match(rumo, /Problema:/);
  });
});
