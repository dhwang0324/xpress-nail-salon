import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <ImagePlaceholder
            label="Interior Salon Image"
            sublabel="Wide shot of the studio, natural light preferred"
            src="/media/home-about-interior.jpg"
            alt="Nail technician caring for a client's hands at Xpress Spa & Nails"
            aspect="aspect-[4/5]"
            tone="stone"
          />
        </FadeIn>

        <div>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Care, considered down to the last detail."
            description="Xpress Spa &amp; Nails was built on a simple idea: that a manicure appointment can be a moment of genuine calm, not just a transaction. Every surface, tool, and gesture in our studio is chosen with the same restraint and warmth you'd expect from a boutique hotel."
          />
          <FadeIn delay={0.15} className="mt-8 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-8">
            <div>
              <p className="font-sans text-3xl font-extralight">12+</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-charcoal/45">Years of craft</p>
            </div>
            <div>
              <p className="font-sans text-3xl font-extralight">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-charcoal/45">Non-toxic products</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
