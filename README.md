# Halia

A demo website by Primaxoft for Halia & Co., an invented tax and accounting firm. It is a static Next.js site built from the Fiskal Figma file, with the tactile UI rules from `.claude/skills/tactile-design`. See `docs/design-plan.md` for the original design plan.

Repository: https://github.com/iqmalhafizbzz/Website-Halia

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/ (deploy to Cloudflare Pages)
npm run lint
```

- Copy: `src/content/site.ts`
- Tokens, type scale and tactile shadows: `src/app/globals.css` (Figma values snapped to Tailwind; each comment names the source value)
- Layout, topbar, phone menu sheet, footer and page blocks: `src/components/site/`
- Photos and icons from Figma: `public/img/`
- Arc components (vendored, installed with `npx shadcn@latest add @uiarc/<id>`): `src/components/arc/`

`python3 scripts/flatten-preview.py out preview` turns the export into flat pages with relative paths, for hosting the site under any sub-path.

## Development pages

These are routed by `npm run dev` only. Normal builds leave them out; build with `HALIA_CANVAS=1` to include them, for a private preview.

- http://localhost:3000/canvas/ shows every page live, side by side, at desktop width, with pan, zoom, fit all, reset view, movable pages and copyable names. Pages are listed in `src/canvas/registry.ts`; the canvas code lives in `src/canvas/`.
- http://localhost:3000/compare/ shows each part of the UI (buttons, cards, tables, dropdowns, sheets) twice: with the Figma originals and with the tactile treatment. Code in `src/components/compare/`.
