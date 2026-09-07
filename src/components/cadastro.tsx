import { useEffect, useRef, useState } from "react";
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
  const emailRef = useRef<HTMLInputElement>(null);
  const waRef = useRef<HTMLInputElement>(null);

  const emailOk = validEmail(email);
  const waOk = validBrMobile(whatsapp);
  const ready = emailOk && waOk;
  const emailEmpty = email.trim().length === 0;
  const waEmpty = whatsapp.replace(/\D/g, "").length === 0;

  useEffect(() => {
    if (!tried) return;
    if (!emailOk) {
      emailRef.current?.focus();
      return;
    }
    if (!waOk) waRef.current?.focus();
  }, [tried, emailOk, waOk]);

  return (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-10 md:pt-16">
      <p className="text-xs uppercase tracking-widest text-accent">Cadastro</p>
      <h1 className="mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl">
        Seu mapa começa aqui.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        E-mail para o link. WhatsApp obrigatório para mandar o dossiê onde você já responde. Sem
        senha, sem corretagem, sem cartão.
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
            ref={emailRef}
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
          <span
            id="email-hint"
            className="mt-1.5 block min-h-[2.5rem] text-[13px] leading-relaxed"
            role="status"
          >
            {tried && !emailOk ? (
              <span className="font-medium text-risk">
                Precisamos de um e-mail válido — é por onde vai o link.
              </span>
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
              ref={waRef}
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              value={whatsapp}
              onChange={(e) => setWhatsapp(maskBrMobile(e.target.value))}
              placeholder="(83) 9 0000-0000"
              aria-invalid={tried && !waOk}
              aria-describedby="wa-trust wa-hint"
              className="h-full min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-muted/70"
            />
          </span>
          <span id="wa-trust" className="mt-1.5 block text-[13px] leading-relaxed text-muted">
            Só para o resumo do dossiê. Sem lista, sem blast — se um dia houver política pública, o
            link aparece aqui.
          </span>
          <span
            id="wa-hint"
            className="mt-1 block min-h-[2.5rem] text-[13px] leading-relaxed"
            role="status"
          >
            {tried && !waOk ? (
              <span className="font-medium text-risk">
                Celular com DDD e o 9. Ex.: (83) 98888-0000.
              </span>
            ) : waEmpty ? (
              <span className="text-muted">O número em que você já lê mensagens.</span>
            ) : null}
          </span>
        </label>

        <button
          type="submit"
          className="pressable mt-2 h-14 rounded-full bg-accent text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Continuar para a caixinha
        </button>
      </form>
      <p className="mt-4 max-w-md text-xs leading-relaxed text-subtle">
        Você ainda vai validar o rumo antes de ver os imóveis. Nada de promessa automática de
        retorno.
      </p>

      <button type="button" onClick={onBack} className="mt-6 text-sm text-muted">
        Voltar
      </button>
    </main>
  );
}
