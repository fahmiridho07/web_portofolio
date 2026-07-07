# fahmiridho.me (web_portofolio) — Claude instructions

Live personal portfolio (Astro 6, TS, Tailwind 4 tokens-only, MDX content collections). Design
system "The Anomaly" is documented in `README.md` and the header comment of
`src/styles/global.css` — read both before touching any styling.

A fuller workspace manual lives one level up at `../CLAUDE.md` (multi-project folder on this
machine). If it is not present (fresh clone), the rules below stand alone.

## Definition of done

```bash
npm run validate   # astro check + production build — must pass, show the output
npm run format     # run after content changes
```

Dev server: `npm run dev` on 127.0.0.1:4321.

## Hard rules

1. **Two inks + one accent, nothing else.** Paper `#f7f7f6`, ink `#16181d`, carmine `#c92e3e`.
   Carmine is semantic — anomaly marks and anything the visitor touches — never decoration.
   Use existing CSS custom properties from `global.css`; never introduce a raw hex.
2. **Zero client frameworks.** Only small vanilla scripts, each with a no-JS fallback
   (`@media (scripting: none)` / `<noscript>` pattern already in the codebase).
3. **Motion discipline.** Opacity and transform only; `prefers-reduced-motion` honored; no scroll
   hijacking; no new `backdrop-filter`.
4. **No cards, shadows, or chrome.** Structure comes from hairline rules and whitespace.
5. **Content is data.** Case studies are MDX in `src/content/projects/`; frontmatter must satisfy
   the zod schema in `src/content.config.ts` (`category` must be an id from `src/data/profile`).
   Follow `docs/project-template.mdx` section order. Never invent metrics or inflate the role —
   this page represents a real person to recruiters.
6. **Facts about Fahmi** (bio, role, links, experience) change only on his explicit request.

## Git

Commit only when asked. Message style: plain imperative sentence, capitalized, no type prefix —
e.g. "Add print stylesheet and drop stale scripts cache rule". Never push or deploy without an
explicit request (the site is live). `.claude/`, `terminals/`, `agent-tools/`, `.tmp/` are never
committed.

## Stop and ask when

- A change needs a new color, font, motif, or dependency — that's an identity/product decision.
- Copy about Fahmi himself would change.
- Anything would deploy or publish.
