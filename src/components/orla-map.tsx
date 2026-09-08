import { punchForGoal, type LifeGoal } from "@/lib/brief";
import { punch, type Scorecard } from "@/lib/score";
import { NEIGHBORHOODS } from "@/data/market";
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
  goal,
}: {
  cards: Scorecard[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
  highlight?: number;
  goal?: LifeGoal;
}) {
  const activeNb = new Set(cards.map((c) => c.nb.id));

  return (
    <div className="relative overflow-hidden rounded-lg bg-ground">
      <svg
        viewBox="0 0 100 118"
        className={cn(
          "block w-full",
          compact ? "h-44" : "aspect-[100/118] h-auto max-h-[min(52vh,440px)]",
        )}
        role="img"
      >
        <title>Orla leste de João Pessoa, Atlântico à direita</title>
        <rect width="100" height="118" fill="var(--color-ground)" />
        <path
          d="M78 0 C74 18, 82 34, 77 52 C72 70, 80 92, 76 118 L100 118 L100 0 Z"
          fill="var(--color-sky)"
        />
        <path
          d="M78 0 C74 18, 82 34, 77 52 C72 70, 80 92, 76 118"
          fill="none"
          stroke="var(--color-sea)"
          strokeWidth="0.6"
        />
        <text
          x="88"
          y="10"
          textAnchor="middle"
          fill="var(--color-sea)"
          fontSize="3.1"
          letterSpacing="0.3"
          fontFamily="Instrument Sans, sans-serif"
        >
          ATLÂNTICO
        </text>
        <text
          x="8"
          y="9"
          fill="var(--color-faint)"
          fontSize="3.1"
          letterSpacing="0.6"
          fontFamily="Instrument Sans, sans-serif"
        >
          NORTE
        </text>

        {NEIGHBORHOODS.filter((n) => !activeNb.has(n.id)).map((n) => (
          <g key={n.id}>
            <circle cx={xOf(n.lng)} cy={yOf(n.lat) * 1.18} r="0.9" fill="var(--color-sand)" />
          </g>
        ))}

        {cards.map((c, i) => {
          const active = c.listing.id === selectedId;
          const main = i < highlight;
          const hit = goal ? punchForGoal(c, goal) : punch(c);
          const x = xOf(c.listing.lng);
          const y = yOf(c.listing.lat) * 1.18;
          const labelLeft = x > 45;
          const crowded = cards.slice(0, i).some((other) => {
            const ox = xOf(other.listing.lng);
            const oy = yOf(other.listing.lat) * 1.18;
            return Math.hypot(ox - x, oy - y) < 12;
          });
          const left = crowded ? !labelLeft : labelLeft;
          const yShift = crowded ? 5.5 : 0;
          const showLabel = main;
          return (
            <g
              key={c.listing.id}
              className="cursor-pointer"
              onClick={() => onSelect(c.listing.id)}
            >
              <circle cx={x} cy={y} r="6" fill="transparent" />
              {main ? (
                <circle cx={x} cy={y} r="3.6" fill="var(--color-accent)" opacity="0.14" />
              ) : null}
              <circle
                cx={x}
                cy={y}
                r={active ? 2.2 : main ? 1.7 : 1.1}
                fill={main ? "var(--color-accent)" : "var(--color-sand)"}
              />
              {showLabel ? (
                <>
                  <text
                    x={left ? x - 4.2 : x + 4.2}
                    y={y - 1.4 + yShift}
                    textAnchor={left ? "end" : "start"}
                    fill="var(--color-muted)"
                    fontSize="3.4"
                    fontWeight="500"
                    fontFamily="Instrument Sans, sans-serif"
                  >
                    {c.nb.name}
                  </text>
                  <text
                    x={left ? x - 4.2 : x + 4.2}
                    y={y + 3 + yShift}
                    textAnchor={left ? "end" : "start"}
                    fill="var(--color-deal)"
                    fontSize="3.5"
                    fontFamily="Spectral, serif"
                  >
                    {hit.value}
                  </text>
                </>
              ) : null}
            </g>
          );
        })}
      </svg>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-1 pb-1 pt-3 text-xs text-subtle">
        <span className="flex items-center gap-1.5">
          <span className="size-[7px] rounded-full bg-accent" />
          imóvel deste rumo
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-[7px] rounded-full bg-sand" />
          bairro sem oferta
        </span>
      </div>
    </div>
  );
}
