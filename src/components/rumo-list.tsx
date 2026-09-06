import type { ReactNode } from "react";
import {
  punchForGoal,
  rumoKickerFor,
  rumoNote,
  type LifeGoal,
} from "@/lib/brief";
import { compactBrl } from "@/lib/format";
import { punch, type Scorecard } from "@/lib/score";
import { cn } from "@/lib/utils";

function hitTone(card: Scorecard, goal?: LifeGoal) {
  if (goal === "renda") return card.strYield >= 0.08 ? "text-deal" : "text-fg";
  if (goal === "aposentar") return card.ltrYield >= 0.05 ? "text-deal" : "text-fg";
  if (goal === "morar") return "text-fg";
  if (card.discount >= 0.12) return "text-deal";
  return "text-deal";
}

function hitOf(card: Scorecard, goal?: LifeGoal) {
  return goal ? punchForGoal(card, goal) : punch(card);
}

export function rumoKicker(card: Scorecard, goal?: LifeGoal) {
  if (goal) return rumoKickerFor(card, goal);
  if (card.listing.sources.includes("leilao")) return "Leilão";
  if (card.listing.portalCount === 0) return "Fora dos portais";
  return "Sinal";
}

export function RumoHero({
  card,
  why,
  goal,
  kicker,
  onOpen,
}: {
  card: Scorecard;
  why?: string;
  goal?: LifeGoal;
  kicker?: string;
  onOpen: (id: string) => void;
}) {
  const { listing, nb } = card;
  const hit = hitOf(card, goal);
  return (
    <article className="rounded-[14px] bg-surface px-5 py-6 shadow-(--shadow-border) md:px-7 md:py-7">
      <button type="button" onClick={() => onOpen(listing.id)} className="pressable w-full text-left">
        <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
          {kicker ?? rumoKicker(card, goal)}
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
            <p className={cn("font-display text-5xl leading-none tracking-tight md:text-[44px]", hitTone(card, goal))}>
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
  goal,
  onOpen,
}: {
  card: Scorecard;
  index: number;
  goal?: LifeGoal;
  onOpen: (id: string) => void;
}) {
  const { listing, nb } = card;
  const hit = hitOf(card, goal);
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
          <span className="block text-[11px] uppercase tracking-[0.14em] text-subtle">
            {rumoKicker(card, goal)}
          </span>
          <span className="mt-1.5 block font-display text-lg leading-snug md:text-xl">
            {listing.title}
          </span>
          <span className="mt-1 block text-[13px] text-subtle">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </span>
        </span>
        <span className="col-start-2 mt-2 sm:col-start-auto sm:mt-0 sm:text-right">
          <span className={cn("block font-display text-[1.6rem] leading-none md:text-[26px]", hitTone(card, goal))}>
            {hit.value}
          </span>
          <span className="mt-1.5 block text-[11px] text-subtle">
            {goal ? rumoNote(card, goal) : hit.caption}
          </span>
        </span>
      </button>
    </li>
  );
}

export function MapPanel({
  children,
  caption = "Só os aderentes a este rumo",
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <div className="rounded-[14px] bg-surface p-5 shadow-(--shadow-border)">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.14em] text-subtle">Onde estão</p>
        <p className="text-xs text-subtle">{caption}</p>
      </div>
      {children}
    </div>
  );
}
