import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Coach Eric pour démarrer votre programme de coaching Trail & Running personnalisé.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Remplissez le formulaire, je vous réponds sous 24h.
          </p>
          <p className="font-montserrat text-white/50 text-sm mt-3">
            📍 Basé au <span className="text-orange font-semibold">Maroc</span>
          </p>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
