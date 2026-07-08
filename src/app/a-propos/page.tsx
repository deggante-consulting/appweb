import { ConsultantProfile } from "@/components/shared/consultant-profile";
import { CTASection } from "@/components/shared/cta-section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { IntroBlock } from "@/components/shared/intro-block";
import { ValuesGrid } from "@/components/shared/values-grid";
import { consultant, timeline } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/a-propos");

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="dg-container">
          <div className="mb-12 max-w-4xl dg-fade-up">
            <IntroBlock
              description={`DÉGGANTE Consulting est porté par ${consultant.name}, consultant en relations sociales professionnelles, avec une expertise construite sur le terrain en Guadeloupe.`}
              eyebrow="À propos"
              title="Une expérience du dialogue social vécue de l'intérieur"
            />
          </div>
          <ConsultantProfile />
        </div>
      </section>
      <section className="bg-[var(--background)] py-16 sm:py-20">
        <div className="dg-container">
          <Eyebrow>Parcours</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Des responsabilités de terrain au conseil indépendant
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {timeline.map((item) => (
              <li className="rounded-[var(--radius-panel)] border-t-2 border-[var(--accent)] bg-white p-5" key={item.date}>
                <strong className="text-lg">{item.date}</strong>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[var(--dark)] py-20 text-white">
        <div className="dg-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow light>Sa vision</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
              Le dialogue n'est pas un risque. C'est une méthode.
            </h2>
            <p className="mt-5 leading-8 text-neutral-300">
              Avoir siégé des deux côtés de la table donne une conviction simple :
              quand chaque partie comprend les contraintes de l'autre, la plupart
              des conflits deviennent des problèmes solubles. Le rôle du consultant
              n'est pas de donner raison, mais de créer les conditions pour que les
              parties se parlent et se comprennent.
            </p>
          </div>
          <ValuesGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
