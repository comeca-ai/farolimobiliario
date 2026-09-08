import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 26" className={cn("text-fg", className)} aria-hidden>
      <path d="M5 9h6l1.4 15H3.6L5 9z" fill="currentColor" />
      <rect x="3" y="4" width="10" height="5" rx="1" fill="currentColor" />
      <circle cx="8" cy="6.5" r="1.4" fill="var(--color-gold)" />
      <path d="M8 0.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="1" y="24" width="14" height="1.6" rx="0.8" fill="currentColor" />
    </svg>
  );
}
