import { ContactForm } from "@/components/forms/contact-form";
import { IntroBlock } from "@/components/shared/intro-block";
import { site, zones } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <section className="bg-[var(--background)] py-[68px]">
      <div className="dg-container">
        <IntroBlock
          className="mb-[26px] dg-fade-up"
          description="Décrivez votre situation en quelques lignes. Nous étudions chaque demande avant de proposer un rendez-vous, un accompagnement ou un devis."
          eyebrow="Contact"
          title="Demander un premier échange"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_440px] lg:gap-16">
          <ContactForm />
          <aside className="grid gap-[18px] lg:h-fit">
            <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--dark)] p-8 text-white">
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
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent-light)]">
                    Horaires
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Lundi - vendredi · 9 h - 17 h
                  </p>
                </div>
              </div>
            </div>
            <div className="dg-card p-7">
              <h2 className="font-extrabold">Comment ça se passe ensuite ?</h2>
              <ol className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                <li className="flex gap-3">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--soft)] text-xs font-extrabold text-[var(--accent-dark)]">1</span>
                  Nous lisons votre demande et étudions la situation.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--soft)] text-xs font-extrabold text-[var(--accent-dark)]">2</span>
                  Nous vous recontactons selon votre préférence pour un premier échange.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--soft)] text-xs font-extrabold text-[var(--accent-dark)]">3</span>
                  Si nous pouvons intervenir, nous proposons un accompagnement ou un devis.
                </li>
              </ol>
              <p className="mt-4 border-t border-[var(--line)] pt-4 text-sm leading-6 text-[var(--muted-soft)]">
                Pas de réservation automatique, pas de paiement en ligne.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-[#ddeedf] bg-[var(--soft)] p-6">
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
