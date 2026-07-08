import { ButtonLink } from "@/components/shared/button-link";
import { consultant } from "@/content/site";

export function ConsultantProfile({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-center lg:gap-16">
      <div className="relative">
        <div className="absolute -bottom-3 -right-3 size-32 rounded-br-[var(--radius-card)] border-b-4 border-r-4 border-[var(--accent)]" />
        <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden rounded-[var(--radius-card)] border border-[var(--card-border)] bg-gradient-to-br from-white to-[var(--soft)] p-8 text-center">
          <div className="absolute inset-x-8 top-8 h-40 rounded-full border border-[var(--accent)]/20" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-dark)]">
              Portrait à venir
            </p>
            <p className="mt-3 max-w-60 text-sm font-semibold leading-6 text-[var(--text-soft)]">
              Photo professionnelle d'Élière Guieba à intégrer.
            </p>
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
          <ButtonLink arrow className="w-fit" href="/a-propos" variant="secondary">
            Découvrir son parcours
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
