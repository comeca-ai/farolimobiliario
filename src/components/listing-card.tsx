import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Facade } from "@/components/facade";
import { compactBrl } from "@/lib/format";
import { RADAR_LABEL, TYPE_LABEL } from "@/lib/labels";
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

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgba(236,234,228,0.08)]",
        active && "shadow-[0_0_0_1px_rgba(197,206,200,0.45)]",
      )}
    >
      <Link
        to="/imovel/$id"
        params={{ id: listing.id }}
        onClick={() => select(listing.id)}
        className="grid min-h-11 grid-cols-[7rem_1fr] transition-opacity duration-150 active:opacity-80 sm:grid-cols-[8rem_1fr]"
      >
        <div className="min-h-28 bg-raised sm:min-h-full">
          <Facade seed={listing.facade} type={listing.type} />
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-1 p-3 pr-12 sm:p-4 sm:pr-14">
          <p className="text-xs uppercase tracking-widest text-muted">
            {RADAR_LABEL[primary]} · {TYPE_LABEL[listing.type]}
          </p>
          <h3 className="font-display text-lg leading-snug text-fg">{listing.title}</h3>
          <p className="truncate text-sm text-muted">
            {nb.name} · {listing.area} m² · {compactBrl(listing.ask)}
          </p>
          <p
            className={cn(
              "mt-1 font-display text-2xl tabular-nums leading-none",
              (discount >= 0.12 || strYield >= 0.08) && "text-deal",
            )}
          >
            {hit.value}
            <span className="ml-2 font-sans text-xs font-normal tracking-normal text-muted">
              {hit.caption}
            </span>
          </p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={watched ? "Remover da mesa" : "Marcar na mesa"}
        onClick={() => toggleWatch(listing.id)}
        className="absolute right-1 top-1 flex size-11 items-center justify-center rounded-md text-muted hover:text-fg"
      >
        <Bookmark className={cn("size-4", watched && "fill-accent text-accent")} />
      </button>
    </article>
  );
}
