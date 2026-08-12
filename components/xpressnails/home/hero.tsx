"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative flex h-[92svh] min-h-[640px] items-end overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <ImagePlaceholder
          label="Hero Image Placeholder"
          sublabel="Full-bleed salon / hands photography, 16:9 or taller"
          src="/media/home-hero-nails-closeup.jpg"
          alt="Close-up of a manicured hand with neutral nail polish"
          aspect="aspect-auto h-full"
          rounded="rounded-none"
          tone="beige"
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black-soft/55 via-black-soft/10 to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-lg italic text-warm-white/80"
        >
          Marietta&rsquo;s quiet luxury
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-3 max-w-3xl font-sans text-6xl font-extralight leading-[0.98] tracking-tight text-warm-white sm:text-7xl lg:text-8xl"
        >
          Xpress Spa
          <br />&amp; Nails
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-warm-white px-8 py-3.5 text-xs uppercase tracking-wide2 text-charcoal transition-all hover:bg-cream"
          >
            <span>Book Appointment</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
          </Link>
          <Link href="/services" className="text-xs uppercase tracking-wide2 text-warm-white/70 hover:text-warm-white">
            View Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
