import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { legalNavigation, navigation, site, zones } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--dark)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent md:inset-x-14"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-56 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(54,178,74,0.16),transparent_70%)]"
      />
      <div className="dg-container relative grid gap-8 py-10 sm:py-14 md:grid-cols-[1.45fr_1fr_1fr_1.25fr] md:gap-10">
        <div className="order-2 flex flex-col gap-4 md:order-none">
          <Logo light />
          <div className="flex items-center gap-3 text-sm font-semibold italic text-[var(--accent-light)]">
            <span className="h-px w-6 bg-[var(--accent)]" />
            <p>{site.slogan}</p>
            <span className="h-px w-6 bg-[var(--accent)]" />
          </div>
          <p className="text-sm leading-7 text-[#c9c9c2]">
            {site.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="flex gap-2">
            <a
              aria-label={`Appeler ${site.name}`}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-[#c9c9c2] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href={site.phoneHref}
            >
              <Phone aria-hidden="true" size={16} />
            </a>
            <a
              aria-label={`Envoyer un email à ${site.name}`}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-[#c9c9c2] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href={`mailto:${site.email}`}
            >
              <Mail aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
        <FooterColumn className="order-3 border-white/10 md:order-none md:border-l md:pl-10" title="Navigation">
          {navigation.map((item) => (
            <Link className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn className="order-4 border-white/10 md:order-none md:border-l md:pl-10" title="Zones d'intervention">
          {zones.map((zone) => (
            <span className="text-sm leading-6 text-[#c9c9c2]" key={zone}>
              {zone}
            </span>
          ))}
        </FooterColumn>
        <FooterColumn className="order-1 rounded-[14px] border border-white/5 bg-[rgba(54,178,74,0.05)] p-5 md:order-none md:-my-5 md:border-l md:border-r-0 md:border-y-0 md:border-white/10 md:pl-10" title="Contact">
          <a className="footer-link gap-3 font-bold text-white" href={site.phoneHref}>
            <Phone aria-hidden="true" className="shrink-0" size={16} />
            {site.phone}
          </a>
          <a className="footer-link gap-3" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" className="shrink-0" size={16} />
            {site.email}
          </a>
          <span className="flex items-center gap-3 text-sm text-[#c9c9c2]">
            <Clock aria-hidden="true" className="shrink-0" size={16} />
            Lundi - vendredi · 9 h - 17 h
          </span>
        </FooterColumn>
      </div>
      <div className="relative border-t border-white/10">
        <div className="dg-container flex flex-col gap-4 py-5 text-[13px] text-[#c9c9c2] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <span>© 2026 DÉGGANTE Consulting — SASU · SIRET {site.siret}</span>
          <div className="flex flex-wrap gap-2 sm:gap-5">
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
  className = "",
  title,
}: Readonly<{ children: React.ReactNode; className?: string; title: string }>) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#c9c9c2]">
        {title}
      </h2>
      {children}
    </div>
  );
}
