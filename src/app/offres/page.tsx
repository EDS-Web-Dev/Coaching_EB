import type { Metadata } from "next";
import Image from "next/image";
import PricingGrid from "@/components/offers/PricingGrid";
import EnterpriseSection from "@/components/offers/EnterpriseSection";
import FaqAccordion from "@/components/offers/FaqAccordion";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Mes Offres — Coaching Trail & Running",
  description: "Découvrez les programmes de coaching Trail & Running : préparation semi-marathon, marathon, trail, pack mensuel et séances en présentiel. Suivi personnalisé au Maroc.",
  openGraph: {
    title: "Mes Offres — Coaching Trail & Running au Maroc",
    description: "Préparation marathon, semi-marathon, trail. Suivi à distance ou en présentiel. Plans d'entraînement personnalisés adaptés à votre niveau.",
    url: "https://ktl-running.com/offres",
  },
};

export default function OffresPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/montagnes.JPG" alt="" fill className="object-cover object-top" priority />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="font-oswald font-bold text-orange text-5xl sm:text-6xl">
            MES OFFRES
          </h1>
        </div>
      </section>

      <PricingGrid />
      <EnterpriseSection />
      <FaqAccordion />
      <CtaStrip />
    </>
  );
}
