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
  highlight = 3,
}: {
  cards: Scorecard[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
  highlight?: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-ground">
      <svg
        viewBox="0 0 100 100"
        className={cn("block w-full", compact ? "h-44" : "aspect-[4/5] h-auto max-h-[min(52vh,440px)]")}
        role="img"
      >
        <title>Orla leste de João Pessoa, Atlântico à direita</title>
        <rect width="100" height="100" fill="var(--color-ground)" />
        <path
          d="M78 0 C80 12 76 22 79 34 C82 48 77 60 80 72 C83 86 79 94 81 100 L100 100 L100 0 Z"
          fill="var(--color-sky)"
        />
        <path
          d="M78 0 C80 12 76 22 79 34 C82 48 77 60 80 72 C83 86 79 94 81 100"
          fill="none"
          stroke="var(--color-surface)"
          strokeWidth="0.6"
        />
        {NEIGHBORHOODS.map((n) => (
          <text
            key={n.id}
            x={xOf(n.lng) - 1.4}
            y={yOf(n.lat) - 2.4}
            fill="var(--color-subtle)"
            fontSize="2.2"
            textAnchor="end"
            fontFamily="Instrument Sans, sans-serif"
          >
            {n.name}
          </text>
        ))}
        {cards.map((c, i) => {
          const active = c.listing.id === selectedId;
          const main = i < highlight;
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
                r={active ? 2.8 : main ? 2.2 : 1.5}
                fill={main ? "var(--color-accent)" : "var(--color-fg)"}
                opacity={main ? 1 : 0.35}
              />
              {active ? (
                <circle
                  cx={xOf(c.listing.lng)}
                  cy={yOf(c.listing.lat)}
                  r="5"
                  fill="none"
                  stroke="var(--color-surface)"
                  strokeWidth="0.7"
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <p className="pointer-events-none absolute right-3 top-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-sea">
        Atlântico
      </p>
      <p className="pointer-events-none absolute left-3 top-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
        Norte
      </p>
      <div className="flex flex-wrap gap-4 px-3 pb-3 pt-1 text-[13px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-accent" /> Encaixes principais
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-fg/35" /> Outros sinais aderentes
        </span>
      </div>
    </div>
  );
}
