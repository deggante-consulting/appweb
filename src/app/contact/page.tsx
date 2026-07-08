import { ContactForm } from "@/components/forms/contact-form";
import { IntroBlock } from "@/components/shared/intro-block";
import { site, zones } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <section className="dg-section bg-[var(--background)]">
      <div className="dg-container">
        <IntroBlock
          className="mb-10 dg-fade-up"
          description="Décrivez votre situation en quelques lignes. Chaque demande est étudiée avant de proposer un rendez-vous, un accompagnement ou un devis."
          eyebrow="Contact"
          title="Demander un premier échange"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_392px]">
          <ContactForm />
          <aside className="grid gap-5 lg:h-fit">
            <div className="rounded-[var(--radius-panel)] bg-[var(--dark)] p-7 text-white">
              <h2 className="text-xl font-extrabold">Coordonnées</h2>
              <div className="mt-6 grid gap-5">
                <ContactItem label="Téléphone" value={site.phone} href={site.phoneHref} />
                <ContactItem label="Email" value={site.email} href={`mailto:${site.email}`} />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent-light)]">
                    Adresse
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    {site.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="dg-card p-6">
              <h2 className="font-extrabold">Comment ça se passe ensuite ?</h2>
              <ol className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                <li>1. DÉGGANTE Consulting lit votre demande.</li>
                <li>2. Le cabinet vous recontacte selon votre préférence.</li>
                <li>3. Si l'intervention est adaptée, une proposition ou un devis est transmis.</li>
              </ol>
            </div>
            <div className="rounded-[var(--radius-panel)] border border-[#ddeedf] bg-[var(--soft)] p-6">
              <h2 className="font-extrabold">Zones d'intervention</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {zones.join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  href,
  label,
  value,
}: Readonly<{ href: string; label: string; value: string }>) {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent-light)]">
        {label}
      </p>
      <a className="mt-2 inline-flex font-extrabold hover:text-[var(--accent)]" href={href}>
        {value}
      </a>
    </div>
  );
}
