type EyebrowProps = Readonly<{
  children: string;
  light?: boolean;
  className?: string;
}>;

export function Eyebrow({ children, light = false, className = "" }: EyebrowProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-0.5 w-7 bg-[var(--accent)]" />
      <span
        className={
          light
            ? "text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-light)]"
            : "text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-dark)]"
        }
      >
        {children}
      </span>
    </div>
  );
}
