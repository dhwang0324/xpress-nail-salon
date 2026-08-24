"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type PlaceholderTone = "stone" | "beige" | "taupe" | "charcoal";

const tones: Record<PlaceholderTone, string> = {
  stone: "from-stone via-cream to-warm-white",
  beige: "from-beige via-stone to-cream",
  taupe: "from-taupe/40 via-beige to-cream",
  charcoal: "from-charcoal via-brown to-taupe-dark",
};

/**
 * Modular photography slot. Pass `src` once real photos exist and this
 * renders the image directly — until then it shows a labeled placeholder
 * so every section stays easy to identify and swap.
 */
export function ImagePlaceholder({
  label,
  sublabel,
  src,
  alt = "",
  aspect = "aspect-[4/5]",
  tone = "stone",
  rounded = "rounded-[2rem]",
  className = "",
  objectPosition = "50% 50%",
  mobileObjectPosition,
}: {
  label: string;
  sublabel?: string;
  src?: string;
  alt?: string;
  aspect?: string;
  tone?: PlaceholderTone;
  rounded?: string;
  className?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!mobileObjectPosition) return;
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [mobileObjectPosition]);

  if (src) {
    const position = isMobile && mobileObjectPosition ? mobileObjectPosition : objectPosition;
    return (
      <div className={`relative overflow-hidden ${aspect} ${rounded} ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" style={{ objectPosition: position }} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex ${aspect} ${rounded} ${className} overflow-hidden bg-gradient-to-br ${tones[tone]}`}
    >
      <div className="absolute inset-0 border border-black-soft/5" />
      <div className="relative m-auto flex flex-col items-center gap-3 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal/50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h2.086a1.5 1.5 0 0 0 1.06-.44l.708-.708A1.5 1.5 0 0 1 9.415 4.4h5.17a1.5 1.5 0 0 1 1.06.44l.708.708A1.5 1.5 0 0 0 17.414 6H19.5A1.5 1.5 0 0 1 21 7.5v10A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-10Z" />
            <circle cx="12" cy="12.5" r="3.4" />
          </svg>
        </span>
        <p className="text-[0.7rem] uppercase tracking-wide2 text-charcoal/60">{label}</p>
        {sublabel && <p className="text-[0.65rem] text-charcoal/35">{sublabel}</p>}
      </div>
    </motion.div>
  );
}
