import type { ReactNode } from "react";
import {
  GOAL_CHIP,
  heroKicker,
  punchForGoal,
  rumoKickerFor,
  rumoNote,
  type LifeGoal,
} from "@/lib/brief";
import { compactBrl } from "@/lib/format";
import { punch, type Scorecard } from "@/lib/score";
import { cn } from "@/lib/utils";

function hitOf(card: Scorecard, goal?: LifeGoal) {
  return goal ? punchForGoal(card, goal) : punch(card);
}

export function rumoKicker(card: Scorecard, goal?: LifeGoal) {
  if (goal) return rumoKickerFor(card, goal);
  if (card.listing.sources.includes("leilao")) return "Leilão";
  if (card.listing.portalCount === 0) return "Fora dos portais";
  return "Sinal";
}

export function RumoSwitch({
  value,
  onChange,
}: {
  value: LifeGoal;
  onChange: (goal: LifeGoal) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {(Object.keys(GOAL_CHIP) as LifeGoal[]).map((g) => (
        <button
          key={g}
          type="button"
          onClick={() => onChange(g)}
          className={cn(
            "pressable h-9 min-h-9 rounded-full px-3.5 text-sm",
            g === value ? "bg-raised text-fg" : "text-subtle hover:bg-raised/70",
          )}
        >
          {GOAL_CHIP[g]}
        </button>
      ))}
    </div>
  );
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
    <article className="rounded-[14px] border border-line bg-surface px-5 py-6 sm:px-7 sm:py-[26px]">
      <button type="button" onClick={() => onOpen(listing.id)} className="pressable w-full text-left">
        <p className="eyebrow text-accent">{kicker ?? (goal ? heroKicker(card, goal) : rumoKicker(card))}</p>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-[clamp(1.35rem,2.4vw,1.65rem)] leading-snug">
              {listing.title}
            </h2>
            <p className="mt-2 text-sm tabular-nums text-muted">
              {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
            </p>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="metric text-[clamp(2.4rem,5vw,2.75rem)] leading-none">{hit.value}</p>
            <p className="mt-1.5 max-w-[26ch] text-xs leading-snug text-subtle sm:ml-auto">
              {hit.caption}
            </p>
          </div>
        </div>
        {why ? (
          <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted">{why}</p>
        ) : null}
        {listing.risks[0] ? (
          <p className="mt-4 text-sm leading-snug text-muted">
            <strong className="font-semibold text-fg">O problema à vista.</strong> {listing.risks[0]}
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
  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={() => onOpen(listing.id)}
        className="pressable grid w-full grid-cols-[26px_minmax(0,1fr)] items-start gap-x-4 rounded-[10px] py-5 text-left hover:bg-surface sm:grid-cols-[26px_minmax(0,1fr)_auto] sm:px-1"
      >
        <span className="pt-0.5 font-display text-[13px] tabular-nums text-faint">
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex min-w-0 flex-col gap-1.5">
          <span className="eyebrow text-subtle">{rumoKicker(card, goal)}</span>
          <span className="font-display text-[clamp(1.05rem,2vw,1.25rem)] leading-snug">
            {listing.title}
          </span>
          <span className="text-[13.5px] tabular-nums text-subtle">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </span>
        </span>
        <span className="col-start-2 mt-2 flex flex-col items-start gap-0.5 sm:col-start-auto sm:mt-0 sm:items-end sm:text-right">
          <span className="metric text-[clamp(1.5rem,3vw,1.65rem)] leading-none">{hit.value}</span>
          <span className="text-[11.5px] text-faint">
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
    <div className="flex flex-col gap-3.5 rounded-[14px] border border-line bg-surface p-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="eyebrow text-subtle">Onde estão</p>
        <p className="text-xs text-faint">{caption}</p>
      </div>
      {children}
    </div>
  );
}
