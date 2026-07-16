# fahmiridho.me

![Astro](https://img.shields.io/badge/Astro-6-16181d?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-6-16181d?style=flat-square&logo=typescript&logoColor=white)
![Zero JS Frameworks](https://img.shields.io/badge/Client_Runtime-Vanilla-c92e3e?style=flat-square)

Personal portfolio of **Achmad Fahmi Ainur Ridho**: full-stack .NET engineer going deep into machine learning. Software engineering and AI/ML case studies, from production ASP.NET Core work to a fraud detection ML pipeline.

Live at **[fahmiridho.me](https://fahmiridho.me)**.

## The design system: "The Anomaly"

The identity is drawn from my fraud detection thesis: everything ordered and neutral, one point flagged. Two inks only.

| Role    | Value                   | Job                                                                |
| ------- | ----------------------- | ------------------------------------------------------------------ |
| Paper   | `#f7f7f6`               | Neutral stage, with a subtle SVG grain overlay                     |
| Ink     | `#16181d` + muted steps | All content, all structure                                         |
| Carmine | `#c92e3e`               | The single accent: anomaly marks, and anything the visitor touches |

The rule is semantic, not decorative: at rest the page is neutral and ordered; anomalies and interactions get flagged red, the same gesture as circling an outlier on a chart. The motif appears as the brand mark (a scatter with one circled outlier), the hand-drawn annotation around the hero word, the hover ring on project row numbers, the flagged flagship row, and a 404 page where the missing page is the outlier.

Typography: **Fraunces** (variable, serif) carries the voice, **Inter** the UI, system mono the metadata. Structure comes from hairline rules and whitespace, not cards or shadows.

## Engineering decisions

- **Static-first, zero framework runtime.** Astro 6 static output; the only client JavaScript is a few small vanilla scripts (reveal fallback, cursor-following project preview, category filter, reading progress).
- **CSS scroll-driven animations with graceful fallback.** Reveals run on native `animation-timeline: view()` where supported, fall back to an IntersectionObserver, and stay visible with no JavaScript at all (`@media (scripting: none)` + `<noscript>`).
- **Motion discipline.** Opacity and transform only, `prefers-reduced-motion` honored everywhere, no scroll hijacking, one `backdrop-filter` on the whole site (the sticky header).
- **Content as data.** Projects are MDX in a typed content collection; ordering, flags, and evidence figures are frontmatter. SEO (OpenGraph, JSON-LD Person/CreativeWork/Breadcrumb, sitemap) is generated per page.
- **Evidence is real.** Every image in a case study's evidence panels must be a genuine artifact: a screenshot, a notebook/tool export, or a page from a real document. Hand-made visuals are allowed only as covers or diagrams, must not imitate the look of a chart, dashboard, or screenshot, and are captioned as diagrams — never as evidence.
- **View transitions** via Astro's ClientRouter with a persistent header and footer.

## Stack

```txt
Astro 6 · TypeScript · Tailwind CSS 4 (tokens layer only) · MDX
Fraunces Variable + Inter (self-hosted, preloaded)
sharp for the image pipeline · Cloudflare Pages
```

## Routes

```txt
/                   Hero, selected work, background, contact
/projects/          Filterable archive of all case studies
/projects/[slug]/   Case study pages (numbered sections, evidence panels, reading progress)
/about/             Education, experience, skills, working style
/404                The page that is an outlier
```

## Develop

```bash
npm install
npm run dev        # dev server
npm run validate   # astro check + production build
npm run format     # prettier
```

## Author

**Achmad Fahmi Ainur Ridho** — Information Systems, Institut Teknologi Sepuluh Nopember (ITS)
[LinkedIn](https://id.linkedin.com/in/fahmiridho) · [GitHub](https://github.com/fahmiridho07)
