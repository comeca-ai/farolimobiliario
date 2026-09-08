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

const CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

export const COLHEITA_HOSTS = [
  "www.zapimoveis.com.br",
  "zapimoveis.com.br",
  "www.vivareal.com.br",
  "vivareal.com.br",
  "glue-api.zapimoveis.com.br",
  "glue-api.vivareal.com",
  "www.olx.com.br",
  "olx.com.br",
  "pb.olx.com.br",
  "www.chavesnamao.com.br",
  "www.captaleiloes.com.br",
  "www.imovelweb.com.br",
] as const;

export function isColheitaHost(host: string) {
  return (COLHEITA_HOSTS as readonly string[]).includes(host.toLowerCase());
}

export async function unwrapBrowserResult(result: unknown): Promise<string> {
  if (result == null) return "";
  if (typeof result === "string") return peelJsonShell(result);
  if (typeof result !== "object") return "";

  const rec = result as Record<string, unknown> & {
    text?: () => Promise<string> | string;
    headers?: unknown;
    body?: unknown;
    status?: unknown;
  };

  const readBody = rec.text;
  const looksResponse =
    typeof readBody === "function" &&
    (rec.headers != null || rec.body !== undefined || typeof rec.status === "number");

  if (looksResponse && typeof readBody === "function") {
    try {
      const text = await readBody.call(rec);
      if (typeof text === "string" && text.length) return peelJsonShell(text);
    } catch {
      /* keep looking */
    }
  }

  const picked = pickHtmlField(rec);
  if (picked) return peelJsonShell(picked);
  try {
    const dumped = JSON.stringify(result);
    return dumped === "{}" ? "" : dumped;
  } catch {
    return "";
  }
}

function pickHtmlField(rec: Record<string, unknown>): string {
  for (const key of ["html", "content", "result", "markdown"]) {
    const v = rec[key];
    if (typeof v === "string" && v.length) return v;
  }
  const inner = rec.result;
  if (inner && typeof inner === "object") {
    const nested = inner as Record<string, unknown>;
    for (const key of ["html", "content", "markdown"]) {
      const v = nested[key];
      if (typeof v === "string" && v.length) return v;
    }
  }
  return "";
}

function peelJsonShell(text: string) {
  const trimmed = text.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return text;
  try {
    const parsed = JSON.parse(trimmed) as unknown;
    if (typeof parsed === "string") return parsed;
    if (parsed && typeof parsed === "object") {
      const picked = pickHtmlField(parsed as Record<string, unknown>);
      if (picked && picked !== trimmed) return picked;
    }
  } catch {
    return text;
  }
  return text;
}

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
  source: "chaves" | "capta" | "zap" | "olx";
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
  browserOk?: number;
  browserFail?: number;
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
    id:
      raw.source === "capta"
        ? `cx-${raw.id}`
        : raw.source === "zap"
          ? `zap-${raw.id}`
          : raw.source === "olx"
            ? `olx-${raw.id}`
            : `chv-${raw.id}`,
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
      accept: "text/html,application/xhtml+xml,application/json",
      "accept-language": "pt-BR,pt;q=0.9",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function extractJson(html: string, from: number) {
  const open = html[from];
  if (open !== "{" && open !== "[") return null;
  let depth = 0;
  let inStr = false;
  let esc = false;
  const limit = Math.min(html.length, from + 2_500_000);
  for (let i = from; i < limit; i++) {
    const c = html[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "{" || c === "[") depth += 1;
    else if (c === "}" || c === "]") {
      depth -= 1;
      if (depth === 0) {
        try {
          return JSON.parse(html.slice(from, i + 1));
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

function walkListings(node: unknown, acc: HarvestRaw[], source: HarvestRaw["source"]) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const item of node) walkListings(item, acc, source);
    return;
  }
  const rec = node as Record<string, unknown>;
  const listing = (rec.listing ?? rec) as Record<string, unknown>;
  const id = listing.id ?? rec.id;
  const pricing = listing.pricingInfos ?? rec.pricingInfos;
  if (id && Array.isArray(pricing) && pricing[0] && typeof pricing[0] === "object") {
    const price = Number((pricing[0] as { price?: number }).price ?? 0);
    const addr = (listing.address ?? rec.address ?? {}) as Record<string, unknown>;
    const geo =
      ((addr.geoLocation as Record<string, unknown> | undefined)?.location as Record<string, unknown> | undefined) ??
      {};
    const areas = (listing.usableAreas ?? rec.usableAreas ?? listing.usableArea) as unknown;
    const beds = listing.bedrooms ?? rec.bedrooms;
    const baths = listing.bathrooms ?? rec.bathrooms;
    const area = Array.isArray(areas) ? Number(areas[0]) : Number(areas ?? 0);
    const rooms = Array.isArray(beds) ? Number(beds[0]) : Number(beds ?? 0);
    acc.push({
      source,
      id: String(id),
      name: String(listing.title ?? rec.title ?? ""),
      price,
      url: String(listing.link ?? rec.url ?? `https://www.zapimoveis.com.br/imovel/${id}`),
      rooms: Number.isFinite(rooms) ? rooms : 0,
      baths: Array.isArray(baths) ? Number(baths[0] ?? 0) : Number(baths ?? 0),
      area: Number.isFinite(area) ? area : 0,
      bairro: String(addr.neighborhood ?? addr.neighborhoodName ?? ""),
      street: String(addr.street ?? ""),
      schema: String((listing.unitTypes as string[] | undefined)?.[0] ?? "Apartment"),
      lat: Number(geo.lat ?? geo.latitude ?? 0) || 0,
      lng: Number(geo.lon ?? geo.lng ?? geo.longitude ?? 0) || 0,
    });
    return;
  }
  for (const v of Object.values(rec)) walkListings(v, acc, source);
}

export function parseZapHtml(html: string): HarvestRaw[] {
  const rows: HarvestRaw[] = [];
  const chaves = parseChavesHtml(html);
  rows.push(...chaves.rows.map((r) => ({ ...r, source: "zap" as const })));
  const needles = ['"listings":', '"result":{"listings"', "search.result.listings"];
  for (const needle of needles) {
    let from = 0;
    while (from < html.length) {
      const i = html.indexOf(needle, from);
      if (i < 0) break;
      const bracket = html.indexOf("[", i);
      if (bracket < 0 || bracket - i > 40) {
        from = i + needle.length;
        continue;
      }
      const json = extractJson(html, bracket);
      if (json) walkListings(json, rows, "zap");
      from = i + needle.length;
    }
  }
  const seen = new Set<string>();
  return rows.filter((r) => {
    if (!r.id || seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });
}

export const ZAP_FEEDS = [
  "https://www.zapimoveis.com.br/venda/apartamentos/pb+joao-pessoa/",
  "https://www.zapimoveis.com.br/venda/casas/pb+joao-pessoa/",
  "https://www.zapimoveis.com.br/venda/kitnet/pb+joao-pessoa/",
  "https://www.zapimoveis.com.br/venda/apartamentos/pb+joao-pessoa/tambaú/",
  "https://www.zapimoveis.com.br/venda/apartamentos/pb+joao-pessoa/manaíra/",
  "https://www.zapimoveis.com.br/venda/apartamentos/pb+joao-pessoa/bessa/",
  "https://www.zapimoveis.com.br/venda/apartamentos/pb+joao-pessoa/cabo-branco/",
  "https://www.vivareal.com.br/venda/paraiba/joao-pessoa/",
  "https://www.olx.com.br/imoveis/venda/estado-pb/joao-pessoa",
];

export async function fetchViaBrowserRest(url: string) {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const account = process.env.CLOUDFLARE_ACCOUNT_ID ?? "749b2e9b3642e4b03321d5830e81c195";
  if (!token) return null;
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account}/browser-rendering/content`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url,
        gotoOptions: { waitUntil: "networkidle2", timeout: 45000 },
        rejectResourceTypes: ["image", "media", "font"],
        userAgent: CHROME_UA,
        setExtraHTTPHeaders: { "accept-language": "pt-BR,pt;q=0.9" },
      }),
    },
  );
  if (!res.ok) {
    console.error(`browser-rest ${res.status} ${url}`);
    return null;
  }
  const json = (await res.json()) as { success?: boolean; result?: unknown };
  const html = await unwrapBrowserResult(json.result ?? json);
  return html.length > 400 ? html : null;
}

export async function fetchViaWorkerBrowser(url: string) {
  const key = process.env.HARVEST_KEY ?? "farol-colheita-jp-2026";
  const listed = [
    process.env.HARVEST_RENDER_URL,
    "https://farolqueprotege.com.br/api/colheita",
    "https://farolimobiliario.jhonata-emerick.workers.dev/api/colheita",
  ].filter((x, i, arr): x is string => Boolean(x) && arr.indexOf(x) === i);

  for (const endpoint of listed) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-farol-colheita": key,
          "user-agent": CHROME_UA,
        },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) {
        console.error(`colheita ${res.status} ${endpoint}`);
        continue;
      }
      const json = (await res.json()) as { ok?: boolean; html?: string; blocked?: boolean };
      const html = json.html ?? "";
      if (html.length > 400 && html !== "{}" && !json.blocked) return html;
      console.error(`colheita vazio ${endpoint} bytes=${html.length} blocked=${json.blocked ?? false}`);
    } catch (err) {
      console.error(`colheita fail ${endpoint}`, err);
    }
  }
  return null;
}

export async function fetchHtml(url: string, preferBrowser = false) {
  if (preferBrowser) {
    const rest = await fetchViaBrowserRest(url);
    if (rest && rest.length > 400) return rest;
    const worker = await fetchViaWorkerBrowser(url);
    if (worker && worker.length > 400) return worker;
  }
  return fetchText(url);
}

export async function harvestAll(now = new Date()): Promise<{ listings: Listing[]; report: HarvestReport }> {
  const at = now.toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" });
  const raws: HarvestRaw[] = [];
  let portalListed: number | null = null;
  let feedsOk = 0;
  let feedsFail = 0;
  let browserOk = 0;
  let browserFail = 0;

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

  for (const url of ZAP_FEEDS) {
    try {
      const html = await fetchHtml(url, true);
      const blocked = /just a moment|cf-challenge|attention required|radware|access denied/i.test(html);
      if (blocked) {
        browserFail += 1;
        feedsFail += 1;
        continue;
      }
      const parsed = parseZapHtml(html);
      raws.push(...parsed);
      if (parsed.length) browserOk += 1;
      else browserFail += 1;
      feedsOk += 1;
    } catch {
      browserFail += 1;
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
      browserOk,
      browserFail,
    },
  };
}
