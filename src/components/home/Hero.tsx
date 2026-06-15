"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "150+", label: "Athlètes accompagnés" },
  { value: "8 ans", label: "d'expérience" },
  { value: "98%", label: "Taux de satisfaction" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/paysage.jpg')" }}
      />


      {/* Topo texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cellipse cx='400' cy='400' rx='380' ry='200'/%3E%3Cellipse cx='400' cy='400' rx='320' ry='160'/%3E%3Cellipse cx='400' cy='400' rx='260' ry='125'/%3E%3Cellipse cx='400' cy='400' rx='200' ry='92'/%3E%3Cellipse cx='400' cy='400' rx='140' ry='60'/%3E%3Cellipse cx='400' cy='400' rx='80' ry='30'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "600px 600px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-36 pb-8">
        <div className="max-w-3xl">

          {/* Badge localisation */}
          <div
            className={cls(
              "inline-flex items-center gap-2 mb-8 transition-all duration-500",
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-white bg-forest-dark/50 backdrop-blur-sm rounded-full px-3 py-1">
              📍 Coaching Trail & Running — Basé au{" "}
              <span className="text-orange">Maroc</span>
            </span>
          </div>

          {/* Title */}
          <h1
            className={cls(
              "font-oswald font-bold text-white leading-[0.95] mb-6 transition-all duration-700 delay-100",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {/* Orange accent bar */}
            <span className="flex items-start gap-5">
              <span className="w-1.5 bg-orange rounded-full mt-2 flex-shrink-0 self-stretch" />
              <span>
                <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl whitespace-nowrap">
                  KTL = <span className="text-orange">KIFF TA LIFE</span>
                </span>
                <span className="block text-lg sm:text-2xl md:text-3xl mt-3 font-semibold leading-snug max-w-xl">
                  C&apos;est mon crédo et celui que je veux partager avec vous.
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-orange mt-2">
                  ERIC
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={cls(
              "font-montserrat text-white text-base sm:text-lg leading-relaxed font-semibold mb-10 ml-6 max-w-xl transition-all duration-700 delay-200",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Coaching personnalisé pour traileurs et runners, du démarrage en douceur à l&apos;ultra-performance.
          </p>

          {/* CTAs */}
          <div
            className={cls(
              "flex flex-col sm:flex-row gap-4 sm:ml-6 items-center sm:items-start transition-all duration-700 delay-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <Link
              href="/offres"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-2xl shadow-orange/50"
            >
              DÉCOUVRIR MES OFFRES
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Découvrir le coach
            </Link>
          </div>
        </div>
      </div>



      {/* Scroll hint */}
      <a
        href="#profils"
        className="absolute bottom-24 right-8 hidden md:flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll"
      >
        <span className="font-montserrat text-xs uppercase tracking-widest rotate-90 mb-2">scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}

function cls(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
