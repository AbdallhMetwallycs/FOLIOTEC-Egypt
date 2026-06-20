import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/products", label: t("nav_products") },
    { to: "/industries", label: t("nav_industries") },
    { to: "/solutions", label: t("nav_solutions") },
    { to: "/contact", label: t("nav_contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md hairline-bottom">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-primary-foreground font-mono text-sm font-bold">FP</span>
          <span className="font-display font-semibold tracking-tight text-foreground">{t("brand")}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hairline-bottom border border-transparent hover:border-border transition"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <Button asChild size="sm" className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm">
            <Link to="/contact">{t("cta_rfq")}</Link>
          </Button>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden hairline-top bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-3">
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="flex-1 px-3 py-2 rounded-sm text-xs font-mono uppercase tracking-wider border border-border text-muted-foreground"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
              <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground rounded-sm">
                <Link to="/contact" onClick={() => setOpen(false)}>{t("cta_rfq")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
