"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/shared/logo";
import { navigation, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const contactPage = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="dg-container flex min-h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden items-center gap-[34px] lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "border-b-2 border-[var(--accent)] pb-1 text-sm font-extrabold text-[var(--accent-dark)]"
                    : "pb-1 text-sm font-semibold text-[var(--dark-soft)] transition hover:text-[var(--accent-dark)]"
                }
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          className={
            contactPage
              ? "dg-cta dg-cta-secondary hidden lg:inline-flex"
              : "dg-cta dg-cta-dark hidden lg:inline-flex"
          }
          href={contactPage ? site.phoneHref : "/contact"}
        >
          {contactPage ? site.phone : "Demander un premier échange"}
          {contactPage ? null : (
            <span aria-hidden="true" className="dg-cta-arrow">
              →
            </span>
          )}
        </Link>
        <button
          aria-controls="menu-mobile"
          aria-expanded={open}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 text-sm font-extrabold lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <span aria-hidden="true">{open ? "Fermer" : "Menu"}</span>
        </button>
      </div>
      <div
        className={
          open
            ? "grid border-t border-black/5 bg-white transition-[grid-template-rows] duration-200 lg:hidden"
            : "grid grid-rows-[0fr] overflow-hidden bg-white transition-[grid-template-rows] duration-200 lg:hidden"
        }
        id="menu-mobile"
      >
        <nav
          aria-label="Navigation mobile"
          className={open ? "dg-container flex flex-col gap-2 py-4" : "dg-container min-h-0"}
        >
          {navigation.map((item) => (
            <Link
              className="min-h-11 rounded-lg px-3 py-3 text-base font-bold text-[var(--dark-soft)] hover:bg-[var(--soft)]"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
