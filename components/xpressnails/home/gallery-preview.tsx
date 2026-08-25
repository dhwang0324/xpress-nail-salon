import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

const items = [
  { label: "Interior Salon Image", src: "/media/store-interior-1.jpg", span: "sm:row-span-2" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-4.jpg" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-6.jpg" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-8.jpg" },
];

export function GalleryPreview() {
  return (
    <section className="bg-charcoal py-24 text-warm-white sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="A Look Inside" title="The studio, in a few frames." light />
          <Link href="/gallery" className="text-xs uppercase tracking-wide2 text-warm-white/50 hover:text-warm-white">
            Full Gallery &rarr;
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:grid-rows-2">
          {items.map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.08} className={item.span}>
              <ImagePlaceholder
                label={item.label}
                src={item.src}
                alt={item.label}
                aspect={item.span ? "aspect-[3/5] sm:h-full" : "aspect-[4/3]"}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
