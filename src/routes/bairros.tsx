import { createFileRoute } from "@tanstack/react-router";
import { NEIGHBORHOODS, CITY } from "@/data/market";
import { brl, pct, pctAbs } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bairros")({ component: BairrosPage });

function BairrosPage() {
  const maxM2 = Math.max(...NEIGHBORHOODS.map((n) => n.m2));
  const sorted = [...NEIGHBORHOODS].sort((a, b) => b.m2 - a.m2);

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Comps de bairro · {CITY.sampleDate}
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
        O m² é o chão. O resto é tese.
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        João Pessoa {brl.format(CITY.m2)}/m², {pct(CITY.yoy)} em 12 meses. Aluguel médio{" "}
        {CITY.rentM2.toLocaleString("pt-BR")} /m². STR da cidade: ocupação {pctAbs(CITY.strOccupancy)},
        ADR {brl.format(CITY.strAdr)}, receita mediana {brl.format(CITY.strAnnualMedian)}.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
        <div className="hidden grid-cols-[1.3fr_1fr_0.7fr_0.7fr_0.7fr] gap-2 border-b border-line px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-subtle md:grid">
          <span>Bairro</span>
          <span>m² venda</span>
          <span>12 meses</span>
          <span>Aluguel/m²</span>
          <span>STR occ.</span>
        </div>
        <ul>
          {sorted.map((n) => (
            <li
              key={n.id}
              className="grid grid-cols-2 gap-y-1 border-b border-line px-4 py-3 last:border-0 md:grid-cols-[1.3fr_1fr_0.7fr_0.7fr_0.7fr] md:items-center"
            >
              <div>
                <p className="font-medium">{n.name}</p>
                <p className="text-[11px] text-subtle">
                  {n.zone === "cabedelo" ? "Cabedelo" : n.zone === "orla" ? "Orla JP" : "Interior"}
                </p>
              </div>
              <div className="md:pr-4">
                <p className="tabular-nums text-sm">{brl.format(n.m2)}</p>
                <div className="mt-1 h-1 rounded-full bg-raised">
                  <div
                    className="h-1 rounded-full bg-accent/70"
                    style={{ width: `${(n.m2 / maxM2) * 100}%` }}
                  />
                </div>
              </div>
              <p
                className={cn(
                  "tabular-nums text-sm",
                  n.yoy >= 0.12 ? "text-deal" : "text-muted",
                )}
              >
                {pct(n.yoy)}
              </p>
              <p className="tabular-nums text-sm text-muted">
                {n.rentM2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </p>
              <p className="tabular-nums text-sm text-muted">{pctAbs(n.strOccupancy)}</p>
            </li>
          ))}
        </ul>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Note
          title="Onde o preço ainda não olhou"
          body="Aeroclube e Jd. Cidade Universitária lideram a alta 12 meses. O portal ainda anuncia no m² velho — é o spread de momentum."
        />
        <Note
          title="Onde o Airbnb paga a parcela"
          body="Tambaú, Cabo Branco e Bessa. Occupancy 55–62%, diária 270–380. Flat 22–33 m² perto da orla, não casa no Altiplano."
        />
        <Note
          title="Onde a rua fala primeiro"
          body="Torre, Expedicionários, Centro, ruas locais do Bessa. Placa, IPTU atrasado, inventário. Zero fotos no Zap."
        />
      </section>
    </main>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
      <h2 className="font-display text-lg leading-snug">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}
