import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

const featured = [
  { name: "Gel Manicure", price: "$40", src: "/media/gallery-nail-3.jpg", href: "/services#manicures" },
  { name: "Royal Pedicure", price: "$55", src: "/media/gallery-nail-5.jpg", href: "/services#pedicures" },
  { name: "Ombre Full Set", price: "$75", src: "/media/gallery-nail-9.jpg", href: "/services#acrylic" },
];

export function FeaturedServices() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Featured Services" title="A few favorites to begin with." />
          <Link href="/services" className="text-xs uppercase tracking-wide2 text-charcoal/50 hover:text-charcoal">
            View All Services &rarr;
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {featured.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <Link href={s.href} className="group block">
                <ImagePlaceholder
                  label="Nail Work Close-up"
                  sublabel={s.name}
                  src={s.src}
                  alt={s.name}
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
