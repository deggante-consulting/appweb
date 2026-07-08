import { Eyebrow } from "@/components/shared/eyebrow";

type IntroBlockProps = Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  light?: boolean;
  className?: string;
}>;

export function IntroBlock({
  as = "h1",
  className = "",
  description,
  eyebrow,
  light = false,
  title,
}: IntroBlockProps) {
  const Heading = as;

  return (
    <div className={`max-w-4xl ${className}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <Heading
        className={
          as === "h1"
            ? "mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            : "mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
        }
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={
            light
              ? "mt-5 max-w-2xl text-lg leading-8 text-neutral-300"
              : "mt-5 max-w-2xl text-lg leading-8 text-[var(--text-soft)]"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
