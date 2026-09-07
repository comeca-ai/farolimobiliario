import { createFileRoute } from "@tanstack/react-router";
import { CITY, NEIGHBORHOODS } from "@/data/market";
import { brl, pct, pctAbs } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bairros")({ component: BairrosPage });

function BairrosPage() {
  const maxM2 = Math.max(...NEIGHBORHOODS.map((n) => n.m2));
  const sorted = [...NEIGHBORHOODS].sort((a, b) => b.m2 - a.m2);

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-10">
      <p className="text-xs uppercase tracking-widest text-muted">
        Comps de bairro · {CITY.sampleDate} · atualiza {CITY.refresh}
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight text-balance md:text-5xl">
        O m² é o chão.
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        João Pessoa {brl.format(CITY.m2)}/m² · {pct(CITY.yoy)} em 12 meses. STR · ocupação da cidade{" "}
        {pctAbs(CITY.strOccupancy)} · ADR {brl.format(CITY.strAdr)}.
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {sorted.map((n) => (
          <li key={n.id} className="rounded-2xl bg-surface p-4 shadow-(--shadow-border) md:p-5">
            <p className="text-xs uppercase tracking-widest text-muted">
              {n.zone === "cabedelo" ? "Cabedelo" : n.zone === "orla" ? "Orla" : "Interior"}
            </p>
            <div className="mt-1 flex items-end justify-between gap-3">
              <h2 className="font-display text-2xl leading-tight">{n.name}</h2>
              <p className="font-display text-2xl tabular-nums leading-none">{brl.format(n.m2)}</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-raised">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(n.m2 / maxM2) * 100}%` }}
                aria-hidden
              />
            </div>
            <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
              Barra relativa ao m² mais alto da cidade nesta lista — não ao m² médio de João Pessoa
              ({brl.format(CITY.m2)}).
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-widest text-muted">
                  12 meses
                </dt>
                <dd className={cn("mt-1 tabular-nums", n.yoy >= 0.12 ? "text-deal" : "text-fg")}>
                  {pct(n.yoy)}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-widest text-muted">
                  Aluguel
                </dt>
                <dd className="mt-1 tabular-nums">
                  {n.rentM2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-widest text-muted">STR</dt>
                <dd className="mt-1 tabular-nums">{pctAbs(n.strOccupancy)}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

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
    <article className="rounded-2xl bg-surface p-5 shadow-(--shadow-border)">
      <h2 className="font-display text-lg leading-snug">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}
