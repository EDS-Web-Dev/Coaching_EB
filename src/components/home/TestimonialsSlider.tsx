"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import clsx from "clsx";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function TestimonialsSlider() {
  return (
    <section className="py-24 bg-forest topo-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

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

        {/* Grid 3+2 centré */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={clsx(
                "md:col-span-2",
                i === 3 && "lg:col-start-2"
              )}
            >
              <div className="bg-white/8 border border-white/10 rounded-[12px] p-6 hover:bg-white/12 transition-all duration-300 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-orange text-orange" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-montserrat text-white/80 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
