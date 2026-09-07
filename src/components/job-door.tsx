import { useRef, useState } from "react";
import {
  HOME_GOALS,
  HOME_HINT,
  HOME_LABEL,
  jobLead,
  jobSubmitError,
  type HomeGoal,
} from "@/lib/job";
import { maskBrMobile, type Lead } from "@/lib/lead";
import { cn } from "@/lib/utils";

export function JobDoor({
  existingLead,
  onGo,
}: {
  existingLead?: Lead | null;
  onGo: (lead: Lead, goal: HomeGoal) => void;
}) {
  const skipCadastro = Boolean(existingLead);
  const [goal, setGoal] = useState<HomeGoal | null>(null);
  const [email, setEmail] = useState(existingLead?.email ?? "");
  const [whatsapp, setWhatsapp] = useState(existingLead?.whatsapp ?? "");
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const waRef = useRef<HTMLInputElement>(null);

  return (
    <main className="mx-auto max-w-xl px-4 pb-16 pt-6 md:pt-8">
      <p className="text-[11px] uppercase tracking-[0.14em] text-accent">João Pessoa · negócio</p>
      <h1 className="mt-2 font-display text-[1.85rem] font-normal leading-tight tracking-tight md:text-[32px]">
        Onde está a oportunidade
      </h1>
      <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-muted">
        Flat para Airbnb ou abaixo do preço — com o problema à vista.
      </p>

      <form
        className="mt-5 flex flex-col gap-4"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const message = jobSubmitError({ goal, email, whatsapp, skipCadastro });
          setError(message);
          if (message) {
            if (!goal) return;
            if (!skipCadastro && message.includes("e-mail")) emailRef.current?.focus();
            else if (message.includes("WhatsApp")) waRef.current?.focus();
            return;
          }
          if (!goal) return;
          onGo(existingLead ?? jobLead(email, whatsapp), goal);
        }}
      >
        <fieldset>
          <legend className="sr-only">O job</legend>
          <div className="grid gap-2">
            {HOME_GOALS.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setGoal(g);
                  setError(null);
                }}
                className={cn(
                  "pressable rounded-2xl px-4 py-3.5 text-left shadow-(--shadow-border)",
                  goal === g ? "bg-surface shadow-(--shadow-border-hover)" : "bg-raised/70",
                )}
              >
                <span className="block font-display text-xl leading-snug md:text-2xl">{HOME_LABEL[g]}</span>
                <span className="mt-0.5 block text-sm text-muted">{HOME_HINT[g]}</span>
              </button>
            ))}
          </div>
        </fieldset>

        {skipCadastro ? (
          <p className="text-[13px] text-muted">Já te vemos em {existingLead?.email}. Só falta o rumo.</p>
        ) : (
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted">E-mail</span>
            <input
              ref={emailRef}
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              aria-invalid={Boolean(error?.includes("e-mail"))}
              className="mt-2 h-12 w-full rounded-2xl bg-surface px-4 text-base text-fg outline-none shadow-(--shadow-border) placeholder:text-muted/70"
            />
          </label>
        )}

        {error ? (
          <p role="alert" className="font-medium text-risk">
            {error}
          </p>
        ) : (
          <p className="text-[13px] text-subtle">Sinais modelados. Não é oferta nem estoque real.</p>
        )}

        <button
          type="submit"
          className="pressable h-12 rounded-full bg-accent text-sm font-medium text-accent-fg hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Ver 3 oportunidades
        </button>

        {skipCadastro ? null : (
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted">
              WhatsApp <span className="text-subtle">opcional</span>
            </span>
            <span className="mt-2 flex h-12 items-center rounded-2xl bg-surface px-4 shadow-(--shadow-border)">
              <span className="pr-3 font-medium text-muted">+55</span>
              <input
                ref={waRef}
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                value={whatsapp}
                onChange={(e) => setWhatsapp(maskBrMobile(e.target.value))}
                placeholder="(83) 9 0000-0000"
                aria-invalid={Boolean(error?.includes("WhatsApp"))}
                className="h-full min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-muted/70"
              />
            </span>
          </label>
        )}
      </form>
    </main>
  );
}
