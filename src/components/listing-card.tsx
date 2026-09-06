import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Facade } from "@/components/facade";
import { compactBrl } from "@/lib/format";
import { RADAR_LABEL } from "@/lib/labels";
import { punch, type Scorecard } from "@/lib/score";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ListingCard({
  card,
  active,
}: {
  card: Scorecard;
  active?: boolean;
}) {
  const { listing, nb, discount, strYield, primary } = card;
  const watched = useDesk((s) => s.watched.includes(listing.id));
  const toggleWatch = useDesk((s) => s.toggleWatch);
  const select = useDesk((s) => s.select);
  const hit = punch(card);
  const tone = cn(
    (discount >= 0.12 || strYield >= 0.08) && "text-deal",
    primary === "rua" && "text-warn",
  );

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl bg-surface shadow-(--shadow-border) transition-[box-shadow] duration-150",
        active && "shadow-(--shadow-border-hover)",
      )}
    >
      <Link
        to="/imovel/$id"
        params={{ id: listing.id }}
        onClick={() => select(listing.id)}
        className="pressable grid min-h-11 grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr_auto]"
      >
        <div className="min-h-24 bg-raised">
          <Facade seed={listing.facade} type={listing.type} />
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-1 p-3 pr-12 sm:p-4 sm:pr-4">
          <p className="text-xs uppercase tracking-widest text-muted">{RADAR_LABEL[primary]}</p>
          <h3 className="truncate font-display text-lg leading-snug text-fg">{listing.title}</h3>
          <p className="truncate text-sm text-muted">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </p>
          <p className={cn("mt-1 font-display text-2xl leading-none sm:hidden", tone)}>
            {hit.value}
          </p>
        </div>
        <div className="hidden flex-col items-end justify-center pr-14 sm:flex">
          <p className={cn("font-display text-3xl leading-none tracking-tight", tone)}>
            {hit.value}
          </p>
          <p className="mt-1 max-w-36 text-right text-xs text-muted">{hit.caption}</p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={watched ? "Remover da mesa" : "Marcar na mesa"}
        onClick={() => toggleWatch(listing.id)}
        className="pressable absolute right-1 top-1 flex size-11 items-center justify-center rounded-md text-muted hover:text-fg"
      >
        <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
      </button>
    </article>
  );
}
