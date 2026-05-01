import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez votre coach Trail & Running certifié, sa philosophie et son parcours sportif.",
};

const values = [
  {
    title: "Rigueur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    emoji: "🎯",
  },
  {
    title: "Passion",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    emoji: "🔥",
  },
  {
    title: "Nature",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    emoji: "🏔️",
  },
  {
    title: "Progressivité",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    emoji: "📈",
  },
];

const palmares = [
  { year: "2023", title: "UTMB — Top 50", detail: "170km · 10 000m D+" },
  { year: "2022", title: "Trail des Écrins — Podium", detail: "80km · 5 200m D+" },
  { year: "2021", title: "Marathon des Sables — Finisher", detail: "250km · Sahara" },
  { year: "2020", title: "Grand Raid de la Réunion", detail: "165km · 9 600m D+" },
];

export default function AProposPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative py-32 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Le Coach
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl mb-4">À PROPOS</h1>
          <p className="font-montserrat text-white/70 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        </div>
      </section>

      {/* Split layout — fidèle à la maquette */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait avec bord arrondi organique + anneau orange */}
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-orange scale-105" />
                <Image
                  src="https://www.mountaineering.scot/assets/contentfiles/media-upload/Introduction_to_Outdoor_Bouldering_2026.png"
                  alt="Votre coach TrailMaster"
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 right-4 md:right-0 bg-orange text-white rounded-[12px] px-5 py-3 shadow-xl text-center">
                <div className="font-oswald font-bold text-3xl leading-none">15+</div>
                <div className="font-montserrat text-xs mt-0.5">Ans d&apos;expérience</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
                Votre Coach TrailMaster
              </span>
              <h2 className="font-oswald font-bold text-forest text-4xl sm:text-5xl mt-2 mb-6">
                L&apos;HUMAIN DERRIÈRE L&apos;EXPERT
              </h2>
              <p className="font-montserrat text-anthracite/70 leading-relaxed mb-4">
                Passionné de montagne et de physiologie, je vous accompagne avec une approche scientifique et bienveillante. Mon but ? Vous faire progresser durablement.
              </p>
              <p className="font-montserrat text-anthracite/70 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <p className="font-montserrat text-anthracite/70 leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Diplômé d'État en Sport",
                  "+15 ans d'expérience en Ultra",
                  "Expert en réathlétisation",
                  "Certifié préparation mentale",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-montserrat text-sm text-anthracite/80">
                    <Check className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
              >
                Travailler avec moi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-forest topo-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">MES VALEURS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/8 border border-white/12 rounded-[12px] p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-oswald font-bold text-white text-xl uppercase mb-2">{v.title}</h3>
                <p className="font-montserrat text-white/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palmarès */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Timeline parcours */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
                <h2 className="font-oswald text-3xl font-bold text-forest">PARCOURS</h2>
              </div>
              <div className="relative pl-6 border-l-2 border-gradient-to-b from-orange to-forest space-y-8" style={{ borderImage: "linear-gradient(to bottom, #FF7043, #1B4332) 1" }}>
                {[
                  { year: "2009", title: "Première course officielle 10km", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                  { year: "2014", title: "Premier marathon — 2h58", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
                  { year: "2016", title: "Transition vers le trail ultra", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem." },
                  { year: "2018", title: "Diplôme d'État BPJEPS", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur." },
                  { year: "2019", title: "Création TrailMaster Coaching", desc: "Nam libero tempore cum soluta nobis est eligendi optio." },
                ].map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-orange border-2 border-white shadow" />
                    <div className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest mb-1">
                      {item.year}
                    </div>
                    <h4 className="font-oswald font-semibold text-forest uppercase text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="font-montserrat text-sm text-anthracite/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Palmarès */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
                <h2 className="font-oswald text-3xl font-bold text-forest">PALMARÈS</h2>
              </div>
              <div className="space-y-4">
                {palmares.map((p) => (
                  <div
                    key={p.title}
                    className="flex items-center gap-4 bg-off-white border border-gray-100 rounded-[12px] p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-montserrat text-xs font-bold text-orange uppercase tracking-wider mb-0.5">
                        {p.year}
                      </div>
                      <div className="font-oswald font-semibold text-forest uppercase text-base">{p.title}</div>
                      <div className="font-montserrat text-xs text-anthracite/50">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
