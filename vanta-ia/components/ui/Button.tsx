import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
  href?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[6px] px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-[#5F9ED2] text-black hover:brightness-110 hover:scale-[1.02] active:scale-[0.99]",
    ghost:
      "bg-transparent text-white border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.04)]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
