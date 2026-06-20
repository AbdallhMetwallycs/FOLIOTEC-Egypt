import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useLang } from "@/lib/i18n";
import { PRODUCTS } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Films, Laminates, Bags | Falcon Pack Solutions" },
      { name: "description", content: "Film blowing, flexographic printing, laminated films, frozen-food packaging, shrink, stretch, protective films, shopping and garbage bags." },
      { property: "og:title", content: "Products — Falcon Pack Solutions" },
      { property: "og:description", content: "Nine core packaging categories, made to spec." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t, lang } = useLang();
  return (
    <Layout>
      <Section eyebrow={t("nav_products")} title={t("products_title")} sub={t("products_sub")}>
        <div className="grid gap-px bg-border border border-border rounded-md overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <div key={p.key} className="bg-surface p-7 hover:bg-surface-2 transition-colors flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">In stock</span>
              </div>
              <h3 className="mt-6 text-xl text-foreground">{lang === "ar" ? p.ar : p.en}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{lang === "ar" ? p.descAr : p.descEn}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
                {t("cta_rfq")} <ArrowRight className="h-4 w-4 flip-rtl" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
