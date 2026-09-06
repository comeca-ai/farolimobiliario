import { GOAL_HINT, GOAL_LABEL, type Brief, type LifeGoal } from "@/lib/brief";
import { CITY } from "@/data/market";

const GOALS: LifeGoal[] = ["renda", "patrimonio", "morar", "aposentar"];

const DEFAULTS: Record<LifeGoal, Pick<Brief, "age" | "years">> = {
  renda: { age: 34, years: 5 },
  patrimonio: { age: 42, years: 10 },
  morar: { age: 38, years: 8 },
  aposentar: { age: 54, years: 15 },
};

export function Briefing({ onSubmit }: { onSubmit: (brief: Brief) => void }) {
  return (
    <main className="mx-auto max-w-xl px-4 pb-16 pt-8 md:pt-12">
      <p className="text-xs uppercase tracking-widest text-muted">
        João Pessoa · base {CITY.refresh}
      </p>
      <h1 className="mt-2 font-display text-4xl leading-none tracking-tight text-balance md:text-5xl">
        O que a vida pede.
      </h1>
      <p className="mt-3 text-sm text-muted">
        Escolhe o rumo. O Farol lê os sinais da orla e escreve por que estes imóveis — e não os
        outros.
      </p>

      <ul className="mt-10 grid gap-2">
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
