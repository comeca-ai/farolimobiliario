import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Facade } from "@/components/facade";
import type { Scorecard } from "@/lib/score";
import { brl, pct, pctAbs } from "@/lib/format";
import { RADAR_LABEL, TYPE_LABEL } from "@/lib/labels";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ListingCard({
  card,
  active,
}: {
  card: Scorecard;
  active?: boolean;
}) {
  const { listing, nb, discount, strYield, score, primary } = card;
  const watched = useDesk((s) => s.watched.includes(listing.id));
  const toggleWatch = useDesk((s) => s.toggleWatch);
  const select = useDesk((s) => s.select);

  return (
    <article
      className={cn(
        "grid grid-cols-[96px_1fr] overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,228,0.08)] transition-[box-shadow] duration-150 md:grid-cols-[112px_1fr]",
        active && "shadow-[0_0_0_1px_rgba(197,206,200,0.45)]",
      )}
    >
      <Link
        to="/imovel/$id"
        params={{ id: listing.id }}
        onClick={() => select(listing.id)}
        className="block h-full min-h-[96px] overflow-hidden bg-raised"
      >
        <Facade seed={listing.facade} type={listing.type} />
      </Link>
      <div className="flex min-w-0 flex-col gap-2 p-3 md:p-4">
        <div className="flex items-start justify-between gap-2">
          <Link
            to="/imovel/$id"
            params={{ id: listing.id }}
            onClick={() => select(listing.id)}
            className="min-w-0"
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
              {RADAR_LABEL[primary]} · {TYPE_LABEL[listing.type]}
            </p>
            <h3 className="mt-0.5 font-display text-base leading-snug text-fg">
              {listing.title}
            </h3>
            <p className="mt-0.5 truncate text-xs text-muted">
              {nb.name} · {listing.area} m² · {listing.rooms} q
            </p>
          </Link>
          <button
            type="button"
            aria-label={watched ? "Remover da mesa" : "Marcar na mesa"}
            onClick={() => toggleWatch(listing.id)}
            className="flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:text-fg"
          >
            <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
          </button>
        </div>
        <dl className="grid grid-cols-3 gap-2 text-xs">
          <Stat label="Ask" value={brl.format(listing.ask)} />
          <Stat
            label="vs justo"
            value={pct(discount)}
            tone={discount >= 0.12 ? "deal" : discount < 0 ? "risk" : undefined}
          />
          <Stat
            label="STR a.a."
            value={pctAbs(Math.max(strYield, 0))}
            tone={strYield >= 0.08 ? "deal" : undefined}
          />
        </dl>
        <div className="flex items-center justify-between text-[11px] text-subtle">
          <span>
            {listing.portalCount === 0
              ? "Fora dos portais"
              : `${listing.portalCount} portal${listing.portalCount > 1 ? "is" : ""}`}
            {listing.daysListed <= 14 ? " · fresco" : ` · ${listing.daysListed}d`}
          </span>
          <span className="tabular-nums text-fg">{Math.round(score)}</span>
        </div>
      </div>
    </article>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "deal" | "risk";
}) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.14em] text-subtle">{label}</dt>
      <dd
        className={cn(
          "mt-0.5 font-medium tabular-nums",
          tone === "deal" && "text-deal",
          tone === "risk" && "text-risk",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
