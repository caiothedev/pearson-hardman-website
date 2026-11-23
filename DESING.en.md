# DESIGN - ᴇɴ

> Visual identity, tokens, and components. Existing tokens can be found in
> `src/app/globals.css`, and fonts in `src/fonts/index.ts`.

- [Art direction](#art-direction)
- [Colors](#colors)
- [Typography](#typography)
- [Spacing and grid](#spacing-and-grid)
- [Images](#images)
- [Motion](#motion)
- [Accessibility](#accessibility)

---

## Art direction

The reference point is the promotional material for *Suits*: black-and-white
portraits with a subtle bluish tint, dark suits, the Manhattan skyline at night,
and high contrast. In a nutshell: **a well-tailored suit in the form of a website.**

| Keyword | How it manifests |
| --- | --- |
| Monochromatic | Black, white, and shades of gray. Accent colors are used very sparingly. |
| Architectural | A rigid grid, thin lines, and precise alignments. |
| Engraved | The firm’s name in spaced-out uppercase letters, like a metal plaque on a wall. |
| Quiet | Ample white space. Nothing flashes, and nothing competes for attention. |

## Colors

### Current tokens

Defined within `:root` and exposed to Tailwind via `@theme inline` in
`src/app/globals.css`:

| CSS Variable | Tailwind Class | Value | Usage |
| --- | --- | --- | --- |
| `--white-background` | `bg-white-background` | `#ffffff` | Default `body` background |
| `--black-background` | `bg-black-background` | `#000000` | Dark sections, hero, footer |
| `--foreground` | `text-foreground`, `bg-foreground` | `#171717` | Secondary text, scrollbar |
| `--blue` | `text-blue`, `bg-blue` | `#2188FF` | Highlight (scrollbar hover state) |
| `--white-text` | `text-white-text` | `#ffffff` | Text on a dark background |
| `--black-text` | `text-black-text` | `#000000` | Default `body` text |

There are also `themeColor: "#0A0A0A"` and `colorScheme: "light"` defined in the `viewport` within
`src/app/layout.tsx`.

### Contrast (WCAG 2.1)

| Combination | Ratio | AA normal text (4.5:1) | AA large text (3:1) |
| --- | --- | --- | --- |
| `#171717` on white | 17.93 | Pass | Pass |
| `#2188FF` on white | 3.48 | **Fail** | Pass |
| `#2188FF` on black | 6.03 | Pass | Pass |
| `#737373` on white | 4.74 | Pass | Pass |
| `#A3A3A3` on `#0A0A0A` | 7.85 | Pass | Pass |

**Rule:** The blue color `#2188FF` may only be used as text on a dark background,
or for large text (24px or larger, or 18.66px bold) on a light background. For links on a light background, use a darker blue, for example `#0A66D6`
(5.41:1).

### Proposed tokens

To complete the palette, following the current naming convention:

| Variable | Value | Usage |
| --- | --- | --- |
| `--gray-100` | `#F5F5F5` | Background for alternating sections |
| `--gray-300` | `#D4D4D4` | Borders and dividers |
| `--gray-500` | `#737373` | Auxiliary text on white |
| `--gray-400-dark` | `#A3A3A3` | Auxiliary text on black |
| `--blue-strong` | `#0A66D6` | Links and focus states on light backgrounds |
| `--focus-ring` | `#2188FF` | Focus outline on dark backgrounds |

## Typography

### Families

| Family | Files | Variable | Class | Role |
| --- | --- | --- | --- | --- |
| **ITC Blair** | Light 300, Medium 500, Bold 700 | `--font-itc-blair` | `font-blair` or `.pearson-hardman-font` | Logo, headings, uppercase labels |
| **Nimbus Sans L** | Regular 400 and Bold 700, with italics | `--font-nimbus-sans` | `font-nimbus` (default for `body`) | Body text and interface | Both are loaded using `next/font/local` with `display: "swap"` and
defined fallbacks (`Copperplate` for Blair; `Helvetica Neue` and
`Helvetica` for Nimbus Sans).

**Why these fonts.** ITC Blair is a wide-stroke typeface designed for
all-caps, reminiscent of engraved lettering. It evokes the look of a
firm’s nameplate. Nimbus Sans is a clone of Helvetica—neutral and
corporate—aligning with the series' clean aesthetic.

**Licenses.** ITC Blair is sold by Monotype, and its use on the web
requires a license. Nimbus Sans L was distributed by URW alongside
Ghostscript under free licenses. Please verify the terms for both
before publishing. If the license for Blair is not feasible, free
alternatives available on Google Fonts with a similar effect include
**Cinzel** (serif) and **Syncopate** or **Michroma** (sans-serif, wide).

### Scale

| Token | Size (mobile → desktop) | Family | Usage |
| --- | --- | --- | --- |
| `display` | 40 → 72 px | Blair Medium, all-caps, `tracking-[0.08em]` | Hero `h1` |
| `h2` | 28 → 44 px | Blair Medium | Section headings |
| `h3` | 20 → 28 px | Nimbus Bold | Card headings |
| `eyebrow` | 12 → 14 px | Blair Bold, all-caps, `tracking-[0.2em]` | Labels above headings |
| `body` | 16 → 18 px | Nimbus Regular, `leading-relaxed` | Body text |
| `small` | 14 px | Nimbus Regular | Captions and footer |
| `quote` | 28 → 48 px | Nimbus Italic | Quotations |

Use `clamp()` for fluid sizing, for example:
`text-[clamp(2.5rem,6vw,4.5rem)]`.

## Spacing and grid

- Tailwind’s default spacing scale (multiples of 4 px).
- Container: `max-w-7xl mx-auto px-4 md:px-8`.
- 12-column grid on the desktop and 4 on mobile.
- Sections with generous vertical spacing: `py-20 md:py-32`.
- Standard Tailwind breakpoints (`sm` 640, `md` 768, `lg` 1024,
`xl` 1280).

## Images

| Rule | Detail |
| --- | --- |
| Treatment | Black and white with a slight bluish tint and high contrast |
| Format | WebP or AVIF, served via `next/image` |
| Hero | Full-width image with a dark gradient overlay to ensure text contrast. The `.hero-image-gradient` class already exists (as an empty class) in `globals.css` |
| Portraits | Monograms or illustrations. Do not use photos of the actors (see [document 02](./02-produto-e-conteudo.md#aspectos-legais-e-de-propriedade-intelectual)) |
| Alt text | Decorative images use `alt=""`. Images containing content must have a description |
| `quality` | `HeroSection` uses `quality="100"`. Values ​​between 75 and 85 significantly reduce file size without any visible loss in quality |

## Motion

- Pre-defined transitions: `.transition-normal` (0.3s) and `.transition-fast`
(0.15s).
- Subtle animations: smooth fade-in on scroll, sliding underlines for
links.
- `prefers-reduced-motion: reduce` automatically disables `scroll-behavior: smooth`. 
All new animations must respect this preference (in Tailwind, use
`motion-safe:` and `motion-reduce:`).

## Accessibility

- A single `h1` per page, with a heading hierarchy that contains no skipped levels. - "Skip to content" link at the beginning of the `Header`.
- Visible focus on all interactive elements. Do not remove the `outline` without
providing a replacement.
- Contrast must adhere to the [Colors](#contraste-wcag-21) table.
- The mobile menu must include `aria-expanded` and `aria-controls` attributes,
and must close when the `Esc` key is pressed.
- `lang="pt-BR"` is already defined in the `<html>` tag.
- The custom scrollbar (`::-webkit-scrollbar`) only works in WebKit- and
Blink-based browsers. Firefox uses the default scrollbar, which is acceptable.

by caiothedev<br />
#design