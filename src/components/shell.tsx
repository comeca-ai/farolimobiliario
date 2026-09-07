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
  const requestEnter = useDesk((s) => s.requestEnter);
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
          <nav className="flex items-center gap-0.5">
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
                    "inline-flex h-11 items-center rounded-md px-3 text-sm font-medium transition-colors duration-150",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    active ? "bg-raised text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            {lead ? (
              <button
                type="button"
                onClick={() => {
                  signOut();
                  void navigate({ to: "/" });
                }}
                className="ml-1 inline-flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Sair
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  requestEnter();
                  void navigate({ to: "/" });
                }}
                className="pressable ml-2 inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Entrar
              </button>
            )}
          </nav>
        </div>
      </header>
      <div>{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-5 text-[13px] text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            Inventário {CITY.refresh} · comps {CITY.sampleDate}. Não é oferta nem recomendação de
            investimento.
          </p>
          <p>João Pessoa. O Farol aponta. O resto, silêncio.</p>
        </div>
      </footer>
    </div>
  );
}
