interface LogoProps {
  size?: "sm" | "md";
}

export default function Logo({ size = "md" }: LogoProps) {
  const iconSize = size === "md" ? 32 : 26;
  const textSize = size === "md" ? "text-lg" : "text-sm";

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="octo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0571D3" />
            <stop offset="100%" stopColor="#5F9ED2" />
          </linearGradient>
        </defs>

        {/* 8 arcos de flujo formando un anillo */}
        <path d="M16 4 Q24 4 28 16" stroke="url(#octo-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9"/>
        <path d="M28 16 Q28 24 16 28" stroke="url(#octo-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
        <path d="M16 28 Q8 28 4 16" stroke="url(#octo-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9"/>
        <path d="M4 16 Q4 8 16 4" stroke="url(#octo-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>

        {/* 8 nodos en el anillo */}
        <circle cx="16" cy="4"  r="2" fill="url(#octo-grad)" />
        <circle cx="25" cy="7"  r="1.5" fill="#5F9ED2" opacity="0.8"/>
        <circle cx="28" cy="16" r="2" fill="url(#octo-grad)" />
        <circle cx="25" cy="25" r="1.5" fill="#5F9ED2" opacity="0.8"/>
        <circle cx="16" cy="28" r="2" fill="url(#octo-grad)" />
        <circle cx="7"  cy="25" r="1.5" fill="#5F9ED2" opacity="0.8"/>
        <circle cx="4"  cy="16" r="2" fill="url(#octo-grad)" />
        <circle cx="7"  cy="7"  r="1.5" fill="#5F9ED2" opacity="0.8"/>

        {/* Nodo central */}
        <circle cx="16" cy="16" r="2.5" fill="url(#octo-grad)" opacity="0.6"/>
      </svg>

      <span className={`${textSize} font-semibold text-white tracking-tight`}>
        Octoflow
      </span>
    </div>
  );
}
