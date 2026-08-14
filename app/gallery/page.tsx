import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { PlaceholderTone } from "@/components/ui/image-placeholder";

export const metadata: Metadata = {
  title: "Gallery | Nail Xpress",
  description: "Photos from the studio and our nail work.",
};

const photos: { label: string; tone: PlaceholderTone; aspect: string }[] = [
  { label: "Nail Work Close-up", tone: "stone", aspect: "aspect-[3/4]" },
  { label: "Interior Salon Image", tone: "beige", aspect: "aspect-square" },
  { label: "Nail Work Close-up", tone: "taupe", aspect: "aspect-[4/5]" },
  { label: "Lifestyle Photography", tone: "stone", aspect: "aspect-square" },
  { label: "Nail Work Close-up", tone: "beige", aspect: "aspect-[3/4]" },
  { label: "Interior Salon Image", tone: "taupe", aspect: "aspect-[4/5]" },
  { label: "Nail Work Close-up", tone: "stone", aspect: "aspect-square" },
  { label: "Lifestyle Photography", tone: "beige", aspect: "aspect-[3/4]" },
  { label: "Nail Work Close-up", tone: "taupe", aspect: "aspect-square" },
];

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
          <Container>
            <FadeIn>
              <p className="eyebrow">Gallery</p>
              <h1 className="mt-4 max-w-2xl font-sans text-5xl font-extralight leading-[1.05] tracking-tight sm:text-6xl">
                A studio built to be photographed.
              </h1>
              <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-charcoal/55">
                Every frame below is a placeholder, ready to be swapped for real photography.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="columns-2 gap-4 sm:columns-3 sm:gap-6 [&>*]:mb-4 sm:[&>*]:mb-6">
              {photos.map((photo, i) => (
                <FadeIn key={i} delay={(i % 3) * 0.08}>
                  <ImagePlaceholder label={photo.label} tone={photo.tone} aspect={photo.aspect} rounded="rounded-xl" />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
