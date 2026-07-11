import Link from "next/link";

import { ServiceIcon } from "@/components/shared/service-icon";
import type { services } from "@/content/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: Readonly<{ service: Service }>) {
  return (
    <article className="dg-card group relative flex h-full min-h-72 flex-col gap-5 p-7 transition hover:border-[var(--accent)] hover:shadow-[0_10px_28px_rgba(13,13,13,0.08)] sm:p-8">
      <div className="flex items-center justify-between">
        <ServiceIcon id={service.id} />
        <span className="text-sm font-extrabold text-[var(--muted-soft)]">{service.number}</span>
      </div>
      <h3 className="text-2xl font-extrabold leading-tight">{service.title}</h3>
      <p className="text-base leading-8 text-[var(--text-soft)]">{service.summary}</p>
      <Link
        className="mt-auto inline-flex min-h-11 items-center text-base font-extrabold text-[var(--accent-dark)] after:absolute after:inset-0"
        href={`/services#${service.id}`}
      >
        En savoir plus{" "}
        <span
          aria-hidden="true"
          className="ml-2 inline-flex transition-transform group-hover:translate-x-[3px]"
        >
          →
        </span>
      </Link>
    </article>
  );
}
