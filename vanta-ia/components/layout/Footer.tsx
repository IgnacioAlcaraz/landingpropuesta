import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { footer } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Marca */}
          <div className="flex flex-col gap-3">
            <a href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-avanta.jpeg"
                alt="Avanta Labs"
                width={28}
                height={28}
                className="rounded-sm object-contain"
              />
              <span className="text-xl font-semibold tracking-tight">
                {footer.brand.prefix}
                <span className="text-[#5F9ED2]">{footer.brand.suffix}</span>
              </span>
            </a>
            <p className="text-sm text-[var(--muted)] max-w-[220px] leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Col 2 — Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Navegación
            </span>
            <ul className="flex flex-col gap-2.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Redes + copy */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Síguenos
            </span>
            <div className="flex items-center gap-4">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[var(--muted)] hover:text-white transition-colors duration-200"
                >
                  {s.label === "LinkedIn"  && <Linkedin  size={18} />}
                  {s.label === "Instagram" && <Instagram size={18} />}
                </a>
              ))}
            </div>
            <p className="text-xs text-[rgba(255,255,255,0.25)] mt-auto">
              {footer.copy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
