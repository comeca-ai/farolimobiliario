import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Briefing } from "@/components/briefing";
import { Cadastro } from "@/components/cadastro";
import { ListingCard } from "@/components/listing-card";
import { OpportunityCard } from "@/components/opportunity-card";
import { OrlaMap } from "@/components/orla-map";
import { Typewriter } from "@/components/typewriter";
import { CITY } from "@/data/market";
import { GOAL_LABEL, matchBrief, reading, type Brief, type Match } from "@/lib/brief";
import { RADAR_HINT, RADAR_LABEL } from "@/lib/labels";
import { LISTINGS_SCORED } from "@/lib/score";
import { useDesk, type RadarFilter } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const RADARS: RadarFilter[] = ["todos", "preco", "airbnb", "rua"];

function Home() {
  const brief = useDesk((s) => s.brief);
  const lead = useDesk((s) => s.lead);
  const showDesk = useDesk((s) => s.showDesk);
  const setBrief = useDesk((s) => s.setBrief);
  const setLead = useDesk((s) => s.setLead);
  const clearBrief = useDesk((s) => s.clearBrief);

  if (!brief) {
    return <Briefing onSubmit={setBrief} />;
  }
  if (!lead) {
    return <Cadastro brief={brief} onSubmit={setLead} onBack={clearBrief} />;
  }
  if (showDesk) {
    return <MesaBoard />;
  }
  return <Reading brief={brief} />;
}

function Reading({ brief }: { brief: Brief }) {
  const matches = useMemo(() => matchBrief(brief), [brief]);
  const text = useMemo(() => reading(brief, matches), [brief, matches]);
  const [openList, setOpenList] = useState(false);
  const clearBrief = useDesk((s) => s.clearBrief);
  const setShowDesk = useDesk((s) => s.setShowDesk);
  const selectedId = useDesk((s) => s.selectedId);
  const select = useDesk((s) => s.select);
  const navigate = useNavigate();
  const cards = matches.map((m) => m.card);
  const open = (id: string) => {
    select(id);
    void navigate({ to: "/imovel/$id", params: { id } });
  };

  return (
    <main className="mx-auto max-w-[1400px] px-4 pb-12 pt-6 md:px-6 md:pt-10">
      <p className="text-xs uppercase tracking-widest text-muted">
        {GOAL_LABEL[brief.goal]}
      </p>
      <div className="mt-4 max-w-2xl rounded-2xl bg-surface p-5 shadow-(--shadow-border) md:p-7">
        <p className="text-xs uppercase tracking-widest text-subtle">Farol lê</p>
        <div className="mt-3">
          <Typewriter text={text} onDone={() => setOpenList(true)} />
        </div>
        {!openList ? (
          <button
            type="button"
            className="mt-4 text-sm text-accent"
            onClick={() => setOpenList(true)}
          >
            Mostrar os imóveis
          </button>
        ) : null}
      </div>

      {openList ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)]">
          <div className="flex flex-col gap-6">
            <section className="lg:hidden">
              <OrlaMap cards={cards} selectedId={selectedId} onSelect={open} compact />
            </section>
            {matches[0] ? (
              <MatchBlock match={matches[0]} rank={1} size="hero" />
            ) : null}
            {matches.length > 1 ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {matches.slice(1, 3).map((m, i) => (
                  <li key={m.card.listing.id}>
                    <MatchBlock match={m} rank={i + 2} />
                  </li>
                ))}
              </ul>
            ) : null}
            {matches.length > 3 ? (
              <ul className="flex flex-col gap-3">
                {matches.slice(3).map((m) => (
                  <li key={m.card.listing.id}>
                    <ListingCard card={m.card} active={m.card.listing.id === selectedId} />
                    <p className="mt-2 px-1 text-sm leading-relaxed text-muted">{m.why}</p>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={clearBrief}
                className="pressable h-12 rounded-full bg-raised px-5 text-sm text-fg"
              >
                Trocar o rumo
              </button>
              <button
                type="button"
                onClick={() => setShowDesk(true)}
                className="pressable h-12 rounded-full px-5 text-sm text-muted hover:text-fg"
              >
                Ver a mesa completa
              </button>
            </div>
          </div>
          <aside className="hidden lg:sticky lg:top-(--header-h) lg:block lg:self-start lg:pt-4">
            <OrlaMap cards={cards} selectedId={selectedId} onSelect={open} />
            <p className="mt-2 text-xs text-subtle">Só os aderentes a este rumo.</p>
          </aside>
        </div>
      ) : null}
    </main>
  );
}

function MatchBlock({
  match,
  rank,
  size,
}: {
  match: Match;
  rank: number;
  size?: "hero" | "poster";
}) {
  return (
    <div>
      <OpportunityCard card={match.card} rank={rank} size={size} />
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">{match.why}</p>
    </div>
  );
}

function MesaBoard() {
  const radar = useDesk((s) => s.radar);
  const query = useDesk((s) => s.query);
  const selectedId = useDesk((s) => s.selectedId);
  const setRadar = useDesk((s) => s.setRadar);
  const setQuery = useDesk((s) => s.setQuery);
  const select = useDesk((s) => s.select);
  const setShowDesk = useDesk((s) => s.setShowDesk);
  const brief = useDesk((s) => s.brief);
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
          João Pessoa · {CITY.sampleDate} · {CITY.refresh}
        </p>
        <h1 className="mt-2 font-display text-4xl leading-none tracking-tight text-balance md:text-6xl">
          As grandes da mesa.
        </h1>
        {brief ? (
          <button
            type="button"
            onClick={() => setShowDesk(false)}
            className="mt-3 text-sm text-accent"
          >
            Voltar à leitura · {GOAL_LABEL[brief.goal]}
          </button>
        ) : null}
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
