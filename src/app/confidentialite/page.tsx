import type { Metadata } from "next";
import Link from "next/link";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données du site KTL Coaching.",
};

const sections = [
  {
    title: "1. Responsable du traitement",
    content: [
      "**Eric Bitsch** — Coach Trail & Running",
      "**Email :** contact@ktlcoaching.com",
      "**Localisation :** Casablanca, Maroc",
    ],
  },
  {
    title: "2. Données collectées",
    content: [
      "Dans le cadre du formulaire de contact, les données suivantes peuvent être collectées :",
      "• Prénom et nom",
      "• Adresse email",
      "• Contenu du message",
      "Aucune donnée bancaire ni donnée sensible n'est collectée sur ce site.",
    ],
  },
  {
    title: "3. Finalité du traitement",
    content: [
      "Les données collectées sont utilisées uniquement pour :",
      "• Répondre à vos demandes de contact ou d'information",
      "• Vous envoyer des informations relatives à nos offres de coaching si vous en faites la demande",
      "Vos données ne sont jamais revendues, ni transmises à des tiers à des fins commerciales.",
    ],
  },
  {
    title: "4. Durée de conservation",
    content: [
      "Vos données sont conservées pour une durée maximale de **3 ans** à compter du dernier contact.",
      "Passé ce délai, elles sont supprimées de nos systèmes.",
    ],
  },
  {
    title: "5. Vos droits",
    content: [
      "Conformément à la loi marocaine **09-08** relative à la protection des données personnelles, vous disposez des droits suivants :",
      "• **Droit d'accès** : obtenir une copie de vos données",
      "• **Droit de rectification** : corriger des données inexactes",
      "• **Droit de suppression** : demander l'effacement de vos données",
      "• **Droit d'opposition** : vous opposer au traitement de vos données",
      "Pour exercer ces droits, contactez-nous à : **contact@ktlcoaching.com**",
    ],
  },
  {
    title: "6. Sécurité des données",
    content: [
      "Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.",
      "Le site est hébergé sur l'infrastructure sécurisée de **Vercel Inc.**",
    ],
  },
  {
    title: "7. Cookies",
    content: [
      "Ce site n'utilise pas de cookies de tracking, d'analyse ou publicitaires.",
      "Seuls des cookies strictement nécessaires au bon fonctionnement technique du site peuvent être utilisés.",
    ],
  },
  {
    title: "8. Modifications",
    content: [
      "Cette politique de confidentialité peut être mise à jour à tout moment.",
      "La date de dernière mise à jour est indiquée en haut de page.",
      "Nous vous encourageons à la consulter régulièrement.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h1 className="font-oswald text-4xl sm:text-5xl font-bold text-forest">POLITIQUE DE CONFIDENTIALITÉ</h1>
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
                          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
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
