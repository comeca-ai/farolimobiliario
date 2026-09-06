import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { useMemo, useState } from "react";
import { Facade } from "@/components/facade";
import { LISTING_BY_ID, type Listing } from "@/data/listings";
import { brl, brl2, pct, pctAbs } from "@/lib/format";
import { RADAR_LABEL, SOURCE_LABEL, TYPE_LABEL } from "@/lib/labels";
import { analyze } from "@/lib/score";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/imovel/$id")({
  component: ImovelPage,
});

function ImovelPage() {
  const { id } = Route.useParams();
  const listing = LISTING_BY_ID[id];
  if (!listing) {
    return (
      <main className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl">Sinal não encontrado</h1>
        <Link to="/" className="mt-4 inline-block text-sm text-accent">
          Voltar à mesa
        </Link>
      </main>
    );
  }
  return <ImovelBody listing={listing} />;
}

function ImovelBody({ listing }: { listing: Listing }) {
  const watched = useDesk((s) => s.watched.includes(listing.id));
  const toggleWatch = useDesk((s) => s.toggleWatch);
  const base = analyze(listing);
  const [occ, setOcc] = useState(() => Math.round(base.nb.strOccupancy * 100));
  const [adr, setAdr] = useState(() =>
    Math.round(base.strGross / Math.max(365 * base.nb.strOccupancy, 1)),
  );
  const live = useMemo(
    () => analyze(listing, { occupancy: occ / 100, adr }),
    [listing, occ, adr],
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-10">
      <Link to="/" className="text-xs text-muted hover:text-fg">
        Mesa
      </Link>
      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_300px]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {RADAR_LABEL[live.primary]} · {TYPE_LABEL[listing.type]} · {live.nb.name}
          </p>
          <div className="mt-2 flex items-start justify-between gap-3">
            <h1 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
              {listing.title}
            </h1>
            <button
              type="button"
              onClick={() => toggleWatch(listing.id)}
              className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-raised text-muted hover:text-fg"
              aria-label="Marcar"
            >
              <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
            </button>
          </div>
          <p className="mt-2 text-sm text-muted">{listing.street}</p>

          <dl className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Metric label="Ask" value={brl.format(listing.ask)} />
            <Metric
              label="Justo do bairro"
              value={brl.format(live.fair)}
              hint={`${brl.format(live.fairM2)}/m² × estado`}
            />
            <Metric
              label="Desconto"
              value={pct(live.discount)}
              tone={live.discount >= 0.12 ? "deal" : undefined}
            />
            <Metric label="Score Farol" value={String(Math.round(live.score))} />
          </dl>

          <section className="mt-8">
            <h2 className="font-display text-xl">Tese</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{listing.thesis}</p>
          </section>

          <section className="mt-8 rounded-2xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,228,0.08)] md:p-6">
            <h2 className="font-display text-xl">Laboratório Airbnb</h2>
            <p className="mt-1 text-xs text-subtle">
              Ocupação e diária partem do bairro (AirDNA / GuestFavorites) e da distância do
              mar. Arraste para estressar o yield. Plataforma 14%, limpeza por reserva, condomínio
              e IPTU já descontados.
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Slider
                label="Ocupação"
                value={occ}
                min={25}
                max={85}
                suffix="%"
                onChange={setOcc}
              />
              <Slider
                label="Diária"
                value={adr}
                min={120}
                max={520}
                prefix="R$ "
                onChange={setAdr}
              />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Metric label="Receita bruta" value={brl.format(live.strGross)} />
              <Metric label="NOI" value={brl.format(live.strNoi)} />
              <Metric
                label="Yield STR"
                value={pctAbs(Math.max(live.strYield, 0))}
                tone={live.strYield >= 0.08 ? "deal" : live.strYield < 0 ? "risk" : undefined}
              />
              <Metric
                label="vs aluguel longo"
                value={live.strVsLtr > 0 ? `${live.strVsLtr.toFixed(1)}×` : "—"}
              />
            </dl>
            <p className="mt-4 text-xs text-subtle">
              Aluguel tradicional estimado: {brl.format(live.ltrNoi)}/ano (
              {pctAbs(Math.max(live.ltrYield, 0))} a.a.).{" "}
              {live.paybackMonths
                ? `Payback operacional ~${Math.round(live.paybackMonths)} meses no cenário atual.`
                : "NOI negativo neste cenário."}{" "}
              Condomínio {brl.format(listing.condo)}/mês · IPTU {brl.format(listing.iptu)}/ano.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl">Riscos</h2>
            <ul className="mt-3 space-y-2">
              {listing.risks.map((r) => (
                <li key={r} className="border-l border-risk/40 pl-3 text-sm text-muted">
                  {r}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-2xl bg-raised">
            <div className="h-36">
              <Facade seed={listing.facade} type={listing.type} />
            </div>
            <dl className="grid grid-cols-2 gap-px bg-line text-sm">
              <Side k="Área" v={`${listing.area} m²`} />
              <Side k="Ask / m²" v={brl2.format(live.askM2)} />
              <Side k="Quartos" v={String(listing.rooms)} />
              <Side k="Vagas" v={String(listing.parking)} />
              <Side k="Ano" v={String(listing.year)} />
              <Side k="Mar" v={`${listing.seaMeters} m`} />
              <Side k="Dias no ar" v={String(listing.daysListed)} />
              <Side k="Portais" v={String(listing.portalCount)} />
            </dl>
          </div>
          <div className="rounded-2xl bg-surface p-4 shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
            <p className="text-[10px] uppercase tracking-[0.16em] text-subtle">Fontes</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {listing.sources.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-raised px-2.5 py-1 text-xs text-muted"
                >
                  {SOURCE_LABEL[s]}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-subtle">
              Bairro {live.nb.name}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{live.nb.note}</p>
            <p className="mt-2 text-xs text-subtle">
              m² {brl.format(live.nb.m2)} · {pct(live.nb.yoy)} em 12 meses · STR{" "}
              {pctAbs(live.nb.strOccupancy)} · ADR {brl.format(live.nb.strAdr)}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Metric({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "deal" | "risk";
}) {
  return (
    <div className="rounded-xl bg-surface px-3 py-3 shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
      <p className="text-[10px] uppercase tracking-[0.14em] text-subtle">{label}</p>
      <p
        className={cn(
          "mt-1 font-display text-lg tabular-nums",
          tone === "deal" && "text-deal",
          tone === "risk" && "text-risk",
        )}
      >
        {value}
      </p>
      {hint ? <p className="mt-0.5 text-[10px] text-subtle">{hint}</p> : null}
    </div>
  );
}

function Side({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-surface px-3 py-2.5">
      <dt className="text-[10px] uppercase tracking-[0.12em] text-subtle">{k}</dt>
      <dd className="tabular-nums text-sm">{v}</dd>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
  suffix,
  prefix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-xs text-muted">
        {label}
        <span className="tabular-nums text-fg">
          {prefix}
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-11 w-full accent-accent"
      />
    </label>
  );
}
