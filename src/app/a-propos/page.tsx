import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez votre coach Trail & Running certifié, sa philosophie et son parcours sportif.",
};

const values = [
  {
    title: "Rigueur et régularité",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    emoji: "🎯",
  },
  {
    title: "Plaisir",
    description: "Te faire progresser en prenant un maximum de plaisir, avec un minimum de souffrance.",
    emoji: "🔥",
  },
  {
    title: "Partage",
    description: ".",
    emoji: "🏔️",
  },
  {
    title: "Progressivité",
    description: "Je privilégie une approche progressive pour limiter les risques de blessure et construire des bases solides.",
    emoji: "📈",
  },
];

const palmares = [
  { year: "2016-2017-2019", title: "Marathon de Paris", detail: "42,195 km" },
  { year: "2019", title: "Marathon de New-York", detail: "42,195 km" },
  { year: "2025", title: "Traversée Nord de l'Echappée Belle", detail: "Trail · 96km · 7200 D+" },
  { year: "2025", title: "Grand Raid de la Réunion", detail: "Trail · 198km · 11 000m D+" },
  { year: "2026", title: "Tamuda Bay Eco-triathlon", detail: "Distance Olympique" },
];

export default function AProposPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-40 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/images/Tizi%20N%27Oucheg.jpg')", backgroundPosition: "center 70%" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-2xl font-black uppercase tracking-widest text-orange mb-4">
            La philosophie du Coach
          </span>

          <p className="font-montserrat text-white text-2xl font-black" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
            "Kiffer sa life"
          </p>
        </div>
      </section>

      {/* Photo centrée à cheval entre hero et section bio */}
      <div className="flex justify-center -mt-24 relative z-10 mb-0">
        <div className="relative">
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full border-4 border-orange scale-102 shadow-2xl" />
            <Image
              src="/images/profil.jpg"
              alt="Votre coach Coach Eric"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 208px, 288px"
            />
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="pt-12 pb-24 bg-off-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
            Qui je suis ?
          </span>
          <h2 className="font-oswald font-bold text-forest text-4xl sm:text-5xl mt-2 mb-6 leading-snug">
          Coach autodidacte, passionné avant tout
          </h2>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-4">
          Je cours depuis maintenant plus de 13 ans. Pourtant, au départ, je détestais la course à pied… jusqu’à ce qu’elle devienne une véritable passion.
          </p>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-4">
          J’ai commencé par des 10 km, puis des semi-marathons, avant de me lancer sur marathon. Progressivement, j’ai évolué vers le trail, jusqu’à devenir ultra-traileur et atteindre un objectif marquant : être finisher de la mythique Diagonale des Fous en 2025.
          </p>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-8">
          Au fil des années, ma passion m’a poussé à me former en continu : écoute de podcasts spécialisés, formations en ligne, apprentissage constant… sans oublier l’expérience acquise sur le terrain, aussi bien sur route qu’en trail.
          </p>
          <p className="font-montserrat text-anthracite/70 leading-relaxed mb-8">
          C’est naturellement que j’ai commencé à accompagner des proches et des amis. Leurs progrès et leurs retours positifs m’ont donné envie d’aller plus loin et aujourd’hui, je mets mon expérience à ton service pour t’aider à atteindre tes objectifs, quels qu’ils soient.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
            >
              Travailler avec moi →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-forest topo-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">MES VALEURS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/8 border border-white/12 rounded-[12px] p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-oswald font-bold text-white text-xl uppercase mb-2">{v.title}</h3>
                <p className="font-montserrat text-white/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palmarès */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Timeline parcours */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
                <h2 className="font-oswald text-3xl font-bold text-forest">PARCOURS</h2>
              </div>
              <div className="relative pl-6 border-l-2 border-gradient-to-b from-orange to-forest space-y-8" style={{ borderImage: "linear-gradient(to bottom, #FF7043, #1B4332) 1" }}>
                {[
                  { year: "2013", title: "Premier semi marathon", desc: "Semi Marathon de CAsablanca." },
                  { year: "2015", title: "Premier trail", desc: "NOMADS RUN - 21km" },
                  { year: "2016", title: "Premier marathon", desc: "Marathon de Paris" },
                  { year: "2018", title: "Première course de désert", desc: "Race Desert Marathon - 3 étapes - 100km." },
                  { year: "2026", title: "Premier Triathlon", desc: "Tamuda Bay Eco-Triathlon." },
                  { year: "2026", title: "Création Coach Eric Coaching", desc: "Nam libero tempore cum soluta nobis est eligendi optio." },
                ].map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-orange border-2 border-white shadow" />
                    <div className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest mb-1">
                      {item.year}
                    </div>
                    <h4 className="font-oswald font-semibold text-forest uppercase text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="font-montserrat text-sm text-anthracite/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Palmarès */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
                <h2 className="font-oswald text-3xl font-bold text-forest">PALMARÈS</h2>
              </div>
              <div className="space-y-4">
                {palmares.map((p) => (
                  <div
                    key={p.title}
                    className="flex items-center gap-4 bg-off-white border border-gray-100 rounded-[12px] p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-montserrat text-xs font-bold text-orange uppercase tracking-wider mb-0.5">
                        {p.year}
                      </div>
                      <div className="font-oswald font-semibold text-forest uppercase text-base">{p.title}</div>
                      <div className="font-montserrat text-xs text-anthracite/50">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
