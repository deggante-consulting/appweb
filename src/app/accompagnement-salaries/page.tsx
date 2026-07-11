import Image from "next/image";

import { Reveal } from "@/components/patterns/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Eyebrow } from "@/components/shared/eyebrow";
import { images, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/accompagnement-salaries");

const situations = [
  {
    title: "Préparer un échange ou un entretien",
    text: "Clarifier ce que vous voulez dire, anticiper les réactions, structurer vos arguments.",
  },
  {
    title: "Situation conflictuelle",
    text: "Être accompagné pour comprendre le conflit et chercher une issue.",
  },
  {
    title: "Rupture conventionnelle",
    text: "Comprendre la démarche et préparer les échanges avec l'employeur.",
  },
  {
    title: "Licenciement pour inaptitude ou économique",
    text: "Y voir clair sur votre situation et les étapes qui vous attendent.",
  },
  {
    title: "Arrêt maladie prolongé, accident du travail",
    text: "Préparer la reprise et le dialogue avec l'employeur.",
  },
  {
    title: "Reprise du dialogue, nouveau projet",
    text: "Renouer les échanges ou être orienté vers un autre projet professionnel.",
  },
];

const steps = [
  {
    title: "Écoute et analyse de votre situation",
    text: "Un temps pour poser les faits, sans jugement, en toute confidentialité.",
  },
  {
    title: "Préparation de vos échanges",
    text: "Entretien, courrier, réunion : vous arrivez préparé.",
  },
  {
    title: "Accompagnement dans la durée",
    text: "Un suivi tant que la situation le nécessite, ou une orientation vers le bon professionnel.",
  },
];

export default function EmployeeSupportPage() {
  return (
    <>
      <section className="dg-section bg-[var(--soft-band)]">
        <div className="dg-container grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
          <div className="min-w-0 max-w-3xl dg-fade-up">
            <Eyebrow>Accompagnement des salariés</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Traverser une situation professionnelle difficile, sans rester seul
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
              Entretien à préparer, conflit, rupture conventionnelle,
              licenciement, arrêt maladie prolongé : DÉGGANTE Consulting vous
              aide à comprendre votre situation, préparer vos échanges et
              reprendre le dialogue avec votre employeur.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink arrow href="/contact" variant="dark">
                Décrire votre situation
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                Nous appeler
              </ButtonLink>
            </div>
          </div>
          <Image
            alt="Échange confidentiel entre un salarié et un accompagnant"
            className="aspect-[4/3] w-full min-w-0 rounded-[var(--radius-card)] object-cover object-center"
            height={1086}
            priority
            sizes="(max-width: 1024px) 100vw, 380px"
            src={images.employeeSupport}
            width={1448}
          />
        </div>
      </section>

      <section className="dg-section bg-white">
        <Reveal className="dg-container">
          <div className="max-w-3xl">
            <Eyebrow>Situations accompagnées</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Dans quels cas nous solliciter
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {situations.map((situation) => (
              <article
                className="rounded-[var(--radius-small)] bg-[var(--background)] p-6"
                key={situation.title}
              >
                <h3 className="text-base font-extrabold text-[var(--dark)]">
                  {situation.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                  {situation.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="dg-section bg-[var(--background)]">
        <Reveal className="dg-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Comment se déroule l'accompagnement
            </h2>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div className="flex gap-4" key={step.title}>
                  <span
                    className={
                      index === 0
                        ? "flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-dark)] text-sm font-extrabold text-white"
                        : "flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-white text-sm font-extrabold text-[var(--accent-dark)]"
                    }
                  >
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-extrabold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[var(--text-soft)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-[var(--radius-panel)] border border-[var(--card-border)] border-l-4 border-l-[var(--accent)] bg-white p-7 sm:p-8">
            <h2 className="text-lg font-extrabold">Le cadre de l'intervention</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Cet accompagnement ne remplace pas un avocat, un syndicat, un
              psychologue, la médecine du travail ou un professionnel de santé.
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              L'intervention de DÉGGANTE Consulting s'arrête lorsque le dossier
              nécessite une procédure judiciaire, ou relève d'un accompagnement
              médical ou psychologique. Dans ce cas, nous vous orientons vers le
              professionnel adapté.
            </p>
          </aside>
        </Reveal>
      </section>

      <section className="border-t border-[var(--line)] bg-white py-10 sm:py-14">
        <div className="dg-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Parlez-nous de votre situation
            </h2>
            <p className="mt-2 text-base text-[var(--text-soft)]">
              Premier échange confidentiel, sans transmettre de documents
              médicaux ni de données sensibles à ce stade.
            </p>
          </div>
          <ButtonLink arrow href="/contact" variant="dark">
            Décrire votre situation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
