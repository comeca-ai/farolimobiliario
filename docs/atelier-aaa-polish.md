# Atelier AAA — polish landing (7 moves)

**Draft.** PR ≠ deploy. Funil intacto: Landing → Cadastro → Caixinha → Rumo → 3 opções.

## Checklist before → after

| # | Move | Before | After |
|---|------|--------|-------|
| 1 | CTA Entrar + sticky mobile | "Entrar" genérico; sem sticky | "Entrar · ver o spread"; sticky discreto após scroll do hero (só mobile) |
| 2 | Disclaimer/fonte contraste | `text-xs text-subtle` no cream | `text-[13px] text-muted` |
| 3 | Confiança sob WhatsApp | Só label obrigatório | 1 linha honesta (sem rota de privacidade ainda) |
| 4 | Como funciona 03 + mobile | "Concordar"; grid `sm:3` cortava | Verbo "Concorda" (Entra/Escreve/Concorda); grid 1→`md:3` |
| 5 | Bairros barras | Sem legenda | Legenda: relativo ao m² mais alto da lista |
| 6 | STR 1ª ocorrência + labels | "STR" só; labels `text-subtle` | "STR · ocupação"; labels `text-muted` + weight |
| 7 | Form destino + states | Sem linha de destino; erro seco | "link no e-mail · resumo no WhatsApp"; empty/error `aria` calmos |

## Fora de escopo
Dados, scoring, Workers, merge/deploy.
