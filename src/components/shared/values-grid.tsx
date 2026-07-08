import { values } from "@/content/site";

export function ValuesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => (
        <article
          className="rounded-[var(--radius-panel)] border border-white/10 bg-white/[0.055] p-6 transition hover:border-[var(--accent)]"
          key={value.creole}
        >
          <h3 className="text-2xl font-extrabold text-[var(--accent)]">{value.creole}</h3>
          <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#c9c9c2]">
            {value.label}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#c9c9c2]">{value.text}</p>
        </article>
      ))}
    </div>
  );
}
