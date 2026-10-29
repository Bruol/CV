# CV (React + Vite)

A small React app that renders a CV and exports print-perfect A4 PDFs.

The default and required format for new CVs is the blue-and-black layout in `src/cv.css`: centered header, blue underlined links, black text, uppercase section headings, and right-aligned dates.

This repo renders a CV (single-page, A4) and can export it to PDF via Playwright.

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

## Routes

- `/` CV
- `/avatar-motion/cv` CV tailored to Synthesizing Avatar Motion from AI Glasses (Google XR)

Routing is defined in `src/main.tsx`.

## Export PDFs

Export PDFs for all routes:

```bash
bun run export:pdf
```

Output:

- `dist/cv.pdf` (route `/`)
- `dist/avatar-motion-cv.pdf` (route `/avatar-motion/cv`)

Notes:

- `dist/` is gitignored by default (see `.gitignore`). Copy the PDFs out of `dist/` if you want to keep them.
- Export uses `@media print` and `@page` rules; backgrounds are included (`printBackground: true`).
- The exporter runs a tiny static server with SPA fallback so routes like `/10` work when rendering.
- You can change the port via `PORT=5000 bun run export:pdf`.

Exporter code: `scripts/export-pdf.ts`.

Playwright note:

- If PDF export fails because Chromium is missing, run `bunx playwright install chromium`.

PDF constraints that matter:

- Keep each design A4-sized (`210mm x 297mm`) and single-page.
- Avoid overflow; prefer `max-height: 297mm` + `overflow: hidden` (or ensure content fits).
- Use simple, reading-order-friendly layouts if you want strong AI parsing.

## Project Stack

- React + TypeScript
- Vite
- Tailwind CSS (used by the original design)
- Playwright (PDF export)
