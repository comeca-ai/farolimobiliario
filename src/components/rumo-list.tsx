import type { ReactNode } from "react";
import { compactBrl, pct } from "@/lib/format";
import { RADAR_LABEL } from "@/lib/labels";
import { punch, type Scorecard } from "@/lib/score";
import { cn } from "@/lib/utils";

export function rumoKicker(card: Scorecard) {
  const { listing } = card;
  if (listing.sources.includes("leilao")) return "Leilão";
  if (listing.portalCount === 0) return "Fora dos portais";
  if (listing.sources.includes("inventario")) return "Inventário";
  if (listing.sources.includes("placa")) return "Placa na rua";
  return RADAR_LABEL[card.primary];
}

function hitTone(card: Scorecard) {
  if (card.primary === "rua") return "text-warn";
  if (card.discount >= 0.12 || card.strYield >= 0.08) return "text-deal";
  return "text-deal";
}

export function RumoHero({
  card,
  why,
  onOpen,
}: {
  card: Scorecard;
  why?: string;
  onOpen: (id: string) => void;
}) {
  const { listing, nb } = card;
  const hit = punch(card);
  return (
    <article className="rounded-[14px] bg-surface px-5 py-6 shadow-(--shadow-border) md:px-7 md:py-7">
      <button type="button" onClick={() => onOpen(listing.id)} className="pressable w-full text-left">
        <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
          {rumoKicker(card)}
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-[1.6rem] font-normal leading-snug md:text-[26px]">
              {listing.title}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
            </p>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className={cn("font-display text-5xl leading-none tracking-tight md:text-[44px]", hitTone(card))}>
              {hit.value}
            </p>
            <p className="mt-1.5 text-xs text-subtle">{hit.caption}</p>
          </div>
        </div>
        {why ? (
          <p className="mt-5 max-w-[56ch] text-sm leading-relaxed text-muted">{why}</p>
        ) : null}
      </button>
    </article>
  );
}

export function RumoRow({
  card,
  index,
  onOpen,
}: {
  card: Scorecard;
  index: number;
  onOpen: (id: string) => void;
}) {
  const { listing, nb } = card;
  const hit = punch(card);
  const kicker = rumoKicker(card);
  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={() => onOpen(listing.id)}
        className="pressable grid w-full grid-cols-[1.6rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 py-5 text-left sm:grid-cols-[1.6rem_minmax(0,1fr)_auto] sm:gap-x-6"
      >
        <span className="font-display text-[13px] text-subtle">
          {String(index).padStart(2, "0")}
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] uppercase tracking-[0.14em] text-subtle">{kicker}</span>
          <span className="mt-1.5 block font-display text-lg leading-snug md:text-xl">
            {listing.title}
          </span>
          <span className="mt-1 block text-[13px] text-subtle">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </span>
        </span>
        <span className="col-start-2 mt-2 sm:col-start-auto sm:mt-0 sm:text-right">
          <span className={cn("block font-display text-[1.6rem] leading-none md:text-[26px]", hitTone(card))}>
            {hit.value}
          </span>
          <span className="mt-1.5 block text-[11px] text-subtle">bairro {pct(nb.yoy)} / 12m</span>
        </span>
      </button>
    </li>
  );
}

export function MapPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[14px] bg-surface p-5 shadow-(--shadow-border)">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.14em] text-subtle">Onde estão</p>
        <p className="text-xs text-subtle">Só os aderentes a este rumo</p>
      </div>
      {children}
    </div>
  );
}

