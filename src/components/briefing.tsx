import { useState } from "react";
import { GOAL_HINT, GOAL_LABEL, YEAR_OPTIONS, type Brief, type LifeGoal } from "@/lib/brief";
import { cn } from "@/lib/utils";

const GOALS: LifeGoal[] = ["renda", "patrimonio", "morar", "aposentar"];

export function Briefing({ onSubmit }: { onSubmit: (brief: Brief) => void }) {
  const [age, setAge] = useState(36);
  const [goal, setGoal] = useState<LifeGoal | null>(null);
  const [years, setYears] = useState(8);

  return (
    <main className="mx-auto max-w-xl px-4 pb-16 pt-8 md:pt-12">
      <p className="text-xs uppercase tracking-widest text-muted">Antes da mesa</p>
      <h1 className="mt-2 font-display text-4xl leading-none tracking-tight text-balance md:text-5xl">
        Para onde o farol aponta.
      </h1>
      <p className="mt-3 text-sm text-muted">
        Idade, o que a vida pede, em quantos anos. O Farol lê os sinais de João Pessoa e escreve
        por que estes — e não os outros.
      </p>

      <section className="mt-10">
        <p className="text-xs uppercase tracking-widest text-subtle">Idade</p>
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            className="pressable flex size-12 items-center justify-center rounded-xl bg-raised text-lg text-fg"
            onClick={() => setAge((a) => Math.max(18, a - 1))}
            aria-label="Diminuir idade"
          >
            −
          </button>
          <p className="min-w-20 text-center font-display text-6xl leading-none tabular-nums">
            {age}
          </p>
          <button
            type="button"
            className="pressable flex size-12 items-center justify-center rounded-xl bg-raised text-lg text-fg"
            onClick={() => setAge((a) => Math.min(78, a + 1))}
            aria-label="Aumentar idade"
          >
            +
          </button>
        </div>
      </section>

      <section className="mt-10">
        <p className="text-xs uppercase tracking-widest text-subtle">Objetivo de vida</p>
        <ul className="mt-3 grid gap-2">
          {GOALS.map((g) => (
            <li key={g}>
              <button
                type="button"
                onClick={() => setGoal(g)}
                className={cn(
                  "pressable w-full rounded-2xl px-4 py-4 text-left shadow-(--shadow-border) transition-[box-shadow] duration-150",
                  goal === g ? "bg-accent text-accent-fg" : "bg-surface text-fg hover:shadow-(--shadow-border-hover)",
                )}
              >
                <span className="font-display text-xl leading-snug">{GOAL_LABEL[g]}</span>
                <span
                  className={cn(
                    "mt-1 block text-sm",
                    goal === g ? "text-accent-fg/70" : "text-muted",
                  )}
                >
                  {GOAL_HINT[g]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <p className="text-xs uppercase tracking-widest text-subtle">Em quantos anos</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {YEAR_OPTIONS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYears(y)}
              className={cn(
                "pressable h-12 min-w-14 rounded-full px-4 text-sm font-medium",
                years === y ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg",
              )}
            >
              {y}
            </button>
          ))}
        </div>
      </section>

      <button
        type="button"
        disabled={!goal}
        onClick={() => goal && onSubmit({ age, goal, years })}
        className="pressable mt-10 flex h-12 w-full items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg disabled:opacity-40"
      >
        Ler o litoral
      </button>
    </main>
  );
}
