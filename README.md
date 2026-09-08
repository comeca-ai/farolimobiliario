# Farol

Aponta o spread em **João Pessoa**. Não é Zap. Não é corretor.

**No ar:** [https://farolqueprotege.com.br](https://farolqueprotege.com.br)  
**Código:** [github.com/comeca-ai/farolimobiliario](https://github.com/comeca-ai/farolimobiliario)

Os sinais desta demo são **modelados** com comps públicos de bairro (FipeZAP / MySide, set/2026). O inventário da vitrine é recarregado em toda visita. Não é oferta nem recomendação de investimento.

Job (fonte: [`docs/ideia.md`](docs/ideia.md)): localizar oportunidade — **flat → Airbnb** ou **abaixo do preço com o problema visível**.

## Funil

1. Landing — job (Flat → Airbnb / Abaixo do preço) + e-mail; WhatsApp opcional
2. Cadastro — WhatsApp obrigatório, sem senha
3. Caixinha — o que o imóvel precisa fazer; o Farol lê o rumo ao vivo
4. Resultado — 3 encaixes + problema à vista + mapa da orla
5. **Sair** no topo limpa a sessão

Dois rumos na home:

| Rumo | O número grande |
|---|---|
| O caixa agora | rentabilidade de temporada, líquida |
| Abaixo do justo | % vs m² do bairro |
| Morar bem, em silêncio | ticket em R$ · uso próprio |
| Renda previsível | aluguel anual, líquido |

Quem pede um bairro na caixinha vê aquele bairro (ou a mesma zona). Tambaú não devolve Expedicionários.

## Agentes

```bash
npm run test:rumo    # unitário: tríade, job, cadastro, tela
npm run test:base    # integridade: bairro, coords, score, estado 0–1
npm test             # tudo (inclui os testes do template)
```

## GitHub Actions e secrets

O token da Cloudflare **não** fica no git. Fica em **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Workflow [`.github/workflows/farol.yml`](.github/workflows/farol.yml) em todo push/`main`:

1. typecheck
2. agente unitário
3. agente de integridade da base
4. varredura de token no git
5. se passou: `wrangler deploy` com os secrets

```bash
npm run audit:secrets
```

## Rotas

- `/` — job (Airbnb ou preço) + cadastro mínimo → três opções
- `/imovel/$id` — dossiê do sinal
- `/bairros` — m² e variação 12 meses
- `/arquitetura` — desenho de produção na Cloudflare

## Publicar

Preferir o Action. Local:

```bash
export CLOUDFLARE_API_TOKEN=...
export CLOUDFLARE_ACCOUNT_ID=749b2e9b3642e4b03321d5830e81c195
npm run deploy:cf
```

Worker: `farolimobiliario`. Domínio: `farolqueprotege.com.br`.

## Stack

TanStack Start, React 19, Tailwind v4, Zustand, Cloudflare Workers.
