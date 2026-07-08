import { processSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <ol className="relative grid gap-0 before:absolute before:bottom-5 before:left-[1.35rem] before:top-5 before:w-0.5 before:bg-[var(--accent)] md:grid-cols-5 md:gap-0 md:before:bottom-auto md:before:left-0 md:before:right-0 md:before:top-[1.35rem] md:before:h-0.5 md:before:w-auto">
      {processSteps.map((step, index) => (
        <li className="relative z-10 grid grid-cols-[2.75rem_1fr] gap-3 pb-5 last:pb-0 md:flex md:flex-col md:gap-3 md:pr-8 md:pb-0" key={step.title}>
          <span
            className={
              index === 0
                ? "inline-flex size-11 items-center justify-center rounded-full border-2 border-[var(--accent-dark)] bg-[var(--accent-dark)] text-sm font-extrabold text-white shadow-[0_0_0_6px_var(--background)]"
                : "inline-flex size-11 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-white text-sm font-extrabold text-[var(--accent-dark)] shadow-[0_0_0_6px_var(--background)]"
            }
          >
            {index + 1}
          </span>
          <div>
            <h3 className="font-extrabold">{step.title}</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-soft)] md:leading-7">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
