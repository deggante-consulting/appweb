"use client";

import { useEffect, useRef, useState } from "react";

type DecorativeCurvesProps = Readonly<{
  className?: string;
  dark?: boolean;
}>;

export function DecorativeCurves({
  className = "",
  dark = false,
}: DecorativeCurvesProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawing, setDrawing] = useState(false);
  const opacity = dark ? ["0.42", "0.28", "0.18"] : ["0.3", "0.2", "0.12"];

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawing(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      aria-hidden="true"
      className={`${drawing ? "dg-draw" : "dg-draw-pending"} pointer-events-none absolute inset-0 h-full w-full ${className}`}
      ref={ref}
      preserveAspectRatio="none"
      viewBox="0 0 1440 640"
    >
      <path
        d="M -20 660 C 500 560, 900 520, 1470 180"
        fill="none"
        opacity={opacity[0]}
        stroke="#36B24A"
        strokeWidth="1.6"
      />
      <path
        d="M -20 700 C 520 600, 940 560, 1470 260"
        fill="none"
        opacity={opacity[1]}
        stroke="#36B24A"
        strokeWidth="1.3"
      />
      <path
        d="M -20 740 C 560 640, 980 610, 1470 350"
        fill="none"
        opacity={opacity[2]}
        stroke="#36B24A"
        strokeWidth="1"
      />
    </svg>
  );
}
