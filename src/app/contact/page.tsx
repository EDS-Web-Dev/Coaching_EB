import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Coach Eric Coaching pour un appel découverte gratuit et démarrer votre programme personnalisé.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative py-32 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Contact
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl mb-4">
            DÉMARRONS ENSEMBLE
          </h1>
          <p className="font-montserrat text-white/70 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Remplissez le formulaire pour un appel découverte gratuit.
          </p>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — infos */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
                  Prêt à démarrer ?
                </span>
                <h2 className="font-oswald font-bold text-forest text-3xl sm:text-4xl mt-2 mb-4">
                  PARLONS DE VOTRE PROJET
                </h2>
                <p className="font-montserrat text-anthracite/65 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "contact@trailmaster.fr", href: "mailto:contact@trailmaster.fr" },
                  { icon: Phone, label: "Téléphone", value: "+33 6 00 00 00 00", href: "tel:+33600000000" },
                  { icon: MapPin, label: "Localisation", value: "Alpes, France", href: "#" },
                  { icon: Clock, label: "Réponse sous", value: "24h ouvrées", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-forest/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange/10 transition-colors">
                      <Icon className="w-5 h-5 text-forest group-hover:text-orange transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-montserrat text-xs font-bold uppercase tracking-widest text-anthracite/40">
                        {label}
                      </div>
                      <div className="font-montserrat text-sm text-anthracite font-medium">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Calendly placeholder */}
              <div className="bg-forest rounded-[12px] p-6 text-center">
                <div className="font-oswald font-bold text-white uppercase text-lg mb-2">
                  Appel Découverte Gratuit
                </div>
                <p className="font-montserrat text-white/65 text-xs mb-4">
                  Réservez directement un créneau de 20 minutes dans mon agenda.
                </p>
                <a
                  href="#"
                  className="inline-block bg-orange text-white font-montserrat font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-orange-hover transition-colors"
                >
                  Réserver un créneau →
                </a>
                <p className="font-montserrat text-white/30 text-xs mt-3">
                  Intégration Calendly à configurer
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
