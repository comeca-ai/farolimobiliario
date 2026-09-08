export type LeadSource = "site" | "evento-brasilia";

export type Lead = {
  email: string;
  whatsapp: string;
  source?: LeadSource;
};

export function digits(value: string) {
  return value.replace(/\D/g, "").slice(0, 11);
}

export function maskBrMobile(value: string) {
  const d = digits(value);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function validBrMobile(value: string) {
  const d = digits(value);
  return d.length === 11 && d[2] === "9";
}

export function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim().toLowerCase());
}

export function waMe(value: string) {
  return `https://wa.me/55${digits(value)}`;
}
