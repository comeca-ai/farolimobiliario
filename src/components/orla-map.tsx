import { NEIGHBORHOODS } from "@/data/market";
import type { Scorecard } from "@/lib/score";

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
}: {
  cards: Scorecard[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
      <svg viewBox="0 0 100 100" className="block h-[240px] w-full md:h-[min(72vh,640px)]" role="img">
        <title>Orla leste de João Pessoa, Atlântico à direita</title>
        <rect width="100" height="100" fill="#0e1312" />
        <path
          d="M78 0 C80 12 76 22 79 34 C82 48 77 60 80 72 C83 86 79 94 81 100 L100 100 L100 0 Z"
          fill="#15201e"
        />
        <path
          d="M78 0 C80 12 76 22 79 34 C82 48 77 60 80 72 C83 86 79 94 81 100"
          fill="none"
          stroke="#c5cec8"
          strokeOpacity="0.35"
          strokeWidth="0.4"
        />
        {NEIGHBORHOODS.map((n) => (
          <text
            key={n.id}
            x={xOf(n.lng) - 1.2}
            y={yOf(n.lat) - 2.2}
            fill="#8f9691"
            fontSize="2.1"
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
              ? "#c4b08a"
              : c.primary === "airbnb"
                ? "#8fa892"
                : "#c5cec8";
          return (
            <g
              key={c.listing.id}
              className="cursor-pointer"
              onClick={() => onSelect(c.listing.id)}
            >
              <circle
                cx={xOf(c.listing.lng)}
                cy={yOf(c.listing.lat)}
                r={active ? 2.4 : 1.5}
                fill={fill}
                opacity={active ? 1 : 0.85}
              />
              {active ? (
                <circle
                  cx={xOf(c.listing.lng)}
                  cy={yOf(c.listing.lat)}
                  r="4.2"
                  fill="none"
                  stroke={fill}
                  strokeOpacity="0.45"
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute right-3 top-3 text-[10px] uppercase tracking-[0.18em] text-subtle">
        Atlântico
      </div>
      <div className="pointer-events-none absolute bottom-3 left-3 flex gap-3 text-[10px] text-muted">
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
      <p className="pointer-events-none absolute left-3 top-3 text-[10px] uppercase tracking-[0.18em] text-subtle">
        Norte · Bessa
      </p>
    </div>
  );
}
