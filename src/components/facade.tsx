import { cn } from "@/lib/utils";
import type { ListingType } from "@/data/listings";

type Building = { x: number; w: number; h: number; floors: number; cols: number };

function skyline(seed: number, type: ListingType): Building[] {
  if (type === "casa") {
    return [
      { x: 28, w: 52, h: 38, floors: 2, cols: 3 },
      { x: 88, w: 44, h: 30, floors: 2, cols: 2 },
    ];
  }
  const count = type === "flat" ? 5 : 4;
  const out: Building[] = [];
  let x = 10;
  for (let i = 0; i < count; i++) {
    const w = 22 + ((seed + i * 11) % 18);
    const h = 42 + ((seed * (i + 3)) % (type === "flat" ? 56 : 48));
    out.push({
      x,
      w,
      h,
      floors: 3 + ((seed + i) % 6),
      cols: 2 + ((seed + i * 3) % 2),
    });
    x += w + 6;
  }
  return out;
}

export function Facade({
  seed,
  type,
  className,
}: {
  seed: number;
  type: ListingType;
  className?: string;
}) {
  const buildings = skyline(seed, type);

  return (
    <svg
      viewBox="0 0 240 140"
      preserveAspectRatio="xMidYMax slice"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <rect width="240" height="140" fill="var(--color-sky)" />
      <rect x="186" y="0" width="54" height="140" fill="var(--color-sea)" />
      <path
        d="M186 0 C190 28 184 54 189 82 C193 110 187 126 190 140"
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity="0.45"
        strokeWidth="0.8"
      />
      <rect x="0" y="118" width="186" height="22" fill="var(--color-ground)" />
      <path d="M0 118h186" stroke="var(--color-fg)" strokeOpacity="0.12" />
      {type === "casa"
        ? buildings.map((b, i) => (
            <g key={i}>
              <path
                d={`M${b.x - 6} ${140 - 22 - b.h + 8} L${b.x + b.w / 2} ${140 - 22 - b.h - 16} L${b.x + b.w + 6} ${140 - 22 - b.h + 8}`}
                fill="var(--color-building)"
                stroke="var(--color-fg)"
                strokeOpacity="0.2"
              />
              <BuildingRect b={b} seed={seed + i} />
            </g>
          ))
        : buildings.map((b, i) => <BuildingRect key={i} b={b} seed={seed + i} />)}
    </svg>
  );
}

function BuildingRect({ b, seed }: { b: Building; seed: number }) {
  const y = 118 - b.h;
  const windows: { x: number; y: number; on: boolean }[] = [];
  for (let fy = 0; fy < b.floors; fy++) {
    for (let c = 0; c < b.cols; c++) {
      windows.push({
        x: c,
        y: fy,
        on: ((seed * 17 + c * 13 + fy * 29) % 5) !== 0,
      });
    }
  }
  const ww = 3.2;
  const wh = 4.2;
  const gapX = (b.w - b.cols * ww) / (b.cols + 1);
  const gapY = (b.h - 8 - b.floors * wh) / (b.floors + 1);

  return (
    <g>
      <rect
        x={b.x}
        y={y}
        width={b.w}
        height={b.h}
        fill="var(--color-building)"
        stroke="var(--color-fg)"
        strokeOpacity="0.18"
      />
      {windows.map((win, i) => (
        <rect
          key={i}
          x={b.x + gapX + win.x * (ww + gapX)}
          y={y + 4 + gapY + win.y * (wh + gapY)}
          width={ww}
          height={wh}
          fill={win.on ? "var(--color-accent)" : "var(--color-sky)"}
          opacity={win.on ? 0.8 : 0.55}
        />
      ))}
    </g>
  );
}
