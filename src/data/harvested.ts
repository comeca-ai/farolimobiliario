import type { Listing } from "./listings.ts";
import type { HarvestReport } from "@/lib/harvest";

export const HARVEST_REPORT: HarvestReport = {
  "at": "2026-10-12T12:08:56.544Z",
  "portalListed": 15597,
  "raw": 777,
  "kept": 630,
  "dropped": 147,
  "bySource": {
    "portal": 621,
    "leilao": 9
  },
  "byBairro": {
    "altiplano": 27,
    "bessa": 29,
    "estados": 27,
    "manaira": 28,
    "cabo-branco": 28,
    "brisamar": 24,
    "portal-do-sol": 32,
    "jcu": 28,
    "miramar": 21,
    "gramame": 32,
    "torre": 26,
    "oitizeiro": 6,
    "bancarios": 31,
    "tambau": 22,
    "jardim-oceania": 30,
    "aeroclube": 18,
    "mangabeira": 26,
    "cristo": 23,
    "expedicionarios": 23,
    "centro": 14,
    "cruz-das-armas": 13,
    "geisel": 27,
    "castelo-branco": 17,
    "funcionarios": 21,
    "treze-de-maio": 23,
    "alto-do-mateus": 13,
    "industrias": 21
  },
  "feedsOk": 65,
  "feedsFail": 9,
  "browserOk": 0,
  "browserFail": 9
} as HarvestReport;

export const HARVESTED_LISTINGS: Listing[] = [
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
    "thesis": "Portal · 54 m² em Altiplano, pedido R$ 7.870/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45256445",
    "title": "Apartamento 4 Quartos para Venda em João Pessoa, Bessa, 4 dormitórios, 2 suítes, 3 banheir",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Ambrosina Soares Dos Santos, 38",
    "area": 136,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1350000,
    "condo": 1224,
    "iptu": 6750,
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
    "lat": -7.06803,
    "lng": -34.83899,
    "thesis": "Portal · 136 m² em Bessa, pedido R$ 9.926/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-47423092",
    "title": "LINDO APARTAMENTO NOVO COM 255m2 3 SUÍTES A VENDA NO BAIRRO DOS ESTADOS",
    "type": "apto",
    "bairroId": "estados",
    "street": "Rua Bancário Francisco Mendes Sobreira, ",
    "area": 255,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2650000,
    "condo": 2295,
    "iptu": 13250,
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
    "lat": -7.10793,
    "lng": -34.84936,
    "thesis": "Portal · 255 m² em Estados, pedido R$ 10.392/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 148 m² em Manaíra, pedido R$ 8.716/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-44998657",
    "title": "Lindo Apartamento pronto para Morar próxima a Praia de Manaira",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Osvaldo Tavares De Melo, 556",
    "area": 47,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 359000,
    "condo": 423,
    "iptu": 1795,
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
    "lat": -7.10668,
    "lng": -34.82771,
    "thesis": "Portal · 47 m² em Manaíra, pedido R$ 7.638/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-35274275",
    "title": "Vicenzo Residencial — Sofisticação, conforto e uma vista privilegiada",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Rua Francisco Diomedes Cantalice, 792",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 609475,
    "condo": 432,
    "iptu": 3047,
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
    "lat": -7.1242,
    "lng": -34.82784,
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 12.697/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-44558539",
    "title": "O maior 2/4 do Brisamar: 86m² de puro conforto. Suíte Master de 20m² e Home Office privati",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Cassimiro De Abreu, 20",
    "area": 86,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 774,
    "iptu": 3750,
    "seaMeters": 1100,
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
    "lat": -7.116907,
    "lng": -34.839307,
    "thesis": "Portal · 86 m² em Brisamar, pedido R$ 8.721/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-29077313",
    "title": "Apartamento com 3 quartos à venda na Rua Napoleão Gomes Varela, 620, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Napoleão Gomes Varela, 620",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 785000,
    "condo": 765,
    "iptu": 3925,
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
    "lat": -7.071595,
    "lng": -34.84179,
    "thesis": "Portal · 85 m² em Bessa, pedido R$ 9.235/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46789218",
    "title": "Apartamento com 2 quartos à venda na Rua Conselheiro José Braz do Rego, s/n, Portal do Sol",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Conselheiro José Braz Do Rego, s/n",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 280000,
    "condo": 459,
    "iptu": 1400,
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
    "lat": -7.1582381382979,
    "lng": -34.820412819149,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 5.490/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-42058099",
    "title": "Apartamento com 3 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 71,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 455000,
    "condo": 639,
    "iptu": 2275,
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
    "lat": -7.14816,
    "lng": -34.84004,
    "thesis": "Portal · 71 m² em Jd. Cidade Universitária, pedido R$ 6.408/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45583078",
    "title": "Apartamento para aluguel, venda, Miramar, João Pessoa - 10213",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Mário Batista Júnior, ",
    "area": 92,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 570000,
    "condo": 828,
    "iptu": 2850,
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
    "lat": -7.12494,
    "lng": -34.83601,
    "thesis": "Portal · 92 m² em Miramar, pedido R$ 6.196/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-29873422",
    "title": "REF: CA006 - Casa Residencial à Venda, João Pessoa, Bancários, 5 quartos, com piscina",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 199,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1350000,
    "condo": 0,
    "iptu": 6750,
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
    "lat": -7.146240000000001,
    "lng": -34.846759999999996,
    "thesis": "Portal · 199 m² em Jd. Cidade Universitária, pedido R$ 6.784/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "lat": -7.107528,
    "lng": -34.83361,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 5.000/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-29770047",
    "title": "Casa com 5 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 360,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 2150000,
    "condo": 0,
    "iptu": 10750,
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
    "lat": -7.16272,
    "lng": -34.84768,
    "thesis": "Portal · 360 m² em Portal do Sol, pedido R$ 5.972/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-40337102",
    "title": "Casa com 4 quartos à venda na Rua General Francisco de Assis Araújo Bezerra, 47, Portal do",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua General Francisco De Assis Araújo Bezerra, 47",
    "area": 170,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1540000,
    "condo": 0,
    "iptu": 7700,
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
    "lat": -7.1453882,
    "lng": -34.8197887,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.059/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45256504",
    "title": "Casa para Venda em João Pessoa, Gramame, 2 dormitórios, 1 banheiro, 2 vagas",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Bernadete Xavier Batista., 154",
    "area": 67,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 155000,
    "condo": 0,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.18733,
    "lng": -34.88738,
    "thesis": "Portal · 67 m² em Gramame, pedido R$ 2.313/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45908901",
    "title": "Casa com 4 quartos à venda no Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 180,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
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
    "lat": -7.121079999999999,
    "lng": -34.861799999999995,
    "thesis": "Portal · 180 m² em Torre, pedido R$ 5.556/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-24709101",
    "title": "Casa com 1 quarto à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 90,
    "rooms": 1,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1100000,
    "condo": 0,
    "iptu": 5500,
    "seaMeters": 1600,
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
    "lat": -7.15456,
    "lng": -34.83712,
    "thesis": "Portal · 90 m² em Portal do Sol, pedido R$ 12.222/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "lat": -7.1510100666667,
    "lng": -34.907125533333,
    "thesis": "Portal · 300 m² em Oitizeiro, pedido R$ 1.933/m² contra 3.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45642337",
    "title": "Excelente apartamento pronto para morar com 3 quartos de uma suíte em Bancários",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Adalgisa Luna De Menezes, 731",
    "area": 68,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 600000,
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
    "lat": -7.144881,
    "lng": -34.834209,
    "thesis": "Portal · 68 m² em Bancários, pedido R$ 8.824/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-43196714",
    "title": "Flat com 1 quarto à venda na Avenida Infante Dom Henrique, 151, Tambaú, João Pessoa",
    "type": "flat",
    "bairroId": "tambau",
    "street": "Avenida Infante Dom Henrique, 151",
    "area": 20,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 480000,
    "condo": 180,
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
    "lat": -7.1127153,
    "lng": -34.8264635,
    "thesis": "Portal · 20 m² em Tambaú, pedido R$ 24.000/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43834366",
    "title": "Apartamento com 2 dormitórios à venda, 61 m² por R$ 695.000,00 - Jardim Oceania - João Pes",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 61,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 695000,
    "condo": 549,
    "iptu": 3475,
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
    "thesis": "Portal · 61 m² em Jardim Oceania, pedido R$ 11.393/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-47275753",
    "title": "Apartamento com 2 quartos à venda na Avenida Campos Sales, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Campos Sales, ",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 348000,
    "condo": 558,
    "iptu": 1740,
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
    "lat": -7.0749545,
    "lng": -34.8424892,
    "thesis": "Portal · 62 m² em Bessa, pedido R$ 5.613/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45256456",
    "title": "Apartamento para Venda em João Pessoa, Tambaú, 2 dormitórios, 1 suíte, 2 banheiros",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Nego, 101",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 680000,
    "condo": 423,
    "iptu": 3400,
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
    "lat": -7.1137271,
    "lng": -34.8266676,
    "thesis": "Portal · 47 m² em Tambaú, pedido R$ 14.468/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45172548",
    "title": "Apartamento Beira-Mar para Para venda Alto Padrão | Pé na Areia",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Avenida Governador Argemiro De Figueiredo, ",
    "area": 195,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 3000000,
    "condo": 1755,
    "iptu": 15000,
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
    "lat": -7.0836822732095,
    "lng": -34.832864846817,
    "thesis": "Portal · 195 m² em Jardim Oceania, pedido R$ 15.385/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46898020",
    "title": "Flat com 1 quarto à venda na Rua Coração de Jesus, 22, Tambaú, João Pessoa",
    "type": "flat",
    "bairroId": "tambau",
    "street": "Rua Coração De Jesus, 22",
    "area": 27,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 380000,
    "condo": 243,
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
    "lat": -7.1106207,
    "lng": -34.8246857,
    "thesis": "Portal · 27 m² em Tambaú, pedido R$ 14.074/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42543528",
    "title": "Apartamento com 2 quartos à venda na Rua Presidente Washington Luís, 345, Bessa, João Pess",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Presidente Washington Luís, 345",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 290000,
    "condo": 522,
    "iptu": 1450,
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
    "lat": -7.0632,
    "lng": -34.84424,
    "thesis": "Portal · 58 m² em Bessa, pedido R$ 5.000/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47369965",
    "title": "Apartamento com 3 quartos à venda na Rua Bacharel José de Oliveira Curchatuz, 691, Aeroclu",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Bacharel José De Oliveira Curchatuz, 691",
    "area": 136,
    "rooms": 3,
    "suites": 0,
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
    "lat": -7.08236,
    "lng": -34.84022,
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.397/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-27324723",
    "title": "Cobertura para Venda em João Pessoa, Manaíra, 4 dormitórios, 4 suítes, 7 banheiros, 3 vaga",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Avenida Ingá, 553",
    "area": 300,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1800000,
    "condo": 2700,
    "iptu": 9000,
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
    "lat": -7.107528,
    "lng": -34.83361,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 6.000/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-44862072",
    "title": "Botanic Cabo Branco | Apartamento com 3 Suítes, Nascente Sul e Alto Padrão",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Manoel Cavalcanti De Souza, ",
    "area": 95,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1434450,
    "condo": 855,
    "iptu": 7172,
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
    "lat": -7.12138,
    "lng": -34.8277,
    "thesis": "Portal · 95 m² em Cabo Branco, pedido R$ 15.099/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-42825136",
    "title": "Apartamento Com área externa em Mangabeira, João Pessoa/PB",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Doutor Francisco De Assis Veloso, 15",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 373000,
    "condo": 459,
    "iptu": 1865,
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
    "thesis": "Portal · 51 m² em Mangabeira, pedido R$ 7.314/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45303906",
    "title": "Cobertura com 2 quartos à venda na Avenida Cabo Branco, Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, ",
    "area": 123,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1456665,
    "condo": 1107,
    "iptu": 7283,
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
    "lat": -7.13883,
    "lng": -34.81762,
    "thesis": "Portal · 123 m² em Cabo Branco, pedido R$ 11.843/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46790968",
    "title": "Cobertura à venda no cristo redentor – pronta para morar 3 quartos",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 129,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 429900,
    "condo": 1161,
    "iptu": 2150,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14836,
    "lng": -34.88168,
    "thesis": "Portal · 129 m² em Cristo Redentor, pedido R$ 3.333/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46843022",
    "title": "Cobertura com 3 quartos à venda na Rua Doutor Damasquins Ramos Maciel, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Doutor Damasquins Ramos Maciel, ",
    "area": 210,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 3224000,
    "condo": 1890,
    "iptu": 16120,
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
    "lat": -7.06842,
    "lng": -34.84151,
    "thesis": "Portal · 210 m² em Bessa, pedido R$ 15.352/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-31224060",
    "title": "Cobertura com 2 dormitórios à venda, 74 m² por R$ 510.000,00 - Jardim Cidade Universitária",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 510000,
    "condo": 459,
    "iptu": 2550,
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
    "lat": -7.150440000000001,
    "lng": -34.84532,
    "thesis": "Portal · 51 m² em Jd. Cidade Universitária, pedido R$ 10.000/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-38524572",
    "title": "Cobertura para Venda em João Pessoa, Bessa, 3 dormitórios, 2 suítes, 4 banheiros, 1 vaga",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 118,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1200000,
    "condo": 1062,
    "iptu": 6000,
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
    "lat": -7.06614,
    "lng": -34.83452,
    "thesis": "Portal · 118 m² em Bessa, pedido R$ 10.169/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40447613",
    "title": "Cobertura à venda em João Pessoa, Cabo Branco, com 4 suítes, com 361.56 m²",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 361,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2200000,
    "condo": 3249,
    "iptu": 11000,
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
    "lat": -7.12351,
    "lng": -34.82614,
    "thesis": "Portal · 361 m² em Cabo Branco, pedido R$ 6.094/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46590427",
    "title": "Cobertura com 2 quartos à venda na Avenida Presidente Washington Luiz, 70, Bessa, João Pes",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente Washington Luiz, 70",
    "area": 125,
    "rooms": 2,
    "suites": 1,
    "parking": 0,
    "year": 2012,
    "ask": 890000,
    "condo": 1125,
    "iptu": 4450,
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
    "lat": -7.06428,
    "lng": -34.84919,
    "thesis": "Portal · 125 m² em Bessa, pedido R$ 7.120/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-41359946",
    "title": "Duplex com cobertura privativa a 200m da praia do Bessa codigo: 307480",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Segismundo Guedes Pereira Neto, ",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 702,
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
    "lat": -7.0683243,
    "lng": -34.8431006,
    "thesis": "Portal · 78 m² em Bessa, pedido R$ 8.333/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-3854490",
    "title": "Cobertura com área 129,22 m² para venda no Residencial Cristo Redentor III",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Dom Bosco, 593",
    "area": 129,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 387000,
    "condo": 1161,
    "iptu": 1935,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.152784,
    "lng": -34.878701,
    "thesis": "Portal · 129 m² em Cristo Redentor, pedido R$ 3.000/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 145 m² em Tambaú, pedido R$ 12.276/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 110 m² em Tambaú, pedido R$ 6.264/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 49 m² em Tambaú, pedido R$ 14.061/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "lat": -7.114756,
    "lng": -34.830177,
    "thesis": "Portal · 80 m² em Tambaú, pedido R$ 8.750/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 41 m² em Tambaú, pedido R$ 24.781/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 26 m² em Tambaú, pedido R$ 14.615/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1143787653631,
    "lng": -34.829975675978,
    "thesis": "Portal · 90 m² em Tambaú, pedido R$ 5.444/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-24994340",
    "title": "Apartamento PORTEIRA FECHADA no bairro de Tambaú - João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 73,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 657,
    "iptu": 2750,
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
    "lat": -7.112480000000001,
    "lng": -34.81892,
    "thesis": "Portal · 73 m² em Tambaú, pedido R$ 7.534/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 315 m² em Tambaú, pedido R$ 7.937/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 157 m² em Tambaú, pedido R$ 10.191/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-47209273",
    "title": "Apartamento com 3 quartos à venda no Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 198,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 830000,
    "condo": 1782,
    "iptu": 4150,
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
    "lat": -7.1126000000000005,
    "lng": -34.836079999999995,
    "thesis": "Portal · 198 m² em Tambaú, pedido R$ 4.192/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47209295",
    "title": "Apartamento com 3 quartos à venda no Tambaú, João Pessoa , 82 m2 por R$ 660.000",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 82,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 660000,
    "condo": 738,
    "iptu": 3300,
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
    "lat": -7.11404,
    "lng": -34.836079999999995,
    "thesis": "Portal · 82 m² em Tambaú, pedido R$ 8.049/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46734291",
    "title": "Apartamento com 2 quartos à venda na Avenida Nego, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Nego, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 959000,
    "condo": 450,
    "iptu": 4795,
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
    "lat": -7.11378,
    "lng": -34.82867,
    "thesis": "Portal · 50 m² em Tambaú, pedido R$ 19.180/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-47059250",
    "title": "Apartamento mobiliado 2 quartos para alugar em Tambaú- JOÃO PESSOA",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 64,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 830000,
    "condo": 576,
    "iptu": 4150,
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
    "lat": -7.118600000000001,
    "lng": -34.82924,
    "thesis": "Portal · 64 m² em Tambaú, pedido R$ 12.969/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "ask": 1200000,
    "condo": 1710,
    "iptu": 6000,
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
    "lat": -7.117775,
    "lng": -34.828152,
    "thesis": "Portal · 190 m² em Tambaú, pedido R$ 6.316/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46608633",
    "title": "Apartamento Alto Padrão Frente-Mar com 3 Suítes e Vista Definitiva no Cabo Branco",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, 1690",
    "area": 136,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 4000000,
    "condo": 1224,
    "iptu": 20000,
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
    "lat": -7.12423,
    "lng": -34.82401,
    "thesis": "Portal · 136 m² em Cabo Branco, pedido R$ 29.412/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-47209331",
    "title": "Apartamento a apenas 300 metros da orla da Praia do Cabo Branco!",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 113,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 850000,
    "condo": 1017,
    "iptu": 4250,
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
    "lat": -7.1189,
    "lng": -34.833800000000004,
    "thesis": "Portal · 113 m² em Cabo Branco, pedido R$ 7.522/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 83 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-30196679",
    "title": "Apartamento com 2 dormitórios à venda, 72 m² por R$ 849.163,50 - Cabo Branco - João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 72,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 849163,
    "condo": 648,
    "iptu": 4246,
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
    "lat": -7.12351,
    "lng": -34.82614,
    "thesis": "Portal · 72 m² em Cabo Branco, pedido R$ 11.794/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-35993612",
    "title": "Lindo imóvel porteira fechada, vista mar definitiva no melhor do cabo branco",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Rua Vereador Antônio Pessoa Da Rocha, 78",
    "area": 45,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 640000,
    "condo": 405,
    "iptu": 3200,
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
    "lat": -7.14221,
    "lng": -34.81545,
    "thesis": "Portal · 45 m² em Cabo Branco, pedido R$ 14.222/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 50 m² em Cabo Branco, pedido R$ 10.400/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-47086905",
    "title": "Apartamento com 2 quartos à venda na Rua Doutor Frutuoso Dantas, 298, Cabo Branco, João Pe",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Rua Doutor Frutuoso Dantas, 298",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 590000,
    "condo": 477,
    "iptu": 2950,
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
    "lat": -7.12604,
    "lng": -34.8261,
    "thesis": "Portal · 53 m² em Cabo Branco, pedido R$ 11.132/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 108 m² em Cabo Branco, pedido R$ 19.986/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-37121262",
    "title": "Apartamento com 2 quartos à venda na Avenida Cabo Branco, Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, ",
    "area": 72,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 980000,
    "condo": 648,
    "iptu": 4900,
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
    "lat": -7.13883,
    "lng": -34.81762,
    "thesis": "Portal · 72 m² em Cabo Branco, pedido R$ 13.611/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 73 m² em Cabo Branco, pedido R$ 11.644/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-40242878",
    "title": "Cobertura duplex mobiliada e equipada no cabo branco com área de lazer completa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
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
    "lat": -7.12394,
    "lng": -34.830920000000006,
    "thesis": "Portal · 122 m² em Cabo Branco, pedido R$ 8.852/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47209290",
    "title": "Apartamento com 2 quartos à venda no Cabo Branco, João Pessoa , 65 m2 por R$ 650.000",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 585,
    "iptu": 3250,
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
    "lat": -7.120340000000001,
    "lng": -34.83428,
    "thesis": "Portal · 65 m² em Cabo Branco, pedido R$ 10.000/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 57 m² em Cabo Branco, pedido R$ 15.246/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 70 m² em Manaíra, pedido R$ 8.000/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-43075840",
    "title": "Excelente Apartament de 03 quartos, sendo 01 suíte, 01 vaga de garagem, Próximo a Praia - ",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Bananeiras, 100",
    "area": 60,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 540,
    "iptu": 3400,
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
    "lat": -7.10678,
    "lng": -34.82863,
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 11.333/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-47093592",
    "title": "Apartamento com 245 m2 na praia de Manaira , 4 suítes - R$ 1.299,000",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Escrivão Sebastião De Azevedo Bastos, 1758",
    "area": 245,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1299000,
    "condo": 2205,
    "iptu": 6495,
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
    "lat": -7.09968,
    "lng": -34.84096,
    "thesis": "Portal · 245 m² em Manaíra, pedido R$ 5.302/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 28 m² em Manaíra, pedido R$ 10.714/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46721568",
    "title": "Uma verdadeira CASA com 04 quartos , 130 m2 há poucos metros da praia de Manaira",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Avenida Guarabira, 1125",
    "area": 130,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 590000,
    "condo": 0,
    "iptu": 2950,
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
    "lat": -7.10067,
    "lng": -34.8348,
    "thesis": "Portal · 130 m² em Manaíra, pedido R$ 4.538/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "ask": 349900,
    "condo": 747,
    "iptu": 1750,
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
    "thesis": "Portal · 83 m² em Manaíra, pedido R$ 4.216/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1018524863813,
    "lng": -34.839450050584,
    "thesis": "Portal · 90 m² em Manaíra, pedido R$ 9.444/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-38834468",
    "title": "Apartamento alto padrão de 02 quartos em Manaíra a preço de custo",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Escrivão Sebastião De Azevedo Bastos, 723",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 510000,
    "condo": 513,
    "iptu": 2550,
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
    "lat": -7.09977,
    "lng": -34.8424,
    "thesis": "Portal · 57 m² em Manaíra, pedido R$ 8.947/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-46674487",
    "title": "Apartamento exclusivo de alto padrão com 4 suítes e 204 m² em manaíra",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 204,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1399000,
    "condo": 1836,
    "iptu": 6995,
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
    "lat": -7.1018,
    "lng": -34.83852,
    "thesis": "Portal · 204 m² em Manaíra, pedido R$ 6.858/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 216 m² em Manaíra, pedido R$ 8.565/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-44455403",
    "title": "Apartamento com 2 quartos à venda na Rua Doutor Seixas Maia, Manaíra, João Pessoa",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Doutor Seixas Maia, ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 629000,
    "condo": 540,
    "iptu": 3145,
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
    "lat": -7.09799,
    "lng": -34.83412,
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 10.483/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-41195839",
    "title": "Apartamento com 3 quartos à venda na Avenida Sapé, --, Manaíra, João Pessoa",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Avenida Sapé, --",
    "area": 143,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 850000,
    "condo": 1287,
    "iptu": 4250,
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
    "lat": -7.1072689456522,
    "lng": -34.834919771739,
    "thesis": "Portal · 143 m² em Manaíra, pedido R$ 5.944/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45844351",
    "title": "Exclusividade,apartamento em Manaira,ótimo para morar e investir,com uma localização privi",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua São Gonçalo, 777",
    "area": 67,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 603,
    "iptu": 1750,
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
    "lat": -7.10492,
    "lng": -34.83819,
    "thesis": "Portal · 67 m² em Manaíra, pedido R$ 5.224/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 73 m² em Manaíra, pedido R$ 8.014/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-41195821",
    "title": "Apartamento com 3 quartos à venda na Rua Presidente Nilo Peçanha, --, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Presidente Nilo Peçanha, --",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 645000,
    "condo": 945,
    "iptu": 3225,
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
    "lat": -7.068,
    "lng": -34.84392,
    "thesis": "Portal · 105 m² em Bessa, pedido R$ 6.143/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47209309",
    "title": "Apartamento com 4 quartos à venda no Bessa, João Pessoa , 200 m2 por R$ 1.360.000",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 200,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1360000,
    "condo": 1800,
    "iptu": 6800,
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
    "lat": -7.07022,
    "lng": -34.84592,
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 6.800/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46609665",
    "title": "Apartamento para Venda em João Pessoa, Bessa, 3 dormitórios, 3 suítes, 3 banheiros, 2 vaga",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 740000,
    "condo": 657,
    "iptu": 3700,
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
    "lat": -7.06734,
    "lng": -34.847359999999995,
    "thesis": "Portal · 73 m² em Bessa, pedido R$ 10.137/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "lat": -7.062966,
    "lng": -34.846517,
    "thesis": "Portal · 78 m² em Bessa, pedido R$ 6.372/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 158 m² em Bessa, pedido R$ 8.228/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "ask": 390000,
    "condo": 648,
    "iptu": 1950,
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
    "thesis": "Portal · 72 m² em Bessa, pedido R$ 5.417/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 116 m² em Bessa, pedido R$ 4.741/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.0657341861862,
    "lng": -34.843983456456,
    "thesis": "Portal · 70 m² em Bessa, pedido R$ 7.786/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-46674475",
    "title": "Apartamento porteira fechada de 2 quartos com suíte e varanda gourmet no bessa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 504990,
    "condo": 558,
    "iptu": 2525,
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
    "lat": -7.0653,
    "lng": -34.84292,
    "thesis": "Portal · 62 m² em Bessa, pedido R$ 8.145/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-46247516",
    "title": "Apartamento com 3 quartos à venda na Avenida Presidente Afonso Pena, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente Afonso Pena, ",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1750000,
    "condo": 1800,
    "iptu": 8750,
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
    "lat": -7.06608,
    "lng": -34.8404,
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 8.750/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-36283529",
    "title": "R$ 257.000,00 - Apartamento Térreo no Bessa – 2 Quartos, 1 Suíte, a 650m da Praia!",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente José Linhares, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 257000,
    "condo": 450,
    "iptu": 1285,
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
    "lat": -7.06278,
    "lng": -34.84582,
    "thesis": "Portal · 50 m² em Bessa, pedido R$ 5.140/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "ask": 774444,
    "condo": 540,
    "iptu": 3872,
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
    "thesis": "Portal · 60 m² em Jardim Oceania, pedido R$ 12.907/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 65 m² em Jardim Oceania, pedido R$ 12.462/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-32316553",
    "title": "Apartamento com 3 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 81,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1150000,
    "condo": 729,
    "iptu": 5750,
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
    "lat": -7.08984,
    "lng": -34.84036,
    "thesis": "Portal · 81 m² em Jardim Oceania, pedido R$ 14.198/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "ask": 700476,
    "condo": 378,
    "iptu": 3502,
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
    "lat": -7.0870089,
    "lng": -34.8355722,
    "thesis": "Portal · 42 m² em Jardim Oceania, pedido R$ 16.678/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46758613",
    "title": "Apartamento com 2 dormitórios à venda, 59 m² por R$ 1.100.000,00 - Jardim Oceania - João P",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1100000,
    "condo": 531,
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
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 18.644/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-38577576",
    "title": "Apartamento de 1 quarto no Bessa ! A apenas 150 metros da praia !",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Fernando Luiz Henriques Dos Santos, ",
    "area": 46,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 279000,
    "condo": 414,
    "iptu": 1395,
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
    "lat": -7.07994,
    "lng": -34.83219,
    "thesis": "Portal · 46 m² em Jardim Oceania, pedido R$ 6.065/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-47278737",
    "title": "Apartamento 98m², 3 quartos (2 suítes), condomínio clube completo — Jardim Oceania, perto ",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Josefa De Miranda Freire, 85",
    "area": 98,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1125000,
    "condo": 882,
    "iptu": 5625,
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
    "lat": -7.08613,
    "lng": -34.83636,
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 11.480/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-45870573",
    "title": "Apartamento com 3 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 900000,
    "condo": 765,
    "iptu": 4500,
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
    "lat": -7.08468,
    "lng": -34.83088,
    "thesis": "Portal · 85 m² em Jardim Oceania, pedido R$ 10.588/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-46654320",
    "title": "Apartamento com 2 quartos à venda na Rua Norberto de Castro Nogueira, 1255, Jardim Oceania",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, 1255",
    "area": 67,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 629000,
    "condo": 603,
    "iptu": 3145,
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
    "lat": -7.078044,
    "lng": -34.832546,
    "thesis": "Portal · 67 m² em Jardim Oceania, pedido R$ 9.388/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-47209327",
    "title": "Apartamento com 3 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 88,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 699000,
    "condo": 792,
    "iptu": 3495,
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
    "lat": -7.0910400000000005,
    "lng": -34.8442,
    "thesis": "Portal · 88 m² em Jardim Oceania, pedido R$ 7.943/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.0794536,
    "lng": -34.8312526,
    "thesis": "Portal · 61 m² em Jardim Oceania, pedido R$ 10.656/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 11.525/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-46921321",
    "title": "BAUTEN PARQUE | O HÁBITO DE VIVER BEM ENTRE O PARQUE E O MAR Jardim Oceania | João Pessoa-",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Antônio De Souza Leão, 86",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1269879,
    "condo": 585,
    "iptu": 6349,
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
    "lat": -7.08403,
    "lng": -34.83838,
    "thesis": "Portal · 65 m² em Jardim Oceania, pedido R$ 19.537/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-35444786",
    "title": "Apartamento com 1 dormitório à venda, 63 m² por R$ 1.125.967,39 - Jardim Oceania - João Pe",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 63,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1125967,
    "condo": 567,
    "iptu": 5630,
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
    "lat": -7.08161,
    "lng": -34.83475,
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 17.872/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47172835",
    "title": "Apartamento com 2 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 410000,
    "condo": 513,
    "iptu": 2050,
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
    "lat": -7.12772,
    "lng": -34.84554,
    "thesis": "Portal · 57 m² em Altiplano, pedido R$ 7.193/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 67 m² em Altiplano, pedido R$ 7.313/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 55 m² em Altiplano, pedido R$ 7.429/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46975742",
    "title": "Apartamento para Venda em João Pessoa, Altiplano Cabo Branco, 2 dormitórios, 2 suítes, 3 b",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Clementina Lindoso, 456",
    "area": 72,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 865000,
    "condo": 648,
    "iptu": 4325,
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
    "lat": -7.1321,
    "lng": -34.82908,
    "thesis": "Portal · 72 m² em Altiplano, pedido R$ 12.014/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-47424426",
    "title": "Apartamentos no Altiplano 2 torres com 44 andares, com 3 e 4 suítes por andar e uma ampla ",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 124,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 1472000,
    "condo": 1116,
    "iptu": 7360,
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
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 124 m² em Altiplano, pedido R$ 11.871/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 10.750/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46704322",
    "title": "ARTUS BLANC -GHC INCORPORACÕES -- aptos de 105 a 168 m2 e lazer Premium",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Av. Joao Cirilo Da Silva, 707",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1720000,
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
    "lat": -7.1281636,
    "lng": -34.8267585,
    "thesis": "Portal · 105 m² em Altiplano, pedido R$ 16.381/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 8.500/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 59 m² em Altiplano, pedido R$ 20.841/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40496009",
    "title": "Apartamento 96m² no Horizon Altiplano | 3 Quartos, 2 Suítes, 2 Vagas, Nascente Sul e Lazer",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Josita Almeida, ",
    "area": 96,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1490000,
    "condo": 864,
    "iptu": 7450,
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
    "lat": -7.1379375,
    "lng": -34.8265406,
    "thesis": "Portal · 96 m² em Altiplano, pedido R$ 15.521/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40225010",
    "title": "Apartamento com 3 quartos sendo 1 suíte e dce no altiplano cabo branco",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Plácido De Azevedo Ribeiro, 100",
    "area": 92,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 849000,
    "condo": 828,
    "iptu": 4245,
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
    "lat": -7.12993,
    "lng": -34.82887,
    "thesis": "Portal · 92 m² em Altiplano, pedido R$ 9.228/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-36162128",
    "title": "Apartamento VISTA MAR COM 3 SUÍTES + DCE no nobre bairro do Altiplano!",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 139,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1780000,
    "condo": 1251,
    "iptu": 8900,
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
    "lng": -34.84458,
    "thesis": "Portal · 139 m² em Altiplano, pedido R$ 12.806/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46921306",
    "title": "Oportunidade apartamento à venda no aeroclube | porteira fechada",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 82,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 790000,
    "condo": 738,
    "iptu": 3950,
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
    "lat": -7.05412,
    "lng": -34.855940000000004,
    "thesis": "Portal · 82 m² em Aeroclube, pedido R$ 9.634/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-47209298",
    "title": "Apartamento com 3 quartos à venda no Aeroclube, João Pessoa , 89 m2 por R$ 710.000",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 89,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 710000,
    "condo": 801,
    "iptu": 3550,
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
    "lat": -7.05868,
    "lng": -34.85798,
    "thesis": "Portal · 89 m² em Aeroclube, pedido R$ 7.978/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "lat": -7.095287,
    "lng": -34.842634,
    "thesis": "Portal · 89 m² em Aeroclube, pedido R$ 12.859/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-46921246",
    "title": "Sens | Construcões - Aeroclube, João Pessoa Arquitetura contemporânea ️ Acabamentos difere",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Bacharel José De Oliveira Curchatuz, 589",
    "area": 68,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 852165,
    "condo": 612,
    "iptu": 4261,
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
    "lat": -7.09298,
    "lng": -34.83834,
    "thesis": "Portal · 68 m² em Aeroclube, pedido R$ 12.532/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-36871150",
    "title": "Apartamento com 2 dormitórios à venda, 75 m² por R$ 998.816,00 - Aeroclube - João Pessoa/P",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 75,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 998816,
    "condo": 675,
    "iptu": 4994,
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
    "lat": -7.08955,
    "lng": -34.84185,
    "thesis": "Portal · 75 m² em Aeroclube, pedido R$ 13.318/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "ask": 1050000,
    "condo": 1539,
    "iptu": 5250,
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
    "lat": -7.095975,
    "lng": -34.845422,
    "thesis": "Portal · 171 m² em Aeroclube, pedido R$ 6.140/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42490204",
    "title": "Apartamento Alto Padrão Porteira Fechada no Aeroclube | 136m² | 3 Suítes | Lazer Completo ",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Bacharel José De Oliveira Curchatuz, ",
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
    "lat": -7.0846496,
    "lng": -34.8428211,
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.397/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-45247906",
    "title": "Apartamento de 3 quartos com 139 m² no Aeroclube por R$ 899 mil",
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
    "thesis": "Portal · 139 m² em Aeroclube, pedido R$ 6.475/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.082492,
    "lng": -34.839962,
    "thesis": "Portal · 135 m² em Aeroclube, pedido R$ 11.333/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-46973202",
    "title": "Apartamento no bairro do Aeroclube 3 quartos com móveis projetados",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Avenida Campos Sales, ",
    "area": 64,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 570000,
    "condo": 576,
    "iptu": 2850,
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
    "lat": -7.07507,
    "lng": -34.84229,
    "thesis": "Portal · 64 m² em Aeroclube, pedido R$ 8.906/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-34230301",
    "title": "Cobertura com 2 dormitórios à venda, 112 m² por R$ 990.000,00 - Aeroclube - João Pessoa/PB",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 112,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 990000,
    "condo": 1008,
    "iptu": 4950,
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
    "lat": -7.0846496,
    "lng": -34.8428211,
    "thesis": "Portal · 112 m² em Aeroclube, pedido R$ 8.839/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-36433799",
    "title": "Apartamento com 4 quartos à venda na Rua Bacharel José de Oliveira Curchatuz, Aeroclube, J",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Bacharel José De Oliveira Curchatuz, ",
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
    "lat": -7.0846496,
    "lng": -34.8428211,
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.029/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 49 m² em Aeroclube, pedido R$ 9.429/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-47513271",
    "title": "Venda direta com o proprietário - em frente ao novo parque da cidade!",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua João Batista Fernandes, 123",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 670000,
    "condo": 810,
    "iptu": 3350,
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
    "lat": -7.06,
    "lng": -34.84742,
    "thesis": "Portal · 90 m² em Aeroclube, pedido R$ 7.444/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-35375412",
    "title": "Apartamento com 1 quarto à venda no Aeroclube, João Pessoa",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 47,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 423,
    "iptu": 1900,
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
    "lat": -7.0580799999999995,
    "lng": -34.84886,
    "thesis": "Portal · 47 m² em Aeroclube, pedido R$ 8.085/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 10.000/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-47048903",
    "title": "Apartamento com 4 quartos à venda na Rua Custódio Domingos dos Santos, Brisamar, João Pess",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Custódio Domingos Dos Santos, ",
    "area": 189,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1750000,
    "condo": 1701,
    "iptu": 8750,
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
    "lat": -7.11471,
    "lng": -34.8405,
    "thesis": "Portal · 189 m² em Brisamar, pedido R$ 9.259/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-46523452",
    "title": "Apartamento de 85m2 com 3 Quartos, Vista Mar e Todo Projetado, em Condomínio Club",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Prefeito Severino Cabral, 100",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 950000,
    "condo": 765,
    "iptu": 4750,
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
    "lat": -7.1083,
    "lng": -34.8414017,
    "thesis": "Portal · 85 m² em Brisamar, pedido R$ 11.176/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 42 m² em Brisamar, pedido R$ 10.238/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289682",
    "title": "Apartamento com 4 quartos à venda no Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 20,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1700000,
    "condo": 180,
    "iptu": 8500,
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
    "lat": -7.09268,
    "lng": -34.85304,
    "thesis": "Portal · 20 m² em Brisamar, pedido R$ 85.000/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-47256207",
    "title": "Lindo e amplo apartamento com 4 Suítes no Brisamar, Condomínio clube",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Custódio Domingos Dos Santos, ",
    "area": 185,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1700000,
    "condo": 1665,
    "iptu": 8500,
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
    "lat": -7.11471,
    "lng": -34.8405,
    "thesis": "Portal · 185 m² em Brisamar, pedido R$ 9.189/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-42565957",
    "title": "Apartamento com 3 dormitórios à venda, 96 m² por R$ 1.450.000,00 - Brisamar - João Pessoa/",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 96,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 1450000,
    "condo": 864,
    "iptu": 7250,
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
    "lat": -7.11323,
    "lng": -34.84193,
    "thesis": "Portal · 96 m² em Brisamar, pedido R$ 15.104/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-27700003",
    "title": "Apartamento com 3 dormitórios à venda, 83 m² por R$ 680.000,00 - Brisamar - João Pessoa/PB",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 83,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 747,
    "iptu": 3400,
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
    "lat": -7.11323,
    "lng": -34.84193,
    "thesis": "Portal · 83 m² em Brisamar, pedido R$ 8.193/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-45258124",
    "title": "Apartamento com 3 quartos à venda na Avenida Senador Ruy Carneiro, S/N, Brisamar, João Pes",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Avenida Senador Ruy Carneiro, S/N",
    "area": 101,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1113860,
    "condo": 909,
    "iptu": 5569,
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
    "lat": -7.117917,
    "lng": -34.840006,
    "thesis": "Portal · 101 m² em Brisamar, pedido R$ 11.028/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-44684621",
    "title": "Apartamento para aluguel, venda, Brisamar, João Pessoa - 8593",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Alberto Leal, ",
    "area": 51,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 459,
    "iptu": 1750,
    "seaMeters": 1100,
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
    "lat": -7.1191946944444,
    "lng": -34.843382875,
    "thesis": "Portal · 51 m² em Brisamar, pedido R$ 6.863/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Spread alto pede motivo: reforma, processo ou liquidez.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-45572851",
    "title": "CASA SUSPENSA NO 14º COM 311 M² com muito conforto olhando de cima para toda a orla de Joã",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 311,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2397000,
    "condo": 0,
    "iptu": 11985,
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
    "lat": -7.0976,
    "lng": -34.84428,
    "thesis": "Portal · 311 m² em Brisamar, pedido R$ 7.707/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40717576",
    "title": "Apartamento localizado no privilegiado bairro do Brisamar.",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 83,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 747,
    "iptu": 3400,
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
    "lat": -7.09568,
    "lng": -34.85004,
    "thesis": "Portal · 83 m² em Brisamar, pedido R$ 8.193/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-47290306",
    "title": "Apartamento com 4 quartos à venda no Brisamar, João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 150,
    "rooms": 4,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 850000,
    "condo": 1350,
    "iptu": 4250,
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
    "lat": -7.09256,
    "lng": -34.85364,
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 5.667/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45968417",
    "title": "Apartamento com 3 quartos à venda na Rua Hevangelina Francisca Diniz, 247, Brisamar, João ",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Hevangelina Francisca Diniz, 247",
    "area": 138,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 980000,
    "condo": 1242,
    "iptu": 4900,
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
    "lat": -7.1172232,
    "lng": -34.8395861,
    "thesis": "Portal · 138 m² em Brisamar, pedido R$ 7.101/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.583/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-42806916",
    "title": "Apartamento a venda no bairro de tambauzinho em joão pessoa / pb",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 310000,
    "condo": 558,
    "iptu": 1550,
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
    "lat": -7.121079999999999,
    "lng": -34.874159999999996,
    "thesis": "Portal · 62 m² em Torre, pedido R$ 5.000/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-31584097",
    "title": "Apartamento com 2 dormitórios à venda, 60 m² por R$ 468.199,78 - Torre - João Pessoa/PB",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 468199,
    "condo": 540,
    "iptu": 2341,
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.803/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45192558",
    "title": "Apartamento com 2 quartos à venda na Rua Etelvina Macedo de Mendonça, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, ",
    "area": 80,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 720,
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
    "lat": -7.13145,
    "lng": -34.85964,
    "thesis": "Portal · 80 m² em Torre, pedido R$ 5.625/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-44544334",
    "title": "APARTAMENTO: VENDA - Excelente Aptº em Condomínio Clube! Com 59 m², 2 Quartos, sendo 1 Suí",
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
    "thesis": "Portal · 59 m² em Torre, pedido R$ 5.928/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-47241770",
    "title": "Apartamento com 3 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 720,
    "iptu": 1975,
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
    "lat": -7.1254,
    "lng": -34.875119999999995,
    "thesis": "Portal · 80 m² em Torre, pedido R$ 4.938/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-31241041",
    "title": "Apartamento na Planta para Venda em João Pessoa, Torre, 2 dormitórios, 1 suíte, 1 banheiro",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Júlia Freire, ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 478896,
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
    "lat": -7.120986952381,
    "lng": -34.860969121693,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.982/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "lat": -7.1326800652174,
    "lng": -34.8593719,
    "thesis": "Portal · 79 m² em Torre, pedido R$ 5.063/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.663/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-44474376",
    "title": "Lindo apartamento ,pronto pra morar,próximo a lagoa, centro",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Quintino Bocauiva, ",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 486,
    "iptu": 1150,
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
    "lat": -7.12264,
    "lng": -34.856759999999994,
    "thesis": "Portal · 54 m² em Torre, pedido R$ 4.259/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47209300",
    "title": "Apartamento com 2 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 478896,
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
    "lat": -7.1224,
    "lng": -34.87332,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.982/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-44114729",
    "title": "Apartamento com 3 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 470000,
    "condo": 630,
    "iptu": 2350,
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
    "lat": -7.12156,
    "lng": -34.866,
    "thesis": "Portal · 70 m² em Torre, pedido R$ 6.714/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46598820",
    "title": "Excelente Lançamento na Torre com 2 ou 3 Quartos, Lazer Completo Por trás da Epitácio",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Presidente Epitácio Pessoa, 1000",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 478896,
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
    "lat": -7.1200805,
    "lng": -34.8614268,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.982/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "lat": -7.1250335164835,
    "lng": -34.858179472527,
    "thesis": "Portal · 90 m² em Torre, pedido R$ 3.556/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47096358",
    "title": "Apartamento com 3 dormitórios (1 suíte), no bairro Torre, João Pessoa - PB.",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 720,
    "iptu": 1975,
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
    "lat": -7.124199999999999,
    "lng": -34.872479999999996,
    "thesis": "Portal · 80 m² em Torre, pedido R$ 4.938/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.204/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "lat": -7.1459278494624,
    "lng": -34.839086903226,
    "thesis": "Portal · 55 m² em Bancários, pedido R$ 6.345/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-45368868",
    "title": "Apartamento com 2 quartos à venda na Rua Bancário José Alexandre de Farias, 550, Bancários",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário José Alexandre De Farias, 550",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 250000,
    "condo": 531,
    "iptu": 1250,
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
    "lat": -7.1482002,
    "lng": -34.8323066,
    "thesis": "Portal · 59 m² em Bancários, pedido R$ 4.237/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 105 m² em Bancários, pedido R$ 5.047/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 66 m² em Bancários, pedido R$ 5.909/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 91 m² em Bancários, pedido R$ 6.812/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-47646741",
    "title": "Apartamento com 3 quartos à venda na Rua Empresário João Rodrigues Alves, Bancários, João ",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Empresário João Rodrigues Alves, ",
    "area": 94,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 825000,
    "condo": 846,
    "iptu": 4125,
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
    "thesis": "Portal · 94 m² em Bancários, pedido R$ 8.777/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-41488292",
    "title": "REF: AP007 -Apartamento à Venda, João Pessoa, Bancários, 3 quartos",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário Clóvis Moreno Gondim, 59",
    "area": 86,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 370000,
    "condo": 774,
    "iptu": 1850,
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
    "lat": -7.145618,
    "lng": -34.83977,
    "thesis": "Portal · 86 m² em Bancários, pedido R$ 4.302/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-39382469",
    "title": "Apartamento para Venda em João Pessoa, Bancários, 3 dormitórios, 1 suíte, 1 vaga",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459900,
    "condo": 630,
    "iptu": 2300,
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
    "lat": -7.1516399999999996,
    "lng": -34.86352,
    "thesis": "Portal · 70 m² em Bancários, pedido R$ 6.570/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-42921675",
    "title": "Apartamento com 2 quartos à venda no Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 82,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 649000,
    "condo": 738,
    "iptu": 3245,
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
    "lat": -7.1506799999999995,
    "lng": -34.85668,
    "thesis": "Portal · 82 m² em Bancários, pedido R$ 7.915/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-42412060",
    "title": "Tf saint clear - apartamento cobertura duplex nos bancarios / cobertura duplex no saint cl",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Derlópidas Gomes Neves, ",
    "area": 82,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 649000,
    "condo": 738,
    "iptu": 3245,
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
    "lat": -7.1488272,
    "lng": -34.8359045,
    "thesis": "Portal · 82 m² em Bancários, pedido R$ 7.915/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-47049269",
    "title": "Apartamento com 2 quartos à venda na Rua Adalgisa Luna de Menezes, 641, Bancários, João Pe",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Adalgisa Luna De Menezes, 641",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 330000,
    "condo": 513,
    "iptu": 1650,
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
    "lat": -7.14481,
    "lng": -34.8344,
    "thesis": "Portal · 57 m² em Bancários, pedido R$ 5.789/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 73 m² em Bancários, pedido R$ 4.315/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46860264",
    "title": "Apartamento com 2 quartos à venda no Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 340000,
    "condo": 486,
    "iptu": 1700,
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
    "lat": -7.1526,
    "lng": -34.86268,
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.296/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45867092",
    "title": "Apartamento com 3 quartos à venda na Rua Enilson Lucena, 57, Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Enilson Lucena, 57",
    "area": 63,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 627413,
    "condo": 567,
    "iptu": 3137,
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
    "lat": -7.12117,
    "lng": -34.83585,
    "thesis": "Portal · 63 m² em Bancários, pedido R$ 9.959/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46973618",
    "title": "Apartamento no Bairro dos Estados com projeto Ac porteira fechada",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Presidente Epitácio Pessoa, ",
    "area": 73,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 900000,
    "condo": 657,
    "iptu": 4500,
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
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 73 m² em Estados, pedido R$ 12.329/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 74 m² em Estados, pedido R$ 6.176/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-34625098",
    "title": "Apartamento com 2 dormitórios à venda, 46 m² por R$ 423.000,00 - Bairro dos Estados - João",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 423000,
    "condo": 414,
    "iptu": 2115,
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
    "thesis": "Portal · 46 m² em Estados, pedido R$ 9.196/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45967791",
    "title": "Apartamento Lazer Clube no B. Dos Estados 535.000,00 codigo: 362661",
    "type": "apto",
    "bairroId": "estados",
    "street": "Rua Lucinéia Cabral Batista, ",
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
    "lat": -7.1128323,
    "lng": -34.8541389,
    "thesis": "Portal · 60 m² em Estados, pedido R$ 8.917/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-47073648",
    "title": "Venda de apartamento de 3/4 no bairro dos Estados próximo à Avenida Epitàcio Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Sergipe, 737",
    "area": 89,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 801,
    "iptu": 3150,
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
    "lat": -7.11179,
    "lng": -34.85294,
    "thesis": "Portal · 89 m² em Estados, pedido R$ 7.079/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 299 m² em Estados, pedido R$ 2.542/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 136 m² em Estados, pedido R$ 10.294/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 70 m² em Estados, pedido R$ 9.986/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 52 m² em Estados, pedido R$ 7.212/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 61 m² em Estados, pedido R$ 7.377/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 94 m² em Estados, pedido R$ 4.628/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 248 m² em Estados, pedido R$ 5.040/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37053956",
    "title": "Apartamento com 2 dormitórios à venda, 62 m² por R$ 395.000,00 - Bairro dos Estados - João",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 558,
    "iptu": 1975,
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
    "lat": -7.11862,
    "lng": -34.85359,
    "thesis": "Portal · 62 m² em Estados, pedido R$ 6.371/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-47127040",
    "title": "Apartamento para Venda em João Pessoa, Estados, 2 dormitórios, 1 suíte, 2 banheiros, 1 vag",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 415000,
    "condo": 495,
    "iptu": 2075,
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
    "lat": -7.1208,
    "lng": -34.86252,
    "thesis": "Portal · 55 m² em Estados, pedido R$ 7.545/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45247786",
    "title": "Apartamento com 2 quartos à venda no Estados, João Pessoa",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 379000,
    "condo": 495,
    "iptu": 1895,
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
    "lat": -7.11864,
    "lng": -34.84932,
    "thesis": "Portal · 55 m² em Estados, pedido R$ 6.891/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "lat": -7.1239436,
    "lng": -34.85425,
    "thesis": "Portal · 100 m² em Expedicionários, pedido R$ 6.200/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45247928",
    "title": "Apartamento com 3 dormitórios à venda, 70 m² por R$ 530.435,90 - Expedicionários - João Pe",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 530435,
    "condo": 630,
    "iptu": 2652,
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
    "lat": -7.1306,
    "lng": -34.86396,
    "thesis": "Portal · 70 m² em Expedicionários, pedido R$ 7.578/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43392585",
    "title": "Apartamento amplo, confortável e muito bem localizado para venda | Expedicionários",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Silvio Almeida, ",
    "area": 110,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 990,
    "iptu": 3400,
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
    "lat": -7.1225739529412,
    "lng": -34.853206117647,
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 6.182/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45234876",
    "title": "Apartamento à venda, 112 m² por R$ 459.996,00 - Expedicionários - João Pessoa/PB",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Presidente Roosevelt, 108",
    "area": 112,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459996,
    "condo": 1008,
    "iptu": 2300,
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
    "lat": -7.1208517,
    "lng": -34.8573964,
    "thesis": "Portal · 112 m² em Expedicionários, pedido R$ 4.107/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43188135",
    "title": "Apartamento com 2 quartos à venda na Avenida Nabuco de Assis, 161, Expedicionários, João P",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Avenida Nabuco De Assis, 161",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 340000,
    "condo": 405,
    "iptu": 1700,
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
    "lat": -7.124688,
    "lng": -34.853709,
    "thesis": "Portal · 45 m² em Expedicionários, pedido R$ 7.556/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46461490",
    "title": "Apartamento 135m² 3 quartos sendo 2 suítes nos Expedicionários à Venda",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 135,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 600000,
    "condo": 1215,
    "iptu": 3000,
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
    "lat": -7.1314400000000004,
    "lng": -34.8774,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.444/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43171409",
    "title": "Apartamento com 3 dormitórios à venda, 104 m² por R$ 730.000,00 - Expedicionários - João P",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 104,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 730000,
    "condo": 936,
    "iptu": 3650,
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
    "lat": -7.1254548,
    "lng": -34.8527592,
    "thesis": "Portal · 104 m² em Expedicionários, pedido R$ 7.019/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-42920250",
    "title": "Apartamento para Venda em João Pessoa, Expedicionários, 2 dormitórios, 1 suíte, 1 banheiro",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 340000,
    "condo": 513,
    "iptu": 1700,
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
    "lat": -7.12496,
    "lng": -34.87344,
    "thesis": "Portal · 57 m² em Expedicionários, pedido R$ 5.965/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-38039513",
    "title": "Apartamento para venda, Expedicionários, João Pessoa - 24274",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Marechal Esperidião Rosas, ",
    "area": 74,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 560000,
    "condo": 666,
    "iptu": 2800,
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
    "lat": -7.12388,
    "lng": -34.85332,
    "thesis": "Portal · 74 m² em Expedicionários, pedido R$ 7.568/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "lat": -7.1211189298246,
    "lng": -34.853234903509,
    "thesis": "Portal · 70 m² em Expedicionários, pedido R$ 7.467/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-42990225",
    "title": "Apartamento com 3 quartos à venda na Rua Marechal Esperidião Rosas, Expedicionários, João ",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Marechal Esperidião Rosas, ",
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
    "lat": -7.1254548,
    "lng": -34.8527592,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.364/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-43730163",
    "title": "Apartamento com Vista para a Lagoa e 147m² no Centro de João Pessoa codigo: 345295",
    "type": "apto",
    "bairroId": "centro",
    "street": "Presidente Getúlio Vargas, ",
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
    "lat": -7.1195614,
    "lng": -34.8817282,
    "thesis": "Portal · 114 m² em Centro, pedido R$ 4.649/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 70 m² em Centro, pedido R$ 5.000/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 93 m² em Centro, pedido R$ 4.839/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 50 m² em Centro, pedido R$ 6.000/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-47209313",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa , 51 m2 por R$ 320.000",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 320000,
    "condo": 459,
    "iptu": 1600,
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
    "lat": -7.155880000000001,
    "lng": -34.85092,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.275/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-47261828",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 396,
    "iptu": 950,
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
    "lat": -7.15672,
    "lng": -34.84444,
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 4.318/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47516403",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 320000,
    "condo": 396,
    "iptu": 1600,
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
    "lat": -7.1596,
    "lng": -34.83724,
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 7.273/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-47519226",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 335000,
    "condo": 396,
    "iptu": 1675,
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
    "lat": -7.156960000000001,
    "lng": -34.835679999999996,
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 7.614/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-44690266",
    "title": "Apartamento com 2 dormitórios à venda, 44 m² por R$ 350.000,00 - Portal do Sol - João Pess",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 396,
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
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 7.955/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-47038047",
    "title": "Excelente Apartamento no Portal do Sol com 2 Quartos sendo 1 Suíte, Elevador e Lazer",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Vicente De Paula Chianca, 100",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 495,
    "iptu": 2250,
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
    "lat": -7.16014,
    "lng": -34.81848,
    "thesis": "Portal · 55 m² em Portal do Sol, pedido R$ 8.182/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-35142859",
    "title": "Apartamento com 2 dormitórios à venda, 51 m² por R$ 342.482,10 - Portal do Sol - João Pess",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 342482,
    "condo": 459,
    "iptu": 1712,
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
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.715/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-46754747",
    "title": "Apartamento com 3 quartos à venda na Rua Ana De Fátima Gama Cabral (Lot Q Mares Ii), Porta",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Ana De Fátima Gama Cabral (lot Q Mares Ii), ",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 330000,
    "condo": 684,
    "iptu": 1650,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.15711,
    "lng": -34.81989,
    "thesis": "Portal · 76 m² em Portal do Sol, pedido R$ 4.342/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43757206",
    "title": "Apartamento com 2 dormitórios à venda, 52 m² por R$ 343.265,00 - Portal do Sol - João Pess",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 343265,
    "condo": 468,
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
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 52 m² em Portal do Sol, pedido R$ 6.601/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45867344",
    "title": "Apartamento com 2 quartos à venda na Rua Conselheiro José Braz do Rego, S/N, Portal do Sol",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Conselheiro José Braz Do Rego, S/N",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 342482,
    "condo": 459,
    "iptu": 1712,
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
    "lat": -7.1582381382979,
    "lng": -34.820412819149,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.715/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-30648214",
    "title": "Residencial Letícia - APARTAMENTO TRIPLEX NO RESIDENCIAL LETICIA / TRIPLEX NO BESSA / TRIP",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Gumercindo Cabral De Lucena, ",
    "area": 161,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 480000,
    "condo": 1449,
    "iptu": 2400,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.1589278,
    "lng": -34.822481577778,
    "thesis": "Portal · 161 m² em Portal do Sol, pedido R$ 2.981/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-25639763",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 316000,
    "condo": 558,
    "iptu": 1580,
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
    "lat": -7.160200000000001,
    "lng": -34.84768,
    "thesis": "Portal · 62 m² em Portal do Sol, pedido R$ 5.097/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-36809931",
    "title": "Apto O melhor bloco do condomínio e a melhor visão da área de lazer.",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 86,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 774,
    "iptu": 2250,
    "seaMeters": 1600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 86 m² em Portal do Sol, pedido R$ 5.233/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "lat": -7.1582381382979,
    "lng": -34.820412819149,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.954/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-36066488",
    "title": "Apartamento Térreo para Venda em João Pessoa, Portal do Sol, 2 dormitórios, 1 suíte, 1 ban",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
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
    "lat": -7.162120000000001,
    "lng": -34.85272,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.777/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 59 m² em Jd. Cidade Universitária, pedido R$ 7.119/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-47098978",
    "title": "Apartamento com 3 quartos à venda na Rua Rejane Freire Correia, 11111, Jardim Cidade Unive",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Rejane Freire Correia, 11111",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 279000,
    "condo": 585,
    "iptu": 1395,
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
    "lat": -7.1559589,
    "lng": -34.8319317,
    "thesis": "Portal · 65 m² em Jd. Cidade Universitária, pedido R$ 4.292/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 6.138/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-47601008",
    "title": "Seu novo lar pode estar mais perto do que você imagina! Conforto, posição nascente e lazer",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 799900,
    "condo": 765,
    "iptu": 4000,
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
    "lat": -7.1494800000000005,
    "lng": -34.83992,
    "thesis": "Portal · 85 m² em Jd. Cidade Universitária, pedido R$ 9.411/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "title": "Apartamento no bairro JardimCidade Universitária por apenas R$ 220 mil",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Bacharel Wilson Flávio Moreira Coutinho, ",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 459,
    "iptu": 1100,
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
    "lat": -7.1582332956522,
    "lng": -34.828823652174,
    "thesis": "Portal · 51 m² em Jd. Cidade Universitária, pedido R$ 4.314/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37163053",
    "title": "Apartamento com 2 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 306000,
    "condo": 423,
    "iptu": 1530,
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
    "lat": -7.147320000000001,
    "lng": -34.84232,
    "thesis": "Portal · 47 m² em Jd. Cidade Universitária, pedido R$ 6.511/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-35142858",
    "title": "Apartamento com 2 dormitórios à venda, 54 m² por R$ 378.804,00 - Jardim Cidade Universitár",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 378804,
    "condo": 486,
    "iptu": 1894,
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
    "lat": -7.15514,
    "lng": -34.83858,
    "thesis": "Portal · 54 m² em Jd. Cidade Universitária, pedido R$ 7.015/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-39867065",
    "title": "Apartamento nos Bancários/ Jd Cid Universitária João Pessoa Paraiba",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Agente Fiscal Walfredo Bezerra Da Silveira, 280",
    "area": 76,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 360000,
    "condo": 684,
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
    "lat": -7.15553,
    "lng": -34.8267,
    "thesis": "Portal · 76 m² em Jd. Cidade Universitária, pedido R$ 4.737/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42780372",
    "title": "Lançamento nos Bancários com área de lazer completa, próximo à principal do bairro.",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Tabelião Erinaldo Nunes Oliveira, ",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 369000,
    "condo": 504,
    "iptu": 1845,
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
    "lat": -7.15533,
    "lng": -34.83325,
    "thesis": "Portal · 56 m² em Jd. Cidade Universitária, pedido R$ 6.589/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-43218308",
    "title": "Lançamento nos bancários apartamentos de dois e três qts com varanda gourmet e area de laz",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 69,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459000,
    "condo": 621,
    "iptu": 2295,
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
    "lat": -7.14336,
    "lng": -34.8488,
    "thesis": "Portal · 69 m² em Jd. Cidade Universitária, pedido R$ 6.652/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-37741845",
    "title": "Apartamento com 2 quartos à venda na Rua Euclides Rodrigues Oliveira, 001, Jardim Cidade U",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Euclides Rodrigues Oliveira, 001",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 306000,
    "condo": 468,
    "iptu": 1530,
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
    "lat": -7.1580467,
    "lng": -34.8428174,
    "thesis": "Portal · 52 m² em Jd. Cidade Universitária, pedido R$ 5.885/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-41782060",
    "title": "Apartamento com 2 quartos à venda na Rua Cecília Rodrigues Siqueira, 843, Jardim Cidade Un",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Cecília Rodrigues Siqueira, 843",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 415000,
    "condo": 513,
    "iptu": 2075,
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
    "lat": -7.15098,
    "lng": -34.831228,
    "thesis": "Portal · 57 m² em Jd. Cidade Universitária, pedido R$ 7.281/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-47428794",
    "title": "Apartamento para Venda em João Pessoa, Jardim Cidade Universitária, 3 dormitórios, 1 suíte",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 91,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 400000,
    "condo": 819,
    "iptu": 2000,
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
    "lat": -7.14336,
    "lng": -34.84316,
    "thesis": "Portal · 91 m² em Jd. Cidade Universitária, pedido R$ 4.396/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46632514",
    "title": "Apartamento com 3 dormitórios à venda, 80 m² por R$ 300.000,00 - Jardim Cidade Universitár",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Manoel Albino Vidal, 126",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 720,
    "iptu": 1500,
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
    "lat": -7.15251,
    "lng": -34.83094,
    "thesis": "Portal · 80 m² em Jd. Cidade Universitária, pedido R$ 3.750/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-38046747",
    "title": "Cobertura para Venda em João Pessoa, Jardim Cidade Universitária, 2 dormitórios, 1 suíte, ",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Pedro Jusselino De Aquino, ",
    "area": 39,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 439990,
    "condo": 351,
    "iptu": 2200,
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
    "lat": -7.156262030303,
    "lng": -34.840834636364,
    "thesis": "Portal · 39 m² em Jd. Cidade Universitária, pedido R$ 11.282/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-38755294",
    "title": "Apartamento para venda, 2 quarto(s), Gramame, Joao Pessoa - AP487",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Professora Alice Mendes Da Nóbrega, 271",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 130000,
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
    "lat": -7.22243,
    "lng": -34.84372,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.600/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43770500",
    "title": "Apartamento com 2 quartos à venda na Avenida Carlos André Ferreira Narcizo, 100, Gramame, ",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Avenida Carlos André Ferreira Narcizo, 100",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 120000,
    "condo": 405,
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
    "lat": -7.21534,
    "lng": -34.84751,
    "thesis": "Portal · 45 m² em Gramame, pedido R$ 2.667/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-41359903",
    "title": "Apartamento com 2 quartos à venda na Alexsandro Ferreira Narcizo, Gramame, João Pessoa",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Alexsandro Ferreira Narcizo, ",
    "area": 42,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 120000,
    "condo": 378,
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
    "lat": -7.1994077,
    "lng": -34.8789697,
    "thesis": "Portal · 42 m² em Gramame, pedido R$ 2.857/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290486",
    "title": "Apartamento à venda no residencial gênesis ii – parque do sol / gramame",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 20,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 155000,
    "condo": 180,
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
    "lat": -7.2135,
    "lng": -34.84672,
    "thesis": "Portal · 20 m² em Gramame, pedido R$ 7.750/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 45 m² em Gramame, pedido R$ 4.022/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-45943993",
    "title": "Apartamento com 2 quartos à venda na Rua Estudante Carlos Alberto da Silva, Gramame, João ",
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
    "thesis": "Portal · 53 m² em Gramame, pedido R$ 3.208/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-38864801",
    "title": "Oportunidade Imperdível no Valentina | Apartamento Térreo Reformado Próximo ao Jampa Shopp",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 140000,
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
    "lat": -7.21758,
    "lng": -34.83484,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.800/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40837310",
    "title": "Apartamento com 2 dormitórios à venda, 51 m² por R$ 150.000,00 - Gramame - João Pessoa/PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Manoel Felisberto Da Silva, 341",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 150000,
    "condo": 459,
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
    "lat": -7.195837,
    "lng": -34.870051,
    "thesis": "Portal · 51 m² em Gramame, pedido R$ 2.941/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-30647741",
    "title": "Residencial Valência - APARTAMENTO PADRÃO/ APARTAMENTO NO RESIDENCIAL VALÊNCIA/ APARTAMENT",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Balbina Maria Ferreira, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 140000,
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
    "lat": -7.2213,
    "lng": -34.84721,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.800/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-30773796",
    "title": "Apartamento com 2 quartos à venda no Gramame, João Pessoa",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 100000,
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
    "lat": -7.217099999999999,
    "lng": -34.83544,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.000/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.2152678181818,
    "lng": -34.841965590909,
    "thesis": "Portal · 47 m² em Gramame, pedido R$ 3.957/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46671265",
    "title": "Apartamento com 2 quartos à venda na Rua Leopoldo Rodrigues Pinheiro, 189, Gramame, João P",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Leopoldo Rodrigues Pinheiro, 189",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 234000,
    "condo": 504,
    "iptu": 1170,
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
    "lat": -7.22095,
    "lng": -34.84464,
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 4.179/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "lat": -7.1768583463415,
    "lng": -34.834472839024,
    "thesis": "Portal · 46 m² em Mangabeira, pedido R$ 3.261/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 56 m² em Mangabeira, pedido R$ 3.857/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 3.852/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 47 m² em Mangabeira, pedido R$ 4.511/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-37416850",
    "title": "Apartamento para Venda em João Pessoa, Mangabeira, 2 dormitórios, 1 suíte, 2 banheiros, 1 ",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Coronel Francisco Pequeno De Souza, 99",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 540,
    "iptu": 1100,
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
    "lat": -7.182739,
    "lng": -34.848436,
    "thesis": "Portal · 60 m² em Mangabeira, pedido R$ 3.667/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-41334626",
    "title": "Apartamento em Mangabeira 8 no primeiro andar em João Pessoa Paraiba",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Severino Manoel De Lima, 0",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 450,
    "iptu": 900,
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
    "lat": -7.17477,
    "lng": -34.81839,
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 3.600/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43053535",
    "title": "Apartamento com 2 quartos à venda na Rua Cantora Geni Santos, 58, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Cantora Geni Santos, 58",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 239000,
    "condo": 387,
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
    "lat": -7.173041,
    "lng": -34.84519,
    "thesis": "Portal · 43 m² em Mangabeira, pedido R$ 5.558/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-47290502",
    "title": "Apartamento Novo com 2 Quartos em Mangabeira | Unidade 202 | R$ 199.000 | Próximo ao Traum",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 39,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 199000,
    "condo": 351,
    "iptu": 995,
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
    "lat": -7.1696800000000005,
    "lng": -34.859359999999995,
    "thesis": "Portal · 39 m² em Mangabeira, pedido R$ 5.103/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-45867107",
    "title": "Apartamento 2 Quartos no Residencial Cabo Branco V - Mangabeira",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Tenente Napoleão Acioli De Lima, 305",
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
    "lat": -7.16384,
    "lng": -34.84357,
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 4.135/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-46441899",
    "title": "Apartamento com 2 dormitórios à venda, 50 m² por R$ 228.000 - Mangabeira - João Pessoa/PB",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 228000,
    "condo": 450,
    "iptu": 1140,
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
    "lat": -7.18107,
    "lng": -34.83595,
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 4.560/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-37358253",
    "title": "Apartamento com 2 quartos à venda na Rua Maria Ferreira Leite, 277, Mangabeira, João Pesso",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Maria Ferreira Leite, 277",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 187000,
    "condo": 495,
    "iptu": 935,
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
    "lat": -7.17873,
    "lng": -34.81708,
    "thesis": "Portal · 55 m² em Mangabeira, pedido R$ 3.400/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45322515",
    "title": "Apartamento com 2 quartos à venda na Rua Josefa Taveira, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Josefa Taveira, ",
    "area": 70,
    "rooms": 2,
    "suites": 1,
    "parking": 0,
    "year": 2012,
    "ask": 195000,
    "condo": 630,
    "iptu": 975,
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
    "lat": -7.17011,
    "lng": -34.83873,
    "thesis": "Portal · 70 m² em Mangabeira, pedido R$ 2.786/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-34295557",
    "title": "Apartamento Mobiliado à Venda em Manaíra – Porteira Fechada!",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Rua Luiza Carneiro, 900",
    "area": 86,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 599997,
    "condo": 774,
    "iptu": 3000,
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
    "lat": -7.1544487,
    "lng": -34.890127,
    "thesis": "Portal · 86 m² em Cruz das Armas, pedido R$ 6.977/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45867232",
    "title": "Apartamento 2 Quartos no Residencial Negreiros - Cruz das Armas",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Rua Coronel Estevão Dávila Lins, S/N",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 209990,
    "condo": 432,
    "iptu": 1050,
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
    "lat": -7.14019,
    "lng": -34.88405,
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.375/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45867121",
    "title": "Apartamento com 2 quartos à venda na Rua Antônio Gomes, Cruz das Armas, João Pessoa",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Rua Antônio Gomes, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 450,
    "iptu": 900,
    "seaMeters": 5600,
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
    "lat": -7.13482211875,
    "lng": -34.8871485125,
    "thesis": "Portal · 50 m² em Cruz das Armas, pedido R$ 3.600/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-41037053",
    "title": "Lançamento de apartamentos para venda a partir r$ 199.990,00",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Rua Coronel Estevão Dávila Lins, ",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
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
    "lat": -7.14019,
    "lng": -34.88405,
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-45867122",
    "title": "Apartamento com 2 quartos à venda na Rua Antônio Gomes, 197, Cruz das Armas, João Pessoa",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Rua Antônio Gomes, 197",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 405,
    "iptu": 950,
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
    "lat": -7.13512,
    "lng": -34.887,
    "thesis": "Portal · 45 m² em Cruz das Armas, pedido R$ 4.222/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 13.265/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43827533",
    "title": "Apartamento com 3 quartos à venda na Rua Themístocles da Costa Brito, 315, Jardim Oceania,",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Themístocles Da Costa Brito, 315",
    "area": 81,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1200000,
    "condo": 729,
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
    "lat": -7.08708,
    "lng": -34.84216,
    "thesis": "Portal · 81 m² em Jardim Oceania, pedido R$ 14.815/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-47663873",
    "title": "Apartamento Mobiliado 3 Quartos 1 Suíte nos Bancários- João Pessoa-PB. próximo a UNiPE.",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua José Firmino Ferreira, 307",
    "area": 72,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 314700,
    "condo": 648,
    "iptu": 1574,
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
    "lat": -7.15062,
    "lng": -34.85114,
    "thesis": "Portal · 72 m² em Bancários, pedido R$ 4.371/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 54 m² em Ernesto Geisel, pedido R$ 4.167/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.220/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-42369666",
    "title": "Entrada apenas 15 mil reais.Apartamento no bairro Ernesto Geisel em João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Francisco Manoel De Andrade, 1",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 214000,
    "condo": 405,
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
    "lat": -7.17626,
    "lng": -34.86422,
    "thesis": "Portal · 45 m² em Ernesto Geisel, pedido R$ 4.756/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-46799993",
    "title": "Apartamento com 2 dormitórios à venda, 56 m² por R$ 250.000,00 - Ernesto Geisel - João Pes",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 250000,
    "condo": 504,
    "iptu": 1250,
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
    "lat": -7.179641,
    "lng": -34.8706935,
    "thesis": "Portal · 56 m² em Ernesto Geisel, pedido R$ 4.464/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-47218827",
    "title": "Apartamento / Novo para Venda em João Pessoa, Ernesto Geisel, 2 dormitórios, 1 banheiro, 1",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 41,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 205000,
    "condo": 369,
    "iptu": 1025,
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
    "lat": -7.16636,
    "lng": -34.87124,
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-31732173",
    "title": "Apartamento com 2 quartos à venda na Rua Abelardo Targino da Fonseca, 1331, Ernesto Geisel",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Abelardo Targino Da Fonseca, 1331",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 504,
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
    "lat": -7.1887402,
    "lng": -34.8685944,
    "thesis": "Portal · 56 m² em Ernesto Geisel, pedido R$ 3.214/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-38527517",
    "title": "Apartamento com 2 quartos à venda na Rua Francisco Manoel de Andrade, 02, Ernesto Geisel, ",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Francisco Manoel De Andrade, 02",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 205000,
    "condo": 360,
    "iptu": 1025,
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
    "lat": -7.17626,
    "lng": -34.86422,
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 5.125/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-42203032",
    "title": "Apartamento com 2 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 513,
    "iptu": 1100,
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
    "lat": -7.16144,
    "lng": -34.86644,
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 3.860/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46318607",
    "title": "Apartamento com 2 quartos à venda na Rua Valdemar Naziazeno, Ernesto Geisel, João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Valdemar Naziazeno, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 170000,
    "condo": 450,
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
    "lat": -7.18031,
    "lng": -34.87372,
    "thesis": "Portal · 50 m² em Ernesto Geisel, pedido R$ 3.400/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-39738136",
    "title": "Apartamento com 2 quartos à venda na Rua João de Souza Filho, Ernesto Geisel, João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua João De Souza Filho, ",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 200000,
    "condo": 495,
    "iptu": 1000,
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
    "lat": -7.17671,
    "lng": -34.86419,
    "thesis": "Portal · 55 m² em Ernesto Geisel, pedido R$ 3.636/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40840483",
    "title": "Apartamento com 2 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 150000,
    "condo": 459,
    "iptu": 800,
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
    "lat": -7.15772,
    "lng": -34.87496,
    "thesis": "Portal · 51 m² em Ernesto Geisel, pedido R$ 2.941/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 55 m² em Ernesto Geisel, pedido R$ 4.455/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-44544554",
    "title": "Excelente Lançamento no Novo Geisel com 2 Quartos sendo 1 Suíte, Elevador e Lazer Completo",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Patrulheiro Antônio Leônidas, 300",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 256000,
    "condo": 414,
    "iptu": 1280,
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
    "lat": -7.1814076,
    "lng": -34.8658848,
    "thesis": "Portal · 46 m² em Ernesto Geisel, pedido R$ 5.565/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46800851",
    "title": "Apartamento com 3 quartos à venda na Rua Professora Carmem de Araújo, 83, Castelo Branco, ",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Professora Carmem De Araújo, 83",
    "area": 81,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 639000,
    "condo": 729,
    "iptu": 3195,
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
    "lat": -7.138088,
    "lng": -34.8293482,
    "thesis": "Portal · 81 m² em Castelo Branco, pedido R$ 7.889/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46735950",
    "title": "Apartamento padrão à Venda, Castelo Branco, João Pessoa, PB",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Professora Carmem De Araújo, ",
    "area": 81,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 639900,
    "condo": 729,
    "iptu": 3200,
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
    "lat": -7.1298,
    "lng": -34.8421,
    "thesis": "Portal · 81 m² em Castelo Branco, pedido R$ 7.900/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "lat": -7.1322223211009,
    "lng": -34.840359302752,
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-42921767",
    "title": "Apartamento 70m² 3 quartos sendo 1 suíte no Castelo Branco à Venda",
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
    "lat": -7.13312,
    "lng": -34.8504,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46192129",
    "title": "Apartamento com 2 quartos à venda na Rua Euclides da Cunha, 33, Castelo Branco, João Pesso",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Euclides Da Cunha, 33",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 265000,
    "condo": 504,
    "iptu": 1325,
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
    "lat": -7.131066,
    "lng": -34.848942,
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 4.732/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 5.952/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 6.071/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "lat": -7.1322223211009,
    "lng": -34.840359302752,
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 11.250/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358454",
    "title": "Apartamento com 2 quartos à venda na Rua Onaldo da Silva Coutinho, Castelo Branco, João Pe",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Onaldo Da Silva Coutinho, ",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 200000,
    "condo": 360,
    "iptu": 1000,
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
    "lat": -7.1335461428571,
    "lng": -34.849563821429,
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 5.000/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "lat": -7.1335461428571,
    "lng": -34.849563821429,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-44530714",
    "title": "Apartamento com 4 quartos à venda na Rua Walfredo Melo, 2, Castelo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Walfredo Melo, 2",
    "area": 70,
    "rooms": 4,
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
    "lat": -7.13457,
    "lng": -34.85414,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358429",
    "title": "Apartamento com 2 quartos à venda na Rua Aírton Martins da Silva, 133, Castelo Branco, Joã",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Aírton Martins Da Silva, 133",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 215000,
    "condo": 405,
    "iptu": 1075,
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
    "lat": -7.13139,
    "lng": -34.84288,
    "thesis": "Portal · 45 m² em Castelo Branco, pedido R$ 4.778/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42921739",
    "title": "Apartamento 54m² 2 quartos sendo 1 suíte no Cristo Redentor à Venda",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 486,
    "iptu": 1900,
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
    "lat": -7.14596,
    "lng": -34.87712,
    "thesis": "Portal · 54 m² em Cristo Redentor, pedido R$ 7.037/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "lat": -7.1609127164869,
    "lng": -34.879130192604,
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 5.111/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 55 m² em Cristo Redentor, pedido R$ 4.000/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 43 m² em Cristo Redentor, pedido R$ 4.395/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45692733",
    "title": "Apartamento 3 quartos no cristo redentor - com projetados e reformado",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 72,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 289990,
    "condo": 648,
    "iptu": 1450,
    "seaMeters": 6400,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14956,
    "lng": -34.8746,
    "thesis": "Portal · 72 m² em Cristo Redentor, pedido R$ 4.028/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-46462457",
    "title": "Apartamento com 2 quartos à venda na Rua Felinto de Arruda Escolástico, Cristo Redentor, J",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Felinto De Arruda Escolástico, ",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 240000,
    "condo": 405,
    "iptu": 1200,
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
    "lat": -7.1567596238532,
    "lng": -34.878844183486,
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 5.333/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-40063417",
    "title": "Apartamento com 2 dormitórios à venda, 56 m² por R$ 299.896,00 - Cristo Redentor - João Pe",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Petrarca Grisi, 85",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 299896,
    "condo": 504,
    "iptu": 1499,
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
    "lat": -7.16527,
    "lng": -34.86793,
    "thesis": "Portal · 56 m² em Cristo Redentor, pedido R$ 5.355/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 64 m² em Cristo Redentor, pedido R$ 5.188/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-37673287",
    "title": "Apartamento com 2 quartos à venda no Cristo Redentor, João Pessoa",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 85,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 215000,
    "condo": 765,
    "iptu": 1075,
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
    "lat": -7.14908,
    "lng": -34.86752,
    "thesis": "Portal · 85 m² em Cristo Redentor, pedido R$ 2.529/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46038909",
    "title": "Cobertura com 2 quartos à venda na Rua Dom Bosco, Cristo Redentor, João Pessoa",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Dom Bosco, ",
    "area": 107,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 354900,
    "condo": 963,
    "iptu": 1775,
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
    "lat": -7.15321,
    "lng": -34.87843,
    "thesis": "Portal · 107 m² em Cristo Redentor, pedido R$ 3.317/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40366040",
    "title": "Apartamento semi-novo, completo com móveis na sala e armários na suíte e cozinha",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Presidente Carlos Luz, 712",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 398000,
    "condo": 585,
    "iptu": 1990,
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
    "lat": -7.1621018,
    "lng": -34.8741189,
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 6.123/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45256458",
    "title": "Apartamento para Venda em João Pessoa, Oitizeiro, 2 dormitórios, 1 suíte, 2 banheiros, 1 v",
    "type": "apto",
    "bairroId": "oitizeiro",
    "street": "Rua General Pedro Gonçalves De Medeiros, 183",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 125000,
    "condo": 441,
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
    "lat": -7.1515087628205,
    "lng": -34.904111846154,
    "thesis": "Portal · 49 m² em Oitizeiro, pedido R$ 2.551/m² contra 3.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 43 m² em Oitizeiro, pedido R$ 2.791/m² contra 3.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 43 m² em Oitizeiro, pedido R$ 2.791/m² contra 3.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 51 m² em Oitizeiro, pedido R$ 2.157/m² contra 3.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.458/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867218",
    "title": "Apartamento com 2 quartos à venda na Rua Desembargador João Santa Cruz de Oliveira, S/N, F",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Rua Desembargador João Santa Cruz De Oliveira, S/N",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 477,
    "iptu": 1100,
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
    "lat": -7.1795989444444,
    "lng": -34.884226979167,
    "thesis": "Portal · 53 m² em Funcionários, pedido R$ 4.151/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "lat": -7.1813418,
    "lng": -34.87966575,
    "thesis": "Portal · 64 m² em Funcionários, pedido R$ 4.375/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-39738137",
    "title": "Apartamento com 2 quartos à venda na Rua Luiz Carlos Alves, 53, Funcionários, João Pessoa",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Rua Luiz Carlos Alves, 53",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 140000,
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
    "lat": -7.18641,
    "lng": -34.89102,
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 2.800/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42669948",
    "title": "Apartamento de 2 quartos, 48m² no bairro Funcionários, em João Pessoa",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 190000,
    "condo": 432,
    "iptu": 950,
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
    "lat": -7.19744,
    "lng": -34.866240000000005,
    "thesis": "Portal · 48 m² em Funcionários, pedido R$ 3.958/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.273/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-39976434",
    "title": "Apartamento Térreo à Venda – Bairro Funcionários – João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Rua Cantor Nelson Gonçalves, 75",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 150000,
    "condo": 468,
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
    "lat": -7.18651,
    "lng": -34.88953,
    "thesis": "Portal · 52 m² em Funcionários, pedido R$ 2.885/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.525/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 3.051/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 48 m² em Funcionários, pedido R$ 3.125/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 47 m² em Funcionários, pedido R$ 3.447/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.098/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.460/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 43 m² em Funcionários, pedido R$ 3.767/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "lat": -7.123386,
    "lng": -34.8321484,
    "thesis": "Portal · 130 m² em Miramar, pedido R$ 8.077/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "ask": 680000,
    "condo": 1620,
    "iptu": 3400,
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
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 3.778/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45247805",
    "title": "Apartamento de 28m² no Miramar com vista, 1 vaga e infraestrutura completa por R$ 320 mil",
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
    "thesis": "Portal · 28 m² em Miramar, pedido R$ 11.429/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 9.161/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "lat": -7.121685,
    "lng": -34.83187,
    "thesis": "Portal · 120 m² em Miramar, pedido R$ 5.325/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1212479,
    "lng": -34.8327019,
    "thesis": "Portal · 60 m² em Miramar, pedido R$ 13.333/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "lat": -7.1218080962963,
    "lng": -34.835486125926,
    "thesis": "Portal · 121 m² em Miramar, pedido R$ 9.504/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46694147",
    "title": "Apartamento com 3 quartos à venda na Rua Jorge Faraj, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Jorge Faraj, ",
    "area": 74,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 649000,
    "condo": 666,
    "iptu": 3245,
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
    "lat": -7.11906,
    "lng": -34.84092,
    "thesis": "Portal · 74 m² em Miramar, pedido R$ 8.770/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-44537892",
    "title": "Apartamento com 1 dormitório à venda, 43 m² por R$ 577.830,00 - Miramar - João Pessoa/PB",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 43,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 577830,
    "condo": 387,
    "iptu": 2889,
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
    "lat": -7.12541,
    "lng": -34.83787,
    "thesis": "Portal · 43 m² em Miramar, pedido R$ 13.438/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289406",
    "title": "Apartamento com 3 quartos à venda no Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 71,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 639,
    "iptu": 3400,
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
    "lat": -7.12364,
    "lng": -34.867520000000006,
    "thesis": "Portal · 71 m² em Miramar, pedido R$ 9.577/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-38039406",
    "title": "Cobertura com 4 quartos à venda na Rua Paulo Franca Marinho, Esquina Com A Rua Hidelbrando",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Paulo Franca Marinho, Esquina Com A Rua Hidelbrando Tourinho, ",
    "area": 213,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1250000,
    "condo": 1917,
    "iptu": 6250,
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
    "lat": -7.1165774395604,
    "lng": -34.835120181319,
    "thesis": "Portal · 213 m² em Miramar, pedido R$ 5.869/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43160904",
    "title": "Apartamento para Venda em João Pessoa, Miramar, 3 dormitórios, 2 suítes, 3 banheiros, 2 va",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Avenida Tito Silva, 100",
    "area": 139,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1250000,
    "condo": 1251,
    "iptu": 6250,
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
    "lat": -7.12051,
    "lng": -34.83711,
    "thesis": "Portal · 139 m² em Miramar, pedido R$ 8.993/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-21742524",
    "title": "REF: AP031 - Apartamento à Venda, João Pessoa, Miramar, 3 suítes",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Mário Batista Júnior, 204",
    "area": 117,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1145000,
    "condo": 1053,
    "iptu": 5725,
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
    "lat": -7.1254692,
    "lng": -34.8359961,
    "thesis": "Portal · 117 m² em Miramar, pedido R$ 9.786/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-20823287",
    "title": "Apartamento com 1 dormitório à venda, 49 m² por R$ 452.548,00 - Miramar - João Pessoa/PB",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 49,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 452548,
    "condo": 441,
    "iptu": 2263,
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
    "lat": -7.12541,
    "lng": -34.83787,
    "thesis": "Portal · 49 m² em Miramar, pedido R$ 9.236/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45430756",
    "title": "Seu novo apartamento em João Pessoa em excelente localização e estrutura de lazer!",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 397000,
    "condo": 414,
    "iptu": 1985,
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
    "lat": -7.141,
    "lng": -34.85672,
    "thesis": "Portal · 46 m² em Treze de Maio, pedido R$ 8.630/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 9.267/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-47519542",
    "title": "More com conforto, segurança e lazer de clube! Plaza de Mayo: seu novo lar por apenas R$ 3",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 495,
    "iptu": 1750,
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
    "lat": -7.14448,
    "lng": -34.85192,
    "thesis": "Portal · 55 m² em Treze de Maio, pedido R$ 6.364/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-38525374",
    "title": "Apartamento com 3 quartos à venda na Rua Francisco Moura, 820, Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Francisco Moura, 820",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 702,
    "iptu": 1500,
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
    "lat": -7.10801,
    "lng": -34.86627,
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 3.846/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-42021568",
    "title": "Lançamento imperdível no bairro 13 de maio | apartamentos para venda a partir r$ 342.300,0",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Prefeito José De Carvalho, 99",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
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
    "lat": -7.10941,
    "lng": -34.86802,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "lat": -7.1095813908046,
    "lng": -34.867848643678,
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-44440434",
    "title": "Apartamento à venda com 3 quartos em Treze de Maio - João Pessoa - PB",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Capitão Francisco Moura, 820",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 270000,
    "condo": 702,
    "iptu": 1350,
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
    "lat": -7.107899,
    "lng": -34.866282,
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 3.462/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.112922,
    "lng": -34.864276,
    "thesis": "Portal · 54 m² em Treze de Maio, pedido R$ 8.333/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 7.949/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 8.300/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-40840482",
    "title": "Apartamento com 2 quartos à venda no Treze de Maio, João Pessoa",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 250000,
    "condo": 540,
    "iptu": 1250,
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
    "lat": -7.13764,
    "lng": -34.86836,
    "thesis": "Portal · 60 m² em Treze de Maio, pedido R$ 4.167/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 60 m² em Alto do Mateus, pedido R$ 3.000/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47174520",
    "title": "Apartamento com 3 quartos à venda na Rua Coronel Joca Velho, 500, Alto do Mateus, João Pes",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Rua Coronel Joca Velho, 500",
    "area": 102,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 918,
    "iptu": 1150,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.144048222222223,
    "lng": -34.909317333333334,
    "thesis": "Portal · 102 m² em Alto do Mateus, pedido R$ 2.255/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.142992,
    "lng": -34.907346,
    "thesis": "Portal · 56 m² em Alto do Mateus, pedido R$ 2.589/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 50 m² em Alto do Mateus, pedido R$ 3.600/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 48 m² em Alto do Mateus, pedido R$ 3.750/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 50 m² em Alto do Mateus, pedido R$ 4.400/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-47658223",
    "title": "Apartamento com 3 quartos à venda na Rua Santa Margarida, 87, Alto do Mateus, João Pessoa",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Rua Santa Margarida, 87",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 702,
    "iptu": 1100,
    "seaMeters": 6000,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.14063,
    "lng": -34.90866,
    "thesis": "Portal · 78 m² em Alto do Mateus, pedido R$ 2.821/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290344",
    "title": "Imóvel à venda em João Pessoa: Apartamento no Alto do Mateus - Oportunidade única!",
    "type": "apto",
    "bairroId": "alto-do-mateus",
    "street": "Alto do Mateus, João Pessoa",
    "area": 20,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 180,
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
    "lat": -7.11156,
    "lng": -34.88512,
    "thesis": "Portal · 20 m² em Alto do Mateus, pedido R$ 11.000/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 55 m² em Alto do Mateus, pedido R$ 3.636/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 55 m² em Alto do Mateus, pedido R$ 3.455/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 40 m² em Alto do Mateus, pedido R$ 3.250/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "ask": 185000,
    "condo": 495,
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
      "airbnb"
    ],
    "lat": -7.1779601,
    "lng": -34.9228082,
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.364/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1700815,
    "lng": -34.9192669,
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.745/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867195",
    "title": "Apartamento com 2 quartos à venda na Rua da Ação, S/N, Indústrias, João Pessoa",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Rua Da Ação, S/N",
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
    "lat": -7.17603,
    "lng": -34.91246,
    "thesis": "Portal · 41 m² em Indústrias, pedido R$ 5.244/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-36871157",
    "title": "Apartamento com 2 dormitórios à venda por R$ 166.000 - Indústrias - João Pessoa/Paraíba",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 166000,
    "condo": 423,
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
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 3.532/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45991924",
    "title": "Apartamento térreo no Bairro das Indústrias codigo: 362958",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Dos Diamantes, ",
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
    "lat": -7.1788793,
    "lng": -34.9189597,
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.000/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-46512858",
    "title": "Apartamento Térreo no Bairro das Industrias com 2 Quartos com Lazer",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Rua Dos Diamantes, 100",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 120000,
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
    "lat": -7.1706281,
    "lng": -34.9185944,
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.553/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867347",
    "title": "Apartamento com 2 quartos à venda na Rua do Desenvolvimento, S/N, Indústrias, João Pessoa",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Rua Do Desenvolvimento, S/N",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 180000,
    "condo": 630,
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
      "airbnb"
    ],
    "lat": -7.176956875,
    "lng": -34.918273375,
    "thesis": "Portal · 70 m² em Indústrias, pedido R$ 2.571/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 42 m² em Indústrias, pedido R$ 2.381/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 62 m² em Indústrias, pedido R$ 1.371/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 400 m² em Tambaú, pedido R$ 9.750/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46889662",
    "title": "Casa com 4 dormitórios à venda, 230 m² por R$ 1.800.000,00 - Tambaú - João Pessoa/PB",
    "type": "casa",
    "bairroId": "tambau",
    "street": "Avenida Izidro Gomes, 402",
    "area": 230,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1800000,
    "condo": 0,
    "iptu": 9000,
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
    "lat": -7.112626,
    "lng": -34.827677,
    "thesis": "Portal · 230 m² em Tambaú, pedido R$ 7.826/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 24 m² em Tambaú, pedido R$ 25.000/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.034/m² contra 10.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46952073",
    "title": "Casa com 3 dormitórios à venda, 150 m² por R$ 420.000,00 - Castelo Branco - João Pessoa/PB",
    "type": "casa",
    "bairroId": "castelo-branco",
    "street": "Castelo Branco, João Pessoa",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 420000,
    "condo": 0,
    "iptu": 2100,
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
    "lat": -7.1365167,
    "lng": -34.8431006,
    "thesis": "Portal · 150 m² em Castelo Branco, pedido R$ 2.800/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47211444",
    "title": "Casa com 2 quartos à venda na Rua Arnaldo Campelo, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Arnaldo Campelo, ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 90000,
    "condo": 0,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.2093,
    "lng": -34.851639999999996,
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 1.500/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 7.212/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-37130170",
    "title": "Casa Nova 4 Suítes no Portal do Sol — João Pessoa/PB | Luxo, Modernidade e Alto Padrão cod",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Irapuan Vasconcelos Leitão Da Cunha, ",
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
    "lat": -7.1523807,
    "lng": -34.8167579,
    "thesis": "Portal · 193 m² em Portal do Sol, pedido R$ 12.953/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 15.893/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 187 m² em Torre, pedido R$ 3.209/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 195 m² em Altiplano, pedido R$ 7.692/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47020527",
    "title": "MANAÍRA| VENDA| OPORTUNIDADE| COBERTURA DUPLEX | 116m²| VISTA MAR| PORTEIRA FECHADA| COBER",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Coronel Severino Lucena, ",
    "area": 116,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 980000,
    "condo": 0,
    "iptu": 4900,
    "seaMeters": 180,
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
    "lat": -7.1099702914573,
    "lng": -34.828159075377,
    "thesis": "Portal · 116 m² em Manaíra, pedido R$ 8.448/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "lat": -7.1209003174224,
    "lng": -34.827000448687,
    "thesis": "Portal · 256 m² em Cabo Branco, pedido R$ 12.109/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-40483667",
    "title": "Casa com localização privilegiada à venda – excelente para moradia ou investimento",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Rua Paulino Pinto, 359",
    "area": 340,
    "rooms": 5,
    "suites": 1,
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
    "lat": -7.1228226,
    "lng": -34.8287879,
    "thesis": "Portal · 340 m² em Cabo Branco, pedido R$ 7.938/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289544",
    "title": "Casa com 5 dormitórios à venda, 340 m² por R$ 2.699.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 340,
    "rooms": 5,
    "suites": 1,
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
    "lat": -7.12106,
    "lng": -34.83044,
    "thesis": "Portal · 340 m² em Cabo Branco, pedido R$ 7.938/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45322065",
    "title": "Flat com 1 dormitório à venda, 24 m² por R$ 440.101,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 24,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 440101,
    "condo": 216,
    "iptu": 2201,
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
    "lat": -7.1172200000000005,
    "lng": -34.8188,
    "thesis": "Portal · 24 m² em Cabo Branco, pedido R$ 18.338/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358206",
    "title": "Casa com 6 quartos à venda na Rua Paulino Pinto, Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Rua Paulino Pinto, ",
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
    "lat": -7.1212484539007,
    "lng": -34.829386021277,
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289547",
    "title": "Casa com localização privilegiada à venda – excelente para moradia ou investimento",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 340,
    "rooms": 5,
    "suites": 1,
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
    "lat": -7.1207,
    "lng": -34.83044,
    "thesis": "Portal · 340 m² em Cabo Branco, pedido R$ 7.938/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 32 m² em Cabo Branco, pedido R$ 19.063/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358366",
    "title": "Casa com 5 dormitórios à venda, 340 m² por R$ 2.699.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "casa",
    "bairroId": "cabo-branco",
    "street": "Rua Paulino Pinto, ",
    "area": 340,
    "rooms": 5,
    "suites": 1,
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
    "lat": -7.1212484539007,
    "lng": -34.829386021277,
    "thesis": "Portal · 340 m² em Cabo Branco, pedido R$ 7.938/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 18 m² em Cabo Branco, pedido R$ 21.944/m² contra 12.541 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-39214291",
    "title": "Casa Duplex em Manaíra – Conforto e Versatilidade em Localização Privilegiada",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Silvino Chaves, 604",
    "area": 300,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 849997,
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
    "lat": -7.10901,
    "lng": -34.83451,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 2.833/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 220 m² em Manaíra, pedido R$ 4.091/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-29505092",
    "title": "Casa com 3 dormitórios à venda, 179 m² por R$ 980.000,00 - Manaíra - João Pessoa/PB",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 179,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 980000,
    "condo": 0,
    "iptu": 4900,
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
    "lat": -7.10444,
    "lng": -34.82966,
    "thesis": "Portal · 179 m² em Manaíra, pedido R$ 5.475/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45471725",
    "title": "Casa com 3 quartos à venda no Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 20,
    "rooms": 3,
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
      "rua"
    ],
    "lat": -7.09928,
    "lng": -34.825919999999996,
    "thesis": "Portal · 20 m² em Manaíra, pedido R$ 42.500/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 208 m² em Manaíra, pedido R$ 4.087/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46696510",
    "title": "Flat com 1 dormitório à venda, 25 m² por R$ 400.000,00 - Manaíra - João Pessoa/PB",
    "type": "flat",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 25,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 400000,
    "condo": 225,
    "iptu": 2000,
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
    "lat": -7.10096,
    "lng": -34.83504,
    "thesis": "Portal · 25 m² em Manaíra, pedido R$ 16.000/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-39428808",
    "title": "Casa com 5 dormitórios à venda, 300 m² por R$ 790.000,00 - Manaíra - João Pessoa/PB",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Travessa Glaucia Maria Dos Santos Gouveia, ",
    "area": 300,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 790000,
    "condo": 0,
    "iptu": 3950,
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
    "lat": -7.108471,
    "lng": -34.838308666667,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 2.633/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-36789860",
    "title": "Casa para Venda em João Pessoa, Manaíra, 4 dormitórios, 4 suítes, 6 banheiros, 3 vagas",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Vigolvino Florentino Costa, 500",
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
    "lat": -7.1066105,
    "lng": -34.8387047,
    "thesis": "Portal · 373 m² em Manaíra, pedido R$ 3.217/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290397",
    "title": "Casa com 5 dormitórios à venda, 300 m² por R$ 790.000,00 - Manaíra - João Pessoa/PB",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 300,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 790000,
    "condo": 0,
    "iptu": 3950,
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
    "lng": -34.8378,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 2.633/m² contra 8.924 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46713127",
    "title": "Casa à venda 165m² - 3 Quartos - 1 Suíte - 3 Vagas - Bessa - João Pessoa, PB.",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 165,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 779900,
    "condo": 0,
    "iptu": 3900,
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
    "lat": -7.0725,
    "lng": -34.84724,
    "thesis": "Portal · 165 m² em Bessa, pedido R$ 4.727/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 240 m² em Bessa, pedido R$ 7.404/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 350 m² em Bessa, pedido R$ 5.686/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46525525",
    "title": "Casa Alto Padrão próximo a praia - 5 quartos + DCE - Suite com varanda - em Bessa, João Pe",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 201,
    "rooms": 5,
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
    "lat": -7.07214,
    "lng": -34.839439999999996,
    "thesis": "Portal · 201 m² em Bessa, pedido R$ 5.473/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47547004",
    "title": "Casa com 4 quartos à venda na Rua Artur Monteiro Paiva, 00, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Artur Monteiro Paiva, 00",
    "area": 360,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1400000,
    "condo": 0,
    "iptu": 7000,
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
    "lat": -7.06389,
    "lng": -34.84093,
    "thesis": "Portal · 360 m² em Bessa, pedido R$ 3.889/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43513005",
    "title": "Casa com 2 quartos à venda na Rua Presidente Venceslau Braz, 2, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Presidente Venceslau Braz, 2",
    "area": 115,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 840000,
    "condo": 0,
    "iptu": 4200,
    "seaMeters": 120,
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
    "lat": -7.0661082,
    "lng": -34.8393843,
    "thesis": "Portal · 115 m² em Bessa, pedido R$ 7.304/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "lat": -7.0656157777778,
    "lng": -34.847000786667,
    "thesis": "Portal · 360 m² em Bessa, pedido R$ 3.611/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47186179",
    "title": "Casa com 2 quartos à venda na Avenida Marechal Hermes da Fonseca, 941, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Avenida Marechal Hermes Da Fonseca, 941",
    "area": 82,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 120,
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
    "lat": -7.06767,
    "lng": -34.84659,
    "thesis": "Portal · 82 m² em Bessa, pedido R$ 5.488/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45322046",
    "title": "Flat de 22m² a 130m da Praia do Bessa com piscina, espaço gourmet e vaga rotativa",
    "type": "flat",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 22,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 375000,
    "condo": 198,
    "iptu": 1875,
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
    "lat": -7.06542,
    "lng": -34.83092,
    "thesis": "Portal · 22 m² em Bessa, pedido R$ 17.045/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289726",
    "title": "Casa com 4 quartos à venda no Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 200,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1890000,
    "condo": 0,
    "iptu": 9450,
    "seaMeters": 120,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.06698,
    "lng": -34.841359999999995,
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 9.450/m² contra 8.533 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-47051660",
    "title": "Casa com 4 quartos à venda na Rua João Navarro Filho, 48, Jardim Oceania, João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Rua João Navarro Filho, 48",
    "area": 360,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1400000,
    "condo": 0,
    "iptu": 7000,
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
    "lat": -7.08774,
    "lng": -34.83812,
    "thesis": "Portal · 360 m² em Jardim Oceania, pedido R$ 3.889/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46965801",
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
    "lat": -7.08468,
    "lng": -34.84348,
    "thesis": "Portal · 160 m² em Jardim Oceania, pedido R$ 10.000/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "title": "Casa com 4 quartos à venda na José Teotônio dos Santos, Jardim Oceania, João Pessoa, 363 m",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "José Teotônio Dos Santos, ",
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
    "lat": -7.0868132,
    "lng": -34.834916,
    "thesis": "Portal · 363 m² em Jardim Oceania, pedido R$ 5.510/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.0755441,
    "lng": -34.8415467,
    "thesis": "Portal · 99 m² em Jardim Oceania, pedido R$ 3.939/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40337109",
    "title": "Casa com 4 quartos à venda na Rua Ariosvaldo Alves de Azevedo, Jardim Oceania, João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Rua Ariosvaldo Alves De Azevedo, ",
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
    "lat": -7.0775,
    "lng": -34.83367,
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 25 m² em Jardim Oceania, pedido R$ 17.200/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.0811716756198,
    "lng": -34.833752628099,
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-47289512",
    "title": "Casa com 4 quartos à venda no Jardim Oceania, João Pessoa",
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
    "lat": -7.09248,
    "lng": -34.84084,
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 384 m² em Jardim Oceania, pedido R$ 8.333/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-30037731",
    "title": "Casa com 4 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 363,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1800000,
    "condo": 0,
    "iptu": 9000,
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
    "lat": -7.08648,
    "lng": -34.8382,
    "thesis": "Portal · 363 m² em Jardim Oceania, pedido R$ 4.959/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45322074",
    "title": "Flat mobiliado com vista mar em Jardim Oceania, pronto para locação por temporada",
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
    "thesis": "Portal · 27 m² em Jardim Oceania, pedido R$ 23.333/m² contra 10.872 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46960975",
    "title": "Casa no Altiplano com 3 Quartos sendo 1 Suíte, 5 Vagas, Terreno com 390m²",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Emílio De Araújo Chaves, 110",
    "area": 172,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1650000,
    "condo": 0,
    "iptu": 8250,
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
    "lat": -7.13671,
    "lng": -34.8278,
    "thesis": "Portal · 172 m² em Altiplano, pedido R$ 9.593/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-46980522",
    "title": "Casa ampla em excelente localização no Altiplano, na nova avenida que vai para o novo aces",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Severino Ennes De Atayde, 630",
    "area": 100,
    "rooms": 2,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.13666,
    "lng": -34.8336,
    "thesis": "Portal · 100 m² em Altiplano, pedido R$ 12.000/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-40186113",
    "title": "Casa com 4 quartos à venda na Rua Abelardo da Silva Guimarães Barreto, Altiplano Cabo Bran",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Abelardo Da Silva Guimarães Barreto, ",
    "area": 385,
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
    "lat": -7.1296245461538,
    "lng": -34.827973523077,
    "thesis": "Portal · 385 m² em Altiplano, pedido R$ 2.078/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289559",
    "title": "Casa à venda no altiplano nobre — totalmente reformada e pronta para financiar",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 20,
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
      "rua"
    ],
    "lat": -7.1282,
    "lng": -34.84614,
    "thesis": "Portal · 20 m² em Altiplano, pedido R$ 60.000/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-42477570",
    "title": "Casa térrea com 4 quartos, piscina e energia solar no Altiplano. Conforto, tecnologia e lo",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Sebastião Queiroz De Carvalho, 121",
    "area": 215,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1499998,
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
    "lat": -7.13538,
    "lng": -34.83416,
    "thesis": "Portal · 215 m² em Altiplano, pedido R$ 6.977/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-17430318",
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
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43896630",
    "title": "Casa com 4 quartos à venda na Rua Sebastião Queiroz de Carvalho, Altiplano Cabo Branco, Jo",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Sebastião Queiroz De Carvalho, ",
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
    "lat": -7.1379375,
    "lng": -34.8265406,
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-27673216",
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
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290373",
    "title": "Casa com 4 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 385,
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
    "lat": -7.1318,
    "lng": -34.846019999999996,
    "thesis": "Portal · 385 m² em Altiplano, pedido R$ 2.078/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289361",
    "title": "Luxuosa Casa de 295 m² à Venda no Altiplano Cabo Branco João Pessoa",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 295,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 3000000,
    "condo": 0,
    "iptu": 15000,
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
    "lat": -7.1273599999999995,
    "lng": -34.8471,
    "thesis": "Portal · 295 m² em Altiplano, pedido R$ 10.169/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1302665,
    "lng": -34.829837,
    "thesis": "Portal · 390 m² em Altiplano, pedido R$ 3.846/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 360 m² em Aeroclube, pedido R$ 4.167/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 260 m² em Aeroclube, pedido R$ 5.769/m² contra 9.066 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45579774",
    "title": "Casa ampla à venda em Brisamar – Conforto, espaço e versatilidade em localização privilegi",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "João Raposo Filho, ",
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
    "lat": -7.1152676,
    "lng": -34.8389609,
    "thesis": "Portal · 200 m² em Brisamar, pedido R$ 2.750/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290252",
    "title": "Casa com 3 quartos à venda no Brisamar, João Pessoa",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 320,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
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
    "lat": -7.08872,
    "lng": -34.854,
    "thesis": "Portal · 320 m² em Brisamar, pedido R$ 2.813/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289831",
    "title": "Casa com 4 dormitórios à venda, 348 m² por R$ 1.600.000,00 - Brisamar - João Pessoa/PB",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 348,
    "rooms": 4,
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
    "lat": -7.09124,
    "lng": -34.85208,
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-36433723",
    "title": "Ponto Comercial Bar e Restaurante | Brisamar | Ótima localização codigo: 119524",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Rua Juracy De Carvalho Luna, ",
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
    "lat": -7.116467,
    "lng": -34.838037,
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 4.167/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 3.533/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 1.875/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45329906",
    "title": "Casa com 4 quartos à venda na Rua Professor Francisco Oliveira Porto, 453, Brisamar, João ",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Rua Professor Francisco Oliveira Porto, 453",
    "area": 348,
    "rooms": 4,
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
    "lat": -7.114317,
    "lng": -34.841233,
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-39528801",
    "title": "Casa com 3 quartos à venda na Rua Doutor Jeová Lins, 14, Brisamar, João Pessoa",
    "type": "casa",
    "bairroId": "brisamar",
    "street": "Rua Doutor Jeová Lins, 14",
    "area": 320,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
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
    "lat": -7.1138,
    "lng": -34.83825,
    "thesis": "Portal · 320 m² em Brisamar, pedido R$ 2.813/m² contra 9.306 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1269551703704,
    "lng": -34.86074097037,
    "thesis": "Portal · 195 m² em Torre, pedido R$ 3.026/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1251421597633,
    "lng": -34.863846976331,
    "thesis": "Portal · 131 m² em Torre, pedido R$ 2.672/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290180",
    "title": "Casa com 3 quartos à venda no Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 20,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
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
    "lat": -7.119759999999999,
    "lng": -34.87068,
    "thesis": "Portal · 20 m² em Torre, pedido R$ 50.000/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-29786113",
    "title": "Casa com 5 quartos à venda na Avenida Aragão e Melo, 506, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Avenida Aragão E Melo, 506",
    "area": 263,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 950000,
    "condo": 0,
    "iptu": 4750,
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
    "lat": -7.123676,
    "lng": -34.862315,
    "thesis": "Portal · 263 m² em Torre, pedido R$ 3.612/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45425294",
    "title": "Casa com 3 quartos à venda no Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 20,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
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
    "lat": -7.123119999999999,
    "lng": -34.865159999999996,
    "thesis": "Portal · 20 m² em Torre, pedido R$ 50.000/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 399 m² em Torre, pedido R$ 3.885/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 30 m² em Torre, pedido R$ 4.000/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 385 m² em Torre, pedido R$ 1.636/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46517843",
    "title": "TORRE - Casa com 3 quartos sendo 1 suíte, 2 salas, garagens para 4 carros e uma grande opo",
    "type": "casa",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 400,
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
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 400 m² em Torre, pedido R$ 1.500/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-14168277",
    "title": "Casa com 6 dormitórios à venda por R$ 1.300.000,00 - Bancários - João Pessoa/PB",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 330,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1300000,
    "condo": 0,
    "iptu": 6500,
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
    "thesis": "Portal · 330 m² em Bancários, pedido R$ 3.939/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-44753494",
    "title": "Casa com 3 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 830000,
    "condo": 0,
    "iptu": 4150,
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
    "lat": -7.14828,
    "lng": -34.85452,
    "thesis": "Portal · 90 m² em Bancários, pedido R$ 9.222/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 97 m² em Bancários, pedido R$ 9.227/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 148 m² em Bancários, pedido R$ 5.338/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-47289763",
    "title": "Casa com 6 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 20,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1250000,
    "condo": 0,
    "iptu": 6250,
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
    "lat": -7.1514,
    "lng": -34.858959999999996,
    "thesis": "Portal · 20 m² em Bancários, pedido R$ 62.500/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-33589727",
    "title": "Casa para Venda em João Pessoa, Bancários, 3 dormitórios, 3 suítes, 5 banheiros, 4 vagas",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Radialista Antônio Assunção, 1275",
    "area": 195,
    "rooms": 3,
    "suites": 1,
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
    "thesis": "Portal · 195 m² em Bancários, pedido R$ 10.718/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46153358",
    "title": "Casa com 3 quartos à venda na Rua Radialista Antônio Assunção, 1275, Bancários, João Pesso",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Radialista Antônio Assunção, 1275",
    "area": 186,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2350000,
    "condo": 0,
    "iptu": 11750,
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
    "thesis": "Portal · 186 m² em Bancários, pedido R$ 12.634/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-34573160",
    "title": "Condominio Reserva do Atlantico - Casa Alto Padrão no Reserva do Atlantico / Jd Cidade Uni",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Radialista Antônio Assunção De Jesus, 1275",
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
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 11.000/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-36433712",
    "title": "Casa com 4 quartos à venda na Rua Rejane Freire Correia, Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Rua Rejane Freire Correia, ",
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
    "lat": -7.1460895,
    "lng": -34.837581,
    "thesis": "Portal · 384 m² em Bancários, pedido R$ 2.214/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42258123",
    "title": "Oportunidade: Casa com Piscina e 3 Quartos – Casa dos Bancários",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 270,
    "rooms": 3,
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
    "lat": -7.146,
    "lng": -34.851279999999996,
    "thesis": "Portal · 270 m² em Bancários, pedido R$ 2.926/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290075",
    "title": "Casa térrea de altíssimo padrão no Reserva do Atlântico, com 3 suítes, piscina",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 190,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2350000,
    "condo": 0,
    "iptu": 11750,
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
    "lat": -7.149,
    "lng": -34.86136,
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 12.368/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 320 m² em Bancários, pedido R$ 2.313/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289675",
    "title": "Casa com 3 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 190,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2190000,
    "condo": 0,
    "iptu": 10950,
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
    "lat": -7.15308,
    "lng": -34.85944,
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 11.526/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "lat": -7.144432,
    "lng": -34.847314,
    "thesis": "Portal · 330 m² em Bancários, pedido R$ 2.273/m² contra 6.255 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47289757",
    "title": "Casa com 3 quartos à venda no Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 20,
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
      "rua"
    ],
    "lat": -7.123679999999999,
    "lng": -34.86036,
    "thesis": "Portal · 20 m² em Estados, pedido R$ 30.000/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-36474833",
    "title": "Casa Triplex Moderna com Varanda Gourmet e Jacuzzi no Bairro dos Estados – João Pessoa/PB",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 148,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 690000,
    "condo": 0,
    "iptu": 3450,
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
    "thesis": "Portal · 148 m² em Estados, pedido R$ 4.662/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-44876369",
    "title": "Casa 306m² 3 quartos sendo 2 suítes no Bairro dos Estados à Venda",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 306,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
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
    "lat": -7.11432,
    "lng": -34.85664,
    "thesis": "Portal · 306 m² em Estados, pedido R$ 3.268/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290358",
    "title": "Casa com 3 quartos à venda no Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 240,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 800000,
    "condo": 0,
    "iptu": 4000,
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
    "lat": -7.117319999999999,
    "lng": -34.86132,
    "thesis": "Portal · 240 m² em Estados, pedido R$ 3.333/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1119306,
    "lng": -34.8591663,
    "thesis": "Portal · 170 m² em Estados, pedido R$ 3.824/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 217 m² em Estados, pedido R$ 3.456/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "title": "Casa com 3 quartos à venda na Rua Oswaldo Evaristo da Costa, --, Estados, João Pessoa",
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
    "thesis": "Portal · 306 m² em Estados, pedido R$ 4.248/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358440",
    "title": "Casa com 3 quartos à venda na Avenida Espírito Santo, 211, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Avenida Espírito Santo, 211",
    "area": 240,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 800000,
    "condo": 0,
    "iptu": 4000,
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
    "lat": -7.11354,
    "lng": -34.85902,
    "thesis": "Portal · 240 m² em Estados, pedido R$ 3.333/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 335 m² em Estados, pedido R$ 3.881/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 300 m² em Estados, pedido R$ 4.167/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43255672",
    "title": "Casa com 3 dormitórios à venda, 268 m² por R$ 750.000,00 - Bairro dos Estados - João Pesso",
    "type": "casa",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 268,
    "rooms": 3,
    "suites": 0,
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
    "thesis": "Portal · 268 m² em Estados, pedido R$ 2.799/m² contra 6.791 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 218 m² em Expedicionários, pedido R$ 3.440/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 201 m² em Expedicionários, pedido R$ 2.239/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 160 m² em Expedicionários, pedido R$ 3.750/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.455/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "ask": 1559000,
    "condo": 0,
    "iptu": 7795,
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
    "lat": -7.128644,
    "lng": -34.855719,
    "thesis": "Portal · 399 m² em Expedicionários, pedido R$ 3.907/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1618,
    "lng": -34.91109,
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.815/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46462155",
    "title": "Casa à venda com 3 quartos no bairro dos Expedicionários - João Pessoa - PB",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Rua Escritor José Vieira, 325",
    "area": 300,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 700000,
    "condo": 0,
    "iptu": 3500,
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
    "lat": -7.126534,
    "lng": -34.8539354,
    "thesis": "Portal · 300 m² em Expedicionários, pedido R$ 2.333/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1261707,
    "lng": -34.8543145,
    "thesis": "Portal · 170 m² em Expedicionários, pedido R$ 4.706/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "title": "Casa com 3 dormitórios à venda por R$ 750.000,00 - Expedicionários - João Pessoa/PB",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Expedicionários, João Pessoa",
    "area": 325,
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
    "lat": -7.12326,
    "lng": -34.85332,
    "thesis": "Portal · 325 m² em Expedicionários, pedido R$ 2.308/m² contra 5.987 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43876365",
    "title": "CASA A VENDA PARA COMERCIO OU MORADIA NO CENTRO DE JOAO PESSOA codigo: 346596",
    "type": "casa",
    "bairroId": "centro",
    "street": "Índio Piragibe, ",
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
    "lat": -7.1195614,
    "lng": -34.8817282,
    "thesis": "Portal · 320 m² em Centro, pedido R$ 1.094/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1176113,
    "lng": -34.877446928571,
    "thesis": "Portal · 191 m² em Centro, pedido R$ 5.759/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 190 m² em Centro, pedido R$ 2.632/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358146",
    "title": "Casa com 3 dormitórios à venda, 180 m² por R$ 450.000 - Centro - João Pessoa/PB",
    "type": "casa",
    "bairroId": "centro",
    "street": "Rua Pereira Da Silva, 36",
    "area": 180,
    "rooms": 3,
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
    "lat": -7.1225,
    "lng": -34.87106,
    "thesis": "Portal · 180 m² em Centro, pedido R$ 2.500/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-38584536",
    "title": "Casa com 3 quartos à venda na Rua Professora Alice Azevedo, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Rua Professora Alice Azevedo, ",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
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
    "lat": -7.1241813773585,
    "lng": -34.883164,
    "thesis": "Portal · 200 m² em Centro, pedido R$ 2.750/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 297 m² em Centro, pedido R$ 1.549/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 196 m² em Centro, pedido R$ 2.041/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1207852714286,
    "lng": -34.877763857143,
    "thesis": "Portal · 333 m² em Centro, pedido R$ 5.856/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "lat": -7.1179428823529,
    "lng": -34.881316627451,
    "thesis": "Portal · 98 m² em Centro, pedido R$ 34.694/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-47313555",
    "title": "Casa com 5 quartos à venda na Travessa da Reitoria, Centro, João Pessoa",
    "type": "casa",
    "bairroId": "centro",
    "street": "Travessa Da Reitoria, ",
    "area": 200,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 650000,
    "condo": 0,
    "iptu": 3250,
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
    "lat": -7.12006,
    "lng": -34.87778,
    "thesis": "Portal · 200 m² em Centro, pedido R$ 3.250/m² contra 4.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45425287",
    "title": "Casa com 4 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 170,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1540000,
    "condo": 0,
    "iptu": 7700,
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
    "lat": -7.154920000000001,
    "lng": -34.84276,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.059/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-47373099",
    "title": "Casa Nova e Automatizada com 4 Suítes, Piscina e Espaço Gourmet – Pronta para Morar. Porta",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "General Francisco De Assis Araújo Bezerra, ",
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
    "lat": -7.1523807,
    "lng": -34.8167579,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.353/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 197 m² em Portal do Sol, pedido R$ 7.563/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-47289677",
    "title": "Lançamento – casas de alto padrão para vendaem condomínio fechado | portal do sol | joão p",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 182,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2176942,
    "condo": 0,
    "iptu": 10885,
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
    "lng": -34.84684,
    "thesis": "Portal · 182 m² em Portal do Sol, pedido R$ 11.961/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 270 m² em Portal do Sol, pedido R$ 5.370/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-38584556",
    "title": "Casa com 4 quartos à venda na Rua Arnaud dos Anjos Brandão, Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Arnaud Dos Anjos Brandão, ",
    "area": 190,
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
    "lat": -7.1476205925926,
    "lng": -34.820076037037,
    "thesis": "Portal · 190 m² em Portal do Sol, pedido R$ 8.158/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-40359587",
    "title": "CASA TÉRREO COM 170m² A VENDA NO BAIRRO PORTAL DO SOL EM JOÃO PESSOA / PB",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 170,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1540000,
    "condo": 0,
    "iptu": 7700,
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
    "lat": -7.15828,
    "lng": -34.84852,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.059/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-43813973",
    "title": "Casa para Venda em João Pessoa, Portal do Sol, 4 dormitórios, 1 suíte, 4 banheiros, 4 vaga",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Avenida Governador Antônio Da Silva Mariz, 100",
    "area": 180,
    "rooms": 4,
    "suites": 0,
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
      "preco",
      "rua"
    ],
    "lat": -7.1595879,
    "lng": -34.818997,
    "thesis": "Portal · 180 m² em Portal do Sol, pedido R$ 5.000/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-40756540",
    "title": "Casa com 4 dormitórios à venda, 250 m² por R$ 850.000,00 - Portal do Sol - João Pessoa/PB",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 250,
    "rooms": 4,
    "suites": 0,
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
      "preco",
      "rua"
    ],
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 250 m² em Portal do Sol, pedido R$ 3.400/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42632167",
    "title": "Casa com 5 quartos à venda na Rua Vereador João Gonçalves De Abrantes, 446, Portal do Sol,",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Vereador João Gonçalves De Abrantes, 446",
    "area": 270,
    "rooms": 5,
    "suites": 0,
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
    "lat": -7.1467,
    "lng": -34.8166,
    "thesis": "Portal · 270 m² em Portal do Sol, pedido R$ 5.370/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-42875108",
    "title": "Casa com 5 quartos à venda na Rua Zilda Nunes da Silva, 100, Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Zilda Nunes Da Silva, 100",
    "area": 384,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1650000,
    "condo": 0,
    "iptu": 8250,
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
    "lat": -7.14924,
    "lng": -34.82302,
    "thesis": "Portal · 384 m² em Portal do Sol, pedido R$ 4.297/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867212",
    "title": "Casa com 4 quartos à venda na Rua Hermano Ferreira Soares, 292, Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Hermano Ferreira Soares, 292",
    "area": 270,
    "rooms": 4,
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
      "preco",
      "rua"
    ],
    "lat": -7.14509,
    "lng": -34.81966,
    "thesis": "Portal · 270 m² em Portal do Sol, pedido R$ 2.593/m² contra 5.722 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 300 m² em Jd. Cidade Universitária, pedido R$ 2.333/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40001814",
    "title": "Casa com 3 dormitórios à venda, 270 m² por R$ 890.000 - Bairro dos Estados- João Pessoa/PB",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 100,
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
    "lat": -7.15514,
    "lng": -34.83858,
    "thesis": "Portal · 100 m² em Jd. Cidade Universitária, pedido R$ 8.900/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 190 m² em Jd. Cidade Universitária, pedido R$ 12.053/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 200 m² em Jd. Cidade Universitária, pedido R$ 3.450/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 148 m² em Jd. Cidade Universitária, pedido R$ 5.338/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 202 m² em Jd. Cidade Universitária, pedido R$ 4.703/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-30440029",
    "title": "Casa com 5 quartos à venda na Rua Radialista Antônio Assunção de Jesus, 1, Jardim Cidade U",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Radialista Antônio Assunção De Jesus, 1",
    "area": 360,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2798997,
    "condo": 0,
    "iptu": 13995,
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
    "lat": -7.1529,
    "lng": -34.8321,
    "thesis": "Portal · 360 m² em Jd. Cidade Universitária, pedido R$ 7.775/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-43238338",
    "title": "Casa com 5 suítes | em joão pessoa | jd cidade universitária r$ 1.395.000",
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
    "thesis": "Portal · 326 m² em Jd. Cidade Universitária, pedido R$ 4.279/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42921598",
    "title": "Casa 190m² 3 quartos sendo 3 suítes no Cond. Reserva do Atlântico à Venda",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 190,
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
    "lat": -7.14588,
    "lng": -34.84736,
    "thesis": "Portal · 190 m² em Jd. Cidade Universitária, pedido R$ 12.368/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 99 m² em Jd. Cidade Universitária, pedido R$ 8.990/m² contra 5.856 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40276383",
    "title": "Casa com 2 quartos à venda no Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 235000,
    "condo": 0,
    "iptu": 1175,
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
    "lat": -7.21626,
    "lng": -34.85308,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 4.700/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-46324243",
    "title": "Casa com 2 quartos à venda na Rua Professora Alice Mendes da Nóbrega, 100, Gramame, João P",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Professora Alice Mendes Da Nóbrega, 100",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 229900,
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
    "lat": -7.2227,
    "lng": -34.84514,
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.180/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-46435018",
    "title": "Casa com 2 quartos à venda na Rua Capitão Eustáquio Alves Bezerra, 28, Gramame, João Pesso",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Capitão Eustáquio Alves Bezerra, 28",
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
    "lat": -7.1993,
    "lng": -34.87543,
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 4.107/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.000/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-47289656",
    "title": "Casa com 2 quartos à venda no Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 20,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 290000,
    "condo": 0,
    "iptu": 1450,
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
    "lat": -7.21458,
    "lng": -34.84684,
    "thesis": "Portal · 20 m² em Gramame, pedido R$ 14.500/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-38864007",
    "title": "Casa com 3 Quartos, Suíte e Área Externa Coberta – Conforto, Segurança e Ótimo Aproveitame",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 250000,
    "condo": 0,
    "iptu": 1250,
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
    "lat": -7.2158999999999995,
    "lng": -34.83892,
    "thesis": "Portal · 73 m² em Gramame, pedido R$ 3.425/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-40259675",
    "title": "Casa com 2 quartos à venda na Rua Santa Terezinha do Menino Jesus, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Santa Terezinha Do Menino Jesus, ",
    "area": 63,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 159000,
    "condo": 0,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.2086416857143,
    "lng": -34.856953085714,
    "thesis": "Portal · 63 m² em Gramame, pedido R$ 2.524/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.436/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "lat": -7.1966465,
    "lng": -34.881342884615,
    "thesis": "Portal · 49 m² em Gramame, pedido R$ 4.490/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-40371384",
    "title": "Casa com 2 dormitórios à venda por R$ 220.000 - Gramame - João Pessoa/PB",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 100,
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
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 100 m² em Gramame, pedido R$ 2.200/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.606/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-47335864",
    "title": "Vendo casa beira mar em João Pessoa com 2 quartos, 4 vagas, terreno 13*30",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Praia Abiaí, s/n",
    "area": 95,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 200000,
    "condo": 0,
    "iptu": 1000,
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
    "lat": -7.18298,
    "lng": -34.81245,
    "thesis": "Portal · 95 m² em Mangabeira, pedido R$ 2.105/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1690506,
    "lng": -34.8330063,
    "thesis": "Portal · 200 m² em Mangabeira, pedido R$ 1.750/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-43007829",
    "title": "Casa com 4 quartos à venda na Mangabeira Vi, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira Vi, ",
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
    "lat": -7.1759102,
    "lng": -34.834821,
    "thesis": "Portal · 270 m² em Mangabeira, pedido R$ 2.407/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-35275481",
    "title": "Casa com piscina em Mangabeira 3 quartos a 15 minutos das praias cabo branco",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 109,
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
    "lat": -7.17664,
    "lng": -34.8542,
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.881/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46057054",
    "title": "Casa com 2 quartos à venda na Rua Josefa Taveira, Mangabeira, João Pessoa",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Josefa Taveira, ",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 240000,
    "condo": 0,
    "iptu": 1200,
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
    "lat": -7.17011,
    "lng": -34.83873,
    "thesis": "Portal · 65 m² em Mangabeira, pedido R$ 3.692/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45912609",
    "title": "Casa com 3 quartos à venda no Mangabeira, João Pessoa",
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
    "lat": -7.17268,
    "lng": -34.85024,
    "thesis": "Portal · 98 m² em Mangabeira, pedido R$ 4.898/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-14985731",
    "title": "Casa com 3 dormitórios à venda por R$ 350.000,00 - Mangabeira - João Pessoa/PB",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 160,
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
    "thesis": "Portal · 160 m² em Mangabeira, pedido R$ 2.188/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1751601,
    "lng": -34.8317997,
    "thesis": "Portal · 130 m² em Mangabeira, pedido R$ 1.308/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 98 m² em Mangabeira, pedido R$ 4.898/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45867149",
    "title": "Casa com 2 quartos à venda na Rua Severina Cézar Pessoa de Araújo, CS 103, Mangabeira, Joã",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Severina Cézar Pessoa De Araújo, CS 103",
    "area": 75,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 165000,
    "condo": 0,
    "iptu": 825,
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
    "lat": -7.18397,
    "lng": -34.84003,
    "thesis": "Portal · 75 m² em Mangabeira, pedido R$ 2.200/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1355634,
    "lng": -34.8831611,
    "thesis": "Portal · 290 m² em Cruz das Armas, pedido R$ 1.966/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42899112",
    "title": "Casa com 4 quartos à venda na Rua São Benedito, 51, Cruz das Armas, João Pessoa",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Rua São Benedito, 51",
    "area": 300,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 390000,
    "condo": 0,
    "iptu": 1950,
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
    "lat": -7.154362,
    "lng": -34.894453,
    "thesis": "Portal · 300 m² em Cruz das Armas, pedido R$ 1.300/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867179",
    "title": "Casa com 4 quartos à venda na Avenida Alcides Bezerra, 62, Cruz das Armas, João Pessoa",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Avenida Alcides Bezerra, 62",
    "area": 75,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
    "seaMeters": 5600,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.13786,
    "lng": -34.88698,
    "thesis": "Portal · 75 m² em Cruz das Armas, pedido R$ 6.000/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-46711957",
    "title": "Casa com 3 quartos à venda na Avenida Centenário, 900, Cruz das Armas, João Pessoa",
    "type": "casa",
    "bairroId": "cruz-das-armas",
    "street": "Avenida Centenário, 900",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 300000,
    "condo": 0,
    "iptu": 1500,
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
    "lat": -7.14417,
    "lng": -34.890379,
    "thesis": "Portal · 80 m² em Cruz das Armas, pedido R$ 3.750/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "lat": -7.14676,
    "lng": -34.88513,
    "thesis": "Portal · 128 m² em Cruz das Armas, pedido R$ 2.500/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 190 m² em Cruz das Armas, pedido R$ 3.421/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 56 m² em Cruz das Armas, pedido R$ 5.179/m² contra 4.100 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-47219685",
    "title": "Casa com 3 quartos à venda na Rua Santa Clara de Assis, 195, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Santa Clara De Assis, 195",
    "area": 93,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 510000,
    "condo": 0,
    "iptu": 2550,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.18633,
    "lng": -34.87221,
    "thesis": "Portal · 93 m² em Ernesto Geisel, pedido R$ 5.484/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45753687",
    "title": "Casa na melhor localização do Geisel com 2 quartos - pertinho de tudo",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
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
    "lat": -7.16564,
    "lng": -34.865719999999996,
    "thesis": "Portal · 65 m² em Ernesto Geisel, pedido R$ 5.385/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 56 m² em Ernesto Geisel, pedido R$ 4.732/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43322685",
    "title": "Casa com 5 quartos à venda na Severina Vicente Pereira, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Severina Vicente Pereira, ",
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
    "lat": -7.179641,
    "lng": -34.8706935,
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 2.653/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46658359",
    "title": "Casa com 3 quartos à venda na Rua Adison Pereira da Silva, 87, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Adison Pereira Da Silva, 87",
    "area": 180,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 510000,
    "condo": 0,
    "iptu": 2550,
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
    "lat": -7.18617,
    "lng": -34.87311,
    "thesis": "Portal · 180 m² em Ernesto Geisel, pedido R$ 2.833/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-44703536",
    "title": "Casa com 2 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 380000,
    "condo": 0,
    "iptu": 1900,
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
    "lat": -7.15952,
    "lng": -34.861399999999996,
    "thesis": "Portal · 60 m² em Ernesto Geisel, pedido R$ 6.333/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-47248208",
    "title": "Casa com 3 quartos à venda na Rua Santa Clara de Assis, 195, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Santa Clara De Assis, 195",
    "area": 93,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 510000,
    "condo": 0,
    "iptu": 2550,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "rua"
    ],
    "lat": -7.1870759,
    "lng": -34.8722298,
    "thesis": "Portal · 93 m² em Ernesto Geisel, pedido R$ 5.484/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "lat": -7.1856117,
    "lng": -34.8752051,
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-47190871",
    "title": "Casa com 3 quartos à venda na Rua Aracy Rodrigues Moura, Sn, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Aracy Rodrigues Moura, Sn",
    "area": 125,
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
    "lat": -7.17753,
    "lng": -34.86554,
    "thesis": "Portal · 125 m² em Ernesto Geisel, pedido R$ 3.200/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-12819107",
    "title": "Casa com 4 dormitórios à venda, 200 m² por R$ 1.000.000,00 - Novo Geisel - João Pessoa/PB",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 200,
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
      "rua"
    ],
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 200 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 160 m² em Ernesto Geisel, pedido R$ 2.488/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46827224",
    "title": "Casa com 3 quartos à venda na Rua Valdemar Naziazeno, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Valdemar Naziazeno, ",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
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
    "lat": -7.18031,
    "lng": -34.87372,
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 2.333/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-40962618",
    "title": "Casa com 2 quartos Bairro do Geisel aceita financiamento localização excelente",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 380000,
    "condo": 0,
    "iptu": 1900,
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
    "lat": -7.1648,
    "lng": -34.87184,
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 6.667/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46465552",
    "title": "Casa aconchegante com piscina à venda no Geisel codigo: 367133",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Deputado Petrônio Figueiredo, ",
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
    "lat": -7.179641,
    "lng": -34.8706935,
    "thesis": "Portal · 135 m² em Ernesto Geisel, pedido R$ 2.889/m² contra 4.700 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1307061056338,
    "lng": -34.841697943662,
    "thesis": "Portal · 200 m² em Castelo Branco, pedido R$ 2.200/m² contra 5.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 247 m² em Cristo Redentor, pedido R$ 1.660/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-42840523",
    "title": "Excelente casa a venda no bairro do cristo redentor em joão pessoa / pb",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 178,
    "rooms": 3,
    "suites": 1,
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
      "preco",
      "rua"
    ],
    "lat": -7.14896,
    "lng": -34.88624,
    "thesis": "Portal · 178 m² em Cristo Redentor, pedido R$ 3.371/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-7594381",
    "title": "Casa com 2 dormitórios à venda por R$ 160.000,00 - Cristo Redentor - João Pessoa/PB",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 160000,
    "condo": 0,
    "iptu": 800,
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
    "thesis": "Portal · 70 m² em Cristo Redentor, pedido R$ 2.286/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1537242971014,
    "lng": -34.875143724638,
    "thesis": "Portal · 105 m² em Cristo Redentor, pedido R$ 5.714/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46391200",
    "title": "• oportunidade no cristo redentor – casa com suíte | financiável | possibilidade de zero d",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 96,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 220000,
    "condo": 0,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.14164,
    "lng": -34.8842,
    "thesis": "Portal · 96 m² em Cristo Redentor, pedido R$ 2.292/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-38039578",
    "title": "Casa com 3 quartos à venda na Rua Professora Luiza Fernandes Vieira, Cristo Redentor, João",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Professora Luiza Fernandes Vieira, ",
    "area": 161,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 470000,
    "condo": 0,
    "iptu": 2350,
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
    "lat": -7.168036,
    "lng": -34.868047575758,
    "thesis": "Portal · 161 m² em Cristo Redentor, pedido R$ 2.919/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46155921",
    "title": "Casa no Cristo Redentor Avenida Raniere Mazilli otimo para ponto comercial",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 350,
    "rooms": 6,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1250000,
    "condo": 0,
    "iptu": 6250,
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
    "lat": -7.1502799999999995,
    "lng": -34.88456,
    "thesis": "Portal · 350 m² em Cristo Redentor, pedido R$ 3.571/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 160 m² em Cristo Redentor, pedido R$ 1.938/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-44282196",
    "title": "Casa no Cristo com 4 Quartos sendo 1 Suíte, Próximo ao Almeidão",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Professora Luiza Fernandes Vieira, 100",
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
    "lat": -7.16146,
    "lng": -34.87501,
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47290255",
    "title": "Casa com 2 quartos à venda no Oitizeiro, João Pessoa",
    "type": "casa",
    "bairroId": "oitizeiro",
    "street": "Oitizeiro, João Pessoa",
    "area": 20,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 900000,
    "condo": 0,
    "iptu": 4500,
    "seaMeters": 7800,
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
    "lat": -7.20576,
    "lng": -34.8834,
    "thesis": "Portal · 20 m² em Oitizeiro, pedido R$ 45.000/m² contra 3.500 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46951526",
    "title": "Casa com 3 dormitórios à venda por R$ 330.000 - Funcionários II - João Pessoa/PB",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 60,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 330000,
    "condo": 0,
    "iptu": 1650,
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
    "lat": -7.1817426,
    "lng": -34.8858658,
    "thesis": "Portal · 60 m² em Funcionários, pedido R$ 5.500/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-43828213",
    "title": "Casa com 2 quartos à venda na Rua Presidente Médici, 476, Funcionários, João Pessoa",
    "type": "casa",
    "bairroId": "funcionarios",
    "street": "Rua Presidente Médici, 476",
    "area": 69,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 180000,
    "condo": 0,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.18448,
    "lng": -34.88793,
    "thesis": "Portal · 69 m² em Funcionários, pedido R$ 2.609/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 279 m² em Funcionários, pedido R$ 1.434/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 110 m² em Funcionários, pedido R$ 3.818/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 180 m² em Funcionários, pedido R$ 1.389/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 1.833/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 5.167/m² contra 4.000 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 147 m² em Miramar, pedido R$ 6.122/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "lat": -7.1227081315789,
    "lng": -34.838671684211,
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 3.750/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1210594915254,
    "lng": -34.836066254237,
    "thesis": "Portal · 170 m² em Miramar, pedido R$ 5.765/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1234898,
    "lng": -34.8366028,
    "thesis": "Portal · 392 m² em Miramar, pedido R$ 3.291/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-37358453",
    "title": "Casa com 3 quartos à venda na Avenida Mandacaru, 290, Treze de Maio, João Pessoa",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Avenida Mandacaru, 290",
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
    "lat": -7.10794,
    "lng": -34.86918,
    "thesis": "Portal · 330 m² em Treze de Maio, pedido R$ 2.091/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 80 m² em Treze de Maio, pedido R$ 3.750/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "lat": -7.1085727,
    "lng": -34.8682857,
    "thesis": "Portal · 120 m² em Treze de Maio, pedido R$ 4.375/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-47289889",
    "title": "Casa com Terraço Amplo e 3 dormitórios no Bairro Treze de Maio João Pessoa",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
    "area": 20,
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
      "rua"
    ],
    "lat": -7.1384799999999995,
    "lng": -34.86356,
    "thesis": "Portal · 20 m² em Treze de Maio, pedido R$ 29.500/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45471709",
    "title": "Casa com 3 quartos à venda no Treze de Maio, João Pessoa",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Treze de Maio, João Pessoa",
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
    "lat": -7.13872,
    "lng": -34.85312,
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-47467716",
    "title": "Casa super bem localizada no bairro 13 de maio codigo: 383921",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Francisco Moura, ",
    "area": 175,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
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
    "lat": -7.1129061,
    "lng": -34.8665552,
    "thesis": "Portal · 175 m² em Treze de Maio, pedido R$ 2.000/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45624406",
    "title": "Casa à venda, 220 m² por R$ 589.998,00 - Treze de Maio - João Pessoa/PB",
    "type": "casa",
    "bairroId": "treze-de-maio",
    "street": "Rua José Mesquita, 103",
    "area": 220,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 589998,
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
    "lat": -7.10915,
    "lng": -34.86926,
    "thesis": "Portal · 220 m² em Treze de Maio, pedido R$ 2.682/m² contra 5.200 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 378 m² em Alto do Mateus, pedido R$ 661/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 200 m² em Alto do Mateus, pedido R$ 2.000/m² contra 3.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-46758600",
    "title": "Casa com 2 dormitórios à venda por R$ 230.000 - Bairro das Indústrias - João Pessoa/PB",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 230000,
    "condo": 0,
    "iptu": 1150,
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
    "lat": -7.1788793,
    "lng": -34.9189597,
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 4.182/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 100 m² em Indústrias, pedido R$ 1.600/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867123",
    "title": "Casa com 2 quartos à venda na Rua Bolívia, 257, Indústrias, João Pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Rua Bolívia, 257",
    "area": 70,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 205000,
    "condo": 0,
    "iptu": 1025,
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
    "lat": -7.18544,
    "lng": -34.86592,
    "thesis": "Portal · 70 m² em Indústrias, pedido R$ 2.929/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867354",
    "title": "Casa com 3 quartos à venda na Rua Cidade de Conceição, 236, Indústrias, João Pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Rua Cidade De Conceição, 236",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 220000,
    "condo": 0,
    "iptu": 1100,
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
    "lat": -7.19048,
    "lng": -34.86496,
    "thesis": "Portal · 85 m² em Indústrias, pedido R$ 2.588/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "chv-45867361",
    "title": "Casa com 3 quartos à venda na Rua Sibéria, 01, Indústrias, João Pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Rua Sibéria, 01",
    "area": 200,
    "rooms": 3,
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
      "preco",
      "rua"
    ],
    "lat": -7.1868799999999995,
    "lng": -34.86484,
    "thesis": "Portal · 200 m² em Indústrias, pedido R$ 1.000/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 305 m² em Indústrias, pedido R$ 689/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.545/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 364 m² em Indústrias, pedido R$ 1.058/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 58 m² em Indústrias, pedido R$ 3.362/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45867367",
    "title": "Casa com 2 quartos à venda na Rua Idonésia, 140, Indústrias, João Pessoa",
    "type": "casa",
    "bairroId": "industrias",
    "street": "Rua Idonésia, 140",
    "area": 190,
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
    "lat": -7.186159999999999,
    "lng": -34.86484,
    "thesis": "Portal · 190 m² em Indústrias, pedido R$ 947/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 120 m² em Indústrias, pedido R$ 1.500/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
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
    "thesis": "Portal · 57 m² em Indústrias, pedido R$ 3.509/m² contra 3.600 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "cx-2794582",
    "title": "Apartamento Caixa 2794582",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2794582 RUA JOSINALDO FLORENCIO DA SILVA",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 97778,
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
    "lat": -7.21578,
    "lng": -34.84828,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 1.630/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 20
  },
  {
    "id": "cx-2768217",
    "title": "Apartamento Caixa 2768217",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2768217 RUA JOSE PIRES BEJAMIM,N. 293 AP",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 103111,
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
    "lat": -7.21434,
    "lng": -34.84708,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 1.719/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 18
  },
  {
    "id": "cx-2733776",
    "title": "Apartamento Caixa 2733776",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2733776 RUA PROFESSORA ALICE MENDES DA N",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 133615,
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
    "lat": -7.21026,
    "lng": -34.84912,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.227/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 14
  },
  {
    "id": "cx-2990376",
    "title": "Apartamento Caixa 2990376",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2990376 RUA ARNALDO CAMPELO,N. 251 A",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 187932,
    "condo": 540,
    "iptu": 940,
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
    "lat": -7.21206,
    "lng": -34.851279999999996,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 3.132/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 14
  },
  {
    "id": "cx-2423481",
    "title": "Apartamento Caixa 2423481",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2423481 RUA INACIO ALBINO NETO,N. 240 AP",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 185271,
    "condo": 540,
    "iptu": 926,
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
    "lat": -7.21734,
    "lng": -34.84708,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 3.088/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 19
  },
  {
    "id": "cx-3049575",
    "title": "Apartamento Caixa 3049575",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Apartamento em Leilão em João Pessoa / PB - 3049575 RUA ANNA SOARES DE LIMA,N. 1",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 185271,
    "condo": 540,
    "iptu": 926,
    "seaMeters": 7000,
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
    "lat": -7.17112,
    "lng": -34.862719999999996,
    "thesis": "Leilão Caixa · 60 m² em Mangabeira, pedido R$ 3.088/m² contra 4.800 do bairro. Colheita 12 de out. de 2026.",
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
    "id": "cx-2789501",
    "title": "Apartamento Caixa 2789501",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2789501 RUA MONTE HOREBE,N. 721 APTO. 20",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 94222,
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
    "lat": -7.2183,
    "lng": -34.84972,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 1.570/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 2
  },
  {
    "id": "cx-2629955",
    "title": "Apartamento Caixa 2629955",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2629955 RUA JOSINALDO FLORENCIO DA SILVA",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 112488,
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
    "lat": -7.21758,
    "lng": -34.85092,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 1.875/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 14
  },
  {
    "id": "cx-3049547",
    "title": "Apartamento Caixa 3049547",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 3049547 RUA MARLUCE BELMONT CAVALCAN",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 112488,
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
    "lat": -7.21446,
    "lng": -34.84984,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 1.875/m² contra 3.900 do bairro. Colheita 12 de out. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 6
  }
] as Listing[];
