import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { legalNavigation, navigation, site, zones } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--dark)] text-white">
      <div className="dg-container grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo light />
          <p className="max-w-xs text-sm font-semibold italic text-[var(--accent-light)]">
            {site.slogan}
          </p>
          <p className="text-sm leading-7 text-[#c9c9c2]">
            {site.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <FooterColumn title="Navigation">
          {navigation.map((item) => (
            <Link className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Zones d'intervention">
          {zones.map((zone) => (
            <span className="text-sm text-[#c9c9c2]" key={zone}>
              {zone}
            </span>
          ))}
        </FooterColumn>
        <FooterColumn title="Contact">
          <a className="footer-link" href={site.phoneHref}>
            {site.phone}
          </a>
          <a className="footer-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <span className="text-sm text-[#c9c9c2]">Lundi - vendredi · 9 h - 17 h</span>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10">
        <div className="dg-container flex flex-col gap-4 py-5 text-sm text-[var(--muted-soft)] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DÉGGANTE Consulting — SASU · SIRET {site.siret}</span>
          <div className="flex gap-5">
            {legalNavigation.map((item) => (
              <Link className="footer-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  children,
  title,
}: Readonly<{ children: React.ReactNode; title: string }>) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted-soft)]">
        {title}
      </h2>
      {children}
    </div>
  );
}
