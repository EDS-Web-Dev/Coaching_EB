import Link from "next/link";
import Image from "next/image";

const profiles = [
  {
    id: "debutant",
    title: "DÉBUTANT",
    subtitle: "Commencer sans douleur et avec plaisir.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    image: "https://www.serfaus-fiss-ladis.at/Celum/03%20C%C3%B6ffentlich/Website/01_SFL.AT/00_Startseite/Sommer26/223962/image-thumb__223962__lightbox/bifangweg-20-28c-29-20serfaus-fiss-ladis-20marketing-20gmbh-20andreas-20kirschner_1.d3796fc9.jpg",
    href: "/offres#sente",
    accent: "border-forest",
  },
  {
    id: "sante",
    title: "REPRISE / SANTÉ",
    subtitle: "Revenir plus fort après une blessure.",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    image: "https://www.bone-joint.com/wp-content/uploads/sites/393/2025/06/A-physiotherapist-is-applying-kinesio-tape-to-a-patients-knee-during-a-rehabilitation-session-for-a-sports-injury.jpg.webp",
    href: "/offres#crete",
    accent: "border-forest",
  },
  {
    id: "performance",
    title: "CONFIRMÉ",
    subtitle: "Exploser vos chronos en Trail & Ultra.",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://static.wixstatic.com/media/18edb7_9d9d508309ca499eb68eeebcd8afae0e~mv2.jpeg/v1/fill/w_2500,h_1666,al_c/18edb7_9d9d508309ca499eb68eeebcd8afae0e~mv2.jpeg",
    href: "/offres#sommet",
    accent: "border-forest",
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
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
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
