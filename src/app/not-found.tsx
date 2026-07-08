import { ButtonLink } from "@/components/shared/button-link";

export default function NotFound() {
  return (
    <section className="bg-[var(--background)] py-24">
      <div className="dg-container max-w-2xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--accent-dark)]">
          Page introuvable
        </p>
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
