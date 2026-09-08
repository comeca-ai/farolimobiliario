import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { useMemo, useState } from "react";
import { LISTING_BY_ID, type Listing } from "@/data/listings";
import { brl, brl2, pct, pctAbs } from "@/lib/format";
import { SOURCE_LABEL, TYPE_LABEL } from "@/lib/labels";
import { punchForGoal, rumoKickerFor, type LifeGoal } from "@/lib/brief";
import { analyze, punch } from "@/lib/score";
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
      <main className="mx-auto max-w-xl px-6 py-16 text-center">
        <h1 className="font-display text-[32px]">Sinal não encontrado</h1>
        <Link to="/" className="mt-4 inline-flex h-11 items-center text-sm font-semibold text-accent">
          Voltar ao rumo
        </Link>
      </main>
    );
  }
  return <ImovelBody listing={listing} />;
}

function ImovelBody({ listing }: { listing: Listing }) {
  const watched = useDesk((s) => s.watched.includes(listing.id));
  const toggleWatch = useDesk((s) => s.toggleWatch);
  const goal = useDesk((s) => s.brief?.goal);
  const base = analyze(listing);
  const [occ, setOcc] = useState(() => Math.round(base.nb.strOccupancy * 100));
  const [adr, setAdr] = useState(() =>
    Math.round(base.strGross / Math.max(365 * base.nb.strOccupancy, 1)),
  );
  const live = useMemo(
    () => analyze(listing, { occupancy: occ / 100, adr }),
    [listing, occ, adr],
  );
  const hit = goal ? punchForGoal(live, goal) : punch(live);

  return (
    <main className="mx-auto max-w-[760px] px-4 pb-20 pt-6 sm:px-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex h-11 items-center gap-2 text-sm font-semibold text-subtle">
          <span aria-hidden>←</span>
          Rumo
        </Link>
        <button
          type="button"
          onClick={() => toggleWatch(listing.id)}
          className="flex size-11 items-center justify-center text-muted hover:text-fg"
          aria-label="Marcar"
        >
          <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
        </button>
      </div>

      <p className="eyebrow mt-8 text-accent">
        {goal ? rumoKickerFor(live, goal) : rumoKickerFor(live, "patrimonio")} ·{" "}
        {TYPE_LABEL[listing.type]}
      </p>
      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-display text-[clamp(1.55rem,3vw,1.85rem)] leading-snug tracking-tight">
            {listing.title}
          </h1>
          <p className="mt-2 text-sm text-subtle">{listing.street}</p>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="metric text-[clamp(2.4rem,5vw,2.75rem)] leading-none">{hit.value}</p>
          <p className="mt-1.5 max-w-[26ch] text-xs leading-snug text-muted sm:ml-auto">
            {hit.caption}
          </p>
        </div>
      </div>

      {listing.risks[0] ? (
        <p className="mt-6 text-[15px] leading-snug text-muted">
          <strong className="font-semibold text-fg">O problema à vista.</strong> {listing.risks[0]}
        </p>
      ) : null}

      <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-muted">{listing.thesis}</p>

      <GoalLab goal={goal} listing={listing} live={live} occ={occ} adr={adr} setOcc={setOcc} setAdr={setAdr} />

      <section className="mt-10">
        <h2 className="font-display text-[22px] leading-tight">Riscos</h2>
        <ul className="mt-3 space-y-2">
          {listing.risks.map((r) => (
            <li key={r} className="border-l-2 border-accent/40 pl-3 text-[15px] text-muted">
              {r}
            </li>
          ))}
        </ul>
      </section>

      <aside className="mt-10 grid gap-3 md:grid-cols-2">
        <dl className="overflow-hidden rounded-[14px] border border-line bg-surface">
          <div className="grid grid-cols-2 text-sm">
            <Side k="Área" v={`${listing.area} m²`} />
            <Side k="Ask / m²" v={brl2.format(live.askM2)} />
            <Side k="Quartos" v={String(listing.rooms)} />
            <Side k="Vagas" v={String(listing.parking)} />
            <Side k="Ano" v={String(listing.year)} />
            <Side k="Mar" v={`${listing.seaMeters} m`} />
            <Side k="Dias no ar" v={String(listing.daysListed)} />
            <Side k="Portais" v={String(listing.portalCount)} />
          </div>
        </dl>
        <div className="rounded-[14px] border border-line bg-surface p-5">
          <p className="eyebrow text-subtle">Fontes</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {listing.sources.map((s) => (
              <li key={s} className="rounded-full bg-raised px-3 py-2 text-xs font-medium text-muted">
                {SOURCE_LABEL[s]}
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-5 text-subtle">Bairro {live.nb.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{live.nb.note}</p>
          <p className="mt-2 text-[13px] text-subtle">
            m² {brl.format(live.nb.m2)} · {pct(live.nb.yoy)} em 12 meses · STR{" "}
            {pctAbs(live.nb.strOccupancy)} · ADR {brl.format(live.nb.strAdr)}
          </p>
        </div>
      </aside>
    </main>
  );
}

function GoalLab({
  goal,
  listing,
  live,
  occ,
  adr,
  setOcc,
  setAdr,
}: {
  goal?: LifeGoal;
  listing: Listing;
  live: ReturnType<typeof analyze>;
  occ: number;
  adr: number;
  setOcc: (n: number) => void;
  setAdr: (n: number) => void;
}) {
  if (goal === "morar") {
    return (
      <section className="mt-10 rounded-[14px] border border-line bg-surface p-5 md:p-6">
        <h2 className="font-display text-[22px] leading-tight">Para viver</h2>
        <p className="mt-1 text-sm text-subtle">Uso próprio. Sem conta de hóspede.</p>
        <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Metric label="Ask" value={brl.format(listing.ask)} />
          <Metric label="Quartos" value={listing.rooms === 1 ? "1 quarto" : `${listing.rooms} quartos`} />
          <Metric label="Área" value={`${listing.area} m²`} />
          <Metric label="Condomínio" value={`${brl.format(listing.condo)}/mês`} />
        </dl>
      </section>
    );
  }

  if (goal === "aposentar") {
    return (
      <section className="mt-10 rounded-[14px] border border-line bg-surface p-5 md:p-6">
        <h2 className="font-display text-[22px] leading-tight">Contrato longo</h2>
        <p className="mt-1 text-sm text-subtle">
          Aluguel anual, já descontado condomínio e IPTU. Pouca gestão.
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Metric label="Yield LTR" value={pctAbs(Math.max(live.ltrYield, 0))} tone />
          <Metric label="NOI anual" value={brl.format(live.ltrNoi)} />
          <Metric label="Condomínio" value={`${brl.format(listing.condo)}/mês`} />
          <Metric label="IPTU" value={`${brl.format(listing.iptu)}/ano`} />
        </dl>
      </section>
    );
  }

  if (goal === "patrimonio") {
    return (
      <section className="mt-10 rounded-[14px] border border-line bg-surface p-5 md:p-6">
        <h2 className="font-display text-[22px] leading-tight">O spread</h2>
        <p className="mt-1 text-sm text-subtle">
          Pedido contra o m² justo do bairro × estado do imóvel.
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Metric label="Ask" value={brl.format(listing.ask)} />
          <Metric
            label="Justo do bairro"
            value={brl.format(live.fair)}
            hint={`${brl.format(live.fairM2)}/m² × estado`}
          />
          <Metric label="Desconto" value={pct(live.discount)} tone={live.discount >= 0.12} />
          <Metric label="Bairro / 12m" value={pct(live.nb.yoy)} />
        </dl>
      </section>
    );
  }

  return (
    <section className="mt-10 rounded-[14px] border border-line bg-surface p-5 md:p-6">
      <h2 className="font-display text-[22px] leading-tight">Laboratório Airbnb</h2>
      <p className="mt-1 text-sm text-subtle">
        Arraste ocupação e diária. Plataforma, limpeza, condomínio e IPTU já saem do NOI.
      </p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Slider label="Ocupação" value={occ} min={25} max={85} suffix="%" onChange={setOcc} />
        <Slider label="Diária" value={adr} min={120} max={520} prefix="R$ " onChange={setAdr} />
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Metric label="Receita bruta" value={brl.format(live.strGross)} />
        <Metric label="NOI" value={brl.format(live.strNoi)} />
        <Metric label="Yield STR" value={pctAbs(Math.max(live.strYield, 0))} tone={live.strYield >= 0.08} />
        <Metric
          label="vs aluguel longo"
          value={live.strVsLtr > 0 ? `${live.strVsLtr.toFixed(1)}×` : "—"}
        />
      </dl>
      <p className="mt-4 text-[13px] text-subtle">
        Aluguel tradicional: {brl.format(live.ltrNoi)}/ano ({pctAbs(Math.max(live.ltrYield, 0))} a.a.).{" "}
        {live.paybackMonths
          ? `Payback ~${Math.round(live.paybackMonths)} meses.`
          : "NOI negativo neste cenário."}{" "}
        Condomínio {brl.format(listing.condo)}/mês · IPTU {brl.format(listing.iptu)}/ano.
      </p>
    </section>
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
  tone?: boolean;
}) {
  return (
    <div className="rounded-[10px] border border-line bg-bg px-3 py-3">
      <p className="eyebrow text-subtle">{label}</p>
      <p className={cn("mt-1 font-display text-lg tabular-nums", tone && "text-deal")}>{value}</p>
      {hint ? <p className="mt-0.5 text-xs text-subtle">{hint}</p> : null}
    </div>
  );
}

function Side({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-line px-4 py-3 last:border-0">
      <dt className="eyebrow text-subtle">{k}</dt>
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
      <span className="flex items-center justify-between text-sm text-muted">
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
