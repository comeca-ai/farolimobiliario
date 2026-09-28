import type { Listing } from "./listings.ts";
import type { HarvestReport } from "@/lib/harvest";

export const HARVEST_REPORT: HarvestReport = {
  "at": "2026-09-28T12:05:40.823Z",
  "portalListed": 12903,
  "raw": 758,
  "kept": 589,
  "dropped": 169,
  "bySource": {
    "portal": 583,
    "leilao": 6
  },
  "byBairro": {
    "cabo-branco": 30,
    "jcu": 29,
    "bessa": 27,
    "treze-de-maio": 22,
    "brisamar": 20,
    "jardim-oceania": 31,
    "manaira": 26,
    "tambau": 20,
    "aeroclube": 18,
    "expedicionarios": 21,
    "portal-do-sol": 24,
    "cristo": 30,
    "bancarios": 33,
    "estados": 28,
    "altiplano": 28,
    "torre": 26,
    "centro": 13,
    "gramame": 30,
    "mangabeira": 24,
    "cruz-das-armas": 13,
    "geisel": 25,
    "castelo-branco": 16,
    "oitizeiro": 2,
    "funcionarios": 16,
    "miramar": 21,
    "alto-do-mateus": 2,
    "industrias": 14
  },
  "feedsOk": 65,
  "feedsFail": 9,
  "browserOk": 0,
  "browserFail": 9
} as HarvestReport;

export const HARVESTED_LISTINGS: Listing[] = [
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
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 16.821/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 5.122/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-40312556",
    "title": "Maravilhoso apartamento de alto padrao no bessa-porteira fechada com 2 vagas de garagem.",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Napoleão Gomes Varela, ",
    "area": 81,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 790000,
    "condo": 729,
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
    "lat": -7.06734,
    "lng": -34.842679999999994,
    "thesis": "Portal · 81 m² em Bessa, pedido R$ 9.753/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 46 m² em Treze de Maio, pedido R$ 6.217/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-37818321",
    "title": "Cobertura exclusiva à beira-mar no Cabo Branco Em uma das praias mais encantadoras de João",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, 2600",
    "area": 214,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 4482021,
    "condo": 1926,
    "iptu": 22410,
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
    "thesis": "Portal · 214 m² em Cabo Branco, pedido R$ 20.944/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-39303015",
    "title": "Lindo Apartamento com 3 suítes no Brisamar! Super ventilado ! Móveis novos !",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Custódio Domingos Dos Santos, 181",
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
    "lat": -7.115396,
    "lng": -34.840465,
    "thesis": "Portal · 183 m² em Brisamar, pedido R$ 9.563/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 42 m² em Jardim Oceania, pedido R$ 16.678/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-34335671",
    "title": "Apartamento com 3 quartos à venda no Jardim Oceania, João Pessoa",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 78,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 700000,
    "condo": 702,
    "iptu": 3500,
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
    "lat": -7.08744,
    "lng": -34.83052,
    "thesis": "Portal · 78 m² em Jardim Oceania, pedido R$ 8.974/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46220333",
    "title": "Apartamento para venda com 2 quartos entre o Parque Paraíba 1 e 2",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Comerciante José Miranda De Araújo, 185",
    "area": 59,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 600000,
    "condo": 531,
    "iptu": 3000,
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
    "lat": -7.08251,
    "lng": -34.8393,
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 10.169/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-43208596",
    "title": "Maravilhoso Apto 2 quartos em Manaira. Cond. especiais financiamento.",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 699900,
    "condo": 540,
    "iptu": 3500,
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
    "lat": -7.09712,
    "lng": -34.83444,
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 11.665/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-37147643",
    "title": "Apartamento com 2 quartos à venda na Avenida Almirante Tamandaré, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Avenida Almirante Tamandaré, ",
    "area": 77,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 950000,
    "condo": 693,
    "iptu": 4750,
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
    "lat": -7.1145,
    "lng": -34.8226,
    "thesis": "Portal · 77 m² em Tambaú, pedido R$ 12.338/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45869436",
    "title": "Apartamento com 2 quartos à venda na Rua Bacharel Irenaldo de Albuquerque Chaves, 260, Aer",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Rua Bacharel Irenaldo De Albuquerque Chaves, 260",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 580000,
    "condo": 522,
    "iptu": 2900,
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
    "lat": -7.07928,
    "lng": -34.84637,
    "thesis": "Portal · 58 m² em Aeroclube, pedido R$ 10.000/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-45799470",
    "title": "Cobertura com 1 quarto à venda na Avenida Presidente Afonso Pena, 64, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente Afonso Pena, 64",
    "area": 39,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 672809,
    "condo": 351,
    "iptu": 3364,
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
    "lat": -7.07204,
    "lng": -34.83443,
    "thesis": "Portal · 39 m² em Bessa, pedido R$ 17.252/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 260 m² em Brisamar, pedido R$ 9.231/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 160 m² em Expedicionários, pedido R$ 3.750/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.353/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Portal do Sol, pedido R$ 3.788/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46256737",
    "title": "Oportunidade!! Casa nos Bancários com piscina!!! R$ 799.000,00",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 138,
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
    "lat": -7.14636,
    "lng": -34.85848,
    "thesis": "Portal · 138 m² em Bancários, pedido R$ 5.797/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-44341557",
    "title": "Linda casa nova recém construída 3 quartos com piscina 2vaga",
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
    "lat": -7.14452,
    "lng": -34.87532,
    "thesis": "Portal · 80 m² em Cristo Redentor, pedido R$ 6.875/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-46781688",
    "title": "Flat mobiliado de 23m², nascente e com lazer completo por R$ 270 mil",
    "type": "flat",
    "bairroId": "aeroclube",
    "street": "Rua Ana Cristina Rolim Machado, ",
    "area": 23,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 270000,
    "condo": 207,
    "iptu": 1350,
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
    "lat": -7.08282,
    "lng": -34.84408,
    "thesis": "Portal · 23 m² em Aeroclube, pedido R$ 11.739/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.1573131,
    "lng": -34.8373053,
    "thesis": "Portal · 75 m² em Jd. Cidade Universitária, pedido R$ 8.667/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 45 m² em Jardim Oceania, pedido R$ 14.444/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-44282004",
    "title": "Cobertura com 4 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 163,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1300000,
    "condo": 1467,
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
    "lat": -7.07142,
    "lng": -34.834999999999994,
    "thesis": "Portal · 163 m² em Bessa, pedido R$ 7.975/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 130 m² em Estados, pedido R$ 5.769/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-45740945",
    "title": "Apartamento à venda 77 metros 02 quartos R$ 1.160.000,00 Cabo Branco- João Pessoa-PB",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Avenida Cabo Branco, ",
    "area": 77,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1160000,
    "condo": 693,
    "iptu": 5800,
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
    "lat": -7.14384,
    "lng": -34.81295,
    "thesis": "Portal · 77 m² em Cabo Branco, pedido R$ 15.065/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-45871947",
    "title": "Flat com 1 quarto à venda na Rua Escrivão Sebastião de Azevedo Bastos, 350, Manaíra, João ",
    "type": "flat",
    "bairroId": "manaira",
    "street": "Rua Escrivão Sebastião De Azevedo Bastos, 350",
    "area": 28,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 410000,
    "condo": 252,
    "iptu": 2050,
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
    "lat": -7.09944,
    "lng": -34.83951,
    "thesis": "Portal · 28 m² em Manaíra, pedido R$ 14.643/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-44799531",
    "title": "Apartamento com 3 quartos à venda na Rua Huerta Ferreira de Melo, 300, Jardim Oceania, Joã",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Huerta Ferreira De Melo, 300",
    "area": 80,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 570164,
    "condo": 720,
    "iptu": 2851,
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
    "lat": -7.08994,
    "lng": -34.83804,
    "thesis": "Portal · 80 m² em Jardim Oceania, pedido R$ 7.127/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-42829305",
    "title": "Apartamento com 3 quartos à venda na Rua Nurisman de Andrade Carneiro, Jardim Cidade Unive",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua Nurisman De Andrade Carneiro, ",
    "area": 63,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 365000,
    "condo": 567,
    "iptu": 1825,
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
    "lat": -7.15595,
    "lng": -34.83073,
    "thesis": "Portal · 63 m² em Jd. Cidade Universitária, pedido R$ 5.794/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-37307347",
    "title": "Flats modernos a 70m do mar no Cabo Branco.",
    "type": "flat",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 31,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 489900,
    "condo": 279,
    "iptu": 2450,
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
    "lat": -7.1183000000000005,
    "lng": -34.81712,
    "thesis": "Portal · 31 m² em Cabo Branco, pedido R$ 15.803/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-45862896",
    "title": "Cobertura para Venda em João Pessoa, Jardim Oceania, 4 dormitórios, 2 suítes, 4 banheiros,",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Avenida Governador Argemiro De Figueiredo, 100",
    "area": 360,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1900000,
    "condo": 3240,
    "iptu": 9500,
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
    "lat": -7.0716914,
    "lng": -34.8342202,
    "thesis": "Portal · 360 m² em Jardim Oceania, pedido R$ 5.278/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-43566150",
    "title": "Cobertura com 120m² vertical, vista mar, a apenas 50 metros da Orla do Cabo Branco em João",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 120,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 1260000,
    "condo": 1080,
    "iptu": 6300,
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
    "lat": -7.11878,
    "lng": -34.83236,
    "thesis": "Portal · 120 m² em Cabo Branco, pedido R$ 10.500/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 210 m² em Bessa, pedido R$ 15.352/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-37358255",
    "title": "Cobertura com Área 107,78m² à Venda – Residencial Cristo Redentor III",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Dom Bosco, 593",
    "area": 107,
    "rooms": 2,
    "suites": 1,
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
    "lat": -7.152784,
    "lng": -34.878701,
    "thesis": "Portal · 107 m² em Cristo Redentor, pedido R$ 3.019/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 6.000/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-41740137",
    "title": "Cobertura Exclusiva a 300m da Praia em Cabo Branco com Hidromassagem Privativa — O Refúgio",
    "type": "apto",
    "bairroId": "cabo-branco",
    "street": "Cabo Branco, João Pessoa",
    "area": 134,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1100000,
    "condo": 1206,
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
    "lat": -7.12298,
    "lng": -34.825160000000004,
    "thesis": "Portal · 134 m² em Cabo Branco, pedido R$ 8.209/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 361 m² em Cabo Branco, pedido R$ 6.094/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 125 m² em Bessa, pedido R$ 7.120/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-20325883",
    "title": "Cobertura com 3 quartos à venda na Rua General Alfredo Floro Cantalice, 34, Bancários, Joã",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua General Alfredo Floro Cantalice, 34",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 629000,
    "condo": 657,
    "iptu": 3145,
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
    "lat": -7.14356,
    "lng": -34.84539,
    "thesis": "Portal · 73 m² em Bancários, pedido R$ 8.616/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-24428330",
    "title": "Cobertura a beira mar com 4 dormitórios à venda, 364 m²- Bessa - João Pessoa/PB",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 364,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 800000,
    "condo": 3276,
    "iptu": 4000,
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
    "lat": -7.06542,
    "lng": -34.83752,
    "thesis": "Portal · 364 m² em Bessa, pedido R$ 2.198/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.552/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 49 m² em Tambaú, pedido R$ 14.061/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Tambaú, pedido R$ 8.750/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 110 m² em Tambaú, pedido R$ 6.264/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 315 m² em Tambaú, pedido R$ 7.937/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 82 m² em Tambaú, pedido R$ 8.049/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 26 m² em Tambaú, pedido R$ 14.615/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Tambaú, pedido R$ 6.316/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 145 m² em Tambaú, pedido R$ 12.276/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "lat": -7.11456,
    "lng": -34.83012,
    "thesis": "Portal · 90 m² em Tambaú, pedido R$ 5.444/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 41 m² em Tambaú, pedido R$ 24.781/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 157 m² em Tambaú, pedido R$ 10.191/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-40054050",
    "title": "Apartamento com 3 quartos à venda na Rua Monteiro Lobato, Tambaú, João Pessoa",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Monteiro Lobato, ",
    "area": 113,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 1017,
    "iptu": 2750,
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
    "lat": -7.11597,
    "lng": -34.82776,
    "thesis": "Portal · 113 m² em Tambaú, pedido R$ 4.867/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46186885",
    "title": "O Melhor de Tambaú/João Pessoa: Apartamento Amplo de 161m² e 4 Suítes",
    "type": "apto",
    "bairroId": "tambau",
    "street": "Rua Silvino Lopes, ",
    "area": 161,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 930000,
    "condo": 1449,
    "iptu": 4650,
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
    "lat": -7.11591,
    "lng": -34.82867,
    "thesis": "Portal · 161 m² em Tambaú, pedido R$ 5.776/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 12.697/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 108 m² em Cabo Branco, pedido R$ 19.986/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 73 m² em Cabo Branco, pedido R$ 11.644/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 45 m² em Cabo Branco, pedido R$ 14.222/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Cabo Branco, pedido R$ 10.400/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.114820000000001,
    "lng": -34.83428,
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 12.697/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 83 m² em Cabo Branco, pedido R$ 6.627/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 92 m² em Cabo Branco, pedido R$ 12.935/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 72 m² em Cabo Branco, pedido R$ 16.667/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 61 m² em Cabo Branco, pedido R$ 11.148/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 72 m² em Cabo Branco, pedido R$ 16.200/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 48 m² em Cabo Branco, pedido R$ 11.969/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 80 m² em Manaíra, pedido R$ 10.950/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-44918401",
    "title": "Apartamento com 3 quartos, posição sul e lazer completo na melhor localização de manaíra",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Rua Joaquim Carneiro De Mesquita, 147",
    "area": 110,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 579000,
    "condo": 990,
    "iptu": 2895,
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
    "lat": -7.10024,
    "lng": -34.84171,
    "thesis": "Portal · 110 m² em Manaíra, pedido R$ 5.264/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "ask": 1499000,
    "condo": 1836,
    "iptu": 7495,
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
    "thesis": "Portal · 204 m² em Manaíra, pedido R$ 7.348/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 73 m² em Manaíra, pedido R$ 8.014/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 90 m² em Manaíra, pedido R$ 9.444/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 11.333/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-24902008",
    "title": "Vendo apartamento na modalidade porteira fechada com vista-mar",
    "type": "apto",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 103,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 765000,
    "condo": 927,
    "iptu": 3825,
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
    "lat": -7.09856,
    "lng": -34.83276,
    "thesis": "Portal · 103 m² em Manaíra, pedido R$ 7.427/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 123 m² em Manaíra, pedido R$ 4.837/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 27 m² em Manaíra, pedido R$ 12.530/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.11139,
    "lng": -34.83136,
    "thesis": "Portal · 143 m² em Manaíra, pedido R$ 5.944/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 67 m² em Manaíra, pedido R$ 5.224/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Manaíra, pedido R$ 10.817/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 83 m² em Manaíra, pedido R$ 4.216/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-44854165",
    "title": "Pronto para morar e completamente mobiliado no jardim oceania!",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Rua Doutor Damasquins Ramos Maciel, 464",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 529900,
    "condo": 540,
    "iptu": 2650,
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
    "lat": -7.06991,
    "lng": -34.84097,
    "thesis": "Portal · 60 m² em Bessa, pedido R$ 8.832/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-41899914",
    "title": "Apartamento com 2 quartos à venda na Avenida Presidente Café Filho, 426, Bessa, João Pesso",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Presidente Café Filho, 426",
    "area": 82,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 610578,
    "condo": 738,
    "iptu": 3053,
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
    "lat": -7.0682,
    "lng": -34.84175,
    "thesis": "Portal · 82 m² em Bessa, pedido R$ 7.446/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 70 m² em Bessa, pedido R$ 7.786/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 116 m² em Bessa, pedido R$ 4.741/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-32595847",
    "title": "Apartamentos com 2 e 3 quartos no bessa, área de lazer completa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Escritor Ramalho Leite, ",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 449000,
    "condo": 477,
    "iptu": 2245,
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
    "lat": -7.06914,
    "lng": -34.84712,
    "thesis": "Portal · 53 m² em Bessa, pedido R$ 8.472/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-33875999",
    "title": "Apartamento com 3 quartos à venda no Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Bessa, João Pessoa",
    "area": 75,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 676784,
    "condo": 675,
    "iptu": 3384,
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
    "lat": -7.0737,
    "lng": -34.847719999999995,
    "thesis": "Portal · 75 m² em Bessa, pedido R$ 9.024/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 105 m² em Bessa, pedido R$ 7.143/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 78 m² em Bessa, pedido R$ 6.372/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 115 m² em Bessa, pedido R$ 9.130/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 73 m² em Bessa, pedido R$ 10.137/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 8.750/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 105 m² em Bessa, pedido R$ 6.143/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Bessa, pedido R$ 5.140/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Jardim Oceania, pedido R$ 10.697/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-45431997",
    "title": "Apartamento com 3 quartos à venda na Rua Cantora Maria da Glória Gouveia de Vasconcelos, J",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Cantora Maria Da Glória Gouveia De Vasconcelos, ",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 989000,
    "condo": 810,
    "iptu": 4945,
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
    "lat": -7.08713,
    "lng": -34.83794,
    "thesis": "Portal · 90 m² em Jardim Oceania, pedido R$ 10.989/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44832111",
    "title": "Apartamento com 3 quartos à venda na Rua Francisco Pereira Dantas, 650, Jardim Oceania, Jo",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Francisco Pereira Dantas, 650",
    "area": 105,
    "rooms": 3,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 1270000,
    "condo": 945,
    "iptu": 6350,
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
    "lat": -7.07915,
    "lng": -34.83798,
    "thesis": "Portal · 105 m² em Jardim Oceania, pedido R$ 12.095/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 65 m² em Jardim Oceania, pedido R$ 12.462/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-46171229",
    "title": "Apartamento para Venda em João Pessoa, Jardim Oceania, 3 dormitórios, 2 suítes, 3 banheiro",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Josefa De Miranda Freire, 85",
    "area": 98,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1150000,
    "condo": 882,
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
    "lat": -7.08613,
    "lng": -34.83636,
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 11.735/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 16.667/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-34793475",
    "title": "Imóvel exclusivo com 03 quartos há 200 m do mar, ao lado do parq",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Rua Norberto De Castro Nogueira, 1200",
    "area": 115,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 940000,
    "condo": 1035,
    "iptu": 4700,
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
    "lat": -7.07831,
    "lng": -34.83245,
    "thesis": "Portal · 115 m² em Jardim Oceania, pedido R$ 8.174/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-37476471",
    "title": "Apartamento à Venda no Jardim Oceania | 3 quartos | 2 suítes | 90m²",
    "type": "apto",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 90,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 1200000,
    "condo": 810,
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
    "lat": -7.0866,
    "lng": -34.83184,
    "thesis": "Portal · 90 m² em Jardim Oceania, pedido R$ 13.333/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 61 m² em Jardim Oceania, pedido R$ 11.393/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 59 m² em Jardim Oceania, pedido R$ 11.525/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 17.872/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 63 m² em Jardim Oceania, pedido R$ 17.460/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 61 m² em Jardim Oceania, pedido R$ 10.656/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 85 m² em Jardim Oceania, pedido R$ 10.588/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 55 m² em Altiplano, pedido R$ 7.429/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 10.750/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 105 m² em Altiplano, pedido R$ 16.381/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 64 m² em Altiplano, pedido R$ 10.806/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 54 m² em Altiplano, pedido R$ 7.870/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "ask": 485900,
    "condo": 612,
    "iptu": 2430,
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
    "thesis": "Portal · 68 m² em Altiplano, pedido R$ 7.146/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 132 m² em Altiplano, pedido R$ 5.379/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 59 m² em Altiplano, pedido R$ 20.841/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-45862880",
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
    "thesis": "Portal · 72 m² em Altiplano, pedido R$ 12.014/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-40496009",
    "title": "Apartamento 96m² no Horizon Altiplano | 3 Quartos, 2 Suítes, 2 Vagas, Nascente Sul e Lazer",
    "type": "apto",
    "bairroId": "altiplano",
    "street": "Altiplano, João Pessoa",
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
    "lat": -7.136,
    "lng": -34.847339999999996,
    "thesis": "Portal · 96 m² em Altiplano, pedido R$ 15.521/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 67 m² em Altiplano, pedido R$ 5.896/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Altiplano, pedido R$ 18.000/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Altiplano, pedido R$ 8.500/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 82 m² em Aeroclube, pedido R$ 9.634/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 49 m² em Aeroclube, pedido R$ 9.429/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 139 m² em Aeroclube, pedido R$ 6.475/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.397/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 171 m² em Aeroclube, pedido R$ 5.263/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 89 m² em Aeroclube, pedido R$ 12.859/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 68 m² em Aeroclube, pedido R$ 12.532/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 135 m² em Aeroclube, pedido R$ 11.333/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 136 m² em Aeroclube, pedido R$ 11.029/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 64 m² em Aeroclube, pedido R$ 8.906/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 35 m² em Aeroclube, pedido R$ 11.143/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 75 m² em Aeroclube, pedido R$ 9.733/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-46605145",
    "title": "Apartamento 3 Quartos, Súite, Vaga de Garagem, Bessa, João Pessoa, PB.",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 84,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 379900,
    "condo": 756,
    "iptu": 1900,
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
    "lat": -7.05412,
    "lng": -34.85234,
    "thesis": "Portal · 84 m² em Aeroclube, pedido R$ 4.523/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-36462377",
    "title": "Apartamento para Venda em João Pessoa, Aeroclube, 2 dormitórios, 1 suíte, 1 banheiro, 1 va",
    "type": "apto",
    "bairroId": "aeroclube",
    "street": "Aeroclube, João Pessoa",
    "area": 56,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 656448,
    "condo": 504,
    "iptu": 3282,
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
    "lat": -7.0552,
    "lng": -34.85414,
    "thesis": "Portal · 56 m² em Aeroclube, pedido R$ 11.722/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 42 m² em Brisamar, pedido R$ 10.238/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 85 m² em Brisamar, pedido R$ 11.176/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 10.000/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-43946333",
    "title": "Seu novo capítulo começa aqui: espaço, conforto e vista privilegiada no Brisamar",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Cassimiro De Abreu, ",
    "area": 86,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 890000,
    "condo": 774,
    "iptu": 4450,
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
    "lat": -7.11519,
    "lng": -34.83974,
    "thesis": "Portal · 86 m² em Brisamar, pedido R$ 10.349/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
  },
  {
    "id": "chv-30260066",
    "title": "Apartamento com 4 dormitórios à venda, 206 m² por R$ 2.050.000,00 - Brisamar - João Pessoa",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 206,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 3000000,
    "condo": 1854,
    "iptu": 15000,
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
    "thesis": "Portal · 206 m² em Brisamar, pedido R$ 14.563/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-40755834",
    "title": "Apartamento com 3 dormitórios à venda, 98 m² por R$ 777.000,00 - Brisamar - João Pessoa/PB",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 98,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 777000,
    "condo": 882,
    "iptu": 3885,
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
    "thesis": "Portal · 98 m² em Brisamar, pedido R$ 7.929/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-39672393",
    "title": "Apartamento Alto Padrão à Venda – Novo Empreendimento em João Pessoa - PB",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Agenor Lacet, ",
    "area": 133,
    "rooms": 3,
    "suites": 1,
    "parking": 0,
    "year": 2012,
    "ask": 1186000,
    "condo": 1197,
    "iptu": 5930,
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
    "lat": -7.10999,
    "lng": -34.84106,
    "thesis": "Portal · 133 m² em Brisamar, pedido R$ 8.917/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46848052",
    "title": "Apartamento de 82m² com 3 Quartos, Vista para o Mar e Lazer Completo",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Rua Walda Cruz Cordeiro, ",
    "area": 82,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 730000,
    "condo": 738,
    "iptu": 3650,
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
    "lat": -7.11003,
    "lng": -34.83954,
    "thesis": "Portal · 82 m² em Brisamar, pedido R$ 8.902/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-25604083",
    "title": "Apartamento com 3 dormitórios à venda, 95 m² por R$ 750.000,00 - Brisamar - João Pessoa/PB",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 95,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 750000,
    "condo": 855,
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
    "lat": -7.091,
    "lng": -34.85256,
    "thesis": "Portal · 95 m² em Brisamar, pedido R$ 7.895/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-39160585",
    "title": "APARTAMENTO PORTEIRA FECHADA NO BRISAMAR | 3 QUARTOS | 72m² | ANDAR ALTO",
    "type": "apto",
    "bairroId": "brisamar",
    "street": "Brisamar, João Pessoa",
    "area": 75,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 550000,
    "condo": 675,
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
    "lat": -7.09376,
    "lng": -34.85796,
    "thesis": "Portal · 75 m² em Brisamar, pedido R$ 7.333/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.583/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "lat": -7.12114,
    "lng": -34.86062,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.982/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 54 m² em Torre, pedido R$ 4.259/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46256814",
    "title": "Apartamento à venda no, Fit Jardim Botanico, na Torre , em João Pessoa, PB",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 69,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 340000,
    "condo": 621,
    "iptu": 1700,
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
    "lat": -7.11916,
    "lng": -34.867799999999995,
    "thesis": "Portal · 69 m² em Torre, pedido R$ 4.928/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-43331191",
    "title": "Apartamento com 3 quartos à venda na Rua José Severino Massa Spinelli, 59, Torre, João Pes",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua José Severino Massa Spinelli, 59",
    "area": 80,
    "rooms": 3,
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
    "lat": -7.13152,
    "lng": -34.85724,
    "thesis": "Portal · 80 m² em Torre, pedido R$ 5.625/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
  },
  {
    "id": "chv-42058886",
    "title": "Apartamento para venda, 2 quarto(s), Torre, João Pessoa - AP2266",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
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
    "lat": -7.11971,
    "lng": -34.85065,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 5.833/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-44877906",
    "title": "Apartamento com 3 quartos à venda no Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Torre, João Pessoa",
    "area": 55,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 435232,
    "condo": 495,
    "iptu": 2176,
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
    "lat": -7.121919999999999,
    "lng": -34.864439999999995,
    "thesis": "Portal · 55 m² em Torre, pedido R$ 7.913/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-38039254",
    "title": "Apartamento com 2 quartos à venda na Avenida Sinésio Guimarães, Torre, João Pessoa",
    "type": "apto",
    "bairroId": "torre",
    "street": "Avenida Sinésio Guimarães, ",
    "area": 47,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 234000,
    "condo": 423,
    "iptu": 1170,
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
    "lat": -7.1285,
    "lng": -34.86676,
    "thesis": "Portal · 47 m² em Torre, pedido R$ 4.979/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 61 m² em Torre, pedido R$ 7.738/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-43451094",
    "title": "Apartamento para Venda em João Pessoa, Torre, 2 dormitórios, 1 suíte, 2 banheiros, 1 vaga",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, 235",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 360000,
    "condo": 540,
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
    "lat": -7.13058,
    "lng": -34.85974,
    "thesis": "Portal · 60 m² em Torre, pedido R$ 6.000/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-43082811",
    "title": "Apartamento com 2 quartos, suíte, varanda e lazer completo no Fit Jardim Botânico, no trad",
    "type": "apto",
    "bairroId": "torre",
    "street": "Rua Etelvina Macedo De Mendonça, 600",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 367997,
    "condo": 540,
    "iptu": 1840,
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 6.133/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-40053879",
    "title": "Residencial Pedro Soares: O Lugar Perfeito Para Você Realizar o Sonho da Casa Própria com ",
    "type": "casa",
    "bairroId": "torre",
    "street": "Avenida Sinésio Guimarães, ",
    "area": 57,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 271000,
    "condo": 0,
    "iptu": 1355,
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
    "lat": -7.1285,
    "lng": -34.86676,
    "thesis": "Portal · 57 m² em Torre, pedido R$ 4.754/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 90 m² em Torre, pedido R$ 3.556/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-31537169",
    "title": "REF: LA139 - Lançamento, Apartamento à Venda, João Pessoa, Torre, 2 e 3 quartos",
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
    "thesis": "Portal · 60 m² em Torre, pedido R$ 7.933/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.204/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.14607,
    "lng": -34.83881,
    "thesis": "Portal · 55 m² em Bancários, pedido R$ 6.345/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 91 m² em Bancários, pedido R$ 6.812/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 54 m² em Bancários, pedido R$ 6.296/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 105 m² em Bancários, pedido R$ 5.047/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 66 m² em Bancários, pedido R$ 5.909/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-45477801",
    "title": "Apartamento Novo e Pronto para Morar, Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Derlópidas Gomes Neves, ",
    "area": 70,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 599000,
    "condo": 630,
    "iptu": 2995,
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
    "thesis": "Portal · 70 m² em Bancários, pedido R$ 8.557/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-44054946",
    "title": "APARTAMENTO NOS BANCÁRIOS – 3 QUARTOS, 84m2 com ELEVADOR E LOCALIZAÇÃO PRIVILEGIADA",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 84,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 430000,
    "condo": 756,
    "iptu": 2150,
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
    "lat": -7.15452,
    "lng": -34.848279999999995,
    "thesis": "Portal · 84 m² em Bancários, pedido R$ 5.119/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-36738170",
    "title": "Apartamento com 2 quartos à venda na Rua Enilson Lucena, 34, Bancários, João Pessoa",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Enilson Lucena, 34",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 370000,
    "condo": 477,
    "iptu": 1850,
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
    "lat": -7.1470546,
    "lng": -34.8403989,
    "thesis": "Portal · 53 m² em Bancários, pedido R$ 6.981/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 69 m² em Bancários, pedido R$ 5.993/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-42921756",
    "title": "Apartamento 55m² 2 quartos sendo 1 suíte nos Bancários à Venda",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
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
    "lat": -7.1526,
    "lng": -34.8562,
    "thesis": "Portal · 55 m² em Bancários, pedido R$ 6.345/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-32708532",
    "title": "Apartamento com 2 quartos à venda na Rua Waldemar Mesquita De Acioly, Bancários, João Pess",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Waldemar Mesquita De Acioly, ",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 334000,
    "condo": 477,
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
    "lat": -7.14948,
    "lng": -34.8574,
    "thesis": "Portal · 53 m² em Bancários, pedido R$ 6.302/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-44346293",
    "title": "Apartamento com 2 dormitórios à venda, 51 m² por R$ 424.950 - Bancários - João Pessoa/PB",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 424950,
    "condo": 459,
    "iptu": 2125,
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
    "thesis": "Portal · 51 m² em Bancários, pedido R$ 8.332/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46419425",
    "title": "Apartamento com 2 quartos à venda na Rua Rosa Lima dos Santos, 1200, Bancários, João Pesso",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Rosa Lima Dos Santos, 1200",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 285000,
    "condo": 540,
    "iptu": 1425,
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
    "lng": -34.82913,
    "thesis": "Portal · 60 m² em Bancários, pedido R$ 4.750/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 136 m² em Estados, pedido R$ 10.294/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Estados, pedido R$ 9.986/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 299 m² em Estados, pedido R$ 2.542/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 248 m² em Estados, pedido R$ 5.040/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 94 m² em Estados, pedido R$ 4.628/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Estados, pedido R$ 8.917/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 74 m² em Estados, pedido R$ 6.176/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 52 m² em Estados, pedido R$ 7.212/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 61 m² em Estados, pedido R$ 7.377/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 46 m² em Estados, pedido R$ 9.196/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 89 m² em Estados, pedido R$ 7.079/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 73 m² em Estados, pedido R$ 12.329/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46111720",
    "title": "Apartamento com 3 dormitórios à venda, 175 m² por R$ 650.000,00 - Bairro dos Estados - Joã",
    "type": "apto",
    "bairroId": "estados",
    "street": "Estados, João Pessoa",
    "area": 175,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 650000,
    "condo": 1575,
    "iptu": 3250,
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
    "lat": -7.11874,
    "lng": -34.86287,
    "thesis": "Portal · 175 m² em Estados, pedido R$ 3.714/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 74 m² em Estados, pedido R$ 8.784/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 62 m² em Estados, pedido R$ 6.371/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 100 m² em Expedicionários, pedido R$ 6.200/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 112 m² em Expedicionários, pedido R$ 4.107/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 110 m² em Expedicionários, pedido R$ 5.364/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.444/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Expedicionários, pedido R$ 7.578/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.667/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-43145116",
    "title": "Apartamento à venda no LÍVIA, EXPEDICIONÁRIOS, João Pessoa, PB",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Nabuco De Assis, 161",
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
    "lat": -7.12461,
    "lng": -34.85377,
    "thesis": "Portal · 57 m² em Expedicionários, pedido R$ 5.965/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 45 m² em Expedicionários, pedido R$ 7.556/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 103 m² em Expedicionários, pedido R$ 7.282/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-37358294",
    "title": "Apartamento com 2 quartos à venda na Rua Marechal Esperidião Rosas, 110, Expedicionários, ",
    "type": "apto",
    "bairroId": "expedicionarios",
    "street": "Rua Marechal Esperidião Rosas, 110",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 420000,
    "condo": 540,
    "iptu": 2100,
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
    "lat": -7.12071,
    "lng": -34.85339,
    "thesis": "Portal · 60 m² em Expedicionários, pedido R$ 7.000/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 57 m² em Expedicionários, pedido R$ 5.965/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 114 m² em Centro, pedido R$ 4.649/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Centro, pedido R$ 6.000/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 70 m² em Centro, pedido R$ 5.000/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-43029467",
    "title": "Apartamento com 3 quartos à venda na Avenida Campos Sales, Bessa, João Pessoa",
    "type": "apto",
    "bairroId": "bessa",
    "street": "Avenida Campos Sales, ",
    "area": 82,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 680000,
    "condo": 738,
    "iptu": 3400,
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
    "lat": -7.1151,
    "lng": -34.86108,
    "thesis": "Portal · 82 m² em Bessa, pedido R$ 8.293/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-41748582",
    "title": "Apartamento com 4 quartos à venda na Rua General Francisco de Assis Araújo Bezerra, Portal",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua General Francisco De Assis Araújo Bezerra, ",
    "area": 170,
    "rooms": 4,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 1540000,
    "condo": 1530,
    "iptu": 7700,
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
    "lat": -7.14563,
    "lng": -34.82048,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.059/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 42 m² em Portal do Sol, pedido R$ 6.429/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "lat": -7.1521355,
    "lng": -34.8161442,
    "thesis": "Portal · 59 m² em Portal do Sol, pedido R$ 4.542/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-42477574",
    "title": "Apartamento à venda, 54 m² por R$ 352.034,00 - Portal do Sol - João Pessoa/PB",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Rua Roberto Paulo Moreira Coutinho, 5",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 352034,
    "condo": 486,
    "iptu": 1760,
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
    "lat": -7.15015,
    "lng": -34.81901,
    "thesis": "Portal · 54 m² em Portal do Sol, pedido R$ 6.519/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 45 m² em Portal do Sol, pedido R$ 9.333/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 76 m² em Portal do Sol, pedido R$ 4.342/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46343245",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 44,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 264000,
    "condo": 396,
    "iptu": 1320,
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
    "lat": -7.153720000000001,
    "lng": -34.85092,
    "thesis": "Portal · 44 m² em Portal do Sol, pedido R$ 6.000/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 82 m² em Portal do Sol, pedido R$ 4.268/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 53 m² em Portal do Sol, pedido R$ 6.225/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
  },
  {
    "id": "chv-46468061",
    "title": "Apartamento com 2 quartos à venda no Portal do Sol, João Pessoa",
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
    "lat": -7.16284,
    "lng": -34.8472,
    "thesis": "Portal · 52 m² em Portal do Sol, pedido R$ 6.601/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-44359356",
    "title": "Apartamento 125m² 2 quartos sendo 2 suítes em Quadramares à Venda",
    "type": "apto",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 125,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 352152,
    "condo": 1125,
    "iptu": 1761,
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
    "lat": -7.1623600000000005,
    "lng": -34.84348,
    "thesis": "Portal · 125 m² em Portal do Sol, pedido R$ 2.817/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 51 m² em Portal do Sol, pedido R$ 6.777/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 123 m² em Jd. Cidade Universitária, pedido R$ 6.138/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 65 m² em Jd. Cidade Universitária, pedido R$ 4.292/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-45622417",
    "title": "Apartamento com 4 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 90,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 300000,
    "condo": 810,
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
    "lat": -7.14888,
    "lng": -34.83932,
    "thesis": "Portal · 90 m² em Jd. Cidade Universitária, pedido R$ 3.333/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Jd. Cidade Universitária, pedido R$ 8.036/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-42921771",
    "title": "Apartamento 63m² 2 quartos no Jardim Cidade Universitária à Venda",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 63,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 290000,
    "condo": 567,
    "iptu": 1450,
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
    "lat": -7.15248,
    "lng": -34.8464,
    "thesis": "Portal · 63 m² em Jd. Cidade Universitária, pedido R$ 4.603/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-44877874",
    "title": "Apartamento com 3 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 76,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 495000,
    "condo": 684,
    "iptu": 2475,
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
    "lat": -7.14672,
    "lng": -34.8452,
    "thesis": "Portal · 76 m² em Jd. Cidade Universitária, pedido R$ 6.513/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-42224963",
    "title": "Apartamento para Venda em João Pessoa, Jardim Cidade Universitária, 3 dormitórios, 1 suíte",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 380000,
    "condo": 585,
    "iptu": 1900,
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
    "lat": -7.14684,
    "lng": -34.84436,
    "thesis": "Portal · 65 m² em Jd. Cidade Universitária, pedido R$ 5.846/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-45334192",
    "title": "Apartamento Novo com 3 quartos Jardim Cidade Universitária",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua José Ricardo M. Morais, ",
    "area": 72,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 455000,
    "condo": 648,
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
    "lat": -7.15946,
    "lng": -34.82582,
    "thesis": "Portal · 72 m² em Jd. Cidade Universitária, pedido R$ 6.319/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-31590934",
    "title": "Apartamento com 2 quartos à venda no Jardim Cidade Universitária, João Pessoa",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 58,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 365000,
    "condo": 522,
    "iptu": 1825,
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
    "lat": -7.15236,
    "lng": -34.84028,
    "thesis": "Portal · 58 m² em Jd. Cidade Universitária, pedido R$ 6.293/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 198 m² em Jd. Cidade Universitária, pedido R$ 3.106/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.15629,
    "lng": -34.84071,
    "thesis": "Portal · 39 m² em Jd. Cidade Universitária, pedido R$ 11.282/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-44771726",
    "title": "Apartamento para venda com 2 quartos no Jardim Cidade Universitária, João Pessoa - AP2391",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Rua João Batista Carvalho Moura, ",
    "area": 63,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 278000,
    "condo": 567,
    "iptu": 1390,
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
    "lat": -7.15221,
    "lng": -34.84191,
    "thesis": "Portal · 63 m² em Jd. Cidade Universitária, pedido R$ 4.413/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-45828691",
    "title": "térreo 96m interno + 55 externo(área em L) - 3 quartos 2 suites",
    "type": "apto",
    "bairroId": "jcu",
    "street": "Jd. Cidade Universitária, João Pessoa",
    "area": 96,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 600000,
    "condo": 864,
    "iptu": 3000,
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
    "lat": -7.1436,
    "lng": -34.84448,
    "thesis": "Portal · 96 m² em Jd. Cidade Universitária, pedido R$ 6.250/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 65 m² em Jd. Cidade Universitária, pedido R$ 6.000/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 45 m² em Gramame, pedido R$ 4.022/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 3.500/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.000/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 45 m² em Gramame, pedido R$ 2.667/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 46 m² em Gramame, pedido R$ 5.565/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
  },
  {
    "id": "chv-46267842",
    "title": "À VENDA: Apt.º 59,8 m² área total, 2 Quartos, sendo 1 Suíte Reversível, em Gramame!",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Doutor Augusto De Almeida Filho, 120",
    "area": 41,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 155000,
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
      "airbnb"
    ],
    "lat": -7.1999772,
    "lng": -34.8898359,
    "thesis": "Portal · 41 m² em Gramame, pedido R$ 3.780/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
  },
  {
    "id": "chv-40880692",
    "title": "Apartamento com 2 quartos à venda na Rua Universitário Ricardo Augusto Barbosa, 86, Gramam",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Universitário Ricardo Augusto Barbosa, 86",
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
    "lat": -7.221734,
    "lng": -34.845381,
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.600/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46819344",
    "title": "Apartamento com 2 quartos à venda na Rua Manoel Felisberto da Silva, 1, Gramame, João Pess",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Manoel Felisberto Da Silva, 1",
    "area": 49,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 155000,
    "condo": 441,
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
    "lat": -7.19895,
    "lng": -34.86528,
    "thesis": "Portal · 49 m² em Gramame, pedido R$ 3.163/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 2.700/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 3.700/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
  },
  {
    "id": "chv-37358114",
    "title": "Apartamento com 2 dormitórios à venda, 48 m² por R$ 188.000 - Gramame - João Pessoa/PB",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Rua Professora Maria Araújo Dias, ",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 188000,
    "condo": 432,
    "iptu": 940,
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
    "lat": -7.19764,
    "lng": -34.87066,
    "thesis": "Portal · 48 m² em Gramame, pedido R$ 3.917/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 47 m² em Mangabeira, pedido R$ 5.106/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 3.852/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 4.135/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Mangabeira, pedido R$ 3.857/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 46 m² em Mangabeira, pedido R$ 3.261/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 4.400/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-42921785",
    "title": "Apartamento com 2 quartos à venda no Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 20,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 230000,
    "condo": 180,
    "iptu": 1150,
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
    "lat": -7.17244,
    "lng": -34.8566,
    "thesis": "Portal · 20 m² em Mangabeira, pedido R$ 11.500/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 4.560/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-44877913",
    "title": "Apartamento com 2 quartos à venda no Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Mangabeira, João Pessoa",
    "area": 53,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 269100,
    "condo": 477,
    "iptu": 1346,
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
    "lat": -7.16992,
    "lng": -34.855039999999995,
    "thesis": "Portal · 53 m² em Mangabeira, pedido R$ 5.077/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-44940218",
    "title": "Apartamento com 2 quartos à venda na Rua João Batista da Silva, Mangabeira, João Pessoa",
    "type": "apto",
    "bairroId": "mangabeira",
    "street": "Rua João Batista Da Silva, ",
    "area": 48,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 215000,
    "condo": 432,
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
    "lat": -7.179582099999999,
    "lng": -34.8280272,
    "thesis": "Portal · 48 m² em Mangabeira, pedido R$ 4.479/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 50 m² em Mangabeira, pedido R$ 3.600/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 4.135/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 61 m² em Mangabeira, pedido R$ 4.016/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 45 m² em Cruz das Armas, pedido R$ 4.222/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45867232",
    "title": "Apartamento 2 Quartos no Residencial Negreiros - Cruz das Armas",
    "type": "apto",
    "bairroId": "cruz-das-armas",
    "street": "Rua Coronel Estevão Dávila Lins, S/N",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 229990,
    "condo": 540,
    "iptu": 1150,
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
    "lat": -7.14019,
    "lng": -34.88405,
    "thesis": "Portal · 60 m² em Cruz das Armas, pedido R$ 3.833/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Cruz das Armas, pedido R$ 4.166/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "lat": -7.13446,
    "lng": -34.88754,
    "thesis": "Portal · 50 m² em Cruz das Armas, pedido R$ 3.600/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 86 m² em Cruz das Armas, pedido R$ 6.977/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 98 m² em Jardim Oceania, pedido R$ 13.265/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-37804375",
    "title": "Natureza, Paz e conforto em um só lugar, é o seu novo apartamento.",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 215000,
    "condo": 450,
    "iptu": 1075,
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
    "lat": -7.16468,
    "lng": -34.86548,
    "thesis": "Portal · 50 m² em Ernesto Geisel, pedido R$ 4.300/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.220/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
  },
  {
    "id": "chv-45514480",
    "title": "Apartamento com 2 dormitórios à venda, 50 m² por R$ 256.000 - Novo Geisel - João Pessoa/PB",
    "type": "apto",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 50,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 256000,
    "condo": 450,
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
    "lat": -7.17896,
    "lng": -34.87252,
    "thesis": "Portal · 50 m² em Ernesto Geisel, pedido R$ 5.120/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 41 m² em Ernesto Geisel, pedido R$ 5.220/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 4.750/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
  },
  {
    "id": "chv-46416778",
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
    "thesis": "Portal · 48 m² em Ernesto Geisel, pedido R$ 8.333/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 45 m² em Ernesto Geisel, pedido R$ 4.756/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 51 m² em Ernesto Geisel, pedido R$ 4.118/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 51 m² em Ernesto Geisel, pedido R$ 2.941/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Ernesto Geisel, pedido R$ 3.636/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 40 m² em Ernesto Geisel, pedido R$ 5.623/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
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
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 3.860/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 68 m² em Castelo Branco, pedido R$ 4.118/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 81 m² em Castelo Branco, pedido R$ 7.889/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 42 m² em Castelo Branco, pedido R$ 6.071/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.13165,
    "lng": -34.8406,
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 11.250/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 4.732/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-37358455",
    "title": "Apartamento com 3 quartos à venda na Rua Onaldo da Silva Coutinho, 1, Castelo Branco, João",
    "type": "apto",
    "bairroId": "castelo-branco",
    "street": "Rua Onaldo Da Silva Coutinho, 1",
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
    "lat": -7.1318807,
    "lng": -34.8486115,
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Castelo Branco, pedido R$ 7.677/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 81 m² em Castelo Branco, pedido R$ 7.900/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 70 m² em Castelo Branco, pedido R$ 4.286/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 45 m² em Castelo Branco, pedido R$ 4.778/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 40 m² em Castelo Branco, pedido R$ 5.000/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 43 m² em Cristo Redentor, pedido R$ 4.395/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
  },
  {
    "id": "chv-46307382",
    "title": "Oportunidade - apartamento a venda no bairro do cristo em joão pessoa / pb",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 45,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 220000,
    "condo": 405,
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
    "lat": -7.1502799999999995,
    "lng": -34.88,
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 4.889/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 55 m² em Cristo Redentor, pedido R$ 4.000/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-40063416",
    "title": "Apartamento com 2 dormitórios à venda, 51 m² por R$ 249.896,00 - Cristo Redentor - João Pe",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Petrarca Grisi, 85",
    "area": 51,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 249896,
    "condo": 459,
    "iptu": 1249,
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
    "thesis": "Portal · 51 m² em Cristo Redentor, pedido R$ 4.900/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 79 m² em Cristo Redentor, pedido R$ 5.316/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 54 m² em Cristo Redentor, pedido R$ 7.037/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 129 m² em Cristo Redentor, pedido R$ 3.333/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Cristo Redentor, pedido R$ 5.625/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-46638714",
    "title": "Apartamento com 3 quartos à venda no Cristo Redentor, João Pessoa",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 65,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 390000,
    "condo": 585,
    "iptu": 1950,
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
    "lat": -7.14956,
    "lng": -34.88576,
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 6.000/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 45 m² em Cristo Redentor, pedido R$ 5.111/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 65 m² em Cristo Redentor, pedido R$ 6.123/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
  },
  {
    "id": "chv-46416791",
    "title": "Apartamento com 3 quartos à venda na Rua Nereu de Morais Coelho, Cristo Redentor, João Pes",
    "type": "apto",
    "bairroId": "cristo",
    "street": "Rua Nereu De Morais Coelho, ",
    "area": 72,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 299900,
    "condo": 648,
    "iptu": 1500,
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
    "lat": -7.15759,
    "lng": -34.87217,
    "thesis": "Portal · 72 m² em Cristo Redentor, pedido R$ 4.165/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 49 m² em Oitizeiro, pedido R$ 2.551/m² contra 3.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 94 m² em Brisamar, pedido R$ 9.777/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 2.800/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 48 m² em Funcionários, pedido R$ 3.958/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.458/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.273/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 52 m² em Funcionários, pedido R$ 2.885/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 64 m² em Funcionários, pedido R$ 4.375/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 50 m² em Funcionários, pedido R$ 3.460/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 59 m² em Funcionários, pedido R$ 2.525/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.1789,
    "lng": -34.88768,
    "thesis": "Portal · 53 m² em Funcionários, pedido R$ 4.151/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-19818510",
    "title": "Apartamento Duplex com 3 dormitórios à venda, 73 m² por R$ 549.990,00 - Bancários - João P",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário José Alexandre De Farias, ",
    "area": 73,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 549990,
    "condo": 657,
    "iptu": 2750,
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
    "lat": -7.17846,
    "lng": -34.88725,
    "thesis": "Portal · 73 m² em Bancários, pedido R$ 7.534/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-19266571",
    "title": "Apartamento com 3 dormitórios à venda, 68 m² por R$ 449.990,00 - Bancários - João Pessoa/P",
    "type": "apto",
    "bairroId": "bancarios",
    "street": "Rua Bancário José Alexandre De Farias, ",
    "area": 68,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 449990,
    "condo": 612,
    "iptu": 2250,
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
    "lat": -7.17846,
    "lng": -34.88725,
    "thesis": "Portal · 68 m² em Bancários, pedido R$ 6.618/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 130 m² em Miramar, pedido R$ 8.077/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 3.778/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 121 m² em Miramar, pedido R$ 9.504/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 28 m² em Miramar, pedido R$ 11.429/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Miramar, pedido R$ 13.333/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 120 m² em Miramar, pedido R$ 5.325/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 180 m² em Miramar, pedido R$ 9.161/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
  },
  {
    "id": "chv-45103060",
    "title": "Apartamento com 3 quartos à venda na Rua Carlos Barros, --, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Carlos Barros, --",
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
    "lat": -7.12253,
    "lng": -34.83737,
    "thesis": "Portal · 71 m² em Miramar, pedido R$ 9.577/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-42479360",
    "title": "Apartamento com 4 dormitórios à venda, 206 m² por R$ 2.421.000,00 - Miramar - João Pessoa/",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Miramar, João Pessoa",
    "area": 206,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 2421000,
    "condo": 1854,
    "iptu": 12105,
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
    "thesis": "Portal · 206 m² em Miramar, pedido R$ 11.752/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-46529410",
    "title": "Apartamento com 2 quartos à venda na Avenida Tito Silva, 208, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Avenida Tito Silva, 208",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 630000,
    "condo": 540,
    "iptu": 3150,
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
    "lat": -7.12158,
    "lng": -34.83689,
    "thesis": "Portal · 60 m² em Miramar, pedido R$ 10.500/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-30646769",
    "title": "Maison de Miramar - APARTAMENTO NO CONDOMINIO MAISON DE MIRAMAR / APARTAMENTO EM MIRAMAR J",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Marieta Steimbach Silva, ",
    "area": 131,
    "rooms": 4,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1300000,
    "condo": 1179,
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
    "thesis": "Portal · 131 m² em Miramar, pedido R$ 9.924/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-9826673",
    "title": "Apartamento com 3 quartos à venda na Rua Domingos Mororó, 50, Miramar, João Pessoa",
    "type": "apto",
    "bairroId": "miramar",
    "street": "Rua Domingos Mororó, 50",
    "area": 149,
    "rooms": 3,
    "suites": 1,
    "parking": 1,
    "year": 2012,
    "ask": 1619000,
    "condo": 1341,
    "iptu": 8095,
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
    "lat": -7.1234747,
    "lng": -34.83543,
    "thesis": "Portal · 149 m² em Miramar, pedido R$ 10.866/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
  },
  {
    "id": "chv-41445200",
    "title": "Apartamento com 1 quarto à venda na Rua Prefeito José Leite, Miramar, João Pessoa",
    "type": "kitnet",
    "bairroId": "miramar",
    "street": "Rua Prefeito José Leite, ",
    "area": 24,
    "rooms": 1,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 350000,
    "condo": 216,
    "iptu": 1750,
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
    "lat": -7.11865,
    "lng": -34.83905,
    "thesis": "Portal · 24 m² em Miramar, pedido R$ 14.583/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-45258104",
    "title": "Apartamento com 1 quarto à venda na Avenida Senador Ruy Carneiro, Miramar, João Pessoa",
    "type": "kitnet",
    "bairroId": "miramar",
    "street": "Avenida Senador Ruy Carneiro, ",
    "area": 35,
    "rooms": 1,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 472400,
    "condo": 315,
    "iptu": 2362,
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
    "lat": -7.11881,
    "lng": -34.84075,
    "thesis": "Portal · 35 m² em Miramar, pedido R$ 13.497/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 9.267/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 3.462/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Treze de Maio, pedido R$ 4.167/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 7.949/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-33996748",
    "title": "Praticidade, Conforto e Modernidade no Jardim Treze de Maio – Viva como em um Clube Partic",
    "type": "apto",
    "bairroId": "treze-de-maio",
    "street": "Rua Alírio Wanderley, 215",
    "area": 54,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 549997,
    "condo": 486,
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
    "lat": -7.1148,
    "lng": -34.86657,
    "thesis": "Portal · 54 m² em Treze de Maio, pedido R$ 10.185/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 8.300/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 78 m² em Treze de Maio, pedido R$ 3.846/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Treze de Maio, pedido R$ 7.950/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 8.832/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 45 m² em Treze de Maio, pedido R$ 7.607/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Alto do Mateus, pedido R$ 2.589/m² contra 3.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Alto do Mateus, pedido R$ 3.000/m² contra 3.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.745/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.000/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Indústrias, pedido R$ 3.455/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 47 m² em Indústrias, pedido R$ 2.553/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 41 m² em Indústrias, pedido R$ 5.244/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.000/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 50 m² em Indústrias, pedido R$ 3.500/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 400 m² em Tambaú, pedido R$ 9.750/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 29 m² em Tambaú, pedido R$ 16.034/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 230 m² em Tambaú, pedido R$ 7.826/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 24 m² em Tambaú, pedido R$ 25.000/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 104 m² em Mangabeira, pedido R$ 7.212/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 256 m² em Cabo Branco, pedido R$ 12.109/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "lat": -7.12221,
    "lng": -34.82908,
    "thesis": "Portal · 340 m² em Cabo Branco, pedido R$ 7.938/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.12221,
    "lng": -34.82908,
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 28 m² em Cabo Branco, pedido R$ 15.893/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 310 m² em Cabo Branco, pedido R$ 9.677/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 25 m² em Cabo Branco, pedido R$ 14.800/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 42 m² em Cabo Branco, pedido R$ 18.571/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 24 m² em Cabo Branco, pedido R$ 18.338/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 340 m² em Cabo Branco, pedido R$ 7.938/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 34 m² em Cabo Branco, pedido R$ 17.059/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 24 m² em Cabo Branco, pedido R$ 18.338/m² contra 12.541 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Manaíra, pedido R$ 4.091/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 373 m² em Manaíra, pedido R$ 3.217/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 373 m² em Manaíra, pedido R$ 3.217/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46790798",
    "title": "Casa com 3 quartos à venda na Rua Aline Ferreira Rufo, 62, Manaíra, João Pessoa",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Rua Aline Ferreira Rufo, 62",
    "area": 250,
    "rooms": 3,
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
      "rua"
    ],
    "lat": -7.11108,
    "lng": -34.83524,
    "thesis": "Portal · 250 m² em Manaíra, pedido R$ 3.800/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-37440185",
    "title": "Excelente terreno com casa, na Av. Umbuzeiro em Manaíra, para reforma ou uso do terreno.",
    "type": "casa",
    "bairroId": "manaira",
    "street": "Manaíra, João Pessoa",
    "area": 360,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1350000,
    "condo": 0,
    "iptu": 6750,
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
    "thesis": "Portal · 360 m² em Manaíra, pedido R$ 3.750/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 25 m² em Manaíra, pedido R$ 16.000/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.10612,
    "lng": -34.84002,
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 2.633/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.712/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Manaíra, pedido R$ 2.833/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 191 m² em Manaíra, pedido R$ 4.712/m² contra 8.924 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 165 m² em Bessa, pedido R$ 4.727/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Bessa, pedido R$ 7.404/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Bessa, pedido R$ 5.686/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-38357844",
    "title": "Casa com 4 quartos à venda na Rua Maria da Penha Ribeiro de Lima, 279, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Maria Da Penha Ribeiro De Lima, 279",
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
    "lat": -7.059158,
    "lng": -34.845902,
    "thesis": "Portal · 200 m² em Bessa, pedido R$ 9.450/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-43828212",
    "title": "Casa com 5 quartos à venda na Rua Artur Monteiro Paiva, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Artur Monteiro Paiva, ",
    "area": 352,
    "rooms": 5,
    "suites": 1,
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
    "lat": -7.06389,
    "lng": -34.84093,
    "thesis": "Portal · 352 m² em Bessa, pedido R$ 2.557/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-38039556",
    "title": "Casa com 5 quartos à venda na Rua Marechal Hermes da Fonseca, Bessa, João Pessoa",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Marechal Hermes Da Fonseca, ",
    "area": 232,
    "rooms": 5,
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
    "thesis": "Portal · 232 m² em Bessa, pedido R$ 5.603/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-39045845",
    "title": "Casa localização privilegiada no Bessa com 4 dormitórios à venda por R$ 1.300.000 - Bessa ",
    "type": "casa",
    "bairroId": "bessa",
    "street": "Rua Presidente Delfim Moreira, 284",
    "area": 204,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 1299998,
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
    "lat": -7.06555,
    "lng": -34.84285,
    "thesis": "Portal · 204 m² em Bessa, pedido R$ 6.373/m² contra 8.533 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-45322069",
    "title": "Flat pé na areia, 1 dormitório, vista mar, mobiliado, na melhor localização de João Pessoa",
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
    "thesis": "Portal · 23 m² em Jardim Oceania, pedido R$ 28.261/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 99 m² em Jardim Oceania, pedido R$ 3.939/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 363 m² em Jardim Oceania, pedido R$ 5.510/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "ask": 450000,
    "condo": 0,
    "iptu": 2250,
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
    "thesis": "Portal · 107 m² em Jardim Oceania, pedido R$ 4.206/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 384 m² em Jardim Oceania, pedido R$ 8.333/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 350 m² em Jardim Oceania, pedido R$ 9.143/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 57 m² em Jardim Oceania, pedido R$ 10.111/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
  },
  {
    "id": "chv-45322058",
    "title": "Flat com 2 dormitórios à venda, 64 m² por R$ 662.338,56 - Jardim Oceania - João Pessoa/PB",
    "type": "flat",
    "bairroId": "jardim-oceania",
    "street": "Jardim Oceania, João Pessoa",
    "area": 64,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 2012,
    "ask": 662338,
    "condo": 576,
    "iptu": 3312,
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
    "lat": -7.08972,
    "lng": -34.8292,
    "thesis": "Portal · 64 m² em Jardim Oceania, pedido R$ 10.349/m² contra 10.872 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 195 m² em Altiplano, pedido R$ 7.692/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 337 m² em Altiplano, pedido R$ 12.166/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 330 m² em Altiplano, pedido R$ 11.212/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 260 m² em Altiplano, pedido R$ 4.615/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-41865935",
    "title": "Casa com 4 quartos à venda na Rua Oneida Agra da Nóbrega, Altiplano Cabo Branco, João Pess",
    "type": "casa",
    "bairroId": "altiplano",
    "street": "Rua Oneida Agra Da Nóbrega, ",
    "area": 360,
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
    "lat": -7.13708,
    "lng": -34.82979,
    "thesis": "Portal · 360 m² em Altiplano, pedido R$ 3.194/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Altiplano, pedido R$ 6.818/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 333 m² em Altiplano, pedido R$ 12.312/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 200 m² em Altiplano, pedido R$ 4.000/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 250 m² em Altiplano, pedido R$ 4.600/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 390 m² em Altiplano, pedido R$ 3.846/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 215 m² em Altiplano, pedido R$ 6.977/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 260 m² em Aeroclube, pedido R$ 5.769/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 360 m² em Aeroclube, pedido R$ 4.167/m² contra 9.066 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 4.167/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Brisamar, pedido R$ 2.750/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 348 m² em Brisamar, pedido R$ 4.598/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Brisamar, pedido R$ 2.813/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Brisamar, pedido R$ 1.875/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Brisamar, pedido R$ 3.533/m² contra 9.306 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 187 m² em Torre, pedido R$ 3.209/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Torre, pedido R$ 1.125/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 131 m² em Torre, pedido R$ 2.672/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Torre, pedido R$ 2.200/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 385 m² em Torre, pedido R$ 1.636/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 210 m² em Torre, pedido R$ 2.286/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "ask": 629000,
    "condo": 0,
    "iptu": 3145,
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
    "thesis": "Portal · 400 m² em Torre, pedido R$ 1.573/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.12545,
    "lng": -34.86003,
    "thesis": "Portal · 195 m² em Torre, pedido R$ 3.026/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 180 m² em Torre, pedido R$ 5.556/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 399 m² em Torre, pedido R$ 3.885/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-37358326",
    "title": "Casa com 4 quartos à venda na Rua Caturité, 181, Torre, João Pessoa",
    "type": "casa",
    "bairroId": "torre",
    "street": "Rua Caturité, 181",
    "area": 200,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 580000,
    "condo": 0,
    "iptu": 2900,
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
    "lat": -7.13024,
    "lng": -34.86428,
    "thesis": "Portal · 200 m² em Torre, pedido R$ 2.900/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 20 m² em Torre, pedido R$ 50.000/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 186 m² em Bancários, pedido R$ 12.634/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 270 m² em Bancários, pedido R$ 2.926/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 11.000/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 148 m² em Bancários, pedido R$ 5.338/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 90 m² em Bancários, pedido R$ 9.222/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 300 m² em Bancários, pedido R$ 8.333/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Bancários, pedido R$ 2.313/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 97 m² em Bancários, pedido R$ 9.227/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-46140257",
    "title": "Casa de alto padrão a venda em condomínio no bairro jardim cidade universitária em joão pe",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 190,
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
    "lat": -7.14576,
    "lng": -34.864239999999995,
    "thesis": "Portal · 190 m² em Bancários, pedido R$ 12.368/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 180 m² em Bancários, pedido R$ 1.944/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 201 m² em Bancários, pedido R$ 4.975/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-27299153",
    "title": "Casa com 2 quartos à venda no Bancários, João Pessoa",
    "type": "casa",
    "bairroId": "bancarios",
    "street": "Bancários, João Pessoa",
    "area": 150,
    "rooms": 2,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 660000,
    "condo": 0,
    "iptu": 3300,
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
    "lat": -7.14625,
    "lng": -34.83675,
    "thesis": "Portal · 150 m² em Bancários, pedido R$ 4.400/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 195 m² em Bancários, pedido R$ 10.718/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 7
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
    "thesis": "Portal · 200 m² em Bancários, pedido R$ 4.850/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-42148439",
    "title": "Casa com 3 quartos à venda na Rua Oswaldo Evaristo da Costa, --, Estados, João Pessoa",
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
    "thesis": "Portal · 320 m² em Estados, pedido R$ 1.719/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 240 m² em Estados, pedido R$ 3.333/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 217 m² em Estados, pedido R$ 3.456/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 170 m² em Estados, pedido R$ 3.824/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Estados, pedido R$ 3.789/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 306 m² em Estados, pedido R$ 3.268/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 268 m² em Estados, pedido R$ 2.799/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 148 m² em Estados, pedido R$ 4.662/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Estados, pedido R$ 4.167/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 335 m² em Estados, pedido R$ 3.881/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 217 m² em Estados, pedido R$ 3.456/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 306 m² em Estados, pedido R$ 4.248/m² contra 6.791 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 399 m² em Expedicionários, pedido R$ 3.907/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 218 m² em Expedicionários, pedido R$ 3.440/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 170 m² em Expedicionários, pedido R$ 4.706/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 201 m² em Expedicionários, pedido R$ 2.239/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Expedicionários, pedido R$ 2.333/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-43145109",
    "title": "Casa com 3 quartos à venda na Avenida Nabuco de Assis, Expedicionários, João Pessoa",
    "type": "casa",
    "bairroId": "expedicionarios",
    "street": "Avenida Nabuco De Assis, ",
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
    "lat": -7.1254548,
    "lng": -34.8527592,
    "thesis": "Portal · 220 m² em Expedicionários, pedido R$ 2.273/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Expedicionários, pedido R$ 4.815/m² contra 5.987 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-38202503",
    "title": "Casa com 3 quartos à venda na Rua Clotilde Torres, Tambauzinho, João Pessoa",
    "type": "casa",
    "bairroId": "tambau",
    "street": "Rua Clotilde Torres, ",
    "area": 194,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 680000,
    "condo": 0,
    "iptu": 3400,
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
    "lat": -7.12487,
    "lng": -34.84938,
    "thesis": "Portal · 194 m² em Tambaú, pedido R$ 3.505/m² contra 10.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Centro, pedido R$ 2.632/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 360 m² em Centro, pedido R$ 1.250/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 320 m² em Centro, pedido R$ 1.094/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 191 m² em Centro, pedido R$ 5.759/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 180 m² em Centro, pedido R$ 2.500/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.12418,
    "lng": -34.88306,
    "thesis": "Portal · 200 m² em Centro, pedido R$ 2.750/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 333 m² em Centro, pedido R$ 5.856/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 297 m² em Centro, pedido R$ 1.549/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 371 m² em Centro, pedido R$ 10.243/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 20
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
    "thesis": "Portal · 196 m² em Centro, pedido R$ 2.041/m² contra 4.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 193 m² em Portal do Sol, pedido R$ 12.953/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "lat": -7.14678,
    "lng": -34.82016,
    "thesis": "Portal · 190 m² em Portal do Sol, pedido R$ 8.158/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 120 m² em Portal do Sol, pedido R$ 7.083/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 9.059/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 384 m² em Portal do Sol, pedido R$ 4.297/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 197 m² em Portal do Sol, pedido R$ 7.563/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
  },
  {
    "id": "chv-39269031",
    "title": "Casa com 4 quartos à venda no Portal do Sol, João Pessoa",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Portal do Sol, João Pessoa",
    "area": 170,
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
    "lat": -7.15732,
    "lng": -34.84756,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 8.765/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 270 m² em Portal do Sol, pedido R$ 5.370/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 5
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
    "thesis": "Portal · 336 m² em Portal do Sol, pedido R$ 2.530/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-39557826",
    "title": "Casa com 4 quartos à venda na Rua General Francisco de Assis Araújo Bezerra, Portal do Sol",
    "type": "casa",
    "bairroId": "portal-do-sol",
    "street": "Rua General Francisco De Assis Araújo Bezerra, ",
    "area": 170,
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
    "lat": -7.14563,
    "lng": -34.82048,
    "thesis": "Portal · 170 m² em Portal do Sol, pedido R$ 8.765/m² contra 5.722 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 283 m² em Jd. Cidade Universitária, pedido R$ 3.180/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 326 m² em Jd. Cidade Universitária, pedido R$ 4.279/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 99 m² em Jd. Cidade Universitária, pedido R$ 8.990/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 105 m² em Jd. Cidade Universitária, pedido R$ 7.143/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 190 m² em Jd. Cidade Universitária, pedido R$ 12.053/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Jd. Cidade Universitária, pedido R$ 3.450/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 370 m² em Jd. Cidade Universitária, pedido R$ 2.297/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 148 m² em Jd. Cidade Universitária, pedido R$ 5.338/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
  },
  {
    "id": "chv-29645910",
    "title": "Casa com 5 dormitórios à venda, 385 m² por R$ 2.798.996,00 - Jardim Cidade Universitária -",
    "type": "casa",
    "bairroId": "jcu",
    "street": "Rua Radialista Antônio Assunção De Jesus, ",
    "area": 385,
    "rooms": 5,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 2798996,
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
    "lat": -7.15321,
    "lng": -34.83237,
    "thesis": "Portal · 385 m² em Jd. Cidade Universitária, pedido R$ 7.270/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 11
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
    "thesis": "Portal · 100 m² em Jd. Cidade Universitária, pedido R$ 8.900/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 190 m² em Jd. Cidade Universitária, pedido R$ 12.368/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 199 m² em Jd. Cidade Universitária, pedido R$ 6.784/m² contra 5.856 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 67 m² em Gramame, pedido R$ 2.313/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.000/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
  },
  {
    "id": "chv-3854655",
    "title": "Casa com 3 quartos à venda na Rua Prefeito Severino Alves da Silveira, Gramame, João Pesso",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Prefeito Severino Alves Da Silveira, ",
    "area": 70,
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
    "lat": -7.19802,
    "lng": -34.887,
    "thesis": "Portal · 70 m² em Gramame, pedido R$ 3.786/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.180/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 3.750/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 50 m² em Gramame, pedido R$ 4.700/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 60 m² em Gramame, pedido R$ 4.000/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 73 m² em Gramame, pedido R$ 3.425/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 8
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
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 6.000/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "chv-46604301",
    "title": "Casa com 3 quartos à venda na Rua Aposentado Laércio Xavier de Andrade, Gramame, João Pess",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua Aposentado Laércio Xavier De Andrade, ",
    "area": 100,
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
    "lat": -7.19593,
    "lng": -34.87447,
    "thesis": "Portal · 100 m² em Gramame, pedido R$ 2.500/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 68 m² em Gramame, pedido R$ 3.235/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 18
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
    "thesis": "Portal · 56 m² em Gramame, pedido R$ 4.179/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
  },
  {
    "id": "chv-37861705",
    "title": "Lançamento – casas estilo vila para venda à partir r$ 180.000,00",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Rua José Reinaldo De Brito Silva, ",
    "area": 53,
    "rooms": 2,
    "suites": 1,
    "parking": 1,
    "year": 1998,
    "ask": 185000,
    "condo": 0,
    "iptu": 925,
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
    "lat": -7.20017,
    "lng": -34.88615,
    "thesis": "Portal · 53 m² em Gramame, pedido R$ 3.491/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 55 m² em Gramame, pedido R$ 4.436/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.606/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 6
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
    "thesis": "Portal · 85 m² em Mangabeira, pedido R$ 7.647/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
  },
  {
    "id": "chv-40613176",
    "title": "Casa com 4 quartos à venda na Rua Professora Olívia Pereira Barbosa, Mangabeira, João Pess",
    "type": "casa",
    "bairroId": "mangabeira",
    "street": "Rua Professora Olívia Pereira Barbosa, ",
    "area": 130,
    "rooms": 4,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 255000,
    "condo": 0,
    "iptu": 1275,
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
    "lat": -7.17906,
    "lng": -34.84328,
    "thesis": "Portal · 130 m² em Mangabeira, pedido R$ 1.962/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 52 m² em Mangabeira, pedido R$ 3.558/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 109 m² em Mangabeira, pedido R$ 6.881/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
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
    "thesis": "Portal · 98 m² em Mangabeira, pedido R$ 4.898/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "lat": -7.16728,
    "lng": -34.84033,
    "thesis": "Portal · 120 m² em Mangabeira, pedido R$ 875/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 98 m² em Mangabeira, pedido R$ 4.898/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 13
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
    "thesis": "Portal · 200 m² em Mangabeira, pedido R$ 1.750/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Mangabeira, pedido R$ 1.364/m² contra 4.800 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 290 m² em Cruz das Armas, pedido R$ 1.966/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Cruz das Armas, pedido R$ 3.750/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 56 m² em Cruz das Armas, pedido R$ 5.179/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
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
    "lat": -7.14676,
    "lng": -34.88513,
    "thesis": "Portal · 128 m² em Cruz das Armas, pedido R$ 2.500/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 75 m² em Cruz das Armas, pedido R$ 6.000/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 190 m² em Cruz das Armas, pedido R$ 3.421/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 300 m² em Cruz das Armas, pedido R$ 1.300/m² contra 4.100 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 160 m² em Cristo Redentor, pedido R$ 1.938/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 57 m² em Cristo Redentor, pedido R$ 4.114/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 125 m² em Cristo Redentor, pedido R$ 2.960/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 65 m² em Ernesto Geisel, pedido R$ 5.385/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 4
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
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 4.200/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 15
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
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 2.653/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 180 m² em Ernesto Geisel, pedido R$ 2.833/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 5.000/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 14
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
    "thesis": "Portal · 60 m² em Ernesto Geisel, pedido R$ 6.333/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 16
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
    "thesis": "Portal · 160 m² em Ernesto Geisel, pedido R$ 2.488/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-46316086",
    "title": "Casa de esquina à venda no geisel – 3 quartos | ótima localização",
    "type": "casa",
    "bairroId": "geisel",
    "street": "Ernesto Geisel, João Pessoa",
    "area": 150,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 215000,
    "condo": 0,
    "iptu": 1075,
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
    "lat": -7.1669599999999996,
    "lng": -34.871,
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 1.433/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 57 m² em Ernesto Geisel, pedido R$ 6.667/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 135 m² em Ernesto Geisel, pedido R$ 2.889/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 380 m² em Ernesto Geisel, pedido R$ 2.632/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 150 m² em Ernesto Geisel, pedido R$ 2.333/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 56 m² em Ernesto Geisel, pedido R$ 4.732/m² contra 4.700 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Castelo Branco, pedido R$ 2.200/m² contra 5.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Bancários, pedido R$ 2.273/m² contra 6.255 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 100 m² em Altiplano, pedido R$ 12.000/m² contra 10.550 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 2
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
    "thesis": "Portal · 75 m² em Cristo Redentor, pedido R$ 5.067/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 150 m² em Cristo Redentor, pedido R$ 3.400/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 247 m² em Cristo Redentor, pedido R$ 1.660/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 300 m² em Cristo Redentor, pedido R$ 2.133/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 161 m² em Cristo Redentor, pedido R$ 2.919/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "chv-43561508",
    "title": "Casa 3 quartos, 1 suíte, rua calçada, terreno de 10x30 metros",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
    "area": 75,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 368000,
    "condo": 0,
    "iptu": 1840,
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
    "lat": -7.1504,
    "lng": -34.87856,
    "thesis": "Portal · 75 m² em Cristo Redentor, pedido R$ 4.907/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
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
    "thesis": "Portal · 125 m² em Cristo Redentor, pedido R$ 4.720/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 21
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
    "thesis": "Portal · 200 m² em Cristo Redentor, pedido R$ 4.950/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 3
  },
  {
    "id": "chv-46811601",
    "title": "Casa à venda no cristo – ampla, lajeada e com excelente terreno",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Rua Presidente Ranieri Mazilli, ",
    "area": 130,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 400000,
    "condo": 0,
    "iptu": 2000,
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
    "thesis": "Portal · 130 m² em Cristo Redentor, pedido R$ 3.077/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 105 m² em Cristo Redentor, pedido R$ 5.714/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 19
  },
  {
    "id": "chv-45248342",
    "title": "Casa com 3 dormitórios à venda, 117 m² por R$ 539.990,00 - Cristo Redentor - João Pessoa/P",
    "type": "casa",
    "bairroId": "cristo",
    "street": "Cristo Redentor, João Pessoa",
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
    "lat": -7.14464,
    "lng": -34.87316,
    "thesis": "Portal · 117 m² em Cristo Redentor, pedido R$ 4.615/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 1
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
    "thesis": "Portal · 300 m² em Oitizeiro, pedido R$ 1.933/m² contra 3.500 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 75 m² em Cristo Redentor, pedido R$ 5.067/m² contra 4.500 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 10
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 69 m² em Funcionários, pedido R$ 2.609/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 120 m² em Funcionários, pedido R$ 5.167/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 55 m² em Funcionários, pedido R$ 3.091/m² contra 4.000 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 392 m² em Miramar, pedido R$ 3.291/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 147 m² em Miramar, pedido R$ 6.122/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 7.475/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 17
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
    "thesis": "Portal · 237 m² em Miramar, pedido R$ 5.063/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 170 m² em Miramar, pedido R$ 5.765/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 400 m² em Miramar, pedido R$ 3.750/m² contra 7.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 330 m² em Treze de Maio, pedido R$ 2.091/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 120 m² em Treze de Maio, pedido R$ 4.375/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
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
    "thesis": "Portal · 330 m² em Treze de Maio, pedido R$ 2.091/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Treze de Maio, pedido R$ 2.950/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 220 m² em Treze de Maio, pedido R$ 2.682/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 80 m² em Treze de Maio, pedido R$ 3.750/m² contra 5.200 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 85 m² em Indústrias, pedido R$ 2.588/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 58 m² em Indústrias, pedido R$ 3.362/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 12
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
    "thesis": "Portal · 70 m² em Indústrias, pedido R$ 2.929/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 190 m² em Indústrias, pedido R$ 947/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 200 m² em Indústrias, pedido R$ 1.000/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "thesis": "Portal · 57 m² em Indústrias, pedido R$ 3.509/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Anúncio de portal — conferir condomínio, IPTU e estado na visita."
    ],
    "extras": [
      "portal"
    ],
    "facade": 9
  },
  {
    "id": "cx-2269168",
    "title": "Apartamento Caixa 2269168",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2269168 RUA DOUTOR AUGUSTO DE ALMEIDA FI",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 139000,
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
    "lat": -7.2180599999999995,
    "lng": -34.8454,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.317/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 6
  },
  {
    "id": "cx-2982902",
    "title": "Apartamento Caixa 2982902",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2982902 RUA KLEONYCE CORREA,N. 66 AP",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 139000,
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
    "lat": -7.21062,
    "lng": -34.85212,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 2.317/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "cx-2636487",
    "title": "Apartamento Caixa 2636487",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento Caixa em João Pessoa / PB - 2636487 RUA JOSINALDO FLORENCIO DA SILVA",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 195606,
    "condo": 540,
    "iptu": 978,
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
    "lng": -34.8472,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 3.260/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 4
  },
  {
    "id": "cx-2990369",
    "title": "Casa Caixa 2990369",
    "type": "casa",
    "bairroId": "gramame",
    "street": "Casa em Leilão em João Pessoa / PB - 2990369 RUA COMERCIANTE ERNANDO FEITOSA DE ",
    "area": 120,
    "rooms": 3,
    "suites": 0,
    "parking": 1,
    "year": 1998,
    "ask": 195606,
    "condo": 0,
    "iptu": 978,
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
    "lat": -7.21566,
    "lng": -34.851279999999996,
    "thesis": "Leilão Caixa · 120 m² em Gramame, pedido R$ 1.630/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance.",
      "Spread alto pede motivo: reforma, processo ou liquidez."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 7
  },
  {
    "id": "cx-2266680",
    "title": "Apartamento Caixa 2266680",
    "type": "apto",
    "bairroId": "industrias",
    "street": "Apartamento Caixa em João Pessoa / PB - 2266680 RUA JAMBEIROS,N. 48 APTO. 102 10",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 99555,
    "condo": 540,
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
      "airbnb"
    ],
    "lat": -7.19192,
    "lng": -34.8754,
    "thesis": "Leilão Caixa · 60 m² em Indústrias, pedido R$ 1.659/m² contra 3.600 do bairro. Colheita 28 de set. de 2026.",
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
    "id": "cx-2982898",
    "title": "Apartamento Caixa 2982898",
    "type": "apto",
    "bairroId": "gramame",
    "street": "Apartamento em Leilão em João Pessoa / PB - 2982898 RUA MANOEL FELISBERTO DA SIL",
    "area": 60,
    "rooms": 2,
    "suites": 0,
    "parking": 0,
    "year": 2012,
    "ask": 202000,
    "condo": 540,
    "iptu": 1010,
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
    "lat": -7.20894,
    "lng": -34.85248,
    "thesis": "Leilão Caixa · 60 m² em Gramame, pedido R$ 3.367/m² contra 3.900 do bairro. Colheita 28 de set. de 2026.",
    "risks": [
      "Leilão: conferir ocupação, débitos e o edital antes do lance."
    ],
    "extras": [
      "leilao-caixa"
    ],
    "facade": 15
  }
] as Listing[];
