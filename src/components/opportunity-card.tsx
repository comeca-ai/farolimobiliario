import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Facade } from "@/components/facade";
import { ScoreBar } from "@/components/score-bar";
import { compactBrl } from "@/lib/format";
import { RADAR_LABEL } from "@/lib/labels";
import { punch, type Scorecard } from "@/lib/score";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

export function OpportunityCard({
  card,
  rank,
  size = "poster",
}: {
  card: Scorecard;
  rank: number;
  size?: "hero" | "poster";
}) {
  const { listing, nb, primary, score } = card;
  const watched = useDesk((s) => s.watched.includes(listing.id));
  const toggleWatch = useDesk((s) => s.toggleWatch);
  const select = useDesk((s) => s.select);
  const hit = punch(card);
  const hero = size === "hero";

  return (
    <article className="relative overflow-hidden rounded-2xl bg-surface shadow-(--shadow-border) transition-[box-shadow] duration-150 hover:shadow-(--shadow-border-hover)">
      <Link
        to="/imovel/$id"
        params={{ id: listing.id }}
        onClick={() => select(listing.id)}
        className="pressable block min-h-11"
      >
        <div className={cn("relative overflow-hidden bg-raised", hero ? "h-80 md:h-96" : "h-52 md:h-56")}>
          <Facade seed={listing.facade} type={listing.type} />
          <div className="poster-wash absolute inset-0" />
          <span className="absolute left-4 top-4 font-display text-sm tabular-nums text-accent">
            {String(rank).padStart(2, "0")}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <p className="text-xs uppercase tracking-widest text-accent">
              {RADAR_LABEL[primary]}
            </p>
            <p
              className={cn(
                "mt-1 font-display leading-none tracking-tight text-fg",
                hero ? "text-6xl md:text-7xl" : "text-5xl",
                primary === "preco" && card.discount >= 0.12 && "text-deal",
                primary === "airbnb" && card.strYield >= 0.08 && "text-deal",
                primary === "rua" && "text-warn",
              )}
            >
              {hit.value}
            </p>
            <p className="mt-2 text-sm text-muted">{hit.caption}</p>
            <h3
              className={cn(
                "mt-4 font-display leading-snug text-balance text-fg",
                hero ? "text-2xl md:text-3xl" : "text-xl",
              )}
            >
              {listing.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
            </p>
            <ScoreBar score={score} className="mt-4" />
          </div>
        </div>
      </Link>
      <button
        type="button"
        aria-label={watched ? "Remover da mesa" : "Marcar na mesa"}
        onClick={() => toggleWatch(listing.id)}
        className="pressable absolute right-2 top-2 flex size-11 items-center justify-center rounded-lg bg-bg/70 text-muted backdrop-blur-sm hover:text-fg"
      >
        <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
      </button>
    </article>
  );
}
