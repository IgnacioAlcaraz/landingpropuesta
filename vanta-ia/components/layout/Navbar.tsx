"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { nav, WA_LINK } from "@/content/copy";

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          border-b border-[var(--border)]
          ${scrolled
            ? "bg-[rgba(247,248,252,0.92)] backdrop-blur-md"
            : "bg-transparent"}
        `}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo size="md" />

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--slate)] hover:text-[var(--ink)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button variant="primary" href={WA_LINK}>
              {nav.cta}
            </Button>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            className="md:hidden text-[var(--ink)] p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Drawer mobile */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-300
          ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[var(--ink)] transition-opacity duration-300 ${
            menuOpen ? "opacity-40" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-72 bg-white border-l border-[var(--border)]
            flex flex-col pt-20 pb-8 px-6 gap-6
            transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col gap-5">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-[var(--slate)] hover:text-[var(--ink)] transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full mt-auto" onClick={closeMenu}>
            {nav.cta}
          </Button>
        </div>
      </div>
    </>
  );
}
