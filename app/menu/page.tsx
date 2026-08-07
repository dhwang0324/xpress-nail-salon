import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Menu | Xpress Spa & Nails",
  description: "Manicure, pedicure, gel, dip powder, nail art, and spa treatments.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
          <Container>
            <FadeIn>
              <p className="eyebrow">The Menu</p>
              <h1 className="mt-4 max-w-2xl font-sans text-5xl font-extralight leading-[1.05] tracking-tight sm:text-6xl">
                Every service, priced plainly.
              </h1>
              <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-charcoal/55">
                Pricing may vary slightly by technician and nail length. Ask your artist about
                add-ons at the start of your visit.
              </p>
            </FadeIn>
          </Container>
        </section>

        {serviceCategories.map((category, i) => (
          <section
            key={category.slug}
            id={category.slug}
            className={`py-16 sm:py-20 ${i % 2 === 1 ? "bg-cream" : ""}`}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
                <FadeIn>
                  <p className="text-xs uppercase tracking-wide2 text-charcoal/40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-sans text-3xl font-extralight tracking-tight">
                    {category.name}
                  </h2>
                  <p className="mt-3 font-serif italic text-charcoal/50">{category.intro}</p>
                </FadeIn>

                <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
                  {category.services.map((service, j) => (
                    <FadeIn
                      key={service.name}
                      delay={j * 0.05}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6"
                    >
                      <div>
                        <p className="text-base font-light">
                          {service.name}
                          {service.duration && (
                            <span className="ml-3 text-xs uppercase tracking-wide2 text-charcoal/35">
                              {service.duration}
                            </span>
                          )}
                        </p>
                        {service.description && (
                          <p className="mt-1 max-w-md text-sm font-light text-charcoal/50">
                            {service.description}
                          </p>
                        )}
                      </div>
                      <p className="whitespace-nowrap font-serif text-lg italic text-taupe-dark">
                        {service.price}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
