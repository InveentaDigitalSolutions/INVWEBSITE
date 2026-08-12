# Inveenta — Brand & Color Guidelines

> Reference for designers and developers (including AI coding assistants).
> Tagline: **engineering intelligent business**. Pillars: optimization · scalability · performance.
> Version 1.0 · June 2026

---

## 1. Design tokens

| Token | Name | HEX | RGBA | Role |
|---|---|---|---|---|
| `--navy` | Primary Navy | `#16243B` | `rgba(22, 36, 59, 1)` | Structure: headers, footers, body text, primary dark surfaces |
| `--green` | Accent Green **(official)** | `#B7DA4C` | `rgba(183, 218, 76, 1)` | The single spark: logo dot, highlights, active states, KPI figures |
| `--green-screen` | Electric Green **(screen-only)** | `#DBFC52` | `rgba(219, 252, 82, 1)` | Large display numerals on dark surfaces only — never print, never the official accent |
| `--white` | White | `#FFFFFF` | `rgba(255, 255, 255, 1)` | Primary canvas; text/wordmark on navy |
| `--mist` | Light Mist | `#E7EAEF` | `rgba(231, 234, 239, 1)` | Softer text/elements on dark surfaces |
| `--grey` | Tagline Grey | `#5E5F64` | `rgba(94, 95, 100, 1)` | Secondary text, taglines, captions on light backgrounds |

**Signature background gradient** (full-bleed dark surfaces only — covers, hero bands, deck dividers):

| Stop | HEX |
|---|---|
| Top | `#505968` |
| Mid | `#323949` |
| Base | `#252D40` |

> **One green, not two.** `#B7DA4C` is the official brand green across print and digital. `#DBFC52` is a display-only variant confined to large on-screen numerals on dark backgrounds. Never use both greens in the same medium.

### CSS variables

```css
:root {
  --navy: #16243B;
  --green: #B7DA4C;        /* official accent */
  --green-screen: #DBFC52; /* large on-screen numerals on dark only */
  --white: #FFFFFF;
  --mist: #E7EAEF;
  --grey: #5E5F64;

  /* signature dark gradient */
  --grad-top: #505968;
  --grad-mid: #323949;
  --grad-base: #252D40;
  --gradient-dark: linear-gradient(180deg, var(--grad-top) 0%, var(--grad-mid) 50%, var(--grad-base) 100%);

  /* semantic roles */
  --bg: var(--white);
  --bg-dark: var(--navy);
  --text: var(--navy);
  --text-on-dark: var(--white);
  --text-muted: var(--grey);
  --accent: var(--green);
}
```

### Tokens as JSON

```json
{
  "color": {
    "navy": "#16243B",
    "green": "#B7DA4C",
    "greenScreen": "#DBFC52",
    "white": "#FFFFFF",
    "mist": "#E7EAEF",
    "grey": "#5E5F64",
    "gradient": ["#505968", "#323949", "#252D40"]
  },
  "font": {
    "wordmark": "Oriya MN",
    "ui": "Montserrat",
    "fallback": "Segoe UI, system-ui, sans-serif"
  }
}
```

---

## 2. Color usage rules

**Do**

- Keep green to *points* of emphasis: the dot, icons, small highlights, single KPI figures, active states.
- Put **navy or white text on green** — green needs dark text to stay legible.
- Use white / light pages for content; reserve navy and the topographic gradient for hero, dividers, and CTA moments.
- Keep the three-square motif in fixed order: **green → navy → white**.
- Use `#B7DA4C` as the one official green everywhere.

**Don't**

- Don't set body copy in green, or place green text on a white background (fails contrast).
- Don't use green as a large fill or full background.
- Don't place text over the busy areas of the topographic gradient.
- Don't mix the two greens within the same medium.
- Don't recolor, rotate, outline, or remove the dot from the logo.

**Contrast quick check**

- Navy `#16243B` on white → primary body text. ✅
- White / Mist on navy → text on dark. ✅
- Navy on green `#B7DA4C` → button labels, badges. ✅
- Green on white → **decorative shapes/icons only, never text.** ⚠️

---

## 3. Typography

- **Wordmark:** `Oriya MN`, lowercase, with the green accent dot. Oriya MN is a macOS system font and is **not** installed on most Windows/web environments — always place the wordmark as supplied artwork (SVG/PNG), never as live text, or it will silently fall back.
- **Headings, body, UI:** `Montserrat` (free, SIL Open Font License; available via Google Fonts, embeddable in Office / Power BI / web). Weight ladder: **SemiBold/Bold** headings, **Medium** labels, **Regular** body.
- **Tagline:** Montserrat, lowercase, letter-spaced, in Tagline Grey — *engineering intelligent business*.
- **Fallback:** where Montserrat is unavailable, use `Segoe UI` to stay close to the intended feel.
- Let **weight and whitespace** — not color — create hierarchy.

```css
/* import Montserrat where web fonts are allowed */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body { font-family: 'Montserrat', 'Segoe UI', system-ui, sans-serif; color: var(--text); }
h1, h2, h3 { font-family: 'Montserrat', 'Segoe UI', system-ui, sans-serif; font-weight: 700; color: var(--navy); }
```

### KPI / statistic pattern

The brand's signature way to present a figure: large numeral in green over an uppercase, letter-spaced label.

- **Figure:** large, bold, `--green`.
- **Label:** uppercase, letter-spaced, white on dark or navy on light.
- One figure per block — let it breathe.

```html
<div class="kpi">
  <div class="kpi__figure">$95K–120K</div>
  <div class="kpi__label">INVERSIÓN</div>
</div>
```
```css
.kpi { background: var(--navy); padding: 2rem; text-align: center; }
.kpi__figure { font-weight: 700; font-size: 2.75rem; color: var(--green); }
.kpi__label  { font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--white); }
```

---

## 4. Logo system

A lowercase wordmark with a distinctive green accent dot over the first letter. Three responsive tiers, two color modes.

**Responsive sizing**

- **Small** — `inv` mark only. Favicons, app icons, tight spaces.
- **Medium** — `inv` + the `engineering` descriptor. Compact headers, stamps.
- **Large** — full `inveenta` wordmark + tagline `engineering intelligent business`. Covers, sites, primary placements.

**Color modes**

- On light: navy wordmark, green dot, grey tagline, on white / near-white.
- On dark: light wordmark on navy, green dot retained.

**Protection**

- Clear space: free space ≥ the height of the accent dot on all sides.
- Minimum size: do not render the `inv` mark below ~24 px / 8 mm wide.
- Do not recolor, stretch, rotate, outline, or remove the dot, or place the wordmark over busy texture.

---

## 5. Graphic elements

- **Three-square motif** — secondary mark used to frame layouts (top/bottom of a slide, or as a section marker). Fixed order **green · navy · white**, even spacing.
- **Background texture** — layered topographic gradient (`--gradient-dark`) for dark, full-bleed contexts. Keep copy on the calmer regions.

---

## 6. Quick reference

- **Primary navy** `#16243B` — structure & text
- **Official green** `#B7DA4C` — the single accent
- **Screen-only green** `#DBFC52` — large numerals on dark
- **Neutrals** `#FFFFFF` · `#E7EAEF` · `#5E5F64`
- **Gradient** `#505968 → #323949 → #252D40`
- **Type** wordmark `Oriya MN` · text `Montserrat` (fallback Segoe UI)
- **Green rule** point of emphasis only; dark text on green
- **Motif** three squares: green · navy · white
- **Layout** light-dominant content; navy + gradient for hero/CTA
