import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="hairline-top mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-primary-foreground font-mono text-sm font-bold">FP</span>
            <span className="font-display font-semibold">{t("brand")}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">{t("footer_tagline")}</p>
        </div>
        <div>
          <div className="eyebrow mb-3">{t("nav_products")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">Films & Laminates</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Bags</Link></li>
            <li><Link to="/industries" className="hover:text-foreground">{t("nav_industries")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">{t("nav_contact")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>sales@falconpack.example</li>
            <li>+971 4 000 0000</li>
            <li>Dubai · Hamburg · Istanbul</li>
          </ul>
        </div>
      </div>
      <div className="hairline-top">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">© {new Date().getFullYear()} {t("brand")}. {t("footer_rights")}</p>
          <p className="text-xs text-muted-foreground font-mono">ISO 9001 · REACH · FDA documented</p>
        </div>
      </div>
    </footer>
  );
}
