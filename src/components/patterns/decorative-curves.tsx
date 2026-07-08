type DecorativeCurvesProps = Readonly<{
  className?: string;
  dark?: boolean;
}>;

export function DecorativeCurves({
  className = "",
  dark = false,
}: DecorativeCurvesProps) {
  const opacity = dark ? ["0.42", "0.28", "0.18"] : ["0.3", "0.2", "0.12"];

  return (
    <svg
      aria-hidden="true"
      className={`dg-draw pointer-events-none absolute inset-0 h-full w-full ${className}`}
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
