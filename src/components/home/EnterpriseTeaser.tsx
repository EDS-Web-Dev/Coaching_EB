import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export default function EnterpriseTeaser() {
  return (
    <section className="py-16 bg-forest-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-[24px] px-10 py-10">
          {/* Icon + texte */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-orange" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange block mb-1">
                Entreprises & Équipes
              </span>
              <h2 className="font-oswald font-bold text-white text-2xl sm:text-3xl uppercase">
                COACHING POUR LES ENTREPRISES
              </h2>
              <p className="font-montserrat text-white/60 text-sm mt-1 max-w-lg">
                Séminaires trail, coaching de groupe, ateliers bien-être — des programmes sur mesure pour booster la cohésion et la performance de vos équipes.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/offres#entreprise"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
          >
            Découvrir <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
