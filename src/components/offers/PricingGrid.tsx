"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, Wifi, MapPin } from "lucide-react";
import { packs } from "@/lib/data";
import clsx from "clsx";

function PackIcon({ icon }: { icon: string }) {
  const cls = "w-8 h-8 text-orange";
  if (icon === "wifi") return <Wifi className={cls} strokeWidth={1.5} />;
  return <MapPin className={cls} strokeWidth={1.5} />;
}

function PricingGridInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<"distance" | "presentiel">(
    tabParam === "presentiel" ? "presentiel" : "distance"
  );

  useEffect(() => {
    if (tabParam === "presentiel") setActiveTab("presentiel");
    else if (tabParam === "distance") setActiveTab("distance");
  }, [tabParam]);

  const pack = packs.find((p) => p.type === activeTab)!;

  return (
    <section id="formules" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
            MES FORMULES DE COACHING
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
            {[
              { key: "distance", label: "À Distance" },
              { key: "presentiel", label: "Présentiel" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "distance" | "presentiel")}
                className={clsx(
                  "font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-200",
                  activeTab === key
                    ? "bg-orange text-white shadow-md"
                    : "text-anthracite/60 hover:text-anthracite"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Pack card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[24px] p-10 shadow-2xl shadow-forest/10 border-2 border-orange">
            <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6">
              <PackIcon icon={pack.icon} />
            </div>

            <h3 className="font-oswald font-bold text-3xl uppercase text-forest mb-3">
              {pack.name}
            </h3>
            <p className="font-montserrat text-anthracite/60 leading-relaxed mb-8">
              {pack.description}
            </p>

            <hr className="border-gray-100 mb-8" />

            <ul className="space-y-4 mb-10">
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
              className="block text-center font-montserrat font-bold text-sm uppercase tracking-widest py-4 rounded-full bg-orange text-white hover:bg-orange-hover shadow-lg shadow-orange/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              {pack.cta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Suspense } from "react";

export default function PricingGrid() {
  return (
    <Suspense fallback={null}>
      <PricingGridInner />
    </Suspense>
  );
}
