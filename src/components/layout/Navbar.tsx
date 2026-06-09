"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/offres", label: "Mes Offres" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? "bg-forest/97 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-1" : "py-2",
          navBg
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div style={{ width: 200, height: 95, overflow: "hidden", display: "flex", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo2.svg" alt="KTL Running Coach" width={200} height={55} style={{ objectFit: "cover", display: "block", flexShrink: 0 }} />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "font-montserrat text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative group",
                  pathname === l.href ? "text-white" : "text-white/75 hover:text-white"
                )}
              >
                {l.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300",
                    pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
          >
            Se lancer →
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden text-orange p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-forest-dark flex flex-col items-center justify-center gap-8 transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="font-oswald text-2xl font-bold uppercase tracking-widest text-white hover:text-orange transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 bg-orange text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full"
        >
          Se lancer →
        </Link>
      </div>
    </>
  );
}
