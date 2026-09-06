import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo } from "react";
import { ListingCard } from "@/components/listing-card";
import { OrlaMap } from "@/components/orla-map";
import { CITY } from "@/data/market";
import { pct, pctAbs } from "@/lib/format";
import { RADAR_HINT, RADAR_LABEL } from "@/lib/labels";
import { LISTINGS_SCORED, type Scorecard } from "@/lib/score";
import { useDesk, type RadarFilter } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const RADARS: RadarFilter[] = ["todos", "preco", "airbnb", "rua"];

function Home() {
  const radar = useDesk((s) => s.radar);
  const query = useDesk((s) => s.query);
  const selectedId = useDesk((s) => s.selectedId);
  const setRadar = useDesk((s) => s.setRadar);
  const setQuery = useDesk((s) => s.setQuery);
  const select = useDesk((s) => s.select);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LISTINGS_SCORED.filter((c) => {
      if (radar !== "todos" && !c.listing.radars.includes(radar) && c.primary !== radar) {
        return false;
      }
      if (!q) return true;
      const blob = `${c.listing.title} ${c.listing.street} ${c.nb.name} ${c.listing.type}`;
      return blob.toLowerCase().includes(q);
    });
  }, [radar, query]);

  const kpis = useMemo(() => summarize(filtered), [filtered]);

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-6 md:px-6 md:py-8">
      <header className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
          Mesa de radar · {CITY.sampleDate}
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight tracking-tight md:text-4xl">
          Onde o preço ainda não olhou.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Três teses em João Pessoa: imóvel abaixo do m² justo, flat que se paga no Airbnb,
          casa da rua que os portais não viram. Números de bairro reais; sinais reconstruídos
          como o pipeline Cloudflare traria na produção.
        </p>
      </header>

      <section className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        <Kpi label="Sinais na mesa" value={String(kpis.count)} />
        <Kpi label="Desconto médio" value={pct(kpis.avgDiscount)} />
        <Kpi label="Yield STR mediano" value={pctAbs(kpis.medianStr)} />
        <Kpi label="Fora dos portais" value={String(kpis.offPortal)} />
      </section>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {RADARS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRadar(r)}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150",
                radar === r
                  ? "bg-accent text-accent-fg"
                  : "bg-raised text-muted hover:text-fg",
              )}
            >
              {RADAR_LABEL[r]}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bairro, rua, flat, leilão"
            className="h-11 w-full rounded-lg bg-raised pl-10 pr-3 text-sm text-fg outline-none ring-1 ring-transparent placeholder:text-subtle focus:ring-accent/40"
          />
        </label>
      </div>
      {radar !== "todos" ? (
        <p className="mt-3 text-xs text-subtle">{RADAR_HINT[radar]}</p>
      ) : null}

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)]">
        <ul className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <li className="rounded-xl bg-surface px-4 py-10 text-center text-sm text-muted shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
              Nenhum sinal com esse filtro.
            </li>
          ) : (
            filtered.map((c) => (
              <li key={c.listing.id}>
                <ListingCard card={c} active={c.listing.id === selectedId} />
              </li>
            ))
          )}
        </ul>
        <div className="lg:sticky lg:top-20 lg:self-start">
          <OrlaMap
            cards={filtered}
            selectedId={selectedId}
            onSelect={(id) => {
              select(id);
              void navigate({ to: "/imovel/$id", params: { id } });
            }}
          />
          <p className="mt-2 text-[11px] text-subtle">
            O Atlântico fica a leste. João Pessoa é a capital onde o sol nasce primeiro —
            a orla está à direita do mapa, não à esquerda.
          </p>
        </div>
      </div>
    </main>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface px-4 py-3 shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
      <p className="text-[10px] uppercase tracking-[0.16em] text-subtle">{label}</p>
      <p className="mt-1 font-display text-xl tabular-nums md:text-2xl">{value}</p>
    </div>
  );
}

function summarize(cards: Scorecard[]) {
  if (cards.length === 0) {
    return { count: 0, avgDiscount: 0, medianStr: 0, offPortal: 0 };
  }
  const avgDiscount = cards.reduce((s, c) => s + c.discount, 0) / cards.length;
  const yields = cards.map((c) => c.strYield).sort((a, b) => a - b);
  const medianStr = yields[Math.floor(yields.length / 2)] ?? 0;
  const offPortal = cards.filter((c) => c.listing.portalCount === 0).length;
  return { count: cards.length, avgDiscount, medianStr, offPortal };
}
