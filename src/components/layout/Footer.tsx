import Link from "next/link";


const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/offres", label: "Nos Offres" },
];

const packLinks = [
  { href: "/offres#formules", label: "Prépa Semi-marathon & Marathon" },
  { href: "/offres#formules", label: "Prépa Trail" },
  { href: "/offres#formules", label: "Pack Mensuel" },
  { href: "/offres#formules", label: "Séance Présentielle" },
  { href: "/offres#entreprise", label: "Coaching Entreprise" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ericbitsch/",
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
    href: "https://www.strava.com/athletes/37327428",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M15 3l-4 9h3l-4 9 9-12h-4z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ericbitsch7489",
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
    <footer className="bg-forest text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4 flex justify-center">
              <div style={{ width: 200, height: 95, overflow: "hidden", display: "flex", alignItems: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo2.svg" alt="KTL Running Coach" width={200} height={55} style={{ objectFit: "cover", display: "block", flexShrink: 0 }} />
              </div>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors duration-200 text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:pl-8">
            <h4 className="font-oswald text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
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
                <li key={l.label}>
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
          <span>© 2026 KTL Running Coach — Tous droits réservés</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/70 transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white/70 transition-colors">Confidentialité</Link>
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
