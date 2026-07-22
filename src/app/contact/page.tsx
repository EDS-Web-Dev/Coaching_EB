import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Démarrer mon coaching Trail & Running",
  description: "Contactez Éric Bitsch pour démarrer votre programme de coaching Trail & Running personnalisé. Entretien découverte gratuit. Réponse sous 24h.",
  openGraph: {
    title: "Contact — KTL Running Coach",
    description: "Démarrez votre coaching Trail & Running personnalisé. Entretien découverte gratuit. Réponse sous 24h.",
    url: "https://ktl-running.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative mt-[70px] h-[500px] md:mt-0 md:h-[700px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/Contact2.jpg" alt="" fill className="object-cover object-top md:object-[center_0%]" priority />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="font-oswald font-bold text-orange text-5xl sm:text-6xl">
            DÉMARRONS ENSEMBLE
          </h1>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <Image src="/images/casablanca.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
