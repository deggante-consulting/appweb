import Link from "next/link";
import type { ReactNode } from "react";

import { IntroBlock } from "@/components/shared/intro-block";

type LegalPageLayoutProps = Readonly<{
  eyebrow: string;
  title: string;
  children: ReactNode;
  asideLinks: Array<{ label: string; href: string }>;
}>;

export function LegalPageLayout({
  asideLinks,
  children,
  eyebrow,
  title,
}: LegalPageLayoutProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="dg-container grid gap-10 lg:grid-cols-[minmax(0,760px)_360px]">
        <article className="dg-fade-up flex flex-col gap-9">
          <IntroBlock eyebrow={eyebrow} title={title} />
          {children}
        </article>
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[var(--radius-panel)] bg-[var(--background)] p-6">
            <h2 className="text-sm font-extrabold">Sur cette page</h2>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Sommaire">
              {asideLinks.map((link) => (
                <Link
                  className="text-sm font-semibold text-[var(--text-soft)] hover:text-[var(--accent-dark)]"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}
