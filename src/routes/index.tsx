import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Cadastro } from "@/components/cadastro";
import { Landing } from "@/components/briefing";
import { Objetivos } from "@/components/objetivos";
import { MapPanel, RumoHero, RumoRow } from "@/components/rumo-list";
import { OrlaMap } from "@/components/orla-map";
import { CITY } from "@/data/market";
import { GOAL_LABEL, matchBrief, reading, type Brief } from "@/lib/brief";
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
  const matches = useMemo(() => matchBrief(brief), [brief]);
  const text = useMemo(() => reading(brief, matches), [brief, matches]);
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
  const rest = matches.slice(1);

  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
        <section>
          <h1 className="font-display text-[2rem] font-normal leading-tight tracking-tight md:text-[34px]">
            {GOAL_LABEL[brief.goal]}
          </h1>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted">{text}</p>
          <p className="mt-2 mb-7 flex items-center gap-2.5 text-[12.5px] text-subtle">
            <span>{matches.length} imóveis</span>
            <span className="size-0.5 rounded-full bg-subtle/50" />
            <span>ordenados por aderência</span>
          </p>

          {matches[0] ? (
            <RumoHero card={matches[0].card} why={matches[0].why} onOpen={open} />
          ) : (
            <p className="rounded-[14px] bg-surface px-5 py-10 text-sm text-muted shadow-(--shadow-border)">
              Nenhum sinal neste rumo.
            </p>
          )}

          {rest.length > 0 ? (
            <ol className="mt-9">
              {rest.map((m, i) => (
                <RumoRow key={m.card.listing.id} card={m.card} index={i + 1} onOpen={open} />
              ))}
            </ol>
          ) : null}

          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-3">
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
        </section>

        <aside className="lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
          <MapPanel>
            <OrlaMap cards={cards} selectedId={selectedId} onSelect={open} />
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
    return LISTINGS_SCORED.filter((c) => {
      if (radar !== "todos" && !c.listing.radars.includes(radar) && c.primary !== radar) {
        return false;
      }
      if (!q) return true;
      const blob = `${c.listing.title} ${c.listing.street} ${c.nb.name} ${c.listing.type}`;
      return blob.toLowerCase().includes(q);
    });
  }, [radar, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const open = (id: string) => {
    select(id);
    void navigate({ to: "/imovel/$id", params: { id } });
  };

  return (
    <main className="mx-auto max-w-[1240px] px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <header className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.14em] text-subtle">
          João Pessoa · {CITY.sampleDate} · {CITY.refresh}
        </p>
        <h1 className="mt-2 font-display text-[2rem] font-normal leading-tight tracking-tight md:text-[34px]">
          Mesa completa
        </h1>
        {brief ? (
          <button
            type="button"
            onClick={() => setShowDesk(false)}
            className="mt-3 text-sm text-accent"
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
          className="h-11 w-full rounded-lg bg-raised pl-10 pr-3 text-sm text-fg outline-none placeholder:text-subtle"
        />
      </label>
      {radar !== "todos" ? <p className="mt-2 text-xs text-subtle">{RADAR_HINT[radar]}</p> : null}

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-[14px] bg-surface px-5 py-10 text-sm text-muted shadow-(--shadow-border)">
          Nenhum sinal com esse filtro.
        </p>
      ) : (
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
          <section>
            {featured ? <RumoHero card={featured} onOpen={open} /> : null}
            {rest.length > 0 ? (
              <ol className="mt-9">
                {rest.map((c, i) => (
                  <RumoRow key={c.listing.id} card={c} index={i + 1} onOpen={open} />
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


