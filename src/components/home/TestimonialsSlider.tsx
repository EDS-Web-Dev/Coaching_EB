"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import clsx from "clsx";

const PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / PER_PAGE);

type Testimonial = typeof testimonials[0];

function TestimonialCard({ t }: { t: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, []);

  return (
    <div className="bg-white/8 border border-white/10 rounded-[12px] p-6 hover:bg-white/12 transition-all duration-300 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, si) => (
          <Star key={si} className="w-3.5 h-3.5 fill-orange text-orange" />
        ))}
      </div>

      <div className="flex-1 mb-6">
        <blockquote
          ref={textRef}
          className={clsx(
            "font-montserrat text-white/80 text-sm leading-relaxed",
            !isExpanded && "line-clamp-10"
          )}
        >
          &ldquo;{t.text}&rdquo;
        </blockquote>
        {isClamped && (
          <button
            onClick={() => setIsExpanded((v) => !v)}
            className="mt-2 font-montserrat text-xs font-semibold text-orange hover:text-orange/80 transition-colors duration-200"
          >
            {isExpanded ? "Voir moins ↑" : "En voir plus ↓"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange/60 to-orange flex items-center justify-center flex-shrink-0">
          <span className="font-oswald font-bold text-white text-xs">{t.initials}</span>
        </div>
        <div>
          <div className="font-oswald font-bold text-white uppercase tracking-wide text-sm">{t.author}</div>
          <div className="font-montserrat text-xs text-white/50">{t.meta}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSlider() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    const bounded = (next + totalPages) % totalPages;
    setDirection(bounded >= page ? 1 : -1);
    setPage(bounded);
  };

  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/coms.jpg')" }} />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">
            ILS M&apos;ONT FAIT CONFIANCE
          </h2>
        </motion.div>

        {/* Slider avec flèches latérales (grands écrans uniquement) */}
        <div className="relative">

          {/* Flèche gauche — lg uniquement */}
          <button
            onClick={() => goTo(page - 1)}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200 z-10"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
              >
                {visible.map((t, i) => (
                  <TestimonialCard key={i} t={t} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flèche droite — lg uniquement */}
          <button
            onClick={() => goTo(page + 1)}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200 z-10"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots de navigation + flèches sur mobile */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Flèche gauche — mobile uniquement */}
          <button
            onClick={() => goTo(page - 1)}
            className="lg:hidden w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={clsx(
                  "h-1 rounded-full transition-all duration-300",
                  i === page ? "bg-orange w-8" : "bg-white/20 w-4 hover:bg-white/40"
                )}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          {/* Flèche droite — mobile uniquement */}
          <button
            onClick={() => goTo(page + 1)}
            className="lg:hidden w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
