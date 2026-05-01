"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.findarace.com/production/organisers/300662/gallery/TRAIL-RUNNING-IN-THE-FOREST-OF-DEAN-1.png?w=1600&auto=compress%2Cformat&fit=crop&dm=1769415326&s=3876962e58d61a22e43cc3af8efdb606')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-forest/75 to-forest-dark/60" />
      {/* Topo texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cellipse cx='400' cy='400' rx='380' ry='200'/%3E%3Cellipse cx='400' cy='400' rx='320' ry='160'/%3E%3Cellipse cx='400' cy='400' rx='260' ry='125'/%3E%3Cellipse cx='400' cy='400' rx='200' ry='92'/%3E%3Cellipse cx='400' cy='400' rx='140' ry='60'/%3E%3Cellipse cx='400' cy='400' rx='80' ry='30'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "600px 600px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        {/* Content card - fidèle à la maquette */}
        <div
          className={clsxTransition(
            "bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 md:p-16 max-w-3xl mx-auto text-center transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange text-xs font-montserrat font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            ★ Coach Certifié Trail & Running
          </span>

          <h1 className="font-oswald font-bold text-white leading-tight mb-3">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              DÉPASSEZ VOS LIMITES,
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange mt-1">
              QUEL QUE SOIT LE TERRAIN.
            </span>
          </h1>

          <p className="font-montserrat text-white/80 text-base sm:text-lg max-w-xl mx-auto mt-5 mb-8 leading-relaxed font-light">
            Coaching personnalisé pour traileurs et runners, de la reprise en douceur à l&apos;ultra-performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/offres"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-orange/40"
            >
              DÉCOUVRIR MES PROGRAMMES
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Découvrir le coach
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div
          className={clsxTransition(
            "flex flex-wrap justify-center gap-10 mt-12 transition-all duration-700 delay-300",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {[
            { value: "150+", label: "Athlètes accompagnés" },
            { value: "8 ans", label: "d'expérience" },
            { value: "98%", label: "Taux de satisfaction" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-oswald text-3xl font-bold text-white">{value}</div>
              <div className="font-montserrat text-xs uppercase tracking-widest text-white/50 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#profils"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}

function clsxTransition(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
