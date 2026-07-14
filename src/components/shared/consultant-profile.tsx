import Image from "next/image";

import { ButtonLink } from "@/components/shared/button-link";
import { Eyebrow } from "@/components/shared/eyebrow";
import { consultant, images } from "@/content/site";
import { portraitBlurDataUrl } from "@/lib/image-placeholders";

export function ConsultantProfile({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:items-center lg:gap-16">
      <div className="relative min-w-0">
        <div className="absolute -bottom-3 -right-3 size-32 rounded-br-[var(--radius-card)] border-b-4 border-r-4 border-[var(--accent)]" />
        <Image
          alt="Élière Guieba travaillant sur un accompagnement en relations sociales"
          blurDataURL={portraitBlurDataUrl}
          className="relative aspect-[3/4] w-full rounded-[var(--radius-card)] border border-[var(--card-border)] object-cover object-top"
          height={1448}
          loading="lazy"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 400px"
          src={images.consultantPortrait}
          width={1086}
        />
      </div>
      <div className="flex min-w-0 flex-col gap-5">
        <div>
          <Eyebrow>Le consultant</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {consultant.name}
          </h2>
          <p className="mt-2 text-lg font-semibold text-[var(--text-soft)]">{consultant.role}</p>
        </div>
        <p className="max-w-3xl text-base leading-8 text-[var(--text-soft)]">
          {compact ? consultant.shortBio : consultant.longBio}
        </p>
        <blockquote className="border-l-4 border-[var(--accent)] py-1 pl-6 text-lg font-extrabold leading-8 text-[var(--accent-dark)] sm:text-xl sm:leading-9">
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
