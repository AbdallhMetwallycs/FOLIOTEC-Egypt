import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  sub,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  sub?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-20 md:py-28 ${className}`}>
      {(eyebrow || title || sub) && (
        <div className="max-w-3xl mb-12 md:mb-16">
          {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
          {title && <h2 className="text-3xl md:text-5xl text-foreground">{title}</h2>}
          {sub && <p className="mt-4 text-base md:text-lg text-muted-foreground">{sub}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
