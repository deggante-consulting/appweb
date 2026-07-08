import { processSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-5 md:gap-0 md:before:absolute md:before:left-0 md:before:right-0 md:before:top-[1.35rem] md:before:h-0.5 md:before:bg-[var(--accent)]">
      {processSteps.map((step, index) => (
        <li className="relative z-10 flex flex-col gap-3 pr-8" key={step.title}>
          <span
            className={
              index === 0
                ? "inline-flex size-11 items-center justify-center rounded-full border-2 border-[var(--accent-dark)] bg-[var(--accent-dark)] text-sm font-extrabold text-white shadow-[0_0_0_6px_var(--background)]"
                : "inline-flex size-11 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-white text-sm font-extrabold text-[var(--accent-dark)] shadow-[0_0_0_6px_var(--background)]"
            }
          >
            {index + 1}
          </span>
          <h3 className="font-extrabold">{step.title}</h3>
          <p className="text-sm leading-7 text-[var(--text-soft)]">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
