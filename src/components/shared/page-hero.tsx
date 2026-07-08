import { DecorativeCurves } from "@/components/patterns/decorative-curves";
import { IntroBlock } from "@/components/shared/intro-block";

type PageHeroProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-20 text-white">
      <DecorativeCurves dark />
      <div className="dg-container relative dg-fade-up">
        <IntroBlock description={description} eyebrow={eyebrow} light title={title} />
      </div>
    </section>
  );
}
