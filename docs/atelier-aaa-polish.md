# Atelier AAA — polish landing

**Draft.** PR ≠ deploy. Funil intacto: Landing → Cadastro → Caixinha → Rumo → 3 opções.

## Checklist 1 — 7 moves (brief inicial)

| # | Move | Before | After |
|---|------|--------|-------|
| 1 | CTA Entrar + sticky mobile | "Entrar" genérico; sem sticky | "Entrar · ver o spread"; sticky discreto após scroll do hero (só mobile) |
| 2 | Disclaimer/fonte contraste | `text-xs text-subtle` no cream | `text-[13px] text-muted` |
| 3 | Confiança sob WhatsApp | Só label obrigatório | 1 linha honesta (sem rota de privacidade ainda) |
| 4 | Como funciona 03 + mobile | "Concordar"; grid `sm:3` cortava | Verbo "Concorda" (Entra/Escreve/Concorda); grid 1→`md:3` |
| 5 | Bairros barras | Sem legenda | Legenda: relativo ao m² mais alto da lista |
| 6 | STR 1ª ocorrência + labels | "STR" só; labels `text-subtle` | "STR · ocupação"; labels `text-muted` + weight |
| 7 | Form destino + states | Sem linha de destino; erro seco | "link no e-mail · resumo no WhatsApp"; empty/error `aria` calmos |

## Checklist 2 — EXTRA refine (audit 1280×800)

| ID | Pedido | After |
|----|--------|-------|
| A | Hero: promessa → explicação → benchmark | H1/promessa dominam; m² menor (`~2.35rem`), sem `text-deal` gritante |
| B | Ritmo do fold; Como funciona no 1º viewport | `pt/gap/py` apertados; hero + 3 cards cabem no fold desktop |
| C | Header: cadastro + hover/foco CTA | `Entrar` no header (sem lead) via `enterIntent`; `focus-visible` + hover opacity |
| D | Como funciona: progressão visual | Cards 01→03: borda/peso/anel crescentes |
| E | Trust/data: FipeZAP + metodologia | `<details>` Fonte e metodologia no hero |
| F | Bairros: ordenação explícita + filtros leves | "Ordenado por m² ↓"; chips zona (Todos/Orla/Interior/Cabedelo) |
| G | Arquitetura: resumo + detalhe progressivo | `<details>` por estágio; produtos em `text-subtle` no L1 |
| H | Cadastro erro | `min-h` estável nos hints; foco no 1º inválido; `font-medium text-risk` |

## Fora de escopo
Dados, scoring, Workers, merge/deploy.
