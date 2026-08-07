import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { FadeIn } from "@/components/ui/fade-in";
import type { PlaceholderTone } from "@/components/ui/image-placeholder";

const tones: PlaceholderTone[] = ["stone", "beige", "taupe", "stone", "beige", "taupe"];

export function InstagramPreview() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Follow Along" title="@xpressspaandnails" align="center" />

        <div className="mt-14 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {tones.map((tone, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <ImagePlaceholder label="Instagram" tone={tone} aspect="aspect-square" rounded="rounded-xl" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
