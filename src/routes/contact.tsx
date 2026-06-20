import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { RFQForm } from "@/components/site/RFQForm";
import { useLang } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Falcon Pack Solutions" },
      { name: "description", content: "Send your packaging specification. A specialist replies within one business day with pricing, lead time and sample plan." },
      { property: "og:title", content: "Contact — Falcon Pack Solutions" },
      { property: "og:description", content: "Request a quote in 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <Layout>
      <Section eyebrow={t("nav_contact")} title={t("contact_title")} sub={t("contact_sub")}>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <RFQForm />
          <aside className="space-y-6">
            <div className="rounded-md border border-border bg-surface p-6">
              <div className="eyebrow mb-4">Direct</div>
              <ul className="space-y-4 text-sm text-foreground">
                <li className="flex gap-3"><Mail className="h-4 w-4 mt-1 text-primary" /> sales@falconpack.example</li>
                <li className="flex gap-3"><Phone className="h-4 w-4 mt-1 text-primary" /> +971 4 000 0000</li>
                <li className="flex gap-3"><MapPin className="h-4 w-4 mt-1 text-primary" /> Dubai · Hamburg · Istanbul</li>
              </ul>
            </div>
            <div className="rounded-md border border-border bg-surface p-6">
              <div className="eyebrow mb-3">Response time</div>
              <p className="text-sm text-muted-foreground">Quotes within 24 business hours. Samples shipped within 5 working days where stock allows.</p>
            </div>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}
