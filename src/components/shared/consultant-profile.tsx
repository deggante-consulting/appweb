import Link from "next/link";

import { consultant } from "@/content/site";

export function ConsultantProfile({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div className="grid gap-10 lg:grid-cols-[392px_1fr] lg:items-center">
      <div className="relative">
        <div className="absolute -bottom-3 -right-3 size-32 rounded-br-[var(--radius-card)] border-b-4 border-r-4 border-[var(--accent)]" />
        <div className="relative flex min-h-[392px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] border border-[var(--card-border)] bg-gradient-to-br from-white to-[var(--soft)] p-8">
          <div className="absolute inset-x-8 top-8 h-40 rounded-full border border-[var(--accent)]/20" />
          <div className="absolute right-6 top-6 rounded-full bg-[var(--dark)] px-4 py-2 text-xs font-extrabold text-white">
            Depuis 2010
          </div>
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-dark)]">
              Portrait à venir
            </p>
            <h3 className="mt-3 text-3xl font-extrabold">{consultant.name}</h3>
            <p className="mt-2 text-sm font-bold text-[var(--text-soft)]">{consultant.role}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-dark)]">
            Le consultant
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {consultant.name}
          </h2>
          <p className="mt-2 text-lg font-semibold text-[var(--text-soft)]">{consultant.role}</p>
        </div>
        <p className="max-w-3xl text-base leading-8 text-[var(--text-soft)]">
          {compact ? consultant.shortBio : consultant.longBio}
        </p>
        <blockquote className="border-l-4 border-[var(--accent)] pl-5 text-lg font-extrabold leading-8 text-[var(--accent-dark)]">
          « {consultant.quote} »
        </blockquote>
        {compact ? (
          <Link
            className="inline-flex min-h-11 w-fit items-center rounded-full border border-[var(--accent-dark)] px-5 text-sm font-extrabold text-[var(--accent-dark)] transition hover:bg-[var(--accent-dark)] hover:text-white"
            href="/a-propos"
          >
            Découvrir son parcours <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
