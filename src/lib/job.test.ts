import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { LISTINGS } from "../data/listings.ts";
import { MATCH_PER_RUMO, matchBrief } from "./brief.ts";
import {
  HOME_GOALS,
  HOME_LABEL,
  isHomeGoal,
  jobLead,
  jobSubmitError,
  listingProblem,
  openJobBrief,
} from "./job.ts";

describe("job da home", () => {
  it("home só tem Airbnb e abaixo do preço", () => {
    assert.deepEqual([...HOME_GOALS], ["renda", "patrimonio"]);
    assert.equal(HOME_LABEL.renda.includes("Airbnb"), true);
    assert.equal(HOME_LABEL.patrimonio.toLowerCase().includes("preço"), true);
    assert.equal(isHomeGoal("morar"), false);
    assert.equal(isHomeGoal("aposentar"), false);
    assert.equal(isHomeGoal("renda"), true);
  });

  it("cada rumo da home devolve 3 oportunidades distintas", () => {
    for (const goal of HOME_GOALS) {
      const matches = matchBrief(openJobBrief(goal));
      assert.equal(matches.length, MATCH_PER_RUMO);
      assert.equal(new Set(matches.map((m) => m.card.listing.id)).size, MATCH_PER_RUMO);
    }
  });

  it("todo sinal tem problema visível", () => {
    for (const listing of LISTINGS) {
      const problem = listingProblem(listing);
      assert.notEqual(problem, "Problema não informado nesta visita.");
      assert.ok(problem.length > 8, listing.id);
    }
  });

  it("cadastro mínimo: e-mail obrigatório, WhatsApp opcional", () => {
    assert.equal(
      jobSubmitError({ goal: null, email: "a@b.com", whatsapp: "", skipCadastro: false }),
      "Escolha Airbnb ou abaixo do preço.",
    );
    assert.match(
      jobSubmitError({ goal: "renda", email: "x", whatsapp: "", skipCadastro: false }) ?? "",
      /e-mail/,
    );
    assert.equal(
      jobSubmitError({
        goal: "renda",
        email: "rafinha_n1@hotmail.com",
        whatsapp: "",
        skipCadastro: false,
      }),
      null,
    );
    assert.match(
      jobSubmitError({ goal: "renda", email: "a@b.com", whatsapp: "8388880000", skipCadastro: false }) ?? "",
      /WhatsApp opcional/,
    );
    assert.equal(
      jobSubmitError({
        goal: "patrimonio",
        email: "rafinha_n1@hotmail.com",
        whatsapp: "(83) 98888-0000",
        skipCadastro: false,
      }),
      null,
    );
    assert.equal(
      jobSubmitError({ goal: "renda", email: "", whatsapp: "", skipCadastro: true }),
      null,
    );
  });

  it("lead normaliza e-mail", () => {
    const lead = jobLead("  Ana@Farol.jp  ", "(83) 98888-0000");
    assert.equal(lead.email, "ana@farol.jp");
  });
});
