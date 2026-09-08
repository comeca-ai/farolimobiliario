import type { Listing, ListingType, RadarTag, SourceKind } from "@/data/listings";
import { NEIGHBORHOODS, NEIGHBORHOOD_BY_ID, type Neighborhood } from "@/data/market";

function foldPt(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export const HARVEST_UA =
  "FarolQueProtege/1.0 (+https://farolqueprotege.com.br; mesa de sinais João Pessoa)";

export const CHAVES_ORIGIN = "https://www.chavesnamao.com.br";
export const CAPTA_ORIGIN = "https://www.captaleiloes.com.br";

const TYPES = ["apartamentos-a-venda", "casas-a-venda", "imoveis-a-venda", "coberturas-a-venda"] as const;

const BAIRRO_SLUGS = [
  "tambau",
  "cabo-branco",
  "manaira",
  "bessa",
  "jardim-oceania",
  "altiplano-cabo-branco",
  "aeroclube",
  "brisamar",
  "intermares",
  "torre",
  "bancarios",
  "estados",
  "expedicionarios",
  "centro",
  "portal-do-sol",
  "jardim-cidade-universitaria",
  "gramame",
  "mangabeira",
  "cruz-das-armas",
  "ernesto-geisel",
  "castelo-branco",
  "cristo-redentor",
  "oitizeiro",
  "funcionarios",
  "miramar",
  "treze-de-maio",
  "alto-do-mateus",
  "industrias",
];

const NAME_ALIAS: Record<string, string> = {
  tambau: "tambau",
  "cabo branco": "cabo-branco",
  manaira: "manaira",
  bessa: "bessa",
  "jardim oceania": "jardim-oceania",
  oceania: "jardim-oceania",
  altiplano: "altiplano",
  "altiplano cabo branco": "altiplano",
  aeroclube: "aeroclube",
  brisamar: "brisamar",
  intermares: "intermares",
  torre: "torre",
  bancarios: "bancarios",
  estados: "estados",
  expedicionarios: "expedicionarios",
  centro: "centro",
  "portal do sol": "portal-do-sol",
  "jardim cidade universitaria": "jcu",
  "cidade universitaria": "jcu",
  "jd cidade universitaria": "jcu",
  jcu: "jcu",
  gramame: "gramame",
  mangabeira: "mangabeira",
  "cruz das armas": "cruz-das-armas",
  "ernesto geisel": "geisel",
  geisel: "geisel",
  "castelo branco": "castelo-branco",
  "cristo redentor": "cristo",
  cristo: "cristo",
  oitizeiro: "oitizeiro",
  funcionarios: "funcionarios",
  miramar: "miramar",
  "treze de maio": "treze-de-maio",
  "13 de maio": "treze-de-maio",
  "alto do mateus": "alto-do-mateus",
  industrias: "industrias",
  "bairro das industrias": "industrias",
};

export type HarvestRaw = {
  source: "chaves" | "capta";
  id: string;
  name: string;
  price: number;
  url: string;
  rooms: number;
  baths: number;
  area: number;
  bairro: string;
  street: string;
  schema: string;
  lat: number;
  lng: number;
};

export type HarvestReport = {
  at: string;
  portalListed: number | null;
  raw: number;
  kept: number;
  dropped: number;
  bySource: Record<string, number>;
  byBairro: Record<string, number>;
  feedsOk: number;
  feedsFail: number;
};

function intish(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) return Math.round(value);
  const m = String(value ?? "").replace(/\./g, "").match(/(\d+)/);
  return m ? Number(m[1]) : fallback;
}

function money(value: unknown) {
  const n = Number(String(value ?? "").replace(/[^\d.,]/g, "").replace(/\./g, "").replace(",", "."));
  if (Number.isFinite(n) && n > 1000) return Math.round(n);
  const digits = String(value ?? "").replace(/\D/g, "");
  return digits ? Number(digits) : 0;
}

export function mapBairro(name: string): string | null {
  const t = foldPt(name).replace(/-/g, " ").replace(/\s+/g, " ").trim();
  if (!t) return null;
  if (NAME_ALIAS[t]) return NAME_ALIAS[t];
  for (const n of NEIGHBORHOODS) {
    if (foldPt(n.name) === t || n.id.replace(/-/g, " ") === t) return n.id;
  }
  for (const n of NEIGHBORHOODS) {
    const nn = foldPt(n.name);
    if (nn.length >= 5 && (t.includes(nn) || nn.includes(t))) return n.id;
  }
  return null;
}

export function chavesFeeds() {
  const feeds = TYPES.map((t) => `${CHAVES_ORIGIN}/${t}/pb-joao-pessoa/`);
  for (const t of ["apartamentos-a-venda", "casas-a-venda"] as const) {
    for (const b of BAIRRO_SLUGS) {
      feeds.push(`${CHAVES_ORIGIN}/${t}/pb-joao-pessoa/${b}/`);
    }
  }
  return feeds;
}

export function parseChavesHtml(html: string): { portalListed: number | null; rows: HarvestRaw[] } {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  let portalListed: number | null = null;
  const rows: HarvestRaw[] = [];
  for (const m of blocks) {
    let json: Record<string, unknown>;
    try {
      json = JSON.parse(m[1]) as Record<string, unknown>;
    } catch {
      continue;
    }
    if (json["@type"] !== "RealEstateListing") continue;
    const offers = json.offers as { numberOfItems?: number; itemListElement?: unknown[] } | undefined;
    if (typeof offers?.numberOfItems === "number") portalListed = offers.numberOfItems;
    for (const raw of offers?.itemListElement ?? []) {
      const e = raw as Record<string, unknown>;
      const it = (e.itemOffered as Record<string, unknown>) ?? {};
      const addr = (it.address as Record<string, unknown>) ?? {};
      const fl = (it.floorSize as Record<string, unknown>) ?? {};
      const geo = (it.geo as Record<string, unknown>) ?? {};
      const url = String(e.url ?? it["@id"] ?? "");
      const idm = url.match(/id-(\d+)/);
      if (!idm) continue;
      rows.push({
        source: "chaves",
        id: idm[1],
        name: String(e.name ?? it.name ?? "").trim(),
        price: money(e.price),
        url,
        rooms: intish(it.numberOfBedrooms ?? it.numberOfRooms),
        baths: intish(it.numberOfBathroomsTotal),
        area: intish(fl.unitText ?? fl.value),
        bairro: String(addr.addressLocality ?? ""),
        street: String(addr.streetAddress ?? ""),
        schema: String(it["@type"] ?? ""),
        lat: Number(geo.latitude ?? 0) || 0,
        lng: Number(geo.longitude ?? 0) || 0,
      });
    }
  }
  return { portalListed, rows };
}

export function parseCaptaHtml(html: string): HarvestRaw[] {
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const rows: HarvestRaw[] = [];
  const re =
    /(Apartamento|Casa|Kitnet|Flat|Cobertura|Terreno)[^.]{0,40}?(?:Leil[aã]o|Caixa)[^\d]{0,40}?(\d{6,})[\s\S]{0,280}?CEP:\s*(\d{5}-?\d{3})[\s\S]{0,120}?R\$\s*([\d\.]+)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const kind = m[1];
    const id = m[2];
    const snippet = m[0];
    const bairroM = snippet.match(/,\s*([A-ZÁÉÍÓÚÂÊÔÃÕÇ][A-ZÁÉÍÓÚÂÊÔÃÕÇa-záéíóúâêôãõç\s]{2,40})\s*-\s*CEP/i);
    rows.push({
      source: "capta",
      id,
      name: `${kind} Caixa ${id}`,
      price: money(m[4]),
      url: `${CAPTA_ORIGIN}/imovel/pb/joao-pessoa/${kind.toLowerCase()}-em-leilao-${id}`,
      rooms: /apto|apart/i.test(kind) ? 2 : /kitnet|flat/i.test(kind) ? 1 : 3,
      baths: 1,
      area: /casa/i.test(kind) ? 120 : /kitnet|flat/i.test(kind) ? 32 : 60,
      bairro: (bairroM?.[1] ?? "").trim(),
      street: snippet.slice(0, 80),
      schema: /casa/i.test(kind) ? "SingleFamilyResidence" : "Apartment",
      lat: 0,
      lng: 0,
    });
  }
  const hrefs = [...html.matchAll(/href="(\/imovel\/pb\/joao-pessoa\/[^"]+-(\d{6,}))"/g)];
  for (const h of hrefs) {
    const id = h[2];
    if (rows.some((r) => r.id === id)) continue;
    const slug = h[1];
    const kind = /casa/.test(slug) ? "Casa" : /terreno/.test(slug) ? "Terreno" : "Apartamento";
    if (kind === "Terreno") continue;
    rows.push({
      source: "capta",
      id,
      name: `${kind} Caixa ${id}`,
      price: 0,
      url: `${CAPTA_ORIGIN}${slug}`,
      rooms: kind === "Casa" ? 3 : 2,
      baths: 1,
      area: kind === "Casa" ? 120 : 60,
      bairro: "",
      street: "",
      schema: kind === "Casa" ? "SingleFamilyResidence" : "Apartment",
      lat: 0,
      lng: 0,
    });
  }
  return rows;
}

function listingType(raw: HarvestRaw): ListingType | null {
  const n = foldPt(`${raw.name} ${raw.url} ${raw.schema}`);
  if (/terreno|lote(?!amento)/.test(n) && !/apart|casa|flat|kit/.test(n)) return null;
  if (/flat|apart.?hotel|studio/.test(n)) return "flat";
  if (/kitnet|quitinete/.test(n) || (raw.rooms <= 1 && raw.area > 0 && raw.area <= 38 && /apart/.test(n))) {
    return "kitnet";
  }
  if (raw.schema === "SingleFamilyResidence" || /casa|sobrado/.test(n)) return "casa";
  return "apto";
}

function jitter(id: string, nb: Neighborhood) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 33 + id.charCodeAt(i)) >>> 0;
  const dLat = ((h % 80) - 40) * 0.00012;
  const dLng = (((h >> 8) % 80) - 40) * 0.00012;
  return { lat: nb.lat + dLat, lng: nb.lng + dLng };
}

function pin(raw: HarvestRaw, nb: Neighborhood) {
  const lat = raw.lat;
  const lng = raw.lng;
  if (
    lat < -7.03 &&
    lat > -7.26 &&
    lng > -34.93 &&
    lng < -34.79 &&
    Math.abs(lat - nb.lat) < 0.055 &&
    Math.abs(lng - nb.lng) < 0.055
  ) {
    return { lat, lng };
  }
  return jitter(raw.id, nb);
}

export function rawToListing(raw: HarvestRaw, at: string): Listing | null {
  if (raw.price < 80000 || raw.price > 4500000) return null;
  if (raw.area < 18 || raw.area > 400) return null;
  if (raw.rooms < 1 || raw.rooms > 8) return null;
  const bairroId = mapBairro(raw.bairro) ?? mapBairro(raw.name) ?? mapBairro(raw.url);
  if (!bairroId) return null;
  const nb = NEIGHBORHOOD_BY_ID[bairroId];
  if (!nb) return null;
  const type = listingType(raw);
  if (!type) return null;
  const street =
    raw.street && !/^n[aã]o dispon/i.test(raw.street) ? raw.street : `${nb.name}, João Pessoa`;
  const askM2 = raw.price / raw.area;
  const spread = (nb.m2 - askM2) / nb.m2;
  const source: SourceKind = raw.source === "capta" ? "leilao" : "portal";
  const radars: RadarTag[] = [];
  if (spread > 0.06) radars.push("preco");
  if (type === "flat" || type === "kitnet" || raw.rooms <= 2) radars.push("airbnb");
  if (type === "casa") radars.push("rua");
  if (radars.length === 0) radars.push(spread > 0 ? "preco" : "airbnb");
  const { lat, lng } = pin(raw, nb);
  const title = raw.name.replace(/\s+/g, " ").slice(0, 90) || `${type} em ${nb.name}`;
  const thesis =
    `${source === "leilao" ? "Leilão Caixa" : "Portal"} · ${raw.area} m² em ${nb.name}, pedido R$ ${Math.round(askM2).toLocaleString("pt-BR")}/m² contra ${nb.m2.toLocaleString("pt-BR")} do bairro. Colheita ${at}.`;
  const risks = [
    source === "leilao"
      ? "Leilão: conferir ocupação, débitos e o edital antes do lance."
      : "Anúncio de portal — conferir condomínio, IPTU e estado na visita.",
  ];
  if (spread > 0.18) risks.push("Spread alto pede motivo: reforma, processo ou liquidez.");
  if (raw.rooms <= 1 && type !== "casa") risks.push("Unidade compacta: teses de diária e de moradia não se misturam.");
  return {
    id: raw.source === "capta" ? `cx-${raw.id}` : `chv-${raw.id}`,
    title,
    type,
    bairroId,
    street,
    area: raw.area,
    rooms: raw.rooms,
    suites: raw.baths > raw.rooms ? 1 : 0,
    parking: /garagem|vaga/.test(foldPt(`${raw.name} ${raw.url}`)) ? 1 : type === "casa" ? 1 : 0,
    year: type === "casa" ? 1998 : 2012,
    ask: raw.price,
    condo: type === "casa" ? 0 : Math.round(raw.area * 9),
    iptu: Math.max(800, Math.round(raw.price * 0.005)),
    seaMeters: nb.walkSeaBias,
    condition: source === "leilao" ? 0.78 : 0.88,
    daysListed: source === "leilao" ? 14 : 28,
    portalCount: source === "leilao" ? 0 : 1,
    sources: [source],
    radars,
    lat,
    lng,
    thesis,
    risks,
    extras: source === "leilao" ? ["leilao-caixa"] : ["portal"],
    facade: (Number(raw.id.slice(-2)) % 21) + 1,
  };
}

export function dedupeRaw(rows: HarvestRaw[]) {
  const map = new Map<string, HarvestRaw>();
  for (const row of rows) {
    const key = `${row.source}-${row.id}`;
    if (!map.has(key)) map.set(key, row);
  }
  return [...map.values()];
}

export function mergeListings(curated: Listing[], harvested: Listing[]) {
  const seen = new Set(curated.map((l) => l.id));
  return [...curated, ...harvested.filter((l) => !seen.has(l.id))];
}

export async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
      "accept-language": "pt-BR,pt;q=0.9",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

export async function harvestAll(now = new Date()): Promise<{ listings: Listing[]; report: HarvestReport }> {
  const at = now.toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" });
  const raws: HarvestRaw[] = [];
  let portalListed: number | null = null;
  let feedsOk = 0;
  let feedsFail = 0;

  for (const url of chavesFeeds()) {
    try {
      const html = await fetchText(url);
      const parsed = parseChavesHtml(html);
      if (parsed.portalListed && parsed.portalListed > (portalListed ?? 0)) portalListed = parsed.portalListed;
      raws.push(...parsed.rows);
      feedsOk += 1;
    } catch {
      feedsFail += 1;
    }
  }

  for (const page of [1, 2, 3, 4, 5]) {
    const url =
      page === 1
        ? `${CAPTA_ORIGIN}/leilao-de-imovel/joao-pessoa`
        : `${CAPTA_ORIGIN}/leilao-de-imovel/joao-pessoa?page=${page}`;
    try {
      const html = await fetchText(url);
      raws.push(...parseCaptaHtml(html));
      feedsOk += 1;
    } catch {
      feedsFail += 1;
    }
  }

  const unique = dedupeRaw(raws);
  const listings: Listing[] = [];
  for (const row of unique) {
    const listing = rawToListing(row, at);
    if (listing) listings.push(listing);
  }

  const bySource: Record<string, number> = {};
  const byBairro: Record<string, number> = {};
  for (const l of listings) {
    const src = l.sources[0] ?? "portal";
    bySource[src] = (bySource[src] ?? 0) + 1;
    byBairro[l.bairroId] = (byBairro[l.bairroId] ?? 0) + 1;
  }

  return {
    listings,
    report: {
      at: now.toISOString(),
      portalListed,
      raw: unique.length,
      kept: listings.length,
      dropped: unique.length - listings.length,
      bySource,
      byBairro,
      feedsOk,
      feedsFail,
    },
  };
}
