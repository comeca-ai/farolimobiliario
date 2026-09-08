import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="eyebrow text-accent">Farol</p>
      <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none">Algo não fechou.</h1>
      <p className="max-w-md text-sm leading-relaxed break-words text-muted">
        {error.message || "Erro inesperado. Recarregue a página."}
      </p>
    </main>
  );
}
