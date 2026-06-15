"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

type SubLink = { href: string; label: string; divider?: boolean };

type NavLink =
  | { href: string; label: string; sub?: never }
  | { href: string; label: string; sub: SubLink[] };

const links: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  {
    href: "/offres",
    label: "Mes Offres",
    sub: [
      { href: "/offres?pack=0#formules", label: "Prépa Semi & Marathon" },
      { href: "/offres?pack=1#formules", label: "Prépa Trail" },
      { href: "/offres?pack=2#formules", label: "Pack Mensuel" },
      { href: "/offres?pack=3#formules", label: "Séance Présentielle" },
      { href: "/offres#entreprise", label: "Coaching Entreprise", divider: true },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <div style={{ overflow: "hidden", height: 118, transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="KTL Running Coach" style={{ height: 180, width: "auto", display: "block", marginTop: -35, transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }} />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) =>
              l.sub ? (
                <div
                  key={l.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={l.href}
                    className={clsx(
                      "inline-flex items-center gap-1 font-montserrat text-sm font-semibold uppercase tracking-widest transition-colors duration-200 relative group",
                      pathname === l.href || pathname.startsWith(l.href) ? "text-white" : "text-white/75 hover:text-white"
                    )}
                  >
                    {l.label}
                    <ChevronDown
                      className={clsx("w-3.5 h-3.5 transition-transform duration-200", dropdownOpen ? "rotate-180" : "")}
                    />
                    <span
                      className={clsx(
                        "absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300",
                        pathname.startsWith(l.href) ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>

                  {/* Dropdown — pt-3 crée un pont invisible au-dessus pour éviter le mouseLeave dans le gap */}
                  <div
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[200px] transition-all duration-200",
                      dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="bg-forest/97 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/10">
                      {l.sub.map((s) => (
                        <div key={s.label}>
                          {s.divider && <div className="border-t border-white/15 my-1" />}
                          <Link
                            href={s.href}
                            className="block px-5 py-3 font-montserrat text-xs font-semibold uppercase tracking-widest text-white/75 hover:text-white hover:bg-white/10 transition-colors duration-150"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {s.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "font-montserrat text-sm font-semibold uppercase tracking-widest transition-colors duration-200 relative group",
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
              )
            )}
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
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-forest-dark flex flex-col transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Logo + bouton fermer — fixe en haut */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-2">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <div style={{ overflow: "hidden", height: 118, transform: "translateZ(0)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="KTL Running Coach" style={{ height: 180, width: "auto", display: "block", marginTop: -35 }} />
            </div>
          </Link>
          <button
            className="text-orange p-1"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Liens — scrollable */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-8 py-8">
        {links.map((l) =>
          l.sub ? (
            <div key={l.href} className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-oswald text-2xl font-bold uppercase tracking-widest text-white hover:text-orange transition-colors"
                >
                  {l.label}
                </Link>
                <button
                  onClick={() => setMobileSubOpen(!mobileSubOpen)}
                  aria-label="Afficher les offres"
                  className="text-white hover:text-orange transition-colors"
                >
                  <ChevronDown className={clsx("w-5 h-5 transition-transform duration-200", mobileSubOpen ? "rotate-180" : "")} />
                </button>
              </div>
              {mobileSubOpen && (
                <div className="flex flex-col items-center gap-3">
                  {l.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => { setMobileOpen(false); setMobileSubOpen(false); }}
                      className="font-montserrat text-sm font-semibold uppercase tracking-widest text-orange hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-oswald text-2xl font-bold uppercase tracking-widest text-white hover:text-orange transition-colors"
            >
              {l.label}
            </Link>
          )
        )}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 bg-orange text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full"
        >
          Se lancer →
        </Link>
        </div>
      </div>
    </>
  );
}
