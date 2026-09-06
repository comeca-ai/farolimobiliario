import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Facade } from "@/components/facade";
import { compactBrl } from "@/lib/format";
import { RADAR_LABEL, TYPE_LABEL } from "@/lib/labels";
import { punch, type Scorecard } from "@/lib/score";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

export function OpportunityCard({
  card,
  rank,
}: {
  card: Scorecard;
  rank: number;
}) {
  const { listing, nb, primary } = card;
  const watched = useDesk((s) => s.watched.includes(listing.id));
  const toggleWatch = useDesk((s) => s.toggleWatch);
  const select = useDesk((s) => s.select);
  const hit = punch(card);

  return (
    <article className="relative overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
      <Link
        to="/imovel/$id"
        params={{ id: listing.id }}
        onClick={() => select(listing.id)}
        className="block min-h-11 transition-opacity duration-150 active:opacity-80"
      >
        <div className="relative h-40 overflow-hidden bg-raised md:h-44">
          <Facade seed={listing.facade} type={listing.type} />
          <span className="absolute left-3 top-3 font-display text-sm tabular-nums text-accent">
            {String(rank).padStart(2, "0")}
          </span>
        </div>
        <div className="p-4 pb-5 md:p-5">
          <p className="text-xs uppercase tracking-widest text-muted">
            {RADAR_LABEL[primary]} · {TYPE_LABEL[listing.type]}
          </p>
          <p
            className={cn(
              "mt-2 font-display text-5xl leading-none tracking-tight",
              primary === "preco" && card.discount >= 0.12 && "text-deal",
              primary === "airbnb" && card.strYield >= 0.08 && "text-deal",
            )}
          >
            {hit.value}
          </p>
          <p className="mt-2 text-sm text-muted">{hit.caption}</p>
          <h3 className="mt-4 font-display text-xl leading-snug text-fg">{listing.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{listing.thesis}</p>
          <p className="mt-4 text-sm text-accent">Abrir dossiê</p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={watched ? "Remover da mesa" : "Marcar na mesa"}
        onClick={() => toggleWatch(listing.id)}
        className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-lg bg-bg/70 text-muted backdrop-blur-sm hover:text-fg"
      >
        <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
      </button>
    </article>
  );
}
