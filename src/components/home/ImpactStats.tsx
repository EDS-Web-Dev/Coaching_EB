"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Vitesse Ascensionnelle (D+)", value: 35, color: "bg-forest", suffix: "%", prefix: "+" },
  { label: "Endurance Fondamentale", value: 22, color: "bg-forest", suffix: "%", prefix: "+" },
  { label: "Économie de course", value: 18, color: "bg-forest", suffix: "%", prefix: "+" },
  { label: "Réduction Risque Blessure", value: 60, color: "bg-orange", suffix: "%", prefix: "-" },
];

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [widths, setWidths] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach((s, i) => {
            let current = 0;
            const step = s.value / 40;
            const timer = setInterval(() => {
              current = Math.min(current + step, s.value);
              setWidths((prev) => {
                const next = [...prev];
                next[i] = current;
                return next;
              });
              if (current >= s.value) clearInterval(timer);
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
            L&apos;IMPACT DU COACHING SUR VOS RÉSULTATS
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-oswald font-semibold text-anthracite uppercase tracking-wide text-sm">
                  {s.label}
                </span>
                <span className={`font-oswald font-bold text-lg ${s.color === "bg-orange" ? "text-orange" : "text-forest"}`}>
                  {s.prefix}{Math.round(widths[i])}{s.suffix}
                </span>
              </div>
              <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${s.color} rounded-full flex items-center justify-end pr-4 transition-all duration-700 ease-out`}
                  style={{ width: `${(widths[i] / 100) * 100}%`, minWidth: widths[i] > 0 ? "3rem" : "0" }}
                >
                  <span className="font-oswald font-bold text-white text-sm">
                    {widths[i] > 5 ? `${s.prefix}${Math.round(widths[i])}${s.suffix}` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <p className="font-montserrat text-xs text-anthracite/50 italic mt-4">
            Données moyennes observées après 6 mois de suivi personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
}
