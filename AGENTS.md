# AGENTS.md — Portfolio website conventions

This document defines implementation conventions and editing guardrails for AI agents and contributors working in this repository.

## Project identity

- Project: **Portfolio website**
- Type: Static portfolio landing page with case studies
- Framework: Astro (`.astro` components)
- Styling: Tailwind v4 + SCSS (global partials)
- Runtime target: static output via `astro build` → GitHub Pages

## Core architecture rules

1. **Page composition stays in `src/pages`**
   - Route files compose sections; do not move large markup into route-level business logic.
2. **Section blocks live in `src/components/blocks`**
   - Blocks are page sections (`HeroBlock`, `AboutBlock`, `PortfolioGridBlock`, `TextMediaBlock`, `ContentBlock`, `BannerBlock`).
   - Blocks accept typed `content` props and focus on render structure only.
   - **Subblocks** live in `src/components/blocks/subblocks/`: reusable fragments composed inside blocks (`SectionIntro.astro`).
3. **Reusable primitives live in `src/components/ui`**
   - `Section.astro`, `Button.astro`, `Footer.astro`, `StickyNav.astro`, `Breadcrumbs.astro` are shared primitives.
4. **Section content is data-driven**
   - All section text/config belongs in `src/data/pages/*.ts`.
   - Type definitions belong in `src/data/types.ts`.
5. **Layout shell remains centralized**
   - `src/layouts/MainLayout.astro` owns document shell, global style imports, and Google Fonts.
   - `src/layouts/PageTemplate.astro` wraps pages with StickyNav, main slot, and Footer.

## Data and typing conventions

- **Never hardcode user-facing copy or media in components or pages.**
- **Always pull content from typed data sources instead of inline strings in `.astro` files.**
- Body copy is modeled as `body: string[]` (one paragraph per entry). Render with `content.body.map((paragraph) => <p>…</p>)`.
- Update types first when changing content shape.
- Export section objects individually and re-export through `src/data/pages/home/index.ts`.
- Use explicit interfaces over broad `any` or untyped objects.

## Styling conventions

1. **Use the hybrid styling model intentionally**
   - Tailwind: layout, spacing, flex/grid, responsive behavior.
   - SCSS tokens/typography: brand primitives and semantic text styles.
2. **Use Tailwind size scale for spacing and sizing in markup**
3. **Reuse existing typography classes before inline text styles**
   - `.h1`, `.h2`, `.h3`, `.h4`, `.h5` in `_typography.scss`.
4. **Prefer tokens over hard-coded values**
   - Reuse CSS custom properties from `_tokens.scss`.
5. **Keep global styles minimal**
   - `global.scss` should contain shared base rules only.

## Component conventions

- Astro frontmatter should include: imports, `Props` interface, `Astro.props` destructuring.
- Keep components presentational.
- Preserve accessibility basics: headings hierarchy, focus-visible states, decorative images with empty `alt`.

## Editing rules for agents

- Do not rename or move top-level folders without explicit request.
- Do not introduce a new UI framework or CSS-in-JS.
- Do not remove existing type safety in favor of looser typing.
- Keep changes minimal and scoped to the requested feature/fix.

## Image asset conventions

- `public/images/`: shared brand images.
- `public/images/content/`: case study and section imagery.

## File-level guidance

- `src/pages/index.astro`: home (hero + featured projects + about preview).
- `src/pages/about.astro`: about page with `AboutBlock`.
- `src/pages/portfolio.astro`: full project grid with `PortfolioGridBlock`.
- `src/pages/case/[slug].astro`: individual case study (MDX content collection).
- `src/data/pages/home/*`: home section content objects.
- `src/data/pages/about.ts`: about page content.
- `src/data/pages/portfolio.ts`: portfolio page content.
- `src/content/case/*/index.mdx`: case study MDX files with frontmatter.
- `src/styles/*`: tokens, typography, mixins, global styles.
- `src/lib/*`: (removed — no client-side libs currently).

## Validation checklist before finishing

- `npm run build` succeeds (requires `npm install` first).
- New/updated data matches TypeScript interfaces.
- Styling follows token conventions (no unnecessary hard-coded colors).
- No regressions to layout composition in `index.astro`.
- Update `site` and `base` in `astro.config.mjs` before deploying to GitHub Pages.

---

## Session state (updated 2026-07-15)

### About the user
- Name: **Vadim Coolin** (vadimcoolin)
- Non-programmer — needs explanations, not just code
- Works via GitHub web interface (uploads files directly, no git CLI)
- Uses opencode Windows desktop app
- **NEW** — Switched from subpath `/portfolio/` to ROOT domain
- Site URL: https://vadimcoolin.github.io/
- Repo: https://github.com/vadimcoolin/vadimcoolin.github.io
- Project folder: `F:\Work\Dev\Coolin\vadimcoolin.github.io`
- Node.js at `C:\Program Files\nodejs\npm.cmd` (not in PATH)

### What was done this session
1. **Moved project** from `F:\Work\Dev\Coolin\portfolio` to `F:\Work\Dev\Coolin\vadimcoolin.github.io`
2. **Removed** `base: "/portfolio"` from `astro.config.mjs` — site now at root domain
3. **Fixed all BASE_URL handling** — all components now strip trailing slash from `import.meta.env.BASE_URL` so it works both with and without base path
4. **Verified build** — all URLs now correct (e.g. `/images/...` instead of `/portfolio/images/...`)
5. **Updated `.git-ready\`** — 13 files ready for upload to new repo

### Project status
- All pages working: home, about, portfolio, contact, case studies (case-01, case-02, case-03, case-05, case-06; case-04 disabled)
- All links point to root domain: `/about`, `/contact`, `/case/case-01`, etc.
- BASE_URL handling standardized: `import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + path`
- GitHub Actions workflow at `.github/workflows/deploy.yml` — builds on push to `main`
- `dist/` builds successfully with `npm run build`
- `node_modules/` and `.astro/` are hidden in Windows File Explorer

### Pending actions
1. **Upload `.git-ready\` files to GitHub** — drag entire contents to `vadimcoolin.github.io` repo
2. **IMPORTANT**: `.github/` folder must be uploaded too (it contains the workflow file)
   - If `.github` isn't visible in the upload, create the file manually at `https://github.com/vadimcoolin/vadimcoolin.github.io/new/main/.github/workflows/deploy.yml` — paste content from `.git-ready\.github\workflows\deploy.yml`
3. **Delete old repo** `vadimcoolin/portfolio` after verifying new site works
4. After upload, GitHub Actions will auto-build and deploy to https://vadimcoolin.github.io/

### Notes for next session
- User communicates in Ukrainian/Russian mix
- Check `AGENTS.md` for full conventions before making changes
- All source files at `F:\Work\Dev\Coolin\vadimcoolin.github.io`
- `.git-ready\` inside that folder contains only changed files for GitHub upload
- `public/images/logos/` — brand logos (8 SVGs) used in About page marquee
- `public/images/icons/arrow-left.svg` — navigation arrow (right arrow uses `scaleX(-1)`)
- All case study images at `public/images/content/case01/`..`case06/`
