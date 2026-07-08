import { LegalPageLayout } from "@/components/shared/legal-page-layout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/mentions-legales");

export default function LegalNoticePage() {
  return (
    <LegalPageLayout
      asideLinks={[
        { label: "Éditeur du site", href: "#editeur" },
        { label: "Responsable de publication", href: "#publication" },
        { label: "Hébergement", href: "#hebergement" },
        { label: "Propriété intellectuelle", href: "#propriete" },
      ]}
      eyebrow="Informations légales"
      title="Mentions légales"
    >
      <LegalSection id="editeur" title="Éditeur du site">
        <p>{site.legalName}</p>
        <p>
          {site.addressLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p>SIRET : {site.siret}</p>
        <p>
          Téléphone : <a href={site.phoneHref}>{site.phone}</a>
          <br />
          Email : <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </LegalSection>
      <LegalSection id="publication" title="Responsable de publication">
        <p>{site.publisher}</p>
      </LegalSection>
      <LegalSection id="hebergement" title="Hébergement">
        <p>
          Netlify, Inc.
          <br />
          101 2nd Street
          <br />
          San Francisco, California 94105
          <br />
          États-Unis
        </p>
        <p>
          Site : <a href="https://www.netlify.com/">https://www.netlify.com/</a>
        </p>
      </LegalSection>
      <LegalSection id="propriete" title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus de ce site, notamment les textes, le logo et
          les éléments graphiques, est la propriété de DÉGGANTE Consulting, sauf
          mention contraire. Toute reproduction ou utilisation sans autorisation
          préalable est interdite.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

function LegalSection({
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
