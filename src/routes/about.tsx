import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useLang } from "@/lib/i18n";
import industries from "@/assets/industries.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Falcon Pack Solutions" },
      { name: "description", content: "Trading and sourcing partner built on German-style engineering rigour. No factory ownership claims — full transparency." },
      { property: "og:title", content: "About — Falcon Pack Solutions" },
      { property: "og:description", content: "Trading and sourcing partner for packaging." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  const stats = [
    [t("stat_1"), t("stat_1_l")],
    [t("stat_2"), t("stat_2_l")],
    [t("stat_3"), t("stat_3_l")],
    [t("stat_4"), t("stat_4_l")],
  ];
  return (
    <Layout>
      <Section eyebrow={t("nav_about")} title={t("about_title")} sub={t("about_lede")} />
      <section className="hairline-top hairline-bottom">
        <div className="container-page py-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>{t("about_body_1")}</p>
            <p>{t("about_body_2")}</p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-border">
            <img src={industries} alt="" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-surface p-8">
              <div className="font-display text-4xl md:text-5xl text-foreground">{n}</div>
              <div className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
