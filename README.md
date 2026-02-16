# CV (React + Vite)

A small React app that renders a CV and exports print-perfect A4 PDFs.

This repo includes multiple CV designs exposed as routes (`/`, `/1`, ...), and a Playwright-based exporter that saves each route as a PDF.

## Quickstart

Requirements:

- Bun

Install dependencies:

```bash
bun install
```

Install + run:

```bash
bun run dev
```

Build:

```bash
bun run build
```

Lint:

```bash
bun run lint
```

Preview the production build:

```bash
bun run preview
```

## Routes (Designs)

Open any of these in the dev server:

- `/` original layout
- `/1` - `/5` stylized variants
- `/6` - `/10` "AI-readable" variants (same linear layout as original; only typography/colors change)

Routing is defined in `src/main.tsx`.

Design components live in `src/designs/`.

## Export PDFs

Export PDFs for all routes:

```bash
bun run export:pdf
```

Output:

- `dist/cv.pdf` (route `/`)
- `dist/cv-swiss.pdf` (route `/1`)
- `dist/cv-terminal.pdf` (route `/2`)
- `dist/cv-editorial.pdf` (route `/3`)
- `dist/cv-brutalist.pdf` (route `/4`)
- `dist/cv-deco.pdf` (route `/5`)
- `dist/cv-warm-serif.pdf` (route `/6`)
- `dist/cv-mono-clean.pdf` (route `/7`)
- `dist/cv-dark-pro.pdf` (route `/8`)
- `dist/cv-latex.pdf` (route `/9`)
- `dist/cv-pastel.pdf` (route `/10`)

Notes:

- `dist/` is gitignored by default (see `.gitignore`). Copy the PDFs out of `dist/` if you want to keep them.
- Export uses `@media print` and `@page` rules; backgrounds are included (`printBackground: true`).
- The exporter runs a tiny static server with SPA fallback so routes like `/10` work when rendering.
- You can change the port via `PORT=5000 bun run export:pdf`.

Exporter code: `scripts/export-pdf.ts`.

Playwright note:

- If PDF export fails because Chromium is missing, run `bunx playwright install chromium`.

## Editing Content

CV content lives in one place:

- `src/data/cv.ts`

Edit that file to update:

- contact links
- education / experience / projects
- skills

All designs reuse the same data.

## Adding a New Design

1. Create a component in `src/designs/` (e.g. `src/designs/CV11.tsx`).
2. Add a route in `src/main.tsx`.
3. Add the route + output filename in `scripts/export-pdf.ts`.

PDF constraints that matter:

- Keep each design A4-sized (`210mm x 297mm`) and single-page.
- Avoid overflow; prefer `max-height: 297mm` + `overflow: hidden` (or ensure content fits).
- Use simple, reading-order-friendly layouts if you want strong AI parsing.

## Project Stack

- React + TypeScript
- Vite
- Tailwind CSS (used by the original design)
- Playwright (PDF export)
