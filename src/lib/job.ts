import { GOAL_DEFAULTS, type Brief, type LifeGoal } from "@/lib/brief";
import { validBrMobile, validEmail, type Lead } from "@/lib/lead";
import type { Listing } from "@/data/listings";

/** Rumos da home. O resto não paga o job. */
export const HOME_GOALS = ["renda", "patrimonio"] as const;
export type HomeGoal = (typeof HOME_GOALS)[number];

export const HOME_LABEL: Record<HomeGoal, string> = {
  renda: "Flat → Airbnb",
  patrimonio: "Abaixo do preço",
};

export const HOME_HINT: Record<HomeGoal, string> = {
  renda: "Caixa de temporada. O que fecha a conta da diária.",
  patrimonio: "Spread vs m² do bairro. O problema fica visível.",
};

export const HOME_WISH: Record<HomeGoal, string> = {
  renda: "flat airbnb temporada que pague a parcela",
  patrimonio: "comprar abaixo do preço ciente do problema",
};

export function isHomeGoal(goal: LifeGoal): goal is HomeGoal {
  return goal === "renda" || goal === "patrimonio";
}

export function listingProblem(listing: Listing): string {
  const risk = listing.risks[0]?.trim();
  return risk || "Problema não informado nesta visita.";
}

export function jobSubmitError(input: {
  goal: HomeGoal | null;
  email: string;
  whatsapp: string;
  skipCadastro: boolean;
}): string | null {
  if (!input.goal) return "Escolha Airbnb ou abaixo do preço.";
  if (input.skipCadastro) return null;
  if (!validEmail(input.email)) return "Precisamos de um e-mail válido — é por onde o Farol te vê.";
  if (!validBrMobile(input.whatsapp)) return "Celular com DDD e o 9. Ex.: (83) 98888-0000.";
  return null;
}

export function openJobBrief(goal: HomeGoal): Brief {
  return {
    goal,
    ...GOAL_DEFAULTS[goal],
    wish: HOME_WISH[goal],
  };
}

export function jobLead(email: string, whatsapp: string): Lead {
  return { email: email.trim().toLowerCase(), whatsapp };
}
