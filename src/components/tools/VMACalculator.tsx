"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

type Result = {
  vma: number;
  allures: { label: string; pace: string; pct: number }[];
};

function secToMin(secs: number) {
  const m = Math.floor(secs / 60);
  const s = Math.round(secs % 60);
  return `${m}'${s.toString().padStart(2, "0")}"/km`;
}

function calcVMA(distance: number, timeMin: number, timeSec: number): number {
  const totalMin = timeMin + timeSec / 60;
  const speedKmh = (distance / 1000) / (totalMin / 60);
  return Math.round(speedKmh * 10) / 10;
}

export default function VMACalculator() {
  const [distance, setDistance] = useState("1000");
  const [minutes, setMinutes] = useState("4");
  const [seconds, setSeconds] = useState("30");
  const [result, setResult] = useState<Result | null>(null);

  const calculate = () => {
    const d = parseFloat(distance);
    const m = parseInt(minutes);
    const s = parseInt(seconds);
    if (!d || isNaN(m) || isNaN(s)) return;

    const vma = calcVMA(d, m, s);
    const speedMs = vma / 3.6;

    const allures = [
      { label: "Endurance fondamentale (65%)", pct: 0.65 },
      { label: "Seuil aérobie (75%)", pct: 0.75 },
      { label: "Allure marathon (80%)", pct: 0.80 },
      { label: "Seuil anaérobie (85%)", pct: 0.85 },
      { label: "Fractionné court (90%)", pct: 0.90 },
      { label: "VMA — 100%", pct: 1.0 },
    ].map((a) => ({
      ...a,
      pace: secToMin(1000 / (speedMs * a.pct)),
    }));

    setResult({ vma, allures });
  };

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <div>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
              CALCULATEUR VMA
            </h2>
            <p className="font-montserrat text-sm text-anthracite/60 mt-1">
              Entrez votre meilleur temps sur une distance test pour obtenir vos allures cibles.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {/* Distance */}
            <div>
              <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
                Distance (m)
              </label>
              <select
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 appearance-none cursor-pointer"
              >
                <option value="400">400m</option>
                <option value="1000">1 000m</option>
                <option value="1500">1 500m</option>
                <option value="3000">3 000m</option>
                <option value="5000">5 000m</option>
              </select>
            </div>

            {/* Minutes */}
            <div>
              <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
                Minutes
              </label>
              <input
                type="number"
                min={0}
                max={59}
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
              />
            </div>

            {/* Secondes */}
            <div>
              <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
                Secondes
              </label>
              <input
                type="number"
                min={0}
                max={59}
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30 mb-6"
          >
            <Calculator className="w-4 h-4" />
            Calculer mes allures
          </button>

          {result && (
            <div className="border-t border-gray-100 pt-6">
              <div className="text-center mb-6">
                <div className="font-montserrat text-xs uppercase tracking-widest text-anthracite/50 mb-1">Votre VMA estimée</div>
                <div className="font-oswald text-5xl font-bold text-orange">{result.vma} <span className="text-2xl text-anthracite/60">km/h</span></div>
              </div>
              <div className="space-y-3">
                {result.allures.map((a) => (
                  <div key={a.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="font-montserrat text-sm text-anthracite/70">{a.label}</span>
                    <span className="font-oswald font-bold text-forest text-lg">{a.pace}</span>
                  </div>
                ))}
              </div>
              <p className="font-montserrat text-xs text-anthracite/40 mt-4 text-center">
                Valeurs indicatives basées sur le test terrain. Pour un bilan complet, contactez le coach.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
