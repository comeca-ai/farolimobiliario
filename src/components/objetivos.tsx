import { useMemo, useState } from "react";
import {
  GOAL_DEFAULTS,
  GOAL_HINT,
  GOAL_LABEL,
  parsePlaces,
  proposeRumos,
  type Brief,
  type LifeGoal,
} from "@/lib/brief";
import { cn } from "@/lib/utils";

export function Objetivos({ onAgree }: { onAgree: (brief: Brief) => void }) {
  const [text, setText] = useState("");
  const [asked, setAsked] = useState(false);
  const [picked, setPicked] = useState<LifeGoal | null>(null);

  const rumos = useMemo(() => (asked ? proposeRumos(text) : []), [asked, text]);
  const top = rumos[0];
  const chosen = picked ?? top?.goal ?? null;

  return (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-10 md:pt-16">
      <p className="text-xs uppercase tracking-widest text-accent">O que a vida pede</p>
      <h1 className="mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl">
        Diga o que esse imóvel precisa fazer por você.
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Pode ser renda, patrimônio, moradia ou aposentadoria. Eu separo os encaixes mais fortes e
        deixo mais sinais no mapa.
      </p>

      <form
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (text.trim().length < 12) return;
          setAsked(true);
          setPicked(null);
        }}
      >
        <label className="block">
          <span className="sr-only">Objetivo</span>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (asked) setAsked(false);
            }}
            rows={5}
            placeholder="Quero um flat em Tambaú que pague a parcela no Airbnb… ou uma casa da rua para a família…"
            className="w-full resize-none rounded-2xl bg-surface px-4 py-4 text-base leading-relaxed text-fg outline-none shadow-(--shadow-border) placeholder:text-subtle focus:shadow-(--shadow-border-hover)"
          />
        </label>
        {!asked ? (
          <button
            type="submit"
            disabled={text.trim().length < 12}
            className="pressable mt-4 h-14 w-full rounded-full bg-accent text-sm font-medium text-accent-fg disabled:opacity-40"
          >
            Ler meu rumo
          </button>
        ) : null}
      </form>

      {asked && chosen ? (
        <div className="mt-10">
          <p className="text-xs uppercase tracking-widest text-subtle">O Farol leu</p>
          <ul className="mt-3 grid gap-2">
            {rumos.map((r, i) => (
              <li key={r.goal}>
                <button
                  type="button"
                  onClick={() => setPicked(r.goal)}
                  className={cn(
                    "pressable w-full rounded-2xl px-4 py-5 text-left shadow-(--shadow-border) transition-[box-shadow] duration-150",
                    r.goal === chosen
                      ? "bg-surface shadow-(--shadow-border-hover)"
                      : "bg-raised/60",
                  )}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-2xl leading-snug">{GOAL_LABEL[r.goal]}</span>
                    {i === 0 ? (
                      <span className="text-[10px] uppercase tracking-widest text-accent">primeiro</span>
                    ) : null}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{r.why}</span>
                  <span className="mt-1 block text-xs text-subtle">{GOAL_HINT[r.goal]}</span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() =>
              onAgree({
                goal: chosen,
                ...GOAL_DEFAULTS[chosen],
                wish: text.trim(),
                places: parsePlaces(text),
              })
            }
            className="pressable mt-6 h-14 w-full rounded-full bg-accent text-sm font-medium text-accent-fg"
          >
            Concordo · ver meus 3 melhores imóveis
          </button>
          <p className="mt-3 text-xs leading-relaxed text-subtle">
            Depois você pode abrir mais imóveis aderentes sem sair do funil.
          </p>
        </div>
      ) : null}
    </main>
  );
}
