import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo } from "react";
import { JobDoor } from "@/components/job-door";
import { ListingCard } from "@/components/listing-card";
import { MapPanel, RumoHero, RumoRow } from "@/components/rumo-list";
import { OrlaMap } from "@/components/orla-map";
import { CITY, NEIGHBORHOOD_BY_ID } from "@/data/market";
import {
  GOAL_HEADLINE,
  GOAL_HERO_KICK,
  GOAL_LABEL,
  GOAL_SORT,
  MATCH_PER_RUMO,
  countBriefMatches,
  inAskedPlace,
  matchBrief,
  reading,
  surfaceBrief,
  type Brief,
} from "@/lib/brief";
import { isHomeGoal, HOME_LABEL, openJobBrief } from "@/lib/job";
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

  if (!lead || !brief || !isHomeGoal(brief.goal)) {
    return (
      <JobDoor
        existingLead={lead}
        onGo={(nextLead, goal) => {
          setLead(nextLead);
          setBrief(openJobBrief(goal));
        }}
      />
    );
  }
  if (showDesk) {
    return <MesaBoard />;
  }
  return <Reading brief={brief} />;
}

function Reading({ brief }: { brief: Brief }) {
  const matches = useMemo(() => matchBrief(brief), [brief]);
  const surfaced = useMemo(() => surfaceBrief(brief), [brief]);
  const totalMatches = useMemo(() => countBriefMatches(brief), [brief]);
  const text = useMemo(() => reading(brief, matches), [brief, matches]);
  const clearBrief = useDesk((s) => s.clearBrief);
  const setShowDesk = useDesk((s) => s.setShowDesk);
  const selectedId = useDesk((s) => s.selectedId);
  const select = useDesk((s) => s.select);
  const navigate = useNavigate();
  const cards = surfaced.map((m) => m.card);
  const open = (id: string) => {
    select(id);
    void navigate({ to: "/imovel/$id", params: { id } });
  };
  const rest = matches.slice(1);
  const more = surfaced.slice(MATCH_PER_RUMO);

  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-28 pt-8 md:px-8 md:pb-24 md:pt-10">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
        <section>
          <h1 className="font-display text-[2rem] font-normal leading-tight tracking-tight md:text-[34px]">
            {isHomeGoal(brief.goal) ? HOME_LABEL[brief.goal] : GOAL_HEADLINE[brief.goal]}
          </h1>
          <p className="mt-2 mb-6 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            {isHomeGoal(brief.goal)
              ? `${matches.length} oportunidades em João Pessoa. Problema à vista · ${GOAL_SORT[brief.goal]}.`
              : text}
          </p>

          {matches[0] ? (
            <RumoHero
              card={matches[0].card}
              why={matches[0].why}
              goal={brief.goal}
              kicker={GOAL_HERO_KICK[brief.goal]}
              onOpen={open}
            />
          ) : (
            <p className="rounded-[14px] bg-surface px-5 py-10 text-sm text-muted shadow-(--shadow-border)">
              Nenhum sinal neste rumo. Os comps desta visita não fecharam conta.
            </p>
          )}

          {rest.length > 0 ? (
            <ol className="mt-9">
              {rest.map((m, i) => (
                <RumoRow
                  key={m.card.listing.id}
                  card={m.card}
                  index={i + 1}
                  goal={brief.goal}
                  onOpen={open}
                />
              ))}
            </ol>
          ) : null}

          <div className="mt-10 hidden flex-col gap-2 sm:flex-row sm:gap-3 md:flex">
            <button
              type="button"
              onClick={clearBrief}
              className="pressable h-12 min-h-11 rounded-full bg-raised px-5 text-sm text-fg"
            >
              Trocar o rumo
            </button>
            <button
              type="button"
              onClick={() => setShowDesk(true)}
              className="pressable h-12 min-h-11 rounded-full px-5 text-sm text-muted hover:text-fg"
            >
              Ver {totalMatches} opções no mapa completo
            </button>
          </div>

          {more.length > 0 ? (
            <section className="mt-12">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-subtle">Mais sinais</p>
                  <h2 className="mt-1 font-display text-[1.45rem] font-normal leading-tight tracking-tight">
                    Mais imóveis aderentes antes de abrir a mesa toda
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDesk(true)}
                  className="min-h-11 text-sm text-accent"
                >
                  Abrir mesa completa
                </button>
              </div>
              <div className="mt-5 grid gap-3">
                {more.map((match) => (
                  <ListingCard
                    key={match.card.listing.id}
                    card={match.card}
                    active={selectedId === match.card.listing.id}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </section>

        <aside className="lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
          <MapPanel caption={`${totalMatches} sinais aderentes · ${GOAL_SORT[brief.goal]}`}>
            <OrlaMap cards={cards} selectedId={selectedId} onSelect={open} />
          </MapPanel>
        </aside>
      </div>

      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-bg/95 px-4 pt-3 backdrop-blur md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-[1240px] gap-2">
          <button
            type="button"
            onClick={clearBrief}
            className="pressable h-12 min-h-11 shrink-0 rounded-full bg-raised px-4 text-sm text-fg"
          >
            Trocar rumo
          </button>
          <button
            type="button"
            onClick={() => setShowDesk(true)}
            className="pressable h-12 min-h-11 flex-1 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
          >
            Ver mapa completo
          </button>
        </div>
      </div>
    </main>
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
    const places = brief?.places ?? [];
    return LISTINGS_SCORED.filter((c) => {
      if (!inAskedPlace(c.nb.id, places, true)) return false;
      if (radar !== "todos" && !c.listing.radars.includes(radar) && c.primary !== radar) {
        return false;
      }
      if (!q) return true;
      const blob = `${c.listing.title} ${c.listing.street} ${c.nb.name} ${c.listing.type}`;
      return blob.toLowerCase().includes(q);
    });
  }, [radar, query, brief]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const open = (id: string) => {
    select(id);
    void navigate({ to: "/imovel/$id", params: { id } });
  };
  const resetFilters = () => {
    setRadar("todos");
    setQuery("");
  };
  const emptyWhy = query.trim()
    ? "Nenhum sinal bate com essa busca."
    : radar !== "todos"
      ? "Nenhum sinal neste filtro do radar."
      : "Nenhum sinal neste recorte de bairro.";

  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <header className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.14em] text-subtle">
          {brief?.places?.length
            ? brief.places.map((id) => NEIGHBORHOOD_BY_ID[id]?.name ?? id).join(", ")
            : "João Pessoa"}{" "}
          · {CITY.refresh} · comps {CITY.sampleDate}
        </p>
        <h1 className="mt-2 font-display text-[2rem] font-normal leading-tight tracking-tight md:text-[34px]">
          Todas as opções
        </h1>
        {brief ? (
          <button
            type="button"
            onClick={() => setShowDesk(false)}
            className="mt-3 min-h-11 text-sm text-accent"
          >
            Voltar ao rumo · {GOAL_LABEL[brief.goal]}
          </button>
        ) : null}
      </header>

      <div className="mt-6 flex gap-2 overflow-x-auto scroll-hide pb-1">
        {RADARS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRadar(r)}
            className={cn(
              "pressable h-11 min-h-11 shrink-0 rounded-full px-4 text-sm",
              radar === r ? "bg-raised text-fg" : "text-muted hover:text-fg",
            )}
          >
            {RADAR_LABEL[r]}
          </button>
        ))}
      </div>
      <label className="relative mt-3 block max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bairro, rua, flat, leilão"
          className="h-11 min-h-11 w-full rounded-lg bg-raised pl-10 pr-3 text-sm text-fg outline-none placeholder:text-subtle"
        />
      </label>
      {radar !== "todos" ? <p className="mt-2 text-xs text-subtle">{RADAR_HINT[radar]}</p> : null}

      {filtered.length === 0 ? (
        <div className="mt-10 max-w-md rounded-[14px] bg-surface px-5 py-10 shadow-(--shadow-border)">
          <h2 className="font-display text-xl font-normal tracking-tight">Nada neste filtro</h2>
          <p className="mt-2 text-sm text-muted">{emptyWhy}</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={resetFilters}
              className="pressable h-12 min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
            >
              Limpar filtro e busca
            </button>
            {brief ? (
              <button
                type="button"
                onClick={() => setShowDesk(false)}
                className="pressable h-12 min-h-11 rounded-full bg-raised px-5 text-sm text-fg"
              >
                Voltar ao rumo
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
          <section>
            {featured ? (
              <RumoHero
                card={featured}
                goal={brief?.goal}
                kicker={brief ? GOAL_HERO_KICK[brief.goal] : undefined}
                onOpen={open}
              />
            ) : null}
            {rest.length > 0 ? (
              <ol className="mt-9">
                {rest.map((c, i) => (
                  <RumoRow
                    key={c.listing.id}
                    card={c}
                    index={i + 1}
                    goal={brief?.goal}
                    onOpen={open}
                  />
                ))}
              </ol>
            ) : null}
          </section>
          <aside className="lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
            <MapPanel>
              <OrlaMap cards={filtered} selectedId={selectedId} onSelect={open} />
            </MapPanel>
          </aside>
        </div>
      )}
    </main>
  );
}
