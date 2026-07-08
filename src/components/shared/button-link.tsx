import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = Readonly<{
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark" | "light" | "text";
  arrow?: boolean;
  className?: string;
}>;

export function ButtonLink({
  arrow = false,
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const variants = {
    primary: "dg-cta-primary",
    secondary: "dg-cta-secondary",
    dark: "dg-cta-dark",
    light: "dg-cta-light",
    text: "dg-cta-text",
  };

  return (
    <Link className={`inline-flex dg-cta ${variants[variant]} ${className}`} href={href}>
      <span>{children}</span>
      {arrow ? (
        <span aria-hidden="true" className="dg-cta-arrow">
          →
        </span>
      ) : null}
    </Link>
  );
}
