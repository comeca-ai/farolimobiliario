import { CITY } from "@/data/market";
import { brl } from "@/lib/format";
import { Mark } from "@/components/mark";

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
        Não é Zap. Não é corretor.
      </p>
      <button
        type="button"
        onClick={onEnter}
        className="pressable mt-10 h-14 w-full rounded-full bg-accent text-sm font-medium text-accent-fg md:w-auto md:px-10"
      >
        Entrar
      </button>
    </main>
  );
}
