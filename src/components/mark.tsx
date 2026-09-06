import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-accent", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M16 3v3.2M11.8 8.4h8.4L18.4 13h-4.8L11.8 8.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M13.2 13h5.6v13H13.2Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 28h14M14.6 17h2.8M14.6 21.2h2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
