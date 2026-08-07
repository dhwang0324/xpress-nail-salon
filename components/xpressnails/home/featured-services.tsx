import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import type { PlaceholderTone } from "@/components/ui/image-placeholder";

const featured: { name: string; price: string; tone: PlaceholderTone; href: string }[] = [
  { name: "Signature Manicure", price: "$38", tone: "stone", href: "/menu#manicure" },
  { name: "Deluxe Spa Pedicure", price: "$75", tone: "beige", href: "/menu#pedicure" },
  { name: "Hand-Painted Nail Art", price: "$8/nail", tone: "taupe", href: "/menu#nail-art" },
];

export function FeaturedServices() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Featured Services" title="A few favorites to begin with." />
          <Link href="/menu" className="text-xs uppercase tracking-wide2 text-charcoal/50 hover:text-charcoal">
            View Full Menu &rarr;
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {featured.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <Link href={s.href} className="group block">
                <ImagePlaceholder
                  label="Nail Work Close-up"
                  sublabel={s.name}
                  tone={s.tone}
                  aspect="aspect-[3/4]"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-sans text-base font-light">{s.name}</p>
                  <p className="text-sm text-charcoal/50">{s.price}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
