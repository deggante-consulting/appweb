"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/shared/logo";
import { navigation, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const contactPage = pathname === "/contact";

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
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
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 text-[var(--dark-soft)] transition hover:border-[var(--accent-dark)] hover:text-[var(--accent-dark)] lg:hidden"
            onClick={() => setOpen((current) => !current)}
            ref={menuButtonRef}
            type="button"
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            {open ? (
              <X aria-hidden="true" size={22} strokeWidth={2.5} />
            ) : (
              <Menu aria-hidden="true" size={22} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>
      <div
        className={
          open
            ? "fixed inset-x-0 bottom-0 top-[76px] z-40 min-h-[calc(100dvh-76px)] overflow-y-auto border-t border-black/5 bg-white shadow-2xl lg:hidden"
            : "hidden"
        }
        id="menu-mobile"
      >
        <nav
          aria-label="Navigation mobile"
          className="dg-container flex flex-col gap-2 py-5"
        >
          {navigation.map((item, index) => {
            const active = pathname === item.href;

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "min-h-11 rounded-lg bg-[var(--soft)] px-3 py-3 text-base font-extrabold text-[var(--accent-dark)]"
                    : "min-h-11 rounded-lg px-3 py-3 text-base font-bold text-[var(--dark-soft)] hover:bg-[var(--soft)]"
                }
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
                ref={index === 0 ? firstMobileLinkRef : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
