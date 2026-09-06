export const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export const brl2 = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export const num = new Intl.NumberFormat("pt-BR");

export function pct(value: number, digits = 1) {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    maximumFractionDigits: digits,
    signDisplay: "exceptZero",
  }).format(value);
}

export function pctAbs(value: number, digits = 1) {
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    maximumFractionDigits: digits,
  }).format(value);
}

export function compactBrl(value: number) {
  if (Math.abs(value) >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toLocaleString("pt-BR", { maximumFractionDigits: 2 })} mi`;
  }
  if (Math.abs(value) >= 1_000) {
    return `R$ ${(value / 1_000).toLocaleString("pt-BR", { maximumFractionDigits: 0 })} mil`;
  }
  return brl.format(value);
}
