# DESIGN - ᴘᴛ

> Identidade visual, tokens e componentes. Os tokens existentes estão em
> `src/app/globals.css` e as fontes em `src/fonts/index.ts`.

- [Direção de arte](#direção-de-arte)
- [Cores](#cores)
- [Tipografia](#tipografia)
- [Espaçamento e grid](#espaçamento-e-grid)
- [Imagens](#imagens)
- [Movimento](#movimento)
- [Acessibilidade](#acessibilidade)

---

## Direção de arte

A referência é o material de divulgação de *Suits*: retratos em preto e branco
com um leve tom azulado, ternos escuros, o skyline de Manhattan à noite e
muito contraste. Em uma frase: **um terno bem cortado em forma de site.**

| Palavra-chave | Como aparece |
| --- | --- |
| Monocromático | Preto, branco e cinzas. A cor de destaque é usada com muita parcimônia |
| Arquitetônico | Grid rígido, linhas finas, alinhamentos precisos |
| Gravado | O nome da firma em caixa-alta e espaçada, como uma placa de metal na parede |
| Silencioso | Muito espaço em branco. Nada pisca e nada disputa atenção |

## Cores

### Tokens atuais

Definidos em `:root` e expostos ao Tailwind via `@theme inline`, em
`src/app/globals.css`:

| Variável CSS | Classe Tailwind | Valor | Uso |
| --- | --- | --- | --- |
| `--white-background` | `bg-white-background` | `#ffffff` | Fundo padrão do `body` |
| `--black-background` | `bg-black-background` | `#000000` | Seções escuras, hero, rodapé |
| `--foreground` | `text-foreground`, `bg-foreground` | `#171717` | Texto secundário, barra de rolagem |
| `--blue` | `text-blue`, `bg-blue` | `#2188FF` | Destaque (hover da barra de rolagem) |
| `--white-text` | `text-white-text` | `#ffffff` | Texto sobre fundo escuro |
| `--black-text` | `text-black-text` | `#000000` | Texto padrão do `body` |

Também há `themeColor: "#0A0A0A"` e `colorScheme: "light"` no `viewport` de
`src/app/layout.tsx`.

### Contraste (WCAG 2.1)

| Combinação | Razão | AA texto normal (4,5:1) | AA texto grande (3:1) |
| --- | --- | --- | --- |
| `#171717` sobre branco | 17,93 | Passa | Passa |
| `#2188FF` sobre branco | 3,48 | **Não passa** | Passa |
| `#2188FF` sobre preto | 6,03 | Passa | Passa |
| `#737373` sobre branco | 4,74 | Passa | Passa |
| `#A3A3A3` sobre `#0A0A0A` | 7,85 | Passa | Passa |

**Regra:** o azul `#2188FF` só pode ser usado como texto sobre fundo escuro,
ou em texto grande (24 px ou mais, ou 18,66 px em negrito) sobre fundo claro.
Para links em fundo claro, use um azul mais escuro, por exemplo `#0A66D6`
(5,41:1).

### Tokens propostos

Para completar a paleta, seguindo o padrão de nomes atual:

| Variável | Valor | Uso |
| --- | --- | --- |
| `--gray-100` | `#F5F5F5` | Fundo de seções alternadas |
| `--gray-300` | `#D4D4D4` | Bordas e divisores |
| `--gray-500` | `#737373` | Texto auxiliar sobre branco |
| `--gray-400-dark` | `#A3A3A3` | Texto auxiliar sobre preto |
| `--blue-strong` | `#0A66D6` | Links e foco sobre fundo claro |
| `--focus-ring` | `#2188FF` | Contorno de foco sobre fundo escuro |

## Tipografia

### Famílias

| Família | Arquivos | Variável | Classe | Papel |
| --- | --- | --- | --- | --- |
| **ITC Blair** | Light 300, Medium 500, Bold 700 | `--font-itc-blair` | `font-blair` ou `.pearson-hardman-font` | Logotipo, títulos, rótulos em caixa-alta |
| **Nimbus Sans L** | Regular 400 e Bold 700, com itálicos | `--font-nimbus-sans` | `font-nimbus` (padrão do `body`) | Texto corrido e interface |

As duas são carregadas com `next/font/local`, com `display: "swap"` e
alternativas definidas (`Copperplate` para a Blair e `Helvetica Neue` e
`Helvetica` para a Nimbus Sans).

**Por que essas fontes.** A ITC Blair é uma fonte de traço largo, desenhada
para caixa-alta, com aparência de letreiro gravado. Ela evoca a placa com o
nome da firma. A Nimbus Sans é um clone da Helvetica, neutra e corporativa,
alinhada ao visual limpo da série.

**Licenças.** A ITC Blair é comercializada pela Monotype e o uso web exige
licença. A Nimbus Sans L foi distribuída pela URW com o Ghostscript sob
licenças livres. Confirme os termos das duas antes de publicar. Se a licença
da Blair não for viável, alternativas gratuitas no Google Fonts com efeito
parecido são **Cinzel** (com serifa) e **Syncopate** ou **Michroma** (sem
serifa, larga).

### Escala

| Token | Tamanho (mobile → desktop) | Família | Uso |
| --- | --- | --- | --- |
| `display` | 40 → 72 px | Blair Medium, caixa-alta, `tracking-[0.08em]` | `h1` do hero |
| `h2` | 28 → 44 px | Blair Medium | Títulos de seção |
| `h3` | 20 → 28 px | Nimbus Bold | Títulos de cartão |
| `eyebrow` | 12 → 14 px | Blair Bold, caixa-alta, `tracking-[0.2em]` | Rótulos acima de títulos |
| `body` | 16 → 18 px | Nimbus Regular, `leading-relaxed` | Texto corrido |
| `small` | 14 px | Nimbus Regular | Legendas e rodapé |
| `quote` | 28 → 48 px | Nimbus Italic | Citações |

Use `clamp()` para os tamanhos fluidos, por exemplo
`text-[clamp(2.5rem,6vw,4.5rem)]`.

## Espaçamento e grid

- Escala de espaçamento padrão do Tailwind (múltiplos de 4 px).
- Contêiner: `max-w-7xl mx-auto px-4 md:px-8`.
- Grid de 12 colunas no desktop e 4 no mobile.
- Seções com respiro vertical generoso: `py-20 md:py-32`.
- Pontos de quebra padrão do Tailwind (`sm` 640, `md` 768, `lg` 1024,
  `xl` 1280).

## Imagens

| Regra | Detalhe |
| --- | --- |
| Tratamento | Preto e branco com leve tom azulado e contraste alto |
| Formato | WebP ou AVIF, servidos por `next/image` |
| Hero | Imagem de largura total com gradiente escuro por cima para garantir o contraste do texto. A classe `.hero-image-gradient` já existe vazia em `globals.css` |
| Retratos | Monogramas ou ilustrações. Não use fotos dos atores (veja o [documento 02](./02-produto-e-conteudo.md#aspectos-legais-e-de-propriedade-intelectual)) |
| Texto alternativo | Imagens decorativas usam `alt=""`. Imagens com conteúdo têm descrição |
| `quality` | `HeroSection` usa `quality="100"`. Valores entre 75 e 85 reduzem bastante o peso sem perda visível |

## Movimento

- Transições já definidas: `.transition-normal` (0,3 s) e `.transition-fast`
  (0,15 s).
- Animações discretas: aparecimento suave ao rolar, sublinhado deslizante em
  links.
- `prefers-reduced-motion: reduce` já desliga o `scroll-behavior: smooth`.
  Toda animação nova deve respeitar essa preferência (no Tailwind,
  `motion-safe:` e `motion-reduce:`).

## Acessibilidade

- Um único `h1` por página e hierarquia de títulos sem saltos.
- Link "Pular para o conteúdo" no começo do `Header`.
- Foco visível em todos os elementos interativos. Não remova o `outline` sem
  substituir.
- Contraste conforme a tabela de [Cores](#contraste-wcag-21).
- O menu mobile precisa de `aria-expanded`, `aria-controls` e fechar com
  `Esc`.
- `lang="pt-BR"` já está definido no `<html>`.
- A barra de rolagem personalizada (`::-webkit-scrollbar`) só funciona em
  navegadores baseados em WebKit e Blink. O Firefox usa a padrão, o que é
  aceitável.

by caiothedev<br />
#design