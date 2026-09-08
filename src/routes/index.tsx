import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Cadastro } from "@/components/cadastro";
import { Landing } from "@/components/briefing";
import { Objetivos } from "@/components/objetivos";
import { MapPanel, RumoHero, RumoRow, RumoSwitch } from "@/components/rumo-list";
import { OrlaMap } from "@/components/orla-map";
import { CITY, NEIGHBORHOOD_BY_ID } from "@/data/market";
import {
  GOAL_DEFAULTS,
  GOAL_HEADLINE,
  GOAL_LABEL,
  GOAL_MAP_CAPTION,
  GOAL_SORT,
  LIST_ON_RUMO,
  heroKicker,
  heroWhy,
  inAskedPlace,
  leadFor,
  listBrief,
  type Brief,
  type LifeGoal,
} from "@/lib/brief";
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
  const [door, setDoor] = useState<"landing" | "cadastro">("landing");

  if (!lead) {
    if (door === "cadastro") {
      return <Cadastro onSubmit={setLead} onBack={() => setDoor("landing")} />;
    }
    return <Landing onEnter={() => setDoor("cadastro")} />;
  }
  if (!brief) {
    return <Objetivos onAgree={setBrief} />;
  }
  if (showDesk) {
    return <MesaBoard />;
  }
  return <Reading brief={brief} />;
}

function Reading({ brief }: { brief: Brief }) {
  const matches = useMemo(() => listBrief(brief, LIST_ON_RUMO), [brief]);
  const text = useMemo(() => leadFor(brief), [brief]);
  const clearBrief = useDesk((s) => s.clearBrief);
  const setBrief = useDesk((s) => s.setBrief);
  const setShowDesk = useDesk((s) => s.setShowDesk);
  const selectedId = useDesk((s) => s.selectedId);
  const select = useDesk((s) => s.select);
  const navigate = useNavigate();
  const cards = matches.map((m) => m.card);
  const open = (id: string) => {
    select(id);
    void navigate({ to: "/imovel/$id", params: { id } });
  };
  const rest = matches.slice(1);
  const switchGoal = (goal: LifeGoal) => {
    setBrief({
      ...brief,
      goal,
      age: GOAL_DEFAULTS[goal].age,
      years: GOAL_DEFAULTS[goal].years,
    });
  };

  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-20 pt-8 sm:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
        <section className="min-w-0">
          <h1 className="font-display text-[clamp(1.85rem,3.4vw,2.15rem)] leading-[1.15] tracking-tight">
            {GOAL_HEADLINE[brief.goal]}
          </h1>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted">{text}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-faint">
            <span>
              {matches.length} {matches.length === 1 ? "imóvel" : "imóveis"}
            </span>
            <span aria-hidden className="size-[3px] rounded-full bg-sand" />
            <span>{GOAL_SORT[brief.goal]}</span>
          </div>
          <div className="mt-5">
            <RumoSwitch value={brief.goal} onChange={switchGoal} />
          </div>

          <div className="mt-7 flex flex-col gap-9">
            {matches[0] ? (
              <RumoHero
                card={matches[0].card}
                why={heroWhy(matches[0].card, brief.goal)}
                goal={brief.goal}
                kicker={heroKicker(matches[0].card, brief.goal)}
                onOpen={open}
              />
            ) : (
              <p className="rounded-[14px] border border-line bg-surface px-5 py-10 text-sm text-muted">
                Nenhum sinal neste rumo.
              </p>
            )}

            {rest.length > 0 ? (
              <ol>
                {rest.map((m, i) => (
                  <RumoRow
                    key={m.card.listing.id}
                    card={m.card}
                    index={i + 1}
                    goal={brief.goal}
                    onOpen={open}
                  />
                ))}
                <li className="border-t border-line" />
              </ol>
            ) : null}
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <button
              type="button"
              onClick={clearBrief}
              className="pressable inline-flex h-11 items-center text-sm font-semibold text-subtle hover:text-fg"
            >
              Refazer o rumo
            </button>
            <button
              type="button"
              onClick={() => setShowDesk(true)}
              className="pressable inline-flex h-11 items-center text-sm font-semibold text-subtle hover:text-fg"
            >
              Ver todas as opções
            </button>
          </div>
        </section>

        <aside className="min-w-0 lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
          <MapPanel caption={GOAL_MAP_CAPTION[brief.goal]}>
            <OrlaMap
              cards={cards}
              selectedId={selectedId}
              onSelect={open}
              highlight={cards.length}
              goal={brief.goal}
            />
          </MapPanel>
        </aside>
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

  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-20 pt-8 sm:px-8">
      <header className="max-w-2xl">
        <p className="eyebrow text-subtle">
          {brief?.places?.length
            ? brief.places.map((id) => NEIGHBORHOOD_BY_ID[id]?.name ?? id).join(", ")
            : "João Pessoa"}{" "}
          · {CITY.sampleDate} · {CITY.refresh}
        </p>
        <h1 className="mt-3 font-display text-[clamp(1.85rem,3.4vw,2.15rem)] leading-snug tracking-tight">
          Todas as opções
        </h1>
        {brief ? (
          <button
            type="button"
            onClick={() => setShowDesk(false)}
            className="mt-3 text-sm font-semibold text-accent"
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
              "pressable h-10 shrink-0 rounded-full px-4 text-sm",
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
          className="h-11 w-full rounded-xl border border-line bg-paper pl-10 pr-3 text-sm text-fg outline-none focus:border-fg"
        />
      </label>
      {radar !== "todos" ? <p className="mt-2 text-xs text-subtle">{RADAR_HINT[radar]}</p> : null}

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-[14px] border border-line bg-surface px-5 py-10 text-sm text-muted">
          Nenhum sinal com esse filtro.
        </p>
      ) : (
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
          <section className="min-w-0">
            {featured ? (
              <RumoHero
                card={featured}
                goal={brief?.goal}
                kicker={brief ? heroKicker(featured, brief.goal) : undefined}
                onOpen={open}
              />
            ) : null}
            {rest.length > 0 ? (
              <ol className="mt-2">
                {rest.map((c, i) => (
                  <RumoRow key={c.listing.id} card={c} index={i + 1} goal={brief?.goal} onOpen={open} />
                ))}
                <li className="border-t border-line" />
              </ol>
            ) : null}
          </section>
          <aside className="min-w-0 lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
            <MapPanel caption={`${filtered.length} sinais · mapa esquemático`}>
              <OrlaMap
                cards={filtered}
                selectedId={selectedId}
                onSelect={open}
                highlight={5}
                goal={brief?.goal}
              />
            </MapPanel>
          </aside>
        </div>
      )}
    </main>
  );
}
