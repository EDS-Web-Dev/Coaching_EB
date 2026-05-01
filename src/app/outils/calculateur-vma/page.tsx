import type { Metadata } from "next";
import VMACalculator from "@/components/tools/VMACalculator";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Calculateur VMA",
  description: "Calculez votre VMA et obtenez vos allures d'entraînement personnalisées gratuitement.",
};

export default function CalculateurVMAPage() {
  return (
    <>
      <section className="relative py-32 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Outil gratuit
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl mb-4">
            CALCULATEUR VMA
          </h1>
          <p className="font-montserrat text-white/70 text-base">
            Définissez vos allures cibles d&apos;entraînement en quelques secondes.
          </p>
        </div>
      </section>
      <VMACalculator />
      <CtaStrip />
    </>
  );
}
