import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, FileCheck2, Cog } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useLang } from "@/lib/i18n";
import { PRODUCTS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import films from "@/assets/films.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falcon Pack Solutions — Engineered Packaging, Globally Sourced" },
      { name: "description", content: "B2B packaging trading and sourcing. Films, laminates, shrink, stretch, protective films, shopping and garbage bags — to spec, on schedule." },
      { property: "og:title", content: "Falcon Pack Solutions" },
      { property: "og:description", content: "Engineered packaging, globally sourced." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t, lang } = useLang();
  const features = [
    { I: Cog, t: t("f1_t"), d: t("f1_d") },
    { I: ShieldCheck, t: t("f2_t"), d: t("f2_d") },
    { I: Truck, t: t("f3_t"), d: t("f3_d") },
    { I: FileCheck2, t: t("f4_t"), d: t("f4_d") },
  ];
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden hairline-bottom">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="container-page py-24 md:py-36 max-w-4xl">
          <div className="eyebrow mb-5">{t("hero_eyebrow")}</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.02]">{t("hero_title")}</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">{t("hero_sub")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-12 px-6 font-medium">
              <Link to="/contact">{t("cta_rfq")} <ArrowRight className="ms-2 h-4 w-4 flip-rtl" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-transparent hover:bg-surface text-foreground rounded-sm h-12 px-6">
              <Link to="/products">{t("cta_explore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="hairline-bottom">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-border [&>div]:px-6 [&>div]:py-8 rtl:divide-x-reverse">
          {[["24","Markets"],["180+","Active SKUs"],["12","Audited mills"],["98%","On-time"]].map(([n,l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl text-foreground">{n}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <Section eyebrow="01 / Method" title={t("features_title")} sub={t("features_sub")}>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border rounded-md overflow-hidden">
          {features.map(({ I, t: ttl, d }) => (
            <div key={ttl} className="bg-surface p-7 hover:bg-surface-2 transition-colors">
              <I className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-lg text-foreground">{ttl}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Products preview */}
      <section className="hairline-top">
        <Section eyebrow="02 / Catalogue" title={t("products_title")} sub={t("products_sub")}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <Link key={p.key} to="/products" className="group rounded-md border border-border bg-surface p-6 hover:border-primary/40 hover:bg-surface-2 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition flip-rtl" />
                </div>
                <h3 className="mt-6 text-xl text-foreground">{lang === "ar" ? p.ar : p.en}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{lang === "ar" ? p.descAr : p.descEn}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              {t("nav_products")} <ArrowRight className="h-4 w-4 flip-rtl" />
            </Link>
          </div>
        </Section>
      </section>

      {/* Image band */}
      <section className="hairline-top">
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
            <img src={films} alt="Industrial polymer film roll" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-4">03 / Trust</div>
            <h2 className="text-3xl md:text-5xl text-foreground">{t("trust_title")}</h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground">{t("trust_sub")}</p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {["Audited supplier network","Pre-shipment QA on every PO","DDP and EXW supported","REACH · FDA · EU food-contact"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-px w-6 bg-primary" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="hairline-top">
        <div className="container-page py-20 md:py-28 grid gap-8 md:grid-cols-[1fr_auto] items-end">
          <div>
            <div className="eyebrow mb-4">04 / Get started</div>
            <h2 className="text-3xl md:text-5xl text-foreground max-w-2xl">{t("cta_band_title")}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">{t("cta_band_sub")}</p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-12 px-6 font-medium w-fit">
            <Link to="/contact">{t("cta_rfq")} <ArrowRight className="ms-2 h-4 w-4 flip-rtl" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
