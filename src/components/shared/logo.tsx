import Image from "next/image";
import Link from "next/link";

import { images, site } from "@/content/site";

type LogoProps = Readonly<{
  light?: boolean;
}>;

export function Logo({ light = false }: LogoProps) {
  return (
    <Link className="inline-flex min-h-11 items-center gap-3" href="/">
      <Image
        alt=""
        aria-hidden="true"
        className="rounded-full"
        height={44}
        priority
        src={light ? images.logoDark : images.logo}
        width={44}
      />
      <span className="flex flex-col leading-none">
        <span
          className={
            light
              ? "text-[17px] font-extrabold text-[var(--accent)]"
              : "text-xl font-extrabold text-[var(--accent-dark)]"
          }
        >
          DÉGGANTE
        </span>
        <span
          className={
            light
              ? "mt-1 text-[13px] font-semibold text-neutral-200"
              : "mt-1 text-sm font-semibold text-[var(--dark-soft)]"
          }
        >
          Consulting
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </Link>
  );
}
