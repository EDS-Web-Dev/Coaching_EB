import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mic } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "Éric Bitsch au micro — épisodes de podcasts autour du trail et du running.",
  robots: { index: false, follow: false },
};

const podcasts = [
  {
    title: "L'instant outdoor",
    episode: "Éric Bitsch — Il survit à une agression mortelle grâce au sport",
    description: "Épisode #268 · 1h01 — Éric Bitsch invité du podcast L'instant outdoor pour parler de son histoire, de comment le sport l'a sauvé, et de sa passion pour le trail et l'ultra.",
    platform: "Apple Podcasts",
    href: "https://podcasts.apple.com/fr/podcast/linstant-outdoor/id1574334477?i=1000644017065",
    date: "Février 2024",
  },
];

export default function PodcastsPage() {
  return (
    <>
      <section className="relative py-28 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Link href="/medias" className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-white/50 hover:text-orange transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Médias
          </Link>
          <span className="block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-3">
            Au micro
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl">
            PODCASTS
          </h1>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {podcasts.map((p) => (
              <AnimatedSection key={p.title}>
                <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-md border-l-4 border-orange">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Mic className="w-7 h-7 text-orange" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
                        {p.platform} · {p.date}
                      </span>
                      <h2 className="font-oswald font-bold text-forest text-2xl uppercase mt-1 mb-1">
                        {p.title}
                      </h2>
                      <p className="font-montserrat text-sm font-semibold text-anthracite/60 mb-3">
                        {p.episode}
                      </p>
                      <p className="font-montserrat text-sm text-anthracite/70 leading-relaxed mb-5">
                        {p.description}
                      </p>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
                      >
                        Écouter <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
