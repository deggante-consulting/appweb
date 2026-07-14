import { LegalPageLayout } from "@/components/shared/legal-page-layout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/confidentialite");

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      asideLinks={[
        { label: "Données collectées", href: "#donnees" },
        { label: "Traitement", href: "#traitement" },
        { label: "Vos droits", href: "#droits" },
        { label: "Avant d'écrire", href: "#prudence" },
      ]}
      eyebrow="Vos données"
      title="Politique de confidentialité"
    >
      <p className="text-sm font-bold text-[var(--muted-soft)]">
        Dernière mise à jour : {site.privacyUpdatedAt}
      </p>
      <PrivacySection id="donnees" title="Quelles données sont collectées, et pourquoi">
        <p>
          Le formulaire de contact recueille les informations que vous choisissez
          de transmettre : identité, coordonnées, type de demande, structure,
          fonction, préférence de contact et description de votre demande.
        </p>
        <p>
          Ces informations sont saisies volontairement et servent uniquement à
          traiter votre demande et à vous recontacter.
        </p>
      </PrivacySection>
      <PrivacySection id="traitement" title="Comment elles sont traitées">
        <p>
          Les informations du formulaire sont collectées via Netlify Forms et
          conservées dans le tableau de bord Netlify pour permettre leur
          traitement. Elles sont ensuite transmises par email à DÉGGANTE
          Consulting. Elles ne sont pas utilisées pour une newsletter ni pour de
          la prospection automatisée.
        </p>
        <p>
          Le traitement de ces informations est nécessaire pour répondre à une
          demande de premier échange formulée par la personne concernée.
        </p>
        <p>
          Aucun paiement en ligne et aucune réservation automatique ne sont
          proposés sur le site.
        </p>
      </PrivacySection>
      <PrivacySection id="droits" title="Vos droits">
        <p>
          Vous pouvez demander l'accès, la rectification ou la suppression de vos
          informations en écrivant à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </PrivacySection>
      <section
        className="scroll-mt-28 rounded-[var(--radius-panel)] border border-[var(--soft-border)] bg-[var(--soft)] p-6"
        id="prudence"
      >
        <h2 className="text-xl font-extrabold">Un conseil avant d'écrire</h2>
        <p className="mt-4 leading-8 text-[var(--text-soft)]">
          Ne transmettez pas d'informations médicales détaillées, de documents
          judiciaires, de données personnelles concernant des tiers ou
          d'informations confidentielles sensibles via le formulaire. Ces éléments
          seront abordés, si nécessaire, dans un cadre approprié.
        </p>
      </section>
    </LegalPageLayout>
  );
}

function PrivacySection({
  children,
  id,
  title,
}: Readonly<{ children: React.ReactNode; id: string; title: string }>) {
  return (
    <section className="scroll-mt-28" id={id}>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <div className="mt-4 grid gap-4 leading-8 text-[var(--text-soft)] [&_a]:font-bold [&_a]:text-[var(--accent-dark)]">
        {children}
      </div>
    </section>
  );
}
