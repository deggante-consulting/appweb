import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/shared/button-link";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { images, services } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/services");

const serviceImages = [images.documents, images.dialogue, images.building, images.hero];
const mobileServiceLabels = ["Diagnostic", "Conflits", "Médiation", "Managers"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        description="Pour les employeurs, directions, responsables RH, managers, collectivités et représentants du personnel. Toutes les prestations sont proposées sur devis, après un premier échange."
        eyebrow="Services"
        title="Quatre domaines d'intervention, un objectif : des relations durables"
      />
      <nav className="border-b border-black/5 bg-white py-4 sm:py-5" aria-label="Sommaire des services">
        <div className="dg-container flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--muted-soft)]">
            Aller à
          </span>
          <div className="relative -mr-4 sm:mr-0">
            <div className="flex snap-x gap-2 overflow-x-auto overscroll-x-contain pr-10 sm:flex-wrap sm:overflow-visible sm:pr-0">
              {services.map((service, index) => (
                <Link
                  className="min-h-11 max-w-[165px] shrink-0 snap-start truncate rounded-full border border-[var(--border)] px-4 py-2 text-sm font-extrabold text-[var(--dark-soft)] hover:border-[var(--accent-dark)] hover:text-[var(--accent-dark)] sm:max-w-none"
                  href={`#${service.id}`}
                  key={service.id}
                  title={`${service.number} · ${service.title}`}
                >
                  <span className="sm:hidden">
                    {service.number} · {mobileServiceLabels[index]}
                  </span>
                  <span className="hidden sm:inline">
                    {service.number} · {service.title}
                  </span>
                </Link>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:hidden"
            />
          </div>
        </div>
      </nav>
      <section className="bg-white">
        {services.map((service, index) => {
          const dark = index === 3;
          const image = serviceImages[index];

          return (
            <article
              className={dark ? "bg-[var(--dark)] py-16 text-white sm:py-20" : index % 2 ? "bg-[var(--background)] py-16 sm:py-20" : "bg-white py-16 sm:py-20"}
              id={service.id}
              key={service.id}
            >
              <div className={index % 2 ? "dg-container grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start" : "dg-container grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start"}>
                {index % 2 ? <ServiceImage dark={dark} image={image} result={service.result} /> : null}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <ServiceIcon id={service.id} size="sm" />
                    <span className={dark ? "text-sm font-extrabold text-[var(--accent-light)]" : "text-sm font-extrabold text-[var(--muted-soft)]"}>
                      {service.number}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{service.title}</h2>
                  <p className={dark ? "max-w-3xl leading-8 text-neutral-300" : "max-w-3xl leading-8 text-[var(--text-soft)]"}>
                    {service.intro}
                  </p>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {service.actions.map((action) => (
                      <li className="flex gap-3 text-sm leading-7" key={action}>
                        <span className="mt-2 size-2 shrink-0 rotate-45 bg-[var(--accent)]" />
                        <span className={dark ? "text-neutral-200" : "text-[var(--dark-soft)]"}>{action}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    arrow
                    className="mt-2 w-fit"
                    href="/contact"
                    variant={dark ? "primary" : "dark"}
                  >
                    {service.cta}
                  </ButtonLink>
                </div>
                {index % 2 ? null : <ServiceImage dark={dark} image={image} result={service.result} />}
              </div>
            </article>
          );
        })}
      </section>
      <section className="bg-white py-14">
        <div className="dg-container">
          <SectionHeading
            description="Chaque mission débute par une analyse de la situation. Le cadre, les objectifs, les parties concernées et les modalités d'intervention sont ensuite définis avant toute proposition d'accompagnement."
            eyebrow="Cadre d'intervention"
            title="Pas de méthode générique : une démarche adaptée à la situation"
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}

function ServiceImage({
  dark,
  image,
  result,
}: Readonly<{ dark: boolean; image: string; result: string }>) {
  return (
    <div className="grid gap-4">
      <Image
        alt=""
        aria-hidden="true"
        className="h-72 w-full rounded-[var(--radius-card)] object-cover"
        height={500}
        loading="lazy"
        src={image}
        width={500}
      />
      <div className={dark ? "rounded-[var(--radius-panel)] bg-white/10 p-5" : "rounded-[var(--radius-panel)] bg-[var(--background)] p-5"}>
        <p className={dark ? "text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent-light)]" : "text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent-dark)]"}>
          Résultat recherché
        </p>
        <p className={dark ? "mt-2 text-sm leading-7 text-neutral-300" : "mt-2 text-sm leading-7 text-[var(--text-soft)]"}>
          {result}
        </p>
      </div>
    </div>
  );
}
