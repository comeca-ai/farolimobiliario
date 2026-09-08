import { listingProblem } from "@/lib/job";
import type { ReactNode } from "react";
import { punchForGoal, rumoKickerFor, rumoNote, type LifeGoal } from "@/lib/brief";
import { compactBrl } from "@/lib/format";
import { punch, type Scorecard } from "@/lib/score";

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
  const problem = listingProblem(listing);
  return (
    <article className="flex flex-col gap-[18px] rounded-[18px] border border-line bg-surface px-7 py-[26px] shadow-card">
      <button type="button" onClick={() => onOpen(listing.id)} className="pressable w-full text-left">
        <p className="eyebrow text-accent">{kicker ?? rumoKicker(card, goal)}</p>
        <div className="mt-4 grid items-end gap-5 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <h2 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] leading-[1.02]">
              {listing.title}
            </h2>
            <p className="mt-2 text-[15px] tabular-nums text-subtle">
              {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
            </p>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="font-display text-[clamp(3.5rem,6vw,4.75rem)] leading-none tracking-tight text-accent">
              {hit.value}
            </p>
            <p className="mt-1 max-w-[26ch] text-[13.5px] leading-snug text-muted sm:ml-auto">
              {hit.caption}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-risk">Problema: {problem}</p>
        {why ? (
          <p className="mt-4 border-t border-line pt-4 text-base leading-relaxed text-muted">{why}</p>
        ) : null}
        {listing.risks[0] ? (
          <p className="mt-4 rounded-[10px] bg-bg px-3.5 py-3 text-sm leading-snug">
            <strong>O problema à vista:</strong> {listing.risks[0]}
          </p>
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
  const problem = listingProblem(listing);
  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={() => onOpen(listing.id)}
        className="pressable grid w-full grid-cols-[36px_minmax(0,1fr)] items-start gap-x-4 py-[22px] text-left sm:grid-cols-[36px_minmax(0,1fr)_auto]"
      >
        <span className="pt-1 font-display text-xl tabular-nums text-accent">
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex min-w-0 flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-subtle">
            {rumoKicker(card, goal)}
          </span>
          <span className="font-display text-[26px] leading-tight">{listing.title}</span>
          <span className="text-sm tabular-nums text-subtle">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </span>
          <span className="mt-1 block text-[13px] text-risk">Problema: {problem}</span>
        </span>
        <span className="col-start-2 mt-2 flex flex-col items-end gap-0.5 text-right sm:col-start-auto sm:mt-0">
          <span className="font-display text-[34px] leading-none tabular-nums text-accent">
            {hit.value}
          </span>
          <span className="text-[13px] whitespace-nowrap text-subtle">
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
    <div className="flex flex-col gap-4 rounded-[18px] border border-line bg-surface p-[22px]">
      <div className="flex items-baseline justify-between gap-3">
        <p className="eyebrow text-subtle">Onde estão</p>
        <p className="text-[13px] text-faint">{caption}</p>
      </div>
      {children}
    </div>
  );
}
