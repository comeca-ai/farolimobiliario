import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  EVENTO_CITY,
  EVENTO_MARKET,
  EVENTO_SOURCE,
  eventoSubmitError,
} from "./evento.ts";

describe("porta do evento Brasília", () => {
  it("o mercado continua João Pessoa", () => {
    assert.equal(EVENTO_CITY, "Brasília");
    assert.equal(EVENTO_MARKET, "João Pessoa");
    assert.equal(EVENTO_SOURCE, "evento-brasilia");
  });

  it("e-mail e WhatsApp são obrigatórios", () => {
    assert.match(eventoSubmitError("", "") ?? "", /e-mail/);
    assert.match(eventoSubmitError("ana@farol.jp", "") ?? "", /WhatsApp/);
    assert.match(eventoSubmitError("ana@farol.jp", "6188880000") ?? "", /WhatsApp/);
    assert.equal(eventoSubmitError("ana@farol.jp", "(61) 98888-0000"), null);
    assert.equal(eventoSubmitError("  Ana@Farol.jp  ", "(83) 99876-5432"), null);
  });
});
