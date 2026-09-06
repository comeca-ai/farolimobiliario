import { useState, type FormEvent } from "react";
import { inviteMatches, normalizeInvite } from "@/lib/invite";

export function Landing({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const ok = await inviteMatches(normalizeInvite(code));
    setBusy(false);
    if (!ok) {
      setError("Este convite não abre a mesa.");
      return;
    }
    onUnlock();
  }

  return (
    <main className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-xl flex-col justify-center px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-accent">Somente convidados</p>
      <h1 className="mt-3 font-display text-5xl leading-none tracking-tight text-balance md:text-6xl">
        Mesa fechada.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        O Farol lê o litoral de João Pessoa para quem foi chamado. Não há cadastro
        aberto, não há lista pública, não há tour. Quem chegou sem o link vê
        esta página — e só esta página.
      </p>

      <form onSubmit={submit} className="mt-10">
        <label className="text-xs uppercase tracking-widest text-subtle" htmlFor="convite">
          E-mail convidado ou link
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input
            id="convite"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            placeholder="O e-mail do convite"
            className="h-12 min-w-0 flex-1 rounded-full bg-surface px-5 text-sm text-fg outline-none ring-1 ring-transparent placeholder:text-subtle focus:ring-accent/40"
          />
          <button
            type="submit"
            disabled={busy || !code.trim()}
            className="pressable h-12 shrink-0 rounded-full bg-accent px-6 text-sm font-medium text-accent-fg disabled:opacity-40"
          >
            {busy ? "Lendo…" : "Entrar"}
          </button>
        </div>
        {error ? <p className="mt-3 text-sm text-risk">{error}</p> : null}
      </form>

      <p className="mt-8 text-sm text-subtle">
        O convite é o e-mail que foi chamado, ou o link. Quem não está na mesa, permanece fora.
      </p>
    </main>
  );
}
