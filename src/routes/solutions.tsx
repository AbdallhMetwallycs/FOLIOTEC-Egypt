import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — How We Work | Falcon Pack Solutions" },
      { name: "description", content: "Specification, sourcing, QA, logistics and after-sales. A single point of accountability across your packaging programme." },
      { property: "og:title", content: "Solutions — Falcon Pack Solutions" },
      { property: "og:description", content: "Single point of accountability across packaging." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const { t } = useLang();
  const steps = [
    [t("sol_1_t"), t("sol_1_d")],
    [t("sol_2_t"), t("sol_2_d")],
    [t("sol_3_t"), t("sol_3_d")],
    [t("sol_4_t"), t("sol_4_d")],
    [t("sol_5_t"), t("sol_5_d")],
  ];
  return (
    <Layout>
      <Section eyebrow={t("nav_solutions")} title={t("solutions_title")} sub={t("solutions_sub")}>
        <ol className="border border-border rounded-md overflow-hidden divide-y divide-border">
          {steps.map(([ttl, d], i) => (
            <li key={ttl} className="bg-surface hover:bg-surface-2 transition grid md:grid-cols-[120px_1fr] gap-2 md:gap-10 p-7 md:p-10">
              <div className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")} / 05</div>
              <div>
                <h3 className="text-xl md:text-2xl text-foreground">{ttl}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </Layout>
  );
}
