import Image from "next/image";

import { DecorativeCurves } from "@/components/patterns/decorative-curves";
import { ButtonLink } from "@/components/shared/button-link";
import { CTASection } from "@/components/shared/cta-section";
import { IntroBlock } from "@/components/shared/intro-block";
import { SectionHeading } from "@/components/shared/section-heading";
import { employeeLimits, employeeSituations, images, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/accompagnement-salaries");

export default function EmployeeSupportPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--soft-band)] py-16 sm:py-20">
        <DecorativeCurves className="left-auto right-0 top-0 h-72 w-1/2 opacity-55" />
        <div className="dg-container relative grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          <div className="max-w-3xl dg-fade-up">
            <IntroBlock
              description="Un accompagnement pour clarifier une situation professionnelle difficile, préparer un échange et reprendre le dialogue lorsque c'est possible."
              eyebrow="Accompagnement des salariés"
              title="Préparer, comprendre, reprendre la parole"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="dark">
                Décrire votre situation
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                Nous appeler
              </ButtonLink>
            </div>
          </div>
          <Image
            alt="Échange professionnel dans un bureau"
            className="h-[360px] w-full rounded-[var(--radius-card)] object-cover"
            height={534}
            src={images.dialogue}
            width={480}
          />
        </div>
      </section>

      <section className="dg-section bg-white">
        <div className="dg-container grid gap-10 lg:grid-cols-[1fr_392px]">
          <div>
            <SectionHeading
              description="L'objectif n'est pas de produire un conseil juridique automatisé. Le travail consiste à clarifier la situation, préparer les échanges et orienter vers le bon interlocuteur si le dossier dépasse le cadre d'intervention."
              eyebrow="Situations accompagnées"
              title="Quand solliciter DÉGGANTE Consulting ?"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {employeeSituations.map((situation) => (
                <article className="rounded-[var(--radius-small)] border border-[var(--card-border)] bg-[var(--background)] p-5" key={situation}>
                  <h2 className="text-base font-extrabold leading-7">{situation}</h2>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-[var(--radius-panel)] bg-[var(--soft)] p-7 lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-lg font-extrabold">Ce que permet le premier échange</h2>
            <ol className="mt-5 grid gap-4 text-sm leading-7 text-[var(--text-soft)]">
              <li>1. Comprendre le contexte général.</li>
              <li>2. Identifier les points à préparer.</li>
              <li>3. Déterminer si l'accompagnement est adapté.</li>
              <li>4. Orienter vers un professionnel compétent si nécessaire.</li>
            </ol>
          </aside>
        </div>
      </section>
      <section className="bg-[var(--background)] py-16 sm:py-20">
        <div className="dg-container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Limites"
              title="Un cadre clair, sans confusion de rôle"
            />
            <p className="mt-5 leading-8 text-[var(--text-soft)]">
              Cet accompagnement ne remplace pas :
            </p>
          </div>
          <ul className="grid gap-3">
            {employeeLimits.map((limit) => (
              <li className="flex gap-3 rounded-[var(--radius-small)] bg-white p-4 font-bold" key={limit}>
                <span className="text-[var(--accent-dark)]">•</span>
                {limit}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection
        title="Décrivez votre situation sans transmettre de document sensible"
        description="DÉGGANTE Consulting étudie la demande avant de proposer un échange ou une orientation adaptée."
      />
    </>
  );
}
