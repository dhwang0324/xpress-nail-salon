"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/85 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent"
        }`}
      >
        <Container className="flex items-center justify-between py-5">
          <Link href="/" className="font-sans text-sm font-medium uppercase tracking-wide3 text-charcoal">
            Xpress <span className="font-serif italic normal-case tracking-normal">Spa &amp; Nails</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wide2 transition-colors ${
                    active ? "text-charcoal" : "text-charcoal/50 hover:text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-charcoal px-6 py-2.5 text-xs uppercase tracking-wide2 text-warm-white transition-colors hover:bg-black-soft md:inline-block"
          >
            Book Appointment
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1 md:hidden"
          >
            <span className={`block h-px w-6 bg-charcoal transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-charcoal transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-warm-white/95 backdrop-blur-md md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-charcoal/10 px-8 py-4 text-sm uppercase tracking-wide2 text-charcoal/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-8 py-5 text-center text-sm uppercase tracking-wide2 text-charcoal"
            >
              Book Appointment &rarr;
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
