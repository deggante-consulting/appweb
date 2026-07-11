import Image from "next/image";

import { DecorativeCurves } from "@/components/patterns/decorative-curves";
import { ButtonLink } from "@/components/shared/button-link";
import { Eyebrow } from "@/components/shared/eyebrow";
import { consultant, images, timeline, values, zones } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/a-propos");

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden bg-white py-[76px]">
        <div className="dg-container grid gap-14 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-[72px]">
          <div className="relative min-w-0">
            <div className="absolute -left-4 -top-4 size-[130px] rounded-tl-[var(--radius-card)] border-l-4 border-t-4 border-[var(--accent)]" />
            <Image
              alt="Élière Guieba, fondateur de DÉGGANTE Consulting"
              className="relative aspect-[4/5] w-full rounded-[var(--radius-card)] border border-[var(--card-border)] object-cover object-top"
              height={1402}
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              src={images.consultantAboutPortrait}
              width={1122}
            />
            <div className="absolute bottom-7 right-4 rounded-[var(--radius-page)] bg-[var(--dark)] px-5 py-3 lg:right-[-18px]">
              <strong className="block text-xl font-extrabold text-[var(--accent)]">
                Depuis 2010
              </strong>
              <span className="text-xs text-[#a9a9a2]">
                sur le terrain du dialogue social
              </span>
            </div>
          </div>

          <div className="min-w-0 dg-fade-up">
            <Eyebrow>À propos</Eyebrow>
            <h1 className="mt-4 text-[46px] font-extrabold leading-[1.12] tracking-[-0.015em] max-md:text-4xl">
              {consultant.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-[var(--muted)]">
              {consultant.role} — fondateur de DÉGGANTE Consulting
            </p>
            <p className="mt-5 max-w-3xl text-[16.5px] leading-[1.7] text-[var(--text-soft)]">
              Professionnel de santé de formation, Élière Guieba a passé plus
              de quinze ans au cœur du dialogue social du secteur privé de la
              santé en Guadeloupe. Son expertise s'est construite sur le
              terrain, au fil de négociations collectives, d'élections
              professionnelles, de restructurations et de situations de conflit
              complexes.
            </p>
            <p className="mt-4 max-w-3xl text-[16.5px] leading-[1.7] text-[var(--text-soft)]">
              Cette expérience lui permet aujourd'hui de comprendre les
              contraintes, les attentes et les modes de fonctionnement de chaque
              partie, tout en intervenant dans un cadre indépendant,
              confidentiel et impartial.
            </p>
            <p className="mt-4 max-w-3xl text-[16.5px] leading-[1.7] text-[var(--text-soft)]">
              DÉGGANTE Consulting est né de cette conviction : la plupart des
              conflits du travail viennent d'incompréhensions qui auraient pu
              être évitées. D'où le nom, et le slogan :{" "}
              <strong className="text-[var(--accent-dark)]">
                se comprendre pour réussir
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] py-[72px]">
        <div className="dg-container">
          <Eyebrow>Parcours</Eyebrow>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-[-0.01em]">
            Quinze ans de terrain
          </h2>
          <ol className="relative mt-9 grid gap-8 md:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-[3%] right-[3%] top-2 hidden h-0.5 bg-[linear-gradient(90deg,#36B24A,#A8DFB0)] md:block"
            />
            {timeline.map((item, index) => (
              <li className="relative flex flex-col gap-2" key={item.date}>
                <span
                  className={
                    index === 0
                      ? "size-[18px] rounded-full bg-[var(--accent-dark)] shadow-[0_0_0_5px_var(--background)]"
                      : index === timeline.length - 1
                        ? "size-[18px] rounded-full bg-[var(--accent)] shadow-[0_0_0_5px_var(--background)]"
                        : "size-[18px] rounded-full border-2 border-[var(--accent)] bg-white shadow-[0_0_0_5px_var(--background)]"
                  }
                />
                <strong className="text-lg">{item.date}</strong>
                <p className="text-[14.5px] leading-[1.6] text-[var(--text-soft)]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--dark)] py-[76px] text-white">
        <DecorativeCurves dark />
        <div className="dg-container relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
          <div>
            <Eyebrow light>Sa vision</Eyebrow>
            <h2 className="mt-4 text-[32px] font-extrabold tracking-[-0.01em]">
              Le dialogue n'est pas un risque. C'est une méthode.
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-[#c9c9c2]">
              Son expérience lui permet de comprendre les contraintes, les
              attentes et les responsabilités de chaque partie. Quand chaque
              partie comprend les contraintes de l'autre, la plupart des
              conflits deviennent des problèmes solubles. Le rôle du consultant
              n'est pas de donner raison, mais de créer les conditions pour que
              les parties se parlent et se comprennent.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <article
                className="rounded-[var(--radius-small)] border border-white/10 bg-white/[0.055] p-5"
                key={value.creole}
              >
                <h3 className="text-xl font-extrabold text-[var(--accent)]">
                  {value.creole}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#a9a9a2]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white py-14">
        <div className="dg-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[26px] font-extrabold tracking-[-0.01em]">
              Basé à Baie-Mahault, au service de la Caraïbe
            </h2>
            <p className="mt-2 text-[15.5px] text-[var(--text-soft)]">
              {zones.slice(0, 5).join(" · ")} — et à distance lorsque c'est adapté.
            </p>
          </div>
          <ButtonLink arrow href="/contact" variant="dark">
            Demander un premier échange
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
