import type { Metadata } from "next";

import { ButtonLink } from "@/components/shared/button-link";
import { Eyebrow } from "@/components/shared/eyebrow";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="dg-section bg-[var(--background)]">
      <div className="dg-container flex max-w-2xl flex-col items-center text-center">
        <Eyebrow>Page introuvable</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          Cette page n'existe pas.
        </h1>
        <p className="mt-5 leading-8 text-[var(--text-soft)]">
          Le lien utilisé ne correspond à aucune page publiée sur le site de
          DÉGGANTE Consulting.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Retour à l'accueil</ButtonLink>
        </div>
      </div>
    </section>
  );
}
