import { Eyebrow } from "@/components/shared/eyebrow";

type SectionHeadingProps = Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${className}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={
          light
            ? "text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            : "text-3xl font-extrabold tracking-tight text-[var(--dark)] sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            light
              ? "text-base leading-8 text-neutral-300"
              : "text-base leading-8 text-[var(--text-soft)]"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
