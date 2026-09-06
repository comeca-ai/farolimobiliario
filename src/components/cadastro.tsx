import { useState } from "react";
import { GOAL_LABEL, type Brief } from "@/lib/brief";
import { maskBrMobile, validBrMobile, validEmail, type Lead } from "@/lib/lead";

export function Cadastro({
  brief,
  onSubmit,
  onBack,
}: {
  brief: Brief;
  onSubmit: (lead: Lead) => void;
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tried, setTried] = useState(false);

  const emailOk = validEmail(email);
  const waOk = validBrMobile(whatsapp);
  const ready = emailOk && waOk;

  return (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-10 md:pt-16">
      <p className="text-xs uppercase tracking-widest text-accent">Pré-cadastro · sketch</p>
      <p className="mt-3 text-xs uppercase tracking-widest text-subtle">{GOAL_LABEL[brief.goal]}</p>
      <h1 className="mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl">
        O Farol manda no WhatsApp.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        E-mail para o link. WhatsApp para o dossiê chegar onde você já lê. Os dois são
        obrigatórios. Sem senha.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setTried(true);
          if (!ready) return;
          onSubmit({ email: email.trim().toLowerCase(), whatsapp });
        }}
      >
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-subtle">E-mail</span>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            className="mt-2 h-14 w-full rounded-2xl bg-surface px-4 text-base text-fg outline-none shadow-(--shadow-border) placeholder:text-subtle focus:shadow-(--shadow-border-hover)"
          />
          {tried && !emailOk ? (
            <span className="mt-1 block text-xs text-risk">E-mail válido, para o link.</span>
          ) : null}
        </label>

        <label className="block">
          <span className="text-xs uppercase tracking-widest text-subtle">
            WhatsApp <span className="text-accent">obrigatório</span>
          </span>
          <span className="mt-2 flex h-14 items-center rounded-2xl bg-surface px-4 shadow-(--shadow-border) focus-within:shadow-(--shadow-border-hover)">
            <span className="pr-3 font-medium text-muted">+55</span>
            <input
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              value={whatsapp}
              onChange={(e) => setWhatsapp(maskBrMobile(e.target.value))}
              placeholder="(83) 9 0000-0000"
              className="h-full min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-subtle"
            />
          </span>
          {tried && !waOk ? (
            <span className="mt-1 block text-xs text-risk">Celular com DDD e o 9. Ex.: (83) 98888-0000.</span>
          ) : (
            <span className="mt-1 block text-xs text-subtle">O dossiê e o rito de segunda saem por aqui.</span>
          )}
        </label>

        <button
          type="submit"
          className="pressable mt-2 h-14 rounded-full bg-accent text-sm font-medium text-accent-fg"
        >
          Mandar o Farol
        </button>
      </form>

      <button type="button" onClick={onBack} className="mt-6 text-sm text-muted">
        Trocar o rumo
      </button>
    </main>
  );
}
