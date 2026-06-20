import { useState } from "react";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { PRODUCTS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(120),
  country: z.string().trim().min(2).max(60),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(5).max(40),
  product: z.string().min(1),
  quantity: z.string().trim().min(1).max(60),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

export function RFQForm() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // MVP: simulate. Backend wiring lives in Future_Enhancements.md
    setTimeout(() => { setSubmitting(false); setSent(true); }, 600);
  };

  if (sent) {
    return (
      <div className="rounded-md bg-surface hairline-top hairline-bottom border border-border p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary mx-auto" />
        <p className="mt-4 text-lg text-foreground">{t("f_sent")}</p>
      </div>
    );
  }

  const field = (name: string, label: string, type = "text", required = true) => (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</Label>
      <Input id={name} name={name} type={type} required={required} className="bg-surface border-border rounded-sm h-11" />
      {errors[name] && <p className="text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-md bg-surface border border-border p-6 md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        {field("name", t("f_name"))}
        {field("company", t("f_company"))}
        {field("country", t("f_country"))}
        {field("email", t("f_email"), "email")}
        {field("phone", t("f_phone"), "tel")}
        <div className="grid gap-2">
          <Label htmlFor="product" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("f_product")}</Label>
          <select
            id="product"
            name="product"
            required
            className="bg-surface border border-border rounded-sm h-11 px-3 text-sm text-foreground"
            defaultValue=""
          >
            <option value="" disabled>{t("f_select")}</option>
            {PRODUCTS.map((p) => (
              <option key={p.key} value={p.key}>{lang === "ar" ? p.ar : p.en}</option>
            ))}
          </select>
          {errors.product && <p className="text-xs text-destructive">{errors.product}</p>}
        </div>
        {field("quantity", t("f_qty"))}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("f_msg")}</Label>
        <Textarea id="message" name="message" rows={5} className="bg-surface border-border rounded-sm" />
      </div>
      <Button type="submit" disabled={submitting} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm h-11 w-fit px-6 font-medium">
        {t("f_submit")}
      </Button>
    </form>
  );
}
