import type { ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { CITY } from "@/data/market";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Rumo" },
  { to: "/bairros", label: "Bairros" },
  { to: "/arquitetura", label: "Arquitetura" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const setShowDesk = useDesk((s) => s.setShowDesk);
  const lead = useDesk((s) => s.lead);
  const signOut = useDesk((s) => s.signOut);
  const navigate = useNavigate();

  if (!lead) {
    return <div className="min-h-dvh bg-bg pb-[env(safe-area-inset-bottom)]">{children}</div>;
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg pb-[env(safe-area-inset-bottom)]">
      <header className="sticky top-0 z-30 bg-bg/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-4 py-[18px] sm:px-8">
          <Link
            to="/"
            onClick={() => setShowDesk(false)}
            className="flex items-center gap-2.5 text-fg"
          >
            <Mark className="h-[22px] w-3.5" />
            <span className="flex items-baseline gap-2.5">
              <span className="font-display text-[22px] leading-none tracking-tight">Farol</span>
              <span className="hidden text-[13px] text-subtle sm:inline">João Pessoa</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/" || pathname.startsWith("/imovel")
                  : pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    if (item.to === "/") setShowDesk(false);
                  }}
                  className={cn(
                    "inline-flex h-10 items-center rounded-full px-4",
                    active ? "bg-raised text-fg" : "text-fg hover:bg-raised",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                signOut();
                void navigate({ to: "/" });
              }}
              className="inline-flex h-10 items-center rounded-full px-4 text-subtle hover:bg-raised hover:text-fg"
            >
              Sair
            </button>
          </nav>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-4 py-6 text-[13px] leading-relaxed text-subtle sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            Inventário recarregado em toda visita · comps {CITY.sampleDate}. Não é oferta nem
            recomendação de investimento.
          </p>
          <p>João Pessoa. O Farol aponta. O resto, silêncio.</p>
        </div>
      </footer>
    </div>
  );
}
