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
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Objetivos({ onAgree }: { onAgree: (brief: Brief) => void }) {
  const draft = useDesk((s) => s.draft);
  const [text, setText] = useState("");
  const [picked, setPicked] = useState<LifeGoal | null>(null);

  const rumos = useMemo(() => {
    const list = proposeRumos(text);
    if (draft.job === "airbnb") {
      return [...list].sort((a, b) =>
        a.goal === "renda" ? -1 : b.goal === "renda" ? 1 : b.score - a.score,
      );
    }
    if (draft.job === "abaixo") {
      return [...list].sort((a, b) =>
        a.goal === "patrimonio" ? -1 : b.goal === "patrimonio" ? 1 : b.score - a.score,
      );
    }
    return list;
  }, [text, draft.job]);
  const top = rumos[0];
  const chosen = picked ?? top?.goal ?? null;
  const typed = text.trim().length > 0;
  const ready = text.trim().length >= 12;

  const agree = () => {
    if (!chosen || !ready) return;
    onAgree({
      goal: chosen,
      ...GOAL_DEFAULTS[chosen],
      wish: text.trim(),
      places: parsePlaces(text),
    });
  };

  return (
    <main className="mx-auto grid w-full max-w-[1100px] items-start gap-14 px-6 pb-20 pt-10 md:grid-cols-2">
      <section className="flex max-w-[560px] flex-col gap-6">
        <p className="eyebrow text-accent">O que a vida pede</p>
        <h1 className="font-display text-[clamp(2.6rem,5.4vw,4.5rem)] leading-[0.98] tracking-tight">
          Diga o que esse imóvel precisa fazer por você.
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          Renda, patrimônio, moradia ou aposentadoria. O Farol lê o rumo, separa os encaixes mais
          fortes e deixa mais sinais no mapa.
        </p>
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
            Seu rumo, nas suas palavras
          </span>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setPicked(null);
            }}
            rows={5}
            placeholder="Quero um flat em Tambaú que pague a parcela no Airbnb… ou uma casa de rua para a família…"
            className="min-h-[170px] w-full resize-vertical rounded-2xl border border-line bg-paper px-5 py-[18px] text-lg leading-relaxed outline-none focus:border-fg"
          />
        </label>
        {ready ? (
          <button
            type="button"
            onClick={agree}
            className="ink pressable flex h-14 items-center justify-center gap-2.5 rounded-xl text-[17px] font-semibold"
          >
            Ler meu rumo <span aria-hidden>→</span>
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="flex h-14 items-center justify-center rounded-xl border border-dashed border-line bg-transparent text-[17px] font-semibold text-faint"
          >
            Escreva o rumo para eu ler
          </button>
        )}
        <p className="text-[13px] leading-relaxed text-subtle">
          Você valida o rumo antes de ver qualquer imóvel. Nada de promessa automática de retorno.
        </p>
      </section>

      {typed && chosen ? (
        <section aria-live="polite" className="flex flex-col gap-3.5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="eyebrow text-subtle">O Farol leu</p>
            <span className="text-[13px] text-faint">toque para corrigir</span>
          </div>
          {rumos.map((r, i) => (
            <button
              key={r.goal}
              type="button"
              onClick={() => setPicked(r.goal)}
              className={cn(
                "relative flex w-full flex-col gap-1.5 rounded-[14px] border bg-surface px-5 py-[18px] text-left",
                r.goal === chosen ? "border-fg" : "border-line hover:border-fg",
              )}
            >
              {r.goal === chosen ? (
                <span className="pointer-events-none absolute inset-[-1px] rounded-[14px] border-2 border-fg" />
              ) : null}
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-display text-[28px] leading-tight">{GOAL_LABEL[r.goal]}</span>
                {i === 0 ? (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                    primeiro
                  </span>
                ) : null}
              </span>
              <span className="text-[15px] leading-snug text-muted">{r.why}</span>
              <span className="text-[13.5px] leading-snug text-faint">{GOAL_HINT[r.goal]}</span>
            </button>
          ))}
        </section>
      ) : null}
    </main>
  );
}
