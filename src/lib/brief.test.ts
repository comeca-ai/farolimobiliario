import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  GOAL_DEFAULTS,
  MATCH_PER_RUMO,
  SURFACE_PER_RUMO,
  countBriefMatches,
  leadFor,
  listBrief,
  matchBrief,
  parsePlaces,
  proposeRumos,
  punchForGoal,
  reading,
  surfaceBrief,
  type LifeGoal,
} from "./brief.ts";
import { validBrMobile, validEmail } from "./lead.ts";

const GOALS: LifeGoal[] = ["renda", "patrimonio", "morar", "aposentar"];

describe("agente unitário — rumo", () => {
  for (const goal of GOALS) {
    it(`${goal} devolve exatamente ${MATCH_PER_RUMO} opções distintas`, () => {
      const matches = matchBrief({ goal, ...GOAL_DEFAULTS[goal] });
      assert.equal(matches.length, MATCH_PER_RUMO);
      const ids = matches.map((m) => m.card.listing.id);
      assert.equal(new Set(ids).size, MATCH_PER_RUMO);
      assert.ok(matches.every((m) => m.fit > 0));
      assert.ok(matches[0].fit >= matches[1].fit);
      assert.ok(matches[1].fit >= matches[2].fit);
    });
  }

  it("os quatro rumos não devolvem a mesma tríade", () => {
    const keys = GOALS.map((goal) =>
      matchBrief({ goal, ...GOAL_DEFAULTS[goal] })
        .map((m) => m.card.listing.id)
        .join("|"),
    );
    assert.equal(new Set(keys).size, GOALS.length);
  });

  it("surface mostra mais imóveis que a tríade principal", () => {
    const top = matchBrief({ goal: "patrimonio", ...GOAL_DEFAULTS.patrimonio });
    const surface = surfaceBrief({ goal: "patrimonio", ...GOAL_DEFAULTS.patrimonio });
    assert.equal(top.length, MATCH_PER_RUMO);
    assert.equal(surface.length, SURFACE_PER_RUMO);
    assert.ok(surface.length > top.length);
    assert.deepEqual(
      surface.slice(0, MATCH_PER_RUMO).map((m) => m.card.listing.id),
      top.map((m) => m.card.listing.id),
    );
    assert.equal(countBriefMatches({ goal: "patrimonio", ...GOAL_DEFAULTS.patrimonio }) >= surface.length, true);
  });

  it("renda privilegia yield STR no número", () => {
    const top = matchBrief({ goal: "renda", ...GOAL_DEFAULTS.renda })[0].card;
    const punch = punchForGoal(top, "renda");
    assert.match(punch.caption, /temporada/);
    assert.match(punch.value, /%/);
  });

  it("morar mostra ticket, nunca a palavra rua", () => {
    const top = matchBrief({ goal: "morar", ...GOAL_DEFAULTS.morar })[0].card;
    const punch = punchForGoal(top, "morar");
    assert.match(punch.value, /R\$/);
    assert.equal(/rua/i.test(punch.value + punch.caption), false);
    assert.equal(/vida de rua/i.test(punch.caption), false);
  });

  it("patrimônio privilegia spread", () => {
    const top = matchBrief({ goal: "patrimonio", ...GOAL_DEFAULTS.patrimonio })[0].card;
    const punch = punchForGoal(top, "patrimonio");
    assert.match(punch.caption, /justo/);
  });

  it("caixinha 'flat airbnb parcela' lê renda primeiro", () => {
    const [first] = proposeRumos("quero um flat em Tambaú no airbnb que pague a parcela todo mês");
    assert.equal(first.goal, "renda");
  });

  it("caixinha 'casa para a família' lê morar primeiro", () => {
    const [first] = proposeRumos("casa da rua para morar com a família, silêncio, filhos");
    assert.equal(first.goal, "morar");
  });

  it("quem escreve tambau vê Tambaú, não Expedicionários", () => {
    const wish = "tambau";
    const places = parsePlaces(wish);
    assert.deepEqual(places, ["tambau"]);
    const matches = matchBrief({
      goal: "morar",
      ...GOAL_DEFAULTS.morar,
      wish,
      places,
    });
    assert.equal(matches[0].card.nb.id, "tambau");
    const text = reading(
      { goal: "morar", ...GOAL_DEFAULTS.morar, wish, places },
      matches,
    );
    assert.match(text, /Tambaú/);
    assert.equal(/hóspede de Tambaú não entra/i.test(text), false);
    assert.equal(matches.some((m) => m.card.nb.id === "expedicionarios"), false);
    assert.ok(matches.every((m) => m.card.nb.zone === "orla" || m.card.nb.id === "tambau"));
    const surfaced = surfaceBrief({
      goal: "morar",
      ...GOAL_DEFAULTS.morar,
      wish,
      places,
    });
    assert.ok(surfaced.length > MATCH_PER_RUMO);
    assert.ok(surfaced.every((m) => m.card.nb.zone === "orla" || m.card.nb.id === "tambau"));
  });

  it("lista de patrimônio ordena pelo spread, o maior primeiro", () => {
    const list = listBrief({ goal: "patrimonio", ...GOAL_DEFAULTS.patrimonio });
    assert.equal(list.length, 5);
    for (let i = 0; i < list.length - 1; i++) {
      assert.ok(list[i].card.discount >= list[i + 1].card.discount);
    }
  });

  it("lead do patrimônio fala spread e justo do bairro", () => {
    const text = leadFor({ goal: "patrimonio", ...GOAL_DEFAULTS.patrimonio });
    assert.match(text, /spread/);
    assert.match(text, /justo/);
  });

  it("WhatsApp e e-mail do cadastro", () => {
    assert.equal(validEmail("rafinha_n1@hotmail.com"), true);
    assert.equal(validEmail("x"), false);
    assert.equal(validBrMobile("(83) 98888-0000"), true);
    assert.equal(validBrMobile("(83) 8888-0000"), false);
  });
});
