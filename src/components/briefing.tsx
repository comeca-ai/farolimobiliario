import { useEffect, useState } from "react";
import { CITY } from "@/data/market";
import { brl } from "@/lib/format";

export function Landing({ onEnter }: { onEnter: () => void }) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowSticky(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      {/* Fold apertado: promessa + Como funciona no 1º viewport (~1280×800) */}
      <section className="mx-auto grid max-w-[1120px] items-start gap-8 px-5 pb-8 pt-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:pt-8">
        <div className="max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent">João Pessoa</p>
          <h1 className="mt-1.5 font-display text-[clamp(2.75rem,8vw,4.75rem)] font-normal leading-[0.92] tracking-tight">
            Farol
          </h1>
          <p className="mt-3 max-w-md font-display text-[clamp(1.65rem,3.2vw,2.35rem)] leading-snug">
            Aponta o spread.
          </p>
          <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
            Abaixo do metro justo da cidade — ou fora do portal — a luz acende. Não é Zap. Não é
            corretor.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onEnter}
              className="pressable inline-flex h-12 items-center rounded-full bg-accent px-8 text-[15px] font-medium text-accent-fg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Entrar · ver o spread
            </button>
            <span className="text-sm text-muted">Grátis. Sem plano, sem cartão.</span>
          </div>
        </div>

        <aside className="border-line md:border-l md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Benchmark · hoje</p>
          <p className="mt-2 font-display text-[clamp(1.75rem,3.5vw,2.35rem)] leading-none tracking-tight tabular-nums text-fg">
            {brl.format(CITY.m2).replace(/\s/g, "\u00a0")}
            <span className="ml-1.5 text-base font-sans font-normal text-muted">/m²</span>
          </p>
          <p className="mt-1.5 text-sm text-muted">João Pessoa · referência de cidade</p>
          <details className="mt-4 rounded-xl bg-raised/60 px-3 py-2.5">
            <summary className="cursor-pointer text-[13px] font-medium text-fg marker:text-muted">
              Fonte e metodologia
            </summary>
            <div className="mt-2 space-y-2 border-t border-line pt-2 text-[13px] leading-relaxed text-muted">
              <p>
                <span className="text-fg">FipeZAP / MySide</span>, {CITY.sampleDate}. Comps por
                bairro; a leitura do imóvel ajusta pelo estado.
              </p>
              <p>
                O Farol usa o m² da cidade como chão — não como alvo de venda. Spread = ask vs esse
                chão (e vs comps locais). Não é oferta nem recomendação de investimento.
              </p>
            </div>
          </details>
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-8 md:py-9">
          <h2 className="max-w-lg font-display text-[clamp(1.55rem,3.2vw,2.1rem)] font-normal leading-tight tracking-tight">
            Como funciona
          </h2>
          <ol className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <li className="rounded-2xl border border-line/40 bg-surface/70 p-5 shadow-(--shadow-border)">
              <p className="font-display text-lg text-accent/70">01</p>
              <p className="mt-2 font-display text-lg leading-snug">Entra</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                E-mail e WhatsApp. Sem senha, sem cartão.
              </p>
            </li>
            <li className="rounded-2xl border border-line/70 bg-surface p-5 shadow-(--shadow-border)">
              <p className="font-display text-[20px] text-accent">02</p>
              <p className="mt-2 font-display text-xl leading-snug">Escreve</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                O que a vida pede, numa caixinha. O Farol lê o rumo.
              </p>
            </li>
            <li className="rounded-2xl border border-accent/35 bg-surface p-5 shadow-(--shadow-border) ring-1 ring-accent/15">
              <p className="font-display text-[22px] text-accent">03</p>
              <p className="mt-2 font-display text-xl leading-snug">Concorda</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                Você diz sim. Aí os imóveis — spread, risco e a rua. Base nova toda segunda, 9h.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Nota de quem construiu</p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.6vw,2.4rem)] font-normal leading-tight tracking-tight">
              Não é Zap. Não é corretor.
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-[17px] leading-relaxed">
              O portal vende o anúncio. O corretor vende a visita. O Farol aponta o spread — e cala
              quando não tem nada para apontar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Quem entra aqui é quem vai assinar a escritura. Nada de vitrine infinita.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-14 md:pb-24">
          <div className="grid items-center gap-8 rounded-3xl bg-surface px-6 py-10 shadow-(--shadow-border) md:grid-cols-2 md:px-14 md:py-14">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,4.4vw,2.9rem)] font-normal leading-[1.08] tracking-tight">
                Entrar · ver o spread.
                <br />
                Sem plano.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                E-mail e WhatsApp, depois a caixinha. Sem cartão, sem mensalidade.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={onEnter}
                className="pressable inline-flex h-14 items-center rounded-full bg-accent px-11 text-[15px] font-medium text-accent-fg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Entrar · ver o spread
              </button>
              <p className="max-w-sm text-[13px] leading-relaxed text-muted">
                Sinais desta versão são modelados com comps públicos de bairro. Não é oferta nem
                recomendação de investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {showSticky ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
          <button
            type="button"
            onClick={onEnter}
            className="pressable flex h-12 w-full items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg"
          >
            Entrar · ver o spread
          </button>
        </div>
      ) : null}
    </main>
  );
}
