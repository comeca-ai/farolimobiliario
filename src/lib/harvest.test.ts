import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mapBairro, parseChavesHtml, parseZapHtml, rawToListing, unwrapBrowserResult } from "./harvest.ts";
import { NEIGHBORHOOD_BY_ID } from "../data/market.ts";

describe("colheita", () => {
  it("mapeia bairro do portal para o id da mesa", () => {
    assert.equal(mapBairro("Tambaú"), "tambau");
    assert.equal(mapBairro("Altiplano Cabo Branco"), "altiplano");
    assert.equal(mapBairro("Jardim Cidade Universitária"), "jcu");
    assert.equal(mapBairro("Ernesto Geisel"), "geisel");
    assert.equal(mapBairro("Gramame"), "gramame");
    assert.equal(mapBairro("Nárnia"), null);
  });

  it("lê JSON-LD do Chaves na Mão", () => {
    const html = `<script type="application/ld+json">${JSON.stringify({
      "@type": "RealEstateListing",
      offers: {
        numberOfItems: 15492,
        itemListElement: [
          {
            name: "Apartamento com 2 quartos à venda no Tambaú",
            url: "https://www.chavesnamao.com.br/imovel/x/id-39667500/",
            price: "318000",
            itemOffered: {
              "@type": "Apartment",
              numberOfBedrooms: "2 a 3",
              floorSize: { unitText: "54m²" },
              address: { addressLocality: "Tambaú", streetAddress: "Av. Tamandaré" },
              geo: { latitude: "-7.114", longitude: "-34.823" },
            },
          },
        ],
      },
    })}</script>`;
    const parsed = parseChavesHtml(html);
    assert.equal(parsed.portalListed, 15492);
    assert.equal(parsed.rows.length, 1);
    assert.equal(parsed.rows[0].rooms, 2);
    assert.equal(parsed.rows[0].area, 54);
    const listing = rawToListing(parsed.rows[0], "8 set. 2026");
    assert.ok(listing);
    assert.equal(listing?.bairroId, "tambau");
    assert.equal(listing?.id, "chv-39667500");
    assert.ok(NEIGHBORHOOD_BY_ID[listing!.bairroId]);
    assert.ok(listing!.thesis.length > 40);
    assert.ok(listing!.sources.includes("portal"));
  });

  it("lê o payload Glue do Zap", () => {
    const html = `{"listings":[{"listing":{"id":"2750128494","title":"Apto Tambaú 2q","pricingInfos":[{"price":410000,"businessType":"SALE"}],"usableAreas":[58],"bedrooms":[2],"bathrooms":[1],"address":{"neighborhood":"Tambaú","street":"Av. Epitácio Pessoa","geoLocation":{"location":{"lat":-7.114,"lon":-34.823}}},"unitTypes":["APARTMENT"]}}]}`;
    const rows = parseZapHtml(html);
    assert.equal(rows.length >= 1, true);
    assert.equal(rows[0].source, "zap");
    assert.equal(rows[0].id, "2750128494");
    assert.equal(rows[0].price, 410000);
    assert.equal(rows[0].bairro, "Tambaú");
    const listing = rawToListing(rows[0], "8 set. 2026");
    assert.equal(listing?.id, "zap-2750128494");
    assert.equal(listing?.bairroId, "tambau");
  });

  it("desempacota o Response do Browser Run — não o {}", async () => {
    assert.equal(await unwrapBrowserResult("<html>ok</html>"), "<html>ok</html>");
    assert.equal(await unwrapBrowserResult({ html: "<p>a</p>" }), "<p>a</p>");
    assert.equal(await unwrapBrowserResult({ content: "<p>b</p>" }), "<p>b</p>");
    assert.equal(await unwrapBrowserResult({ result: "<p>c</p>" }), "<p>c</p>");
    assert.equal(await unwrapBrowserResult({ result: { content: "<p>d</p>" } }), "<p>d</p>");
    assert.equal(await unwrapBrowserResult({}), "");
    const res = new Response("<!doctype html><title>Zap</title>", {
      headers: { "content-type": "text/html" },
    });
    assert.match(await unwrapBrowserResult(res), /<title>Zap<\/title>/);
    const wrapped = new Response(JSON.stringify({ success: true, result: "<div id='glue'>ok</div>" }), {
      headers: { "content-type": "application/json" },
    });
    assert.match(await unwrapBrowserResult(wrapped), /id='glue'/);
  });
});
