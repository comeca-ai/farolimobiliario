import { useState } from "react";
import { maskBrMobile, validBrMobile, validEmail, type Lead } from "@/lib/lead";

export function Cadastro({
  onSubmit,
  onBack,
}: {
  onSubmit: (lead: Lead) => void;
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tried, setTried] = useState(false);

  const emailOk = validEmail(email);
  const waOk = validBrMobile(whatsapp);
  const ready = emailOk && waOk;
  const emailEmpty = email.trim().length === 0;
  const waEmpty = whatsapp.replace(/\D/g, "").length === 0;

  return (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-10 md:pt-16">
      <p className="text-xs uppercase tracking-widest text-accent">Cadastro</p>
      <h1 className="mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl">
        Entra. Depois a vida pede.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        E-mail para o link. WhatsApp obrigatório — o dossiê chega onde você já lê. Sem senha.
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">
        Destino: link no e-mail · resumo no WhatsApp.
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setTried(true);
          if (!ready) return;
          onSubmit({ email: email.trim().toLowerCase(), whatsapp });
        }}
      >
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted">E-mail</span>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            aria-invalid={tried && !emailOk}
            aria-describedby="email-hint"
            className="mt-2 h-14 w-full rounded-2xl bg-surface px-4 text-base text-fg outline-none shadow-(--shadow-border) placeholder:text-muted/70 focus:shadow-(--shadow-border-hover)"
          />
          <span id="email-hint" className="mt-1 block text-[13px] leading-relaxed" role="status">
            {tried && !emailOk ? (
              <span className="text-risk">Precisamos de um e-mail válido — é por onde vai o link.</span>
            ) : emailEmpty ? (
              <span className="text-muted">Onde você abre o link do dossiê.</span>
            ) : null}
          </span>
        </label>

        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted">
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
              aria-invalid={tried && !waOk}
              aria-describedby="wa-hint wa-trust"
              className="h-full min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-muted/70"
            />
          </span>
          <span id="wa-trust" className="mt-1.5 block text-[13px] leading-relaxed text-muted">
            Só para o resumo do dossiê. Sem lista, sem blast — se um dia houver política pública,
            o link aparece aqui.
          </span>
          <span id="wa-hint" className="mt-1 block text-[13px] leading-relaxed" role="status">
            {tried && !waOk ? (
              <span className="text-risk">Celular com DDD e o 9. Ex.: (83) 98888-0000.</span>
            ) : waEmpty ? (
              <span className="text-muted">O número em que você já lê mensagens.</span>
            ) : null}
          </span>
        </label>

        <button
          type="submit"
          className="pressable mt-2 h-14 rounded-full bg-accent text-sm font-medium text-accent-fg"
        >
          Entrar · ver o spread
        </button>
      </form>

      <button type="button" onClick={onBack} className="mt-6 text-sm text-muted">
        Voltar
      </button>
    </main>
  );
}
