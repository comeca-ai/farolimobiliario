import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo } from "react";
import { ListingCard } from "@/components/listing-card";
import { OpportunityCard } from "@/components/opportunity-card";
import { OrlaMap } from "@/components/orla-map";
import { CITY } from "@/data/market";
import { RADAR_HINT, RADAR_LABEL } from "@/lib/labels";
import { LISTINGS_SCORED } from "@/lib/score";
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

  const featured = filtered.slice(0, 3);
  const rest = filtered.slice(3);
  const open = (id: string) => {
    select(id);
    void navigate({ to: "/imovel/$id", params: { id } });
  };

  return (
    <main className="mx-auto max-w-[1400px] px-4 pb-10 pt-5 md:px-6 md:pb-12 md:pt-8">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted">
          João Pessoa · {CITY.sampleDate}
        </p>
        <h1 className="mt-2 font-display text-4xl leading-none tracking-tight text-balance md:text-6xl">
          As grandes da mesa.
        </h1>
      </header>

      <div className="sticky top-(--header-h) z-20 -mx-4 mt-5 border-b border-line bg-bg/95 px-4 py-2 backdrop-blur-sm md:mx-0 md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
        <div className="flex gap-2 overflow-x-auto scroll-hide pb-1 md:flex-wrap md:overflow-visible">
          {RADARS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRadar(r)}
              className={cn(
                "pressable h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                radar === r ? toneOn(r) : "bg-raised text-muted hover:text-fg",
              )}
            >
              {RADAR_LABEL[r]}
            </button>
          ))}
        </div>
        <label className="relative mt-2 block md:mt-3 md:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bairro, rua, flat, leilão"
            className="h-11 w-full rounded-lg bg-raised pl-10 pr-3 text-sm text-fg outline-none ring-1 ring-transparent placeholder:text-subtle focus:ring-accent/40"
          />
        </label>
        {radar !== "todos" ? (
          <p className="mt-2 text-xs text-subtle">{RADAR_HINT[radar]}</p>
        ) : null}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl bg-surface px-4 py-12 text-center text-sm text-muted shadow-(--shadow-border)">
          Nenhum sinal com esse filtro.
        </p>
      ) : (
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)]">
          <div className="flex flex-col gap-6">
            <section className="lg:hidden">
              <OrlaMap cards={filtered} selectedId={selectedId} onSelect={open} compact />
            </section>
            <section>
              {featured[0] ? (
                <OpportunityCard card={featured[0]} rank={1} size="hero" />
              ) : null}
              {featured.length > 1 ? (
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {featured.slice(1).map((c, i) => (
                    <li key={c.listing.id}>
                      <OpportunityCard card={c} rank={i + 2} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
            {rest.length > 0 ? (
              <section>
                <h2 className="font-display text-lg">Demais sinais</h2>
                <ul className="mt-3 flex flex-col gap-3">
                  {rest.map((c) => (
                    <li key={c.listing.id}>
                      <ListingCard card={c} active={c.listing.id === selectedId} />
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
          <aside className="hidden lg:sticky lg:top-(--header-h) lg:block lg:self-start lg:pt-4">
            <OrlaMap cards={filtered} selectedId={selectedId} onSelect={open} />
            <p className="mt-2 text-xs text-subtle">Atlântico a leste — a orla fica à direita.</p>
          </aside>
        </div>
      )}
    </main>
  );
}

function toneOn(radar: RadarFilter) {
  if (radar === "airbnb") return "bg-deal text-accent-fg";
  if (radar === "rua") return "bg-warn text-accent-fg";
  return "bg-accent text-accent-fg";
}
