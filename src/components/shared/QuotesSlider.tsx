"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { quotes } from "@/lib/data";
import clsx from "clsx";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function QuotesSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = quotes.length;

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(((index % count) + count) % count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="py-20 bg-forest-dark topo-texture overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Titre */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-orange">MES CITATIONS PRÉFÉRÉES</h2>
        </div>

        {/* Guillemet décoratif */}
        <div className="font-oswald text-8xl text-orange leading-none select-none mb-2">&ldquo;</div>

        {/* Zone de citation animée */}
        <div className="relative h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="absolute inset-x-0 flex flex-col items-center justify-center gap-5 px-4"
            >
              <blockquote className="font-oswald font-bold text-white text-2xl sm:text-3xl md:text-4xl uppercase leading-tight">
                {quotes[current].text}
              </blockquote>
              {quotes[current].author && (
                <cite className="font-montserrat text-orange text-sm font-bold uppercase tracking-widest not-italic">
                  — {quotes[current].author}
                </cite>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => goTo(current - 1, -1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={clsx(
                  "h-1 rounded-full transition-all duration-300",
                  i === current ? "bg-orange w-8" : "bg-white/20 w-4 hover:bg-white/40"
                )}
                aria-label={`Citation ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1, 1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
