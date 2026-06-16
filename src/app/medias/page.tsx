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
    image: "/images/Tizi N'Oucheg.jpg",
  },
  {
    href: "/medias/podcasts",
    label: "Podcasts",
    description: "Éric au micro — des discussions autour du trail, du running et de la performance.",
    icon: Mic,
    count: "1 épisode",
    image: "/images/montagnes.JPG",
  },
  {
    href: "/medias/photos",
    label: "Photos de courses",
    description: "Les moments forts en images, des sentiers de montagne aux lignes d'arrivée.",
    icon: Camera,
    count: "Bientôt disponible",
    image: "/images/paysage.jpg",
  },
];

export default function MediasPage() {
  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/montagnes.JPG" alt="" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/50" />
        <AnimatedSection className="relative z-10 max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Univers KTL
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl">
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
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
