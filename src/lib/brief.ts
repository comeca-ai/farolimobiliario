import { compactBrl, pct, pctAbs } from "@/lib/format";
import { LISTINGS_SCORED, type Scorecard } from "@/lib/score";
import { NEIGHBORHOODS } from "@/data/market";

export type LifeGoal = "renda" | "patrimonio" | "morar" | "aposentar";

export type Brief = {
  age: number;
  goal: LifeGoal;
  years: number;
  wish?: string;
  places?: string[];
};

export const GOAL_LABEL: Record<LifeGoal, string> = {
  renda: "Renda todo mês",
  patrimonio: "Patrimônio que valoriza",
  morar: "Morar / deixar para a família",
  aposentar: "Aposentadoria tranquila",
};

export const GOAL_HINT: Record<LifeGoal, string> = {
  renda: "O caixa do imóvel precisa trabalhar agora.",
  patrimonio: "Comprar abaixo do justo e deixar o bairro subir.",
  morar: "Uso próprio, silêncio — não hóspede.",
  aposentar: "Contrato longo, inquilino estável, pouca gestão.",
};

export const GOAL_HEADLINE: Record<LifeGoal, string> = {
  renda: "O caixa agora.",
  patrimonio: "Abaixo do justo.",
  morar: "Morar bem, em silêncio.",
  aposentar: "Renda previsível.",
};

export const GOAL_SORT: Record<LifeGoal, string> = {
  renda: "ordenados por rentabilidade",
  patrimonio: "ordenados por spread",
  morar: "ordenados por preço/m²",
  aposentar: "ordenados por yield de aluguel",
};

export const GOAL_HERO_KICK: Record<LifeGoal, string> = {
  renda: "Melhor caixa",
  patrimonio: "Maior spread",
  morar: "Melhor para morar",
  aposentar: "Melhor aluguel anual",
};

export const GOAL_CHIP: Record<LifeGoal, string> = {
  renda: "Renda",
  patrimonio: "Patrimônio",
  morar: "Morar",
  aposentar: "Aposentar",
};

export const GOAL_MAP_CAPTION: Record<LifeGoal, string> = {
  renda: "Só o que fecha caixa de temporada",
  patrimonio: "Só os aderentes a este rumo",
  morar: "Onde dá para viver",
  aposentar: "Onde o aluguel se sustenta",
};

export function foldPt(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const PLACE_ALIAS: Record<string, string> = {
  "cidade universitaria": "jcu",
  "jardim cidade universitaria": "jcu",
  "jd cidade universitaria": "jcu",
  cabedelo: "intermares",
  "altiplano cabo branco": "altiplano",
  "ernesto geisel": "geisel",
  "cristo redentor": "cristo",
  "13 de maio": "treze-de-maio",
};

export function parsePlaces(text: string): string[] {
  const t = foldPt(text);
  const found: string[] = [];
  for (const n of NEIGHBORHOODS) {
    const name = foldPt(n.name);
    const slug = n.id.replace(/-/g, " ");
    if ((name.length >= 4 && t.includes(name)) || t.includes(slug) || t.includes(n.id)) {
      found.push(n.id);
    }
  }
  for (const [alias, id] of Object.entries(PLACE_ALIAS)) {
    if (t.includes(alias) && !found.includes(id)) found.push(id);
  }
  return found;
}

function askedNames(places: string[]) {
  return places
    .map((id) => NEIGHBORHOODS.find((n) => n.id === id)?.name)
    .filter(Boolean)
    .join(", ");
}

export function punchForGoal(card: Scorecard, goal: LifeGoal): { value: string; caption: string } {
  if (goal === "renda") {
    const pay = card.paybackMonths ? ` · payback ${Math.round(card.paybackMonths)} meses` : "";
    return {
      value: pctAbs(Math.max(card.strYield, 0)),
      caption: `rentabilidade de temporada, já líquida${pay}`,
    };
  }
  if (goal === "patrimonio") {
    return { value: pct(card.discount), caption: "abaixo do justo do bairro" };
  }
  if (goal === "morar") {
    return {
      value: compactBrl(card.listing.ask),
      caption: `${card.listing.area} m² · ${card.nb.name} · uso próprio`,
    };
  }
  return {
    value: pctAbs(Math.max(card.ltrYield, 0)),
    caption: "yield de aluguel anual, já líquido",
  };
}

export function rumoNote(card: Scorecard, goal: LifeGoal) {
  if (goal === "renda") {
    return card.paybackMonths
      ? `payback ${Math.round(card.paybackMonths)} meses`
      : `ocupação ${pctAbs(card.nb.strOccupancy)}`;
  }
  if (goal === "patrimonio") return `bairro ${pct(card.nb.yoy)} / 12m`;
  if (goal === "morar") {
    const q = card.listing.rooms === 1 ? "1 quarto" : `${card.listing.rooms} quartos`;
    return `${q} · ${card.listing.type === "casa" ? "casa" : "apto"}`;
  }
  return `condomínio ${compactBrl(card.listing.condo)}/mês`;
}

export function rumoKickerFor(card: Scorecard, goal: LifeGoal) {
  const { listing } = card;
  if (goal === "renda") {
    if (listing.type === "flat" || listing.type === "kitnet") return "Temporada";
    return "Caixa agora";
  }
  if (goal === "morar") {
    if (listing.type === "casa") return "Casa";
    if (listing.portalCount === 0) return "Fora dos portais";
    return "Uso próprio";
  }
  if (goal === "aposentar") return "Aluguel anual";
  if (listing.sources.includes("leilao")) return "Leilão";
  if (listing.portalCount === 0) return "Fora dos portais";
  if (listing.sources.includes("inventario")) return "Inventário";
  return "Spread";
}

export function heroKicker(card: Scorecard, goal: LifeGoal) {
  const specific = rumoKickerFor(card, goal);
  const lead = GOAL_HERO_KICK[goal];
  if (!specific) return lead;
  const s = foldPt(specific);
  const l = foldPt(lead);
  if (s === l || l.includes(s)) return lead;
  return `${lead} · ${specific}`;
}

export function leadFor(brief: Brief): string {
  const asked = brief.places?.length ? askedNames(brief.places) : "";
  const askedLead = asked ? `Você pediu ${asked}. ` : "";

  if (brief.goal === "renda") {
    return `${askedLead}Horizonte de ${brief.years} anos. A diária precisa pagar a parcela agora — só o que fecha caixa de temporada, já líquido.`;
  }
  if (brief.goal === "patrimonio") {
    return `${askedLead}Seus ${brief.years} anos são tempo de realizar o spread, não de gerir hóspede. Todos os imóveis desta lista estão abaixo do preço justo do próprio bairro.`;
  }
  if (brief.goal === "morar") {
    return asked
      ? `Você pediu ${asked} para viver. Uso próprio — não hóspede. A rua é de morador, o m² está honesto.`
      : `Uso próprio — não hóspede. Separei onde a rua é de morador e o m² está honesto.`;
  }
  return `${askedLead}Renda previsível para os próximos ${brief.years} anos. Contrato anual, pouca gestão, sem check-in.`;
}

export function heroWhy(card: Scorecard, goal: LifeGoal): string {
  if (goal === "renda") {
    const pay = card.paybackMonths ? `, payback ${Math.round(card.paybackMonths)} meses` : "";
    return `Temporada ${pctAbs(Math.max(card.strYield, 0))} em ${card.nb.name}${pay}. O caixa da diária pesa mais que esperar o m².`;
  }
  if (goal === "patrimonio") {
    const hidden = card.listing.portalCount === 0 ? " e o anúncio não circula nos portais — menos gente vendo o mesmo desconto" : "";
    return `Bairro ${pct(card.nb.yoy)} em 12 meses${hidden}.`;
  }
  if (goal === "morar") {
    const q = card.listing.rooms === 1 ? "1 quarto" : `${card.listing.rooms} quartos`;
    return `${q} em ${card.nb.name}, ${card.listing.area} m². Serve para viver, não para turn-over de fim de semana.`;
  }
  return `Aluguel longo ${pctAbs(Math.max(card.ltrYield, 0))} a.a. em ${card.nb.name}. Pouca operação, sem check-in.`;
}

export const YEAR_OPTIONS = [3, 5, 8, 10, 15, 20] as const;

export const GOAL_DEFAULTS: Record<LifeGoal, Pick<Brief, "age" | "years">> = {
  renda: { age: 34, years: 5 },
  patrimonio: { age: 42, years: 10 },
  morar: { age: 38, years: 8 },
  aposentar: { age: 54, years: 15 },
};

const LEX: Record<LifeGoal, string[]> = {
  renda: [
    "aluguel",
    "airbnb",
    "renda",
    "mes",
    "mês",
    "flat",
    "diaria",
    "diária",
    "caixa",
    "parcela",
    "temporada",
    "hospede",
    "hóspede",
    "studio",
    "kitnet",
    "short",
  ],
  patrimonio: [
    "investir",
    "investimento",
    "patrimonio",
    "patrimônio",
    "valoriz",
    "spread",
    "desconto",
    "abaixo",
    "barato",
    "oportunidade",
    "comprar",
    "m2",
    "m²",
  ],
  morar: [
    "morar",
    "familia",
    "família",
    "casa",
    "rua",
    "viver",
    "proprio",
    "próprio",
    "filhos",
    "silencio",
    "silêncio",
    "moradia",
    "deixar",
  ],
  aposentar: [
    "aposent",
    "parar",
    "passivo",
    "inquilino",
    "reajuste",
    "longo",
    "tranquilo",
    "sem trabalho",
    "futuro",
  ],
};

export type RumoGuess = {
  goal: LifeGoal;
  score: number;
  why: string;
};

export function proposeRumos(text: string): RumoGuess[] {
  const t = foldPt(text);
  const scores: Record<LifeGoal, number> = {
    renda: 0.08,
    patrimonio: 0.08,
    morar: 0.08,
    aposentar: 0.08,
  };
  (Object.keys(LEX) as LifeGoal[]).forEach((g) => {
    for (const w of LEX[g]) {
      if (t.includes(foldPt(w))) scores[g] += 1;
    }
  });
  const whyFor: Record<LifeGoal, string> = {
    renda: "Li caixa agora — flat, diária, parcela.",
    patrimonio: "Li compra abaixo do justo e tempo para o m².",
    morar: "Li uso próprio, família — não hóspede.",
    aposentar: "Li renda previsível, sem rotatividade.",
  };
  return (Object.keys(scores) as LifeGoal[])
    .map((goal) => ({ goal, score: scores[goal], why: whyFor[goal] }))
    .sort((a, b) => b.score - a.score);
}

export type Match = {
  card: Scorecard;
  fit: number;
  why: string;
};

export function reading(brief: Brief, matches: Match[]): string {
  const top = matches[0];
  const place = top ? top.card.nb.name : "a orla";
  const asked = brief.places?.length ? askedNames(brief.places) : "";
  const askedLead = asked ? `Você pediu ${asked}. ` : "";

  if (brief.goal === "renda") {
    return `${askedLead}Li a mesa. Separei os 3 encaixes mais fortes e deixei mais sinais no mapa, puxando ${place}: ticket que cabe agora, temporada cobrindo a parcela.`;
  }
  if (brief.goal === "patrimonio") {
    return `${askedLead}Li compra abaixo do m² do bairro e tempo para o bairro subir. Separei os 3 spreads mais largos com motivo conhecido — e deixei o resto no mapa. O spread começa em ${place}.`;
  }
  if (brief.goal === "morar") {
    return asked
      ? `Você pediu ${asked} para viver. Li uso próprio — não hóspede. Separei os 3 encaixes puxando ${place}: a rua é de morador, o m² está honesto.`
      : `Li uso próprio — não hóspede. Separei os 3 encaixes onde a rua é de morador, o m² está honesto e a escola e o mercado ficam a pé. ${place} aparece primeiro.`;
  }
  return `${askedLead}Li renda estável, sem rotatividade. Separei os 3 encaixes onde o contrato anual paga mais que a poupança. ${place} entra porque o aluguel se sustenta sem check-in.`;
}

export const MATCH_PER_RUMO = 3;
export const SURFACE_PER_RUMO = 8;
export const LIST_ON_RUMO = 5;

function sameZoneAsAsked(nbId: string, places: string[]) {
  const asked = places
    .map((id) => NEIGHBORHOODS.find((n) => n.id === id)?.zone)
    .filter(Boolean);
  const zone = NEIGHBORHOODS.find((n) => n.id === nbId)?.zone;
  return Boolean(zone && asked.includes(zone));
}

export function inAskedPlace(nbId: string, places?: string[], allowZone = true) {
  if (!places?.length) return true;
  if (places.includes(nbId)) return true;
  return allowZone && sameZoneAsAsked(nbId, places);
}

function rankBrief(brief: Brief): Match[] {
  const scored = LISTINGS_SCORED.map((card) => {
    const fit = fitScore(card, brief);
    return { card, fit, why: why(card, brief) };
  }).sort((a, b) => b.fit - a.fit);

  return scored;
}

function scopeMatches(scored: Match[], places: string[]) {
  if (!places.length) return scored;

  const exact = scored.filter((m) => places.includes(m.card.nb.id));
  if (exact.length >= SURFACE_PER_RUMO) return exact;
  const zoneFill = scored.filter(
    (m) => !places.includes(m.card.nb.id) && sameZoneAsAsked(m.card.nb.id, places),
  );
  return [...exact, ...zoneFill];
}

export function surfaceBrief(brief: Brief, limit = SURFACE_PER_RUMO): Match[] {
  const places = brief.places ?? [];
  return scopeMatches(rankBrief(brief), places).slice(0, limit);
}

export function listBrief(brief: Brief, limit = LIST_ON_RUMO): Match[] {
  const pool = surfaceBrief(brief, Math.max(limit, SURFACE_PER_RUMO));
  return [...pool]
    .sort((a, b) => metricFor(b.card, brief.goal) - metricFor(a.card, brief.goal))
    .slice(0, limit);
}

function metricFor(card: Scorecard, goal: LifeGoal) {
  if (goal === "renda") return card.strYield;
  if (goal === "patrimonio") return card.discount;
  if (goal === "morar") return -card.askM2;
  return card.ltrYield;
}

export function countBriefMatches(brief: Brief): number {
  const places = brief.places ?? [];
  return scopeMatches(rankBrief(brief), places).length;
}

export function matchBrief(brief: Brief): Match[] {
  return surfaceBrief(brief, MATCH_PER_RUMO);
}

function fitScore(card: Scorecard, brief: Brief): number {
  const { listing, nb, discount, strYield, ltrYield, radarObscurity, score } = card;
  const young = brief.age < 36 ? 1 : brief.age < 50 ? 0.45 : 0;
  const older = brief.age >= 50 ? 1 : brief.age >= 40 ? 0.4 : 0;
  const short = brief.years <= 5 ? 1 : brief.years <= 8 ? 0.55 : 0.15;
  const longH = brief.years >= 12 ? 1 : brief.years >= 8 ? 0.5 : 0.1;
  const strOps =
    listing.type === "flat" || listing.type === "kitnet" || listing.rooms <= 2
      ? listing.seaMeters < 500
        ? 1
        : 0.4
      : 0.1;
  const home =
    listing.type === "casa" ? 1 : listing.rooms >= 3 ? 0.7 : listing.type === "apto" ? 0.35 : 0.1;

  let s = 0.12 * (score / 100);
  const pinned = Boolean(brief.places?.length);

  if (brief.goal === "renda") {
    s +=
      0.38 * clamp(strYield / 0.12) +
      0.22 * strOps +
      0.12 * short +
      0.1 * young +
      0.06 * clamp(discount / 0.2);
  } else if (brief.goal === "patrimonio") {
    s +=
      0.34 * clamp(discount / 0.25) +
      0.22 * clamp(nb.yoy / 0.16) +
      0.16 * longH +
      0.1 * radarObscurity +
      0.06 * (1 - strOps);
  } else if (brief.goal === "morar") {
    if (pinned) {
      s += 0.14 * home + 0.08 * (listing.rooms / 4);
    } else {
      s +=
        0.32 * home +
        0.2 * radarObscurity +
        0.14 * older +
        0.12 * clamp(ltrYield / 0.07) +
        0.1 * (listing.rooms / 4);
    }
  } else {
    s +=
      0.36 * clamp(ltrYield / 0.07) +
      0.18 * (1 - strOps) +
      0.16 * older +
      0.12 * clamp(discount / 0.2) +
      0.08 * longH;
  }

  if (listing.ask > ticketCap(brief)) s *= 0.72;

  const places = brief.places ?? [];
  if (places.length) {
    if (places.includes(nb.id)) s += 0.9;
    else if (sameZoneAsAsked(nb.id, places)) s += 0.15;
    else s *= 0.05;
  }

  return s;
}

function ticketCap(brief: Brief): number {
  if (brief.goal === "renda") return brief.age < 40 ? 480000 : 650000;
  if (brief.goal === "morar") return 900000;
  if (brief.goal === "aposentar") return 720000;
  return 850000;
}

function why(card: Scorecard, brief: Brief): string {
  const { listing, nb, discount, strYield, ltrYield, paybackMonths } = card;
  const pay = paybackMonths ? `${Math.round(paybackMonths)} meses` : "não fecha";

  if (brief.goal === "renda") {
    return `Yield de temporada ${pctAbs(Math.max(strYield, 0))} em ${nb.name}, payback ${pay}. Com horizonte de ${brief.years} anos, o caixa da diária pesa mais que esperar o m² — e o ticket ${compactBrl(listing.ask)} ainda cabe numa operação que você consegue tocar.`;
  }
  if (brief.goal === "patrimonio") {
    return `${pct(discount)} versus o justo de ${nb.name} (${pct(nb.yoy)} em 12 meses). Seus ${brief.years} anos são tempo de realizar o spread, não de gerir hóspede. ${listing.portalCount === 0 ? "Fora dos portais — menos gente vendo o mesmo desconto." : ""}`;
  }
  if (brief.goal === "morar") {
    const asked = brief.places?.length ? askedNames(brief.places) : "";
    const here = asked
      ? asked.includes(nb.name)
        ? `Está em ${nb.name}, como você pediu.`
        : `Você pediu ${asked}; este é o vizinho que a mesa tem — ${nb.name}.`
      : listing.portalCount === 0
        ? "Ainda fora do portal."
        : "Pouco holofote.";
    return `${listing.rooms} quarto${listing.rooms > 1 ? "s" : ""} em ${nb.name}, ${listing.area} m². ${here} Serve para viver, não para turn-over de fim de semana.`;
  }
  return `Aluguel longo ${pctAbs(Math.max(ltrYield, 0))} a.a. em ${nb.name}, condomínio ${compactBrl(listing.condo)}/mês. Pouca operação. Renda que não pede check-in.`;
}

function clamp(n: number) {
  return Math.max(0, Math.min(1, n));
}
