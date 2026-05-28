import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

const profiles = [
  {
    id: "debutant",
    title: "DÉBUTANT",
    subtitle: "Commencer sans douleur et avec plaisir.",
    href: "/offres#sente",
  },
  {
    id: "sante",
    title: "REPRISE",
    subtitle: "Revenir plus fort après une blessure.",
    href: "/offres#crete",
  },
  {
    id: "performance",
    title: "CONFIRMÉ",
    subtitle: "Exploser vos chronos en Trail & Ultra.",
    href: "/offres#sommet",
  },
];

export default function ProfileCards() {
  return (
    <section id="profils" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
            UN ACCOMPAGNEMENT POUR CHAQUE PROFIL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {profiles.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group block bg-white rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-forest"
            >
              <div className="p-6 text-center">
                <h3 className="font-oswald text-xl font-bold text-forest mb-2">
                  {p.title}
                </h3>
                <p className="font-montserrat text-anthracite/70 text-sm leading-relaxed">
                  {p.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Entreprise */}
        <div className="bg-forest-dark rounded-[16px] px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-orange/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-orange" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange block mb-1">
                Entreprises & Équipes
              </span>
              <h3 className="font-oswald font-bold text-white text-2xl uppercase">
                COACHING POUR LES ENTREPRISES
              </h3>
              <p className="font-montserrat text-white/60 text-sm mt-1 max-w-lg">
                Séminaires trail, coaching de groupe, ateliers bien-être — des programmes sur mesure pour booster la cohésion et la performance de vos équipes.
              </p>
            </div>
          </div>
          <Link
            href="/offres#entreprise"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
          >
            Découvrir <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
