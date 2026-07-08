import { ButtonLink } from "@/components/shared/button-link";
import { site } from "@/content/site";

type CTASectionProps = Readonly<{
  title?: string;
  description?: string;
}>;

export function CTASection({
  title = "Décrivez votre situation",
  description = "Un premier échange permet de comprendre votre besoin et de déterminer la suite appropriée : accompagnement, devis ou orientation.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[var(--dark)] py-16 text-center text-white">
      <div className="dg-container flex flex-col items-center gap-5">
        <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-neutral-300">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink arrow href="/contact">
            Demander un premier échange
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="light">
            {site.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
