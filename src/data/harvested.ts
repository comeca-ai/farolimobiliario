import type { Listing } from "./listings.ts";
import type { HarvestReport } from "@/lib/harvest";

export const HARVEST_REPORT: HarvestReport = {
  "at": "2026-09-14T17:12:34.573Z",
  "portalListed": 12299,
  "raw": 754,
  "kept": 608,
  "dropped": 146,
  "bySource": {
    "portal": 603,
    "leilao": 5
  },
  "byBairro": {
    "cabo-branco": 26,
    "altiplano": 31,
    "jcu": 28,
    "manaira": 28,
    "torre": 26,
    "portal-do-sol": 22,
    "aeroclube": 18,
    "bessa": 24,
    "cristo": 32,
    "miramar": 22,
    "gramame": 31,
    "jardim-oceania": 38,
    "estados": 27,
    "tambau": 21,
    "brisamar": 17,
    "bancarios": 25,
    "expedicionarios": 23,
    "centro": 14,
    "mangabeira": 27,
    "cruz-das-armas": 6,
    "geisel": 25,
    "castelo-branco": 10,
    "oitizeiro": 4,
    "funcionarios": 27,
    "treze-de-maio": 22,
    "alto-do-mateus": 11,
    "industrias": 23
  },
  "feedsOk": 65,
  "feedsFail": 9,
  "browserOk": 0,
  "browserFail": 9
} as HarvestReport;

export const HARVESTED_LISTINGS: Listing[] = [
  {
    "id": "chv-43241368",
    "title": "Pronto para morar em uma das localizações mais desejadas de João Pessoa.",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 600977,
    "condo": 432,
    "iptu": 3005,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.114820000000001,
    "lng": -34.83428,
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 12.520/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45799396",
    "title": "Apartamento com 3 quartos à venda na Avenida João Cirilo da Silva, 707, Altiplano Cabo Bra",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Avenida João Cirilo Da Silva, 707",
    "area": 105,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1720072,
    "condo": 945,
    "iptu": 8600,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1329,
    "lng": -34.824,
    "thesis": "Portal · 105 m² em Altiplano, pedido R$ 16.382/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45431943",
    "title": "PRONTO PARA MORAR, no Altiplano Cabo Branco - João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 425000,
    "condo": 486,
    "iptu": 2125,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.13012,
    "lng": -34.83894,
    "thesis": "Portal · 54 m² em Altiplano, pedido R$ 7.870/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-32119215",
    "title": "Apartamento com 2 quartos à venda na Travessa Rui Costa, Altiplano Cabo Branco, João Pesso",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Travessa Rui Costa, ",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 412000,
    "condo": 495,
    "iptu": 2060,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 55 m² em Altiplano, pedido R$ 7.491/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45969009",
    "title": "Apartamento à venda em João Pessoa, Jardim Cidade Universitária, com 2 quartos, 60m²",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Carlos Sérgio Da Silva Brandão, 1",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 310000,
    "condo": 540,
    "iptu": 1550,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15742,
    "lng": -34.8439,
    "thesis": "Portal · 60 m² em Jd. Cidade Universitária, pedido R$ 5.167/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45431690",
    "title": "LANÇAMENTO no Altiplano Cabo Branco - João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 408614,
    "condo": 495,
    "iptu": 2043,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1283199999999995,
    "lng": -34.8405,
    "thesis": "Portal · 55 m² em Altiplano, pedido R$ 7.429/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-43008177",
    "title": "Apartamento com 3 quartos à venda na Rua Comerciante Aristides Costa, --, Jardim Cidade Un",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Comerciante Aristides Costa, --",
    "area": 75,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 675,
    "iptu": 3250,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15603,
    "lng": -34.83744,
    "thesis": "Portal · 75 m² em Jd. Cidade Universitária, pedido R$ 8.667/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-27311316",
    "title": "Apartamento para Venda em João Pessoa, Manaíra, 2 dormitórios, 1 suíte, 2 banheiros, 1 vag",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 486,
    "iptu": 1975,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.09676,
    "lng": -34.82748,
    "thesis": "Portal · 54 m² em Manaíra, pedido R$ 7.315/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-31794599",
    "title": "Excelente apartamento à Venda no Bairro da Torre 2 Quartos 1 Suíte",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Júlia Freire, 01",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459793,
    "condo": 540,
    "iptu": 2299,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12126,
    "lng": -34.85793,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.663/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-34098065",
    "title": "Apartamento com 2 quartos à venda na Maurício De Araújo Gama Filho, 201, Portal do Sol, Jo",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Maurício De Araújo Gama Filho, 201",
    "area": 42,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 270000,
    "condo": 378,
    "iptu": 1350,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15713,
    "lng": -34.82203,
    "thesis": "Portal · 42 m² em Portal do Sol, pedido R$ 6.429/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-44281988",
    "title": "Apartamento 03 quartos com vista mar definitiva à venda no Altiplano",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 106,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1437289,
    "condo": 954,
    "iptu": 7186,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12688,
    "lng": -34.84122,
    "thesis": "Portal · 106 m² em Altiplano, pedido R$ 13.559/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-46385374",
    "title": "Apartamento 3 Quartos, Súite, Vaga de Garagem, Bessa, João Pessoa, PB.",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 84,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459990,
    "condo": 756,
    "iptu": 2300,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.06072,
    "lng": -34.8557,
    "thesis": "Portal · 84 m² em Aeroclube, pedido R$ 5.476/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-43965079",
    "title": "Casa com 3 quartos à venda no Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 210,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.071059999999999,
    "lng": -34.846039999999995,
    "thesis": "Portal · 210 m² em Bessa, pedido R$ 4.286/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-46081399",
    "title": "Casa térrea com 3 quartos, R$790.000,00 - Jardim Cidade Universitária, João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 148,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 790000,
    "condo": 0,
    "iptu": 3950,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15164,
    "lng": -34.8494,
    "thesis": "Portal · 148 m² em Jd. Cidade Universitária, pedido R$ 5.338/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-40161615",
    "title": "Casa Top no Portal do Sol. A pouquissimos metros da principal.",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 170,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1590000,
    "condo": 0,
    "iptu": 7950,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15648,
    "lng": -34.84768,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.353/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-44591597",
    "title": "Casa dos sonhos no bairro do cristo - acabamento de alto padrao",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Arnaldo Costa, 1645",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15687,
    "lng": -34.871,
    "thesis": "Portal · 80 m² em Cristo Redentor, pedido R$ 6.875/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-41676076",
    "title": "Casa à venda 400 metros 06 quartos R$: 1.500.000,00 Tambauzinho- João Pessoa- PB",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Rua João Domingos, ",
    "area": 400,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12242,
    "lng": -34.83873,
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 3.750/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-39902093",
    "title": "Ótima casa em terreno de 12 x 32m, 3 salas, 4 quartos sendo 2 suítes",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Tabelião Erinaldo Nunes Oliveira, 102",
    "area": 200,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 690000,
    "condo": 0,
    "iptu": 3450,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1535,
    "lng": -34.83337,
    "thesis": "Portal · 200 m² em Jd. Cidade Universitária, pedido R$ 3.450/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45477803",
    "title": "Casa com 2 quartos à venda na Rua Geraldo Brandão Rocha, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Geraldo Brandão Rocha, ",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 234000,
    "condo": 0,
    "iptu": 1170,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.2012,
    "lng": -34.86285,
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 4.179/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-39667500",
    "title": "Apartamento com 2 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 486,
    "iptu": 1975,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.12976,
    "lng": -34.842659999999995,
    "thesis": "Portal · 54 m² em Altiplano, pedido R$ 7.315/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-44610336",
    "title": "Apartamento a beira mar do jardim oceania em uma excelente localizacao",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Doutor Ivanildo Guedes Pessoa, 1223",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 618000,
    "condo": 450,
    "iptu": 3090,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08623,
    "lng": -34.83697,
    "thesis": "Portal · 50 m² em Jardim Oceania, pedido R$ 12.360/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-44320524",
    "title": "Flat para Venda em João Pessoa, Jardim Oceania, 1 dormitório, 1 suíte, 1 banheiro, 1 vaga",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 22,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 440000,
    "condo": 198,
    "iptu": 2200,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09224,
    "lng": -34.83124,
    "thesis": "Portal · 22 m² em Jardim Oceania, pedido R$ 20.000/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-43352223",
    "title": "Apart Hotel/ Flat com SPA privativo à venda - 1 Dormitório -Venda - João Pessoa, Paraíba",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Avenida Governador Argemiro De Figueiredo, 891",
    "area": 25,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 419900,
    "condo": 225,
    "iptu": 2100,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08785,
    "lng": -34.83424,
    "thesis": "Portal · 25 m² em Jardim Oceania, pedido R$ 16.796/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45477808",
    "title": "Apartamento com 2 quartos à venda na Rua Defensora Pública Fátima Lopes, Gramame, João Pes",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Defensora Pública Fátima Lopes, ",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 187000,
    "condo": 486,
    "iptu": 935,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.20065,
    "lng": -34.86593,
    "thesis": "Portal · 54 m² em Gramame, pedido R$ 3.463/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-39679339",
    "title": "Flat na praia do Bessa prontinho para morar ou rentabilizar!",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 32,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 359000,
    "condo": 288,
    "iptu": 1795,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 32 m² em Jardim Oceania, pedido R$ 11.219/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-44649343",
    "title": "Vendo Apartamento Térreo de 3 quartos ,sendo 1 suíte , Jardim Cidade Universitária -João P",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 79,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 280000,
    "condo": 711,
    "iptu": 1400,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1443200000000004,
    "lng": -34.83848,
    "thesis": "Portal · 79 m² em Jd. Cidade Universitária, pedido R$ 3.544/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-44865518",
    "title": "Apartamento com 3 quartos à venda na Rua Doutor José Aloysio da Costa Machado, Aeroclube, ",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Doutor José Aloysio Da Costa Machado, ",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 620000,
    "condo": 630,
    "iptu": 3100,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.08614,
    "lng": -34.84336,
    "thesis": "Portal · 70 m² em Aeroclube, pedido R$ 8.857/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46002176",
    "title": "Apto 2 quartos em manaíra - excelente oportunidade para investidores",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 506277,
    "condo": 504,
    "iptu": 2531,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1042,
    "lng": -34.84296,
    "thesis": "Portal · 56 m² em Manaíra, pedido R$ 9.041/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-18404709",
    "title": "Flat com 1 quarto à venda no Jardim Oceania, João Pessoa",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 51,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 909000,
    "condo": 459,
    "iptu": 4545,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09565,
    "lng": -34.83359,
    "thesis": "Portal · 51 m² em Jardim Oceania, pedido R$ 17.824/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-44877903",
    "title": "Cobertura com 3 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 136,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 982000,
    "condo": 1224,
    "iptu": 4910,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09008,
    "lng": -34.83544,
    "thesis": "Portal · 136 m² em Jardim Oceania, pedido R$ 7.221/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-33296005",
    "title": "Cobertura com 3 quartos à venda no Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 248,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1250000,
    "condo": 2232,
    "iptu": 6250,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11852,
    "lng": -34.86072,
    "thesis": "Portal · 248 m² em Estados, pedido R$ 5.040/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-36433624",
    "title": "Cobertura Duplex de Altíssimo Luxo em Tambaú ⚜ codigo: 110069",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 311,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 2500000,
    "condo": 2799,
    "iptu": 12500,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11104,
    "lng": -34.830439999999996,
    "thesis": "Portal · 311 m² em Tambaú, pedido R$ 8.039/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-37762974",
    "title": "Oportunidades de Cobertura no Bessa sendo 3 Quartos com Piscina Privada.",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Segismundo Guedes Pereira Neto, ",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 702,
    "iptu": 3400,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.06099,
    "lng": -34.84419,
    "thesis": "Portal · 78 m² em Bessa, pedido R$ 8.718/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-40101241",
    "title": "Cobertura com 4 dormitórios à venda, 247 m² por R$ 1.690.000,00 - Manaíra - João Pessoa/PB",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 247,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1690000,
    "condo": 2223,
    "iptu": 8450,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.10444,
    "lng": -34.82966,
    "thesis": "Portal · 247 m² em Manaíra, pedido R$ 6.842/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-39247520",
    "title": "Cobertura com 3 dormitórios à venda, 151 m² por R$ 950.000,00 - Jardim Oceania - João Pess",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 151,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 950000,
    "condo": 1359,
    "iptu": 4750,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09565,
    "lng": -34.83359,
    "thesis": "Portal · 151 m² em Jardim Oceania, pedido R$ 6.291/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-31809715",
    "title": "Cobertura com 2 dormitórios à venda, 116 m² por R$ 1.850.000,00 - Jardim Oceania - João Pe",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 116,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1850000,
    "condo": 1044,
    "iptu": 9250,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09565,
    "lng": -34.83359,
    "thesis": "Portal · 116 m² em Jardim Oceania, pedido R$ 15.948/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-14358715",
    "title": "Cobertura com 4 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 400,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 4500000,
    "condo": 3600,
    "iptu": 22500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.135759999999999,
    "lng": -34.83774,
    "thesis": "Portal · 400 m² em Altiplano, pedido R$ 11.250/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-31337956",
    "title": "Cobertura para Venda em João Pessoa, Bessa, 2 dormitórios, 1 suíte, 3 banheiros, 2 vagas",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente Afonso Pena, 555",
    "area": 106,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 685000,
    "condo": 954,
    "iptu": 3425,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.0681037,
    "lng": -34.8384239,
    "thesis": "Portal · 106 m² em Bessa, pedido R$ 6.462/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-29119130",
    "title": "Cobertura com 2 quartos à venda na Rua José Augusto Trindade, 490, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua José Augusto Trindade, 490",
    "area": 120,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1050000,
    "condo": 1080,
    "iptu": 5250,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1175426,
    "lng": -34.8278946,
    "thesis": "Portal · 120 m² em Tambaú, pedido R$ 8.750/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-35795109",
    "title": "Apartamento Mobiliado para Venda em João Pessoa, Tambaú, 1 dormitório, 1 banheiro, 1 vaga",
    "type": "kitnet",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 26,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 234,
    "iptu": 1900,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1177600000000005,
    "lng": -34.83572,
    "thesis": "Portal · 26 m² em Tambaú, pedido R$ 14.615/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-43117770",
    "title": "Apartamento A VENDA PORTEIRA FECHADA, 2 quartos - Tambaú, João Pessoa-PB",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Sidney Clemente Dore, 333",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 689000,
    "condo": 441,
    "iptu": 3445,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11384,
    "lng": -34.82997,
    "thesis": "Portal · 49 m² em Tambaú, pedido R$ 14.061/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-45248403",
    "title": "Apartamento de 41 m² com iluminação natural, localização estratégica em Tambaú, João Pesso",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 41,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1016019,
    "condo": 369,
    "iptu": 5080,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11308,
    "lng": -34.82408,
    "thesis": "Portal · 41 m² em Tambaú, pedido R$ 24.781/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-41144761",
    "title": "Apartamento para Venda em João Pessoa, Tambaú, 3 dormitórios, 1 suíte, 2 banheiros, 2 vaga",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Silvino Lopes, 380",
    "area": 93,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1680000,
    "condo": 837,
    "iptu": 8400,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11452,
    "lng": -34.8285,
    "thesis": "Portal · 93 m² em Tambaú, pedido R$ 18.065/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45037738",
    "title": "Apartamento com 3 quartos à venda na Rua Sidney Clemente Dore, 220, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Sidney Clemente Dore, 220",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 700000,
    "condo": 720,
    "iptu": 3500,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11504,
    "lng": -34.83006,
    "thesis": "Portal · 80 m² em Tambaú, pedido R$ 8.750/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-37163051",
    "title": "Apartamento em Tambaú 03 Suítes 145m² + DCE Excelente localização",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 145,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1780000,
    "condo": 1305,
    "iptu": 8900,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1135600000000005,
    "lng": -34.82432,
    "thesis": "Portal · 145 m² em Tambaú, pedido R$ 12.276/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-39355857",
    "title": "Apartamento Mobiliado para Venda em João Pessoa, Tambaú, 3 dormitórios, 3 suítes, 1 banhei",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 157,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1600000,
    "condo": 1413,
    "iptu": 8000,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.109360000000001,
    "lng": -34.82852,
    "thesis": "Portal · 157 m² em Tambaú, pedido R$ 10.191/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45247909",
    "title": "Cobertura com 5 dormitórios à venda, 315 m² por R$ 2.500.000,00 - Tambaú - João Pessoa/PB",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 315,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2500000,
    "condo": 2835,
    "iptu": 12500,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1138,
    "lng": -34.81916,
    "thesis": "Portal · 315 m² em Tambaú, pedido R$ 7.937/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-37222149",
    "title": "Apartamento com 1 quarto à venda no Tambaú, João Pessoa",
    "type": "kitnet",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 29,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 480000,
    "condo": 261,
    "iptu": 2400,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.109240000000001,
    "lng": -34.82828,
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.552/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-37669150",
    "title": "Apartamento para Venda em João Pessoa, Tambaú, 3 dormitórios- Empreendimento pronto! Oport",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Nego, 401",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 930000,
    "condo": 684,
    "iptu": 4650,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11403,
    "lng": -34.82686,
    "thesis": "Portal · 76 m² em Tambaú, pedido R$ 12.237/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-37836407",
    "title": "Imóvel único no coração de Tambau, sinta o campo em casa e viva seus melhores momentos",
    "type": "casa",
    "bairroId": "tambau",
    "street": "Rua Nossa Senhora Dos Navegantes, 205",
    "area": 170,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1250000,
    "condo": 0,
    "iptu": 6250,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11116,
    "lng": -34.82525,
    "thesis": "Portal · 170 m² em Tambaú, pedido R$ 7.353/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46538275",
    "title": "Apartamento com 2 quartos à venda na Rua Severino Massa Spinelli, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Severino Massa Spinelli, ",
    "area": 110,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 689000,
    "condo": 990,
    "iptu": 3445,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.11551,
    "lng": -34.82945,
    "thesis": "Portal · 110 m² em Tambaú, pedido R$ 6.264/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45972032",
    "title": "Apartamento com 2 quartos à venda na Rua Sidney Clemente Dore, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Sidney Clemente Dore, ",
    "area": 90,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 490000,
    "condo": 810,
    "iptu": 2450,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.11456,
    "lng": -34.83012,
    "thesis": "Portal · 90 m² em Tambaú, pedido R$ 5.444/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45869022",
    "title": "Apartamento 190m², 4 quartos (3 suítes) para venda em Tambaú — um dos bairros mais complet",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Monteiro Lobato, 690",
    "area": 190,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1230000,
    "condo": 1710,
    "iptu": 6150,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11789,
    "lng": -34.82821,
    "thesis": "Portal · 190 m² em Tambaú, pedido R$ 6.474/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-37575440",
    "title": "Essence- 2 Quartos sendo 1 suíte com vista para o mar- No coração de Mirarar- Oportunidade",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Senador Ruy Carneiro, 700",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 585,
    "iptu": 3750,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11301,
    "lng": -34.82914,
    "thesis": "Portal · 65 m² em Tambaú, pedido R$ 11.538/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-43022551",
    "title": "Apartamento com 2 quartos à venda no Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 519990,
    "condo": 450,
    "iptu": 2600,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1235800000000005,
    "lng": -34.83212,
    "thesis": "Portal · 50 m² em Cabo Branco, pedido R$ 10.400/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45249079",
    "title": "Apartamento à Venda em Cabo Branco com 2 Quartos com Suítes e Lazer Completo",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 574489,
    "condo": 432,
    "iptu": 2872,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1214200000000005,
    "lng": -34.826600000000006,
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 11.969/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-37308851",
    "title": "Charme Atemporal no Coração do Cabo Branco",
    "type": "kitnet",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 28,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 470974,
    "condo": 252,
    "iptu": 2355,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12202,
    "lng": -34.826480000000004,
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 16.821/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40886056",
    "title": "Apartamento Mobiliado para Venda em João Pessoa, Cabo Branco, 2 dormitórios, 1 suíte, 1 ba",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 73,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 850000,
    "condo": 657,
    "iptu": 4250,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.117940000000001,
    "lng": -34.834160000000004,
    "thesis": "Portal · 73 m² em Cabo Branco, pedido R$ 11.644/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-43068893",
    "title": "NAI Alliance | Apartamentos de Alto Padrão Beira-Mar no Cabo Branco em João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 108,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 2158438,
    "condo": 972,
    "iptu": 10792,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11554,
    "lng": -34.829,
    "thesis": "Portal · 108 m² em Cabo Branco, pedido R$ 19.986/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45285616",
    "title": "Apartamento a Venda 137m² Vista MAR - 4 Quartos - 2 Suítes - 4 Banheiros - 2 vagas de Gara",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 137,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 851900,
    "condo": 1233,
    "iptu": 4260,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.117940000000001,
    "lng": -34.817840000000004,
    "thesis": "Portal · 137 m² em Cabo Branco, pedido R$ 6.218/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-45248586",
    "title": "Apartamento garden | 2 dorm. | 146 m² | r$ 1.050.000 - cabo branco - joão pessoa/pb",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 85,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1040000,
    "condo": 765,
    "iptu": 5200,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.119260000000001,
    "lng": -34.82168,
    "thesis": "Portal · 85 m² em Cabo Branco, pedido R$ 12.235/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-36227362",
    "title": "Apartamento Alto Padrão para Venda em João Pessoa, Cabo Branco, 2 dormitórios, 2 suítes, 1",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 72,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1166400,
    "condo": 648,
    "iptu": 5832,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11866,
    "lng": -34.827200000000005,
    "thesis": "Portal · 72 m² em Cabo Branco, pedido R$ 16.200/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-40821043",
    "title": "Apartamento à Venda em Cabo Branco com 3 Suítes e Lazer Completo Joao Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 770678,
    "condo": 657,
    "iptu": 3853,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1235800000000005,
    "lng": -34.82672,
    "thesis": "Portal · 73 m² em Cabo Branco, pedido R$ 10.557/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-37476458",
    "title": "Apartamento Garden | 2 dormitórios | 109 m² | R$ 870.000 - Cabo Branco - João Pessoa/PB",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 869000,
    "condo": 513,
    "iptu": 4345,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1151800000000005,
    "lng": -34.82144,
    "thesis": "Portal · 57 m² em Cabo Branco, pedido R$ 15.246/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-45512486",
    "title": "Apartamento Mobiliado com 92 m² e Varanda Gourmet em Cabo Branco",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 92,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1190000,
    "condo": 828,
    "iptu": 5950,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1162600000000005,
    "lng": -34.817600000000006,
    "thesis": "Portal · 92 m² em Cabo Branco, pedido R$ 12.935/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-44774611",
    "title": "Excelente cobertura duplex de alto padrao no cabo branco com area privativa e hidro",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, ",
    "area": 122,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1080000,
    "condo": 1098,
    "iptu": 5400,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.13883,
    "lng": -34.81762,
    "thesis": "Portal · 122 m² em Cabo Branco, pedido R$ 8.852/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-37476561",
    "title": "Apartamento de 83,93 m² em Cabo Branco com 3 suítes, lazer completo e perto da praia",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 83,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 803187,
    "condo": 747,
    "iptu": 4016,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11578,
    "lng": -34.82096000000001,
    "thesis": "Portal · 83 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45391053",
    "title": "Apartamento com 2 quartos à venda na Rua Silvino Chaves, 851, Manaíra, João Pessoa",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Silvino Chaves, 851",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 499900,
    "condo": 495,
    "iptu": 2500,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.10723,
    "lng": -34.8362,
    "thesis": "Portal · 55 m² em Manaíra, pedido R$ 9.089/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-43604573",
    "title": "Apartamento Alto Padrão à Venda em Manaíra | Vista Mar Definitiva",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 148,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1290000,
    "condo": 1332,
    "iptu": 6450,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09772,
    "lng": -34.83828,
    "thesis": "Portal · 148 m² em Manaíra, pedido R$ 8.716/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-42390852",
    "title": "Apartamento à venda, 3 quartos, sendo 01 suíte por R$ 585.000,00, em Manaíra em João Pesso",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Engenheiro Luciano Vareda, 105",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 585000,
    "condo": 657,
    "iptu": 2925,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11176,
    "lng": -34.82994,
    "thesis": "Portal · 73 m² em Manaíra, pedido R$ 8.014/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-44711121",
    "title": "OPORTUNIDADE . Apartamento com varanda ,em Manaira, para moradia ou investimento",
    "type": "apto",
    "bairroId": "manaira",
    "street": ":  Undefined Index: Street In  On Line, :  Undefin",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 630,
    "iptu": 2250,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1044,
    "lng": -34.82968,
    "thesis": "Portal · 70 m² em Manaíra, pedido R$ 6.429/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-36968775",
    "title": "Apartamento para Venda em João Pessoa, Manaíra, 4 dormitórios, 3 suítes, 5 banheiros, 3 va",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Avenida Jacinto Dantas, ",
    "area": 185,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1270000,
    "condo": 1665,
    "iptu": 6350,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.10443,
    "lng": -34.83143,
    "thesis": "Portal · 185 m² em Manaíra, pedido R$ 6.865/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-30253826",
    "title": "Cobertura com 3 quartos à venda no Manaíra, João Pessoa",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 216,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1850000,
    "condo": 1944,
    "iptu": 9250,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09616,
    "lng": -34.83864,
    "thesis": "Portal · 216 m² em Manaíra, pedido R$ 8.565/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45595069",
    "title": "Apartamento à Venda em Manaíra com 242 m² e 150 m² de Área Externa Exclusiva",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Francisco Claudino Pereira, ",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 850000,
    "condo": 810,
    "iptu": 4250,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.10147,
    "lng": -34.83857,
    "thesis": "Portal · 90 m² em Manaíra, pedido R$ 9.444/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-26811408",
    "title": "Oportunidade, Vendo lindo Flat novo recém entregue com localização privilegiada próximo do",
    "type": "flat",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 28,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 252,
    "iptu": 1500,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09796,
    "lng": -34.84068,
    "thesis": "Portal · 28 m² em Manaíra, pedido R$ 10.714/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-30646960",
    "title": "Simple smart Residence - APARTAMENTO EM MANAIRA/ APARTAMENTO EM JOÃO PESSOA/ APARTAMENTO N",
    "type": "flat",
    "bairroId": "manaira",
    "street": "Rua Escrivão Sebastião De Azevedo Bastos, ",
    "area": 27,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 338300,
    "condo": 243,
    "iptu": 1692,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09968,
    "lng": -34.84096,
    "thesis": "Portal · 27 m² em Manaíra, pedido R$ 12.530/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-33646044",
    "title": "Apartamento com 3 dormitórios à venda, 123 m² por R$ 595.000,00 - Manaíra - João Pessoa/PB",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 123,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 595000,
    "condo": 1107,
    "iptu": 2975,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.10444,
    "lng": -34.82966,
    "thesis": "Portal · 123 m² em Manaíra, pedido R$ 4.837/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45125234",
    "title": "Apartamento 83m² para venda ou locação na melhor localização de Manaíra, bela vista da var",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 83,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 368999,
    "condo": 747,
    "iptu": 1845,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.10036,
    "lng": -34.83072,
    "thesis": "Portal · 83 m² em Manaíra, pedido R$ 4.446/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-39248808",
    "title": "Apartamento com 2 quartos à venda na Avenida Sapé, 700, Manaíra, João Pessoa",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Avenida Sapé, 700",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 560000,
    "condo": 630,
    "iptu": 2800,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.10856,
    "lng": -34.8342,
    "thesis": "Portal · 70 m² em Manaíra, pedido R$ 8.000/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45249082",
    "title": "Apartamento com 3 dormitórios à venda, 80 m² por R$ 875.961,59 - Manaíra - João Pessoa/PB",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 875961,
    "condo": 720,
    "iptu": 4380,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0994,
    "lng": -34.8342,
    "thesis": "Portal · 80 m² em Manaíra, pedido R$ 10.950/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-43107221",
    "title": "Apartamento com Vista Mar e 3 Quartos à Venda em Manaíra | 300m da Praia em João Pessoa",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 126,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1400000,
    "condo": 1134,
    "iptu": 7000,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.10108,
    "lng": -34.84248,
    "thesis": "Portal · 126 m² em Manaíra, pedido R$ 11.111/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-28704702",
    "title": "Apartamento com 2 dormitórios à venda, 58 m² por R$ 535.000,00 - Bessa - João Pessoa/PB",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 535000,
    "condo": 522,
    "iptu": 2675,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.06622,
    "lng": -34.84388,
    "thesis": "Portal · 58 m² em Bessa, pedido R$ 9.224/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45322240",
    "title": "Apartamento com 3 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 116,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 1044,
    "iptu": 2750,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.07358,
    "lng": -34.82984,
    "thesis": "Portal · 116 m² em Bessa, pedido R$ 4.741/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-41195833",
    "title": "Apartamento com 3 quartos à venda na Rua Josué Guedes Pereira, --, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Josué Guedes Pereira, --",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 765,
    "iptu": 3250,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.07226,
    "lng": -34.83858,
    "thesis": "Portal · 85 m² em Bessa, pedido R$ 7.647/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-36375819",
    "title": "Cobertura com 3 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 158,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1300000,
    "condo": 1422,
    "iptu": 6500,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.06734,
    "lng": -34.846999999999994,
    "thesis": "Portal · 158 m² em Bessa, pedido R$ 8.228/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-44877878",
    "title": "Apartamento com 2 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 548000,
    "condo": 486,
    "iptu": 2740,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.06794,
    "lng": -34.837399999999995,
    "thesis": "Portal · 54 m² em Bessa, pedido R$ 10.148/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46406336",
    "title": "Apartamento com 3 dormitórios à venda, 72 m² por R$ 370.000,00 - Bessa - João Pessoa/PB",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 72,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 370000,
    "condo": 648,
    "iptu": 1850,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.08075,
    "lng": -34.83135,
    "thesis": "Portal · 72 m² em Bessa, pedido R$ 5.139/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-44440411",
    "title": "Apartamento à venda com 3 quartos no bairro do Bessa - João Pessoa - PB",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente José Linhares, 423",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 497000,
    "condo": 702,
    "iptu": 2485,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.06315,
    "lng": -34.84649,
    "thesis": "Portal · 78 m² em Bessa, pedido R$ 6.372/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45197781",
    "title": "Apartamento com 1 quarto à venda no Bessa, João Pessoa",
    "type": "kitnet",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 37,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 475000,
    "condo": 333,
    "iptu": 2375,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.073099999999999,
    "lng": -34.83392,
    "thesis": "Portal · 37 m² em Bessa, pedido R$ 12.838/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-45579989",
    "title": "Apartamento para Venda em João Pessoa, Bessa, 3 dormitórios, 1 suíte, 3 banheiros, 2 vagas",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 141,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 970000,
    "condo": 1269,
    "iptu": 4850,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.0695,
    "lng": -34.829719999999995,
    "thesis": "Portal · 141 m² em Bessa, pedido R$ 6.879/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-31447175",
    "title": "Edifício Palm Beach - APARTAMENTO NO BESSA / APARTAMENTO NO RESIDENCIAL PALM BEACH BESSA /",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Paulo Roberto De Souza Acioly, ",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 545000,
    "condo": 630,
    "iptu": 2725,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.06678,
    "lng": -34.84373,
    "thesis": "Portal · 70 m² em Bessa, pedido R$ 7.786/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45078911",
    "title": "Apartamento com 3 quartos à venda na Avenida Arthur Monteiro De Paiva, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Arthur Monteiro De Paiva, ",
    "area": 115,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1050000,
    "condo": 1035,
    "iptu": 5250,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.06389,
    "lng": -34.84093,
    "thesis": "Portal · 115 m² em Bessa, pedido R$ 9.130/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45368892",
    "title": "Apartamento com 2 quartos à venda na Rua José Simões de Araújo, 65, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua José Simões De Araújo, 65",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 529000,
    "condo": 513,
    "iptu": 2645,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.07626,
    "lng": -34.83776,
    "thesis": "Portal · 57 m² em Bessa, pedido R$ 9.281/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-40570397",
    "title": "Apartamento térreo Garden para venda, 2 suítes, frente mar, Bessa, JOÃO PESSOA – PB",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Arthur Monteiro De Paiva, 1681",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 690000,
    "condo": 522,
    "iptu": 3450,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.06054,
    "lng": -34.84252,
    "thesis": "Portal · 58 m² em Bessa, pedido R$ 11.897/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43861944",
    "title": "Viva o Melhor do Jardim Oceania, a Poucos Passos do Mar",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, 154",
    "area": 42,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 455605,
    "condo": 378,
    "iptu": 2278,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08687,
    "lng": -34.8356,
    "thesis": "Portal · 42 m² em Jardim Oceania, pedido R$ 10.848/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-41036538",
    "title": "Apartamento com 2 dormitórios à venda, 59 m² por R$ 630.000,00 - Jardim Oceania - João Pes",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 531,
    "iptu": 3150,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09565,
    "lng": -34.83359,
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 10.678/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-40596933",
    "title": "Apartamento a venda mobiliado com 2 quartos, sendo 1 suíte, nascente norte, localizado na ",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Avenida Governador Argemiro De Figueiredo, 2011",
    "area": 61,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 549,
    "iptu": 3250,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08858,
    "lng": -34.83439,
    "thesis": "Portal · 61 m² em Jardim Oceania, pedido R$ 10.656/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-29492650",
    "title": "OPORTUNIDADE IMPERDÍVEL! Apartamentos à venda com 2 e 4 quartos no Jardim Oceania",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Josemar Rodrigues De Carvalho, 341",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 641830,
    "condo": 540,
    "iptu": 3209,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0838,
    "lng": -34.83693,
    "thesis": "Portal · 60 m² em Jardim Oceania, pedido R$ 10.697/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45057562",
    "title": "Apartamento com 2 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 810000,
    "condo": 585,
    "iptu": 4050,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0872,
    "lng": -34.82884,
    "thesis": "Portal · 65 m² em Jardim Oceania, pedido R$ 12.462/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-43171118",
    "title": "Apartamento com 3 dormitórios à venda, 89 m² por R$ 1.100.000,00 - Jardim Oceania - João P",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 89,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1100000,
    "condo": 801,
    "iptu": 5500,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09565,
    "lng": -34.83359,
    "thesis": "Portal · 89 m² em Jardim Oceania, pedido R$ 12.360/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-39087746",
    "title": "Apartamento 2 Quartos no Jardim Oceania | Viva a poucos Passos do Mar - João Pessoa/PB cod",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 63,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1050000,
    "condo": 567,
    "iptu": 5250,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09176,
    "lng": -34.8424,
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 16.667/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-37476459",
    "title": "Apartamento à Venda no Jardim Oceania | 65,27 m² | 1 Vagas | 2 Suítes",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 733104,
    "condo": 585,
    "iptu": 3666,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08396,
    "lng": -34.83184,
    "thesis": "Portal · 65 m² em Jardim Oceania, pedido R$ 11.279/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-42571546",
    "title": "Apartamento com 3 quartos à venda na Rua Ariosvaldo Alves de Azevedo, Jardim Oceania, João",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Ariosvaldo Alves De Azevedo, ",
    "area": 84,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1070300,
    "condo": 756,
    "iptu": 5352,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0775,
    "lng": -34.83367,
    "thesis": "Portal · 84 m² em Jardim Oceania, pedido R$ 12.742/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45667264",
    "title": "Apartamento com 1 quarto à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 59,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 531,
    "iptu": 3250,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09032,
    "lng": -34.83664,
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 11.017/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-41195827",
    "title": "Apartamento com 3 quartos à venda na Rua Oldena Carneiro Pereira de Melo, --, Jardim Ocean",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Oldena Carneiro Pereira De Melo, --",
    "area": 82,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1200000,
    "condo": 738,
    "iptu": 6000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08075,
    "lng": -34.83488,
    "thesis": "Portal · 82 m² em Jardim Oceania, pedido R$ 14.634/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46029855",
    "title": "Apartamento com 4 quartos à venda na Rua Themístocles da Costa Brito, 315, Jardim Oceania,",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Themístocles Da Costa Brito, 315",
    "area": 98,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1300000,
    "condo": 882,
    "iptu": 6500,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09236,
    "lng": -34.84132,
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 13.265/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44525383",
    "title": "Apartamento à venda com 2 quarto na Praia do Bessa - João Pessoa/PB",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, 506",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 531,
    "iptu": 3400,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08402,
    "lng": -34.83488,
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 11.525/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-33875977",
    "title": "Apartamento com 2 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 613350,
    "condo": 531,
    "iptu": 3067,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09116,
    "lng": -34.84612,
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 10.396/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-44434405",
    "title": "Bosque das Orquídeas | Viva o privilégio de morar no Altiplano",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 67,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 490000,
    "condo": 603,
    "iptu": 2450,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.12688,
    "lng": -34.838699999999996,
    "thesis": "Portal · 67 m² em Altiplano, pedido R$ 7.313/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-37476563",
    "title": "Apartamento de 1 suíte no Altiplano Cabo Branco Nobre com 2 vagas, porcelanato, no litoral",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 59,
    "rooms": 1,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1229610,
    "condo": 531,
    "iptu": 6148,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12724,
    "lng": -34.83666,
    "thesis": "Portal · 59 m² em Altiplano, pedido R$ 20.841/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-27006308",
    "title": "OPORTUNIDADE IMPERDÍVEL! Lindo apartamento à venda no Altiplano/Cabo Branco",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Josita Almeida, 350",
    "area": 64,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 691560,
    "condo": 576,
    "iptu": 3458,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14032,
    "lng": -34.81703,
    "thesis": "Portal · 64 m² em Altiplano, pedido R$ 10.806/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-33876006",
    "title": "Apartamento 2 Quartos no Altiplano - Elevador e Área de Lazer",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 486,
    "iptu": 1900,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.135879999999999,
    "lng": -34.8489,
    "thesis": "Portal · 54 m² em Altiplano, pedido R$ 7.037/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-29617435",
    "title": "Cobertura com 2 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 132,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 710000,
    "condo": 1188,
    "iptu": 3550,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1354,
    "lng": -34.84494,
    "thesis": "Portal · 132 m² em Altiplano, pedido R$ 5.379/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45368878",
    "title": "Apartamento 2 dormitórios à venda Altiplano Cabo Branco João Pessoa/PB",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Maria José Caetano Da Silva, 90",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 425000,
    "condo": 477,
    "iptu": 2125,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.13842,
    "lng": -34.83228,
    "thesis": "Portal · 53 m² em Altiplano, pedido R$ 8.019/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-37317314",
    "title": "Apartamento com 4 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 220,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2400000,
    "condo": 1980,
    "iptu": 12000,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1325199999999995,
    "lng": -34.83378,
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 10.909/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-40848565",
    "title": "Exclusividade e Conforto em Cabo Branco | Apartamento Alto Padrão no 33º Andar",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Avenida João Cirilo Da Silva, ",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1260000,
    "condo": 630,
    "iptu": 6300,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1329,
    "lng": -34.824,
    "thesis": "Portal · 70 m² em Altiplano, pedido R$ 18.000/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-46277084",
    "title": "Apartamento com 3 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 720,
    "iptu": 3400,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1276,
    "lng": -34.84254,
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 8.500/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-41195795",
    "title": "Apartamento com 2 quartos à venda na Rua Bartolomeu Luiz Trocolli, --, Altiplano Cabo Bran",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Bartolomeu Luiz Trocolli, --",
    "area": 80,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 860000,
    "condo": 720,
    "iptu": 4300,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13614,
    "lng": -34.8234,
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 10.750/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-35274275",
    "title": "EXCELENTE OPORTUNIDADE! Apartamento à venda com 2 quartos no Aeroclube",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Pastor Josebias Fialho Marinho, 792",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 595485,
    "condo": 531,
    "iptu": 2977,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08603,
    "lng": -34.84097,
    "thesis": "Portal · 59 m² em Aeroclube, pedido R$ 10.093/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45247906",
    "title": "DE R$ 920 MIL POR R$ 899 MIL | Apartamento com 3 quartos e 139 m² no Aeroclube",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 139,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 900000,
    "condo": 1251,
    "iptu": 4500,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.059159999999999,
    "lng": -34.84106,
    "thesis": "Portal · 139 m² em Aeroclube, pedido R$ 6.475/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46152322",
    "title": "Apartamento para Venda em João Pessoa, Aeroclube, 3 dormitórios, 3 suítes, 4 banheiros, 2 ",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Bacharel José De Oliveira Curchatuz, 691",
    "area": 135,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1530000,
    "condo": 1215,
    "iptu": 7650,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08236,
    "lng": -34.84022,
    "thesis": "Portal · 135 m² em Aeroclube, pedido R$ 11.333/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-44804558",
    "title": "Apartamento à venda com 4 quartos no Aeroclube/Bessa - João Pessoa/PB",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Deputado Balduíno Minervino De Carvalho, 155",
    "area": 171,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 900000,
    "condo": 1539,
    "iptu": 4500,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.0962534,
    "lng": -34.8455369,
    "thesis": "Portal · 171 m² em Aeroclube, pedido R$ 5.263/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-44848384",
    "title": "Apartamento com 1 quarto à venda na Rua Raimundo S. de Carvalho, Aeroclube, João Pessoa",
    "type": "kitnet",
    "bairroId": "aeroclube",
    "street": "Rua Raimundo S. De Carvalho, ",
    "area": 35,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 390000,
    "condo": 315,
    "iptu": 1950,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0622799999999994,
    "lng": -34.84178,
    "thesis": "Portal · 35 m² em Aeroclube, pedido R$ 11.143/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-42490204",
    "title": "Apartamento Alto Padrão Porteira Fechada no Aeroclube | 136m² | 3 Suítes | Lazer Completo ",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 136,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1550000,
    "condo": 1224,
    "iptu": 7750,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0548399999999996,
    "lng": -34.85246,
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.397/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45989910",
    "title": "Apartamento Mobiliado - 75m² - 3 Quartos - varanda - 2 vaga de garagem - Aeroclube - João ",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 75,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 729990,
    "condo": 675,
    "iptu": 3650,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.06204,
    "lng": -34.845980000000004,
    "thesis": "Portal · 75 m² em Aeroclube, pedido R$ 9.733/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-36433799",
    "title": "Apartamento com 4 quartos à venda no Aeroclube, João Pessoa",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 136,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1500000,
    "condo": 1224,
    "iptu": 7500,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.060239999999999,
    "lng": -34.85174,
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.029/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46657014",
    "title": "Apartamento 2 quartos no Bessa, Elevador, lazer na cobertura",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 462000,
    "condo": 441,
    "iptu": 2310,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.05772,
    "lng": -34.85246,
    "thesis": "Portal · 49 m² em Aeroclube, pedido R$ 9.429/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45869825",
    "title": "Apartamento a poucos passos do Parque Pahayba 3 e do Parque Cidade",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 46,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 360000,
    "condo": 414,
    "iptu": 1800,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.05796,
    "lng": -34.84382,
    "thesis": "Portal · 46 m² em Aeroclube, pedido R$ 7.826/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45668443",
    "title": "Apartamento com 3 quartos à venda no Aeroclube, João Pessoa",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 780000,
    "condo": 810,
    "iptu": 3900,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.0549599999999995,
    "lng": -34.841660000000005,
    "thesis": "Portal · 90 m² em Aeroclube, pedido R$ 8.667/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-39270452",
    "title": "Empreendimento completo próximo à praia e ao maior parque da cidade",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Maria Rosa Padilha, 180",
    "area": 89,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1144423,
    "condo": 801,
    "iptu": 5722,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09551,
    "lng": -34.84255,
    "thesis": "Portal · 89 m² em Aeroclube, pedido R$ 12.859/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-37224490",
    "title": "Cobertura Duplex para Venda em João Pessoa, Aeroclube, 3 dormitórios, 1 suíte, 2 banheiros",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua José Nunes Machado, 200",
    "area": 123,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 580000,
    "condo": 1107,
    "iptu": 2900,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.08673,
    "lng": -34.84344,
    "thesis": "Portal · 123 m² em Aeroclube, pedido R$ 4.715/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45478432",
    "title": "Apartamento duplex a venda, 3 quartos próximo ao Parque Parahyba 4 no Aeroclube",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Médica Maria De Lourdes Barbosa Saraiva, 95",
    "area": 111,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 575000,
    "condo": 999,
    "iptu": 2875,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09446,
    "lng": -34.84486,
    "thesis": "Portal · 111 m² em Aeroclube, pedido R$ 5.180/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46026112",
    "title": "Apartamento com 1 quarto à venda no Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 42,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 430000,
    "condo": 378,
    "iptu": 2150,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 42 m² em Brisamar, pedido R$ 10.238/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45159979",
    "title": "Apartamento com 3 quartos à venda no Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 150,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1500000,
    "condo": 1350,
    "iptu": 7500,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09424,
    "lng": -34.84524,
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 10.000/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-44699709",
    "title": "Apartamento de 120 m² | 3 Suítes, Vista para o Mar e Posição Nascente/Sul codigo: 353523",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 120,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1080000,
    "condo": 1080,
    "iptu": 5400,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09052,
    "lng": -34.8444,
    "thesis": "Portal · 120 m² em Brisamar, pedido R$ 9.000/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-44925587",
    "title": "Apartamento com 3 quartos à venda na Rua José Brasilino Leite, 61, Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua José Brasilino Leite, 61",
    "area": 148,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1420999,
    "condo": 1332,
    "iptu": 7105,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.10758,
    "lng": -34.84202,
    "thesis": "Portal · 148 m² em Brisamar, pedido R$ 9.601/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-43965992",
    "title": "Apto Alto Padrão - 4 Quartos - 2 Suítes - 250 m² - Brisamar, João Pessoa/PB",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Catulo Da Paixão Cearense, 627",
    "area": 250,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1500000,
    "condo": 2250,
    "iptu": 7500,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11633,
    "lng": -34.8375,
    "thesis": "Portal · 250 m² em Brisamar, pedido R$ 6.000/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-38297299",
    "title": "Apartamento com 3 quartos à venda na Rua Cassimiro de Abreu, 371, Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Cassimiro De Abreu, 371",
    "area": 72,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 648,
    "iptu": 2750,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11364,
    "lng": -34.84015,
    "thesis": "Portal · 72 m² em Brisamar, pedido R$ 7.639/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-43572720",
    "title": "Apartamento à venda com 135m² com 3 quartos, sendo 2 suites e vista mar no bairro Brisamar",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 135,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 630000,
    "condo": 1215,
    "iptu": 3150,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.09652,
    "lng": -34.85364,
    "thesis": "Portal · 135 m² em Brisamar, pedido R$ 4.667/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-23482487",
    "title": "Apartamento com 2 quartos à venda no Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 665000,
    "condo": 540,
    "iptu": 3325,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09748,
    "lng": -34.8582,
    "thesis": "Portal · 60 m² em Brisamar, pedido R$ 11.083/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-42203938",
    "title": "Apartamento para Venda em João Pessoa, Brisamar, 3 dormitórios, 1 suíte, 2 banheiros, 2 va",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 760000,
    "condo": 810,
    "iptu": 3800,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.0964,
    "lng": -34.84368,
    "thesis": "Portal · 90 m² em Brisamar, pedido R$ 8.444/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-43208711",
    "title": "Lasar segall - OPORTUNIDADE / APARTAMENTO CONDOMÍNIO FECHADO EM JOAO PESSOA/ APARTAMENTO N",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Custódio Domingos Dos Santos, ",
    "area": 183,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1750000,
    "condo": 1647,
    "iptu": 8750,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11471,
    "lng": -34.8405,
    "thesis": "Portal · 183 m² em Brisamar, pedido R$ 9.563/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46028198",
    "title": "Apartamento andar alto no bairro do brisamar 98m 2 vaga de garagem",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Juracy De Carvalho Luna, ",
    "area": 98,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 882,
    "iptu": 3750,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11595,
    "lng": -34.83815,
    "thesis": "Portal · 98 m² em Brisamar, pedido R$ 7.653/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-42520277",
    "title": "Apartamento com 2 dormitórios à venda, 60 m² por R$ 335.000 - Torre - João Pessoa/PB",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 335000,
    "condo": 540,
    "iptu": 1675,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11971,
    "lng": -34.85065,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.583/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-37408081",
    "title": "Apartamento para Venda em João Pessoa, Torre, 3 dormitórios, 1 suíte, 2 banheiros, 1 vaga",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Júlia Freire, 651",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 499000,
    "condo": 531,
    "iptu": 2495,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12112,
    "lng": -34.85979,
    "thesis": "Portal · 59 m² em Torre, pedido R$ 8.458/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-44738831",
    "title": "Apartamento com 2 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 540,
    "iptu": 1500,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.118919999999999,
    "lng": -34.862759999999994,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.000/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-43966009",
    "title": "Apartamento com 2 quartos à venda na Rua Etelvina Macedo de Mendonça, 630, Torre, João Pes",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, 630",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 540,
    "iptu": 1750,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13342,
    "lng": -34.85921,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.833/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45799392",
    "title": "Apartamento com 2 quartos à venda na Avenida Júlia Freire, 651, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Júlia Freire, 651",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 476001,
    "condo": 540,
    "iptu": 2380,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12112,
    "lng": -34.85979,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.933/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-44544334",
    "title": "VENDA: Ótimo Aptº em Condomínio Clube! Com 59 m², 2 Quartos, sendo 1 Suíte, Linda Vista do",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 349780,
    "condo": 531,
    "iptu": 1749,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11592,
    "lng": -34.86468,
    "thesis": "Portal · 59 m² em Torre, pedido R$ 5.928/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-34090192",
    "title": "Apartamento com 2 quartos à venda na Rua Júlia Freire, 651, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Júlia Freire, 651",
    "area": 61,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 472000,
    "condo": 549,
    "iptu": 2360,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12112,
    "lng": -34.85979,
    "thesis": "Portal · 61 m² em Torre, pedido R$ 7.738/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-42808365",
    "title": "Apartamento com 2 quartos à venda na Avenida Júlia Freire, --, Torre, João Pessoa, 60 m2 p",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Júlia Freire, --",
    "area": 60,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 478897,
    "condo": 540,
    "iptu": 2394,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12114,
    "lng": -34.86061,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.982/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-44729518",
    "title": "Apartamento com 3 quartos à venda na Rua Etelvina Macedo de Mendonça, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, ",
    "area": 79,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 400000,
    "condo": 711,
    "iptu": 2000,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.13145,
    "lng": -34.85964,
    "thesis": "Portal · 79 m² em Torre, pedido R$ 5.063/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-37977280",
    "title": "Apartamento com 2 quartos à venda na Avenida Juarez Távora, 830, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Juarez Távora, 830",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 360000,
    "condo": 432,
    "iptu": 1800,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12224,
    "lng": -34.86306,
    "thesis": "Portal · 48 m² em Torre, pedido R$ 7.500/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-43404149",
    "title": "Condomínio Vanessa Residence - OPORTUNIDADE APARTAMENTO A VENDA EM TORRE , JOÃO PESSOA PB ",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Otacílio De Albuquerque, ",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 320000,
    "condo": 810,
    "iptu": 1600,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.12484,
    "lng": -34.85798,
    "thesis": "Portal · 90 m² em Torre, pedido R$ 3.556/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-40305198",
    "title": "Apartamento com 2 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 79,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 711,
    "iptu": 2250,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.119879999999999,
    "lng": -34.86864,
    "thesis": "Portal · 79 m² em Torre, pedido R$ 5.696/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-46256902",
    "title": "Apartamento à venda 2 Quartos 1 Suite 1 Vaga 60.89M² Torre João Pessoa - PB | Mood Epitáci",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 476001,
    "condo": 540,
    "iptu": 2380,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11748,
    "lng": -34.86732,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.933/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-46308000",
    "title": "O seu novo lar te espera no ELOY RESIDENCE - Entre a UNIPÊ e a UFPB",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 335000,
    "condo": 486,
    "iptu": 1675,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1544,
    "lng": -34.86316,
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.204/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-44877870",
    "title": "Apartamento Térreo 3 quartos nos Bancários com Lazer Garden",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 529900,
    "condo": 945,
    "iptu": 2650,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1495999999999995,
    "lng": -34.855,
    "thesis": "Portal · 105 m² em Bancários, pedido R$ 5.047/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-41195779",
    "title": "Apartamento com 2 quartos à venda na Rua Bancário Clóvis Moreno Gondim, --, Bancários, Joã",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário Clóvis Moreno Gondim, --",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 349000,
    "condo": 495,
    "iptu": 1745,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14607,
    "lng": -34.83881,
    "thesis": "Portal · 55 m² em Bancários, pedido R$ 6.345/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-18339511",
    "title": "Seu novo apartamento em João Pessoa em localização privilegiada e lazer completo!",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 334000,
    "condo": 459,
    "iptu": 1670,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1532,
    "lng": -34.858599999999996,
    "thesis": "Portal · 51 m² em Bancários, pedido R$ 6.549/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-44877849",
    "title": "Cobertura com 2 quartos à venda no Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 91,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 619900,
    "condo": 819,
    "iptu": 3100,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1508,
    "lng": -34.85512,
    "thesis": "Portal · 91 m² em Bancários, pedido R$ 6.812/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46447919",
    "title": "Apartamento com 3 quartos à venda no Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 66,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 390000,
    "condo": 594,
    "iptu": 1950,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1516399999999996,
    "lng": -34.86064,
    "thesis": "Portal · 66 m² em Bancários, pedido R$ 5.909/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-46694274",
    "title": "Lindo apartamento todo projetado para venda com 3 quartos nos bancários",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Empresário João Rodrigues Alves, ",
    "area": 68,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 599900,
    "condo": 612,
    "iptu": 3000,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14605,
    "lng": -34.85033,
    "thesis": "Portal · 68 m² em Bancários, pedido R$ 8.822/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-32700579",
    "title": "Apartamento com 2 quartos à venda no Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 486,
    "iptu": 1500,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14912,
    "lng": -34.857639999999996,
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 5.556/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-42457106",
    "title": "Apartamento para Venda em João Pessoa / PB no bairro Jardim São Paulo",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Pedro Alves De Andrade, ",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 315000,
    "condo": 657,
    "iptu": 1575,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14632,
    "lng": -34.83613,
    "thesis": "Portal · 73 m² em Bancários, pedido R$ 4.315/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45447267",
    "title": "Apartamento com 2 quartos à venda na Rua João Batista Carvalho Moura, 122, Bancários, João",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua João Batista Carvalho Moura, 122",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459000,
    "condo": 531,
    "iptu": 2295,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15187,
    "lng": -34.84015,
    "thesis": "Portal · 59 m² em Bancários, pedido R$ 7.780/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-39829028",
    "title": "Apartamento com 2 quartos à venda na Rua Doutor Antonio Palitot Lopes Braga, Bancários, Jo",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Doutor Antonio Palitot Lopes Braga, ",
    "area": 66,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 370000,
    "condo": 594,
    "iptu": 1850,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14627,
    "lng": -34.83437,
    "thesis": "Portal · 66 m² em Bancários, pedido R$ 5.606/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-38751184",
    "title": "Vivant 2 Residence - APARTAMENTO 3 QUARTOS NO VIVANT 2 RESIDENCE / APARTAMENTO NOS BANCARI",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Estudante Oliveiros Fernande Filho, ",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 549000,
    "condo": 630,
    "iptu": 2745,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14637,
    "lng": -34.8449,
    "thesis": "Portal · 70 m² em Bancários, pedido R$ 7.843/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-44629600",
    "title": "Cobertura duplex com elevador e piscina privativa nos bancários - proximo as 3 ruas",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário Waldemar De Mesquita Accioly, 500",
    "area": 83,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 560000,
    "condo": 747,
    "iptu": 2800,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14523,
    "lng": -34.84068,
    "thesis": "Portal · 83 m² em Bancários, pedido R$ 6.747/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-39609065",
    "title": "Apartamento 3 Quartos à Venda no Bairro dos Estados | Suíte e Móveis Projetados",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Santa Catarina, 371",
    "area": 74,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 457000,
    "condo": 666,
    "iptu": 2285,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1115366,
    "lng": -34.8563543,
    "thesis": "Portal · 74 m² em Estados, pedido R$ 6.176/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-41195837",
    "title": "Apartamento com 3 quartos à venda na Avenida Guanabara, --, Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Guanabara, --",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 699000,
    "condo": 630,
    "iptu": 3495,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11506,
    "lng": -34.85465,
    "thesis": "Portal · 70 m² em Estados, pedido R$ 9.986/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-45967791",
    "title": "Apartamento Lazer Clube no B. Dos Estados 535.000,00 codigo: 362661",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 535000,
    "condo": 540,
    "iptu": 2675,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11612,
    "lng": -34.857240000000004,
    "thesis": "Portal · 60 m² em Estados, pedido R$ 8.917/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-43335902",
    "title": "Cobertura duplex à venda com 4 quartos sendo 2 suítes, 299m², Bairro dos estados, João Pes",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Mato Grosso, 300",
    "area": 299,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 760000,
    "condo": 2691,
    "iptu": 3800,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1157,
    "lng": -34.8591,
    "thesis": "Portal · 299 m² em Estados, pedido R$ 2.542/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-46234901",
    "title": "Apartamento para Venda em João Pessoa, Estados, 3 dormitórios, 1 suíte, 3 banheiros, 2 vag",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Bahia, 900",
    "area": 124,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1200000,
    "condo": 1116,
    "iptu": 6000,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11292,
    "lng": -34.85168,
    "thesis": "Portal · 124 m² em Estados, pedido R$ 9.677/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-46447922",
    "title": "Apartamento 2 quartos no Bairro dos Estados Elevador e Lazer",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 375000,
    "condo": 468,
    "iptu": 1875,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.117319999999999,
    "lng": -34.86204,
    "thesis": "Portal · 52 m² em Estados, pedido R$ 7.212/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-33969271",
    "title": "Apartamento com 4 suítes andar alto Clube Vivant, Bairro dos Estados à venda, 136 m² por R",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 136,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1400000,
    "condo": 1224,
    "iptu": 7000,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 136 m² em Estados, pedido R$ 10.294/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-44877832",
    "title": "Cobertura com 2 quartos à venda no Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 94,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 435000,
    "condo": 846,
    "iptu": 2175,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1148,
    "lng": -34.85652,
    "thesis": "Portal · 94 m² em Estados, pedido R$ 4.628/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46447923",
    "title": "Apartamento 3 quartos no Bairro dos Estados Elevador e Lazer",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 61,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 549,
    "iptu": 2250,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1171999999999995,
    "lng": -34.86204,
    "thesis": "Portal · 61 m² em Estados, pedido R$ 7.377/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43922514",
    "title": "Apartamento com 3 quartos à venda na Avenida Mato Grosso, Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Mato Grosso, ",
    "area": 74,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 666,
    "iptu": 3250,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11557,
    "lng": -34.8553,
    "thesis": "Portal · 74 m² em Estados, pedido R$ 8.784/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-41172362",
    "title": "Cobertura Duplex área externa privativa pé direito duplo e energia solar",
    "type": "apto",
    "bairroId": "estados",
    "street": "Rua Maestro Osvaldo Evaristo Costa, 346",
    "area": 130,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 1170,
    "iptu": 3750,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.10741,
    "lng": -34.85504,
    "thesis": "Portal · 130 m² em Estados, pedido R$ 5.769/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-24857035",
    "title": "Apartamento com 3 quartos à venda no Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 132,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1100000,
    "condo": 1188,
    "iptu": 5500,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11862,
    "lng": -34.85359,
    "thesis": "Portal · 132 m² em Estados, pedido R$ 8.333/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-42518277",
    "title": "Apartamento com 3 quartos à venda na Avenida Guanabara, --, Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Guanabara, --",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 699000,
    "condo": 630,
    "iptu": 3495,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11506,
    "lng": -34.85465,
    "thesis": "Portal · 70 m² em Estados, pedido R$ 9.986/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-46381035",
    "title": "Evidence Class Club - Apartamento Alto Padrão/ apartamento em João Pessoa/ apartamento nos",
    "type": "apto",
    "bairroId": "estados",
    "street": "Rua Professora Eudésia Vieira, ",
    "area": 147,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1700000,
    "condo": 1323,
    "iptu": 8500,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11301,
    "lng": -34.85142,
    "thesis": "Portal · 147 m² em Estados, pedido R$ 11.565/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45103440",
    "title": "Apartamento com 3 quartos à venda na Rua Professor Joaquim Santiago, 562, Expedicionários,",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Professor Joaquim Santiago, 562",
    "area": 100,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 620000,
    "condo": 900,
    "iptu": 3100,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12258,
    "lng": -34.85427,
    "thesis": "Portal · 100 m² em Expedicionários, pedido R$ 6.200/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-42990225",
    "title": "Apartamento com 3 quartos à venda no Expedicionários, João Pessoa",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 135,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 1215,
    "iptu": 3150,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1258,
    "lng": -34.8798,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45062322",
    "title": "Apartamento espaçoso no bairro do expedicionario em Joao Pessoa",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Avenida Júlia Freire, ",
    "area": 110,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 590000,
    "condo": 990,
    "iptu": 2950,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1211,
    "lng": -34.86122,
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.364/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-38039339",
    "title": "Apartamento para venda, Expedicionários, João Pessoa - 24029",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Antônio Gama, Esquina Com Avenida Julia Freire, ",
    "area": 103,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 927,
    "iptu": 3750,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12117,
    "lng": -34.85337,
    "thesis": "Portal · 103 m² em Expedicionários, pedido R$ 7.282/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-39374800",
    "title": "Apartamento Completo nos Expedicionários: 58m², Suíte, Planejados e Lazer codigo: 272846",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 522,
    "iptu": 2250,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1276,
    "lng": -34.88244,
    "thesis": "Portal · 58 m² em Expedicionários, pedido R$ 7.759/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-45258131",
    "title": "Apartamento com 3 quartos à venda na Avenida Júlia Freire, S/N, Expedicionários, João Pess",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Avenida Júlia Freire, S/N",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 522685,
    "condo": 630,
    "iptu": 2613,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12117,
    "lng": -34.85337,
    "thesis": "Portal · 70 m² em Expedicionários, pedido R$ 7.467/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-37476502",
    "title": "Apartamento em condomínio clube no bairro do Expedicionários - AP1980",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 454337,
    "condo": 540,
    "iptu": 2272,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12952,
    "lng": -34.867560000000005,
    "thesis": "Portal · 60 m² em Expedicionários, pedido R$ 7.572/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-31434495",
    "title": "Apartamento com 4 quartos à venda na Rua Antônio Gama, 126, Expedicionários, João Pessoa",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Antônio Gama, 126",
    "area": 105,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 739000,
    "condo": 945,
    "iptu": 3695,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12082,
    "lng": -34.85148,
    "thesis": "Portal · 105 m² em Expedicionários, pedido R$ 7.038/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45872434",
    "title": "Duplex Com 3 quartos e 2 suites a 550m da Av. Epitacio Pessoa em Tambauzinho",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 135,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 1215,
    "iptu": 3150,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.133,
    "lng": -34.87236,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44098129",
    "title": "Cobertura com 3 quartos à venda no Expedicionários, João Pessoa",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 135,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 1215,
    "iptu": 3150,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.12326,
    "lng": -34.85332,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45445922",
    "title": "Apartamento Duplex com 3 dormitórios à venda, 135 m² por R$ 630.000,00 - Expedicionários -",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 135,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 1215,
    "iptu": 3150,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.12326,
    "lng": -34.85332,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-44141390",
    "title": "Apartamento com 2 quartos à venda no Expedicionários, João Pessoa",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 360000,
    "condo": 450,
    "iptu": 1800,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1324,
    "lng": -34.8708,
    "thesis": "Portal · 50 m² em Expedicionários, pedido R$ 7.200/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-44015969",
    "title": "Apartamento com 2 quartos à venda no Expedicionários, João Pessoa",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 450,
    "iptu": 1900,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13288,
    "lng": -34.86396,
    "thesis": "Portal · 50 m² em Expedicionários, pedido R$ 7.600/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-42369532",
    "title": "Apartamento com 2 Quartos ,.2 Vagas de Garagem para venda no Expedicionários- OPORTUNIDADE",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 500000,
    "condo": 558,
    "iptu": 2500,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12952,
    "lng": -34.881840000000004,
    "thesis": "Portal · 62 m² em Expedicionários, pedido R$ 8.065/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-43730163",
    "title": "Apartamento com Vista para a Lagoa e 147m² no Centro de João Pessoa codigo: 345295",
    "type": "apto",
    "bairroId": "centro",
    "street": "Centro, João Pessoa",
    "area": 114,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 530000,
    "condo": 1026,
    "iptu": 2650,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12154,
    "lng": -34.88704,
    "thesis": "Portal · 114 m² em Centro, pedido R$ 4.649/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-43735547",
    "title": "Apartamento no Centro com 2 Quartos, 2 Vagas, Elevador e Piscina",
    "type": "apto",
    "bairroId": "centro",
    "street": "Avenida Almirante Barroso, 600",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 450,
    "iptu": 1500,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1207,
    "lng": -34.87321,
    "thesis": "Portal · 50 m² em Centro, pedido R$ 6.000/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-30725288",
    "title": "excelente apartamento no tambia, Que traz conforto e modernidade,tendo uma localização pri",
    "type": "apto",
    "bairroId": "centro",
    "street": "Centro, João Pessoa",
    "area": 57,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 281399,
    "condo": 513,
    "iptu": 1407,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12634,
    "lng": -34.8814,
    "thesis": "Portal · 57 m² em Centro, pedido R$ 4.937/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-16619826",
    "title": "Apartamento com 3 dormitórios à venda, 70 m² por R$ 350.000,00 - Centro - João Pessoa/PB",
    "type": "apto",
    "bairroId": "centro",
    "street": "Centro, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 630,
    "iptu": 1750,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12612,
    "lng": -34.87894,
    "thesis": "Portal · 70 m² em Centro, pedido R$ 5.000/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-40755786",
    "title": "Apartamento com 2 dormitórios à venda, 93 m² por R$ 450.000,00 - Centro - João Pessoa/PB",
    "type": "apto",
    "bairroId": "centro",
    "street": "Centro, João Pessoa",
    "area": 93,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 837,
    "iptu": 2250,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12612,
    "lng": -34.87894,
    "thesis": "Portal · 93 m² em Centro, pedido R$ 4.839/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45432263",
    "title": "LANÇAMENTO no Portal do Sol - João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 53,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 349900,
    "condo": 477,
    "iptu": 1750,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15972,
    "lng": -34.836639999999996,
    "thesis": "Portal · 53 m² em Portal do Sol, pedido R$ 6.602/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-39177586",
    "title": "Apartamento com 2 quartos à venda na Rua Poetiza Guiomar Travassos Chianca, 2201, Portal d",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Poetiza Guiomar Travassos Chianca, 2201",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 268000,
    "condo": 531,
    "iptu": 1340,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15277,
    "lng": -34.81802,
    "thesis": "Portal · 59 m² em Portal do Sol, pedido R$ 4.542/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-30647531",
    "title": "Golden Beach - APARTAMENTO PADRÃ/ APARTAMENTO NO GOLDEN BEACH/ APARTAMENTO EM JOAO PESSOA",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Luzinete Formiga De Lucena, ",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 522,
    "iptu": 3250,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15051,
    "lng": -34.81636,
    "thesis": "Portal · 58 m² em Portal do Sol, pedido R$ 11.207/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-41794929",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 343265,
    "condo": 477,
    "iptu": 1716,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1578,
    "lng": -34.8424,
    "thesis": "Portal · 53 m² em Portal do Sol, pedido R$ 6.477/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45616279",
    "title": "Apartamento com 2 quartos à venda na Rua Luzinete Formiga de Lucena, 2260, Portal do Sol, ",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Luzinete Formiga De Lucena, 2260",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 329900,
    "condo": 477,
    "iptu": 1650,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15086,
    "lng": -34.81897,
    "thesis": "Portal · 53 m² em Portal do Sol, pedido R$ 6.225/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-39386976",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 420000,
    "condo": 405,
    "iptu": 2100,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1570800000000006,
    "lng": -34.84816,
    "thesis": "Portal · 45 m² em Portal do Sol, pedido R$ 9.333/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-36975926",
    "title": "Apartamento com 2 quartos à venda na Rua Conselheiro José Braz do Rego, Portal do Sol, Joã",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Conselheiro José Braz Do Rego, ",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 354629,
    "condo": 459,
    "iptu": 1773,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1582,
    "lng": -34.81902,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.954/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-39228268",
    "title": "Apartamento à venda 44 metros 02 quartos R$: 220.000,00 Portal do Sol - João Pessoa- PB",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Maurício De Araújo Gama Filho, ",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 396,
    "iptu": 1100,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15871,
    "lng": -34.82191,
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 5.000/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-25227507",
    "title": "Apartamento com 2 quartos à venda na Rua Professora Josefa Di Lorenzo Souza, 613, Portal d",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Professora Josefa Di Lorenzo Souza, 613",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 345614,
    "condo": 459,
    "iptu": 1728,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15956,
    "lng": -34.81812,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.777/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-41984661",
    "title": "Apartamento com 2 quartos à venda na Rua Conselheiro José Braz do Rego, --, Portal do Sol,",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Conselheiro José Braz Do Rego, --",
    "area": 110,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 570296,
    "condo": 990,
    "iptu": 2851,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1582,
    "lng": -34.81902,
    "thesis": "Portal · 110 m² em Portal do Sol, pedido R$ 5.185/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-25962671",
    "title": "Apartamento com 2 dormitórios à venda, 60 m² por R$ 310.000,00 - Portal do Sol - João Pess",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 310000,
    "condo": 540,
    "iptu": 1550,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.154800000000001,
    "lng": -34.84672,
    "thesis": "Portal · 60 m² em Portal do Sol, pedido R$ 5.167/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-44690265",
    "title": "Apartamento com 2 dormitórios à venda, 45 m² por R$ 300.000,00 - Portal do Sol - João Pess",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 405,
    "iptu": 1500,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 45 m² em Portal do Sol, pedido R$ 6.667/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-44877872",
    "title": "Cobertura com 3 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 123,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 755000,
    "condo": 1107,
    "iptu": 3775,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14696,
    "lng": -34.8452,
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 6.138/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46152655",
    "title": "Apartamento para Venda em João Pessoa, Jardim Cidade Universitária, 3 dormitórios, 1 suíte",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 123,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 1107,
    "iptu": 3150,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14468,
    "lng": -34.84844,
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 5.122/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-37521838",
    "title": "Apartamento para Venda em João Pessoa, Jardim Cidade Universitária, 2 dormitórios, 1 suíte",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Euclides Rodrigues Oliveira, 11",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 339000,
    "condo": 423,
    "iptu": 1695,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15793,
    "lng": -34.84315,
    "thesis": "Portal · 47 m² em Jd. Cidade Universitária, pedido R$ 7.213/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-40270713",
    "title": "RESIDENCIAL Le ville - Apartamento Padrão/Residencial LE VILLE-AP d",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Rosa Lima Dos Santos, ",
    "area": 46,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 329000,
    "condo": 414,
    "iptu": 1645,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15026,
    "lng": -34.83507,
    "thesis": "Portal · 46 m² em Jd. Cidade Universitária, pedido R$ 7.152/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43938057",
    "title": "Tulip residence – o endereço certo para morar ou investir em joão pessoa!",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Cordélia Velloso Frade, 0",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 390000,
    "condo": 585,
    "iptu": 1950,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15686,
    "lng": -34.83655,
    "thesis": "Portal · 65 m² em Jd. Cidade Universitária, pedido R$ 6.000/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46120929",
    "title": "Apartamento 2 quartos Todo planejado a 50 metros da Principal",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua João Batista Carvalho Moura, 122",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 420000,
    "condo": 531,
    "iptu": 2100,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15187,
    "lng": -34.84015,
    "thesis": "Portal · 59 m² em Jd. Cidade Universitária, pedido R$ 7.119/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46391002",
    "title": "Apartamento com 2 quartos à venda na Rua Bacharel Wilson Flávio Moreira Coutinho, Jardim C",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Bacharel Wilson Flávio Moreira Coutinho, ",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 200000,
    "condo": 459,
    "iptu": 1000,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15803,
    "lng": -34.83109,
    "thesis": "Portal · 51 m² em Jd. Cidade Universitária, pedido R$ 3.922/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43542823",
    "title": "Apartamento com 3 quartos à venda na Rua Bacharel Manoel Pereira Diniz, --, Jardim Cidade ",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Bacharel Manoel Pereira Diniz, --",
    "area": 198,
    "rooms": 3,
    "suites": 1,
    "parking": 0,
    "year": 2012,
    "ask": 615000,
    "condo": 1782,
    "iptu": 3075,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.15891,
    "lng": -34.83537,
    "thesis": "Portal · 198 m² em Jd. Cidade Universitária, pedido R$ 3.106/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45248780",
    "title": "Apartamento com 2 dormitórios à venda, 58 m² por R$ 450.000,00 - Jardim Cidade Universitár",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 460000,
    "condo": 522,
    "iptu": 2300,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14612,
    "lng": -34.84052,
    "thesis": "Portal · 58 m² em Jd. Cidade Universitária, pedido R$ 7.931/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-35348946",
    "title": "Cobertura duplex com 3 quartos, 120m², R$580.000,00 - Jardim Cidade Universitária, João Pe",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 580000,
    "condo": 1080,
    "iptu": 2900,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14756,
    "lng": -34.83716,
    "thesis": "Portal · 120 m² em Jd. Cidade Universitária, pedido R$ 4.833/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-40161616",
    "title": "Excelente apartamento 3Q nos Bancários/Jd. Cidade Universitária",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 68,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 360000,
    "condo": 612,
    "iptu": 1800,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14576,
    "lng": -34.85048,
    "thesis": "Portal · 68 m² em Jd. Cidade Universitária, pedido R$ 5.294/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-43621707",
    "title": "Apartamento com 2 dormitórios à venda por R$ 119.900,00 - Gramame - João Pessoa/PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 119900,
    "condo": 396,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 44 m² em Gramame, pedido R$ 2.725/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-40071433",
    "title": "Apartamento com 2 quartos à venda na Rua Manuel Anísio Nascimento, 124, Gramame, João Pess",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Manuel Anísio Nascimento, 124",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 142000,
    "condo": 450,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.2035,
    "lng": -34.85953,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.840/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-42013241",
    "title": "Apartamento à venda 2 dorms no Gramame Quitado - João Pessoa /PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Dorise Souza Viana, 121",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 115000,
    "condo": 396,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.22289,
    "lng": -34.84498,
    "thesis": "Portal · 44 m² em Gramame, pedido R$ 2.614/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-37801781",
    "title": "Apartamento em João Pessoa, Bairro Novo Geisel, 2 quartos , varanda, lazer",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Maria Emília Da Silva Torres, 195",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 387,
    "iptu": 900,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.19835,
    "lng": -34.84346,
    "thesis": "Portal · 43 m² em Gramame, pedido R$ 4.186/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-45943993",
    "title": "Apartamento com 2 quartos à venda na Rua Estudante Carlos Alberto Da Silva, Gramame, João ",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Estudante Carlos Alberto Da Silva, ",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 170000,
    "condo": 477,
    "iptu": 850,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.22174,
    "lng": -34.8472,
    "thesis": "Portal · 53 m² em Gramame, pedido R$ 3.208/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46196860",
    "title": "Apartamento com 2 quartos à venda na Avenida Lorival Bezerra dos Santos, Gramame, João Pes",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Avenida Lorival Bezerra Dos Santos, ",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 186000,
    "condo": 423,
    "iptu": 930,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.19776,
    "lng": -34.87439,
    "thesis": "Portal · 47 m² em Gramame, pedido R$ 3.957/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-43349028",
    "title": "Apartamento com 2 quartos à venda no Gramame, João Pessoa",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 181000,
    "condo": 405,
    "iptu": 905,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.21242,
    "lng": -34.84384,
    "thesis": "Portal · 45 m² em Gramame, pedido R$ 4.022/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-42043944",
    "title": "Apartamento com 2 quartos à venda na Rua Rita Pinheiro Vilar, 02, Gramame, João Pessoa",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Rita Pinheiro Vilar, 02",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 150000,
    "condo": 495,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.20129,
    "lng": -34.86522,
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 2.727/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43392326",
    "title": "Apartamento com 2 dormitórios à venda por R$ 163.999,00 - Gramame - João Pessoa/PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 163999,
    "condo": 450,
    "iptu": 820,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 3.280/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-46267843",
    "title": "VENDA: Apt.º 57,3 m² área total, 2 Quartos, sendo 1 Suíte Reversível, em Gramame!",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Doutor Augusto De Almeida Filho, 120",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 155000,
    "condo": 360,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.19458,
    "lng": -34.88824,
    "thesis": "Portal · 40 m² em Gramame, pedido R$ 3.875/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-30647137",
    "title": "Agatha Residence - APARTAMENTO PADRAO/ APARTAMENTO NO AGATHA RESIDENCE/ APARTAMENTO NO GRA",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Doutor Valdevino Gregório De Andrade, ",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 240000,
    "condo": 387,
    "iptu": 1200,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.20728,
    "lng": -34.84863,
    "thesis": "Portal · 43 m² em Gramame, pedido R$ 5.581/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-44833189",
    "title": "Apartamento com 2 quartos à venda na Rua Ivan de Oliveira Brito, SN, Gramame, João Pessoa",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Ivan De Oliveira Brito, SN",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 256000,
    "condo": 414,
    "iptu": 1280,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1975,
    "lng": -34.87433,
    "thesis": "Portal · 46 m² em Gramame, pedido R$ 5.565/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45083787",
    "title": "Apartamentos para vender em Mangabeira, próximo ao shopping, 1 por andar. Térreo com área ",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Judi Leocádio Da Silva, 102",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 260000,
    "condo": 423,
    "iptu": 1300,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16778,
    "lng": -34.83494,
    "thesis": "Portal · 47 m² em Mangabeira, pedido R$ 5.532/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-44877912",
    "title": "Cobertura com 2 quartos à venda no Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 104,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 400610,
    "condo": 936,
    "iptu": 2003,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17004,
    "lng": -34.855039999999995,
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 3.852/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45869992",
    "title": "Apartamento com 2 quartos à venda na Rua Diógenes Gomes da Silva, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Diógenes Gomes Da Silva, ",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 149999,
    "condo": 414,
    "iptu": 800,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17689,
    "lng": -34.83357,
    "thesis": "Portal · 46 m² em Mangabeira, pedido R$ 3.261/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-43425649",
    "title": "Apto com elevador e lazer na cobertura, a poucos metros da principal de Mangabeira",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 215000,
    "condo": 468,
    "iptu": 1075,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.170640000000001,
    "lng": -34.8626,
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 4.135/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-31493777",
    "title": "Apartamento com 3 quartos à venda no Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 56,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 216000,
    "condo": 504,
    "iptu": 1080,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.17016,
    "lng": -34.848079999999996,
    "thesis": "Portal · 56 m² em Mangabeira, pedido R$ 3.857/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-40439090",
    "title": "Apartamento de 2 quartos na frente da Praça do Coqueiral codigo: 287187",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 239000,
    "condo": 396,
    "iptu": 1195,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17544,
    "lng": -34.8632,
    "thesis": "Portal · 44 m² em Mangabeira, pedido R$ 5.432/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-32054977",
    "title": "Residencial Porto Florença - APARTAMENTO PADRÃO/ APARTAMENTO NO RESIDENCIAL PORTO FLORENÇA",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Francisco Porfírio Ribeiro, ",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 270000,
    "condo": 486,
    "iptu": 1350,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.18493,
    "lng": -34.83909,
    "thesis": "Portal · 54 m² em Mangabeira, pedido R$ 5.000/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-42824961",
    "title": "Apartamento com 2 quartos à venda na Rua Doutor Francisco de Assis Veloso, 15, Mangabeira,",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Doutor Francisco De Assis Veloso, 15",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 232950,
    "condo": 414,
    "iptu": 1165,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16979,
    "lng": -34.82845,
    "thesis": "Portal · 46 m² em Mangabeira, pedido R$ 5.064/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-36976020",
    "title": "Apartamento com 2 quartos à venda na Rua Paineira do Campo, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Paineira Do Campo, ",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 212000,
    "condo": 423,
    "iptu": 1060,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.18016,
    "lng": -34.82463,
    "thesis": "Portal · 47 m² em Mangabeira, pedido R$ 4.511/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-45477794",
    "title": "Apartamento com 2 quartos à venda na Rua Ten. Napoleão Aciole De Lima, Mangabeira, João Pe",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Ten. Napoleão Aciole De Lima, ",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 215000,
    "condo": 468,
    "iptu": 1075,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.16398,
    "lng": -34.84329,
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 4.135/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-30647272",
    "title": "Residencial Jequitibá - APARTAMENTO PADRÃO/ APARTAMENTO NO RESIDENCIAL JEQUITIBÁ/ APARTAME",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua José Trajano Da Silva, ",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 225000,
    "condo": 360,
    "iptu": 1125,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.18228,
    "lng": -34.84538,
    "thesis": "Portal · 40 m² em Mangabeira, pedido R$ 5.625/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-42825242",
    "title": "Apartamento com 2 quartos à venda na Rua Doutor Francisco de Assis Veloso, 15, Mangabeira,",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Doutor Francisco De Assis Veloso, 15",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 269000,
    "condo": 477,
    "iptu": 1345,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16979,
    "lng": -34.82845,
    "thesis": "Portal · 53 m² em Mangabeira, pedido R$ 5.075/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-43208595",
    "title": "Apartamento 2Q em Mangabeira, perto de praça em construção.",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 210000,
    "condo": 432,
    "iptu": 1050,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.16884,
    "lng": -34.85684,
    "thesis": "Portal · 48 m² em Mangabeira, pedido R$ 4.375/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-32840552",
    "title": "Apartamento com 2 dormitórios à venda, 48 m² por R$ 199.990,00 - Cruz das Armas - João Pes",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Cruz das Armas, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 199990,
    "condo": 432,
    "iptu": 1000,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14469,
    "lng": -34.88383,
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-45523043",
    "title": "Apartamento com 3 quartos à venda na Rua Da Uepb, 215, Cristo Redentor, João Pessoa",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Da Uepb, 215",
    "area": 67,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 370000,
    "condo": 603,
    "iptu": 1850,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16078,
    "lng": -34.87863,
    "thesis": "Portal · 67 m² em Cristo Redentor, pedido R$ 5.522/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-37148327",
    "title": "Apartamento para Venda em João Pessoa, Miramar, 3 dormitórios, 3 suítes, 4 banheiros, 2 va",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Giuseppe Duarte De Queiroz, 200",
    "area": 110,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2100000,
    "condo": 990,
    "iptu": 10500,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14536,
    "lng": -34.84783,
    "thesis": "Portal · 110 m² em Miramar, pedido R$ 19.091/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-41582505",
    "title": "Apartamento à venda, com 2 dormitórios, com 52m², em Tambauzinho, João Pessoa-PB.",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Doutor Arnaldo Escorel, 47",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 468,
    "iptu": 1750,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.12169,
    "lng": -34.85012,
    "thesis": "Portal · 52 m² em Tambaú, pedido R$ 6.731/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-43208615",
    "title": "Apartamento com 2 quartos à venda na Rua Horácio Trajano de Oliveira, 100, Cristo Redentor",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Horácio Trajano De Oliveira, 100",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 280000,
    "condo": 450,
    "iptu": 1400,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14818,
    "lng": -34.88252,
    "thesis": "Portal · 50 m² em Cristo Redentor, pedido R$ 5.600/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-30683400",
    "title": "Apartamento com 2 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 225000,
    "condo": 486,
    "iptu": 1125,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.16624,
    "lng": -34.86152,
    "thesis": "Portal · 54 m² em Ernesto Geisel, pedido R$ 4.167/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-40201297",
    "title": "Apartamento padrão à Venda, Ernesto Geisel, João Pessoa, PB",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Joaquim Pereira Do Nascimento, ",
    "area": 41,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 214000,
    "condo": 369,
    "iptu": 1070,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17456,
    "lng": -34.86413,
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.220/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-37801784",
    "title": "Aparatarmento no bairro Novo Geisel, 2 quartos com varanda e area de lazer",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Manoel Felisberto Da Silva, 363",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 441,
    "iptu": 900,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.19647,
    "lng": -34.87037,
    "thesis": "Portal · 49 m² em Ernesto Geisel, pedido R$ 3.673/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-38527517",
    "title": "Apartamento com 2 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 360,
    "iptu": 950,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16648,
    "lng": -34.86152,
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 4.750/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-42029544",
    "title": "Apartamento Com área externa em Ernesto Geisel, João Pessoa/PB",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Carlos Da Costa Gomes, 120",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 224900,
    "condo": 360,
    "iptu": 1125,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17392,
    "lng": -34.86652,
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 5.623/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-30648253",
    "title": "Condomínio He Príncipe de Bragança - APARTAMENTO PADRAO/ APARTAMENTO NO HE PRÍNCIPE DE BRA",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Cleber Da Costa Gomes, ",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 245000,
    "condo": 495,
    "iptu": 1225,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17292,
    "lng": -34.86334,
    "thesis": "Portal · 55 m² em Ernesto Geisel, pedido R$ 4.455/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-42029549",
    "title": "Apartamento com 2 quartos à venda na Rua Carlos da Costa Gomes, 120, Ernesto Geisel, João ",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Carlos Da Costa Gomes, 120",
    "area": 41,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 209900,
    "condo": 369,
    "iptu": 1050,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17392,
    "lng": -34.86652,
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.120/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-30647055",
    "title": "Residencial Atenas - APARTAMENTO PADRÃO/ APARTAMENTO NO RESIDENCIAL ATENAS/ APARTAMENTO NO",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Clotilde Maria Da Silva, ",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 170000,
    "condo": 441,
    "iptu": 850,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.18638,
    "lng": -34.87279,
    "thesis": "Portal · 49 m² em Ernesto Geisel, pedido R$ 3.469/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-42029539",
    "title": "Apartamento com 2 quartos à venda na Rua Carlos da Costa Gomes, 120, Ernesto Geisel, João ",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Carlos Da Costa Gomes, 120",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 209900,
    "condo": 360,
    "iptu": 1050,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17392,
    "lng": -34.86652,
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 5.248/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46416781",
    "title": "Apartamento com 2 quartos à venda na Rua Professor Josué da Silveira, Ernesto Geisel, João",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Professor Josué Da Silveira, ",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 400000,
    "condo": 432,
    "iptu": 2000,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17467,
    "lng": -34.87035,
    "thesis": "Portal · 48 m² em Ernesto Geisel, pedido R$ 8.333/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-29948551",
    "title": "Apartamento com 2 dormitórios à venda, 50 m² por R$ 175.000 - Novo Geisel - João Pessoa/PB",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 175000,
    "condo": 450,
    "iptu": 875,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 50 m² em Ernesto Geisel, pedido R$ 3.500/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-41254537",
    "title": "Apartamento com 2 dormitórios à venda por R$ 210.000,00 - Ernesto Geisel - João Pessoa/PB",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 210000,
    "condo": 432,
    "iptu": 1050,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 48 m² em Ernesto Geisel, pedido R$ 4.375/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-38196172",
    "title": "Residencial Castelo Branco - APARTAMENTO EM CASTELO BRANCO / APARTAMENTO 3 QUARTOS EM CAST",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Onaldo Da Silva Coutinho, ",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 630,
    "iptu": 1500,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.13439,
    "lng": -34.84999,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-42867654",
    "title": "Apartamento com 2 quartos, 42m², R$255.000,00 - Castelo Branco, João Pessoa/PB",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 42,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 255000,
    "condo": 378,
    "iptu": 1275,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1345600000000005,
    "lng": -34.8582,
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 6.071/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-11912990",
    "title": "Apartamento com 3 dormitórios à venda, 70 m² por R$ 300.000,00 - Castelo Branco - João Pes",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 630,
    "iptu": 1500,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.13525,
    "lng": -34.85206,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-41619735",
    "title": "Apartamento com 3 dormitórios à venda por R$ 300.000 - Castelo Branco - João Pessoa/PB",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 630,
    "iptu": 1500,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.13525,
    "lng": -34.85206,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45552804",
    "title": "Apartamento com 2 quartos à venda na Rua Deputado Otávio Mariz Maia, Castelo Branco, João ",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Deputado Otávio Mariz Maia, ",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 429900,
    "condo": 504,
    "iptu": 2150,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13165,
    "lng": -34.8406,
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45712406",
    "title": "Apartamento com 2 dormitórios à venda, 56 m² por R$ 429.900 - Castelo Branco - João Pessoa",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 429900,
    "condo": 504,
    "iptu": 2150,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13525,
    "lng": -34.85206,
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-38039299",
    "title": "Apartamento para venda, Castelo Branco, João Pessoa - 20909",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Deputado Otávio Mariz Maia, ",
    "area": 40,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 360,
    "iptu": 2250,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13165,
    "lng": -34.8406,
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 11.250/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46674488",
    "title": "Apartamento térreo 43m2 + quintal privativo 25m2, 2 quartos",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 68,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 280000,
    "condo": 612,
    "iptu": 1400,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.13588,
    "lng": -34.85472,
    "thesis": "Portal · 68 m² em Castelo Branco, pedido R$ 4.118/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-40371360",
    "title": "Apartamento com 2 dormitórios à venda, 42 m² por R$ 250.000,00 - Castelo Branco - João Pes",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 42,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 250000,
    "condo": 378,
    "iptu": 1250,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13525,
    "lng": -34.85206,
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 5.952/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-30648085",
    "title": "Zully Lacerda - APARTAMENTO PADRÃO/ APARTAMENTO NO ZULLY LACERDA/ APARTAMENTO NO CRISTO/ A",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Odília T. Sebadelli, ",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 495,
    "iptu": 1100,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.16834,
    "lng": -34.87067,
    "thesis": "Portal · 55 m² em Cristo Redentor, pedido R$ 4.000/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-46308803",
    "title": "Apto - 2 Quartos - 1 Suíte - 60 m² - Cristo Redentor, João Pessoa/PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Odília T. Sebadelli, ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 540,
    "iptu": 1150,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.16818,
    "lng": -34.87084,
    "thesis": "Portal · 60 m² em Cristo Redentor, pedido R$ 3.833/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-45838714",
    "title": "Apartamento com Planejados e Estrutura Completa de Condomínio - João Pessoa/PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Murilo Buarque, 420",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 189000,
    "condo": 387,
    "iptu": 945,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15789,
    "lng": -34.88243,
    "thesis": "Portal · 43 m² em Cristo Redentor, pedido R$ 4.395/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-41992957",
    "title": "Apartamento com 2 quartos à venda na Rua José Francisco da Silva, 99, Cristo Redentor, Joã",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, 99",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 450,
    "iptu": 1100,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14744,
    "lng": -34.88141,
    "thesis": "Portal · 50 m² em Cristo Redentor, pedido R$ 4.400/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45477806",
    "title": "Apartamento com 2 quartos à venda na Rua Pedro Ivo de Paiva, Cristo Redentor, João Pessoa",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Pedro Ivo De Paiva, ",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 270000,
    "condo": 432,
    "iptu": 1350,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16654,
    "lng": -34.87066,
    "thesis": "Portal · 48 m² em Cristo Redentor, pedido R$ 5.625/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46153327",
    "title": "Apartamento primeiro andar 2 quartos no Cristo codigo: 364311",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 585,
    "iptu": 1100,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14092,
    "lng": -34.883,
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 3.385/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46308801",
    "title": "Apto - 2 Quartos - 1 Suíte - 54,16 m² - Cristo Redentor, João Pessoa/PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Caetano Figueiredo, ",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 200000,
    "condo": 486,
    "iptu": 1000,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.16181,
    "lng": -34.87172,
    "thesis": "Portal · 54 m² em Cristo Redentor, pedido R$ 3.704/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-36975924",
    "title": "Apartamento padrão à Venda, Cristo Redentor, João Pessoa, PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Elias Cavalcanti De Albuquerque, ",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 405,
    "iptu": 1150,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15718,
    "lng": -34.8776,
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 5.111/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-36859009",
    "title": "Apartamento com 2 quartos à venda na Rua João Cavalcanti De Albuquerque, 66, Cristo Redent",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua João Cavalcanti De Albuquerque, 66",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 222000,
    "condo": 396,
    "iptu": 1110,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.16791,
    "lng": -34.88284,
    "thesis": "Portal · 44 m² em Cristo Redentor, pedido R$ 5.045/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-41992960",
    "title": "Apartamento Cobertura Linear em Cristo Redentor, João Pessoa/PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, 99",
    "area": 79,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 420000,
    "condo": 711,
    "iptu": 2100,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14744,
    "lng": -34.88141,
    "thesis": "Portal · 79 m² em Cristo Redentor, pedido R$ 5.316/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-42528192",
    "title": "Apartamento Com área externa em Cristo Redentor, João Pessoa/PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, 461",
    "area": 64,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 332000,
    "condo": 576,
    "iptu": 1660,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14958,
    "lng": -34.87913,
    "thesis": "Portal · 64 m² em Cristo Redentor, pedido R$ 5.188/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-36975943",
    "title": "Apartamento padrão à Venda, Cristo Redentor, João Pessoa, PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Felinto De Arruda Escolástico, ",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 222000,
    "condo": 396,
    "iptu": 1110,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15766,
    "lng": -34.87973,
    "thesis": "Portal · 44 m² em Cristo Redentor, pedido R$ 5.045/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-21261326",
    "title": "Cobertura com 3 quartos à venda na Rua Orlando Pereira de Brito, 771, Cristo Redentor, Joã",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Orlando Pereira De Brito, 771",
    "area": 64,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 387000,
    "condo": 576,
    "iptu": 1935,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.15214,
    "lng": -34.8776,
    "thesis": "Portal · 64 m² em Cristo Redentor, pedido R$ 6.047/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-41827619",
    "title": "Apartamento com 1 dormitório à venda por R$ 110.000 - Oitizeiro - João Pessoa/PB",
    "type": "apto",
    "bairroId": "oitizeiro",
    "street": "Oitizeiro, João Pessoa",
    "area": 51,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 110000,
    "condo": 459,
    "iptu": 800,
    "seaMeters": 7800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15565,
    "lng": -34.89377,
    "thesis": "Portal · 51 m² em Oitizeiro, pedido R$ 2.157/m² contra 3.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-18756193",
    "title": "Apartamento com 2 dormitórios à venda, 43 m² por R$ 120.000 - Oitizeiro - João Pessoa/PB",
    "type": "apto",
    "bairroId": "oitizeiro",
    "street": "Oitizeiro, João Pessoa",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 120000,
    "condo": 387,
    "iptu": 800,
    "seaMeters": 7800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15565,
    "lng": -34.89377,
    "thesis": "Portal · 43 m² em Oitizeiro, pedido R$ 2.791/m² contra 3.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-19481313",
    "title": "Apartamento com 2 dormitórios à venda, 43 m² por R$ 120.000 - Oitizeiro - João Pessoa/PB",
    "type": "apto",
    "bairroId": "oitizeiro",
    "street": "Oitizeiro, João Pessoa",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 120000,
    "condo": 387,
    "iptu": 800,
    "seaMeters": 7800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.15565,
    "lng": -34.89377,
    "thesis": "Portal · 43 m² em Oitizeiro, pedido R$ 2.791/m² contra 3.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-40886034",
    "title": "Apartamento em João Pessoa, 2 quartos, varanda gourmet, lazer",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Campos Sales, 760",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 790000,
    "condo": 558,
    "iptu": 3950,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0665,
    "lng": -34.84627999999999,
    "thesis": "Portal · 62 m² em Bessa, pedido R$ 12.742/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45370648",
    "title": "Apartamento com 2 quartos à venda na Rua Cantora Maria da Glória Gouveia de Vasconcelos, 3",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Cantora Maria Da Glória Gouveia De Vasconcelos, 320",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 599000,
    "condo": 513,
    "iptu": 2995,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09068,
    "lng": -34.83556,
    "thesis": "Portal · 57 m² em Jardim Oceania, pedido R$ 10.509/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-23573118",
    "title": "Apartamento à venda no bairro Jardim Oceania - João Pessoa/PB",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Themístocles Da Costa Brito, 315",
    "area": 98,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1398000,
    "condo": 882,
    "iptu": 6990,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08384,
    "lng": -34.83976,
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 14.265/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-30647346",
    "title": "Residencial Rio Mussure - APARTAMENTO PADRAO/ APARTAMENTO NO RESIDENCIAL RIO MUSSURI/ APAR",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Rua Agricultor Carlos Onofre Nóbrega, ",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 495,
    "iptu": 900,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.18285,
    "lng": -34.89251,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.273/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-43446585",
    "title": "APARTAMENTO À VENDA | BAIRRO DOS FUNCIONÁRIOS | João Pessoa/PB | 59m² | Nascente Sul | R$ ",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Rua Luiz Carlos Alves, 0",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 145000,
    "condo": 531,
    "iptu": 800,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.19468,
    "lng": -34.857960000000006,
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.458/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-30648002",
    "title": "Condomínio Barbosa - APARTAMENTO PADRAO/ APARTAMENTO NO BARBOSA/ APARTAMENTO NO JOAO PAULO",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Rua Professora Maria Helena Silva Rocha, ",
    "area": 64,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 280000,
    "condo": 576,
    "iptu": 1400,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.18151,
    "lng": -34.87962,
    "thesis": "Portal · 64 m² em Funcionários, pedido R$ 4.375/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45181402",
    "title": "Apartamento com 2 dormitórios à venda por R$ 154.900,00 - Funcionários - João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 154900,
    "condo": 450,
    "iptu": 800,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.098/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-37115747",
    "title": "Apartamento com 2 dormitórios à venda por R$ 180.000 - Funcionários - João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 531,
    "iptu": 900,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 3.051/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-34686374",
    "title": "Apartamento com 2 dormitórios à venda, 44 m² por R$ 179.000,00 - Funcionários IV - João Pe",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 179000,
    "condo": 396,
    "iptu": 895,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 44 m² em Funcionários, pedido R$ 4.068/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-41035942",
    "title": "Apartamento com 2 dormitórios à venda, 46 m² por R$ 135.000 - Funcionários - João Pessoa/P",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 135000,
    "condo": 414,
    "iptu": 800,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 46 m² em Funcionários, pedido R$ 2.935/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-43392334",
    "title": "Apartamento com 2 dormitórios à venda, 50 m² por R$ 173.000,00 - Funcionários - João Pesso",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 173000,
    "condo": 450,
    "iptu": 865,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.460/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-30698360",
    "title": "Apartamento com 2 dormitórios à venda por R$ 162.000,00 - Funcionários - João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 162000,
    "condo": 387,
    "iptu": 810,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 43 m² em Funcionários, pedido R$ 3.767/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-34808773",
    "title": "Apartamento com 2 dormitórios à venda, 48 m² por R$ 150.000,00 - Funcionários - João Pesso",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 150000,
    "condo": 432,
    "iptu": 800,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 48 m² em Funcionários, pedido R$ 3.125/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-34529993",
    "title": "Apartamento com 2 dormitórios à venda por R$ 162.000,00 - Funcionários - João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 162000,
    "condo": 423,
    "iptu": 810,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 47 m² em Funcionários, pedido R$ 3.447/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-43082962",
    "title": "Apartamento com 2 dormitórios à venda, 59 m² por R$ 149.000,00 - Funcionários - João Pesso",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 149000,
    "condo": 531,
    "iptu": 800,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.525/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-31205102",
    "title": "Apartamento com 2 dormitórios à venda por R$ 180.000,00 - Funcionários IV - João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 450,
    "iptu": 900,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.600/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-39623999",
    "title": "Apartamento a venda com 04 quartos, sendo 02 suítes, em Miramar, João Pessoa-PB",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Marieta Steinbach Silva, 320",
    "area": 130,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1050000,
    "condo": 1170,
    "iptu": 5250,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12362,
    "lng": -34.8324,
    "thesis": "Portal · 130 m² em Miramar, pedido R$ 8.077/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-35900191",
    "title": "Apartamento com 02 Suítes + Varanda Gourmet em Condomínio Club",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Do Sol, 150",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 800000,
    "condo": 540,
    "iptu": 4000,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12142,
    "lng": -34.83288,
    "thesis": "Portal · 60 m² em Miramar, pedido R$ 13.333/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-45247805",
    "title": "Apartamento com 1 quarto à venda no Miramar, João Pessoa",
    "type": "kitnet",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 28,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 320000,
    "condo": 252,
    "iptu": 1600,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11656,
    "lng": -34.854560000000006,
    "thesis": "Portal · 28 m² em Miramar, pedido R$ 11.429/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45389264",
    "title": "Apartamento com 3 quartos à venda no Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 180,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1649000,
    "condo": 1620,
    "iptu": 8245,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11968,
    "lng": -34.85708,
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 9.161/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-44249497",
    "title": "Apartamento porteira fechada, andar alto e espaçoso Miramar",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Manoel Gualberto, ",
    "area": 121,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1150000,
    "condo": 1089,
    "iptu": 5750,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1222,
    "lng": -34.83566,
    "thesis": "Portal · 121 m² em Miramar, pedido R$ 9.504/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45873640",
    "title": "Apartamento espaçoso com 120m 3 quartos no Miramar - João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Da Aurora, 274",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 639000,
    "condo": 1080,
    "iptu": 3195,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.12205,
    "lng": -34.83185,
    "thesis": "Portal · 120 m² em Miramar, pedido R$ 5.325/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-36736910",
    "title": "Imóvel no coração do jardim Luna, edifício que é um marco na cidade, com vista definitiva ",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Avenida Senador Ruy Carneiro, 853",
    "area": 180,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 660000,
    "condo": 1620,
    "iptu": 3300,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1162,
    "lng": -34.83687,
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 3.667/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-29836360",
    "title": "Vendo Espetacular Apartamento NOVO no Miramar. 26 andar - 207 m², 01 por andar.",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 207,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2700000,
    "condo": 1863,
    "iptu": 13500,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1220799999999995,
    "lng": -34.867520000000006,
    "thesis": "Portal · 207 m² em Miramar, pedido R$ 13.043/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-39255262",
    "title": "Apartamento com 3 quartos à venda na Rua Armando Vasconcelos, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Armando Vasconcelos, ",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1197000,
    "condo": 1350,
    "iptu": 5985,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12235,
    "lng": -34.83304,
    "thesis": "Portal · 150 m² em Miramar, pedido R$ 7.980/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-45607022",
    "title": "Apartamento para Venda em João Pessoa, Miramar, 2 dormitórios, 1 suíte, 2 banheiros, 2 vag",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 560000,
    "condo": 477,
    "iptu": 2800,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12148,
    "lng": -34.858520000000006,
    "thesis": "Portal · 53 m² em Miramar, pedido R$ 10.566/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45477828",
    "title": "Apartamento com 2 quartos à venda na Rua das Acácias, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Das Acácias, ",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 636530,
    "condo": 531,
    "iptu": 3183,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12134,
    "lng": -34.83277,
    "thesis": "Portal · 59 m² em Miramar, pedido R$ 10.789/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-22331280",
    "title": "Apartamento com 4 quartos à venda na Rua Giacomo Porto, 1, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Giacomo Porto, 1",
    "area": 176,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 990000,
    "condo": 1584,
    "iptu": 4950,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.11637,
    "lng": -34.83633,
    "thesis": "Portal · 176 m² em Miramar, pedido R$ 5.625/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-45855755",
    "title": "Apartamento de 174 m² - Alto Padrão | 27º Andar | 4 Suítes | Vista Panorâmica",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Da Aurora, 235",
    "area": 174,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 3250000,
    "condo": 1566,
    "iptu": 16250,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12163,
    "lng": -34.83194,
    "thesis": "Portal · 174 m² em Miramar, pedido R$ 18.678/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45799505",
    "title": "Apartamento com 1 quarto à venda na Avenida Senador Ruy Carneiro, 416, Miramar, João Pesso",
    "type": "kitnet",
    "bairroId": "miramar",
    "street": "Avenida Senador Ruy Carneiro, 416",
    "area": 21,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 321594,
    "condo": 189,
    "iptu": 1608,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11797,
    "lng": -34.83946,
    "thesis": "Portal · 21 m² em Miramar, pedido R$ 15.314/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-41144763",
    "title": "Apartamento para Venda em João Pessoa, Treze de Maio, 3 dormitórios, 1 suíte, 2 banheiros,",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 356000,
    "condo": 630,
    "iptu": 1780,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1434,
    "lng": -34.86092,
    "thesis": "Portal · 70 m² em Treze de Maio, pedido R$ 5.086/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-34011929",
    "title": "Apartamento de 02 quartos com varanda e súite em um verdadeiro clube. Entrada quase zero!!",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 417000,
    "condo": 405,
    "iptu": 2085,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14352,
    "lng": -34.858760000000004,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 9.267/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-33776382",
    "title": "Apartamento com 2 quartos à venda na Rua Vilas Boas, 99, Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Vilas Boas, 99",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 486,
    "iptu": 2250,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11306,
    "lng": -34.86436,
    "thesis": "Portal · 54 m² em Treze de Maio, pedido R$ 8.333/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-36975942",
    "title": "Apartamento com 2 quartos à venda na Rua Prefeito José de Carvalho, Treze de Maio, João Pe",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Prefeito José De Carvalho, ",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 342300,
    "condo": 405,
    "iptu": 1712,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.10946,
    "lng": -34.86804,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-42562652",
    "title": "Apartamento com 3 quartos à venda na Rua Francisco Moura, --, Treze de Maio, João Pessoa, ",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Francisco Moura, --",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 352536,
    "condo": 810,
    "iptu": 1763,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.10974,
    "lng": -34.85375,
    "thesis": "Portal · 90 m² em Treze de Maio, pedido R$ 3.917/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-41984647",
    "title": "Apartamento com 2 quartos à venda na Rua Américo Vespúcio, --, Treze de Maio, João Pessoa,",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Américo Vespúcio, --",
    "area": 45,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 397448,
    "condo": 405,
    "iptu": 1987,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11017,
    "lng": -34.86766,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-32687681",
    "title": "Apartamento com 2 quartos à venda no Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 415000,
    "condo": 450,
    "iptu": 2075,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.86596,
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 8.300/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-38211629",
    "title": "Apartamento na Planta para Venda em João Pessoa, Treze de Maio, 2 dormitórios, 1 suíte, 1 ",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 397448,
    "condo": 405,
    "iptu": 1987,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14124,
    "lng": -34.85588,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-42785197",
    "title": "Apartamento com 2 quartos à venda no Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 342300,
    "condo": 405,
    "iptu": 1712,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.143759999999999,
    "lng": -34.86788,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46391870",
    "title": "Apartamento com 2 quartos à venda na Avenida Mandacaru, Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Avenida Mandacaru, ",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 486,
    "iptu": 1150,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.10389,
    "lng": -34.86428,
    "thesis": "Portal · 54 m² em Treze de Maio, pedido R$ 4.259/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-36212634",
    "title": "Apartamento com 3 dormitórios à venda, 53 m² por R$ 549.000,00 - Treze de Maio - João Pess",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 53,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 549000,
    "condo": 477,
    "iptu": 2745,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11981,
    "lng": -34.89233,
    "thesis": "Portal · 53 m² em Treze de Maio, pedido R$ 10.358/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44715939",
    "title": "Excelente Lançamento no Treze de Maio com 2 Quartos sendo 1 Suíte com Elevador e Lazer Com",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Prefeito José De Carvalho, 200",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 397448,
    "condo": 450,
    "iptu": 1987,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.10947,
    "lng": -34.86812,
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 7.949/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-35375415",
    "title": "Apartamento com 2 quartos à venda no Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 286000,
    "condo": 423,
    "iptu": 1430,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14112,
    "lng": -34.85996,
    "thesis": "Portal · 47 m² em Treze de Maio, pedido R$ 6.085/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45987807",
    "title": "Cobertura de 105 m², com 3 quartos, sendo 1 suíte, e ambientes com móveis projetados.",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 945,
    "iptu": 2750,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.13932,
    "lng": -34.85288,
    "thesis": "Portal · 105 m² em Treze de Maio, pedido R$ 5.238/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-33996473",
    "title": "Apartamento com 2 dormitórios à venda por R$ 200.000,00 - Alto do Mateus - João Pessoa/PB",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 200000,
    "condo": 495,
    "iptu": 1000,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 55 m² em Alto do Mateus, pedido R$ 3.636/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-41629673",
    "title": "Apartamento com 2 quartos à venda na Rua Maria José Gomes do Amaral, 151, Alto do Mateus, ",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Rua Maria José Gomes Do Amaral, 151",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 145000,
    "condo": 504,
    "iptu": 800,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14264,
    "lng": -34.90721,
    "thesis": "Portal · 56 m² em Alto do Mateus, pedido R$ 2.589/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-39599405",
    "title": "Apartamento com 2 dormitórios à venda por R$ 190.000,00 - Alto do Mateus - João Pessoa/PB",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 495,
    "iptu": 950,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 55 m² em Alto do Mateus, pedido R$ 3.455/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-25695023",
    "title": "Apartamento com 2 quartos à venda na Rua Santa Margarida, 87, Alto do Mateus, João Pessoa",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Rua Santa Margarida, 87",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 540,
    "iptu": 900,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14063,
    "lng": -34.90866,
    "thesis": "Portal · 60 m² em Alto do Mateus, pedido R$ 3.000/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-37675135",
    "title": "Apartamento com 2 dormitórios à venda por R$ 220.000,00 - Alto do Mateus - João Pessoa/PB",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 450,
    "iptu": 1100,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 50 m² em Alto do Mateus, pedido R$ 4.400/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-16540030",
    "title": "Apartamento com 2 dormitórios à venda por R$ 180.000 - Alto do Mateus - João Pessoa/PB",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 432,
    "iptu": 900,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 48 m² em Alto do Mateus, pedido R$ 3.750/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-37675136",
    "title": "Apartamento com 2 dormitórios à venda por R$ 180.000 - Alto do Mateus - João Pessoa/PB",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 450,
    "iptu": 900,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 50 m² em Alto do Mateus, pedido R$ 3.600/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-27389224",
    "title": "Apartamento com 2 dormitórios à venda por R$ 130.000 - Alto do Mateus - João Pessoa/PB",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 130000,
    "condo": 360,
    "iptu": 800,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 40 m² em Alto do Mateus, pedido R$ 3.250/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-41743883",
    "title": "Apartamento com 2 dormitórios à venda, 45 m² por R$ 397.448,32 - Treze de Maio - João Pess",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 397448,
    "condo": 405,
    "iptu": 1987,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11981,
    "lng": -34.89233,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-24867217",
    "title": "Apartamento com 3 dormitórios à venda, 78 m² por R$ 499.000,00 - Treze de Maio - João Pess",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 499000,
    "condo": 702,
    "iptu": 2495,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11981,
    "lng": -34.89233,
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 6.397/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-45991924",
    "title": "Apartamento térreo no Bairro das Indústrias codigo: 362958",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 150000,
    "condo": 450,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.1846,
    "lng": -34.8706,
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.000/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-37741871",
    "title": "Apartamento em João Pessoa Bairro Indústrias, térreo, 2 quartos, área privativa",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Avenida Cidade De Cajazeiras, 90",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 495,
    "iptu": 950,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1779601,
    "lng": -34.9228082,
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.455/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-41853713",
    "title": "Oportunidade única: Apartamento com 2 quartos em Bairro das Indústrias - João Pessoa - PB",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Rua Dos Diamantes, 2",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 129000,
    "condo": 423,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17138,
    "lng": -34.91801,
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.745/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43082913",
    "title": "Apartamento com 2 dormitórios à venda, 41 m² por R$ 215.000,00 - Bairro das Indústrias - J",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 41,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 215000,
    "condo": 369,
    "iptu": 1075,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 41 m² em Indústrias, pedido R$ 5.244/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-42769103",
    "title": "Apartamento com 2 dormitórios à venda por R$ 100.000,00 - Bairro das Indústrias - João Pes",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 42,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 100000,
    "condo": 378,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 42 m² em Indústrias, pedido R$ 2.381/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-18257342",
    "title": "Apartamento com 2 dormitórios à venda, 52 m² por R$ 140.000 - Bairro das Indústrias - João",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 140000,
    "condo": 468,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 52 m² em Indústrias, pedido R$ 2.692/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-19603225",
    "title": "Apartamento com 2 dormitórios à venda por R$ 85.000,00 - Bairro das Indústrias - João Pess",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 85000,
    "condo": 558,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 62 m² em Indústrias, pedido R$ 1.371/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-8676954",
    "title": "Apartamento com 2 dormitórios à venda, 51 m² por R$ 90.000 - Bairro das Indústrias - João ",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 90000,
    "condo": 459,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 51 m² em Indústrias, pedido R$ 1.765/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-36871158",
    "title": "Apartamento com 2 dormitórios à venda por R$ 166.000 - Bairro das Indústrias - João Pessoa",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 166000,
    "condo": 414,
    "iptu": 830,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 46 m² em Indústrias, pedido R$ 3.609/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-23325053",
    "title": "Apartamento à venda por R$ 133.000,00 - Bairro das Indústrias - João Pessoa/PB",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 133000,
    "condo": 450,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 2.660/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-25308456",
    "title": "Apartamento com 2 dormitórios à venda por R$ 130.000,00 - Bairro das Indústrias - João Pes",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 42,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 130000,
    "condo": 378,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 42 m² em Indústrias, pedido R$ 3.095/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-18813340",
    "title": "Apartamento com 2 dormitórios à venda, 43 m² por R$ 120.000 - Indústrias - João Pessoa/PB",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 120000,
    "condo": 387,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 43 m² em Indústrias, pedido R$ 2.791/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-43153884",
    "title": "Apartamento com 2 quartos à venda na Rua dos Carteiros, 100, Indústrias, João Pessoa",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Rua Dos Carteiros, 100",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 172000,
    "condo": 387,
    "iptu": 860,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1759,
    "lng": -34.92054,
    "thesis": "Portal · 43 m² em Indústrias, pedido R$ 4.000/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-46696512",
    "title": "Flat com 1 dormitório à venda, 24 m² por R$ 600.000,00 - Tambaú - João Pessoa/PB",
    "type": "flat",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 24,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 600000,
    "condo": 216,
    "iptu": 3000,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11392,
    "lng": -34.82924,
    "thesis": "Portal · 24 m² em Tambaú, pedido R$ 25.000/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45321983",
    "title": "Oportunidade Imperdível em Tambaú! Flat MOBILIADO por 465 Mil.",
    "type": "flat",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 29,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 465000,
    "condo": 261,
    "iptu": 2325,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.11056,
    "lng": -34.82324,
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.034/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-42808515",
    "title": "Casa com 2 quartos à venda na Rua Nossa Senhora dos Navegantes, --, Tambaú, João Pessoa",
    "type": "casa",
    "bairroId": "tambau",
    "street": "Rua Nossa Senhora Dos Navegantes, --",
    "area": 400,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3900000,
    "condo": 0,
    "iptu": 19500,
    "seaMeters": 60,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.11649,
    "lng": -34.82507,
    "thesis": "Portal · 400 m² em Tambaú, pedido R$ 9.750/m² contra 10.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45829320",
    "title": "Casa com 4 quartos à venda na Rua Vigolvino Florentino Costa, Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Vigolvino Florentino Costa, ",
    "area": 220,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10658,
    "lng": -34.83896,
    "thesis": "Portal · 220 m² em Manaíra, pedido R$ 4.091/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-46552684",
    "title": "Casa em condomínio fechado no Altiplano Nobre- Oportunidade",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Avenida João Cirilo Da Silva, 1700",
    "area": 300,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2900000,
    "condo": 0,
    "iptu": 14500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1329,
    "lng": -34.824,
    "thesis": "Portal · 300 m² em Altiplano, pedido R$ 9.667/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-32435664",
    "title": "Casa com 3 quartos à venda na Avenida Campos Sales, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Avenida Campos Sales, ",
    "area": 104,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.17112,
    "lng": -34.85984,
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 7.212/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-44749932",
    "title": "Alamoana - Casa Alto Padrão/ Casa no Bessa/ casa beira mar/ casa em João Pessoa/ casa em A",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Avenida Índio Arabutan, ",
    "area": 256,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 3100000,
    "condo": 0,
    "iptu": 15500,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.12094,
    "lng": -34.82445,
    "thesis": "Portal · 256 m² em Cabo Branco, pedido R$ 12.109/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-30721618",
    "title": "oportunidade de casa no Cabo Branco, pouco minutos da praia.",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Rua Paulino Pinto, ",
    "area": 310,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 2699000,
    "condo": 0,
    "iptu": 13495,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12221,
    "lng": -34.82908,
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 8.706/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-45322080",
    "title": "Flat com 1 dormitório à venda, 28 m² por R$ 445.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 28,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 445000,
    "condo": 252,
    "iptu": 2225,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1195,
    "lng": -34.8188,
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 15.893/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-45322081",
    "title": "Flat com 1 dormitório à venda, 42 m² por R$ 780.000,00 - Cabo Branco - João Pessoa| PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 42,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 780000,
    "condo": 378,
    "iptu": 3900,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1193800000000005,
    "lng": -34.8188,
    "thesis": "Portal · 42 m² em Cabo Branco, pedido R$ 18.571/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46696508",
    "title": "Flat com 1 dormitório à venda, 42 m² por R$ 480.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 42,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 480000,
    "condo": 378,
    "iptu": 2400,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.12286,
    "lng": -34.82744,
    "thesis": "Portal · 42 m² em Cabo Branco, pedido R$ 11.429/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45322049",
    "title": "Flat com 1 dormitório à venda, 25 m² por R$ 370.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 25,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 370000,
    "condo": 225,
    "iptu": 1850,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.115060000000001,
    "lng": -34.818920000000006,
    "thesis": "Portal · 25 m² em Cabo Branco, pedido R$ 14.800/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46155914",
    "title": "Casa com 6 quartos à venda no Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 310,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3000000,
    "condo": 0,
    "iptu": 15000,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.118180000000001,
    "lng": -34.834160000000004,
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45322056",
    "title": "Flat com 1 dormitório à venda, 33 m² por R$ 549.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 33,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 549000,
    "condo": 297,
    "iptu": 2745,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.12106,
    "lng": -34.8188,
    "thesis": "Portal · 33 m² em Cabo Branco, pedido R$ 16.636/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45322013",
    "title": "Flat com 1 dormitório à venda, 18 m² por R$ 395.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 18,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 395000,
    "condo": 162,
    "iptu": 1975,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.118060000000001,
    "lng": -34.818920000000006,
    "thesis": "Portal · 18 m² em Cabo Branco, pedido R$ 21.944/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45322072",
    "title": "Flat com 1 dormitório à venda, 32 m² por R$ 610.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 32,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 610000,
    "condo": 288,
    "iptu": 3050,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.123220000000001,
    "lng": -34.8188,
    "thesis": "Portal · 32 m² em Cabo Branco, pedido R$ 19.063/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45321974",
    "title": "Flat com 1 dormitório à venda, 30 m² por R$ 610.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 30,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 610000,
    "condo": 270,
    "iptu": 3050,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.120100000000001,
    "lng": -34.82144,
    "thesis": "Portal · 30 m² em Cabo Branco, pedido R$ 20.333/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45321997",
    "title": "Flat com 1 dormitório à venda, 34 m² por R$ 580.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 34,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 580000,
    "condo": 306,
    "iptu": 2900,
    "seaMeters": 80,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.1214200000000005,
    "lng": -34.82144,
    "thesis": "Portal · 34 m² em Cabo Branco, pedido R$ 17.059/m² contra 12.541 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-41113385",
    "title": "Cobertura no ed. Porto dover em manaíra joão pessoa/pb cód.3454",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Avenida Ingá, 553",
    "area": 300,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10755,
    "lng": -34.83331,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 5.000/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45095151",
    "title": "Casa com mais 200m² de área construida, 3 suítes no Manaíra - João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 201,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1400000,
    "condo": 0,
    "iptu": 7000,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1018,
    "lng": -34.827,
    "thesis": "Portal · 201 m² em Manaíra, pedido R$ 6.965/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-44822426",
    "title": "Casa com 2 quartos à venda na Rua Gláucia Maria dos Santos Gouveia, --, Manaíra, João Pess",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Gláucia Maria Dos Santos Gouveia, --",
    "area": 208,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 950000,
    "condo": 0,
    "iptu": 4750,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.10612,
    "lng": -34.84002,
    "thesis": "Portal · 208 m² em Manaíra, pedido R$ 4.567/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-46308807",
    "title": "Casa com 4 quartos à venda na Rua Vigolvino Florentino Costa, Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Vigolvino Florentino Costa, ",
    "area": 373,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1200000,
    "condo": 0,
    "iptu": 6000,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10658,
    "lng": -34.83896,
    "thesis": "Portal · 373 m² em Manaíra, pedido R$ 3.217/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-44174232",
    "title": "Casa ampla à venda em Manaíra – Conforto, segurança e localização privilegiada! codigo: 34",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 191,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.09832,
    "lng": -34.83252,
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.712/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45358934",
    "title": "Casa com 5 quartos à venda no Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 191,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1024,
    "lng": -34.82916,
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.712/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43542822",
    "title": "Casa com 5 quartos à venda na Rua Gláucia Maria dos Santos Gouveia, --, Manaíra, João Pess",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Gláucia Maria Dos Santos Gouveia, --",
    "area": 191,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 950000,
    "condo": 0,
    "iptu": 4750,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10612,
    "lng": -34.84002,
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.974/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-30647513",
    "title": "Setai House Resort - CASA ALTO PADRÃO/ CASA NO SETAI HOUSE RESORT/ CASA EM MANAIRA/CASA BE",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Avenida João Maurício, ",
    "area": 314,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2400000,
    "condo": 0,
    "iptu": 12000,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10438,
    "lng": -34.8297,
    "thesis": "Portal · 314 m² em Manaíra, pedido R$ 7.643/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-35961153",
    "title": "Casa com 3 quartos à venda no Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 130,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1200000,
    "condo": 0,
    "iptu": 6000,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.10528,
    "lng": -34.8408,
    "thesis": "Portal · 130 m² em Manaíra, pedido R$ 9.231/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-33304911",
    "title": "Casa com 5 quartos à venda no Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 208,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 850000,
    "condo": 0,
    "iptu": 4250,
    "seaMeters": 180,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10252,
    "lng": -34.83996,
    "thesis": "Portal · 208 m² em Manaíra, pedido R$ 4.087/m² contra 8.924 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-40487324",
    "title": "Casa à venda com piscina a 160m da praia do Bessa, com 04 quartos, sendo 01 suíte, localiz",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Presidente Venceslau Braz, 227",
    "area": 240,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1777000,
    "condo": 0,
    "iptu": 8885,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.06665,
    "lng": -34.84109,
    "thesis": "Portal · 240 m² em Bessa, pedido R$ 7.404/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-46370752",
    "title": "PRAIA DO BESSA . Casa com 4 quartos sendo todos suítes, 3 salas, garagens para 4 carros e ",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Avenida Presidente Afonso Pena, ",
    "area": 350,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1990000,
    "condo": 0,
    "iptu": 9950,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.06608,
    "lng": -34.8404,
    "thesis": "Portal · 350 m² em Bessa, pedido R$ 5.686/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-43117709",
    "title": "Casa com 4 quartos à venda na Rua Irmão Antônio Reginaldo, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Irmão Antônio Reginaldo, ",
    "area": 144,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 760000,
    "condo": 0,
    "iptu": 3800,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.07188,
    "lng": -34.84307,
    "thesis": "Portal · 144 m² em Bessa, pedido R$ 5.278/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-44751349",
    "title": "Casa ampla no Bessa | Terreno 360 m² | Excelente localização | Próxima à praia",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 173,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1150000,
    "condo": 0,
    "iptu": 5750,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.06794,
    "lng": -34.83284,
    "thesis": "Portal · 173 m² em Bessa, pedido R$ 6.647/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-43831874",
    "title": "Casa com 3 quartos à venda na Avenida Marechal Hermes da Fonseca, --, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Avenida Marechal Hermes Da Fonseca, --",
    "area": 360,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1300000,
    "condo": 0,
    "iptu": 6500,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.06867,
    "lng": -34.84627,
    "thesis": "Portal · 360 m² em Bessa, pedido R$ 3.611/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-41074898",
    "title": "Casa com 4 quartos à venda na Rua Hermes Gomes Bezerra, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Hermes Gomes Bezerra, ",
    "area": 259,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1100000,
    "condo": 0,
    "iptu": 5500,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.06044,
    "lng": -34.84759,
    "thesis": "Portal · 259 m² em Bessa, pedido R$ 4.247/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45322046",
    "title": "Casa com 1 quarto à venda no Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 22,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 375000,
    "condo": 0,
    "iptu": 1875,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.06542,
    "lng": -34.83092,
    "thesis": "Portal · 22 m² em Bessa, pedido R$ 17.045/m² contra 8.533 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-42518283",
    "title": "Casa com 5 quartos à venda na Rua Norberto de Castro Nogueira, --, Jardim Oceania, João Pe",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, --",
    "area": 350,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 3200000,
    "condo": 0,
    "iptu": 16000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08137,
    "lng": -34.83371,
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-36376106",
    "title": "Casa com 4 dormitórios, 350 m² - venda por R$ 3.200.000,00 ou aluguel por R$ 15.000,00/mês",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 350,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 3200000,
    "condo": 0,
    "iptu": 16000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.09128,
    "lng": -34.8418,
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-39837499",
    "title": "Casa com 4 quartos à venda no Jardim Oceania, João Pessoa , 363 m2 por R$ 2.000.000",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 363,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 2000000,
    "condo": 0,
    "iptu": 10000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08696,
    "lng": -34.84636,
    "thesis": "Portal · 363 m² em Jardim Oceania, pedido R$ 5.510/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-37476450",
    "title": "Casa com 4 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 160,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1600000,
    "condo": 0,
    "iptu": 8000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08504,
    "lng": -34.83184,
    "thesis": "Portal · 160 m² em Jardim Oceania, pedido R$ 10.000/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45322048",
    "title": "Flats com varanda / sacada gourmet á 400m da praia do Bessa - FL0473",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 576343,
    "condo": 513,
    "iptu": 2882,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.08408,
    "lng": -34.82932,
    "thesis": "Portal · 57 m² em Jardim Oceania, pedido R$ 10.111/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45322031",
    "title": "Flat com 1 dormitório à venda, 25 m² por R$ 400.000,00 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 25,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 400000,
    "condo": 225,
    "iptu": 2000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08888,
    "lng": -34.82932,
    "thesis": "Portal · 25 m² em Jardim Oceania, pedido R$ 16.000/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-45322074",
    "title": "Flat com 1 dormitório à venda, 27 m² por R$ 630.000,00 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 27,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 243,
    "iptu": 3150,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.09188,
    "lng": -34.8292,
    "thesis": "Portal · 27 m² em Jardim Oceania, pedido R$ 23.333/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45322059",
    "title": "Flat com 1 dormitório à venda, 25 m² por R$ 430.000,00 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 25,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 430000,
    "condo": 225,
    "iptu": 2150,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.0896,
    "lng": -34.8292,
    "thesis": "Portal · 25 m² em Jardim Oceania, pedido R$ 17.200/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-45322060",
    "title": "Flat com 1 dormitório à venda, 22 m² por R$ 550.000,00 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 22,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 198,
    "iptu": 2750,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08672,
    "lng": -34.8292,
    "thesis": "Portal · 22 m² em Jardim Oceania, pedido R$ 25.000/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46696511",
    "title": "Flat com 1 dormitório à venda, 45 m² por R$ 650.000,00 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 45,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 405,
    "iptu": 3250,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08864,
    "lng": -34.83784,
    "thesis": "Portal · 45 m² em Jardim Oceania, pedido R$ 14.444/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45322069",
    "title": "Flat com 1 dormitório à venda, 23 m² por R$ 650.000,00 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 23,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 207,
    "iptu": 3250,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.08564,
    "lng": -34.8292,
    "thesis": "Portal · 23 m² em Jardim Oceania, pedido R$ 28.261/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-40594736",
    "title": "Casa com 3 quartos à venda na Rua José Patrício de Almeida, 174, Jardim Oceania, João Pess",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Rua José Patrício De Almeida, 174",
    "area": 107,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 445000,
    "condo": 0,
    "iptu": 2225,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.07829,
    "lng": -34.83429,
    "thesis": "Portal · 107 m² em Jardim Oceania, pedido R$ 4.159/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-40305157",
    "title": "Casa com 3 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 195,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12724,
    "lng": -34.84506,
    "thesis": "Portal · 195 m² em Altiplano, pedido R$ 7.692/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-34635256",
    "title": "Casa com 5 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 333,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 4100000,
    "condo": 0,
    "iptu": 20500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.13,
    "lng": -34.8405,
    "thesis": "Portal · 333 m² em Altiplano, pedido R$ 12.312/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-40283116",
    "title": "Casa com 3 quartos à venda na Rua Desembargador Rivaldo Pereira, Altiplano Cabo Branco, Jo",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Desembargador Rivaldo Pereira, ",
    "area": 390,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.13036,
    "lng": -34.82964,
    "thesis": "Portal · 390 m² em Altiplano, pedido R$ 3.846/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-17697125",
    "title": "Casa Para Vender com 04 quartos 04 suítes no bairro Altiplano Cabo Branco em João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 200,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 800000,
    "condo": 0,
    "iptu": 4000,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1324,
    "lng": -34.82829,
    "thesis": "Portal · 200 m² em Altiplano, pedido R$ 4.000/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-43896630",
    "title": "Casa com 4 quartos à venda no Altiplano Cabo Branco, João Pessoa , 220 m2 por R$ 1.500.000",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 220,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.13516,
    "lng": -34.85082,
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-43006141",
    "title": "Casa com 4 quartos à venda na Rua Maria José Caetano da Silva, 3, Altiplano Cabo Branco, J",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Maria José Caetano Da Silva, 3",
    "area": 220,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.13781,
    "lng": -34.83244,
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-36375869",
    "title": "Casa com 5 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 400,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2800000,
    "condo": 0,
    "iptu": 14000,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.128439999999999,
    "lng": -34.850699999999996,
    "thesis": "Portal · 400 m² em Altiplano, pedido R$ 7.000/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-43346152",
    "title": "Casa com 3 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 37,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1150000,
    "condo": 0,
    "iptu": 5750,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.1288,
    "lng": -34.84446,
    "thesis": "Portal · 37 m² em Altiplano, pedido R$ 31.081/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-30662621",
    "title": "Casa com 4 dormitórios à venda, 250 m² por R$ 1.150.000,00 - Altiplano Cabo Branco - João ",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 250,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1150000,
    "condo": 0,
    "iptu": 5750,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1324,
    "lng": -34.82829,
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-35068179",
    "title": "Casa com 4 quartos à venda na Rua Oneida Agra da Nóbrega, 150, Altiplano Cabo Branco, João",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Oneida Agra Da Nóbrega, 150",
    "area": 260,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1200000,
    "condo": 0,
    "iptu": 6000,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.13717,
    "lng": -34.83024,
    "thesis": "Portal · 260 m² em Altiplano, pedido R$ 4.615/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-40732070",
    "title": "Casa de 280m2 com 3 Suítes, Toda Projetada e Piscina Privativa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Professora Nair Paiva Dos Santos, 350",
    "area": 280,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2600000,
    "condo": 0,
    "iptu": 13000,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14132,
    "lng": -34.82744,
    "thesis": "Portal · 280 m² em Altiplano, pedido R$ 9.286/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46155913",
    "title": "Casa de Luxo à Venda no Condomínio Bougainville Residence Privé",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 330,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3700000,
    "condo": 0,
    "iptu": 18500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.13,
    "lng": -34.84986,
    "thesis": "Portal · 330 m² em Altiplano, pedido R$ 11.212/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-42369729",
    "title": "Casa com 3 quartos à venda na : Undefined Index: Street In On Line, : Undefin, Aeroclube, ",
    "type": "casa",
    "bairroId": "aeroclube",
    "street": ":  Undefined Index: Street In  On Line, :  Undefin",
    "area": 360,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08955,
    "lng": -34.84185,
    "thesis": "Portal · 360 m² em Aeroclube, pedido R$ 4.167/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-39976769",
    "title": "Casa com 3 dormitórios à venda, 260 m² por R$ 1.500.000,00 - Aeroclube - João Pessoa/PB",
    "type": "casa",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 260,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 1400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08955,
    "lng": -34.84185,
    "thesis": "Portal · 260 m² em Aeroclube, pedido R$ 5.769/m² contra 9.066 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-43747154",
    "title": "Casa com 4 quartos à venda na Rua Pedro Macêdo de Lima, Jardim Oceania, João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Rua Pedro Macêdo De Lima, ",
    "area": 384,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3200000,
    "condo": 0,
    "iptu": 16000,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08311,
    "lng": -34.83504,
    "thesis": "Portal · 384 m² em Jardim Oceania, pedido R$ 8.333/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-42369950",
    "title": "OPORTUNIDADE DE CASA com quintal , NO JARDIM OCEANIA . João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Rua Paulo Costa Lima, 1",
    "area": 99,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 390000,
    "condo": 0,
    "iptu": 1950,
    "seaMeters": 220,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.07493,
    "lng": -34.83958,
    "thesis": "Portal · 99 m² em Jardim Oceania, pedido R$ 3.939/m² contra 10.872 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45579774",
    "title": "Casa ampla à venda em Brisamar – Conforto, espaço e versatilidade em localização privilegi",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 200,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.09052,
    "lng": -34.842,
    "thesis": "Portal · 200 m² em Brisamar, pedido R$ 2.750/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-43140926",
    "title": "Casa para Venda em João Pessoa, Brisamar, 3 dormitórios, 1 suíte, 2 banheiros, 3 vagas",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Rua General Aldenor Quinderé, 100",
    "area": 240,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11132,
    "lng": -34.8401,
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 1.875/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-46395146",
    "title": "Casa com 4 quartos à venda no Brisamar, João Pessoa",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 79,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.0898,
    "lng": -34.85724,
    "thesis": "Portal · 79 m² em Brisamar, pedido R$ 7.595/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-41285886",
    "title": "Casa com 2 dormitórios à venda por R$ 530.000 no Brisamar - João Pessoa/PB",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 150,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 530000,
    "condo": 0,
    "iptu": 2650,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.11323,
    "lng": -34.84193,
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 3.533/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45247796",
    "title": "Casa ampla e elegante no Brisamar/Jardim Luna – Espaço, conforto e excelente localização!",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 348,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1600000,
    "condo": 0,
    "iptu": 8000,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.08908,
    "lng": -34.841519999999996,
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-36433723",
    "title": "Ponto Comercial Bar e Restaurante | Brisamar | Ótima localização codigo: 119524",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 240,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
    "seaMeters": 1100,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.09448,
    "lng": -34.85136,
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 4.167/m² contra 9.306 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-42017693",
    "title": "Casa com 3 quartos à venda no Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 187,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.117719999999999,
    "lng": -34.86024,
    "thesis": "Portal · 187 m² em Torre, pedido R$ 3.209/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40846412",
    "title": "Casa com 5 quartos à venda no Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 150,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 330000,
    "condo": 0,
    "iptu": 1650,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.121919999999999,
    "lng": -34.86803999999999,
    "thesis": "Portal · 150 m² em Torre, pedido R$ 2.200/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-36377859",
    "title": "Casa com 3 quartos à venda na Rua Caturité, 49, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Rua Caturité, 49",
    "area": 385,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 630000,
    "condo": 0,
    "iptu": 3150,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12971,
    "lng": -34.86539,
    "thesis": "Portal · 385 m² em Torre, pedido R$ 1.636/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-43009965",
    "title": "Casa com 2 quartos à venda na Avenida Barão de Mamanguape, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Avenida Barão De Mamanguape, ",
    "area": 131,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.12503,
    "lng": -34.86379,
    "thesis": "Portal · 131 m² em Torre, pedido R$ 2.672/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-30211350",
    "title": "Casa com 4 quartos à venda na Rua Pereira da Silva, 63, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Rua Pereira Da Silva, 63",
    "area": 110,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 410000,
    "condo": 0,
    "iptu": 2050,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1452063,
    "lng": -34.9129874,
    "thesis": "Portal · 110 m² em Torre, pedido R$ 3.727/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-34269373",
    "title": "Casa com 2 dormitórios à venda por R$ 450.000,00 - Torre - João Pessoa/PB",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 400,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.11971,
    "lng": -34.85065,
    "thesis": "Portal · 400 m² em Torre, pedido R$ 1.125/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-45605861",
    "title": "Casa com 5 quartos à venda na Rua Anunciato Silva, 32, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Rua Anunciato Silva, 32",
    "area": 399,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1550000,
    "condo": 0,
    "iptu": 7750,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12863,
    "lng": -34.85572,
    "thesis": "Portal · 399 m² em Torre, pedido R$ 3.885/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-43451093",
    "title": "Casa para Venda em João Pessoa, Torre, 3 dormitórios, 2 suítes, 4 banheiros, 2 vagas",
    "type": "casa",
    "bairroId": "torre",
    "street": "Rua São Sebastião, ",
    "area": 210,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 480000,
    "condo": 0,
    "iptu": 2400,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12646,
    "lng": -34.86644,
    "thesis": "Portal · 210 m² em Torre, pedido R$ 2.286/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46595345",
    "title": "Casa com 3 quartos à venda na Avenida Aragão e Melo, 600, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Avenida Aragão E Melo, 600",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.12407,
    "lng": -34.86152,
    "thesis": "Portal · 80 m² em Torre, pedido R$ 7.500/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-38146761",
    "title": "Casa com 1 dormitório à venda por R$ 120.000,00 - Torre - João Pessoa/PB",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 30,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 120000,
    "condo": 0,
    "iptu": 800,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.11971,
    "lng": -34.85065,
    "thesis": "Portal · 30 m² em Torre, pedido R$ 4.000/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-35229656",
    "title": "Casa para Venda em João Pessoa, Torre, 6 dormitórios, 3 suítes, 4 banheiros, 3 vagas",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 214,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 500000,
    "condo": 0,
    "iptu": 2500,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.117,
    "lng": -34.85796,
    "thesis": "Portal · 214 m² em Torre, pedido R$ 2.336/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-38039302",
    "title": "Casa com 3 quartos à venda na Avenida Rui Barbosa, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Avenida Rui Barbosa, ",
    "area": 195,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 590000,
    "condo": 0,
    "iptu": 2950,
    "seaMeters": 2800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12545,
    "lng": -34.86003,
    "thesis": "Portal · 195 m² em Torre, pedido R$ 3.026/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45624289",
    "title": "Casa com 4 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 148,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 790000,
    "condo": 0,
    "iptu": 3950,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1502,
    "lng": -34.85476,
    "thesis": "Portal · 148 m² em Bancários, pedido R$ 5.338/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-22314898",
    "title": "Casa com 3 dormitórios à venda, 200 m² por R$ 970.000,00 - Bancários - João Pessoa/PB",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 970000,
    "condo": 0,
    "iptu": 4850,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15248,
    "lng": -34.85968,
    "thesis": "Portal · 200 m² em Bancários, pedido R$ 4.850/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-23756530",
    "title": "Casa com 2 quartos à venda na Rua Antônio Miguel Duarte, 321, Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Antônio Miguel Duarte, 321",
    "area": 330,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1459504,
    "lng": -34.8482069,
    "thesis": "Portal · 330 m² em Bancários, pedido R$ 2.273/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45096984",
    "title": "Casa com 4 quartos à venda no Bancários, João Pessoa , 148 m2 por R$ 800.000",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 148,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 800000,
    "condo": 0,
    "iptu": 4000,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14768,
    "lng": -34.847319999999996,
    "thesis": "Portal · 148 m² em Bancários, pedido R$ 5.405/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-34573160",
    "title": "Condominio Reserva do Atlantico - Casa Alto Padrão no Reserva do Atlantico / Jd Cidade Uni",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Radialista Antonio Assunção De Jesus, 1275",
    "area": 190,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 2090000,
    "condo": 0,
    "iptu": 10450,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15294,
    "lng": -34.82886,
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 11.000/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-38888683",
    "title": "Casa térrea com grande área livre, R$895.000,00 - Bancários, João Pessoa/PB",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 97,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 895000,
    "condo": 0,
    "iptu": 4475,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15452,
    "lng": -34.849959999999996,
    "thesis": "Portal · 97 m² em Bancários, pedido R$ 9.227/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-20087731",
    "title": "Casa com 4 quartos à venda na Rua Radialista Antônio Assunção, 1275, Bancários, João Pesso",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Radialista Antônio Assunção, 1275",
    "area": 180,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1532029,
    "lng": -34.8367254,
    "thesis": "Portal · 180 m² em Bancários, pedido R$ 1.944/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-43450125",
    "title": "Casa com 4 quartos à venda no Bancários, João Pessoa , 201 m2 por R$ 1.000.000",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 201,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14828,
    "lng": -34.86532,
    "thesis": "Portal · 201 m² em Bancários, pedido R$ 4.975/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-36433712",
    "title": "Casa com 4 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 384,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 850000,
    "condo": 0,
    "iptu": 4250,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14576,
    "lng": -34.85776,
    "thesis": "Portal · 384 m² em Bancários, pedido R$ 2.214/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-38684070",
    "title": "Casa com 4 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 320,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 740000,
    "condo": 0,
    "iptu": 3700,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14625,
    "lng": -34.83675,
    "thesis": "Portal · 320 m² em Bancários, pedido R$ 2.313/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-39022832",
    "title": "Casa com 3 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 890000,
    "condo": 0,
    "iptu": 4450,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15344,
    "lng": -34.86304,
    "thesis": "Portal · 150 m² em Bancários, pedido R$ 5.933/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-37416833",
    "title": "Casa para Venda em João Pessoa, Bancários, 4 dormitórios, 4 suítes, 5 banheiros, 2 vagas",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Radialista Antônio Assunção, 1275",
    "area": 300,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2500000,
    "condo": 0,
    "iptu": 12500,
    "seaMeters": 5200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15321,
    "lng": -34.83673,
    "thesis": "Portal · 300 m² em Bancários, pedido R$ 8.333/m² contra 6.255 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-42148439",
    "title": "Casa com 3 quartos à venda na Rua Oswaldo Evaristo Da Costa, --, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Rua Oswaldo Evaristo Da Costa, --",
    "area": 320,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10796,
    "lng": -34.85494,
    "thesis": "Portal · 320 m² em Estados, pedido R$ 1.719/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-33615833",
    "title": "Casa com 6 quartos à venda no Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 335,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1300000,
    "condo": 0,
    "iptu": 6500,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1238,
    "lng": -34.86012,
    "thesis": "Portal · 335 m² em Estados, pedido R$ 3.881/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-42148440",
    "title": "Casa com 3 quartos à venda na Rua Oswaldo Evaristo Da Costa, --, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Rua Oswaldo Evaristo Da Costa, --",
    "area": 306,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1300000,
    "condo": 0,
    "iptu": 6500,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10796,
    "lng": -34.85494,
    "thesis": "Portal · 306 m² em Estados, pedido R$ 4.248/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-40575812",
    "title": "Casa Para Vender com 7 quartos 4 suítes no bairro Estados em João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 400,
    "rooms": 7,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1490000,
    "condo": 0,
    "iptu": 7450,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 400 m² em Estados, pedido R$ 3.725/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-44818233",
    "title": "Vendo casa no bairro dos estados. Exelente localização. Muito boa para comércio ou residen",
    "type": "casa",
    "bairroId": "estados",
    "street": "Rua Doutor Oswaldo Brayner, 326",
    "area": 217,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11128,
    "lng": -34.85238,
    "thesis": "Portal · 217 m² em Estados, pedido R$ 3.456/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-13154100",
    "title": "Casa com 3 dormitórios à venda por R$ 600.000,00 - Estados - João Pessoa/PB",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 384,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 384 m² em Estados, pedido R$ 1.563/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-42369612",
    "title": "Casa com 3 quartos à venda na Avenida Sergipe, 1, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Avenida Sergipe, 1",
    "area": 170,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11178,
    "lng": -34.85905,
    "thesis": "Portal · 170 m² em Estados, pedido R$ 3.824/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-39954805",
    "title": "Casa com 4 quartos à venda na Avenida Espírito Santo, 801, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Avenida Espírito Santo, 801",
    "area": 282,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 700000,
    "condo": 0,
    "iptu": 3500,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1135,
    "lng": -34.85363,
    "thesis": "Portal · 282 m² em Estados, pedido R$ 2.482/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-34379467",
    "title": "Casa com 3 dormitórios à venda por R$ 700.000,00 - Bairro dos Estados - João Pessoa/PB",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 320,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 700000,
    "condo": 0,
    "iptu": 3500,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 320 m² em Estados, pedido R$ 2.188/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-17842106",
    "title": "Casa com 4 dormitórios à venda, 217 m² por R$ 750.000,00 - Bairro dos Estados - João Pesso",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 217,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 217 m² em Estados, pedido R$ 3.456/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-39103495",
    "title": "Casa com 3 dormitórios à venda, 190 m² por R$ 720.000,00 - Estados - João Pessoa/PB",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 190,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 720000,
    "condo": 0,
    "iptu": 3600,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 190 m² em Estados, pedido R$ 3.789/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45887797",
    "title": "Casa com 4 quartos à venda na Avenida Espírito Santo, 513, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Avenida Espírito Santo, 513",
    "area": 300,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1250000,
    "condo": 0,
    "iptu": 6250,
    "seaMeters": 2200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11353,
    "lng": -34.85628,
    "thesis": "Portal · 300 m² em Estados, pedido R$ 4.167/m² contra 6.791 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46340910",
    "title": "Casa com 5 quartos à venda na Rua Anunciato Silva, 32, Expedicionários, João Pessoa",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Rua Anunciato Silva, 32",
    "area": 399,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1399000,
    "condo": 0,
    "iptu": 6995,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12875,
    "lng": -34.85488,
    "thesis": "Portal · 399 m² em Expedicionários, pedido R$ 3.506/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-42714719",
    "title": "Casa com 3 quartos à venda na Rua Escritor José Vieira, Expedicionários, João Pessoa",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Rua Escritor José Vieira, ",
    "area": 160,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12672,
    "lng": -34.85377,
    "thesis": "Portal · 160 m² em Expedicionários, pedido R$ 3.750/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-14509974",
    "title": "Casa com 2 dormitórios à venda, 110 m² por R$ 600.000,00 - Expedicionários - João Pessoa/P",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 110,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.12326,
    "lng": -34.85332,
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.455/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-43145109",
    "title": "Casa com 3 quartos à venda na Avenida Nabuco de Assis, 58041080, Expedicionários, João Pes",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Avenida Nabuco De Assis, 58041080",
    "area": 220,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 500000,
    "condo": 0,
    "iptu": 2500,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12466,
    "lng": -34.85427,
    "thesis": "Portal · 220 m² em Expedicionários, pedido R$ 2.273/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45712407",
    "title": "Casa com 3 dormitórios à venda, 201 m² por R$ 450.000 - Expedicionários - João Pessoa/PB",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 201,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12326,
    "lng": -34.85332,
    "thesis": "Portal · 201 m² em Expedicionários, pedido R$ 2.239/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-42875111",
    "title": "Casa com 3 quartos à venda na Rua Heronides Ramos, 100, Expedicionários, João Pessoa",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Rua Heronides Ramos, 100",
    "area": 170,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 800000,
    "condo": 0,
    "iptu": 4000,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12616,
    "lng": -34.85421,
    "thesis": "Portal · 170 m² em Expedicionários, pedido R$ 4.706/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-18441306",
    "title": "Casa com 3 dormitórios à venda por R$ 650.000 - Expedicionários - João Pessoa/PB",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 325,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12326,
    "lng": -34.85332,
    "thesis": "Portal · 325 m² em Expedicionários, pedido R$ 2.000/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-43263448",
    "title": "Casa com 4 quartos à venda na Rua Escritor José Vieira, 200, Expedicionários, João Pessoa",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Rua Escritor José Vieira, 200",
    "area": 135,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12686,
    "lng": -34.8555,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.815/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-38094993",
    "title": "Casa com 3 quartos à venda na Rua Mariano Botelho, 46, Expedicionários, João Pessoa",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Rua Mariano Botelho, 46",
    "area": 218,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
    "seaMeters": 3200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12715,
    "lng": -34.8543,
    "thesis": "Portal · 218 m² em Expedicionários, pedido R$ 3.440/m² contra 5.987 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46157417",
    "title": "Casa Duplex - 7 quartos - 3 suítes - 360 m² - Centro, João Pessoa/PB",
    "type": "casa",
    "bairroId": "centro",
    "street": "Avenida Coremas, ",
    "area": 360,
    "rooms": 7,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12357,
    "lng": -34.87439,
    "thesis": "Portal · 360 m² em Centro, pedido R$ 1.250/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-44204988",
    "title": "Casa com 4 quartos à venda no Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Centro, João Pessoa",
    "area": 190,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 500000,
    "condo": 0,
    "iptu": 2500,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12202,
    "lng": -34.8856,
    "thesis": "Portal · 190 m² em Centro, pedido R$ 2.632/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-43876365",
    "title": "CASA A VENDA PARA COMERCIO OU MORADIA NO CENTRO DE JOAO PESSOA codigo: 346596",
    "type": "casa",
    "bairroId": "centro",
    "street": "Centro, João Pessoa",
    "area": 320,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12166,
    "lng": -34.89508,
    "thesis": "Portal · 320 m² em Centro, pedido R$ 1.094/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-38039285",
    "title": "Casa com 4 quartos à venda na Avenida Princesa Isabel, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Avenida Princesa Isabel, ",
    "area": 333,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1950000,
    "condo": 0,
    "iptu": 9750,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.1214,
    "lng": -34.878,
    "thesis": "Portal · 333 m² em Centro, pedido R$ 5.856/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-43881803",
    "title": "Casa com 5 quartos à venda na Rua Monsenhor Sabino Coelho, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Rua Monsenhor Sabino Coelho, ",
    "area": 196,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 400000,
    "condo": 0,
    "iptu": 2000,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12544,
    "lng": -34.88218,
    "thesis": "Portal · 196 m² em Centro, pedido R$ 2.041/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-43523895",
    "title": "Casa com 3 quartos à venda na Avenida Dom Pedro I, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Avenida Dom Pedro I, ",
    "area": 191,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1100000,
    "condo": 0,
    "iptu": 5500,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.11712,
    "lng": -34.87812,
    "thesis": "Portal · 191 m² em Centro, pedido R$ 5.759/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-38039523",
    "title": "Casa com 3 quartos à venda na Rua Machado de Assis, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Rua Machado De Assis, ",
    "area": 297,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 460000,
    "condo": 0,
    "iptu": 2300,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12284,
    "lng": -34.87667,
    "thesis": "Portal · 297 m² em Centro, pedido R$ 1.549/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-38039458",
    "title": "Casa com 2 quartos à venda na Rua Elizeu César, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Rua Elizeu César, ",
    "area": 98,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3400000,
    "condo": 0,
    "iptu": 17000,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.118,
    "lng": -34.88154,
    "thesis": "Portal · 98 m² em Centro, pedido R$ 34.694/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-38039561",
    "title": "Casa com 3 quartos à venda na Avenida Dom Pedro I, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Avenida Dom Pedro I, ",
    "area": 371,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3800000,
    "condo": 0,
    "iptu": 19000,
    "seaMeters": 2400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.11712,
    "lng": -34.87812,
    "thesis": "Portal · 371 m² em Centro, pedido R$ 10.243/m² contra 4.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-37130170",
    "title": "Casa Nova 4 Suítes no Portal do Sol — João Pessoa/PB | Luxo, Modernidade e Alto Padrão cod",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 193,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2500000,
    "condo": 0,
    "iptu": 12500,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.16056,
    "lng": -34.8388,
    "thesis": "Portal · 193 m² em Portal do Sol, pedido R$ 12.953/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-21187104",
    "title": "Casa com 4 dormitórios à venda, 270 m² por R$ 1.450.000,00 - Portal do Sol - João Pessoa/P",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 270,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1450000,
    "condo": 0,
    "iptu": 7250,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1584,
    "lng": -34.84084,
    "thesis": "Portal · 270 m² em Portal do Sol, pedido R$ 5.370/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-44832426",
    "title": "Casa com 4 quartos à venda na Null - João Pessoa - Pb, número, Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Null - João Pessoa - Pb, número",
    "area": 197,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1490000,
    "condo": 0,
    "iptu": 7450,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 197 m² em Portal do Sol, pedido R$ 7.563/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45862894",
    "title": "Casa para Venda em João Pessoa, Portal do Sol, 3 dormitórios, 3 suítes, 4 banheiros, 2 vag",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Empresário João Valdeci Gonçalves, 100",
    "area": 110,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.14676,
    "lng": -34.8132,
    "thesis": "Portal · 110 m² em Portal do Sol, pedido R$ 8.182/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-39837507",
    "title": "Casa com 4 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 280,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1550000,
    "condo": 0,
    "iptu": 7750,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.1581600000000005,
    "lng": -34.8526,
    "thesis": "Portal · 280 m² em Portal do Sol, pedido R$ 5.536/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46256803",
    "title": "Casa com 3 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 102,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 700000,
    "condo": 0,
    "iptu": 3500,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.161040000000001,
    "lng": -34.8454,
    "thesis": "Portal · 102 m² em Portal do Sol, pedido R$ 6.863/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-46217240",
    "title": "Casa com 5 quartos à venda no Portal do Sol, João Pessoa , 262 m2 por R$ 1.350.000",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 262,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1350000,
    "condo": 0,
    "iptu": 6750,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.160080000000001,
    "lng": -34.8472,
    "thesis": "Portal · 262 m² em Portal do Sol, pedido R$ 5.153/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-40282932",
    "title": "Casa com 4 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 120,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 850000,
    "condo": 0,
    "iptu": 4250,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.153840000000001,
    "lng": -34.85116,
    "thesis": "Portal · 120 m² em Portal do Sol, pedido R$ 7.083/m² contra 5.722 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-24341990",
    "title": "Casa em Jardim Cidade Universitária - Bancários, João Pessoa/PB de 3 Quartos",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Doutor Ephigênio Barbosa Da Silva, 808",
    "area": 176,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 630000,
    "condo": 0,
    "iptu": 3150,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15464,
    "lng": -34.8311,
    "thesis": "Portal · 176 m² em Jd. Cidade Universitária, pedido R$ 3.580/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45477815",
    "title": "Casa com 3 quartos à venda na Rua Rad. Antônio Assunção De Jesus, Jardim Cidade Universitá",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Rad. Antônio Assunção De Jesus, ",
    "area": 360,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2350000,
    "condo": 0,
    "iptu": 11750,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15321,
    "lng": -34.83237,
    "thesis": "Portal · 360 m² em Jd. Cidade Universitária, pedido R$ 6.528/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-43937733",
    "title": "Casa Maravilhosa alto padrão em Condomínio fechado nos Bancários",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 190,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2290000,
    "condo": 0,
    "iptu": 11450,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.14984,
    "lng": -34.85228,
    "thesis": "Portal · 190 m² em Jd. Cidade Universitária, pedido R$ 12.053/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-26481515",
    "title": "Casa em Jardim Cidade Universitária - Bancários, João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Professora Carmen Moreira Coutinho, 68",
    "area": 164,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1585612,
    "lng": -34.842005,
    "thesis": "Portal · 164 m² em Jd. Cidade Universitária, pedido R$ 4.573/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-20087745",
    "title": "Casa em Jardim Cidade Universitária- Bancários, João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Administrador José Silva Perruci, 230",
    "area": 202,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 950000,
    "condo": 0,
    "iptu": 4750,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15565,
    "lng": -34.83193,
    "thesis": "Portal · 202 m² em Jd. Cidade Universitária, pedido R$ 4.703/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-39503776",
    "title": "Casa Duplex em Jardim Cidade Universitária - Bancários, João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Psicóloga Emilene Ribeiro Aranha Dellosbel, 60",
    "area": 365,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 830000,
    "condo": 0,
    "iptu": 4150,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15304,
    "lng": -34.83943,
    "thesis": "Portal · 365 m² em Jd. Cidade Universitária, pedido R$ 2.274/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-41139230",
    "title": "Casa em Jardim Cidade Universitária - Bancários, João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Manoel Belarmino De Macedo, 50",
    "area": 99,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 890000,
    "condo": 0,
    "iptu": 4450,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15502,
    "lng": -34.8425,
    "thesis": "Portal · 99 m² em Jd. Cidade Universitária, pedido R$ 8.990/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-26481514",
    "title": "Casa em Jardim Cidade Universitária - Bancários, João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Bacharel Wilson Flávio Moreira Coutinho, 365",
    "area": 283,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15818,
    "lng": -34.83512,
    "thesis": "Portal · 283 m² em Jd. Cidade Universitária, pedido R$ 3.180/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-38817709",
    "title": "Casa com 3 dormitórios à venda, 99 m² por R$ 890.000,00 - Jardim Cidade Universitária - Jo",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 99,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 890000,
    "condo": 0,
    "iptu": 4450,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15128,
    "lng": -34.84064,
    "thesis": "Portal · 99 m² em Jd. Cidade Universitária, pedido R$ 8.990/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-14087452",
    "title": "Casa com 6 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 370,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 850000,
    "condo": 0,
    "iptu": 4250,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15514,
    "lng": -34.83858,
    "thesis": "Portal · 370 m² em Jd. Cidade Universitária, pedido R$ 2.297/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-20191781",
    "title": "Casa com 4 dormitórios à venda, 300 m² por R$ 700.000,00 - Jardim Cidade Universitária - J",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 300,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 700000,
    "condo": 0,
    "iptu": 3500,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15514,
    "lng": -34.83858,
    "thesis": "Portal · 300 m² em Jd. Cidade Universitária, pedido R$ 2.333/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-43238338",
    "title": "Casa com 5 suítes | em joão pessoa | jb cidade universitária r$ 1.395.000",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 326,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1395000,
    "condo": 0,
    "iptu": 6975,
    "seaMeters": 4500,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.150440000000001,
    "lng": -34.85048,
    "thesis": "Portal · 326 m² em Jd. Cidade Universitária, pedido R$ 4.279/m² contra 5.856 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-45477795",
    "title": "Casa com 2 quartos à venda na Rua Elias Justino da Cunha, 161, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Elias Justino Da Cunha, 161",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 240000,
    "condo": 0,
    "iptu": 1200,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.20184,
    "lng": -34.87979,
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.000/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-40194983",
    "title": "Casa com 2 quartos à venda na Rua Luiza Soares Leite, 80, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Luiza Soares Leite, 80",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 210000,
    "condo": 0,
    "iptu": 1050,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.20599,
    "lng": -34.87714,
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 3.750/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-30646825",
    "title": "Casa padrão/ casa com três quartos/ casa com duas suítes / casa no gramane/ casa em joão/ ",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Adriano Tozzi Carvalho, ",
    "area": 100,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 200000,
    "condo": 0,
    "iptu": 1000,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.20336,
    "lng": -34.8634,
    "thesis": "Portal · 100 m² em Gramame, pedido R$ 2.000/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-41139232",
    "title": "Casa com 2 quartos à venda na Rua Geraldo Alves Gomides, 162, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Geraldo Alves Gomides, 162",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 244000,
    "condo": 0,
    "iptu": 1220,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.21552,
    "lng": -34.85195,
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.436/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-30647933",
    "title": "Casa padrão/ casa no valentina figueiredo/ casa em joao pessoa/ casa com dois quartos/ cas",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Alcides Ribeiro Da Silva, 168",
    "area": 160,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 195000,
    "condo": 0,
    "iptu": 975,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.2144097,
    "lng": -34.8458256,
    "thesis": "Portal · 160 m² em Gramame, pedido R$ 1.219/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-31775959",
    "title": "Colinas do Sul - CASA PADRAO/ CASA NO COLINAS DO SUL/ CASA EM GRAMAME/ CASA EM JOAO PESSOA",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Rosa Ângela Marta Cagliani, ",
    "area": 68,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 220000,
    "condo": 0,
    "iptu": 1100,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.2077,
    "lng": -34.8712,
    "thesis": "Portal · 68 m² em Gramame, pedido R$ 3.235/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-31775950",
    "title": "Colinas do Sul - CASA PADRAO/ CASA NO COLINAS DO SUL/ CASA EM GRAMAME/ CASA EM JOAO PESSOA",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Rosa Ângela Marta Cagliani, ",
    "area": 68,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 220000,
    "condo": 0,
    "iptu": 1100,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.2077,
    "lng": -34.8712,
    "thesis": "Portal · 68 m² em Gramame, pedido R$ 3.235/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-30646772",
    "title": "Casa padrão/ casa em gramame/ casa rua dos oceanos/ casa beira mar/ casa em joao pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Dos Oceanos, ",
    "area": 49,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 220000,
    "condo": 0,
    "iptu": 1100,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.19664,
    "lng": -34.88159,
    "thesis": "Portal · 49 m² em Gramame, pedido R$ 4.490/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-39693411",
    "title": "Casa com 2 dormitórios à venda, 84 m² por R$ 259.000,00 - Gramame - João Pessoa/PB",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 84,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 259000,
    "condo": 0,
    "iptu": 1295,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 84 m² em Gramame, pedido R$ 3.083/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-17152190",
    "title": "Casa com 3 dormitórios à venda, 76 m² por R$ 270.000 - Gramame - João Pessoa/PB",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 270000,
    "condo": 0,
    "iptu": 1350,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 76 m² em Gramame, pedido R$ 3.553/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-27644304",
    "title": "Casa com 2 dormitórios à venda por R$ 230.000 - Gramame - João Pessoa/PB",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 230000,
    "condo": 0,
    "iptu": 1150,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 58 m² em Gramame, pedido R$ 3.966/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-43495997",
    "title": "Casa com 2 dormitórios à venda, 56 m² por R$ 230.000,00 - Gramame - João Pessoa/PB",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 230000,
    "condo": 0,
    "iptu": 1150,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 4.107/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-33996388",
    "title": "Casa com 3 dormitórios à venda por R$ 265.000 - Gramame - João Pessoa/PB",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 60,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 265000,
    "condo": 0,
    "iptu": 1325,
    "seaMeters": 8200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.417/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-34267347",
    "title": "Casa com 3 quartos à venda no Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 109,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 720000,
    "condo": 0,
    "iptu": 3600,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.1707600000000005,
    "lng": -34.84856,
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.606/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-41542463",
    "title": "Apartamento nascente sul em Mangabeira com 2 quartos e varanda",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Nossa Senhora Do Monte Carmelo, 30",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 184990,
    "condo": 0,
    "iptu": 925,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17052,
    "lng": -34.84465,
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 3.558/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-39138281",
    "title": "Casa com 2 quartos à venda na Rua João Sinésio da Silva, 255, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua João Sinésio Da Silva, 255",
    "area": 220,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 300000,
    "condo": 0,
    "iptu": 1500,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17678,
    "lng": -34.83448,
    "thesis": "Portal · 220 m² em Mangabeira, pedido R$ 1.364/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-43007829",
    "title": "Casa com 4 quartos à venda no Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 270,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1692,
    "lng": -34.86092,
    "thesis": "Portal · 270 m² em Mangabeira, pedido R$ 2.407/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-30647620",
    "title": "Casa padrao/ casa em mangabeira/ casa com 4 quartos/ casa beira mar/casa em joao pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Giovanni Marinho De Melo, ",
    "area": 85,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.17366,
    "lng": -34.84189,
    "thesis": "Portal · 85 m² em Mangabeira, pedido R$ 7.647/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-40692215",
    "title": "Casa com 2 quartos à venda na Avenida Jatobá, 55, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Avenida Jatobá, 55",
    "area": 120,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 105000,
    "condo": 0,
    "iptu": 800,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.18091,
    "lng": -34.83661,
    "thesis": "Portal · 120 m² em Mangabeira, pedido R$ 875/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46440851",
    "title": "Casa com 3 quartos à venda na Rua Maestro Joaquim Pereira, 212, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Maestro Joaquim Pereira, 212",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16916,
    "lng": -34.83305,
    "thesis": "Portal · 200 m² em Mangabeira, pedido R$ 1.750/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-43010601",
    "title": "Casa com 3 quartos à venda na Rua Francisco de Assis Pinto Ramalho, 1, Mangabeira, João Pe",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Francisco De Assis Pinto Ramalho, 1",
    "area": 130,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16979,
    "lng": -34.82851,
    "thesis": "Portal · 130 m² em Mangabeira, pedido R$ 1.308/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45886596",
    "title": "Casa Duplex com 3 dormitórios à venda, 98 m² por R$ 480.000 - Mangabeira - João Pessoa/PB",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 98,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 480000,
    "condo": 0,
    "iptu": 2400,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.18107,
    "lng": -34.83595,
    "thesis": "Portal · 98 m² em Mangabeira, pedido R$ 4.898/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-39527882",
    "title": "Casa com 3 dormitórios à venda, 130 m² por R$ 280.000,00 - Mangabeira - João Pessoa/PB",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 130,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 280000,
    "condo": 0,
    "iptu": 1400,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.18107,
    "lng": -34.83595,
    "thesis": "Portal · 130 m² em Mangabeira, pedido R$ 2.154/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-9360787",
    "title": "Casa com 3 dormitórios à venda, 200 m² por R$ 350.000,00 - Mangabeira - João Pessoa/PB",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.18107,
    "lng": -34.83595,
    "thesis": "Portal · 200 m² em Mangabeira, pedido R$ 1.750/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-33018387",
    "title": "Casa com 3 quartos à venda na Rua João Quirino dos Santos, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua João Quirino Dos Santos, ",
    "area": 58,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.1749600000000004,
    "lng": -34.86344,
    "thesis": "Portal · 58 m² em Mangabeira, pedido R$ 6.034/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-44891733",
    "title": "Excelente Casa em Mangabeira 2 com 3 quartos - Parte na Laje - Prox a Caixa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Josefa Taveira, ",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 310000,
    "condo": 0,
    "iptu": 1550,
    "seaMeters": 7000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17011,
    "lng": -34.83873,
    "thesis": "Portal · 150 m² em Mangabeira, pedido R$ 2.067/m² contra 4.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-31732165",
    "title": "Casa com 6 quartos à venda na Avenida Cruz das Armas, 9, Cruz das Armas, João Pessoa",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Avenida Cruz Das Armas, 9",
    "area": 290,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 570000,
    "condo": 0,
    "iptu": 2850,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.13832,
    "lng": -34.882239999999996,
    "thesis": "Portal · 290 m² em Cruz das Armas, pedido R$ 1.966/m² contra 4.100 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43390597",
    "title": "Casa com 2 quartos em Cruz das Armas - aceita financiamento entrada a partir 58 mil",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Cruz das Armas, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 290000,
    "condo": 0,
    "iptu": 1450,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.13688,
    "lng": -34.8832,
    "thesis": "Portal · 56 m² em Cruz das Armas, pedido R$ 5.179/m² contra 4.100 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-31639931",
    "title": "Casa padrao/ casa em cruz das armas/ casa com 3 quartos/ casa em joao pessoa",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Vila Risalva, 701",
    "area": 128,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 320000,
    "condo": 0,
    "iptu": 1600,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1389519,
    "lng": -34.8883,
    "thesis": "Portal · 128 m² em Cruz das Armas, pedido R$ 2.500/m² contra 4.100 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-19229834",
    "title": "Casa com 3 dormitórios à venda por R$ 250.000,00 - Cruz das Armas - João Pessoa/PB",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Cruz das Armas, João Pessoa",
    "area": 140,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 250000,
    "condo": 0,
    "iptu": 1250,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14469,
    "lng": -34.88383,
    "thesis": "Portal · 140 m² em Cruz das Armas, pedido R$ 1.786/m² contra 4.100 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43208700",
    "title": "Oportunidade casa duplex alto padrão cruz das armas ,joão pessoa pb / casa duplex a venda ",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Rua Coronel Estevão Dávila Lins, ",
    "area": 190,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14019,
    "lng": -34.88405,
    "thesis": "Portal · 190 m² em Cruz das Armas, pedido R$ 3.421/m² contra 4.100 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-39299285",
    "title": "Casa com 2 quartos à venda na Rua dos Milagres, 224, Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Dos Milagres, 224",
    "area": 160,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 310000,
    "condo": 0,
    "iptu": 1550,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.15124,
    "lng": -34.88418,
    "thesis": "Portal · 160 m² em Cristo Redentor, pedido R$ 1.938/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-21625720",
    "title": "Casa com 3 quartos à venda na Rua José Francisco da Silva, 281, Cristo Redentor, João Pess",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, 281",
    "area": 125,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 370000,
    "condo": 0,
    "iptu": 1850,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14875,
    "lng": -34.8801,
    "thesis": "Portal · 125 m² em Cristo Redentor, pedido R$ 2.960/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-41992972",
    "title": "Casa com 3 quartos à venda na Rua dos Milagres, 44, Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Dos Milagres, 44",
    "area": 75,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 380000,
    "condo": 0,
    "iptu": 1900,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15271,
    "lng": -34.88285,
    "thesis": "Portal · 75 m² em Cristo Redentor, pedido R$ 5.067/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-30647818",
    "title": "Casa padrao/ casa no cristo redentor/ casa com 3 quartos/ casa beira mar/ casa em joao pes",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, ",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 600000,
    "condo": 0,
    "iptu": 3000,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15136,
    "lng": -34.87757,
    "thesis": "Portal · 105 m² em Cristo Redentor, pedido R$ 5.714/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46391865",
    "title": "Casa com 5 quartos à venda na Rua José Francisco da Silva, Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, ",
    "area": 200,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 990000,
    "condo": 0,
    "iptu": 4950,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.15198,
    "lng": -34.87694,
    "thesis": "Portal · 200 m² em Cristo Redentor, pedido R$ 4.950/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45528221",
    "title": "Casa com 3 quartos à venda na Rua José Gomes da Silveira, 900, Cristo Redentor, João Pesso",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua José Gomes Da Silveira, 900",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15194,
    "lng": -34.8761,
    "thesis": "Portal · 120 m² em Cristo Redentor, pedido R$ 3.750/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-43322685",
    "title": "Casa com 5 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 150,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 398000,
    "condo": 0,
    "iptu": 1990,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16516,
    "lng": -34.87556,
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 2.653/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-32054950",
    "title": "Casa padrao/ casa em cuiá/ casa beira mar/ apartamento em joao pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Rita Carneiro Diniz, ",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 260000,
    "condo": 0,
    "iptu": 1300,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1847,
    "lng": -34.86882,
    "thesis": "Portal · 59 m² em Ernesto Geisel, pedido R$ 4.407/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45477814",
    "title": "Casa com 3 quartos à venda na Rua Irmã Maria Evangelie, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Irmã Maria Evangelie, ",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 630000,
    "condo": 0,
    "iptu": 3150,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.178,
    "lng": -34.87275,
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 4.200/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-43490056",
    "title": "Casa com 3 quartos à venda no Ernesto Geisel, João Pessoa , 300 m2 por R$ 680.000",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 300,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 680000,
    "condo": 0,
    "iptu": 3400,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16348,
    "lng": -34.8716,
    "thesis": "Portal · 300 m² em Ernesto Geisel, pedido R$ 2.267/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-42944003",
    "title": "Oportunidade casa mobiliada ernesto geisel, joão pessoa / casa a venda ernesto geisel, joã",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Severina Vicente Pereira, ",
    "area": 160,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 398000,
    "condo": 0,
    "iptu": 1990,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.18355,
    "lng": -34.87177,
    "thesis": "Portal · 160 m² em Ernesto Geisel, pedido R$ 2.488/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-46465552",
    "title": "Casa aconchegante com piscina à venda no Geisel codigo: 367133",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 135,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 390000,
    "condo": 0,
    "iptu": 1950,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1666,
    "lng": -34.8716,
    "thesis": "Portal · 135 m² em Ernesto Geisel, pedido R$ 2.889/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-30646956",
    "title": "Casa alto padrao/ casa no geisel/ casa com 4 quartos/ casa com 3 suítes/ casa em joao pess",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Professor Josué Da Silveira, ",
    "area": 380,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17467,
    "lng": -34.87034,
    "thesis": "Portal · 380 m² em Ernesto Geisel, pedido R$ 2.632/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45753686",
    "title": "Casa no Geisel pronta para morar com 2 quartos já avaliada pela caixa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 265000,
    "condo": 0,
    "iptu": 1325,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.16576,
    "lng": -34.865719999999996,
    "thesis": "Portal · 56 m² em Ernesto Geisel, pedido R$ 4.732/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45523041",
    "title": "Casa com 2 quartos à venda na Projetada, 345, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Projetada, 345",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 300000,
    "condo": 0,
    "iptu": 1500,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 60 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-6094844",
    "title": "Casa à venda por R$ 400.000,00 - Ernesto Geisel - João Pessoa/PB",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 400000,
    "condo": 0,
    "iptu": 2000,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 200 m² em Ernesto Geisel, pedido R$ 2.000/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-42370034",
    "title": "Casa com 2 quartos à venda na Rua Francisca Muniz de Brito, 100, Ernesto Geisel, João Pess",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Francisca Muniz De Brito, 100",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 285000,
    "condo": 0,
    "iptu": 1425,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.18558,
    "lng": -34.87085,
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43392311",
    "title": "Casa com 2 dormitórios à venda por R$ 290.000,00 - Ernesto Geisel - João Pessoa/PB",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 80,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 290000,
    "condo": 0,
    "iptu": 1450,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 80 m² em Ernesto Geisel, pedido R$ 3.625/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-15540448",
    "title": "Casa com 3 dormitórios à venda por R$ 470.000 - Ernesto Geisel - João Pessoa/PB",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 470000,
    "condo": 0,
    "iptu": 2350,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 200 m² em Ernesto Geisel, pedido R$ 2.350/m² contra 4.700 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-30647891",
    "title": "Casa em castelo branco/ casa com 5 quartos/ casa com 3 garagens/ casa espaçosa/ casa em jo",
    "type": "casa",
    "bairroId": "castelo-branco",
    "street": "Avenida Comandante Matos Cardoso, ",
    "area": 200,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 440000,
    "condo": 0,
    "iptu": 2200,
    "seaMeters": 4800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.13069,
    "lng": -34.84128,
    "thesis": "Portal · 200 m² em Castelo Branco, pedido R$ 2.200/m² contra 5.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-40555755",
    "title": "Casa para Venda em João Pessoa, Altiplano Cabo Branco, 4 dormitórios, 3 suítes, 3 banheiro",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Sebastião Queiroz De Carvalho, 1000",
    "area": 220,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1500000,
    "condo": 0,
    "iptu": 7500,
    "seaMeters": 900,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1371,
    "lng": -34.83381,
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-33301094",
    "title": "Casa com 3 quartos à venda no Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.14572,
    "lng": -34.88024,
    "thesis": "Portal · 80 m² em Cristo Redentor, pedido R$ 6.875/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-40826457",
    "title": "Casa com 4 quartos à venda no Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 247,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 410000,
    "condo": 0,
    "iptu": 2050,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14992,
    "lng": -34.87712,
    "thesis": "Portal · 247 m² em Cristo Redentor, pedido R$ 1.660/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-42369762",
    "title": "Casa com 3 quartos à venda na : Undefined Index: Street In On Line, : Undefin, Cristo Rede",
    "type": "casa",
    "bairroId": "cristo",
    "street": ":  Undefined Index: Street In  On Line, :  Undefin",
    "area": 125,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 589990,
    "condo": 0,
    "iptu": 2950,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.16078,
    "lng": -34.87863,
    "thesis": "Portal · 125 m² em Cristo Redentor, pedido R$ 4.720/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-31808025",
    "title": "Casa com 4 quartos à venda na Rua Pedro Ivo de Paiva, 111, Cristo Redentor, João Pessoa, 1",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Pedro Ivo De Paiva, 111",
    "area": 150,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 510000,
    "condo": 0,
    "iptu": 2550,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16542,
    "lng": -34.87173,
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-41102483",
    "title": "Casa com 3 quartos à venda na Rua Presidente Ranieri Mazilli, 1731, Cristo Redentor, João ",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Presidente Ranieri Mazilli, 1731",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.16022,
    "lng": -34.87132,
    "thesis": "Portal · 80 m² em Cristo Redentor, pedido R$ 6.875/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-21625717",
    "title": "Casa com 5 quartos à venda na Rua Presidente Ranieri Mazilli, 822, Cristo Redentor, João P",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Presidente Ranieri Mazilli, 822",
    "area": 387,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15914,
    "lng": -34.87228,
    "thesis": "Portal · 387 m² em Cristo Redentor, pedido R$ 904/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-21625721",
    "title": "Casa com 3 quartos à venda na Rua Josery Serrano de Assis, 183, Cristo Redentor, João Pess",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Josery Serrano De Assis, 183",
    "area": 360,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16096,
    "lng": -34.86719,
    "thesis": "Portal · 360 m² em Cristo Redentor, pedido R$ 1.250/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-42485869",
    "title": "Casa com 3 quartos à venda na Rua dos Milagres, 2072, Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Dos Milagres, 2072",
    "area": 352,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16425,
    "lng": -34.87135,
    "thesis": "Portal · 352 m² em Cristo Redentor, pedido R$ 1.278/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-36976032",
    "title": "Casa com 5 quartos à venda na Rua Anisberto Lins de Albuquerque, Oitizeiro, João Pessoa",
    "type": "casa",
    "bairroId": "oitizeiro",
    "street": "Rua Anisberto Lins De Albuquerque, ",
    "area": 300,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 580000,
    "condo": 0,
    "iptu": 2900,
    "seaMeters": 7800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.15106,
    "lng": -34.90737,
    "thesis": "Portal · 300 m² em Oitizeiro, pedido R$ 1.933/m² contra 3.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-40755799",
    "title": "Casa com 3 dormitórios à venda, 300 m² por R$ 590.000,00 - Cristo Redentor - João Pessoa/P",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 300,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 590000,
    "condo": 0,
    "iptu": 2950,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.16078,
    "lng": -34.87863,
    "thesis": "Portal · 300 m² em Cristo Redentor, pedido R$ 1.967/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-38814344",
    "title": "Casa com 2 dormitórios à venda, 58 m² por R$ 240.000,00 - Cristo Redentor - João Pessoa/PB",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 240000,
    "condo": 0,
    "iptu": 1200,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.16078,
    "lng": -34.87863,
    "thesis": "Portal · 58 m² em Cristo Redentor, pedido R$ 4.138/m² contra 4.500 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-46607127",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.19732,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46607134",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.193720000000001,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46607129",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.197080000000001,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46607131",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1940800000000005,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-42604937",
    "title": "Casa para aluguel, venda, Funcionários, João Pessoa - 25795",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Rua Alziro Zarur, ",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 620000,
    "condo": 0,
    "iptu": 3100,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.17924,
    "lng": -34.88235,
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 5.167/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-46607133",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.193840000000001,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-46607130",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1942,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-13646659",
    "title": "Casa com 4 dormitórios à venda, 120 m² por R$ 220.000,00 - Funcionários - João Pessoa/PB",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 120,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 220000,
    "condo": 0,
    "iptu": 1100,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 1.833/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-16345231",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 279,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 400000,
    "condo": 0,
    "iptu": 2000,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 279 m² em Funcionários, pedido R$ 1.434/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-46607128",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1972000000000005,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-39247533",
    "title": "Casa com 3 dormitórios à venda por R$ 420.000,00 - Funcionários II - João Pessoa/PB",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 110,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 420000,
    "condo": 0,
    "iptu": 2100,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 110 m² em Funcionários, pedido R$ 3.818/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-23640691",
    "title": "Casa com 3 dormitórios à venda, 180 m² por R$ 250.000,00 - Funcionários II - João Pessoa/P",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 180,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 250000,
    "condo": 0,
    "iptu": 1250,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17919,
    "lng": -34.88619,
    "thesis": "Portal · 180 m² em Funcionários, pedido R$ 1.389/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46607132",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.193960000000001,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46607135",
    "title": "Casa com 2 quartos à venda no Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 170000,
    "condo": 0,
    "iptu": 850,
    "seaMeters": 7600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.203200000000001,
    "lng": -34.86372,
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-24646665",
    "title": "Casa com 3 dormitórios à venda, 237 m² por R$ 1.200.000,00 - Miramar - João Pessoa/PB",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 237,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1200000,
    "condo": 0,
    "iptu": 6000,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11992,
    "lng": -34.85936,
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-46591873",
    "title": "Casa com 2 quartos à venda na Rua Hilda Coutinho Lucena, Miramar, João Pessoa",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Rua Hilda Coutinho Lucena, ",
    "area": 170,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 980000,
    "condo": 0,
    "iptu": 4900,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.12137,
    "lng": -34.83607,
    "thesis": "Portal · 170 m² em Miramar, pedido R$ 5.765/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-35838942",
    "title": "Casa com 5 quartos à venda na Rua Doutor Hermance Paiva, 300, Miramar, João Pessoa",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Rua Doutor Hermance Paiva, 300",
    "area": 392,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1290000,
    "condo": 0,
    "iptu": 6450,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12336,
    "lng": -34.83691,
    "thesis": "Portal · 392 m² em Miramar, pedido R$ 3.291/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-25604079",
    "title": "Casa com 6 dormitórios à venda, 400 m² por R$ 2.990.000,00 - Miramar - João Pessoa/PB",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 400,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 2990000,
    "condo": 0,
    "iptu": 14950,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.12064,
    "lng": -34.86596,
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 7.475/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-41723710",
    "title": "Casa à Venda 237 metros 04 quartos R$: 1.200.000 Miramar- João Pessoa-PB",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Rua Professora Emerentina Coelho, ",
    "area": 237,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1200000,
    "condo": 0,
    "iptu": 6000,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12226,
    "lng": -34.83993,
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-42226221",
    "title": "Casa com 3 quartos à venda na Rua João de Pessoa, Miramar, João Pessoa",
    "type": "casa",
    "bairroId": "miramar",
    "street": "Rua João De Pessoa, ",
    "area": 147,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 1800,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.12093,
    "lng": -34.83824,
    "thesis": "Portal · 147 m² em Miramar, pedido R$ 6.122/m² contra 7.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-45352423",
    "title": "Casa com 3 quartos no Treze de Maio - Aceita Financiamento Bancário",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Rua Deputado Tertuliano De Brito, ",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 590000,
    "condo": 0,
    "iptu": 2950,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11576,
    "lng": -34.86348,
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-41702302",
    "title": "Casa com 3 quartos à venda na Avenida Mandacaru, --, Treze de Maio, João Pessoa",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Avenida Mandacaru, --",
    "area": 330,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 690000,
    "condo": 0,
    "iptu": 3450,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10556,
    "lng": -34.86664,
    "thesis": "Portal · 330 m² em Treze de Maio, pedido R$ 2.091/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-39145079",
    "title": "Casa com 2 quartos à venda na Rua Eugênio Lucena Neiva, Treze de Maio, João Pessoa",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Rua Eugênio Lucena Neiva, ",
    "area": 80,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 300000,
    "condo": 0,
    "iptu": 1500,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.11807,
    "lng": -34.86624,
    "thesis": "Portal · 80 m² em Treze de Maio, pedido R$ 3.750/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-44304988",
    "title": "Casa com 3 quartos à venda na Rua Francisco Lima de Araújo, 156, Treze de Maio, João Pesso",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Rua Francisco Lima De Araújo, 156",
    "area": 185,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 649000,
    "condo": 0,
    "iptu": 3245,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11,
    "lng": -34.86215,
    "thesis": "Portal · 185 m² em Treze de Maio, pedido R$ 3.508/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45862912",
    "title": "Casa para Venda em João Pessoa, Treze de Maio, 3 dormitórios, 1 suíte, 2 banheiros, 3 vaga",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Rua José Mesquita, 100",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 590000,
    "condo": 0,
    "iptu": 2950,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.11201,
    "lng": -34.86619,
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45790027",
    "title": "Casa com 3 quartos à venda na Rua Vicente Lucas Borges, 100, Treze de Maio, João Pessoa",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Rua Vicente Lucas Borges, 100",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 525000,
    "condo": 0,
    "iptu": 2625,
    "seaMeters": 5000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.10893,
    "lng": -34.86786,
    "thesis": "Portal · 120 m² em Treze de Maio, pedido R$ 4.375/m² contra 5.200 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-8221558",
    "title": "Casa com 2 dormitórios à venda, 200 m² por R$ 400.000 - Alto do Mateus - João Pessoa/PB",
    "type": "casa",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 200,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 400000,
    "condo": 0,
    "iptu": 2000,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 200 m² em Alto do Mateus, pedido R$ 2.000/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-9329976",
    "title": "Casa com 3 dormitórios à venda, 80 m² por R$ 85.000,00 - Alto do Mateus - João Pessoa/PB",
    "type": "casa",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 85000,
    "condo": 0,
    "iptu": 800,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 80 m² em Alto do Mateus, pedido R$ 1.063/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-18813326",
    "title": "Casa com 3 dormitórios à venda por R$ 250.000,00 - Alto do Mateus - João Pessoa/PB",
    "type": "casa",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 378,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 250000,
    "condo": 0,
    "iptu": 1250,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.14016,
    "lng": -34.91128,
    "thesis": "Portal · 378 m² em Alto do Mateus, pedido R$ 661/m² contra 3.800 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-17747032",
    "title": "Casa com 2 dormitórios à venda, 120 m² por R$ 180.000 - Indústrias - João Pessoa/PB",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 120,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 180000,
    "condo": 0,
    "iptu": 900,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 120 m² em Indústrias, pedido R$ 1.500/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-36599414",
    "title": "Casa com 3 quartos à venda na Indústrias, João Pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 60,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 193000,
    "condo": 0,
    "iptu": 965,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.1848399999999994,
    "lng": -34.87792,
    "thesis": "Portal · 60 m² em Indústrias, pedido R$ 3.217/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-44886935",
    "title": "Casa com 2 dormitórios à venda por R$ 195.000 - Bairro das Indústrias - João Pessoa/Paraíb",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 195000,
    "condo": 0,
    "iptu": 975,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.545/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-44686453",
    "title": "Casa com 2 quartos à venda na Rua Antonia Davina de Carvalho, 150, Indústrias, João Pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Rua Antonia Davina De Carvalho, 150",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 195000,
    "condo": 0,
    "iptu": 975,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.19072,
    "lng": -34.87132,
    "thesis": "Portal · 58 m² em Indústrias, pedido R$ 3.362/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46264029",
    "title": "Casa com 2 dormitórios à venda por R$ 160.000 - Bairro das Indústrias - João Pessoa/PB",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 100,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 160000,
    "condo": 0,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 100 m² em Indústrias, pedido R$ 1.600/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-36316760",
    "title": "Casa para Venda em João Pessoa / PB no bairro bairro das industrias",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Rua Motorista Iractan Alves Dos Santos, ",
    "area": 100,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 185000,
    "condo": 0,
    "iptu": 925,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.1746,
    "lng": -34.91232,
    "thesis": "Portal · 100 m² em Indústrias, pedido R$ 1.850/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-26703665",
    "title": "Casa com 2 dormitórios à venda por R$ 210.000 - Indústrias - João Pessoa/PB",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 305,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 210000,
    "condo": 0,
    "iptu": 1050,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "airbnb",
      "rua"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 305 m² em Indústrias, pedido R$ 689/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45181384",
    "title": "Casa com 3 dormitórios à venda por R$ 385.000 - Bairro das Indústrias - João Pessoa/PB",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 364,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 385000,
    "condo": 0,
    "iptu": 1925,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 364 m² em Indústrias, pedido R$ 1.058/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-30647108",
    "title": "Casa padrao/ casa naa indústrias/ casa beira mar/ casa em joao pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Avenida Cidade De Manaíra, ",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 200000,
    "condo": 0,
    "iptu": 1000,
    "seaMeters": 7400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "airbnb",
      "rua"
    ],
    "lat": -7.1920399999999995,
    "lng": -34.86496,
    "thesis": "Portal · 57 m² em Indústrias, pedido R$ 3.509/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "cx-2938493",
    "title": "Apartamento Caixa 2938493",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2938493 RUA MILTON DE OLIVEIRA MELO,",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 154000,
    "condo": 540,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.2118199999999995,
    "lng": -34.84492,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.567/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 10
  },
  {
    "id": "cx-2990375",
    "title": "Apartamento Caixa 2990375",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2990375 RUA ASSIS FERREIRA DE LIMA,N",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 140000,
    "condo": 540,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.21218,
    "lng": -34.851279999999996,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.333/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 13
  },
  {
    "id": "cx-2981493",
    "title": "Apartamento Caixa 2981493",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2981493 RUA COMERCIANTE ALVARO ANTER",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 144000,
    "condo": 540,
    "iptu": 800,
    "seaMeters": 8200,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.2158999999999995,
    "lng": -34.85212,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.400/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 10
  },
  {
    "id": "cx-2990367",
    "title": "Apartamento Caixa 2990367",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2990367 RUA MANOEL RODRIGUES DE LACE",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 188146,
    "condo": 540,
    "iptu": 941,
    "seaMeters": 8200,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "preco",
      "airbnb"
    ],
    "lat": -7.2158999999999995,
    "lng": -34.851279999999996,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 3.136/m² contra 3.900 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 5
  },
  {
    "id": "cx-2938490",
    "title": "Casa Caixa 2938490",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Casa em Leilão em João Pessoa / PB - 2938490 RUA ANTONIO LUIZ DO NASCIMENTO,N. 4",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 147045,
    "condo": 0,
    "iptu": 800,
    "seaMeters": 7400,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "preco",
      "rua"
    ],
    "lat": -7.18748,
    "lng": -34.87492,
    "thesis": "Leilão Caixa · 120 m² em Indústrias, pedido R$ 1.225/m² contra 3.600 do bairro. Colheita 14 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 7
  }
] as Listing[];
