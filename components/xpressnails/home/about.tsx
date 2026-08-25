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
            alt="Nail technician caring for a client's hands at Nail Xpress"
            aspect="aspect-[4/5]"
            tone="stone"
          />
        </FadeIn>

        <div>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Care, considered down to the last detail."
            description="At Nail Xpress, we believe your visit should be more than just an appointment. It's a chance to slow down, relax, and leave feeling refreshed. From the moment you walk in to the finishing touch, we're here to make every visit comfortable, welcoming, and beautifully done."
          />
          <FadeIn delay={0.15} className="mt-8 grid grid-cols-3 gap-8 border-t border-charcoal/10 pt-8">
            <div>
              <p className="font-sans text-3xl font-extralight">8+</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-charcoal/45">Years of experience</p>
            </div>
            <div>
              <p className="font-sans text-3xl font-extralight">100+</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-charcoal/45">Satisfied customers</p>
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
