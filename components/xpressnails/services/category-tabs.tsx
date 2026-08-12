"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceCategory, ServiceItem } from "@/lib/services";

function ServiceRow({ service }: { service: ServiceItem }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6">
      <div>
        <p className="text-base font-light">{service.name}</p>
        {service.description && (
          <p className="mt-1 max-w-md text-sm font-light text-charcoal/50">{service.description}</p>
        )}
      </div>
      <p className="whitespace-nowrap font-serif text-lg italic text-taupe-dark">{service.price}</p>
    </div>
  );
}

export function CategoryTabs({ categories }: { categories: ServiceCategory[] }) {
  const [activeSlug, setActiveSlug] = useState(categories[0].slug);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (categories.some((c) => c.slug === hash)) {
      setActiveSlug(hash);
    }
  }, [categories]);

  const active = categories.find((c) => c.slug === activeSlug) ?? categories[0];

  function selectCategory(slug: string) {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `#${slug}`);
  }

  return (
    <div>
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category.slug === activeSlug;
          return (
            <button
              key={category.slug}
              onClick={() => selectCategory(category.slug)}
              className={`flex-shrink-0 rounded-full px-6 py-2.5 text-xs uppercase tracking-wide2 transition-colors duration-300 ${
                isActive
                  ? "bg-charcoal text-warm-white"
                  : "border border-charcoal/20 text-charcoal/55 hover:border-charcoal/40 hover:text-charcoal"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
            {active.services.map((service) => (
              <ServiceRow key={service.name} service={service} />
            ))}
          </div>

          {active.addOns && (
            <div className="mt-10">
              <p className="text-xs uppercase tracking-wide2 text-charcoal/40">
                {active.addOnsLabel ?? "Add-Ons"}
              </p>
              <div className="mt-2 divide-y divide-charcoal/10 border-t border-charcoal/10">
                {active.addOns.map((addOn) => (
                  <ServiceRow key={addOn.name} service={addOn} />
                ))}
              </div>
            </div>
          )}

          {active.disclaimer && (
            <p className="mt-6 font-serif italic text-sm text-charcoal/45">{active.disclaimer}</p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
