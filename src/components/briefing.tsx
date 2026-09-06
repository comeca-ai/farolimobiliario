import { CITY } from "@/data/market";
import { brl } from "@/lib/format";
import { Mark } from "@/components/mark";

const STEPS = [
  { n: "1", t: "Entra", d: "E-mail e WhatsApp. Sem senha." },
  { n: "2", t: "Escreve", d: "O que a vida pede, numa caixinha." },
  { n: "3", t: "Concordar", d: "O Farol lê o rumo. Você diz sim. Aí os imóveis." },
];

export function Landing({ onEnter }: { onEnter: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-10 md:pt-16">
      <Mark className="size-9 text-accent" />
      <p className="mt-6 text-xs uppercase tracking-widest text-accent">João Pessoa</p>
      <h1 className="mt-3 font-display text-6xl leading-none tracking-tight md:text-7xl">Farol</h1>
      <p className="mt-4 max-w-md font-display text-2xl leading-snug text-fg">
        Aponta o spread.
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        {brl.format(CITY.m2)} o metro da cidade. Abaixo disso — ou fora do portal — a luz acende.
      </p>

      <button
        type="button"
        onClick={onEnter}
        className="pressable mt-8 h-14 w-full rounded-full bg-accent text-sm font-medium text-accent-fg md:w-auto md:px-10"
      >
        Entrar
      </button>

      <ol className="mt-14 grid gap-4">
        {STEPS.map((s) => (
          <li key={s.n} className="flex gap-4">
            <span className="font-display text-2xl leading-none text-accent">{s.n}</span>
            <span>
              <span className="block font-display text-xl leading-tight">{s.t}</span>
              <span className="mt-1 block text-sm text-muted">{s.d}</span>
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-14 max-w-md text-sm leading-relaxed text-muted">
        O portal vende o anúncio. O corretor vende a visita. O Farol aponta o metro abaixo do
        justo — e cala o resto.
      </p>

      <button
        type="button"
        onClick={onEnter}
        className="pressable mt-8 h-14 w-full rounded-full bg-accent text-sm font-medium text-accent-fg"
      >
        Entrar
      </button>
    </main>
  );
}
