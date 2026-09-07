# Farol v2 — audit Cloudflare (Workers-first)

Branch: `v2`
Live (`main` / farolqueprotege.com.br) **não muda** até merge explícito.

## Achados

1. CI validava typecheck/testes, **não** o artefato Workers.
2. `deploy:cf` acoplava build+deploy — PR não provava o bundle edge.
3. Wrangler sem `minify` / `placement: smart` / `keep_vars`.
4. Fontes Google no `__root` (follow-up: self-host).
5. `/arquitetura` descreve KV/D1/R2/DO — dados ainda estáticos em `src/data`.

## Wins nesta passagem

| Win | Por quê |
|---|---|
| `npm run build:cf` | Valida Workers sem deploy |
| CI: lint + build:cf + wrangler dry-run | Gate edge antes do merge |
| Wrangler minify + smart placement + keep_vars | Bundle menor, isolate perto do user |
| vite.cloudflare build target/cssMinify | Bundle edge mais enxuto |

## Não mudou

Funil produto, copy, dados modelados, domínio, secrets. Preset Nitro vercel no vite default fica (preview Grok).

## Review

```bash
npm ci && npm run typecheck && npm run lint
npm run test:rumo && npm run test:base
npm run build:cf
```
