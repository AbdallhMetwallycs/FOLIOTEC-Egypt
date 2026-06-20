# Future Enhancements

A staged backlog for evolving the MVP into a flagship B2B platform. Items are grouped by track and ordered roughly by user-visible impact.

## Visual & Interactive

- **Three.js Hero** — replace the static hero image with a lightweight WebGL scene: slowly rotating extruded polymer ribbon, parallax-driven by cursor / scroll, fall back to the current static image for prefers-reduced-motion and low-end devices.
- **3D Product Viewer** — per-product `.glb` viewer with orbit / zoom / annotation hotspots (gauge, layer structure, treatment side), shared loader and material library.
- **Interactive Machinery Showcase** — guided tour of a film-blowing line: scroll-driven camera path with callouts for die head, IBC, nip rolls and winder. Educational, not a factory ownership claim.
- **Catalog filtering & faceted search** — by polymer, gauge range, treatment, certification, MOQ.
- **Sample request flow** — separate from RFQ, with address book and shipping consolidation.
- **Spec sheet PDF generator** — server-rendered PDF per product / per submitted RFQ.

## Backend & Integrations

- **RFQ persistence** — store submissions in Lovable Cloud (Postgres + RLS), with admin inbox UI and email notifications via Resend.
- **CRM Integration** — bidirectional sync of RFQs, contacts and accounts (HubSpot or Salesforce). Lead scoring on form fields.
- **ERP Integration** — order, inventory and shipment sync.
- **Dynamics 365 Integration** — Sales + Business Central connector for enterprise customers.
- **SAP Integration** — IDoc / OData connector for SAP ECC and S/4HANA accounts; quote-to-order automation.
- **DocuSign / e-signature** — for framework agreements and NDAs.
- **Shipment tracking** — Maersk / DHL / MSC carrier APIs surfaced on a customer portal.

## Internationalization

- **Full Arabic content audit** — currently MVP-translated UI strings; expand to localized SEO copy, units and regional phone formats.
- **Add languages** — German, French, Turkish, Mandarin.
- **Per-locale routing** — `/ar/...`, `/de/...` with hreflang tags and localized sitemaps.

## Content & SEO

- **Insights / Blog** — long-form technical articles (REACH updates, film selection guides, sustainability briefs).
- **Case studies** — anonymized customer programmes with measurable outcomes.
- **Programmatic landing pages** — product × industry × country matrix for long-tail intent.
- **Structured data** — Product, Organization, BreadcrumbList, FAQPage schema across catalogue.

## Trust & Compliance

- **Customer portal** — order history, COAs, MSDS, invoices, reorder.
- **Supplier audit registry** — public summary of audited mills and certification scopes.
- **Sustainability dashboard** — recycled-content tracking, carbon-per-kg by product line.

## DevOps

- **GitHub project structure** — README with architecture diagram, CONTRIBUTING, CODEOWNERS, issue / PR templates.
- **CI** — typecheck, lint, unit + Playwright smoke tests on every PR.
- **Preview deployments** per PR; production behind a CDN with image optimization.
- **Analytics** — privacy-friendly (Plausible) plus server-side conversion events to CRM.
