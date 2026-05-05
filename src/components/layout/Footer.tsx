import Link from "next/link";
import { Mountain } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/offres", label: "Nos Offres" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const packLinks = [
  { href: "/offres#sente", label: "Pack Sente" },
  { href: "/offres#crete", label: "Pack Crête" },
  { href: "/offres#sommet", label: "Pack Sommet" },
  { href: "/contact", label: "Programme Sur Mesure" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Strava",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M15 3l-4 9h3l-4 9 9-12h-4z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-orange" strokeWidth={1.5} />
              <span className="font-oswald text-lg font-bold uppercase tracking-wider text-white">
                Coach<span className="text-orange"> Eric</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-3 max-w-xs">
              Coaching Trail & Running personnalisé. De la reprise en douceur à l&apos;ultra-performance, votre potentiel n&apos;attend que vous.
            </p>
            <p className="text-xs text-white/40 mb-5 flex items-center gap-1">
              📍 Basé au <span className="text-white/70 font-semibold">Maroc</span>
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors duration-200 text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-orange transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packs */}
          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Programmes
            </h4>
            <ul className="space-y-2.5">
              {packLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-orange transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Contact
            </h4>
            <Link
              href="/contact"
              className="inline-block bg-orange text-white font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:bg-orange-hover transition-colors"
            >
              Envoyer un message →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 Coach Eric — Tous droits réservés</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white/70 transition-colors">Confidentialité</a>
          </div>
          <span>
            Site développé par{" "}
            <a href="https://eds-web.dev/" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange/80 font-semibold transition-colors">
              EDS Web
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
