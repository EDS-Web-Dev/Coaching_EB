import Link from "next/link";
import { Calculator } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "CALCULATEUR VMA",
    description: "Un module interactif sur le site pour définir vos allures cibles instantanément.",
    href: "/outils/calculateur-vma",
    cta: "Calculer ma VMA →",
  },
];

export default function ToolsPreview() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
            DES OUTILS DIGITAUX POUR VOTRE PROGRESSION
          </h2>
        </div>

        <div className="flex justify-center">
          {tools.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-[12px] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-b-4 border-transparent hover:border-forest w-full max-w-sm"
            >
              <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                <t.icon className="w-7 h-7 text-orange" strokeWidth={1.5} />
              </div>
              <h3 className="font-oswald font-bold text-forest text-xl mb-3">{t.title}</h3>
              <p className="font-montserrat text-anthracite/65 text-sm leading-relaxed mb-6">
                {t.description}
              </p>
              <Link
                href={t.href}
                className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange hover:text-orange-hover transition-colors"
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
