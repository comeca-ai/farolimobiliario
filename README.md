# Farol

Aponta o spread em **João Pessoa**. Não é Zap. Não é corretor.

**No ar:** [https://farolqueprotege.com.br](https://farolqueprotege.com.br)  
**Código:** [github.com/comeca-ai/farolimobiliario](https://github.com/comeca-ai/farolimobiliario)

Os sinais desta demo são **modelados** com comps públicos de bairro (FipeZAP / MySide, set/2026). O inventário da vitrine é recarregado em toda visita. Não é oferta nem recomendação de investimento.

## Funil

1. Landing — Farol, o m² da cidade, **Entrar**
2. Cadastro — e-mail + WhatsApp (obrigatório)
3. Caixinha — objetivo de vida com imóveis
4. Rumo — a pessoa concorda
5. Três opções daquele rumo + mapa da orla
6. Mais sinais aderentes logo abaixo e mesa completa para abrir toda a cidade
7. **Sair** no topo limpa a sessão

Quatro rumos, cada um com **três** imóveis principais distintos, com mais sinais aderentes logo abaixo:

| Rumo | O número grande |
|---|---|
| O caixa agora | rentabilidade de temporada, líquida |
| Abaixo do justo | % vs m² do bairro |
| Para viver | ticket em R$ · uso próprio |
| Aluguel que se paga | aluguel tradicional, líquido |

## Agentes

```bash
npm run test:rumo    # unitário: tríade, caixinha, cadastro
npm run test:base    # integridade: bairro, coords, score, estado 0–1
npm test             # tudo (inclui os testes do template)
```

Última passagem (2026-09-07): unitário **13/13**, integridade **4/4**, `tsc` limpo.

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

- `/` — landing → cadastro → caixinha → três opções
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
