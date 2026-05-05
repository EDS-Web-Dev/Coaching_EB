import Link from "next/link";
import { Users, Trophy, Heart, Mic } from "lucide-react";

const formats = [
  {
    icon: Users,
    title: "Coaching de groupe",
    description: "Sessions collectives pour améliorer la cohésion d'équipe autour de la course à pied et du trail.",
  },
  {
    icon: Trophy,
    title: "Séminaire Trail",
    description: "Journée ou week-end en nature pour renforcer les liens entre collaborateurs sur des parcours adaptés.",
  },
  {
    icon: Heart,
    title: "Ateliers Bien-être",
    description: "Programmes de remise en forme et gestion du stress pour améliorer la performance au travail.",
  },
  {
    icon: Mic,
    title: "Conférences & Keynotes",
    description: "Interventions sur la performance, la résilience et le dépassement de soi appliqués au monde professionnel.",
  },
];

export default function EnterpriseSection() {
  return (
    <section id="entreprise" className="py-24 bg-forest topo-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
              Entreprises & Équipes
            </span>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">
                COACHING ENTREPRISE
              </h2>
            </div>
            <p className="font-montserrat text-white/70 text-sm leading-relaxed ml-5">
              Le sport comme levier de performance collective. J&apos;accompagne vos équipes avec des programmes sur mesure alliant trail, cohésion et bien-être au travail.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 lg:justify-end">
            {[
              { value: "50+", label: "Entreprises accompagnées" },
              { value: "500+", label: "Collaborateurs coachés" },
              { value: "100%", label: "Sur mesure" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-oswald text-4xl font-bold text-orange">{value}</div>
                <div className="font-montserrat text-xs uppercase tracking-widest text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {formats.map((f) => (
            <div
              key={f.title}
              className="bg-white/8 border border-white/12 rounded-[16px] p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-orange" strokeWidth={1.5} />
              </div>
              <h3 className="font-oswald font-bold text-white text-lg uppercase mb-2">{f.title}</h3>
              <p className="font-montserrat text-white/60 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-montserrat text-white/60 text-sm mb-6">
            Chaque programme est conçu sur mesure selon vos objectifs et la taille de votre équipe.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-orange/40"
          >
            Demander un devis →
          </Link>
        </div>
      </div>
    </section>
  );
}
