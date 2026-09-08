import { validBrMobile, validEmail } from "@/lib/lead";

export const EVENTO_SOURCE = "evento-brasilia" as const;
export const EVENTO_CITY = "Brasília";
export const EVENTO_MARKET = "João Pessoa";
export const EVENTO_KICKER = "Primeira mesa · Brasília · set 2026";
export const EVENTO_TITLE = "Você está em Brasília. O spread está na orla.";

export function eventoSubmitError(email: string, whatsapp: string): string | null {
  if (!validEmail(email)) return "Confere o e-mail — é por ele que o dossiê chega.";
  if (!validBrMobile(whatsapp)) {
    return "WhatsApp com DDD e o 9. Brasília é 61. João Pessoa é 83.";
  }
  return null;
}
