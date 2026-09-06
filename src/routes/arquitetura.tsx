import { createFileRoute } from "@tanstack/react-router";
import { InviteGate } from "@/components/invite-gate";

export const Route = createFileRoute("/arquitetura")({ component: ArquiteturaPage });

const STAGES = [
  {
    n: "01",
    title: "Coleta no edge",
    products: "Workers Cron · Browser Run · Tunnel",
    body: "Toda manhã, um Worker dispara harvest. Portais (Zap, VivaReal, OLX, ImovelWeb) entram por fetch no colo de GRU/FOR. Placa na calçada e Street View passam pelo Browser Run — OCR da faixa vende-se. Editais Caixa e IPTU municipal entram por Tunnel, sem IP público na origem. Nada disso vive numa VPS.",
  },
  {
    n: "02",
    title: "Ingestão durável",
    products: "Queues · Pipelines · R2 + Iceberg",
    body: "O parse não pode cair com o request. Queue bufferiza o HTML/JSON cru. Pipelines aplicam SQL na ingestão: normaliza endereço, dedup por hash de logradouro+número, grava Parquet/Iceberg no R2. Zero egress — foto de fachada e snapshot de preço saem de graça para Spark, DuckDB ou R2 SQL.",
  },
  {
    n: "03",
    title: "Estado operacional",
    products: "D1 · KV · Durable Objects · Vectorize",
    body: "D1 é o livro corrente (sinais vivos, comps, bairros). KV guarda m² Fipe e ocupação STR com TTL 24h — leitura quente, consistência eventual, 1 write/s por chave. Cada imóvel é um Durable Object: histórico de preço, alarme se o ask cair 4%, WebSocket se você estiver na mesa. Vectorize indexa tese e anúncio: “casa quieta 3q Bessa fora do portal”.",
  },
  {
    n: "04",
    title: "Score das três teses",
    products: "Workers · Analytics Engine · Workers AI",
    body: "O isolate calcula: desconto vs m² justo × estado; NOI STR vs ticket e vs aluguel longo; obscuridade (0 portais + fonte placa/leilão/inventário). Analytics Engine registra cada score — alta cardinalidade, sem warehouse. Workers AI lê foto e texto: reforma pesada? mobília de flat? convenção que veta Airbnb?",
  },
  {
    n: "05",
    title: "A mesa",
    products: "Workers + Assets · Access · Email",
    body: "Este app. Static assets no CDN, API no mesmo Worker. Cloudflare Access na frente — a mesa não é pública. Alerta sai por Email Service ou webhook quando um DO dispara. Turnstile só se um corretor externo ganhar login. Feature flag (Flagship) para ligar tese nova sem redeploy cego.",
  },
  {
    n: "06",
    title: "Lake e auditoria",
    products: "R2 SQL · Logpush · Data Localization",
    body: "Analista pergunta no R2 SQL: yield mediano de kitnet Tambaú nos 90 dias. Logpush manda harvest e Access logs ao SIEM e de volta ao R2. Se o capital for de fundo com residência, jurisdiction us/eu no bucket e Customer Metadata Boundary. PQC já está no TLS de entrada.",
  },
];

const DATA = [
  { product: "KV", use: "m² Fipe, ADR, ocupação STR, feature flags. Eventual. Hot read." },
  { product: "D1", use: "Livro de sinais, teses, watchlist. SQL, Time Travel 30d, réplicas." },
  { product: "DO + SQLite", use: "Um ator por imóvel. Preço, alerta, presença na mesa." },
  { product: "R2 + Catalog", use: "Fotos, editais PDF, Iceberg de anúncios. Zero egress." },
  { product: "R2 SQL", use: "Query adhoc no lake. Sem cluster." },
  { product: "Hyperdrive", use: "Se o cartório ou o CRM já estiver em Postgres." },
  { product: "Queues", use: "Parse, OCR, recálculo em lote. At-least-once." },
  { product: "Vectorize", use: "Busca semântica e near-dup de anúncio." },
  { product: "Analytics Engine", use: "Telemetria do score, não o lake." },
];

export function ArquiteturaPage() {
  return (
    <InviteGate>
      <ArquiteturaBoard />
    </InviteGate>
  );
}

function ArquiteturaBoard() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-6 md:px-6 md:py-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Tudo via Cloudflare</p>
      <h1 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
        Uma rede, três teses, zero VPS.
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        João Pessoa cabe num isolate. O que não cabe é a ilusão de que oportunidade imobiliária
        vive só no Zap. Abaixo do preço é um spread contra o m². Flat Airbnb é um NOI contra a
        parcela. Casa da rua é um canal que o portal não indexa. Os três são jobs de dados no
        edge — não um CRM com mapa.
      </p>

      <ol className="mt-10 space-y-8">
        {STAGES.map((s) => (
          <li key={s.n} className="grid grid-cols-[auto_1fr] gap-4">
            <span className="font-display text-sm tabular-nums text-subtle">{s.n}</span>
            <div>
              <h2 className="font-display text-xl leading-snug">{s.title}</h2>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-accent">
                {s.products}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-14">
        <h2 className="font-display text-xl">Onde cada dado mora</h2>
        <ul className="mt-4 divide-y divide-line overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgba(236,234,228,0.08)]">
          {DATA.map((d) => (
            <li key={d.product} className="grid gap-1 px-4 py-3 sm:grid-cols-[140px_1fr] sm:gap-4">
              <span className="text-sm font-medium">{d.product}</span>
              <span className="text-sm text-muted">{d.use}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl">GitOps da mesa</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Terraform segura zona, Access, R2, D1, Queues. Wrangler segura o Worker:{" "}
          <code className="text-fg">versions upload</code> cria artefato, deploy gradual 5/25/50/100,
          rollback é apontar a versão. Bindings no toml. Segredo de API de portal no Secrets Store,
          não no git. Preview URL por versão para validar um score novo sem tocar a mesa ao vivo.
        </p>
      </section>
    </main>
  );
}
