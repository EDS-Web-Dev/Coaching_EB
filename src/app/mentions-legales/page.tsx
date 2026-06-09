import type { Metadata } from "next";
import Link from "next/link";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site KTL Running Coach.",
};

const sections = [
  {
    title: "1. Éditeur du site",
    content: [
      "Le site **ktlcoaching.com** est édité par :",
      "**Nom :** Eric Bitsch",
      "**Activité :** Coach Trail & Running indépendant",
      "**Adresse :** Casablanca, Maroc",
    ],
  },
  {
    title: "2. Hébergement",
    content: [
      "Le site est hébergé par :",
      "**Vercel Inc.**",
      "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      "Site : [vercel.com](https://vercel.com)",
    ],
  },
  {
    title: "3. Propriété intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive d'Eric Bitsch ou de ses partenaires, et est protégé par les lois en vigueur sur la propriété intellectuelle.",
      "Toute reproduction, distribution ou utilisation sans autorisation préalable écrite est strictement interdite.",
    ],
  },
  {
    title: "4. Données personnelles",
    content: [
      "Dans le cadre de l'utilisation du formulaire de contact, des données personnelles peuvent être collectées (nom, email, message).",
      "Ces données sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers.",
      "Conformément à la loi marocaine 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
      "Pour exercer ce droit, contactez-nous via le formulaire de contact du site.",
    ],
  },
  {
    title: "5. Cookies",
    content: [
      "Ce site n'utilise pas de cookies de tracking ou publicitaires.",
      "Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.",
    ],
  },
  {
    title: "6. Limitation de responsabilité",
    content: [
      "Eric Bitsch s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.",
      "Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
      "En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.",
    ],
  },
  {
    title: "7. Loi applicable",
    content: [
      "Les présentes mentions légales sont régies par le droit marocain.",
      "En cas de litige, les tribunaux compétents de Casablanca seront seuls habilités.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h1 className="font-oswald text-4xl sm:text-5xl font-bold text-forest">MENTIONS LÉGALES</h1>
          </div>
          <p className="font-montserrat text-sm text-anthracite/50 mb-12">
            Dernière mise à jour : mai 2026
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-oswald text-xl font-bold text-forest uppercase mb-4">{s.title}</h2>
                <div className="space-y-3">
                  {s.content.map((line, i) => (
                    <p key={i} className="font-montserrat text-sm text-anthracite/70 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-orange hover:underline">$1</a>'),
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="font-montserrat text-sm text-orange hover:underline">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
