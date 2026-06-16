import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Photos de courses",
  description: "La galerie photos d'Éric Bitsch — trail, ultra-trail et marathon.",
  robots: { index: false, follow: false },
};

export default function PhotosPage() {
  return (
    <>
      <section className="relative py-28 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Link href="/medias" className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-white/50 hover:text-orange transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Médias
          </Link>
          <span className="block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-3">
            En images
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl">
            PHOTOS
          </h1>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
            <Camera className="w-10 h-10 text-forest/40" strokeWidth={1.5} />
          </div>
          <h2 className="font-oswald font-bold text-forest text-3xl uppercase mb-3">
            Bientôt disponible
          </h2>
          <p className="font-montserrat text-anthracite/60 text-sm max-w-md mx-auto">
            La galerie photos arrive prochainement. En attendant, retrouvez les aventures d&apos;Éric sur Instagram.
          </p>
          <a
            href="https://www.instagram.com/ericbitsch/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-orange hover:bg-orange-hover text-white font-montserrat font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
          >
            Voir Instagram →
          </a>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
