import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { CITY } from "@/data/market";
import { useDesk } from "@/lib/store";

export function Shell({ children }: { children: ReactNode }) {
  const setShowDesk = useDesk((s) => s.setShowDesk);
  const lead = useDesk((s) => s.lead);
  const signOut = useDesk((s) => s.signOut);
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh bg-bg pb-[env(safe-area-inset-bottom)]">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 md:h-16 md:px-6">
          <Link
            to="/"
            onClick={() => setShowDesk(false)}
            className="flex min-h-11 items-center gap-2.5 text-fg"
          >
            <Mark className="size-7" />
            <span className="font-display text-lg tracking-tight">Farol</span>
            <span className="hidden text-xs text-muted sm:inline">João Pessoa</span>
          </Link>
          {lead ? (
            <button
              type="button"
              onClick={() => {
                signOut();
                void navigate({ to: "/" });
              }}
              className="inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Sair
            </button>
          ) : null}
        </div>
      </header>
      <div>{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-4 py-4 text-[13px] text-muted md:px-6">
          <p>
            Inventário {CITY.refresh} · comps {CITY.sampleDate}. Não é oferta nem recomendação de
            investimento.
          </p>
        </div>
      </footer>
    </div>
  );
}
