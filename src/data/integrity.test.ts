import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { LISTINGS, CURATED_LISTINGS, type RadarTag, type SourceKind } from "./listings.ts";
import { CITY, NEIGHBORHOODS, NEIGHBORHOOD_BY_ID } from "./market.ts";
import { HARVESTED_LISTINGS } from "./harvested.ts";
import { analyze, LISTINGS_SCORED } from "../lib/score.ts";

const RADARS: RadarTag[] = ["preco", "airbnb", "rua"];
const SOURCES: SourceKind[] = ["portal", "olx", "leilao", "placa", "whatsapp", "inventario", "iptu"];
const TYPES = ["apto", "flat", "casa", "kitnet"];

const LAT_N = -7.03;
const LAT_S = -7.26;
const LNG_W = -34.93;
const LNG_E = -34.79;

describe("agente integridade — base João Pessoa", () => {
  it("cidade e comps de bairro fecham", () => {
    assert.equal(CITY.name, "João Pessoa");
    assert.equal(CITY.m2, 8387);
    assert.ok(CITY.yoy > 0 && CITY.yoy < 0.3);
    assert.ok(NEIGHBORHOODS.length >= 8);
    const ids = NEIGHBORHOODS.map((n) => n.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const n of NEIGHBORHOODS) {
      assert.ok(n.m2 > 1000 && n.m2 < 40000, n.id);
      assert.ok(n.lat < LAT_N && n.lat > LAT_S, n.id);
      assert.ok(n.lng > LNG_W && n.lng < LNG_E, n.id);
      assert.ok(Number.isFinite(n.strOccupancy) && n.strOccupancy > 0 && n.strOccupancy < 1);
    }
  });

  it("cada imóvel aponta para um bairro que existe", () => {
    assert.ok(LISTINGS.length >= 12);
    assert.equal(LISTINGS.length, CURATED_LISTINGS.length + HARVESTED_LISTINGS.length);
    const ids = LISTINGS.map((l) => l.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const l of LISTINGS) {
      assert.ok(NEIGHBORHOOD_BY_ID[l.bairroId], `${l.id} bairro ${l.bairroId}`);
      assert.ok(TYPES.includes(l.type), l.id);
      assert.ok(l.ask > 50000 && l.ask < 5000000, l.id);
      assert.ok(l.area >= 18 && l.area <= 400, l.id);
      assert.ok(l.rooms >= 1 && l.rooms <= 8, l.id);
      assert.ok(l.condition > 0.4 && l.condition <= 1, l.id);
      assert.ok(l.lat < LAT_N && l.lat > LAT_S, `${l.id} lat`);
      assert.ok(l.lng > LNG_W && l.lng < LNG_E, `${l.id} lng`);
      assert.ok(l.radars.length > 0 && l.radars.every((r) => RADARS.includes(r)), l.id);
      assert.ok(l.sources.length > 0 && l.sources.every((s) => SOURCES.includes(s)), l.id);
      assert.ok(l.thesis.length > 40, l.id);
      assert.ok(l.risks.length >= 1, l.id);
    }
  });

  it("score fecha em todo o inventário", () => {
    assert.equal(LISTINGS_SCORED.length, LISTINGS.length);
    for (const l of LISTINGS) {
      const card = analyze(l);
      assert.ok(Number.isFinite(card.fair) && card.fair > 0, l.id);
      assert.ok(Number.isFinite(card.discount), l.id);
      assert.ok(Number.isFinite(card.strYield), l.id);
      assert.ok(Number.isFinite(card.ltrYield), l.id);
      assert.ok(card.score >= 0 && card.score <= 100, l.id);
      assert.ok(RADARS.includes(card.primary), l.id);
      assert.equal(card.nb.id, l.bairroId);
    }
  });

  it("nenhum imóvel órfão de coordenadas vs o próprio bairro", () => {
    for (const l of LISTINGS) {
      const nb = NEIGHBORHOOD_BY_ID[l.bairroId];
      const dLat = Math.abs(l.lat - nb.lat);
      const dLng = Math.abs(l.lng - nb.lng);
      assert.ok(dLat < 0.08 && dLng < 0.08, `${l.id} longe de ${nb.id}`);
    }
  });

  it("colheita entra na mesa sem apagar o dossiê escrito", () => {
    assert.equal(CURATED_LISTINGS.length, 20);
    for (const l of CURATED_LISTINGS) assert.match(l.id, /^sgn-/);
    for (const l of HARVESTED_LISTINGS) {
      assert.match(l.id, /^(chv|cx|zap|olx)-/);
      assert.ok(l.sources.includes("portal") || l.sources.includes("leilao"), l.id);
    }
    if (HARVESTED_LISTINGS.length > 0) {
      assert.ok(HARVESTED_LISTINGS.length >= 80, `colheita curta: ${HARVESTED_LISTINGS.length}`);
    }
  });
});
