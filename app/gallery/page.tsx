import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { BeforeAfter } from "@/components/xpressnails/gallery/before-after";
import type { PlaceholderTone } from "@/components/ui/image-placeholder";

export const metadata: Metadata = {
  title: "Gallery | Nail Xpress",
  description: "Interior, nail work, and lifestyle photography from the studio.",
};

const tones: PlaceholderTone[] = ["stone", "beige", "taupe", "stone", "beige", "taupe", "stone", "beige"];

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
                Every frame below is a placeholder, structured for the photography we&rsquo;ll shoot
                in-studio — swap each one in without touching the layout.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* Large Editorial */}
        <section className="pb-20 sm:pb-28">
          <Container className="space-y-6 sm:space-y-8">
            <FadeIn>
              <ImagePlaceholder label="Editorial Image" sublabel="Interior — wide, natural light" aspect="aspect-[16/9]" tone="stone" rounded="rounded-[2rem]" />
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <FadeIn delay={0.1}>
                <ImagePlaceholder label="Editorial Image" sublabel="Nail work close-up" aspect="aspect-[4/5]" tone="beige" />
              </FadeIn>
              <FadeIn delay={0.18} className="sm:mt-12">
                <ImagePlaceholder label="Editorial Image" sublabel="Lifestyle, in-chair" aspect="aspect-[4/5]" tone="taupe" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Grid Layout */}
        <section className="bg-cream py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Grid" title="Close-up nail photography" />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {tones.map((tone, i) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <ImagePlaceholder label="Nail Work Close-up" tone={tone} aspect="aspect-square" rounded="rounded-xl" />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Masonry Layout */}
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Masonry" title="Around the studio" />
            <div className="mt-12 columns-2 gap-4 sm:columns-3 sm:gap-6 [&>*]:mb-4 sm:[&>*]:mb-6">
              <FadeIn><ImagePlaceholder label="Interior Salon Image" tone="stone" aspect="aspect-[3/4]" /></FadeIn>
              <FadeIn delay={0.06}><ImagePlaceholder label="Product Display" tone="beige" aspect="aspect-square" /></FadeIn>
              <FadeIn delay={0.12}><ImagePlaceholder label="Lifestyle Photography" tone="taupe" aspect="aspect-[3/5]" /></FadeIn>
              <FadeIn delay={0.18}><ImagePlaceholder label="Nail Work Close-up" tone="stone" aspect="aspect-[4/3]" /></FadeIn>
              <FadeIn delay={0.24}><ImagePlaceholder label="Staff Portrait" tone="beige" aspect="aspect-[3/4]" /></FadeIn>
              <FadeIn delay={0.3}><ImagePlaceholder label="Interior Salon Image" tone="taupe" aspect="aspect-square" /></FadeIn>
            </div>
          </Container>
        </section>

        {/* Before & After */}
        <section className="bg-charcoal py-20 text-warm-white sm:py-28">
          <Container>
            <SectionHeading eyebrow="Before & After" title="The transformation" light />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <BeforeAfter title="Gel manicure" />
              <BeforeAfter title="Dip powder set" />
            </div>
          </Container>
        </section>

        {/* Interior */}
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Interior" title="The space" />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <FadeIn className="sm:col-span-2"><ImagePlaceholder label="Interior Salon Image" sublabel="Reception / lounge" tone="stone" aspect="aspect-[16/10]" /></FadeIn>
              <FadeIn delay={0.1}><ImagePlaceholder label="Interior Salon Image" sublabel="Manicure station" tone="beige" aspect="aspect-[16/10]" /></FadeIn>
            </div>
          </Container>
        </section>

        {/* Lifestyle */}
        <section className="bg-cream py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Lifestyle" title="The everyday ritual" />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <FadeIn><ImagePlaceholder label="Lifestyle Photography" tone="taupe" aspect="aspect-[3/4]" /></FadeIn>
              <FadeIn delay={0.08}><ImagePlaceholder label="Lifestyle Photography" tone="stone" aspect="aspect-[3/4]" /></FadeIn>
              <FadeIn delay={0.16}><ImagePlaceholder label="Lifestyle Photography" tone="beige" aspect="aspect-[3/4]" /></FadeIn>
            </div>
          </Container>
        </section>

        {/* Staff */}
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Staff" title="The hands behind the work" />
            <div className="mt-12 grid gap-8 sm:grid-cols-4">
              {["Lead Nail Artist", "Senior Technician", "Spa Specialist", "Studio Manager"].map((role, i) => (
                <FadeIn key={role} delay={i * 0.08}>
                  <ImagePlaceholder label="Staff Portrait" sublabel={role} tone={i % 2 === 0 ? "stone" : "beige"} aspect="aspect-[3/4]" />
                  <p className="mt-3 text-sm font-light text-charcoal/60">{role}</p>
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
