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
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">
            ILS ONT FRANCHI LA LIGNE
          </h2>
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
              <div key={i} className="min-w-full px-0 md:px-16">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-orange text-orange" />
                    ))}
                  </div>
                  {/* Quote mark */}
                  <div className="font-oswald text-6xl text-white/20 leading-none mb-4 select-none">"</div>
                  <blockquote className="font-montserrat text-white/85 text-lg md:text-xl leading-relaxed italic mb-8">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-light to-orange flex items-center justify-center flex-shrink-0">
                      <span className="font-oswald font-bold text-white text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-oswald font-bold text-white uppercase tracking-wide">{t.author}</div>
                      <div className="font-montserrat text-sm text-white/50">{t.meta}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => { goTo(current - 1); resetAuto(); }}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetAuto(); }}
                aria-label={`Slide ${i + 1}`}
                className={clsx(
                  "h-2 rounded-full transition-all duration-300",
                  i === current ? "bg-orange w-6" : "bg-white/25 w-2 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => { goTo(current + 1); resetAuto(); }}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange hover:border-orange transition-all duration-200"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
