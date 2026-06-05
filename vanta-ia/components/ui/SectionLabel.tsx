interface SectionLabelProps {
  children: string;
  className?: string;
  center?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  center = false,
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-medium tracking-widest uppercase text-[var(--flow-violet)] mb-4 ${
        center ? "text-center w-full" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
