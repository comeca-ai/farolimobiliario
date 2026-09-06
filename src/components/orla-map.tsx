import { NEIGHBORHOODS } from "@/data/market";
import type { Scorecard } from "@/lib/score";
import { cn } from "@/lib/utils";

const LAT_N = -7.03;
const LAT_S = -7.175;
const LNG_W = -34.888;
const LNG_E = -34.816;

function xOf(lng: number) {
  return ((lng - LNG_W) / (LNG_E - LNG_W)) * 100;
}
function yOf(lat: number) {
  return ((lat - LAT_N) / (LAT_S - LAT_N)) * 100;
}

export function OrlaMap({
  cards,
  selectedId,
  onSelect,
  compact,
}: {
  cards: Scorecard[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#f1eada]">
      <svg
        viewBox="0 0 100 100"
        className={cn("block w-full", compact ? "h-44" : "h-56 md:h-[min(48vh,400px)]")}
        role="img"
      >
        <title>Orla leste de João Pessoa, Atlântico à direita</title>
        <rect width="100" height="100" fill="var(--color-ground)" />
        <path
          d="M78 0 C80 12 76 22 79 34 C82 48 77 60 80 72 C83 86 79 94 81 100 L100 100 L100 0 Z"
          fill="var(--color-sea)"
        />
        <path
          d="M78 0 C80 12 76 22 79 34 C82 48 77 60 80 72 C83 86 79 94 81 100"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.55"
          strokeWidth="0.5"
        />
        {NEIGHBORHOODS.map((n) => (
          <text
            key={n.id}
            x={xOf(n.lng) - 1.4}
            y={yOf(n.lat) - 2.4}
            fill="var(--color-muted)"
            fontSize="2.2"
            textAnchor="end"
            fontFamily="Figtree, sans-serif"
          >
            {n.name}
          </text>
        ))}
        {cards.map((c) => {
          const active = c.listing.id === selectedId;
          const fill =
            c.primary === "rua"
              ? "var(--color-warn)"
              : c.primary === "airbnb"
                ? "var(--color-deal)"
                : "var(--color-accent)";
          return (
            <g
              key={c.listing.id}
              className="cursor-pointer"
              onClick={() => onSelect(c.listing.id)}
            >
              <circle
                cx={xOf(c.listing.lng)}
                cy={yOf(c.listing.lat)}
                r="5.5"
                fill="transparent"
              />
              <circle
                cx={xOf(c.listing.lng)}
                cy={yOf(c.listing.lat)}
                r={active ? 2.6 : 1.8}
                fill={fill}
                opacity={active ? 1 : 0.9}
              />
              {active ? (
                <circle
                  cx={xOf(c.listing.lng)}
                  cy={yOf(c.listing.lat)}
                  r="5"
                  fill="none"
                  stroke={fill}
                  strokeOpacity="0.5"
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <p className="pointer-events-none absolute right-3 top-3 text-xs uppercase tracking-widest text-subtle">
        Atlântico
      </p>
      <p className="pointer-events-none absolute left-3 top-3 text-xs uppercase tracking-widest text-subtle">
        Norte
      </p>
      <div className="pointer-events-none absolute bottom-3 left-3 flex gap-3 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-accent" /> Preço
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-deal" /> Airbnb
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-warn" /> Rua
        </span>
      </div>
    </div>
  );
}
