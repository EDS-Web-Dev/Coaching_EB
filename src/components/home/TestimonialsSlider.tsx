"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import clsx from "clsx";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDragging = useRef(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;

  const goTo = useCallback((index: number) => {
    setCurrent(((index % count) + count) % count);
  }, [count]);

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => goTo(current + 1), 5000);
  }, [current, goTo]);

  useEffect(() => {
    autoRef.current = setInterval(() => setCurrent((c) => (c + 1) % count), 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [count]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startXRef.current = e.clientX;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - startXRef.current;
    if (Math.abs(diff) > 50) { goTo(current + (diff < 0 ? 1 : -1)); resetAuto(); }
  };
  const handleTouchStart = (e: React.TouchEvent) => { startXRef.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startXRef.current;
    if (Math.abs(diff) > 50) { goTo(current + (diff < 0 ? 1 : -1)); resetAuto(); }
  };

  return (
    <section className="py-24 bg-forest topo-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header row */}
        <div className="flex items-end justify-between mb-14">
          <div className="flex items-center gap-4">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">
              ILS ONT FRANCHI LA LIGNE
            </h2>
          </div>
          {/* Slide counter */}
          <div className="hidden sm:flex items-center gap-2 font-oswald text-white/30 text-lg">
            <span className="text-orange font-bold text-2xl">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(count).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={trackRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 max-w-4xl">
                  {/* Orange left border accent */}
                  <div className="hidden lg:block w-1 bg-orange rounded-full mr-10 flex-shrink-0" />

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-orange text-orange" />
                      ))}
                    </div>

                    {/* Large decorative quote */}
                    <div className="font-oswald text-8xl text-orange leading-none mb-2 select-none">"</div>

                    {/* Quote text */}
                    <blockquote className="font-montserrat text-white/90 text-xl md:text-2xl leading-relaxed font-light mb-10">
                      {t.text}
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange/60 to-orange flex items-center justify-center flex-shrink-0">
                        <span className="font-oswald font-bold text-white text-sm">{t.initials}</span>
                      </div>
                      <div className="border-l border-white/20 pl-4">
                        <div className="font-oswald font-bold text-white uppercase tracking-wide text-lg">{t.author}</div>
                        <div className="font-montserrat text-sm text-white/50">{t.meta}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-12">
          <button
            onClick={() => { goTo(current - 1); resetAuto(); }}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => { goTo(current + 1); resetAuto(); }}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Progress dots */}
          <div className="flex gap-2 ml-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetAuto(); }}
                aria-label={`Slide ${i + 1}`}
                className={clsx(
                  "h-1 rounded-full transition-all duration-300",
                  i === current ? "bg-orange w-8" : "bg-white/20 w-4 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
