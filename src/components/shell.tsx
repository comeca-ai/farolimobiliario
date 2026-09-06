import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { cn } from "@/lib/utils";
import { CITY } from "@/data/market";

const NAV = [
  { to: "/", label: "Mesa" },
  { to: "/bairros", label: "Bairros" },
  { to: "/arquitetura", label: "Arquitetura" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-4 md:h-16 md:px-6">
          <Link to="/" className="flex items-center gap-2.5 text-fg">
            <Mark className="size-7" />
            <span className="font-display text-lg tracking-tight">Farol</span>
            <span className="hidden text-xs text-muted sm:inline">João Pessoa</span>
          </Link>
          <nav className="flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/" || pathname.startsWith("/imovel")
                  : pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                    active ? "bg-raised text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div>{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-5 text-xs text-subtle md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            Sinais modelados com comps públicos · FipeZAP / MySide / AirDNA · {CITY.sampleDate}.
            Não é oferta nem recomendação de investimento.
          </p>
          <p>Produção pensada inteira na Cloudflare.</p>
        </div>
      </footer>
    </div>
  );
}
