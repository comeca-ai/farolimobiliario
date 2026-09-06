import { CITY } from "@/data/market";
import { GOAL_HINT, GOAL_LABEL, type Brief, type LifeGoal } from "@/lib/brief";
import { brl } from "@/lib/format";
import { Mark } from "@/components/mark";

const GOALS: LifeGoal[] = ["renda", "patrimonio", "morar", "aposentar"];

const DEFAULTS: Record<LifeGoal, Pick<Brief, "age" | "years">> = {
  renda: { age: 34, years: 5 },
  patrimonio: { age: 42, years: 10 },
  morar: { age: 38, years: 8 },
  aposentar: { age: 54, years: 15 },
};

export function Briefing({ onSubmit }: { onSubmit: (brief: Brief) => void }) {
  return (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-10 md:pt-16">
      <Mark className="size-9 text-accent" />
      <p className="mt-6 text-xs uppercase tracking-widest text-accent">João Pessoa</p>
      <h1 className="mt-3 font-display text-6xl leading-none tracking-tight md:text-7xl">Farol</h1>
      <p className="mt-4 max-w-md font-display text-2xl leading-snug text-fg">
        Aponta o spread.
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        {brl.format(CITY.m2)} o metro da cidade. Abaixo disso — ou fora do portal — a luz acende.
        Não é Zap. Não é corretor. É o rumo.
      </p>

      <p className="mt-10 text-xs uppercase tracking-widest text-subtle">O que a vida pede</p>
      <ul className="mt-3 grid gap-2">
        {GOALS.map((g) => (
          <li key={g}>
            <button
              type="button"
              onClick={() => onSubmit({ goal: g, ...DEFAULTS[g] })}
              className="pressable w-full rounded-2xl bg-surface px-4 py-5 text-left shadow-(--shadow-border) transition-[box-shadow] duration-150 hover:shadow-(--shadow-border-hover)"
            >
              <span className="font-display text-2xl leading-snug">{GOAL_LABEL[g]}</span>
              <span className="mt-1 block text-sm text-muted">{GOAL_HINT[g]}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
