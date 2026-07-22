import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { AnimatedStagger, AnimatedStaggerItem } from "@/components/shared/AnimatedStagger";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Récits de courses",
  description: "Les récits de courses d'Éric Bitsch — trail, ultra-trail et marathon.",
  robots: { index: false, follow: false },
};

const articles = [
  {
    slug: "diagonale-des-fous-2025",
    title: "Récit de ma Diagonale des Fous 2025",
    excerpt: "Quatre ans et demi de préparation. Des hauts, des bas, des galères, des joies. Et une ligne d'arrivée à la Redoute qui valait chaque goutte de sueur.",
    date: "Octobre 2025",
    readTime: "10 min",
    image: "/images/logograndraid.png",
    tag: "Ultra-trail · 198 km · 11 000m D+",
  },
];

export default function RecitsPage() {
  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/medias/recit.jpeg" alt="" fill className="object-cover" style={{ objectPosition: "center 20%" }} priority />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="font-oswald font-bold text-orange text-5xl sm:text-6xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}>
            Récits de courses
          </h1>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Link href="/medias" className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-orange hover:text-orange-hover transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Médias
          </Link>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((a) => (
              <AnimatedStaggerItem key={a.slug}>
                <Link href={`/medias/recits/${a.slug}`} className="group block bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-52 bg-forest/10 flex items-center justify-center overflow-hidden">
                    <Image src={a.image} alt={a.title} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
                      {a.tag}
                    </span>
                    <h2 className="font-oswald font-bold text-forest text-2xl uppercase mt-2 mb-3 group-hover:text-orange transition-colors duration-200 leading-tight">
                      {a.title}
                    </h2>
                    <p className="font-montserrat text-anthracite/60 text-sm leading-relaxed mb-4">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 font-montserrat text-xs text-anthracite/40">
                        <span>{a.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-montserrat text-xs font-bold uppercase tracking-widest text-orange group-hover:gap-2 transition-all duration-200">
                        Lire <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
