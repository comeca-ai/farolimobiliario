import { useState, type FormEvent } from "react";
import { maskBrMobile, validBrMobile, validEmail } from "@/lib/lead";
import { useDesk, type JobHint } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Landing({ onEnter }: { onEnter: () => void }) {
  const draft = useDesk((s) => s.draft);
  const setDraft = useDesk((s) => s.setDraft);
  const setLead = useDesk((s) => s.setLead);
  const [error, setError] = useState("");
  const job = draft.job;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!validEmail(draft.email)) {
      setError("Confere o e-mail — é por ele que os 3 sinais chegam.");
      return;
    }
    if (draft.whatsapp && !validBrMobile(draft.whatsapp)) {
      setError("WhatsApp com DDD e o 9. Ex.: 83 9 8888-0000.");
      return;
    }
    if (validBrMobile(draft.whatsapp)) {
      setLead({ email: draft.email.trim().toLowerCase(), whatsapp: draft.whatsapp });
      return;
    }
    onEnter();
  };

  return (
    <div>
      <header className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-[22px]">
        <a href="#topo" className="flex items-baseline gap-2.5 text-fg">
          <span className="font-display text-[28px] leading-none tracking-tight">Farol</span>
          <span className="text-[13px] text-subtle">João Pessoa</span>
        </a>
        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium">
          <a href="#job" className="text-fg">
            O job
          </a>
          <a href="#metodo" className="text-fg">
            Método
          </a>
          <button type="button" onClick={onEnter} className="text-fg">
            Entrar
          </button>
          <a href="#form" className="ink inline-flex h-10 items-center rounded-full px-4 text-sm font-medium">
            Ver 3 oportunidades
          </a>
        </nav>
      </header>

      <section
        id="topo"
        className="mx-auto grid max-w-[1200px] items-start gap-12 px-6 pb-16 pt-10 md:grid-cols-2"
      >
        <div className="flex max-w-xl flex-col gap-7">
          <p className="eyebrow text-accent">João Pessoa · sinais modelados · comps set 2026</p>
          <h1 className="font-display text-[clamp(2.85rem,6.4vw,5.75rem)] leading-[0.96] tracking-tight">
            Onde está a <em className="italic text-accent">oportunidade</em> em João Pessoa.
          </h1>
          <p className="max-w-[34ch] text-xl leading-snug text-muted">
            Flat para Airbnb ou imóvel abaixo do preço — com o spread calculado contra o m² do bairro
            e o problema à vista. Você recebe 3 oportunidades. Sem corretor no meio.
          </p>

          <form
            id="form"
            onSubmit={submit}
            className="flex max-w-[560px] flex-col gap-[18px] rounded-2xl border border-line bg-surface p-6"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">O job</p>
              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                <JobPick
                  active={job === "airbnb"}
                  title="Flat → Airbnb"
                  hint="Caixa de temporada. O que fecha a conta da diária."
                  onClick={() => setDraft({ job: "airbnb" })}
                />
                <JobPick
                  active={job === "abaixo"}
                  title="Abaixo do preço"
                  hint="Spread vs m² do bairro. O problema fica visível."
                  onClick={() => setDraft({ job: "abaixo" })}
                />
              </div>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  E-mail
                </span>
                <input
                  type="email"
                  autoComplete="email"
                  value={draft.email}
                  onChange={(e) => {
                    setDraft({ email: e.target.value });
                    setError("");
                  }}
                  placeholder="voce@email.com"
                  className="h-12 rounded-[10px] border border-line bg-paper px-3.5 text-base text-fg outline-none focus:border-fg"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  WhatsApp{" "}
                  <span className="font-normal normal-case tracking-normal text-faint">opcional</span>
                </span>
                <span className="flex h-12 overflow-hidden rounded-[10px] border border-line bg-paper focus-within:border-fg">
                  <span className="flex items-center border-r border-line px-3 text-[15px] text-subtle">
                    +55
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={draft.whatsapp}
                    onChange={(e) => setDraft({ whatsapp: maskBrMobile(e.target.value) })}
                    placeholder="83 9 0000-0000"
                    className="min-w-0 flex-1 bg-transparent px-3 text-base text-fg outline-none"
                  />
                </span>
              </label>
            </div>
            {error ? <p className="text-sm font-medium text-accent">{error}</p> : null}
            <button
              type="submit"
              className="ink pressable flex h-[54px] items-center justify-center gap-2.5 rounded-xl text-[17px] font-semibold"
            >
              Ver 3 oportunidades <span aria-hidden>→</span>
            </button>
            <p className="text-[13px] leading-relaxed text-subtle">
              Sinais modelados. Não é oferta nem estoque real. Inventário recarregado em toda visita ·
              comps setembro 2026.
            </p>
          </form>
        </div>

        <Preview job={job} />
      </section>

      <section id="job" className="border-t border-line">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-[72px] md:grid-cols-3">
          <div>
            <p className="eyebrow text-accent">O job</p>
            <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-none tracking-tight">
              Você escolhe o que quer que o imóvel faça.
            </h2>
            <p className="mt-3.5 max-w-[40ch] text-[17px] leading-relaxed text-muted">
              Dois jobs, duas contas. O Farol só aponta o que fecha a conta do job que você escolheu.
            </p>
          </div>
          <div className="border-t-2 border-fg pt-[18px]">
            <p className="text-[13px] font-semibold tabular-nums text-accent">01</p>
            <h3 className="mt-2.5 font-display text-[30px] leading-tight">Flat → Airbnb</h3>
            <p className="mt-2.5 text-base leading-relaxed text-muted">
              Diária e ocupação de temporada modeladas por bairro e mês. Menos condomínio, taxa da
              plataforma e limpeza. O que sobra é o caixa — e é ele que fecha ou não a conta da diária.
            </p>
          </div>
          <div className="border-t-2 border-fg pt-[18px]">
            <p className="text-[13px] font-semibold tabular-nums text-accent">02</p>
            <h3 className="mt-2.5 font-display text-[30px] leading-tight">Abaixo do preço</h3>
            <p className="mt-2.5 text-base leading-relaxed text-muted">
              Preço pedido contra o m² do bairro na mesma faixa de área. O spread aparece em
              porcentagem — e o motivo de estar barato aparece junto. Sem surpresa na visita.
            </p>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted sm:max-w-lg">
            <li>• 3 melhores encaixes primeiro, depois mais imóveis no mapa da cidade.</li>
            <li>• Inventário recarregado em toda visita; comps públicos seguem visíveis.</li>
            <li>• Copy honesta: sem promessa de ganho, com risco e contexto de bairro.</li>
          </ul>
        </div>
      </section>

      <section id="metodo" className="bg-fg text-bg">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Método</p>
            <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-none tracking-tight">
              Como o Farol lê João Pessoa.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                "1 · Comps do bairro",
                "Preço por m² de anúncios e negócios recentes no mesmo bairro e faixa de área. Recarregado em toda visita — a base de hoje é de setembro de 2026.",
              ],
              [
                "2 · Diária e ocupação",
                "Para flats, a diária e a ocupação de temporada modeladas por bairro e por mês. A conta chega líquida: condomínio, taxa e limpeza já descontados.",
              ],
              [
                "3 · O problema",
                "Todo spread tem um motivo: inventário, reforma, condomínio alto, prédio sem elevador. O Farol mostra o motivo antes de você marcar a visita.",
              ],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-bg/25 pt-[18px]">
                <p className="text-[13px] font-semibold tabular-nums text-gold">{k}</p>
                <p className="mt-3 text-base leading-relaxed text-sand">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">O que o Farol não é</p>
            <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-none tracking-tight">
              Não é imobiliária. Não é oferta. Não é recomendação.
            </h2>
            <p className="mt-3.5 max-w-[44ch] text-[17px] leading-relaxed text-muted">
              É um farol: aponta onde olhar em João Pessoa e mostra o problema antes que ele te
              encontre. A visita e a decisão continuam sendo suas.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7">
            <p className="font-display text-[30px] leading-tight">Três sinais. Um job. João Pessoa.</p>
            <p className="text-[15px] leading-relaxed text-muted">
              Sinais modelados, sem estoque real e sem corretor no meio. Leva menos de um minuto.
            </p>
            <a
              href="#form"
              className="ink pressable inline-flex h-[52px] w-fit items-center gap-2.5 rounded-xl px-[22px] text-base font-semibold"
            >
              Ver 3 oportunidades <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-6 py-8 text-[13px] leading-relaxed text-subtle">
        <span>
          <span className="font-display text-lg text-fg">Farol</span> · João Pessoa
        </span>
        <span className="max-w-[60ch]">
          Sinais modelados a partir de comps de setembro de 2026. Não é oferta, estoque real nem
          recomendação de investimento.
        </span>
      </footer>
    </div>
  );
}

function JobPick({
  active,
  title,
  hint,
  onClick,
}: {
  active: boolean;
  title: string;
  hint: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex flex-col gap-1.5 rounded-xl border bg-bg px-4 py-3.5 text-left",
        active ? "border-fg" : "border-line hover:border-fg",
      )}
    >
      {active ? (
        <span className="pointer-events-none absolute inset-[-1px] rounded-xl border-2 border-fg" />
      ) : null}
      <span className="text-base font-semibold">{title}</span>
      <span className="text-[13.5px] leading-snug text-subtle">{hint}</span>
    </button>
  );
}

function Preview({ job }: { job: JobHint }) {
  const airbnb = job === "airbnb";
  return (
    <div className="relative flex min-h-[520px] items-center justify-center py-6">
      <div aria-hidden className="beam pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="absolute h-[400px] w-[min(420px,88%)] -translate-x-[18px] translate-y-3.5 rotate-[-5deg] rounded-[18px] border border-line bg-ground"
      />
      <div
        aria-hidden
        className="absolute h-[400px] w-[min(420px,88%)] translate-x-3 -translate-y-1.5 rotate-[3deg] rounded-[18px] border border-line bg-raised"
      />
      <article className="relative flex w-[min(420px,88%)] flex-col gap-4 rounded-[18px] border border-line bg-surface px-6 py-[22px] shadow-card">
        <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
          <span>Sinal 1 de 3</span>
          <span className="text-accent">{airbnb ? "Flat → Airbnb" : "Abaixo do preço"}</span>
        </div>
        {airbnb ? (
          <>
            <h3 className="font-display text-[30px] leading-tight">Flat 34 m² · Cabo Branco</h3>
            <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-[15px] tabular-nums">
              <dt className="text-subtle">Preço pedido</dt>
              <dd className="text-right font-semibold">R$ 389.000</dd>
              <dt className="text-subtle">m² do bairro × 34</dt>
              <dd className="text-right font-semibold">R$ 421.600</dd>
              <dt className="text-subtle">Diária modelada · ocupação</dt>
              <dd className="text-right font-semibold">R$ 260 · 62%</dd>
              <dt className="text-subtle">Caixa líquido / mês</dt>
              <dd className="text-right font-semibold">≈ R$ 2.900</dd>
            </dl>
            <div className="flex items-baseline gap-3.5 border-t border-line pt-3.5">
              <span className="font-display text-[64px] leading-none tracking-tight text-accent">
                8,9%
              </span>
              <span className="text-sm leading-snug text-muted">
                a.a. sobre o pedido,
                <br />
                já descontado condomínio, taxa e limpeza
              </span>
            </div>
            <p className="rounded-[10px] bg-bg px-3.5 py-3 text-sm leading-snug">
              <strong>O problema à vista:</strong> condomínio de R$ 780 pesa na conta — está
              descontado do caixa. Prédio de 2009, sem elevador de serviço.
            </p>
          </>
        ) : (
          <>
            <h3 className="font-display text-[30px] leading-tight">Apto 72 m² · Manaíra</h3>
            <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-[15px] tabular-nums">
              <dt className="text-subtle">Preço pedido</dt>
              <dd className="text-right font-semibold">R$ 520.000</dd>
              <dt className="text-subtle">m² do bairro</dt>
              <dd className="text-right font-semibold">R$ 9.100</dd>
              <dt className="text-subtle">Valor de bairro × 72</dt>
              <dd className="text-right font-semibold">R$ 655.200</dd>
              <dt className="text-subtle">Comps</dt>
              <dd className="text-right font-semibold">14 · set 2026</dd>
            </dl>
            <div className="flex items-baseline gap-3.5 border-t border-line pt-3.5">
              <span className="font-display text-[64px] leading-none tracking-tight text-accent">
                −21%
              </span>
              <span className="text-sm leading-snug text-muted">
                de spread contra
                <br />
                o m² do bairro
              </span>
            </div>
            <p className="rounded-[10px] bg-bg px-3.5 py-3 text-sm leading-snug">
              <strong>O problema à vista:</strong> inventário em andamento — escritura só após a
              partilha, prazo típico de 8 a 14 meses.
            </p>
          </>
        )}
        <p className="text-[12px] text-faint">Sinal modelado para ilustrar o formato. Não é oferta.</p>
      </article>
    </div>
  );
}
