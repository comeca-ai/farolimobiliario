import { cn } from "@/lib/utils";
import type { ListingType } from "@/data/listings";

export function Facade({
  seed,
  type,
  className,
}: {
  seed: number;
  type: ListingType;
  className?: string;
}) {
  const floors = type === "casa" ? 2 : 4 + (seed % 5);
  const cols = type === "casa" ? 3 : 4;
  const windows: { x: number; y: number; on: boolean }[] = [];
  for (let y = 0; y < floors; y++) {
    for (let x = 0; x < cols; x++) {
      const on = ((seed * 17 + x * 13 + y * 29) % 7) !== 0;
      windows.push({ x, y, on });
    }
  }
  const w = 120;
  const h = 88;
  const bw = type === "casa" ? 54 : 40;
  const bh = type === "casa" ? 44 : 58;
  const bx = (w - bw) / 2;
  const by = h - bh - 8;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("h-full w-full", className)} aria-hidden>
      <rect width={w} height={h} fill="#0e1312" />
      <path d="M0 72h120" stroke="#c5cec8" strokeOpacity="0.18" />
      {type === "casa" ? (
        <path
          d={`M${bx - 6} ${by + 10} L${w / 2} ${by - 12} L${bx + bw + 6} ${by + 10}`}
          fill="#181d1c"
          stroke="#c5cec8"
          strokeOpacity="0.35"
        />
      ) : null}
      <rect
        x={bx}
        y={by}
        width={bw}
        height={bh}
        fill="#181d1c"
        stroke="#c5cec8"
        strokeOpacity="0.35"
      />
      {windows.map((win, i) => {
        const ww = 5;
        const wh = type === "casa" ? 7 : 6;
        const gapX = (bw - cols * ww) / (cols + 1);
        const gapY = (bh - 8 - floors * wh) / (floors + 1);
        const px = bx + gapX + win.x * (ww + gapX);
        const py = by + 6 + gapY + win.y * (wh + gapY);
        return (
          <rect
            key={i}
            x={px}
            y={py}
            width={ww}
            height={wh}
            fill={win.on ? "#c5cec8" : "#0b0e0d"}
            opacity={win.on ? 0.55 : 0.35}
          />
        );
      })}
    </svg>
  );
}
