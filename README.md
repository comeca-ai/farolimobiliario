# Farol

Mesa de radar para oportunidades imobiliárias em **João Pessoa**.

**No ar:** [https://farolimobiliario.jhonata-emerick.workers.dev](https://farolimobiliario.jhonata-emerick.workers.dev)

Três teses:

1. **Abaixo do preço** — ask versus m² justo do bairro (FipeZAP / MySide, set/2026)
2. **Flat / Airbnb** — NOI de curta temporada versus ticket e versus aluguel longo
3. **Abaixo do radar** — placa, leilão, inventário, IPTU; pouco ou nenhum portal

Os sinais desta demo são **modelados** com comps públicos reais de bairro. Não são ofertas nem recomendação de investimento.

## Rodar local

```bash
npm install
npm run dev
```

Rotas:

- `/` — mesa + mapa da orla (Atlântico a leste)
- `/imovel/$id` — tese, riscos, laboratório Airbnb
- `/bairros` — m², variação 12 meses, ocupação STR
- `/arquitetura` — desenho de produção **inteiro na Cloudflare**

## Publicar (Cloudflare Workers)

```bash
export CLOUDFLARE_API_TOKEN=...
export CLOUDFLARE_ACCOUNT_ID=749b2e9b3642e4b03321d5830e81c195
npm run deploy:cf
```

O token **nunca** vai para o git. O build da Cloudflare (`vite.cloudflare.config.ts`) é isolado do preset Vercel da preview.

## Stack da demo

TanStack Start, React 19, Tailwind v4, Zustand, Cloudflare Workers.
