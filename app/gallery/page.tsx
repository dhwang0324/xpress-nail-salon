import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const metadata: Metadata = {
  title: "Gallery | Nail Xpress",
  description: "Photos from the studio and our nail work.",
};

const photos = [
  { label: "Nail Work Close-up", src: "/media/gallery-nail-1.jpg", aspect: "aspect-[3/4]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-2.jpg", aspect: "aspect-[3/4]" },
  { label: "Interior Salon Image", src: "/media/store-interior-1.jpg", aspect: "aspect-[3/2]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-3.jpg", aspect: "aspect-[3/4]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-4.jpg", aspect: "aspect-[4/5]" },
  { label: "Interior Salon Image", src: "/media/store-interior-2.jpg", aspect: "aspect-[3/2]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-5.jpg", aspect: "aspect-[2/3]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-6.jpg", aspect: "aspect-[4/5]" },
  { label: "Interior Salon Image", src: "/media/store-interior-3.jpg", aspect: "aspect-[3/2]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-7.jpg", aspect: "aspect-[4/5]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-8.jpg", aspect: "aspect-[4/5]" },
  { label: "Interior Salon Image", src: "/media/store-interior-4.jpg", aspect: "aspect-[3/2]" },
  { label: "Nail Work Close-up", src: "/media/gallery-nail-9.jpg", aspect: "aspect-[3/5]" },
  { label: "Interior Salon Image", src: "/media/store-reception.jpg", aspect: "aspect-[3/2]" },
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
                A closer look at our nail work and the studio itself.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="columns-2 gap-4 sm:columns-3 sm:gap-6 [&>*]:mb-4 sm:[&>*]:mb-6">
              {photos.map((photo, i) => (
                <FadeIn key={photo.src} delay={(i % 3) * 0.08}>
                  <ImagePlaceholder
                    label={photo.label}
                    src={photo.src}
                    alt={photo.label}
                    aspect={photo.aspect}
                    rounded="rounded-xl"
                  />
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
