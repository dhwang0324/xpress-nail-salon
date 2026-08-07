import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-sans text-sm font-medium uppercase tracking-wide3">
            Xpress <span className="font-serif italic normal-case tracking-normal">Spa &amp; Nails</span>
          </p>
          <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-charcoal/55">
            A quiet, considered space for hands and feet — nail care treated as ritual, not routine.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/65">
            <li><Link href="/menu" className="hover:text-charcoal">Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-charcoal">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-charcoal">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Hours</p>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/65">
            <li>Mon &ndash; Fri, 10am &ndash; 7pm</li>
            <li>Saturday, 10am &ndash; 6pm</li>
            <li>Sunday, 11am &ndash; 5pm</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Connect</p>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal/65">
            <li><a href="tel:+10000000000" className="hover:text-charcoal">(000) 000-0000</a></li>
            <li><a href="mailto:hello@xpressspanails.com" className="hover:text-charcoal">hello@xpressspanails.com</a></li>
            <li><a href="#" className="hover:text-charcoal">Instagram</a></li>
            <li><a href="#" className="hover:text-charcoal">Facebook</a></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal/10 py-6 text-center text-xs text-charcoal/40">
        &copy; {new Date().getFullYear()} Xpress Spa &amp; Nails. All rights reserved.
      </div>
    </footer>
  );
}
