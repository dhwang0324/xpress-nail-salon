import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/media/logo.png" alt="Nail Xpress" width={239} height={100} className="h-11 w-auto" />
          <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-charcoal/55">
            A quiet, considered space for hands and feet — nail care treated as ritual, not routine.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/65">
            <li><Link href="/services" className="hover:text-charcoal">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-charcoal">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-charcoal">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Hours</p>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/65">
            <li>Mon &ndash; Sat, 10am &ndash; 7pm</li>
            <li>Sunday, 12pm &ndash; 6pm</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Connect</p>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/65">
            <li><a href="tel:+17705780078" className="hover:text-charcoal">(770) 578-0078</a></li>
            <li><a href="https://www.instagram.com/nailxpressmarietta/" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Instagram</a></li>
            <li><a href="https://www.facebook.com/NailXpressMarietta" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Facebook</a></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal/10 py-6 text-center text-xs text-charcoal/40">
        &copy; {new Date().getFullYear()} Nail Xpress. All rights reserved.
      </div>
    </footer>
  );
}
