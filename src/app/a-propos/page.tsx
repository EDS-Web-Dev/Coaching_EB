import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Flame, Users, TrendingUp, type LucideIcon } from "lucide-react";
import CtaStrip from "@/components/home/CtaStrip";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { AnimatedStagger, AnimatedStaggerItem } from "@/components/shared/AnimatedStagger";

import QuotesSlider from "@/components/shared/QuotesSlider";

export const metadata: Metadata = {
  title: "À Propos — Éric Bitsch, Coach Trail & Running",
  description: "Découvrez Éric Bitsch, coach Trail & Running passionné basé au Maroc. Finisher de la Diagonale des Fous, marathonien et ultra-traileur avec 13 ans d'expérience.",
  openGraph: {
    title: "À Propos — Éric Bitsch, Coach Trail & Running au Maroc",
    description: "Finisher de la Diagonale des Fous, marathonien et ultra-traileur. Éric Bitsch partage sa passion du running et du trail à travers un coaching personnalisé.",
    url: "https://ktl-running.com/a-propos",
  },
};

const values: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Rigueur et régularité",
    description: "La rigueur et la régularité font partie des piliers de la progression.",
    icon: Target,
  },
  {
    title: "Plaisir",
    description: "Te faire progresser en prenant un maximum de plaisir, avec un minimum de souffrance.",
    icon: Flame,
  },
  {
    title: "Partage",
    description: "C'est la volonté de partager ma passion du running et du trail qui me pousse à me lancer dans le coaching.",
    icon: Users,
  },
  {
    title: "Progressivité",
    description: "Je privilégie une approche progressive pour limiter les risques de blessure et construire des bases solides.",
    icon: TrendingUp,
  },
];

const palmares = [
  { year: "2016-2017-2019", title: "Marathon de Paris", detail: "42,195 km", logo: "/images/marathon-paris.jpg" },
  { year: "2019", title: "Marathon de New-York", detail: "42,195 km", logo: "/images/logomarathonnewyork.webp" },
  { year: "2025", title: "Traversée Nord de l'Echappée Belle", detail: "Trail · 96km · 7200 D+", logo: "/images/logoechapeebelle.jpg" },
  { year: "2025", title: "Grand Raid de la Réunion", detail: "Trail · 198km · 11 000m D+", logo: "/images/logograndraid.png" },
  { year: "2026", title: "Tamuda Bay Eco-triathlon", detail: "Distance Olympique", logo: "/images/logotamudatriathlon.jpeg" },
];


export default function AProposPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/Tizi N'Oucheg.jpg" alt="" fill className="object-cover object-[center_70%]" priority />
        <AnimatedSection className="relative z-10 max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-2xl font-black uppercase tracking-widest text-orange mb-4">
            La philosophie du Coach
          </span>
          <p className="font-montserrat text-white text-2xl font-black" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
            &quot;Kiffer sa life&quot;
          </p>
        </AnimatedSection>
      </section>

      {/* Photo superposée entre hero et bio — z-20 pour passer au-dessus des deux sections */}
      <div className="relative flex justify-center -mt-40 z-20">
        <AnimatedSection delay={0.15}>
          <div className="relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-[5px] border-orange shadow-2xl z-10 pointer-events-none" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/images/Profil pic.JPG"
                  alt="Photo de profil du coach Eric"
                  fill
                  className="object-cover scale-125"
                  sizes="(max-width: 768px) 208px, 288px"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bio — remonte derrière la photo pour couvrir la zone blanche */}
      <section className="relative -mt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/quisuisje.JPG')" }} />
        <div className="absolute inset-0 bg-white/80" />

        <AnimatedSection className="relative z-10 pt-48 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
            Qui je suis ?
          </span>
          <h2 className="font-oswald font-bold text-forest text-4xl sm:text-5xl mt-2 mb-6 leading-snug">
            Coach autodidacte, passionné avant tout
          </h2>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-4">
            Je cours depuis maintenant plus de 13 ans. Pourtant, au départ, je détestais la course à pied… jusqu&apos;à ce qu&apos;elle devienne une véritable passion.
          </p>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-4">
            J&apos;ai commencé par des 10 km, puis des semi-marathons, avant de me lancer sur marathon. Progressivement, j&apos;ai évolué vers le trail, jusqu&apos;à devenir ultra-traileur et atteindre un objectif marquant : être finisher de la mythique Diagonale des Fous en 2025.
          </p>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-8">
            Au fil des années, ma passion m&apos;a poussé à me former en continu : écoute de podcasts spécialisés, formations en ligne, apprentissage constant… sans oublier l&apos;expérience acquise sur le terrain, aussi bien sur route qu&apos;en trail.
          </p>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-8">
            C&apos;est naturellement que j&apos;ai commencé à accompagner des proches et des amis. Leurs progrès et leurs retours positifs m&apos;ont donné envie d&apos;aller plus loin et aujourd&apos;hui, je mets mon expérience à ton service pour t&apos;aider à atteindre tes objectifs, quels qu&apos;ils soient.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
            >
              Travailler avec moi →
            </Link>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-8 pt-2">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/ericbitsch/",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                      <path d="M15 3l-4 9h3l-4 9 9-12h-4z" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@ericbitsch7489",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                      <rect x="2" y="5" width="20" height="14" rx="3" />
                      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center gap-2 group"
                >
                  <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-anthracite/50 group-hover:text-orange transition-colors duration-200">
                    {label}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center text-forest group-hover:bg-orange group-hover:text-white transition-all duration-200">
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Palmarès */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/images/fondpalmares.jpg')", backgroundPosition: "30% center" }} />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h2 className="font-oswald text-3xl font-bold text-forest">PALMARÈS</h2>
          </AnimatedSection>
          <div className="relative pl-6 border-l-2 space-y-8" style={{ borderImage: "linear-gradient(to bottom, #FF7043, #1B4332) 1" }}>
            {palmares.map((p) => (
              <AnimatedSection key={p.title} direction="right">
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-orange border-2 border-white shadow" />
                  {p.logo && (
                    <div className="relative h-12 w-20 flex-shrink-0">
                      <Image src={p.logo} alt={p.title} fill className="object-contain rounded" sizes="80px" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest mb-1">
                      {p.year}
                    </div>
                    <h4 className="font-oswald font-semibold text-forest uppercase text-base mb-1">
                      {p.title}
                    </h4>
                    {p.detail && <p className="font-montserrat text-sm text-anthracite/60">{p.detail}</p>}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-forest topo-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="flex items-center gap-4 mb-12">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">MES VALEURS</h2>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <AnimatedStaggerItem key={v.title}>
                  <div className="bg-white/8 border border-white/12 rounded-[12px] p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-oswald font-bold text-white text-xl uppercase mb-2">{v.title}</h3>
                    <p className="font-montserrat text-white/60 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStagger>
        </div>
      </section>

      <QuotesSlider />

      <CtaStrip />
    </>
  );
}
