import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const index = readFileSync("src/routes/index.tsx", "utf8");
const landing = readFileSync("src/components/briefing.tsx", "utf8");
const login = readFileSync("src/components/cadastro.tsx", "utf8");
const rumo = readFileSync("src/components/rumo-list.tsx", "utf8");
const shell = readFileSync("src/components/shell.tsx", "utf8");
const caixinha = readFileSync("src/components/objetivos.tsx", "utf8");
const evento = readFileSync("src/routes/evento.tsx", "utf8");

describe("tela do Farol", () => {
  it("home é landing → cadastro → caixinha", () => {
    assert.match(index, /from "@\/components\/briefing"/);
    assert.match(index, /<Landing/);
    assert.match(index, /from "@\/components\/objetivos"/);
    assert.match(index, /<Cadastro/);
    assert.equal(/JobDoor/.test(index), false);
  });

  it("landing tem os dois jobs e o e-mail no hero", () => {
    assert.match(landing, /Flat → Airbnb/);
    assert.match(landing, /Abaixo do preço/);
    assert.match(landing, /type="email"/);
    assert.match(landing, /Ver 3 oportunidades/);
  });

  it("cadastro exige WhatsApp", () => {
    assert.match(login, /Continuar para a caixinha/);
    assert.match(login, /obrigatório/);
    assert.match(login, /type="tel"/);
  });

  it("caixinha lê o rumo ao vivo", () => {
    assert.match(caixinha, /Ler meu rumo/);
    assert.match(caixinha, /O Farol leu/);
  });

  it("card mostra o problema à vista", () => {
    assert.match(rumo, /O problema à vista/);
  });

  it("topo autenticado tem Rumo, Bairros, Arquitetura e Sair", () => {
    assert.match(shell, /Bairros/);
    assert.match(shell, /Arquitetura/);
    assert.match(shell, />\s*Sair\s*</);
  });

  it("porta do evento Brasília pede e-mail e WhatsApp", () => {
    assert.match(evento, /createFileRoute\("\/evento"\)/);
    assert.match(evento, /Brasília/);
    assert.match(evento, /João Pessoa/);
    assert.match(evento, /Entrar na mesa/);
    assert.match(evento, /obrigatório/);
    assert.match(evento, /EVENTO_SOURCE/);
  });
});
