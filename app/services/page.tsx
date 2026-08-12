import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CategoryTabs } from "@/components/xpressnails/services/category-tabs";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Xpress Spa & Nails",
  description: "Manicures, pedicures, acrylic, kids' services, polish changes, and waxing.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
          <Container>
            <FadeIn>
              <p className="eyebrow">Services</p>
              <h1 className="mt-4 max-w-2xl font-sans text-5xl font-extralight leading-[1.05] tracking-tight sm:text-6xl">
                Services &amp; Pricing
              </h1>
              <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-charcoal/55">
                Pricing may vary slightly by technician and nail length. Ask your artist about
                add-ons at the start of your visit.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <FadeIn>
              <CategoryTabs categories={serviceCategories} />
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
