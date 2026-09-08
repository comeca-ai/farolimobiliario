import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CITY, NEIGHBORHOODS } from "@/data/market";
import { brl, pct, pctAbs } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bairros")({ component: BairrosPage });

type ZoneFilter = "todos" | "orla" | "interior" | "cabedelo";

const ZONE_LABEL: Record<ZoneFilter, string> = {
  todos: "Todos",
  orla: "Orla",
  interior: "Interior",
  cabedelo: "Cabedelo",
};

function BairrosPage() {
  const [zone, setZone] = useState<ZoneFilter>("todos");
  const maxM2 = Math.max(...NEIGHBORHOODS.map((n) => n.m2));
  const sorted = useMemo(() => {
    const list =
      zone === "todos" ? NEIGHBORHOODS : NEIGHBORHOODS.filter((n) => n.zone === zone);
    return [...list].sort((a, b) => b.m2 - a.m2);
  }, [zone]);

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-10 md:py-14">
      <p className="eyebrow text-accent">
        Comps de bairro · {CITY.sampleDate} · atualiza {CITY.refresh}
      </p>
      <h1 className="mt-3.5 font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-none tracking-tight">
        O m² é o chão.
      </h1>
      <p className="mt-3.5 max-w-[44ch] text-[17px] leading-relaxed text-muted">
        João Pessoa {brl.format(CITY.m2)}/m² · {pct(CITY.yoy)} em 12 meses. STR da cidade{" "}
        {pctAbs(CITY.strOccupancy)} · ADR {brl.format(CITY.strAdr)}.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {sorted.map((n) => (
          <li key={n.id} className="rounded-[18px] border border-line bg-surface p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-subtle">
              {n.zone === "cabedelo" ? "Cabedelo" : n.zone === "orla" ? "Orla" : "Interior"}
            </p>
            <div className="mt-1 flex items-end justify-between gap-3">
              <h2 className="font-display text-[30px] leading-tight">{n.name}</h2>
              <p className="font-display text-[30px] tabular-nums leading-none text-accent">
                {brl.format(n.m2)}
              </p>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-raised">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(n.m2 / maxM2) * 100}%` }}
                aria-hidden
              />
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  12 meses
                </dt>
                <dd className={cn("mt-1 tabular-nums", n.yoy >= 0.12 ? "text-accent" : "text-fg")}>
                  {pct(n.yoy)}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  Aluguel
                </dt>
                <dd className="mt-1 tabular-nums">
                  {n.rentM2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  STR
                </dt>
                <dd className="mt-1 tabular-nums">{pctAbs(n.strOccupancy)}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Note
          n="01"
          title="Onde o preço ainda não olhou"
          body="Aeroclube e Jd. Cidade Universitária lideram a alta 12 meses. O portal ainda anuncia no m² velho — é o spread de momentum."
        />
        <Note
          n="02"
          title="Onde o Airbnb paga a parcela"
          body="Tambaú, Cabo Branco e Bessa. Occupancy 55–62%, diária 270–380. Flat 22–33 m² perto da orla, não casa no Altiplano."
        />
        <Note
          n="03"
          title="Onde o portal não chegou"
          body="Torre, Expedicionários, Centro, ruas locais do Bessa. Placa, IPTU atrasado, inventário. Zero fotos no Zap."
        />
      </section>
    </main>
  );
}

function Note({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article className="border-t-2 border-fg pt-4">
      <p className="text-[13px] font-semibold tabular-nums text-accent">{n}</p>
      <h2 className="mt-2 font-display text-[26px] leading-tight">{title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
    </article>
  );
}
