# Inveenta — company website

Marketing website for **Inveenta S.A.** — _engineering intelligent business_.
Custom enterprise software for optimization, scalability and performance.

Built with **React + TypeScript + Vite** and **react-router-dom**. Single-page app
with routed industry deep-dive pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  App.tsx                 # router: Navbar + Routes + Footer
  data.ts                 # ALL content (company, capabilities, solutions,
                          #   industries, technology, copy, stats) — edit here
  useReveal.ts            # scroll-reveal hook
  components/
    HomePage.tsx          # home sections in order
    IndustryPage.tsx      # /industries/:slug deep-dive
    Hero, Pillars, Capabilities, Solutions, Showcase, Industries,
    Technologies, Approach, Contact, Footer, Navbar, CardGrid,
    Legal (Privacy/Imprint), Seo, CountUp, Icon, Logo, HeroVisual
public/
  logos/   # technology brand SVGs
  img/     # photos (industries, approach, showcase, og-image)
```

Content lives in **`src/data.ts`** — it's the single source of truth. To change
copy, capabilities, solutions, industries or the tech stack, edit that file.

## Things to set before / after launch

- **Contact form delivery** — set `company.formEndpoint` in `src/data.ts` to a
  [Formspree](https://formspree.io) endpoint to receive submissions in the inbox.
  While empty, the form falls back to opening the visitor's email client (mailto).
- **Domain** — update the placeholder `https://inveenta.com` in `index.html`
  (canonical + Open Graph), `public/robots.txt` and `public/sitemap.xml`.
- **Logo / favicon** — the wordmark currently renders as Montserrat text; drop in
  the official brand artwork (SVG) and replace `public/favicon.svg`.
- **Legal pages** — `Privacy` and `Imprint` (`src/components/Legal.tsx`) are
  templates; complete the bracketed details and have them reviewed.
- **OG image** — `public/og-image.jpg` (1200×630); swap for a branded card if desired.

## Deploy

Static SPA. Build output is `dist/`. SPA fallback (all routes → `index.html`) is
preconfigured for both hosts:

- **Vercel** — `vercel.json` (rewrites). Import the repo, framework auto-detected.
- **Netlify** — `netlify.toml` + `public/_redirects`. Build `npm run build`, publish `dist`.

## Brand

Navy `#16243B`, accent green `#B7DA4C` (single spark — never green text on white),
electric green `#DBFC52` (large numerals on dark only), grey `#5E5F64`, mist
`#E7EAEF`. Font: **Montserrat**. See `src/index.css` for tokens.
