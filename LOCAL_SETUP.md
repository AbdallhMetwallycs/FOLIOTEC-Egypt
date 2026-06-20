# Local Setup

## Requirements

- **Node.js** ≥ 20.x (LTS recommended). 22.x works.
- **Package manager:** `npm` (ships with Node), `pnpm` ≥ 9, or `bun` ≥ 1.1. All three work; pick one and stick with it (don't mix lockfiles).
- **Git** ≥ 2.40.
- **OS:** macOS, Linux, or Windows (WSL2 recommended on Windows).

## Installation

```bash
git clone <your-repo-url> falcon-pack
cd falcon-pack
npm install        # or: pnpm install   |   bun install
```

## Development

```bash
npm run dev
```

The Vite dev server prints a local URL (default `http://localhost:5173`). File-based routes under `src/routes/` are picked up automatically; the route tree regenerates on save.

## Build

```bash
npm run build
```

Produces a production bundle (SSR + client assets). Use `npm run build:dev` if you need a development-mode build (helpful for debugging prerender errors).

## Production preview

```bash
npm run preview
```

Serves the production build locally so you can verify SSR output before deploying.

## Lint & format

```bash
npm run lint
npm run format
```

## Environment variables

The MVP runs without any environment variables. When backend features are added, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Public variables must be prefixed `VITE_` to be exposed to the client. Everything else is server-only and read inside `createServerFn` handlers.

## Troubleshooting

- **Blank page / "no matching route".** The string in `createFileRoute("/path")` must match the filename mapping exactly. Restart the dev server after creating a new route file so `routeTree.gen.ts` regenerates.
- **`Cannot find module '@/…'`.** The `@` alias is wired in `tsconfig.json` and the Vite preset. Restart the TS server in your IDE.
- **Tailwind classes not applying.** Tailwind v4 is CSS-first — there is no `tailwind.config.js`. Tokens live in `src/styles.css` under `@theme`. Don't re-introduce the v3 `@tailwind base/components/utilities` directives.
- **Fonts unstyled.** Web fonts load via `<link>` in `src/routes/__root.tsx`. Never `@import` a remote font URL inside `styles.css` — Lightning CSS will fail.
- **Port already in use.** `npm run dev -- --port 5174`.
- **SSR error in dev.** Check the terminal — the server wrapper in `src/server.ts` and `src/start.ts` catches and logs the underlying error before returning a fallback HTML page.
- **Stale generated route tree.** Delete `src/routeTree.gen.ts` and restart `npm run dev`; the plugin will regenerate it.
- **Node version errors.** Use `nvm install 20 && nvm use 20`.
