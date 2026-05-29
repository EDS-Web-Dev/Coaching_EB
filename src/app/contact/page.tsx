import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Coach Eric pour démarrer votre programme de coaching Trail & Running personnalisé.",
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/casablanca.jpg')" }} />
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
