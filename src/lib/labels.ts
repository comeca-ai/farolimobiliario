import type { ListingType, RadarTag, SourceKind } from "@/data/listings";

export const RADAR_LABEL: Record<RadarTag | "todos", string> = {
  todos: "Todos os sinais",
  preco: "Abaixo do preço",
  airbnb: "Flat / Airbnb",
  rua: "Abaixo do radar",
};

export const RADAR_HINT: Record<RadarTag, string> = {
  preco: "Ask versus m² justo do bairro, ajustado pelo estado.",
  airbnb: "NOI de curta temporada contra o ticket e contra o aluguel longo.",
  rua: "Fonte opaca: placa, leilão, inventário, IPTU, WhatsApp. Pouco ou nenhum portal.",
};

export const TYPE_LABEL: Record<ListingType, string> = {
  apto: "Apartamento",
  flat: "Flat",
  casa: "Casa",
  kitnet: "Kitnet",
};

export const SOURCE_LABEL: Record<SourceKind, string> = {
  portal: "Portal",
  olx: "OLX",
  leilao: "Leilão",
  placa: "Placa na rua",
  whatsapp: "WhatsApp",
  inventario: "Inventário",
  iptu: "Cadastro IPTU",
};
