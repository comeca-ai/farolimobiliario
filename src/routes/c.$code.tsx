import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { inviteMatches, normalizeInvite } from "@/lib/invite";
import { useDesk } from "@/lib/store";

export const Route = createFileRoute("/c/$code")({ component: Redeem });

function Redeem() {
  const { code } = Route.useParams();
  const setInvited = useDesk((s) => s.setInvited);
  const navigate = useNavigate();
  const [status, setStatus] = useState<"lendo" | "ok" | "nao">("lendo");

  useEffect(() => {
    let live = true;
    void inviteMatches(normalizeInvite(code)).then((ok) => {
      if (!live) return;
      if (ok) {
        setInvited(true);
        setStatus("ok");
        void navigate({ to: "/" });
      } else {
        setStatus("nao");
      }
    });
    return () => {
      live = false;
    };
  }, [code, navigate, setInvited]);

  if (status === "nao") {
    return (
      <main className="mx-auto max-w-xl px-4 py-16">
        <p className="text-xs uppercase tracking-widest text-accent">Somente convidados</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight">Este convite não abre.</h1>
        <p className="mt-3 text-sm text-muted">
          O link é inválido ou já não vale. A mesa continua fechada.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <p className="text-xs uppercase tracking-widest text-subtle">Farol lê o convite…</p>
    </main>
  );
}
