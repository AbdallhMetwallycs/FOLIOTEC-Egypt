# Project Architecture — Falcon Pack Solutions

## 1. Project Overview

**Business purpose.** Falcon Pack Solutions is a B2B packaging *trading and sourcing* partner (not a factory owner). The site exists to generate qualified RFQs from industrial, retail, and food customers worldwide, and to communicate engineering-grade credibility for nine product families (film blowing, laminated films, shrink films, stretch films, protective films, shopping bags, garbage bags, and adjacent SKUs).

**Technology stack.**
- **Framework:** TanStack Start v1 (React 19 + Vite 7), SSR-capable, deployable to Cloudflare Workers / edge.
- **Language:** TypeScript (strict).
- **Styling:** Tailwind CSS v4 (CSS-first config via `src/styles.css` + `@theme`).
- **UI primitives:** shadcn/ui (Radix-based) under `src/components/ui/`.
- **Routing:** file-based, generated to `src/routeTree.gen.ts`.
- **State / data:** TanStack Query (provider wired in `__root.tsx`); React Context for language.
- **Forms:** native `<form>` + Zod validation (`zod`).
- **Icons:** `lucide-react`.

**Design system.** Dark "German engineering" theme: charcoal/graphite backgrounds, amber accent (`--primary`), hairline borders, mono labels (JetBrains Mono) for technical voice, Inter / Inter Tight for body and display. All colors are semantic tokens in `src/styles.css` — never hard-coded in components.

---

## 2. Architecture

### Folder structure

```
src/
  assets/                AI-generated industrial imagery (hero, films, industries)
  components/
    site/                App-specific composition (Header, Footer, Layout, Section, RFQForm)
    ui/                  shadcn primitives (button, input, label, textarea, …)
  hooks/                 use-mobile.tsx
  lib/
    i18n.tsx             LangProvider + t() + RTL handling
    products.ts          Canonical product catalog (EN/AR)
    utils.ts             cn() helper
    error-capture.ts     SSR error capture
    error-page.ts        Fallback HTML for catastrophic SSR failure
    lovable-error-reporting.ts
  routes/
    __root.tsx           Root shell, head(), providers, error/notfound boundaries
    index.tsx            Home
    about.tsx            About / company method
    products.tsx         Catalog (9 families)
    industries.tsx       Verticals served
    solutions.tsx        5-step engagement process
    contact.tsx          RFQ form + contact details
    sitemap[.]xml.ts     /sitemap.xml server route
  router.tsx             createRouter() factory
  server.ts              SSR fetch entry with error wrapper
  start.ts               createStart() + global middleware
  styles.css             Tailwind v4 entry + @theme tokens
public/
  robots.txt
Future_Enhancements.md
PROJECT_ARCHITECTURE.md
LOCAL_SETUP.md
CURSOR_HANDOFF.md
README.md
```

### Route structure

| URL            | File                       | Purpose                          |
| -------------- | -------------------------- | -------------------------------- |
| `/`            | `routes/index.tsx`         | Hero, value props, method grid   |
| `/about`       | `routes/about.tsx`         | Company narrative                |
| `/products`    | `routes/products.tsx`      | 9 product families               |
| `/industries`  | `routes/industries.tsx`    | Verticals (food, retail, …)     |
| `/solutions`   | `routes/solutions.tsx`     | Process steps                    |
| `/contact`     | `routes/contact.tsx`       | RFQ form                         |
| `/sitemap.xml` | `routes/sitemap[.]xml.ts`  | XML sitemap (server route)       |

### Component hierarchy

```
__root (LangProvider, QueryClientProvider, HeadContent, Outlet)
  └─ Layout
       ├─ Header              language toggle, nav, RTL aware
       ├─ <route component>
       │    └─ Section        consistent vertical rhythm wrapper
       │         └─ RFQForm   (on /contact)
       └─ Footer
```

### Reusable UI

shadcn primitives in `src/components/ui/` (Button, Input, Label, Textarea, Card, Accordion, etc.). App-specific composition lives in `src/components/site/`. New UI work should compose `ui/*` rather than hand-roll markup.

---

## 3. Frontend

**TanStack Start.** Bootstrap files: `src/router.tsx`, `src/start.ts`, `src/server.ts`. Vite plugin auto-generates `src/routeTree.gen.ts` — never edit by hand. Vite config (`vite.config.ts`) uses the Lovable preset and redirects the server entry to `src/server.ts` for an SSR error wrapper.

**TypeScript.** `strict: true`, bundler module resolution, `@/*` alias → `src/*`. Configured in `tsconfig.json`.

**Tailwind v4.** Single entry `src/styles.css` with `@import "tailwindcss";` and a `@theme` block defining semantic tokens (`--background`, `--foreground`, `--primary`, `--surface`, `--border`, etc.). There is **no** `tailwind.config.js`. Fonts are loaded via `<link>` in the root head, then referenced through `--font-*` tokens.

**Shadcn components used today.** Button, Input, Label, Textarea (in `RFQForm`); the full library is installed and ready under `components/ui/`.

**State management.** TanStack Query is provided in `__root.tsx` for future server data. Language is a small React Context (`LangProvider` in `src/lib/i18n.tsx`). No Redux / Zustand — keep it minimal until justified.

---

## 4. Internationalization

- **Provider:** `LangProvider` in `src/lib/i18n.tsx`. Exposes `{ lang, setLang, t, dir }`.
- **Languages:** `en` (default) and `ar`.
- **Translation source:** in-file `messages` dictionary inside `src/lib/i18n.tsx`. Product names live in `src/lib/products.ts` (`{ key, en, ar }`).
- **RTL:** on language change, the provider sets `document.documentElement.dir = "rtl" | "ltr"` and `lang = "ar" | "en"`. Tailwind logical utilities and flex flow handle layout; numeric/spec content keeps LTR direction inside RTL pages where needed.
- **Toggle:** language switch in `Header`.

For production scale, extract `messages` to JSON files per locale (`src/locales/en.json`, `src/locales/ar.json`) and add per-locale routing (`/ar/...`) with hreflang.

---

## 5. SEO

- **Metadata strategy.** Each route owns its own `head()` with route-specific `title`, `description`, `og:title`, `og:description`. The root `__root.tsx` sets organization defaults plus Open Graph and Twitter card baselines, and emits JSON-LD `Organization` schema. Per-leaf `og:image` should be added when hero imagery is final.
- **Sitemap.** Generated by `src/routes/sitemap[.]xml.ts` as a server route at `/sitemap.xml`. Update the `entries` array when adding routes.
- **Robots.** `public/robots.txt` — currently `User-agent: * / Allow: /`. Add `Sitemap:` directive once a production domain is set.
- **Structured data recommendations.** Add `Product`, `BreadcrumbList`, and `FAQPage` schemas as catalog deepens. Add `LocalBusiness` if a physical HQ is announced.

---

## 6. Forms

- **RFQ form** lives in `src/components/site/RFQForm.tsx`, mounted on `/contact`.
- **Fields:** name, company, country, email, phone, product (select bound to `PRODUCTS`), quantity, message.
- **Validation:** Zod schema co-located in the component. Trim + length bounds + email format + required product selection.
- **Current behavior:** client-only — successful validation simulates a submit and shows a success state. No data is persisted yet.
- **Future backend integration points (do this next):**
  1. Replace `setTimeout` with a `createServerFn({ method: "POST" })` in `src/lib/rfq.functions.ts`.
  2. Persist to Lovable Cloud (Postgres + RLS) — table `rfq_submissions`, RLS allowing `insert` to `anon`, `select` to admins only.
  3. Send notification email via Resend / SendGrid from the server function.
  4. Mirror to CRM (HubSpot/Salesforce) — see Future Enhancements.

---

## 7. Deployment

**Build commands.**
- `npm run dev` — local dev server.
- `npm run build` — production build (SSR bundle + client assets).
- `npm run build:dev` — development-mode build (used for prerender checks).
- `npm run preview` — preview the production build locally.

**Environment variables.** None required for the MVP. When backend wiring lands, the expected variables are documented in `.env.example` and `README.md`:
- `VITE_PUBLIC_SITE_URL` — canonical site URL for SEO / OG.
- `RESEND_API_KEY` — transactional email (server only).
- `CRM_API_KEY` — CRM sync (server only).

**Production deployment.** Output targets Cloudflare Workers via Nitro (built-in to the Lovable preset). To self-host:
1. `npm run build`
2. Deploy the resulting `dist/` output per `@tanstack/react-start` docs (Workers, Node server, or Vercel adapter).
3. Set environment variables on the host.
4. Point DNS; configure a `Sitemap:` line in `robots.txt`.

---

## 8. Future Enhancements

See `Future_Enhancements.md` for the full backlog. Highlights:

- **Product detail pages** — `/products/$slug` with spec tables, downloadable spec sheet PDF, related industries.
- **CRM integration** — HubSpot or Salesforce, lead scoring, two-way sync.
- **Dynamics 365** — Sales + Business Central connector for enterprise accounts.
- **SAP** — IDoc / OData for ECC and S/4HANA quote-to-order.
- **Analytics** — Plausible (privacy-friendly) plus server-side conversion events to CRM.
- **Three.js hero** — WebGL extruded polymer ribbon with reduced-motion fallback.
- **3D product viewer** — per-product `.glb` with orbit, zoom, annotation hotspots.
