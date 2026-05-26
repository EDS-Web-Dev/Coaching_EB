import type { Metadata } from "next";
import PricingGrid from "@/components/offers/PricingGrid";
import EnterpriseSection from "@/components/offers/EnterpriseSection";
import FaqAccordion from "@/components/offers/FaqAccordion";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Nos Offres",
  description: "Découvrez nos packs de coaching Trail & Running : Pack Sente, Pack Crête et Pack Sommet.",
};

export default function OffresPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/images/montagnes.JPG')", backgroundPosition: "center 15%" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="font-oswald font-bold text-orange text-5xl sm:text-6xl">
            NOS OFFRES
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
