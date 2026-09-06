# Farol

Mesa de radar para oportunidades imobiliárias em **João Pessoa**.

Três teses:

1. **Abaixo do preço** — ask versus m² justo do bairro (FipeZAP / MySide, set/2026)
2. **Flat / Airbnb** — NOI de curta temporada versus ticket e versus aluguel longo
3. **Abaixo do radar** — placa, leilão, inventário, IPTU; pouco ou nenhum portal

Os sinais desta demo são **modelados** com comps públicos reais de bairro. Não são ofertas nem recomendação de investimento.

## Rodar

```bash
npm install
npm run dev
```

Rotas:

- `/` — mesa + mapa da orla (Atlântico a leste)
- `/imovel/$id` — tese, riscos, laboratório Airbnb
- `/bairros` — m², variação 12 meses, ocupação STR
- `/arquitetura` — desenho de produção **inteiro na Cloudflare**

## Produção (Cloudflare)

O alvo de produção é Workers + D1 + R2 + Queues + Pipelines, descrito em `/arquitetura`.

Este repositório ainda não contém o `wrangler.toml` de produção. Deploy na conta Cloudflare entra no próximo passo (token com `Workers Scripts:Edit` + Account ID). Token **nunca** vai para o git.

## Stack da demo

TanStack Start, React 19, Tailwind v4, Zustand.
