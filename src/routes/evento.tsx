import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { JobPick } from "@/components/briefing";
import { Mark } from "@/components/mark";
import {
  GOAL_DEFAULTS,
  matchBrief,
  punchForGoal,
  type LifeGoal,
} from "@/lib/brief";
import {
  EVENTO_KICKER,
  EVENTO_MARKET,
  EVENTO_SOURCE,
  EVENTO_TITLE,
  eventoSubmitError,
} from "@/lib/evento";
import { maskBrMobile } from "@/lib/lead";
import { useDesk } from "@/lib/store";

export const Route = createFileRoute("/evento")({
  component: EventoPage,
  head: () => ({
    meta: [
      { title: "Farol · primeira mesa em Brasília" },
      {
        name: "description",
        content: "Primeiros clientes, evento em Brasília. O spread está em João Pessoa.",
      },
    ],
  }),
});

const SIGNALS: { label: string; goal: LifeGoal }[] = [
  { label: "Temporada", goal: "renda" },
  { label: "Spread", goal: "patrimonio" },
  { label: "Morar", goal: "morar" },
];

function EventoPage() {
  const lead = useDesk((s) => s.lead);
  const draft = useDesk((s) => s.draft);
  const setDraft = useDesk((s) => s.setDraft);
  const setLead = useDesk((s) => s.setLead);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const job = draft.job;

  if (lead) {
    return <Navigate to="/" />;
  }

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next = eventoSubmitError(draft.email, draft.whatsapp);
    if (next) {
      setError(next);
      return;
    }
    setLead({
      email: draft.email.trim().toLowerCase(),
      whatsapp: draft.whatsapp,
      source: EVENTO_SOURCE,
    });
    void navigate({ to: "/" });
  };

  return (
    <div>
      <header className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 text-fg">
          <Mark className="h-[22px] w-3.5" />
          <span className="flex items-baseline gap-2.5">
            <span className="font-display text-[26px] leading-none tracking-tight">Farol</span>
            <span className="text-[13px] text-subtle">{EVENTO_MARKET}</span>
          </span>
        </Link>
        <p className="text-[13px] font-medium text-accent">Evento Brasília</p>
      </header>

      <main className="mx-auto grid max-w-[1100px] items-start gap-10 px-5 pb-16 pt-4 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pt-8">
        <section className="flex max-w-[34rem] flex-col gap-6">
          <p className="eyebrow text-accent">{EVENTO_KICKER}</p>
          <h1 className="font-display text-[clamp(2.35rem,7vw,4.35rem)] leading-[0.98] tracking-tight">
            {EVENTO_TITLE}
          </h1>
          <p className="max-w-[38ch] text-lg leading-relaxed text-muted">
            Dois jobs. Cinco sinais. Sem corretor no corredor. Você entra, diz o rumo, e o Farol
            aponta o que fecha a conta em {EVENTO_MARKET}.
          </p>

          <form
            onSubmit={submit}
            className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 sm:p-6"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                O job
              </p>
              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                <JobPick
                  active={job === "airbnb"}
                  title="Flat → Airbnb"
                  hint="Caixa de temporada, líquido."
                  onClick={() => setDraft({ job: "airbnb" })}
                />
                <JobPick
                  active={job === "abaixo"}
                  title="Abaixo do preço"
                  hint="Spread vs m² do bairro."
                  onClick={() => setDraft({ job: "abaixo" })}
                />
              </div>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                E-mail
              </span>
              <input
                type="email"
                autoComplete="email"
                inputMode="email"
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
                WhatsApp <span className="font-normal normal-case tracking-normal text-faint">obrigatório</span>
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
                  onChange={(e) => {
                    setDraft({ whatsapp: maskBrMobile(e.target.value) });
                    setError("");
                  }}
                  placeholder="61 9 0000-0000"
                  className="min-w-0 flex-1 bg-transparent px-3 text-base text-fg outline-none"
                />
              </span>
              <span className="text-[13px] text-subtle">Brasília é 61. João Pessoa é 83.</span>
            </label>

            {error ? <p className="text-sm font-medium text-accent">{error}</p> : null}

            <button
              type="submit"
              className="ink pressable flex h-14 items-center justify-center gap-2.5 rounded-xl text-[17px] font-semibold"
            >
              Entrar na mesa <span aria-hidden>→</span>
            </button>
            <p className="text-[13px] leading-relaxed text-subtle">
              Depois você escreve o rumo. Só então saem os cinco sinais. Sem senha, sem cartão.
            </p>
          </form>
        </section>

        <aside className="flex flex-col gap-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
            O que o Farol aponta agora
          </p>
          <ul className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
            {SIGNALS.map((row, i) => {
              const card = matchBrief({ goal: row.goal, ...GOAL_DEFAULTS[row.goal] })[0]?.card;
              if (!card) return null;
              const hit = punchForGoal(card, row.goal);
              return (
                <li
                  key={row.goal}
                  className={i === 0 ? "p-5" : "border-t border-line p-5"}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                    {row.label} · {card.nb.name}
                  </p>
                  <p className="mt-1.5 font-display text-[1.45rem] leading-tight">
                    {card.listing.title}
                  </p>
                  <p className="mt-2 font-display text-[1.7rem] tabular-nums leading-none text-deal">
                    {hit.value}
                  </p>
                  <p className="mt-1 text-[13px] text-subtle">{hit.caption}</p>
                </li>
              );
            })}
          </ul>
          <p className="text-[13px] leading-relaxed text-subtle">
            Sinais modelados com comps de {EVENTO_MARKET}, setembro 2026. Não é oferta nem
            recomendação de investimento.
          </p>
        </aside>
      </main>
    </div>
  );
}
