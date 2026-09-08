import { useState } from "react";
import { Mark } from "@/components/mark";
import { maskBrMobile, validBrMobile, validEmail, type Lead } from "@/lib/lead";
import { useDesk } from "@/lib/store";

export function Cadastro({
  onSubmit,
  onBack,
}: {
  onSubmit: (lead: Lead) => void;
  onBack: () => void;
}) {
  const draft = useDesk((s) => s.draft);
  const setDraft = useDesk((s) => s.setDraft);
  const [emailErr, setEmailErr] = useState("");
  const [whatsErr, setWhatsErr] = useState("");

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-[22px]">
        <button type="button" onClick={onBack} className="flex items-center gap-2.5 text-fg">
          <Mark className="h-[26px] w-4" />
          <span className="flex items-baseline gap-2.5">
            <span className="font-display text-[28px] leading-none tracking-tight">Farol</span>
            <span className="text-[13px] text-subtle">João Pessoa</span>
          </span>
        </button>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <button type="button" onClick={onBack} className="text-fg">
            Rumo
          </button>
          <span className="ink rounded-full px-4 py-2.5">Entrar</span>
        </nav>
      </header>

      <main className="mx-auto grid w-full max-w-[1100px] flex-1 items-start gap-14 px-6 pb-16 pt-10 md:grid-cols-2">
        <section className="flex max-w-[480px] flex-col gap-6">
          <p className="eyebrow text-accent">Entrar · sem senha</p>
          <h1 className="font-display text-[clamp(2.75rem,5.6vw,4.75rem)] leading-[0.98] tracking-tight">
            Seu mapa começa aqui.
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            E-mail para o link do dossiê. WhatsApp para o resumo — onde você já responde. Sem senha,
            sem corretagem, sem cartão.
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              const nextEmail = validEmail(draft.email)
                ? ""
                : "Confere o e-mail — é por ele que o link chega.";
              const nextWhats = validBrMobile(draft.whatsapp)
                ? ""
                : "Precisa do número com DDD — é onde o resumo chega.";
              setEmailErr(nextEmail);
              setWhatsErr(nextWhats);
              if (nextEmail || nextWhats) return;
              onSubmit({ email: draft.email.trim().toLowerCase(), whatsapp: draft.whatsapp });
            }}
          >
            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                E-mail
              </span>
              <input
                type="email"
                autoComplete="email"
                value={draft.email}
                onChange={(e) => {
                  setDraft({ email: e.target.value });
                  setEmailErr("");
                }}
                placeholder="voce@email.com"
                className="h-[52px] w-full rounded-xl border border-line bg-paper px-4 text-[17px] outline-none focus:border-fg"
              />
              {emailErr ? <span className="text-sm font-medium text-accent">{emailErr}</span> : null}
              <span className="text-sm text-subtle">Onde você abre o link do dossiê.</span>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                WhatsApp{" "}
                <span className="font-normal normal-case tracking-normal text-faint">
                  obrigatório
                </span>
              </span>
              <span className="flex h-[52px] overflow-hidden rounded-xl border border-line bg-paper focus-within:border-fg">
                <span className="flex items-center border-r border-line px-3.5 text-base text-subtle">
                  +55
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={draft.whatsapp}
                  onChange={(e) => {
                    setDraft({ whatsapp: maskBrMobile(e.target.value) });
                    setWhatsErr("");
                  }}
                  placeholder="83 9 0000-0000"
                  className="min-w-0 flex-1 bg-transparent px-3.5 text-[17px] outline-none"
                />
              </span>
              {whatsErr ? <span className="text-sm font-medium text-accent">{whatsErr}</span> : null}
              <span className="text-sm leading-snug text-subtle">
                Só o resumo do dossiê, no número em que você já lê mensagens. Sem lista, sem blast.
              </span>
            </label>

            <button
              type="submit"
              className="ink pressable flex h-14 items-center justify-center gap-2.5 rounded-xl text-[17px] font-semibold"
            >
              Continuar para a caixinha <span aria-hidden>→</span>
            </button>
            <p className="text-[13px] leading-relaxed text-subtle">
              Você ainda valida o rumo antes de ver os imóveis. Nada de promessa automática de
              retorno.
            </p>
          </form>
        </section>

        <aside className="relative flex flex-col gap-7 self-stretch overflow-hidden rounded-[20px] bg-fg px-[30px] py-8 text-bg">
          <div aria-hidden className="beam-login pointer-events-none absolute inset-0" />
          <p className="eyebrow relative text-gold">O que acontece depois</p>
          <ol className="relative flex list-none flex-col gap-[22px] p-0">
            {[
              [
                "01",
                "Link no e-mail",
                "Abre o dossiê do seu rumo em João Pessoa. Sem senha: o link é a chave.",
              ],
              [
                "02",
                "Resumo no WhatsApp",
                "A versão curta, onde você já responde. Uma mensagem por dossiê — nunca lista.",
              ],
              [
                "03",
                "Rumo, depois imóveis",
                "Você valida o rumo antes de ver qualquer imóvel. Bairros e arquitetura vêm em seguida.",
              ],
            ].map(([n, t, d]) => (
              <li
                key={n}
                className="grid grid-cols-[44px_minmax(0,1fr)] gap-3.5 border-t border-bg/20 pt-[18px]"
              >
                <span className="font-display text-[30px] leading-none tabular-nums text-gold">
                  {n}
                </span>
                <span className="flex flex-col gap-1.5">
                  <strong className="text-lg font-semibold">{t}</strong>
                  <span className="text-[15px] leading-relaxed text-sand">{d}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="relative mt-auto flex flex-wrap gap-2">
            {["Sem senha", "Sem corretagem", "Sem cartão"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-bg/35 px-3 py-2 text-[13px] font-semibold"
              >
                {x}
              </span>
            ))}
          </div>
        </aside>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-6 py-6 text-[13px] leading-relaxed text-subtle">
          <span>
            <span className="font-display text-lg text-fg">Farol</span> · João Pessoa
          </span>
          <span className="max-w-[60ch]">
            Sinais modelados a partir de comps de setembro de 2026. Não é oferta, estoque real nem
            recomendação de investimento.
          </span>
        </div>
      </footer>
    </div>
  );
}
