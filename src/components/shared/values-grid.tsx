import { values } from "@/content/site";

type ValuesGridProps = Readonly<{
  columns?: 2 | 4;
}>;

export function ValuesGrid({ columns = 4 }: ValuesGridProps) {
  return (
    <div
      className={
        columns === 2
          ? "grid gap-3 sm:grid-cols-2 sm:gap-5"
          : "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
      }
    >
      {values.map((value) => (
        <article
          className="rounded-[var(--radius-panel)] border border-white/10 bg-white/[0.055] p-4 transition hover:border-[var(--accent)] sm:p-6"
          key={value.creole}
        >
          <h3 className="text-xl font-extrabold text-[var(--accent)] sm:text-2xl">{value.creole}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--on-dark)] sm:mt-4 sm:leading-7">{value.text}</p>
        </article>
      ))}
    </div>
  );
}
