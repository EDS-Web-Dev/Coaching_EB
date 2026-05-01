"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";
import clsx from "clsx";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
          <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">FAQ</h2>
        </div>

        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-[12px] overflow-hidden bg-off-white">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-oswald font-semibold text-forest uppercase tracking-wide text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={clsx(
                    "w-5 h-5 text-orange flex-shrink-0 transition-transform duration-300",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300",
                  open === i ? "max-h-60" : "max-h-0"
                )}
              >
                <p className="font-montserrat text-sm text-anthracite/70 leading-relaxed px-6 pb-5">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
