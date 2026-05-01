import type { Metadata } from "next";
import PricingGrid from "@/components/offers/PricingGrid";
import FaqAccordion from "@/components/offers/FaqAccordion";
import CtaStrip from "@/components/home/CtaStrip";
import VMACalculator from "@/components/tools/VMACalculator";

export const metadata: Metadata = {
  title: "Nos Offres",
  description: "Découvrez nos packs de coaching Trail & Running : Pack Sente, Pack Crête et Pack Sommet.",
};

export default function OffresPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative py-32 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Programmes
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl mb-4">
            NOS OFFRES
          </h1>
          <p className="font-montserrat text-white/70 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Choisissez l&apos;altitude qui vous correspond.
          </p>
        </div>
      </section>

      <PricingGrid />
      <VMACalculator />
      <FaqAccordion />
      <CtaStrip />
    </>
  );
}
