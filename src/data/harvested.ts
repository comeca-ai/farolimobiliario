import type { Listing } from "./listings.ts";
import type { HarvestReport } from "@/lib/harvest";

export const HARVEST_REPORT: HarvestReport = {
  "at": "2026-09-21T12:04:47.733Z",
  "portalListed": 13881,
  "raw": 764,
  "kept": 611,
  "dropped": 153,
  "bySource": {
    "portal": 602,
    "leilao": 9
  },
  "byBairro": {
    "altiplano": 28,
    "tambau": 23,
    "bancarios": 27,
    "cabo-branco": 29,
    "jardim-oceania": 29,
    "mangabeira": 26,
    "bessa": 30,
    "geisel": 28,
    "jcu": 24,
    "portal-do-sol": 25,
    "cristo": 29,
    "manaira": 26,
    "estados": 26,
    "aeroclube": 17,
    "brisamar": 20,
    "torre": 23,
    "expedicionarios": 23,
    "centro": 14,
    "gramame": 35,
    "cruz-das-armas": 9,
    "castelo-branco": 16,
    "oitizeiro": 5,
    "funcionarios": 24,
    "miramar": 22,
    "treze-de-maio": 23,
    "alto-do-mateus": 10,
    "industrias": 20
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
    "thesis": "Portal · 54 m² em Altiplano, pedido R$ 7.870/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-35272740",
    "title": "Apartamento com 1 quarto à venda na Rua Manoel Paulino Júnior, 261, Tambauzinho, João Pess",
    "type": "kitnet",
    "bairroId": "tambau",
    "street": "Rua Manoel Paulino Júnior, 261",
    "area": 29,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 399000,
    "condo": 261,
    "iptu": 1995,
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
    "lat": -7.1204,
    "lng": -34.84831,
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 13.759/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-39456509",
    "title": "Para investir ou morar nos Bancários com ITBI e Cartório pagos pela construtora",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 69,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 413542,
    "condo": 621,
    "iptu": 2068,
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
    "lat": -7.14816,
    "lng": -34.86112,
    "thesis": "Portal · 69 m² em Bancários, pedido R$ 5.993/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
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
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 12.520/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45799056",
    "title": "Apartamento com 3 quartos à venda na Rua Poeta Luiz Raimundo Batista de Carvalho, Jardim O",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Poeta Luiz Raimundo Batista De Carvalho, ",
    "area": 82,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 738,
    "iptu": 3250,
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
    "lat": -7.07626,
    "lng": -34.83501,
    "thesis": "Portal · 82 m² em Jardim Oceania, pedido R$ 7.927/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45083787",
    "title": "Apartamentos para vender em Mangabeira, próximo ao Mangabeira shopping, Prédio feito de 1 ",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Judi Leocádio Da Silva, 102",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 240000,
    "condo": 423,
    "iptu": 1200,
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
    "lat": -7.167761,
    "lng": -34.834823,
    "thesis": "Portal · 47 m² em Mangabeira, pedido R$ 5.106/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-42097640",
    "title": "Viva o luxo! Lindo apartamento exclusivo no palazzo di toscana – altiplano",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 307,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 3600000,
    "condo": 2763,
    "iptu": 18000,
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
    "lat": -7.1283199999999995,
    "lng": -34.83426,
    "thesis": "Portal · 307 m² em Altiplano, pedido R$ 11.726/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-43946313",
    "title": "Habilitar Imóveis Creci PB 1672 J. BESSA - AGUAS DO ATLANTICO II – 2 QUARTOS COM VARANDA ,",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Presidente Arthur Bernardes, 128",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 640000,
    "condo": 504,
    "iptu": 3200,
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
    "lat": -7.0642381,
    "lng": -34.8420877,
    "thesis": "Portal · 56 m² em Bessa, pedido R$ 11.429/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46088216",
    "title": "Apartamento com 2 quartos à venda na Rua Doutor Mirocene Fernando da Cunha Lima, Bessa, Jo",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Doutor Mirocene Fernando Da Cunha Lima, ",
    "area": 105,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 459000,
    "condo": 945,
    "iptu": 2295,
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
    "lat": -7.07347,
    "lng": -34.84064,
    "thesis": "Portal · 105 m² em Bessa, pedido R$ 4.371/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-31323954",
    "title": "Apartamento com 3 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 720,
    "iptu": 2250,
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
    "lat": -7.068779999999999,
    "lng": -34.83152,
    "thesis": "Portal · 80 m² em Bessa, pedido R$ 5.625/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-39063450",
    "title": "3 Quartos com Suíte no Bessa, a 150m do Parque Paraíba 4 | Pronto para Morar",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 62,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 489990,
    "condo": 558,
    "iptu": 2450,
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
    "lat": -7.066859999999999,
    "lng": -34.84388,
    "thesis": "Portal · 62 m² em Bessa, pedido R$ 7.903/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46252818",
    "title": "Apartamento Reformado de 1 Quarto à Beira-Mar da Praia do Bessa | Vista Mar",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 39,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 510000,
    "condo": 351,
    "iptu": 2550,
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
    "lng": -34.84052,
    "thesis": "Portal · 39 m² em Bessa, pedido R$ 13.077/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "ask": 2550000,
    "condo": 0,
    "iptu": 12750,
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
    "lat": -7.1417629,
    "lng": -34.8244846,
    "thesis": "Portal · 300 m² em Altiplano, pedido R$ 8.500/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-44683783",
    "title": "Casa com 4 quartos à venda na Rua Araci Rodrigues Moura, 02, Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Rua Araci Rodrigues Moura, 02",
    "area": 100,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 520000,
    "condo": 0,
    "iptu": 2600,
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
    "lat": -7.1773294,
    "lng": -34.8666463,
    "thesis": "Portal · 100 m² em Ernesto Geisel, pedido R$ 5.200/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 148 m² em Jd. Cidade Universitária, pedido R$ 5.338/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45966788",
    "title": "Casa com 3 quartos à venda na Rua Luzinete Formiga de Lucena, Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua Luzinete Formiga De Lucena, ",
    "area": 330,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 1250000,
    "condo": 0,
    "iptu": 6250,
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
    "lat": -7.15051,
    "lng": -34.81636,
    "thesis": "Portal · 330 m² em Portal do Sol, pedido R$ 3.788/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 247 m² em Cristo Redentor, pedido R$ 1.660/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 5.000/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 201 m² em Bessa, pedido R$ 5.473/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-35717195",
    "title": "Tf connect residence — exclusividade e sofisticação nos bancários-pb",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 539000,
    "condo": 684,
    "iptu": 2695,
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
    "lat": -7.15428,
    "lng": -34.861,
    "thesis": "Portal · 76 m² em Bancários, pedido R$ 7.092/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-46427577",
    "title": "Espetacular apartamento no Cabo Branco a apenas 500m da praia",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Rua Maria Elizabeth, ",
    "area": 163,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1100000,
    "condo": 1467,
    "iptu": 5500,
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
    "lat": -7.12655,
    "lng": -34.82522,
    "thesis": "Portal · 163 m² em Cabo Branco, pedido R$ 6.748/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-44879892",
    "title": "Lindo apartamento de 2 quartos pronto para morar em frente ao mar, com linda vista da prai",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 63,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1100000,
    "condo": 567,
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
    "lat": -7.08516,
    "lng": -34.83088,
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 17.460/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-31809408",
    "title": "Apartamento Pertinho da Praia - Estilo Resort - 03 suites - 90 M - Jd. Oceania - João Pess",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, 1415",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1600000,
    "condo": 810,
    "iptu": 8000,
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
    "lat": -7.0761,
    "lng": -34.83267,
    "thesis": "Portal · 90 m² em Jardim Oceania, pedido R$ 17.778/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-30853807",
    "title": "Apartamento com 3 quartos à venda na Avenida Nego, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Nego, ",
    "area": 117,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 950000,
    "condo": 1053,
    "iptu": 4750,
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
    "lat": -7.114520000000001,
    "lng": -34.81904,
    "thesis": "Portal · 117 m² em Tambaú, pedido R$ 8.120/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-33420076",
    "title": "Apartamento com 2 quartos à venda na Rua Paulo Roberto de Souza Acioly, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Paulo Roberto De Souza Acioly, ",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 525000,
    "condo": 513,
    "iptu": 2625,
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
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 57 m² em Bessa, pedido R$ 9.211/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.0870089,
    "lng": -34.8355722,
    "thesis": "Portal · 42 m² em Jardim Oceania, pedido R$ 10.848/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-40225293",
    "title": "Cobertura com 3 quartos à venda na Rua Maestro Osvaldo Evaristo Costa, Estados, João Pesso",
    "type": "apto",
    "bairroId": "estados",
    "street": "Rua Maestro Osvaldo Evaristo Costa, ",
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
    "lat": -7.10796,
    "lng": -34.85494,
    "thesis": "Portal · 130 m² em Estados, pedido R$ 5.769/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-43013600",
    "title": "Apartamento à venda no CONDOMÍNIO FLAMBOYANT, ERNESTO GEISEL, João Pessoa, PB",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Francisco Manoel De Andrade, ",
    "area": 109,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 330000,
    "condo": 981,
    "iptu": 1650,
    "seaMeters": 6200,
    "condition": 0.88,
    "daysListed": 28,
    "portalCount": 1,
    "sources": [
      "portal"
    ],
    "radars": [
      "preco"
    ],
    "lat": -7.17486,
    "lng": -34.86368,
    "thesis": "Portal · 109 m² em Ernesto Geisel, pedido R$ 3.028/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-32931446",
    "title": "Cobertura Para Vender com 2 quartos 1 suíte no bairro Bessa em João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 74,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 840000,
    "condo": 666,
    "iptu": 4200,
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
    "lat": -7.08075,
    "lng": -34.83135,
    "thesis": "Portal · 74 m² em Bessa, pedido R$ 11.351/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-32363298",
    "title": "Cobertura com 2 quartos à venda no Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 127,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1900000,
    "condo": 1143,
    "iptu": 9500,
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
    "lng": -34.828880000000005,
    "thesis": "Portal · 127 m² em Cabo Branco, pedido R$ 14.961/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 361 m² em Cabo Branco, pedido R$ 6.094/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-41894991",
    "title": "Cobertura com 1 quarto à venda no Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Tambaú, João Pessoa",
    "area": 77,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 998000,
    "condo": 693,
    "iptu": 4990,
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
    "lat": -7.11454,
    "lng": -34.82278,
    "thesis": "Portal · 77 m² em Tambaú, pedido R$ 12.961/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45225536",
    "title": "Cobertura com 2 quartos à venda na Rua Joakim Schuller, 316, Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Joakim Schuller, 316",
    "area": 89,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 589900,
    "condo": 801,
    "iptu": 2950,
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
    "lat": -7.072981,
    "lng": -34.835322,
    "thesis": "Portal · 89 m² em Jardim Oceania, pedido R$ 6.628/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 6.000/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-38166618",
    "title": "Oportunidade Única no Bessa: Cobertura Duplex no Ed. Jardim Michelangelo",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Josué Guedes Pereira, 100",
    "area": 158,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1250000,
    "condo": 1422,
    "iptu": 6250,
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
    "lat": -7.0730923333333,
    "lng": -34.840875,
    "thesis": "Portal · 158 m² em Bessa, pedido R$ 7.911/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 125 m² em Bessa, pedido R$ 7.120/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-43165300",
    "title": "Cobertura com 2 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 92,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 820000,
    "condo": 828,
    "iptu": 4100,
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
    "lat": -7.0659,
    "lng": -34.84712,
    "thesis": "Portal · 92 m² em Bessa, pedido R$ 8.913/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-11741410",
    "title": "Cobertura com 1 dormitório à venda, 47 m² por R$ 500.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 47,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 500000,
    "condo": 423,
    "iptu": 2500,
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
    "lat": -7.118180000000001,
    "lng": -34.82576,
    "thesis": "Portal · 47 m² em Cabo Branco, pedido R$ 10.638/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 49 m² em Tambaú, pedido R$ 14.061/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 41 m² em Tambaú, pedido R$ 24.781/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Tambaú, pedido R$ 8.750/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.552/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.117775,
    "lng": -34.828152,
    "thesis": "Portal · 190 m² em Tambaú, pedido R$ 6.474/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.1139462,
    "lng": -34.8263533,
    "thesis": "Portal · 76 m² em Tambaú, pedido R$ 12.237/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 26 m² em Tambaú, pedido R$ 14.615/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 110 m² em Tambaú, pedido R$ 6.264/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-42945051",
    "title": "Apartamento à venda no bairro de Tambaú, em João Pessoa, com 84 m², 3 quartos (2 suítes), ",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Severino Massa Spinelli, 123",
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
    "lat": -7.114213,
    "lng": -34.8289763,
    "thesis": "Portal · 82 m² em Tambaú, pedido R$ 8.049/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 315 m² em Tambaú, pedido R$ 7.937/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 145 m² em Tambaú, pedido R$ 12.276/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 65 m² em Tambaú, pedido R$ 11.538/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 157 m² em Tambaú, pedido R$ 10.191/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 90 m² em Tambaú, pedido R$ 5.444/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-37521839",
    "title": "Andar alto com vista mar em Tambau- Empreendimento novo- 145m2- 1 por andar! Oportunidade.",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Silvino Lopes, 379",
    "area": 145,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1590000,
    "condo": 1305,
    "iptu": 7950,
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
    "lat": -7.1154063,
    "lng": -34.8285464,
    "thesis": "Portal · 145 m² em Tambaú, pedido R$ 10.966/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 16.821/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "ask": 1200000,
    "condo": 648,
    "iptu": 6000,
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
    "thesis": "Portal · 72 m² em Cabo Branco, pedido R$ 16.667/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-30951680",
    "title": "Apartamento com 3 dormitórios à venda, 83 m² por R$ 550.000,00 - Cabo Branco - João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Rua Doutor Frutuoso Dantas, 285",
    "area": 83,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 747,
    "iptu": 2750,
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
    "lat": -7.126068,
    "lng": -34.825827,
    "thesis": "Portal · 83 m² em Cabo Branco, pedido R$ 6.627/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 122 m² em Cabo Branco, pedido R$ 8.852/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46251621",
    "title": "Apartamento com 2 quartos à venda na Rua Major José Eugênio Lins, Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Rua Major José Eugênio Lins, ",
    "area": 61,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 549,
    "iptu": 3400,
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
    "lat": -7.13773,
    "lng": -34.81923,
    "thesis": "Portal · 61 m² em Cabo Branco, pedido R$ 11.148/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 50 m² em Cabo Branco, pedido R$ 10.400/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 73 m² em Cabo Branco, pedido R$ 10.557/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 108 m² em Cabo Branco, pedido R$ 19.986/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 137 m² em Cabo Branco, pedido R$ 6.218/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 73 m² em Cabo Branco, pedido R$ 11.644/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 92 m² em Cabo Branco, pedido R$ 12.935/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-37537519",
    "title": "Apartamento para Venda em João Pessoa, Cabo Branco, 3 dormitórios, 3 suítes, 5 banheiros, ",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, 2600",
    "area": 110,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1999000,
    "condo": 990,
    "iptu": 9995,
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
    "lat": -7.132661,
    "lng": -34.821507,
    "thesis": "Portal · 110 m² em Cabo Branco, pedido R$ 18.173/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 148 m² em Manaíra, pedido R$ 8.716/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 216 m² em Manaíra, pedido R$ 8.565/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-37589774",
    "title": "Apartamento para Venda em João Pessoa, Manaíra, 2 dormitórios, 1 suíte, 2 banheiros, 1 vag",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Eutiquiano Barreto, 382",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 432,
    "iptu": 3250,
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
    "lat": -7.10745,
    "lng": -34.83948,
    "thesis": "Portal · 48 m² em Manaíra, pedido R$ 13.542/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 83 m² em Manaíra, pedido R$ 4.216/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Manaíra, pedido R$ 10.950/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 11.333/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "ask": 495677,
    "condo": 513,
    "iptu": 2478,
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
    "lat": -7.09994,
    "lng": -34.84222,
    "thesis": "Portal · 57 m² em Manaíra, pedido R$ 8.696/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 70 m² em Manaíra, pedido R$ 8.000/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 90 m² em Manaíra, pedido R$ 9.444/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "ask": 649000,
    "condo": 540,
    "iptu": 3245,
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
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 10.817/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 27 m² em Manaíra, pedido R$ 12.530/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 67 m² em Manaíra, pedido R$ 5.224/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 73 m² em Manaíra, pedido R$ 8.014/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-37148342",
    "title": "Apartamento para Venda em João Pessoa, Bessa, 2 dormitórios, 1 suíte, 2 banheiros, 1 vaga",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Paulo Roberto De Souza Acioly, 2",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 560000,
    "condo": 585,
    "iptu": 2800,
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
    "lat": -7.07453,
    "lng": -34.84182,
    "thesis": "Portal · 65 m² em Bessa, pedido R$ 8.615/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-33876012",
    "title": "Apartamento no Bessa 1 e 2 quartos, Elevador, lazer completo",
    "type": "kitnet",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 36,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 319497,
    "condo": 324,
    "iptu": 1597,
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
    "lat": -7.0706999999999995,
    "lng": -34.8452,
    "thesis": "Portal · 36 m² em Bessa, pedido R$ 8.875/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 8.750/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-45640749",
    "title": "Apartamento alto padrão com ótima localização no Caribessa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua João Cabral De Lucena, 360",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 945,
    "iptu": 3750,
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
    "lat": -7.070301,
    "lng": -34.839303,
    "thesis": "Portal · 105 m² em Bessa, pedido R$ 7.143/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 136 m² em Bessa, pedido R$ 9.926/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 37 m² em Bessa, pedido R$ 12.838/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46490919",
    "title": "Apartamento a venda Reformado e Mobiliado no Bessa, 1 vaga — a 500m da Praia!",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 46,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 330000,
    "condo": 414,
    "iptu": 1650,
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
    "lat": -7.06542,
    "lng": -34.84063999999999,
    "thesis": "Portal · 46 m² em Bessa, pedido R$ 7.174/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 115 m² em Bessa, pedido R$ 9.130/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 72 m² em Bessa, pedido R$ 5.417/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 58 m² em Bessa, pedido R$ 9.224/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 158 m² em Bessa, pedido R$ 8.228/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "lat": -7.06678,
    "lng": -34.84373,
    "thesis": "Portal · 70 m² em Bessa, pedido R$ 7.786/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-45755224",
    "title": "Apartamento para venda com 2 qts no maravilhoso bairro do Bessa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Julieta Marinho Marsicano, 71",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 295000,
    "condo": 522,
    "iptu": 1475,
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
    "lat": -7.0617,
    "lng": -34.84682,
    "thesis": "Portal · 58 m² em Bessa, pedido R$ 5.086/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 85 m² em Jardim Oceania, pedido R$ 10.588/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-21166198",
    "title": "Rio Paru: Luxuoso. Ecológico. No Jardim Oceania. Conheça o mais novo lançamento da Conserp",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 129,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1671012,
    "condo": 1161,
    "iptu": 8355,
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
    "lat": -7.09296,
    "lng": -34.82992,
    "thesis": "Portal · 129 m² em Jardim Oceania, pedido R$ 12.954/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 60 m² em Jardim Oceania, pedido R$ 10.697/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45422682",
    "title": "Apartamento à venda 2 suítes - 02 vagas - Jardim Oceania - João Pessoa/PB",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, 1415",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 980000,
    "condo": 558,
    "iptu": 4900,
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
    "lat": -7.0761,
    "lng": -34.83267,
    "thesis": "Portal · 62 m² em Jardim Oceania, pedido R$ 15.806/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 11.525/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-45870019",
    "title": "Apartamento com 2 quartos à venda na Avenida Governador Argemiro de Figueiredo, 3771, Jard",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Avenida Governador Argemiro De Figueiredo, 3771",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 590000,
    "condo": 540,
    "iptu": 2950,
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
    "lat": -7.07769,
    "lng": -34.8308,
    "thesis": "Portal · 60 m² em Jardim Oceania, pedido R$ 9.833/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 82 m² em Jardim Oceania, pedido R$ 14.634/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 16.667/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 13.265/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44191086",
    "title": "Apartamento com 1 quarto à venda na Rua Oceano Ártico, 26, Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Oceano Ártico, 26",
    "area": 65,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 780000,
    "condo": 585,
    "iptu": 3900,
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
    "lat": -7.0784482,
    "lng": -34.8365119,
    "thesis": "Portal · 65 m² em Jardim Oceania, pedido R$ 12.000/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-44223140",
    "title": "Apartamento com 3 quartos à venda na Rua José Patrício de Almeida, Jardim Oceania, João Pe",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua José Patrício De Almeida, ",
    "area": 87,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1043000,
    "condo": 783,
    "iptu": 5215,
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
    "lat": -7.07876,
    "lng": -34.83405,
    "thesis": "Portal · 87 m² em Jardim Oceania, pedido R$ 11.989/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 17.872/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 132 m² em Altiplano, pedido R$ 5.379/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-43604574",
    "title": "Artus Blanc | Exclusividade, Vista Mar e Alto Padrão no Altiplano",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1720072,
    "condo": 1080,
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
    "lat": -7.1282,
    "lng": -34.846379999999996,
    "thesis": "Portal · 120 m² em Altiplano, pedido R$ 14.334/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 55 m² em Altiplano, pedido R$ 7.429/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46436016",
    "title": "Apartamento com a melhor área de lazer no Altiplano Cabo Branco em João Pessoa Paraiba",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Helena Freire, 170",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 720,
    "iptu": 2750,
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
    "lat": -7.1370444,
    "lng": -34.8279602,
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 6.875/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 10.750/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "lat": -7.1362255,
    "lng": -34.8256966,
    "thesis": "Portal · 64 m² em Altiplano, pedido R$ 10.806/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-37224486",
    "title": "Apartamento para Venda em João Pessoa, Altiplano Cabo Branco, 4 dormitórios, 4 suítes, 6 b",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Rua Bancário Elias Feliciano Madruga, 300",
    "area": 332,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 4500000,
    "condo": 2988,
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
    "lat": -7.13174,
    "lng": -34.8289,
    "thesis": "Portal · 332 m² em Altiplano, pedido R$ 13.554/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 59 m² em Altiplano, pedido R$ 20.841/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-39041197",
    "title": "Apartamento com 3 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 67,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 603,
    "iptu": 1975,
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
    "lat": -7.13384,
    "lng": -34.84254,
    "thesis": "Portal · 67 m² em Altiplano, pedido R$ 5.896/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Altiplano, pedido R$ 18.000/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-44877900",
    "title": "Apartamento com 3 quartos à venda no Altiplano Cabo Branco, João Pessoa",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 68,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 470900,
    "condo": 612,
    "iptu": 2355,
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
    "lat": -7.13324,
    "lng": -34.84074,
    "thesis": "Portal · 68 m² em Altiplano, pedido R$ 6.925/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 59 m² em Aeroclube, pedido R$ 10.093/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 35 m² em Aeroclube, pedido R$ 11.143/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Aeroclube, pedido R$ 11.333/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "lat": -7.0816131,
    "lng": -34.840317,
    "thesis": "Portal · 123 m² em Aeroclube, pedido R$ 4.715/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 90 m² em Aeroclube, pedido R$ 8.667/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 49 m² em Aeroclube, pedido R$ 9.429/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 139 m² em Aeroclube, pedido R$ 6.475/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 75 m² em Aeroclube, pedido R$ 9.733/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.029/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "lat": -7.095975,
    "lng": -34.845422,
    "thesis": "Portal · 171 m² em Aeroclube, pedido R$ 5.263/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 89 m² em Aeroclube, pedido R$ 12.859/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.397/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 82 m² em Aeroclube, pedido R$ 9.634/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 68 m² em Aeroclube, pedido R$ 12.532/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 46 m² em Aeroclube, pedido R$ 7.826/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 10.000/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 42 m² em Brisamar, pedido R$ 10.238/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 85 m² em Brisamar, pedido R$ 11.176/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 86 m² em Brisamar, pedido R$ 8.721/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "lat": -7.11885,
    "lng": -34.84365,
    "thesis": "Portal · 51 m² em Brisamar, pedido R$ 6.863/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-42414637",
    "title": "Apartamento com 2 quartos à venda na Rua Juraci De Carvalho Luna, 68, Brisamar, João Pesso",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Juraci De Carvalho Luna, 68",
    "area": 89,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 747000,
    "condo": 801,
    "iptu": 3735,
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
    "lat": -7.11598,
    "lng": -34.83806,
    "thesis": "Portal · 89 m² em Brisamar, pedido R$ 8.393/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "ask": 2287000,
    "condo": 0,
    "iptu": 11435,
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
    "thesis": "Portal · 311 m² em Brisamar, pedido R$ 7.354/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-36976070",
    "title": "Apartamento com 4 quartos à venda na Rua Paulo Peixoto de Vasconcelos, Brisamar, João Pess",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Paulo Peixoto De Vasconcelos, ",
    "area": 273,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 2750000,
    "condo": 2457,
    "iptu": 13750,
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
    "lat": -7.11318,
    "lng": -34.83963,
    "thesis": "Portal · 273 m² em Brisamar, pedido R$ 10.073/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-45698460",
    "title": "Apartamento Alto Padrão no Brisamar 04 Suítes 260m² Andar Alto",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 260,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2400000,
    "condo": 2340,
    "iptu": 12000,
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
    "lat": -7.09124,
    "lng": -34.84392,
    "thesis": "Portal · 260 m² em Brisamar, pedido R$ 9.231/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-40225039",
    "title": "Apartamento Alto Padrão com Vista para o Mar – Porteira Fechada",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Prefeito Severino Cabral, ",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 980000,
    "condo": 702,
    "iptu": 4900,
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
    "thesis": "Portal · 78 m² em Brisamar, pedido R$ 12.564/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 183 m² em Brisamar, pedido R$ 9.563/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 59 m² em Torre, pedido R$ 8.458/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.583/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-43145111",
    "title": "Apartamento à venda no FIT JARDIM BOTÂNICO, TORRE, João Pessoa, PB",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, 630",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 449000,
    "condo": 720,
    "iptu": 2245,
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
    "thesis": "Portal · 80 m² em Torre, pedido R$ 5.613/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-43391833",
    "title": "Apartamento com 2 quartos à venda na Avenida Júlia Freire, 120, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Júlia Freire, 120",
    "area": 61,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 468199,
    "condo": 549,
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
    "lat": -7.1206547,
    "lng": -34.8646107,
    "thesis": "Portal · 61 m² em Torre, pedido R$ 7.675/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.663/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 90 m² em Torre, pedido R$ 3.556/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-36407196",
    "title": "Apartamento com 3 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 480340,
    "condo": 630,
    "iptu": 2402,
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
    "lat": -7.121079999999999,
    "lng": -34.86756,
    "thesis": "Portal · 70 m² em Torre, pedido R$ 6.862/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-32386794",
    "title": "Apartamento com 2 dormitórios à venda, 69 m² por R$ 380.000,00 - Torre - João Pessoa/PB",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 69,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 621,
    "iptu": 1900,
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
    "lat": -7.12228,
    "lng": -34.87464,
    "thesis": "Portal · 69 m² em Torre, pedido R$ 5.507/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-37977278",
    "title": "Apartamento com 2 quartos à venda na Avenida Juarez Távora, 830, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Juarez Távora, 830",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 310000,
    "condo": 450,
    "iptu": 1550,
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
    "thesis": "Portal · 50 m² em Torre, pedido R$ 6.200/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 61 m² em Torre, pedido R$ 7.738/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-43140923",
    "title": "Apartamento para Venda em João Pessoa, Torre, 2 dormitórios, 1 suíte, 2 banheiros, 1 vaga",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, 630",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 365000,
    "condo": 540,
    "iptu": 1825,
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 6.083/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.933/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-44877907",
    "title": "Apartamento com 3 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 60,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 472232,
    "condo": 540,
    "iptu": 2361,
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
    "lat": -7.1217999999999995,
    "lng": -34.864439999999995,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.871/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 80 m² em Torre, pedido R$ 5.625/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.204/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 66 m² em Bancários, pedido R$ 5.909/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 55 m² em Bancários, pedido R$ 6.345/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 91 m² em Bancários, pedido R$ 6.812/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 105 m² em Bancários, pedido R$ 5.047/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.296/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 68 m² em Bancários, pedido R$ 8.822/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-45886593",
    "title": "Apartamento Duplex com 2 dormitórios à venda, 54 m² por R$ 649.000,00 - Bancários - João P",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 649000,
    "condo": 486,
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
    "lat": -7.14625,
    "lng": -34.83675,
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 12.019/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 68 m² em Bancários, pedido R$ 8.824/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-38039258",
    "title": "Apartamento com 1 quarto à venda na Rua Derlópidas Gomes Neves, Bancários, João Pessoa",
    "type": "kitnet",
    "bairroId": "bancarios",
    "street": "Rua Derlópidas Gomes Neves, ",
    "area": 35,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 250000,
    "condo": 315,
    "iptu": 1250,
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
    "lat": -7.14738,
    "lng": -34.84213,
    "thesis": "Portal · 35 m² em Bancários, pedido R$ 7.143/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
      "Unidade compacta: teses de diária e de moradia não se misturam."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-39679723",
    "title": "Apartamento com 2 quartos à venda na Rua Bancário Antônio Severino da Silva, 21, Bancários",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário Antônio Severino Da Silva, 21",
    "area": 62,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 399900,
    "condo": 558,
    "iptu": 2000,
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
    "lat": -7.14337,
    "lng": -34.84051,
    "thesis": "Portal · 62 m² em Bancários, pedido R$ 6.450/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 66 m² em Bancários, pedido R$ 5.606/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-39359462",
    "title": "Cobertura para Venda em João Pessoa, Bancarios, 3 dormitórios, 1 suíte, 1 banheiro, 1 vaga",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Hermelinda Henriques De Araújo, 234",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 479000,
    "condo": 585,
    "iptu": 2395,
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
    "lat": -7.14726,
    "lng": -34.84471,
    "thesis": "Portal · 65 m² em Bancários, pedido R$ 7.369/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 74 m² em Estados, pedido R$ 8.784/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 70 m² em Estados, pedido R$ 9.986/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 136 m² em Estados, pedido R$ 10.294/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 248 m² em Estados, pedido R$ 5.040/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 74 m² em Estados, pedido R$ 6.176/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 61 m² em Estados, pedido R$ 7.377/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 299 m² em Estados, pedido R$ 2.542/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Estados, pedido R$ 8.917/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 52 m² em Estados, pedido R$ 7.212/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 94 m² em Estados, pedido R$ 4.628/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-10815599",
    "title": "REF: AP076 - Apartamento à Venda, João Pessoa, Estados, 3 quartos",
    "type": "apto",
    "bairroId": "estados",
    "street": "Rua Professora Eudésia Vieira, 381",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1060000,
    "condo": 945,
    "iptu": 5300,
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
    "lat": -7.11217,
    "lng": -34.85151,
    "thesis": "Portal · 105 m² em Estados, pedido R$ 10.095/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-43217894",
    "title": "Apartamento de 3 quartos sendo 1 suíte à venda no bairro dos estados – joão pessoa/pb",
    "type": "apto",
    "bairroId": "estados",
    "street": "Avenida Sergipe, 737",
    "area": 86,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 649000,
    "condo": 774,
    "iptu": 3245,
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
    "thesis": "Portal · 86 m² em Estados, pedido R$ 7.547/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-37124345",
    "title": "Apartamento no Bairro dos Estados 03 Quartos 02 Suítes 104m²",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 104,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1060096,
    "condo": 936,
    "iptu": 5300,
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
    "lat": -7.12224,
    "lng": -34.85076,
    "thesis": "Portal · 104 m² em Estados, pedido R$ 10.193/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 62 m² em Estados, pedido R$ 6.371/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.1239436,
    "lng": -34.85425,
    "thesis": "Portal · 100 m² em Expedicionários, pedido R$ 6.200/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Expedicionários, pedido R$ 7.578/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 57 m² em Expedicionários, pedido R$ 5.965/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 45 m² em Expedicionários, pedido R$ 7.556/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 58 m² em Expedicionários, pedido R$ 7.759/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 50 m² em Expedicionários, pedido R$ 7.600/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.364/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-38039209",
    "title": "Apartamento para venda, Expedicionários, João Pessoa - 22350",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Silvio Almeida, ",
    "area": 79,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 260000,
    "condo": 711,
    "iptu": 1300,
    "seaMeters": 3200,
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
    "lat": -7.12256,
    "lng": -34.85332,
    "thesis": "Portal · 79 m² em Expedicionários, pedido R$ 3.291/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45352778",
    "title": "Apartamento com 3 quartos à venda na Rua Professor Joaquim Santiago, Expedicionários, João",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Professor Joaquim Santiago, ",
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
    "thesis": "Portal · 100 m² em Expedicionários, pedido R$ 6.200/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 70 m² em Expedicionários, pedido R$ 7.467/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Expedicionários, pedido R$ 7.572/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 70 m² em Centro, pedido R$ 5.000/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 50 m² em Centro, pedido R$ 6.000/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 93 m² em Centro, pedido R$ 4.839/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 114 m² em Centro, pedido R$ 4.649/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 52 m² em Tambaú, pedido R$ 6.731/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 53 m² em Portal do Sol, pedido R$ 6.602/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.15927,
    "lng": -34.81837,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.777/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-40182862",
    "title": "Apartamento à venda no RESIDENCIAL RIVELINI II, PORTAL DO SOL, João Pessoa, PB",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Juiz Gil Brandão Libanio, ",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 330000,
    "condo": 468,
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
    "lat": -7.14883,
    "lng": -34.81546,
    "thesis": "Portal · 52 m² em Portal do Sol, pedido R$ 6.346/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-26941364",
    "title": "Apartamento com 2 dormitórios à venda por R$ 310.000,00 - Portal do Sol - João Pessoa/PB",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 310000,
    "condo": 486,
    "iptu": 1550,
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
    "thesis": "Portal · 54 m² em Portal do Sol, pedido R$ 5.741/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 45 m² em Portal do Sol, pedido R$ 9.333/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45146166",
    "title": "Apartamento com 3 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 420000,
    "condo": 684,
    "iptu": 2100,
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
    "lat": -7.1592400000000005,
    "lng": -34.8352,
    "thesis": "Portal · 76 m² em Portal do Sol, pedido R$ 5.526/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 5.000/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-46086798",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 120,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 500000,
    "condo": 1080,
    "iptu": 2500,
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
    "lat": -7.15744,
    "lng": -34.84672,
    "thesis": "Portal · 120 m² em Portal do Sol, pedido R$ 4.167/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46658193",
    "title": "REF: LA012 - Lançamento, Apartamento à Venda, João Pessoa, Altiplano, 1 e 2 quartos",
    "type": "kitnet",
    "bairroId": "portal-do-sol",
    "street": "Avenida João Cirilo Da Silva, S/N",
    "area": 37,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 694231,
    "condo": 333,
    "iptu": 3471,
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
    "lat": -7.14788,
    "lng": -34.81056,
    "thesis": "Portal · 37 m² em Portal do Sol, pedido R$ 18.763/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 53 m² em Portal do Sol, pedido R$ 6.225/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-34381262",
    "title": "Apartamento com 2 dormitórios à venda por R$ 350.000,00 - Portal do Sol - João Pessoa/PB",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 82,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 350000,
    "condo": 738,
    "iptu": 1750,
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
    "lat": -7.15334,
    "lng": -34.82212,
    "thesis": "Portal · 82 m² em Portal do Sol, pedido R$ 4.268/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-36066483",
    "title": "Apartamento para Venda em João Pessoa, Intermares, 3 dormitórios, 1 suíte, 1 banheiro, 1 v",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 736617,
    "condo": 684,
    "iptu": 3683,
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
    "lat": -7.16272,
    "lng": -34.85272,
    "thesis": "Portal · 76 m² em Portal do Sol, pedido R$ 9.692/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 62 m² em Portal do Sol, pedido R$ 5.097/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-38636520",
    "title": "O Privilégio de Morar na Capital a Apenas 5 Minutos da Praia, grande oportunidade no bairr",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 321614,
    "condo": 459,
    "iptu": 1608,
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
    "lat": -7.15732,
    "lng": -34.83652,
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.306/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 5.122/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 6.138/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "lat": -7.1578981,
    "lng": -34.842895,
    "thesis": "Portal · 47 m² em Jd. Cidade Universitária, pedido R$ 7.213/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-33962145",
    "title": "Apartamento na Planta para Venda em João Pessoa, Jardim Cidade Universitária, 2 dormitório",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Rejane Freire Correia, s/n",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 395000,
    "condo": 486,
    "iptu": 1975,
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
    "lat": -7.15596,
    "lng": -34.83114,
    "thesis": "Portal · 54 m² em Jd. Cidade Universitária, pedido R$ 7.315/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 46 m² em Jd. Cidade Universitária, pedido R$ 7.152/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-36186765",
    "title": "Apartamento com 2 dormitórios à venda, 56 m² por R$ 370.000,00 - Jardim Cidade Universitár",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 370000,
    "condo": 504,
    "iptu": 1850,
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
    "thesis": "Portal · 56 m² em Jd. Cidade Universitária, pedido R$ 6.607/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43145813",
    "title": "Apartamento padrão à Venda, Jardim Cidade Universitária, João Pessoa, PB",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Nurisman De Andrade Carneiro, ",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 513,
    "iptu": 1150,
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
    "lat": -7.15595,
    "lng": -34.83073,
    "thesis": "Portal · 57 m² em Jd. Cidade Universitária, pedido R$ 4.035/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46678735",
    "title": "Apartamento com 3 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 320000,
    "condo": 720,
    "iptu": 1600,
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
    "lat": -7.1432400000000005,
    "lng": -34.84904,
    "thesis": "Portal · 80 m² em Jd. Cidade Universitária, pedido R$ 4.000/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46582134",
    "title": "Apartamento com 2 quartos à venda na Rua Desportista Manoel Gomes, 29, Jardim Cidade Unive",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Desportista Manoel Gomes, 29",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 450000,
    "condo": 504,
    "iptu": 2250,
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
    "lat": -7.15068,
    "lng": -34.83623,
    "thesis": "Portal · 56 m² em Jd. Cidade Universitária, pedido R$ 8.036/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-43008151",
    "title": "Imóvel para aluguel possui 60 metros quadrados com 2 quartos",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Comerciante Aristides Costa, --",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 520000,
    "condo": 540,
    "iptu": 2600,
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
    "lat": -7.1573131,
    "lng": -34.8373053,
    "thesis": "Portal · 60 m² em Jd. Cidade Universitária, pedido R$ 8.667/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-45886594",
    "title": "Apartamento com 2 dormitórios à venda, 52 m² por R$ 329.000,00 - Jardim Cidade Universitár",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 329000,
    "condo": 468,
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
    "lat": -7.15514,
    "lng": -34.83858,
    "thesis": "Portal · 52 m² em Jd. Cidade Universitária, pedido R$ 6.327/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 51 m² em Jd. Cidade Universitária, pedido R$ 3.922/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-40910791",
    "title": "Apartamento com 2 quartos à venda na Rua Euclides Ferreira de Carvalho, 77, Jardim Cidade ",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Euclides Ferreira De Carvalho, 77",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 305000,
    "condo": 468,
    "iptu": 1525,
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
    "lat": -7.1501,
    "lng": -34.83029,
    "thesis": "Portal · 52 m² em Jd. Cidade Universitária, pedido R$ 5.865/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 44 m² em Gramame, pedido R$ 2.725/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-42726712",
    "title": "Apartamento térreo para venda, 2 dormitórios, Área Externa em Gramame, João Pessoa -PB.",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Alfredo Pereira De Almeida, 113",
    "area": 41,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 99000,
    "condo": 369,
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
    "lat": -7.2247,
    "lng": -34.84502,
    "thesis": "Portal · 41 m² em Gramame, pedido R$ 2.415/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46512832",
    "title": "Apartamento com 2 quartos à venda na Rua Josinaldo Florêncio da Silva, 100, Gramame, João ",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Josinaldo Florêncio Da Silva, 100",
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
    "lat": -7.2201,
    "lng": -34.84696,
    "thesis": "Portal · 45 m² em Gramame, pedido R$ 2.667/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45583086",
    "title": "Apartamento à venda no RESIDENCIAL GRAMAME, GRAMAME, João Pessoa, PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Luiz Bastos Da Costa, 20",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 135000,
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
    "lat": -7.20907,
    "lng": -34.84318,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.700/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45281775",
    "title": "Apartamento com 2 quartos à venda na Rua Odontóloga Jane Celli De Souza Mendes Barreto, Gr",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Odontóloga Jane Celli De Souza Mendes Barreto, ",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 522,
    "iptu": 1150,
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
    "lat": -7.20238,
    "lng": -34.86524,
    "thesis": "Portal · 58 m² em Gramame, pedido R$ 3.966/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 43 m² em Gramame, pedido R$ 5.581/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-46580488",
    "title": "Apartamento novo Térreo com 2 quartos, suíte, próximo ao Cod Geisel Privê",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Darlene Linhares Moura Monteiro, 88",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 185000,
    "condo": 450,
    "iptu": 925,
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
    "lat": -7.19686,
    "lng": -34.87509,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 3.700/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.000/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-44950309",
    "title": "2 Quartos, 1 Suíte, Varanda, 2 Elevadores por Torre, Parque Aquático e Segurança 24 horas.",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 46,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
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
    "lat": -7.2123,
    "lng": -34.83724,
    "thesis": "Portal · 46 m² em Gramame, pedido R$ 5.565/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.800/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-31549151",
    "title": "Apartamento com 2 quartos à venda no Gramame, João Pessoa",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 175000,
    "condo": 450,
    "iptu": 875,
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
    "lat": -7.21098,
    "lng": -34.83904,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 3.500/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-39045949",
    "title": "Apartamento com 3 dormitórios à venda, 46 m² por R$ 186.000,00 - Gramame - João Pessoa/PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 46,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 186000,
    "condo": 414,
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
    "lat": -7.20396,
    "lng": -34.86103,
    "thesis": "Portal · 46 m² em Gramame, pedido R$ 4.043/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 4.135/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 46 m² em Mangabeira, pedido R$ 3.261/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Mangabeira, pedido R$ 3.857/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 3.852/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-39506279",
    "title": "APARTAMENTO TÉRREO COM ÁREA PRIVATIVA EM L NO MELHOR DE MANGABEIRA I – 101m² TOTAIS",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 210000,
    "condo": 459,
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
    "lat": -7.1759200000000005,
    "lng": -34.859359999999995,
    "thesis": "Portal · 51 m² em Mangabeira, pedido R$ 4.118/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-34754486",
    "title": "Apartamento com 2 dormitórios à venda, 61 m² por R$ 245.000,00 - Mangabeira - João Pessoa/",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 61,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 245000,
    "condo": 549,
    "iptu": 1225,
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
    "lat": -7.18107,
    "lng": -34.83595,
    "thesis": "Portal · 61 m² em Mangabeira, pedido R$ 4.016/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-42111734",
    "title": "Apartamento com 2 quartos à venda na Rua José Gomes de Souza, 13, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua José Gomes De Souza, 13",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 249000,
    "condo": 513,
    "iptu": 1245,
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
    "lat": -7.16282,
    "lng": -34.840694,
    "thesis": "Portal · 57 m² em Mangabeira, pedido R$ 4.368/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 44 m² em Mangabeira, pedido R$ 5.432/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 54 m² em Mangabeira, pedido R$ 5.000/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-26099118",
    "title": "Apartamento com 2 dormitórios à venda, 57 m² por R$ 200.000,00 - Mangabeira - João Pessoa/",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 200000,
    "condo": 513,
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
      "airbnb"
    ],
    "lat": -7.18107,
    "lng": -34.83595,
    "thesis": "Portal · 57 m² em Mangabeira, pedido R$ 3.509/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45758619",
    "title": "Apartamento com 2 quartos à venda na Rua Coronel Francisco Pequeno de Souza, 100, Mangabei",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Coronel Francisco Pequeno De Souza, 100",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 450,
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
    "lat": -7.18289,
    "lng": -34.84838,
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 4.400/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45938190",
    "title": "Apartamento com 2 quartos à venda na Rua João Belo Vieira, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua João Belo Vieira, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 240000,
    "condo": 450,
    "iptu": 1200,
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
    "lat": -7.18129,
    "lng": -34.83694,
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 4.800/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45798259",
    "title": "Apartamento para venda, 2 quarto(s), Mangabeira, João Pessoa - AP2478",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua Francisco Fábio De Assis Souza, 17",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 166369,
    "condo": 531,
    "iptu": 832,
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
    "lat": -7.173867,
    "lng": -34.82245,
    "thesis": "Portal · 59 m² em Mangabeira, pedido R$ 2.820/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 86 m² em Cruz das Armas, pedido R$ 6.977/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.220/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45553337",
    "title": "Apartamento com 2 quartos à venda na Granja São Francisco, Ernesto Geisel, João Pessoa, 51",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Granja São Francisco, ",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 210000,
    "condo": 459,
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
    "thesis": "Portal · 51 m² em Ernesto Geisel, pedido R$ 4.118/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 50 m² em Ernesto Geisel, pedido R$ 3.400/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-43852629",
    "title": "Apartamento com 2 quartos à venda na Rua Radialista Luiz Gonzaga Gomes, Ernesto Geisel, Jo",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Radialista Luiz Gonzaga Gomes, ",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 432,
    "iptu": 1150,
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
    "lat": -7.18312,
    "lng": -34.87156,
    "thesis": "Portal · 48 m² em Ernesto Geisel, pedido R$ 4.792/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 45 m² em Ernesto Geisel, pedido R$ 4.756/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-45624498",
    "title": "Apartamento com 2 dormitórios à venda, 40 m² por R$ 220.000 - Ernesto Geisel - João Pessoa",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 40,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 360,
    "iptu": 1100,
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
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 5.500/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 3.860/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-17486960",
    "title": "Apartamento com 2 dormitórios à venda, 52 m² por R$ 242.900,00 - Ernesto Geisel - João Pes",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 52,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 242900,
    "condo": 468,
    "iptu": 1215,
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
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 52 m² em Ernesto Geisel, pedido R$ 4.671/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-37801785",
    "title": "Aparatarmento no bairro Novo Geisel, terréo com aréa privativa e lazer",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Manoel Felisberto Da Silva, 363",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 441,
    "iptu": 950,
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
    "lat": -7.19563,
    "lng": -34.87004,
    "thesis": "Portal · 49 m² em Ernesto Geisel, pedido R$ 3.878/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 5.623/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-31866706",
    "title": "Apartamento com 2 quartos à venda na Rua Abelardo Targino da Fonseca, Ernesto Geisel, João",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Rua Abelardo Targino Da Fonseca, ",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 423,
    "iptu": 1100,
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
    "lat": -7.1806,
    "lng": -34.86527,
    "thesis": "Portal · 47 m² em Ernesto Geisel, pedido R$ 4.681/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-40643884",
    "title": "Monte Everest no Geisel: 2 Quartos com Lazer Completo a partir de R$214 mil, perto da BR-2",
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
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.220/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 49 m² em Ernesto Geisel, pedido R$ 3.469/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 4.732/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 11.250/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.13439,
    "lng": -34.84999,
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 5.000/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 81 m² em Castelo Branco, pedido R$ 7.900/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 5.952/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 45 m² em Castelo Branco, pedido R$ 4.778/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.13165,
    "lng": -34.8406,
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 6.071/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 68 m² em Castelo Branco, pedido R$ 4.118/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 81 m² em Castelo Branco, pedido R$ 7.889/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 3.385/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-39937909",
    "title": "Cobertura com 2 dormitórios à venda, 107 m² por R$ 323.000,00 - Cristo Redentor - João Pes",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 107,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 323000,
    "condo": 963,
    "iptu": 1615,
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
    "lat": -7.16078,
    "lng": -34.87863,
    "thesis": "Portal · 107 m² em Cristo Redentor, pedido R$ 3.019/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 44 m² em Cristo Redentor, pedido R$ 5.045/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "lat": -7.15766,
    "lng": -34.87973,
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 5.333/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 43 m² em Cristo Redentor, pedido R$ 4.395/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-40237095",
    "title": "Apartamento Com área externa em Cristo Redentor, João Pessoa/PB",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Joana Domingos Alves, 64",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 315000,
    "condo": 405,
    "iptu": 1575,
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
    "lat": -7.16153,
    "lng": -34.86525,
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 7.000/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 60 m² em Cristo Redentor, pedido R$ 3.833/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Cristo Redentor, pedido R$ 4.000/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-46155936",
    "title": "Apartamento com 2 quartos à venda no Cristo Redentor, João Pessoa",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 65,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 160000,
    "condo": 585,
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
      "airbnb"
    ],
    "lat": -7.14572,
    "lng": -34.88456,
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 2.462/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 72 m² em Cristo Redentor, pedido R$ 4.028/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 85 m² em Cristo Redentor, pedido R$ 2.529/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-43053624",
    "title": "Excelente Apartamento próximo ao supermercado menor preço",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua José Francisco Da Silva, ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 210000,
    "condo": 540,
    "iptu": 1050,
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
    "lat": -7.15198,
    "lng": -34.87694,
    "thesis": "Portal · 60 m² em Cristo Redentor, pedido R$ 3.500/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 6.123/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 51 m² em Oitizeiro, pedido R$ 2.157/m² contra 3.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 43 m² em Oitizeiro, pedido R$ 2.791/m² contra 3.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 43 m² em Oitizeiro, pedido R$ 2.791/m² contra 3.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 49 m² em Oitizeiro, pedido R$ 2.551/m² contra 3.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45477735",
    "title": "Apartamento com 3 quartos à venda na Rua Antônio Fernandes de Carvalho, 23, Brisamar, João",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Antônio Fernandes De Carvalho, 23",
    "area": 94,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 919000,
    "condo": 846,
    "iptu": 4595,
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
    "lat": -7.09508,
    "lng": -34.84608,
    "thesis": "Portal · 94 m² em Brisamar, pedido R$ 9.777/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45048740",
    "title": "Oferta exclusiva — Apartamento no Gramame, Joao Pessoa - PB, Apto 301, 2 quartos, 1 vaga, ",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Niza Siqueira De Melo, N. 265 APT",
    "area": 43,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 87819,
    "condo": 387,
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
    "lat": -7.15964,
    "lng": -34.88871,
    "thesis": "Portal · 43 m² em Gramame, pedido R$ 2.042/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.273/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Funcionários, pedido R$ 3.958/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.458/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 64 m² em Funcionários, pedido R$ 4.375/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 43 m² em Funcionários, pedido R$ 3.767/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 46 m² em Funcionários, pedido R$ 2.935/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 47 m² em Funcionários, pedido R$ 3.447/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.525/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.098/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.600/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 44 m² em Funcionários, pedido R$ 4.068/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 3.051/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-32502092",
    "title": "Apartamento com 2 dormitórios à venda por R$ 190.000,00 - Funcionários IV - João Pessoa/PB",
    "type": "apto",
    "bairroId": "funcionarios",
    "street": "Funcionários, João Pessoa",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 190000,
    "condo": 477,
    "iptu": 950,
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
    "thesis": "Portal · 53 m² em Funcionários, pedido R$ 3.585/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 130 m² em Miramar, pedido R$ 8.077/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 120 m² em Miramar, pedido R$ 5.325/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.121635,
    "lng": -34.831228,
    "thesis": "Portal · 110 m² em Miramar, pedido R$ 19.091/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 9.161/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 60 m² em Miramar, pedido R$ 13.333/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.1222,
    "lng": -34.83566,
    "thesis": "Portal · 121 m² em Miramar, pedido R$ 9.504/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 28 m² em Miramar, pedido R$ 11.429/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 53 m² em Miramar, pedido R$ 10.566/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-42252396",
    "title": "Apartamento para Venda em João Pessoa, Miramar, 3 dormitórios, 2 suítes, 3 banheiros, 2 va",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 117,
    "rooms": 3,
    "suites": 0,
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
    "lat": -7.1168,
    "lng": -34.862120000000004,
    "thesis": "Portal · 117 m² em Miramar, pedido R$ 9.786/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-32479356",
    "title": "Maison de Miramar - APARTAMENTO ALTO PADRÃO/ APARTAMENTO NO MAISON DE MIRAMAR/ APARTAMENTO",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Marieta Steimbach Silva, ",
    "area": 132,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1300000,
    "condo": 1188,
    "iptu": 6500,
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
    "lat": -7.12455,
    "lng": -34.83222,
    "thesis": "Portal · 132 m² em Miramar, pedido R$ 9.848/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-43236750",
    "title": "Excelente Lançamento no Miramar com 1, 2 Quartos ou 3 Suítes com Lazer Completo",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Avenida Senador Ruy Carneiro, 600",
    "area": 39,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 700588,
    "condo": 351,
    "iptu": 3503,
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
    "lat": -7.1174126,
    "lng": -34.8381791,
    "thesis": "Portal · 39 m² em Miramar, pedido R$ 17.964/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-42880043",
    "title": "Exclusivo no Miramar: Apartamento na Av. Senador Ruy Carneiro – João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 39,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 710634,
    "condo": 351,
    "iptu": 3553,
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
    "lat": -7.11536,
    "lng": -34.86896,
    "thesis": "Portal · 39 m² em Miramar, pedido R$ 18.221/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-42899771",
    "title": "Apartamento para Venda em João Pessoa, Miramar, 3 dormitórios, 1 suíte, 2 banheiros, 2 vag",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Agrícola Montenegro, 200",
    "area": 85,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 850000,
    "condo": 765,
    "iptu": 4250,
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
    "lat": -7.11803,
    "lng": -34.83378,
    "thesis": "Portal · 85 m² em Miramar, pedido R$ 10.000/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-34754623",
    "title": "Apartamento com 4 quartos à venda na Rua Olívio Ribeiro Campos, 108, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Olívio Ribeiro Campos, 108",
    "area": 152,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1049000,
    "condo": 1368,
    "iptu": 5245,
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
    "lat": -7.12263,
    "lng": -34.83374,
    "thesis": "Portal · 152 m² em Miramar, pedido R$ 6.901/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-27437276",
    "title": "Apartamento / Novo para Venda em João Pessoa, Miramar, 2 dormitórios, 1 suíte, 1 banheiro,",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Manoel Gualberto, 35",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 538608,
    "condo": 513,
    "iptu": 2693,
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
    "lat": -7.121418,
    "lng": -34.835354,
    "thesis": "Portal · 57 m² em Miramar, pedido R$ 9.449/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "ask": 286000,
    "condo": 414,
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
    "lat": -7.141,
    "lng": -34.85672,
    "thesis": "Portal · 46 m² em Treze de Maio, pedido R$ 6.217/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 9.267/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 6.397/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "ask": 529000,
    "condo": 945,
    "iptu": 2645,
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
    "lat": -7.13932,
    "lng": -34.85288,
    "thesis": "Portal · 105 m² em Treze de Maio, pedido R$ 5.038/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 7.949/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 3.462/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 8.300/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46187980",
    "title": "Apartamento com 2 quartos à venda na Rua Prefeito José de Carvalho, Treze de Maio, João Pe",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Prefeito José De Carvalho, ",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 397490,
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
    "lat": -7.10946,
    "lng": -34.86804,
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 7.950/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 47 m² em Treze de Maio, pedido R$ 6.085/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 54 m² em Treze de Maio, pedido R$ 8.333/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 50 m² em Alto do Mateus, pedido R$ 4.400/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 60 m² em Alto do Mateus, pedido R$ 3.000/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 40 m² em Alto do Mateus, pedido R$ 3.250/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 55 m² em Alto do Mateus, pedido R$ 3.455/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 56 m² em Alto do Mateus, pedido R$ 2.589/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Alto do Mateus, pedido R$ 3.636/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 50 m² em Alto do Mateus, pedido R$ 3.600/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Alto do Mateus, pedido R$ 3.750/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.745/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 51 m² em Indústrias, pedido R$ 1.765/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.455/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.000/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 43 m² em Indústrias, pedido R$ 4.000/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-29762672",
    "title": "Apartamento com 2 dormitórios à venda, 50 m² por R$ 175.000 - Bairro das Indústrias - João",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Indústrias, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 175000,
    "condo": 450,
    "iptu": 875,
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
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.500/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.553/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 46 m² em Indústrias, pedido R$ 3.609/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 43 m² em Indústrias, pedido R$ 2.791/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 41 m² em Indústrias, pedido R$ 5.244/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44505606",
    "title": "Apartamento com 2 dormitórios à venda, 50 m² por R$ 150.000 - Bairro dos Industrias - João",
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
    "lat": -7.17766,
    "lng": -34.91876,
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.000/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 62 m² em Indústrias, pedido R$ 1.371/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46889662",
    "title": "Casa com 230 m² em Tambaú, João Pessoa: 4 quartos, 3 vagas, churrasqueira e excelente loca",
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
    "thesis": "Portal · 230 m² em Tambaú, pedido R$ 7.826/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 24 m² em Tambaú, pedido R$ 25.000/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.034/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Tambaú, pedido R$ 9.750/m² contra 10.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Manaíra, pedido R$ 4.091/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 160 m² em Expedicionários, pedido R$ 3.750/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 7.212/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 256 m² em Cabo Branco, pedido R$ 12.109/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 15.893/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 32 m² em Cabo Branco, pedido R$ 19.063/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 25 m² em Cabo Branco, pedido R$ 14.800/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 42 m² em Cabo Branco, pedido R$ 11.429/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 18 m² em Cabo Branco, pedido R$ 21.944/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45322068",
    "title": "Flat com 1 dormitório à venda, 44 m² por R$ 490.387,80 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 29,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 490387,
    "condo": 261,
    "iptu": 2452,
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
    "lat": -7.11686,
    "lng": -34.8188,
    "thesis": "Portal · 29 m² em Cabo Branco, pedido R$ 16.910/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 42 m² em Cabo Branco, pedido R$ 18.571/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 34 m² em Cabo Branco, pedido R$ 17.059/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45322064",
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
    "lat": -7.11734,
    "lng": -34.8188,
    "thesis": "Portal · 24 m² em Cabo Branco, pedido R$ 18.338/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45322030",
    "title": "Flat com 1 dormitório à venda, 18 m² por R$ 330.000,00 - Cabo Branco - João Pessoa/PB",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 18,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 330000,
    "condo": 162,
    "iptu": 1650,
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
    "lng": -34.818920000000006,
    "thesis": "Portal · 18 m² em Cabo Branco, pedido R$ 18.333/m² contra 12.541 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 208 m² em Manaíra, pedido R$ 4.087/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 373 m² em Manaíra, pedido R$ 3.217/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 373 m² em Manaíra, pedido R$ 3.217/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-44183632",
    "title": "Casa com 4 quartos à venda na Rua da Candelária, --, Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Da Candelária, --",
    "area": 280,
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
    "lat": -7.09856,
    "lng": -34.84284,
    "thesis": "Portal · 280 m² em Manaíra, pedido R$ 5.357/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 179 m² em Manaíra, pedido R$ 5.475/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.712/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45321964",
    "title": "Flat com 1 dormitório à venda, 35 m² por R$ 483.083,00 - Manaíra - João Pessoa/PB",
    "type": "flat",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 35,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 483083,
    "condo": 315,
    "iptu": 2415,
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
    "lat": -7.10516,
    "lng": -34.82904,
    "thesis": "Portal · 35 m² em Manaíra, pedido R$ 13.802/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 314 m² em Manaíra, pedido R$ 7.643/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.712/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-42995503",
    "title": "Casa com 3 quartos à venda na Avenida Maria Rosa, --, Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Avenida Maria Rosa, --",
    "area": 179,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1100000,
    "condo": 0,
    "iptu": 5500,
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
    "lat": -7.10302,
    "lng": -34.83955,
    "thesis": "Portal · 179 m² em Manaíra, pedido R$ 6.145/m² contra 8.924 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Bessa, pedido R$ 5.686/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Bessa, pedido R$ 7.404/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 144 m² em Bessa, pedido R$ 5.278/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 259 m² em Bessa, pedido R$ 4.247/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 173 m² em Bessa, pedido R$ 6.647/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-30662625",
    "title": "Casa com 3 quartos à venda no Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1050000,
    "condo": 0,
    "iptu": 5250,
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
    "lat": -7.08075,
    "lng": -34.83135,
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 5.250/m² contra 8.533 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 384 m² em Jardim Oceania, pedido R$ 8.333/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 22 m² em Jardim Oceania, pedido R$ 25.000/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.078417,
    "lng": -34.834311,
    "thesis": "Portal · 107 m² em Jardim Oceania, pedido R$ 4.159/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 99 m² em Jardim Oceania, pedido R$ 3.939/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 363 m² em Jardim Oceania, pedido R$ 5.510/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45321998",
    "title": "Casa com 1 quarto à venda no Jardim Oceania, João Pessoa",
    "type": "casa",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 19,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 304552,
    "condo": 0,
    "iptu": 1523,
    "seaMeters": 220,
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
    "lat": -7.0902,
    "lng": -34.83184,
    "thesis": "Portal · 19 m² em Jardim Oceania, pedido R$ 16.029/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 25 m² em Jardim Oceania, pedido R$ 17.200/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 160 m² em Jardim Oceania, pedido R$ 10.000/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 57 m² em Jardim Oceania, pedido R$ 10.111/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 195 m² em Altiplano, pedido R$ 7.692/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46607126",
    "title": "Casa de alto padrão à venda | condomínio fechado – altiplano cabo branco",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
    "area": 337,
    "rooms": 4,
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
    "lat": -7.13024,
    "lng": -34.849019999999996,
    "thesis": "Portal · 337 m² em Altiplano, pedido R$ 12.166/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Altiplano, pedido R$ 4.000/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 390 m² em Altiplano, pedido R$ 3.846/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 37 m² em Altiplano, pedido R$ 31.081/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 333 m² em Altiplano, pedido R$ 12.312/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-45256435",
    "title": "Casa Duplex para Venda em João Pessoa, Altiplano Cabo Branco, 4 dormitórios, 4 suítes, 6 b",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Professora Nair Paiva Dos Santos, 350",
    "area": 337,
    "rooms": 4,
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
    "lat": -7.13111,
    "lng": -34.83213,
    "thesis": "Portal · 337 m² em Altiplano, pedido R$ 12.166/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 280 m² em Altiplano, pedido R$ 9.286/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Altiplano, pedido R$ 11.212/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 260 m² em Aeroclube, pedido R$ 5.769/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 360 m² em Aeroclube, pedido R$ 4.167/m² contra 9.066 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 1.875/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 4.167/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 3.533/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Brisamar, pedido R$ 2.813/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Brisamar, pedido R$ 2.750/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 79 m² em Brisamar, pedido R$ 7.595/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 187 m² em Torre, pedido R$ 3.209/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Torre, pedido R$ 7.500/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 131 m² em Torre, pedido R$ 2.672/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 385 m² em Torre, pedido R$ 1.636/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 30 m² em Torre, pedido R$ 4.000/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 195 m² em Torre, pedido R$ 3.026/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Torre, pedido R$ 1.125/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 399 m² em Torre, pedido R$ 3.885/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 210 m² em Torre, pedido R$ 2.286/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 148 m² em Bancários, pedido R$ 5.338/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 330 m² em Bancários, pedido R$ 3.939/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 148 m² em Bancários, pedido R$ 5.405/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 320 m² em Bancários, pedido R$ 2.313/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Bancários, pedido R$ 2.273/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 97 m² em Bancários, pedido R$ 9.227/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 11.000/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "lat": -7.15294,
    "lng": -34.82886,
    "thesis": "Portal · 300 m² em Bancários, pedido R$ 8.333/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 270 m² em Bancários, pedido R$ 2.926/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 384 m² em Bancários, pedido R$ 2.214/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.15294,
    "lng": -34.82886,
    "thesis": "Portal · 180 m² em Bancários, pedido R$ 1.944/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Bancários, pedido R$ 4.850/m² contra 6.255 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Estados, pedido R$ 3.789/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46000407",
    "title": "Casa com 3 quartos à venda na Rua General Renato Ribeiro Morais, 399, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Rua General Renato Ribeiro Morais, 399",
    "area": 200,
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
    "lat": -7.10964,
    "lng": -34.85295,
    "thesis": "Portal · 200 m² em Estados, pedido R$ 2.750/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-38132290",
    "title": "Casa com 7 quartos à venda na Avenida Bahia, 458, Estados, João Pessoa",
    "type": "casa",
    "bairroId": "estados",
    "street": "Avenida Bahia, 458",
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
    "lat": -7.1131,
    "lng": -34.85674,
    "thesis": "Portal · 400 m² em Estados, pedido R$ 3.725/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 148 m² em Estados, pedido R$ 4.662/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Estados, pedido R$ 2.188/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 170 m² em Estados, pedido R$ 3.824/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Estados, pedido R$ 1.719/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 268 m² em Estados, pedido R$ 2.799/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Estados, pedido R$ 4.167/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 335 m² em Estados, pedido R$ 3.881/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 282 m² em Estados, pedido R$ 2.482/m² contra 6.791 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 325 m² em Expedicionários, pedido R$ 2.000/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 218 m² em Expedicionários, pedido R$ 3.440/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Expedicionários, pedido R$ 2.273/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 201 m² em Expedicionários, pedido R$ 2.239/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.128644,
    "lng": -34.855719,
    "thesis": "Portal · 399 m² em Expedicionários, pedido R$ 3.506/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.455/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 170 m² em Expedicionários, pedido R$ 4.706/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.815/m² contra 5.987 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 333 m² em Centro, pedido R$ 5.856/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 190 m² em Centro, pedido R$ 2.632/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Centro, pedido R$ 1.094/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 297 m² em Centro, pedido R$ 1.549/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.11712,
    "lng": -34.87812,
    "thesis": "Portal · 191 m² em Centro, pedido R$ 5.759/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 98 m² em Centro, pedido R$ 34.694/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 180 m² em Centro, pedido R$ 2.500/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 360 m² em Centro, pedido R$ 1.250/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.12418,
    "lng": -34.88306,
    "thesis": "Portal · 200 m² em Centro, pedido R$ 2.750/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 371 m² em Centro, pedido R$ 10.243/m² contra 4.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 193 m² em Portal do Sol, pedido R$ 12.953/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 197 m² em Portal do Sol, pedido R$ 7.563/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 90 m² em Portal do Sol, pedido R$ 12.222/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-46527316",
    "title": "Casa com 4 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
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
    "lat": -7.16296,
    "lng": -34.8502,
    "thesis": "Portal · 190 m² em Portal do Sol, pedido R$ 8.158/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-38347755",
    "title": "Casa a venda com 3 suítes no Portal do sol - João Pessoa Paraiba",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua João Fiuza Chaves, 500",
    "area": 336,
    "rooms": 3,
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
      "preco",
      "rua"
    ],
    "lat": -7.15847,
    "lng": -34.81669,
    "thesis": "Portal · 336 m² em Portal do Sol, pedido R$ 2.530/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-26099140",
    "title": "Casa à venda por R$ 750.000,00 - Portal do Sol - João Pessoa/PB",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 240,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 750000,
    "condo": 0,
    "iptu": 3750,
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
    "thesis": "Portal · 240 m² em Portal do Sol, pedido R$ 3.125/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-30745424",
    "title": "Casa com 3 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 170,
    "rooms": 3,
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
    "lat": -7.155880000000001,
    "lng": -34.83916,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.059/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 360 m² em Portal do Sol, pedido R$ 5.972/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 250 m² em Portal do Sol, pedido R$ 3.400/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-39714357",
    "title": "✨ Oportunidade incrível para morar com conforto, sofisticação e sustentabilidade! codigo: ",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 280,
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
      "rua"
    ],
    "lat": -7.16044,
    "lng": -34.84384,
    "thesis": "Portal · 280 m² em Portal do Sol, pedido R$ 5.893/m² contra 5.722 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 100 m² em Jd. Cidade Universitária, pedido R$ 8.900/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 200 m² em Jd. Cidade Universitária, pedido R$ 3.450/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 360 m² em Jd. Cidade Universitária, pedido R$ 6.528/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 99 m² em Jd. Cidade Universitária, pedido R$ 8.990/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 202 m² em Jd. Cidade Universitária, pedido R$ 4.703/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 199 m² em Jd. Cidade Universitária, pedido R$ 6.784/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-18600735",
    "title": "Casa com 4 dormitórios à venda, 120 m² por R$ 900.000 - Jardim Cidade Universitária - João",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 120,
    "rooms": 4,
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
      "rua"
    ],
    "lat": -7.15514,
    "lng": -34.83858,
    "thesis": "Portal · 120 m² em Jd. Cidade Universitária, pedido R$ 7.500/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 326 m² em Jd. Cidade Universitária, pedido R$ 4.279/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-43564239",
    "title": "Casa solta, 3 quartos, 1 suíte, terraço em L, garagem para 3 carros.",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 105,
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
      "rua"
    ],
    "lat": -7.15212,
    "lng": -34.847,
    "thesis": "Portal · 105 m² em Jd. Cidade Universitária, pedido R$ 7.143/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "lat": -7.1586153,
    "lng": -34.8422136,
    "thesis": "Portal · 164 m² em Jd. Cidade Universitária, pedido R$ 4.573/m² contra 5.856 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 67 m² em Gramame, pedido R$ 2.313/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 68 m² em Gramame, pedido R$ 3.235/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.436/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 4.700/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-39222645",
    "title": "Casa com 2 quartos à venda na Rua Inácio Marcelino, Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Inácio Marcelino, ",
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
    "lat": -7.20058,
    "lng": -34.86664,
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.000/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 4.179/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-45176250",
    "title": "Casa com 2 quartos à venda na Rua Professora Maria Amália Souto Maior, 204, Gramame, João ",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Professora Maria Amália Souto Maior, 204",
    "area": 55,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 330000,
    "condo": 0,
    "iptu": 1650,
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
    "lat": -7.1984003,
    "lng": -34.8709095,
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 6.000/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 100 m² em Gramame, pedido R$ 2.200/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 73 m² em Gramame, pedido R$ 3.425/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.180/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 100 m² em Gramame, pedido R$ 2.000/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 3.750/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-38118423",
    "title": "Casa com 3 quartos à venda no Gramame, João Pessoa",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Gramame, João Pessoa",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 350000,
    "condo": 0,
    "iptu": 1750,
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
    "lat": -7.2147,
    "lng": -34.83556,
    "thesis": "Portal · 78 m² em Gramame, pedido R$ 4.487/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.000/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.606/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.170599,
    "lng": -34.844328,
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 3.558/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45551766",
    "title": "Casa com 3 quartos à venda na Rua Josefa Adelita Farias Aguiar, 145, Mangabeira, João Pess",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Josefa Adelita Farias Aguiar, 145",
    "area": 100,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 215000,
    "condo": 0,
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
      "rua"
    ],
    "lat": -7.1745,
    "lng": -34.82819,
    "thesis": "Portal · 100 m² em Mangabeira, pedido R$ 2.150/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46685437",
    "title": "Casa com 3 quartos em localização privilegiada em Mangabeira!!!",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Professora Wanda De Farias Coutinho, ",
    "area": 100,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 329000,
    "condo": 0,
    "iptu": 1645,
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
    "lat": -7.16541,
    "lng": -34.83184,
    "thesis": "Portal · 100 m² em Mangabeira, pedido R$ 3.290/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-46026987",
    "title": "josefa TaveiraCasa Em Mangabeira I com 2 quartos- Paralela a",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Josefa Taveira, ",
    "area": 100,
    "rooms": 2,
    "suites": 0,
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
    "lat": -7.17011,
    "lng": -34.83873,
    "thesis": "Portal · 100 m² em Mangabeira, pedido R$ 3.000/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-40555763",
    "title": "Casa para Venda em João Pessoa, Mangabeira, 3 dormitórios, 1 banheiro, 1 vaga",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Professor Francelino De Alencar Neves, 1000",
    "area": 200,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 490000,
    "condo": 0,
    "iptu": 2450,
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
    "lat": -7.17409,
    "lng": -34.84333,
    "thesis": "Portal · 200 m² em Mangabeira, pedido R$ 2.450/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 270 m² em Mangabeira, pedido R$ 2.407/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-15200127",
    "title": "Casa com 3 dormitórios à venda por R$ 280.000,00 - MANGABEIRA VIII - João Pessoa/PB",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 200,
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
    "thesis": "Portal · 200 m² em Mangabeira, pedido R$ 1.400/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.881/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 85 m² em Mangabeira, pedido R$ 7.647/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 98 m² em Mangabeira, pedido R$ 4.898/m² contra 4.800 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 300 m² em Cruz das Armas, pedido R$ 1.300/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Cruz das Armas, pedido R$ 5.179/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 290 m² em Cruz das Armas, pedido R$ 1.966/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 128 m² em Cruz das Armas, pedido R$ 2.500/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Cruz das Armas, pedido R$ 3.421/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 80 m² em Cruz das Armas, pedido R$ 3.750/m² contra 4.100 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 160 m² em Cristo Redentor, pedido R$ 1.938/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-39104214",
    "title": "Casa com 2 quartos à venda na Avenida Francisco Lustosa Cabral, Cristo Redentor, João Pess",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Avenida Francisco Lustosa Cabral, ",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 234500,
    "condo": 0,
    "iptu": 1173,
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
    "lat": -7.15069,
    "lng": -34.88283,
    "thesis": "Portal · 57 m² em Cristo Redentor, pedido R$ 4.114/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 125 m² em Cristo Redentor, pedido R$ 2.960/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 6.667/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 300 m² em Ernesto Geisel, pedido R$ 2.267/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 180 m² em Ernesto Geisel, pedido R$ 2.833/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 59 m² em Ernesto Geisel, pedido R$ 4.407/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 4.200/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 60 m² em Ernesto Geisel, pedido R$ 6.333/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-46319845",
    "title": "Casa com 2 quartos à venda no Ernesto Geisel, João Pessoa",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 65,
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
      "airbnb",
      "rua"
    ],
    "lat": -7.15856,
    "lng": -34.87412,
    "thesis": "Portal · 65 m² em Ernesto Geisel, pedido R$ 4.462/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-20135877",
    "title": "Casa com 3 dormitórios à venda por R$ 400.000,00 - Ernesto Geisel - João Pessoa/PB",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
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
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 125 m² em Ernesto Geisel, pedido R$ 3.200/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 65 m² em Ernesto Geisel, pedido R$ 5.385/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 135 m² em Ernesto Geisel, pedido R$ 2.889/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 380 m² em Ernesto Geisel, pedido R$ 2.632/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-29532102",
    "title": "Casa com 3 dormitórios à venda por R$ 550.000,00 - Ernesto Geisel - João Pessoa/PB",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 550000,
    "condo": 0,
    "iptu": 2750,
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
    "thesis": "Portal · 120 m² em Ernesto Geisel, pedido R$ 4.583/m² contra 4.700 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 200 m² em Castelo Branco, pedido R$ 2.200/m² contra 5.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 215 m² em Altiplano, pedido R$ 6.977/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Cristo Redentor, pedido R$ 6.875/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-46601920",
    "title": "Le Jardin Casa Concept – Conforto e Exclusividade, Casa de Alto Padrão",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Carlos Dias Fernandades, 285",
    "area": 117,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 539990,
    "condo": 0,
    "iptu": 2700,
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
    "lat": -7.16763,
    "lng": -34.86857,
    "thesis": "Portal · 117 m² em Cristo Redentor, pedido R$ 4.615/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 350 m² em Cristo Redentor, pedido R$ 3.571/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45862884",
    "title": "Casa com 3 quartos à venda na Rua Morise de Miranda Gusmão, Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Morise De Miranda Gusmão, ",
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
    "lat": -7.16334,
    "lng": -34.87107,
    "thesis": "Portal · 75 m² em Cristo Redentor, pedido R$ 5.067/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "lat": -7.16415,
    "lng": -34.87207,
    "thesis": "Portal · 161 m² em Cristo Redentor, pedido R$ 2.919/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-45348761",
    "title": "Casa com 4 quartos à venda na Rua Presidente Ranieri Mazilli, Cristo Redentor, João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Presidente Ranieri Mazilli, ",
    "area": 300,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 630000,
    "condo": 0,
    "iptu": 3150,
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
    "lat": -7.1638,
    "lng": -34.86797,
    "thesis": "Portal · 300 m² em Cristo Redentor, pedido R$ 2.100/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Cristo Redentor, pedido R$ 6.875/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "chv-12819104",
    "title": "Casa com 4 dormitórios à venda, 250 m² por R$ 1.000.000,00 - Cristo Redentor - João Pessoa",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 250,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1000000,
    "condo": 0,
    "iptu": 5000,
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
    "thesis": "Portal · 250 m² em Cristo Redentor, pedido R$ 4.000/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-34178058",
    "title": "Vendo ampla casa de 1º andar, com ótima localização no Cristo",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 300,
    "rooms": 5,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 640000,
    "condo": 0,
    "iptu": 3200,
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
    "lng": -34.8728,
    "thesis": "Portal · 300 m² em Cristo Redentor, pedido R$ 2.133/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 105 m² em Cristo Redentor, pedido R$ 5.714/m² contra 4.500 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 300 m² em Oitizeiro, pedido R$ 1.933/m² contra 3.500 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 279 m² em Funcionários, pedido R$ 1.434/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 5.167/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 110 m² em Funcionários, pedido R$ 3.818/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 1.833/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 180 m² em Funcionários, pedido R$ 1.389/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 69 m² em Funcionários, pedido R$ 2.609/m² contra 4.000 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 147 m² em Miramar, pedido R$ 6.122/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 392 m² em Miramar, pedido R$ 3.291/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 3.750/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 7.475/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 170 m² em Miramar, pedido R$ 5.765/m² contra 7.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Treze de Maio, pedido R$ 3.750/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Treze de Maio, pedido R$ 2.682/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Treze de Maio, pedido R$ 2.091/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Treze de Maio, pedido R$ 2.091/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 185 m² em Treze de Maio, pedido R$ 3.508/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 120 m² em Treze de Maio, pedido R$ 4.375/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Alto do Mateus, pedido R$ 2.000/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 378 m² em Alto do Mateus, pedido R$ 661/m² contra 3.800 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.545/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 100 m² em Indústrias, pedido R$ 1.600/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 364 m² em Indústrias, pedido R$ 1.058/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 305 m² em Indústrias, pedido R$ 689/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "thesis": "Portal · 58 m² em Indústrias, pedido R$ 3.362/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 120 m² em Indústrias, pedido R$ 1.500/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
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
    "lat": -7.189279999999999,
    "lng": -34.87588,
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 4.182/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 57 m² em Indústrias, pedido R$ 3.509/m² contra 3.600 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "cx-2969965",
    "title": "Apartamento Caixa 2969965",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2969965 RUA JOAO MARIA DE ARAUJO,N. ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 162000,
    "condo": 540,
    "iptu": 810,
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
    "lat": -7.210859999999999,
    "lng": -34.84756,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.700/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 3
  },
  {
    "id": "cx-2304944",
    "title": "Apartamento Caixa 2304944",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2304944 RUA DOUTOR AUGUSTO DE ALMEIDA FI",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 261014,
    "condo": 540,
    "iptu": 1305,
    "seaMeters": 8200,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.21518,
    "lng": -34.8442,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 4.350/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 3
  },
  {
    "id": "cx-2969961",
    "title": "Apartamento Caixa 2969961",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2969961 RUA GILBERTO STUCKERT,N. 49 ",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 261014,
    "condo": 540,
    "iptu": 1305,
    "seaMeters": 220,
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
    "lat": -7.08624,
    "lng": -34.84096,
    "thesis": "Leilão Caixa · 60 m² em Jardim Oceania, pedido R$ 4.350/m² contra 10.872 do bairro. Colheita 21 de set. de 2026.",
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
    "id": "cx-2889907",
    "title": "Apartamento Caixa 2889907",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2889907 RUA DOUTOR VALDEVINO GREGORI",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 144767,
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
    "lat": -7.2093,
    "lng": -34.84852,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.413/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 8
  },
  {
    "id": "cx-2695786",
    "title": "Apartamento Caixa 2695786",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2695786 RUA JOAQUIM ALVES BEZERRA,N. 235",
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
    "lat": -7.215059999999999,
    "lng": -34.84876,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.333/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 3
  },
  {
    "id": "cx-2982900",
    "title": "Casa Caixa 2982900",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Casa em Leilão em João Pessoa / PB - 2982900 RUA GABRIEL FELIPE DOS SANTOS,N. 49",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 140000,
    "condo": 0,
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
      "rua"
    ],
    "lat": -7.210859999999999,
    "lng": -34.85212,
    "thesis": "Leilão Caixa · 120 m² em Gramame, pedido R$ 1.167/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 1
  },
  {
    "id": "cx-2969963",
    "title": "Apartamento Caixa 2969963",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2969963 RUA JOSE MATIAS GUEDES,N. 13",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 159000,
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
    "lat": -7.2111,
    "lng": -34.84756,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.650/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 1
  },
  {
    "id": "cx-2575144",
    "title": "Apartamento Caixa 2575144",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2575144 RUA PROFESSORA MARIA IGNES PEREG",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 85770,
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
    "lat": -7.21302,
    "lng": -34.84912,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 1.430/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 3
  },
  {
    "id": "cx-2575145",
    "title": "Apartamento Caixa 2575145",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2575145 RUA NIZA SIQUEIRA DE MELO,N. 276",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 262500,
    "condo": 540,
    "iptu": 1313,
    "seaMeters": 8200,
    "condition": 0.78,
    "daysListed": 14,
    "portalCount": 0,
    "sources": [
      "leilao"
    ],
    "radars": [
      "airbnb"
    ],
    "lat": -7.212899999999999,
    "lng": -34.84912,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 4.375/m² contra 3.900 do bairro. Colheita 21 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 4
  }
] as Listing[];
