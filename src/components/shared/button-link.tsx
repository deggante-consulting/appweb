import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = Readonly<{
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
}>;

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--dark)] shadow-[0_8px_24px_rgba(54,178,74,0.28)] hover:bg-[#4bc55e]",
    secondary:
      "border border-[var(--accent-dark)] bg-white text-[var(--accent-dark)] hover:bg-[var(--accent-dark)] hover:text-white",
    dark: "bg-[var(--accent-dark)] text-white hover:bg-[var(--accent-deep)]",
    light:
      "border border-white/35 text-white hover:border-[var(--accent)] hover:text-[var(--accent)]",
  };

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
