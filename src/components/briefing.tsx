import { CITY } from "@/data/market";
import { brl } from "@/lib/format";

export function Landing({ onEnter }: { onEnter: () => void }) {
  return (
    <main>
      <section className="mx-auto grid max-w-[1120px] items-end gap-12 px-5 pb-16 pt-14 md:grid-cols-2 md:gap-12 md:pt-20">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">João Pessoa</p>
          <h1 className="mt-3 font-display text-[clamp(3.5rem,11vw,6.5rem)] font-normal leading-[0.92] tracking-tight">
            Farol
          </h1>
          <p className="mt-5 max-w-md font-display text-[clamp(1.5rem,3.4vw,2.1rem)] leading-snug">
            Mostra primeiro o imóvel que fecha conta.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Menos vitrine, mais decisão. O Farol lê João Pessoa, separa os encaixes mais fortes e
            abre o mapa completo quando vale a visita.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onEnter}
              className="pressable inline-flex h-14 items-center rounded-full bg-accent px-10 text-[15px] font-medium text-accent-fg"
            >
              Ver imóveis agora
            </button>
            <span className="text-sm text-muted">Grátis. Cadastro rápido. Sem plano, sem cartão.</span>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted sm:max-w-lg">
            <li>• 3 melhores encaixes primeiro, depois mais imóveis no mapa da cidade.</li>
            <li>• Inventário recarregado em toda visita; comps públicos seguem visíveis.</li>
            <li>• Copy honesta: sem promessa de ganho, com risco e contexto de bairro.</li>
          </ul>
        </div>

        <div className="border-line md:border-l md:pl-7">
          <p className="text-xs uppercase tracking-[0.18em] text-subtle">O metro da cidade hoje</p>
          <p className="mt-3 font-display text-[clamp(3rem,7vw,4.75rem)] leading-none tracking-tight text-deal">
            {brl.format(CITY.m2).replace(/\s/g, "\u00a0")}
          </p>
          <p className="mt-2 text-base">por m², João Pessoa</p>
          <p className="mt-5 text-xs leading-relaxed text-subtle">
            Fonte: FipeZAP / MySide, set 2026. Comps por bairro; a leitura do imóvel ajusta pelo
            estado.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <h2 className="max-w-lg font-display text-[clamp(1.9rem,4vw,2.6rem)] font-normal leading-tight tracking-tight">
            Como funciona
          </h2>
          <ol className="mt-9 grid gap-5 sm:grid-cols-3">
            <li className="rounded-2xl bg-surface p-6 shadow-(--shadow-border)">
              <p className="font-display text-[22px] text-accent">01</p>
              <p className="mt-3 font-display text-xl leading-snug">Entra</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                E-mail e WhatsApp. Sem senha, sem cartão, sem conversa solta antes de mostrar a mesa.
              </p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-(--shadow-border)">
              <p className="font-display text-[22px] text-accent">02</p>
              <p className="mt-3 font-display text-xl leading-snug">Escreve</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                O que a vida pede, numa caixinha. O Farol lê o rumo e separa os encaixes.
              </p>
            </li>
            <li className="rounded-2xl bg-surface p-6 shadow-(--shadow-border)">
              <p className="font-display text-[22px] text-accent">03</p>
              <p className="mt-3 font-display text-xl leading-snug">Concordar</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Você diz sim. Aí vêm os 3 melhores imóveis, mais sinais no mapa e a base recarregada em toda visita.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-subtle">Nota de quem construiu</p>
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
        <div className="mx-auto max-w-[1120px] px-5 py-16 md:pb-24">
          <div className="grid items-center gap-8 rounded-3xl bg-surface px-6 py-10 shadow-(--shadow-border) md:grid-cols-2 md:px-14 md:py-14">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,4.4vw,2.9rem)] font-normal leading-[1.08] tracking-tight">
                Abrir a mesa — grátis.
                <br />
                Sem plano.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                E-mail e WhatsApp, depois a caixinha. Em segundos você vê os 3 melhores encaixes e pode abrir mais imóveis no mapa completo.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={onEnter}
                className="pressable inline-flex h-14 items-center rounded-full bg-accent px-11 text-[15px] font-medium text-accent-fg"
              >
                Começar cadastro
              </button>
              <p className="max-w-sm text-[13px] leading-relaxed text-subtle">
                Sinais desta versão são modelados com comps públicos de bairro. Não é oferta nem
                recomendação de investimento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
