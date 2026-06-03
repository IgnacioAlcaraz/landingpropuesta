import { footer } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Marca */}
          <div className="flex flex-col gap-3">
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

          {/* Col 3 — copy */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-[rgba(255,255,255,0.25)] mt-auto">
              {footer.copy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
