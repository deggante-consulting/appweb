import Image from "next/image";

import { DecorativeCurves } from "@/components/patterns/decorative-curves";
import { ButtonLink } from "@/components/shared/button-link";
import { ConsultantProfile } from "@/components/shared/consultant-profile";
import { CTASection } from "@/components/shared/cta-section";
import { ProcessSteps } from "@/components/shared/process-steps";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { ValuesGrid } from "@/components/shared/values-grid";
import {
  audiences,
  images,
  reasons,
  services,
  situations,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--dark)] text-white">
        <Image
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-55"
          fill
          priority
          sizes="100vw"
          src={images.hero}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)] via-[rgba(13,13,13,0.88)] to-[rgba(13,13,13,0.28)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent" />
        <DecorativeCurves dark />
        <div className="dg-container relative flex min-h-[650px] items-center py-20">
          <div className="max-w-3xl dg-fade-up">
            <div className="inline-flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[var(--accent)]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-light)]">
                Cabinet de conseil en relations sociales professionnelles
              </p>
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Se comprendre
              <br />
              <span className="text-[var(--accent)]">pour réussir.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200">
              L'expérience du dialogue social au service des employeurs et de
              leurs équipes. DÉGGANTE Consulting aide directions, managers et
              collectivités à prévenir les tensions, restaurer le dialogue et
              préparer les négociations en Guadeloupe et dans la Caraïbe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Demander un premier échange</ButtonLink>
              <ButtonLink href="/services" variant="light">
                Découvrir les services
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-5 border-t border-white/15 pt-7 text-sm text-neutral-400 sm:grid-cols-3">
              <HeroStat title="Depuis 2010" text="une pratique de terrain du dialogue social" />
              <HeroStat title="Toutes les parties" text="directions, managers, représentants, salariés" />
              <HeroStat title="Guadeloupe & Caraïbe" text="et interventions à distance" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-8">
        <div className="dg-container flex flex-col gap-5 lg:flex-row lg:items-center">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted-soft)]">
            Publics accompagnés
          </h2>
          <div className="flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <span
                className="rounded-full border border-[#ddeedf] bg-[var(--soft)] px-4 py-2 text-sm font-extrabold text-[var(--accent-dark)]"
                key={audience}
              >
                {audience}
              </span>
            ))}
          </div>
          <ButtonLink className="lg:ml-auto" href="/accompagnement-salaries" variant="secondary">
            Vous êtes salarié ?
          </ButtonLink>
        </div>
      </section>

      <section className="dg-section bg-[var(--background)]">
        <div className="dg-container">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              description="Du diagnostic à l'accompagnement opérationnel, chaque intervention vise le même objectif : des relations professionnelles durables."
              eyebrow="Services"
              title="Quatre domaines d'intervention"
            />
            <ButtonLink href="/services" variant="secondary">
              Toutes les prestations
            </ButtonLink>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="dg-section bg-white">
        <div className="dg-container grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-3 -top-3 size-28 rounded-tl-2xl border-l-4 border-t-4 border-[var(--accent)]" />
            <Image
              alt="Échange professionnel autour d'une table"
              className="relative h-[430px] w-full rounded-[var(--radius-card)] object-cover"
              height={534}
              src={images.dialogue}
              width={480}
            />
            <div className="absolute inset-x-5 bottom-5 rounded-[var(--radius-page)] bg-black/80 p-5 text-sm leading-7 text-neutral-200 backdrop-blur">
              <strong className="text-[var(--accent-light)]">Plus une tension est prise tôt,</strong>{" "}
              plus le dialogue est simple à restaurer.
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Quand intervenir"
              title="Ces situations vous parlent ?"
            />
            <ul className="mt-7 divide-y divide-black/10">
              {situations.map((situation) => (
                <li className="flex gap-4 py-4 text-base font-semibold text-[var(--dark-soft)]" key={situation}>
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--soft)] text-sm font-extrabold text-[var(--accent-dark)]">
                    ✓
                  </span>
                  {situation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="dg-section bg-[var(--background)]">
        <div className="dg-container relative">
          <DecorativeCurves className="left-auto right-0 top-0 h-72 w-1/2 opacity-60" />
          <SectionHeading
            eyebrow="Méthode"
            title="Une démarche simple, adaptée à chaque situation"
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
          <p className="mt-12 text-base font-medium italic leading-8 text-[var(--text-soft)]">
            Chaque situation est différente : la démarche s'ajuste, elle ne
            s'impose pas.
          </p>
        </div>
      </section>

      <section className="dg-section bg-white">
        <div className="dg-container grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Pourquoi DÉGGANTE Consulting"
              title="Une expertise construite sur le terrain, pas en théorie"
            />
            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {reasons.map((reason) => (
                <article className="border-t-2 border-[#e3f2e5] pt-4" key={reason.title}>
                  <h3 className="font-extrabold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <Image
              alt="Documents de travail lors d'une réunion"
              className="h-72 w-full rounded-[var(--radius-card)] object-cover"
              height={534}
              src={images.documents}
              width={480}
            />
            <div className="rounded-[var(--radius-panel)] bg-[var(--dark)] p-7 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-light)]">
                Conviction
              </p>
              <p className="mt-3 text-lg font-extrabold leading-8">
                Une relation sociale de qualité n'est pas une contrainte : c'est
                un levier de performance durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dg-section bg-[var(--background)]">
        <div className="dg-container">
          <ConsultantProfile compact />
        </div>
      </section>

      <section className="border-y border-[#ddeedf] bg-[var(--soft)] py-12">
        <div className="dg-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold">Vous êtes salarié ?</h2>
            <p className="mt-3 leading-8 text-[var(--text-soft)]">
              Un accompagnement dédié existe pour certaines situations :
              préparation d'un entretien ou d'un échange avec l'employeur,
              rupture conventionnelle, licenciement, arrêt maladie prolongé,
              reprise du dialogue. Cet accompagnement ne remplace ni un avocat,
              ni un syndicat, ni un professionnel de santé.
            </p>
          </div>
          <ButtonLink href="/accompagnement-salaries" variant="secondary">
            Découvrir l'accompagnement
          </ButtonLink>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--dark)] py-20 text-white">
        <DecorativeCurves dark />
        <div className="dg-container relative">
          <SectionHeading
            eyebrow="Nos valeurs"
            light
            title="Quatre repères, en créole et en français"
          />
          <div className="mt-9">
            <ValuesGrid />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function HeroStat({ text, title }: Readonly<{ text: string; title: string }>) {
  return (
    <div>
      <strong className="block text-base text-white">{title}</strong>
      <span>{text}</span>
    </div>
  );
}
