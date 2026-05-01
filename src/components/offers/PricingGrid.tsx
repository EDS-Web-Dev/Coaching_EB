import Link from "next/link";
import { Check, Leaf, Mountain, Triangle } from "lucide-react";
import { packs } from "@/lib/data";
import clsx from "clsx";

function PackIcon({ icon }: { icon: string }) {
  const cls = "w-8 h-8 text-orange";
  if (icon === "leaf") return <Leaf className={cls} strokeWidth={1.5} />;
  if (icon === "mountain") return <Mountain className={cls} strokeWidth={1.5} />;
  return <Triangle className={cls} strokeWidth={1.5} />;
}

export default function PricingGrid() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
            NOS FORMULES DE COACHING
          </h2>
        </div>
        <p className="font-montserrat text-anthracite/60 text-sm mb-12 ml-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Choisissez l&apos;altitude qui vous correspond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packs.map((pack) => (
            <div
              key={pack.name}
              id={pack.name.toLowerCase().replace("pack ", "")}
              className={clsx(
                "relative rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2",
                pack.featured
                  ? "bg-white shadow-2xl shadow-forest/20 border-2 border-orange scale-[1.02]"
                  : "bg-white shadow-md hover:shadow-xl border border-gray-100"
              )}
            >
              {pack.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-montserrat font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                  {pack.badge}
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-5">
                <PackIcon icon={pack.icon} />
              </div>

              <div className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-1">
                {pack.tier}
              </div>
              <h3 className={clsx(
                "font-oswald font-bold text-2xl uppercase mb-3",
                pack.featured ? "text-forest" : "text-anthracite"
              )}>
                {pack.name}
              </h3>
              <p className="font-montserrat text-sm text-anthracite/60 leading-relaxed mb-5">
                {pack.description}
              </p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-oswald font-bold text-5xl text-anthracite">{pack.price}€</span>
                <span className="font-montserrat text-sm text-anthracite/50">/mois</span>
              </div>
              {pack.featured && (
                <p className="font-montserrat text-xs text-orange font-semibold mb-5">Le plus choisi</p>
              )}

              <hr className="border-gray-100 my-5" />

              <ul className="space-y-3 mb-8">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-montserrat text-sm text-anthracite/80">
                    <span className="w-5 h-5 bg-orange/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={clsx(
                  "block text-center font-montserrat font-bold text-sm uppercase tracking-widest py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5",
                  pack.featured
                    ? "bg-orange text-white hover:bg-orange-hover shadow-lg shadow-orange/30"
                    : "bg-forest text-white hover:bg-forest-dark"
                )}
              >
                {pack.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-8 py-4 shadow-sm">
            <span className="text-2xl">🏔️</span>
            <div className="text-left">
              <div className="font-oswald font-semibold text-forest uppercase tracking-wide text-sm">
                Satisfait ou Remboursé — 14 jours
              </div>
              <div className="font-montserrat text-xs text-anthracite/50 mt-0.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
