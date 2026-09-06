import { compactBrl, pct, pctAbs } from "@/lib/format";
import { LISTINGS_SCORED, type Scorecard } from "@/lib/score";

export type LifeGoal = "renda" | "patrimonio" | "morar" | "aposentar";

export type Brief = {
  age: number;
  goal: LifeGoal;
  years: number;
};

export const GOAL_LABEL: Record<LifeGoal, string> = {
  renda: "Renda todo mês",
  patrimonio: "Patrimônio que valoriza",
  morar: "Morar / deixar para a família",
  aposentar: "Aposentar com aluguel",
};

export const GOAL_HINT: Record<LifeGoal, string> = {
  renda: "O caixa do imóvel precisa trabalhar agora.",
  patrimonio: "Comprar abaixo do justo e deixar o bairro subir.",
  morar: "Uso próprio, rua, silêncio — não hóspede.",
  aposentar: "Aluguel longo, pouca operação, parcela que se paga.",
};

export const YEAR_OPTIONS = [3, 5, 8, 10, 15, 20] as const;

export type Match = {
  card: Scorecard;
  fit: number;
  why: string;
};

export function reading(brief: Brief, matches: Match[]): string {
  const n = LISTINGS_SCORED.length;
  const top = matches[0];
  const place = top ? top.card.nb.name : "a orla";
  const goal = GOAL_LABEL[brief.goal].toLowerCase();

  if (brief.goal === "renda") {
    return `Você tem ${brief.age} anos e quer ${goal} em ${brief.years} anos. Em João Pessoa isso não é casa no Altiplano — é flat ou studio na orla, NOI de curta temporada cobrindo a parcela. Li ${n} sinais. Os mais aderentes puxam ${place}: ticket que cabe agora, ocupação de corredor turístico, operação de Airbnb. O resto da mesa continua no radar, mas não fecha a conta deste rumo.`;
  }
  if (brief.goal === "patrimonio") {
    return `Você tem ${brief.age} anos e quer ${goal} em ${brief.years} anos. O Farol então procura spread: ask abaixo do m² justo, bairro ainda em alta de 12 meses, pouco holofote de portal. Li ${n} sinais. O que sobra para você começa em ${place} — desconto que o tempo do seu horizonte consegue realizar, não yield de fim de semana.`;
  }
  if (brief.goal === "morar") {
    return `Você tem ${brief.age} anos e quer um lugar para morar ou deixar, em ${brief.years} anos. Hóspede de Tambaú não entra nesta conta. Li ${n} sinais e puxei casa e apto com vida de rua, inventário, placa — o que o portal ainda não embalou. ${place} aparece primeiro porque o imóvel ainda é moradia, não ativo de diária.`;
  }
  return `Você tem ${brief.age} anos e quer ${goal} daqui a ${brief.years} anos. A operação de Airbnb cansa; o que importa é aluguel longo estável, condomínio que não coma a renda, bairro que não dependa de temporada. Li ${n} sinais. ${place} entra porque o NOI tradicional se sustenta sem você virar camareira.`;
}

export function matchBrief(brief: Brief): Match[] {
  return LISTINGS_SCORED.map((card) => {
    const fit = fitScore(card, brief);
    return { card, fit, why: why(card, brief) };
  })
    .sort((a, b) => b.fit - a.fit)
    .slice(0, 5);
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

  if (brief.goal === "renda") {
    s += 0.38 * clamp(strYield / 0.12) + 0.22 * strOps + 0.12 * short + 0.1 * young + 0.06 * clamp(discount / 0.2);
  } else if (brief.goal === "patrimonio") {
    s +=
      0.34 * clamp(discount / 0.25) +
      0.22 * clamp(nb.yoy / 0.16) +
      0.16 * longH +
      0.1 * radarObscurity +
      0.06 * (1 - strOps);
  } else if (brief.goal === "morar") {
    s += 0.32 * home + 0.2 * radarObscurity + 0.14 * older + 0.12 * clamp(ltrYield / 0.07) + 0.1 * (listing.rooms / 4);
  } else {
    s +=
      0.36 * clamp(ltrYield / 0.07) +
      0.18 * (1 - strOps) +
      0.16 * older +
      0.12 * clamp(discount / 0.2) +
      0.08 * longH;
  }

  if (listing.ask > ticketCap(brief)) s *= 0.72;
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
    return `Yield STR ${pctAbs(Math.max(strYield, 0))} em ${nb.name}, payback ${pay}. Com horizonte de ${brief.years} anos, o caixa da diária pesa mais que esperar o m² — e o ticket ${compactBrl(listing.ask)} ainda cabe numa operação que você consegue tocar.`;
  }
  if (brief.goal === "patrimonio") {
    return `${pct(discount)} versus o justo de ${nb.name} (${pct(nb.yoy)} em 12 meses). Seus ${brief.years} anos são tempo de realizar o spread, não de gerir hóspede. ${listing.portalCount === 0 ? "Fora dos portais — menos gente vendo o mesmo desconto." : ""}`;
  }
  if (brief.goal === "morar") {
    return `${listing.rooms} quarto${listing.rooms > 1 ? "s" : ""} em ${nb.name}, ${listing.area} m², ${listing.portalCount === 0 ? "ainda na rua." : "pouco holofote."} Serve para viver, não para turn-over de fim de semana. Aluguel equivalente ${pctAbs(Math.max(ltrYield, 0))} se o plano mudar.`;
  }
  return `Aluguel longo ${pctAbs(Math.max(ltrYield, 0))} a.a. em ${nb.name}, condomínio ${compactBrl(listing.condo)}/mês. Pouca operação. Aos ${brief.age} anos, isso é renda que não pede check-in.`;
}

function clamp(n: number) {
  return Math.max(0, Math.min(1, n));
}
