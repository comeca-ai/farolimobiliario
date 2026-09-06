import { cn } from "@/lib/utils";

export function ScoreBar({
  score,
  className,
}: {
  score: number;
  className?: string;
}) {
  const width = Math.max(4, Math.min(100, score));
  return (
    <div
      className={cn("h-1 w-full overflow-hidden rounded-full bg-raised", className)}
      aria-hidden
    >
      <div className="h-full rounded-full bg-deal" style={{ width: `${width}%` }} />
    </div>
  );
}
