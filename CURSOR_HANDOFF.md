# Cursor / AI-Assisted Development Handoff

This document is the briefing for any AI pair-programmer (Cursor, Claude Code, Copilot Workspace) picking up the project.

## Project goals

Falcon Pack Solutions is a B2B **packaging trading and sourcing** website. The site does **not** claim factory ownership. Primary objectives, in order:

1. Generate qualified RFQs from industrial, retail, and food brands.
2. Communicate engineering credibility (specs, process, quality discipline).
3. Rank for category + region keywords (films, shrink, stretch, laminates).
4. Support English and Arabic with full RTL.

## Current implementation status

**Stack:** TanStack Start v1 (React 19, Vite 7), TypeScript strict, Tailwind v4 (CSS-first), shadcn/ui, Zod, TanStack Query (wired but unused), Lucide icons.

### Completed features

- 7 routes: `/`, `/about`, `/products`, `/industries`, `/solutions`, `/contact`, `/sitemap.xml`.
- Dark "engineering" design system with semantic tokens in `src/styles.css`.
- Header + Footer + Layout + Section composition primitives.
- Bilingual EN/AR with `LangProvider` (`src/lib/i18n.tsx`) and automatic `dir` switching.
- Product catalog data model (`src/lib/products.ts`) covering all nine families.
- RFQ form with Zod validation (`src/components/site/RFQForm.tsx`) — client-only submit simulation.
- SEO: per-route `head()`, root Organization JSON-LD, OG + Twitter defaults, `robots.txt`, server-rendered `sitemap.xml`.
- AI-generated hero / products / industries imagery in `src/assets/`.
- SSR error wrapper (`src/server.ts`, `src/start.ts`) with HTML fallback.

### Pending features

- RFQ persistence and email notification (server function + Lovable Cloud / Postgres).
- Product detail pages (`/products/$slug`).
- Per-locale routing (`/ar/...`) with hreflang.
- Full Arabic copywriting audit (current strings are MVP-level).
- Analytics (Plausible + server-side conversion events).
- Customer portal (orders, COAs, MSDS, reorder).
- CRM / ERP / Dynamics 365 / SAP connectors.
- 3D product viewer, Three.js hero, interactive machinery showcase.

### Technical debt

- Translations live inside a single file (`src/lib/i18n.tsx`) — extract to JSON per locale before adding a third language.
- `og:image` is not yet set per route — wire hero imagery into leaf `head()` once final.
- No automated tests. Add Vitest unit tests for `RFQForm` validation and Playwright smoke tests for each route.
- RFQ form swallows submit in a `setTimeout` — replace with a `createServerFn` POST.
- `robots.txt` does not yet declare `Sitemap:` (waiting on production domain).
- Some inline copy duplicates between routes — promote to shared `content/` constants when content stabilizes.

## Recommended development roadmap

### Phase 1 — MVP Stabilization
- Replace placeholder copy with finalized marketing language (EN + AR).
- Set production domain; update `BASE_URL` in `sitemap[.]xml.ts` and add `Sitemap:` line to `robots.txt`.
- Add per-leaf `og:image` referencing hero art.
- Add Vitest + Playwright; cover RFQ validation and a smoke test per route.
- Add `.env.example` consumers as needed; document in `README.md`.

### Phase 2 — Lead Generation Optimization
- Persist RFQ submissions (Lovable Cloud / Postgres + RLS).
- Email notifications via Resend.
- Add UTM capture + hidden fields on the RFQ form.
- Add Plausible analytics + server-side `rfq_submitted` event.
- A/B test hero CTA copy; add a sticky mobile "Request quote" bar.
- Programmatic landing pages: product × industry × country matrix.

### Phase 3 — CRM & ERP Integrations
- HubSpot or Salesforce bidirectional sync (contacts, deals, RFQs).
- Lead scoring on form fields (quantity, country, product family).
- Dynamics 365 Sales + Business Central connector.
- SAP IDoc / OData connector for ECC and S/4HANA accounts.
- DocuSign for NDAs / framework agreements.

### Phase 4 — Advanced Product Catalog
- `/products/$slug` detail pages with spec tables, certifications, MOQs.
- Faceted search (polymer, gauge, treatment, certification).
- Spec sheet PDF generator (server-rendered).
- Sample request flow separate from RFQ.
- Customer portal: order history, COAs, MSDS, reorder.

### Phase 5 — 3D Experience & Digital Manufacturing Platform
- Three.js hero (WebGL extruded polymer ribbon, reduced-motion fallback).
- Per-product `.glb` viewer with orbit + annotation hotspots.
- Interactive scroll-driven film-blowing line tour.
- Sustainability dashboard (recycled content, carbon-per-kg).
- Supplier audit registry (public summary of audited mills).
- Real-time shipment tracking (Maersk / DHL / MSC APIs).

## Working conventions

- Use semantic tokens — never `text-white`, `bg-[#…]`, or raw hex in JSX.
- Add a `head()` block to every new route with unique title + description.
- New shared UI goes in `src/components/site/`. Generic primitives → `src/components/ui/`.
- Add a route file under `src/routes/`; do **not** edit `routeTree.gen.ts`.
- Keep `createServerFn` handlers in `*.functions.ts` files outside `src/server/`.
- Update `src/routes/sitemap[.]xml.ts` whenever public routes change.
