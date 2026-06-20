import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useLang } from "@/lib/i18n";
import { Snowflake, ShoppingBag, Truck, Factory, Sprout, Building2 } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Falcon Pack Solutions" },
      { name: "description", content: "Packaging programmes for food & beverage, retail, logistics, manufacturing, agriculture and municipal sectors." },
      { property: "og:title", content: "Industries — Falcon Pack Solutions" },
      { property: "og:description", content: "Sectors where reliability is non-negotiable." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { t } = useLang();
  const items = [
    { I: Snowflake, t: t("ind_food"), d: t("ind_food_d") },
    { I: ShoppingBag, t: t("ind_retail"), d: t("ind_retail_d") },
    { I: Truck, t: t("ind_logistics"), d: t("ind_logistics_d") },
    { I: Factory, t: t("ind_industrial"), d: t("ind_industrial_d") },
    { I: Sprout, t: t("ind_agri"), d: t("ind_agri_d") },
    { I: Building2, t: t("ind_municipal"), d: t("ind_municipal_d") },
  ];
  return (
    <Layout>
      <Section eyebrow={t("nav_industries")} title={t("industries_title")} sub={t("industries_sub")}>
        <div className="grid gap-px bg-border border border-border rounded-md overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ I, t: ttl, d }) => (
            <div key={ttl} className="bg-surface p-8 hover:bg-surface-2 transition">
              <I className="h-7 w-7 text-primary" />
              <h3 className="mt-6 text-xl text-foreground">{ttl}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
