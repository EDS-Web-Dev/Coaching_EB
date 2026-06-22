import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Mic, Camera } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { AnimatedStagger, AnimatedStaggerItem } from "@/components/shared/AnimatedStagger";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Médias",
  description: "Récits de courses, podcasts et photos d'Éric Bitsch, coach Trail & Running.",
  robots: { index: false, follow: false },
};

const categories = [
  {
    href: "/medias/recits",
    label: "Récits de courses",
    description: "Des aventures racontées depuis l'intérieur — la préparation, la course, les émotions.",
    icon: BookOpen,
    count: "1 article",
    image: "/images/medias/recit.jpeg",
  },
  {
    href: "/medias/podcasts",
    label: "Podcasts",
    description: "Éric au micro — des discussions autour du trail, du running et de la performance.",
    icon: Mic,
    count: "1 épisode",
    image: "/images/medias/podcast.jpeg",
  },
  {
    href: "/medias/photos",
    label: "Photos de courses",
    description: "Les moments forts en images, des sentiers de montagne aux lignes d'arrivée.",
    icon: Camera,
    count: "42 photos",
    image: "/images/medias/photomedia.jpeg",
  },
];

export default function MediasPage() {
  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/amizmiz.JPG" alt="" fill className="object-cover object-right md:object-center" priority />
<AnimatedSection className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-oswald font-bold text-orange text-5xl sm:text-6xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}>
            MÉDIAS
          </h1>
        </AnimatedSection>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <AnimatedStaggerItem key={c.href}>
                  <Link href={c.href} className="group block bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={c.image} alt={c.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-forest/60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-orange/90 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
                        {c.count}
                      </span>
                      <h2 className="font-oswald font-bold text-forest text-2xl uppercase mt-1 mb-2 group-hover:text-orange transition-colors duration-200">
                        {c.label}
                      </h2>
                      <p className="font-montserrat text-anthracite/60 text-sm leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStagger>

          <div className="flex justify-center items-center gap-8 mt-16 pt-12 border-t border-gray-200">
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/ericbitsch/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
              {
                label: "Strava",
                href: "https://www.strava.com/athletes/37327428",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                    <path d="M13 3l-4 9h3l-4 9 9-12h-4z" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@ericbitsch7489",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                    <rect x="2" y="5" width="20" height="14" rx="3" />
                    <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex flex-col items-center gap-2 group"
              >
                <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-orange">
                  {label}
                </span>
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest group-hover:bg-orange group-hover:text-white transition-all duration-200">
                  {icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
