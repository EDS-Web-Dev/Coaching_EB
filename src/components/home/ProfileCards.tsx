import Link from "next/link";

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
        {/* Section header — fidèle à la maquette avec barre orange gauche */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
            UN ACCOMPAGNEMENT POUR CHAQUE PROFIL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
