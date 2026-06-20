# Falcon Pack Solutions

B2B packaging trading and sourcing website. Built with TanStack Start (React 19 + Vite 7), TypeScript, Tailwind CSS v4, and shadcn/ui. Bilingual (English + Arabic) with full RTL support.

## Quick start

```bash
git clone <your-repo-url> falcon-pack
cd falcon-pack
npm install
npm run dev
```

Open the URL printed in the terminal (default `http://localhost:5173`).

## Scripts

| Command             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                     |
| `npm run build`     | Production build (SSR + client bundle)        |
| `npm run build:dev` | Development-mode build                        |
| `npm run preview`   | Preview the production build locally          |
| `npm run lint`      | ESLint                                        |
| `npm run format`    | Prettier                                      |

## Project structure

```
src/
  assets/         Static imagery
  components/
    site/         App-specific composition (Header, Footer, RFQForm, …)
    ui/           shadcn primitives
  hooks/
  lib/            i18n, products data, utils
  routes/         File-based routes (TanStack Router)
  router.tsx
  server.ts       SSR entry with error wrapper
  start.ts        TanStack Start middleware
  styles.css      Tailwind v4 entry + design tokens
public/
  robots.txt
```

See `PROJECT_ARCHITECTURE.md` for the full architectural breakdown, `LOCAL_SETUP.md` for setup details, and `CURSOR_HANDOFF.md` for the AI-assisted development briefing.

## Environment variables

The MVP requires no environment variables. When backend features are added, copy `.env.example` → `.env.local` and fill in:

- `VITE_PUBLIC_SITE_URL` — canonical site URL used for SEO and OG tags (client + server).
- `RESEND_API_KEY` — transactional email for RFQ notifications (server only).
- `CRM_API_KEY` — CRM integration (server only).

Only variables prefixed `VITE_` are exposed to the browser.

## Deployment

The app builds to a Cloudflare Workers–compatible bundle via Nitro (built in to the TanStack Start preset). To deploy elsewhere (Node server, Vercel, etc.), follow the [TanStack Start deployment docs](https://tanstack.com/start/latest/docs/framework/react/hosting). Set environment variables on the host, then:

```bash
npm run build
# deploy dist/ per your platform's instructions
```

## Documentation

- [PROJECT_ARCHITECTURE.md](./PROJECT_ARCHITECTURE.md)
- [LOCAL_SETUP.md](./LOCAL_SETUP.md)
- [CURSOR_HANDOFF.md](./CURSOR_HANDOFF.md)
- [Future_Enhancements.md](./Future_Enhancements.md)

## License

Proprietary — © Falcon Pack Solutions. All rights reserved.
