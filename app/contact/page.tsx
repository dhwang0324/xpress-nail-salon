import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { StoreMap } from "@/components/xpressnails/contact/store-map";

const ADDRESS = "3605 Sandy Plains Rd, Marietta, GA 30066";

export const metadata: Metadata = {
  title: "Contact | Nail Xpress",
  description: "Book an appointment, get directions, or reach the studio directly.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
          <Container>
            <FadeIn>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-4 max-w-2xl font-sans text-5xl font-extralight leading-[1.05] tracking-tight sm:text-6xl">
                Let&rsquo;s find you a time.
              </h1>
              <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-charcoal/55">
                Call or stop by — we&rsquo;d love to help you find your next appointment.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-20 sm:pb-28">
          <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Hours</p>
                <ul className="mt-3 space-y-1.5 text-sm font-light text-charcoal/70">
                  <li>Monday &ndash; Saturday, 10am &ndash; 7pm</li>
                  <li>Sunday, 12pm &ndash; 6pm</li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Phone</p>
                <a href="tel:+17705780078" className="mt-3 block text-sm font-light text-charcoal/70 hover:text-charcoal">
                  (770) 578-0078
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Address</p>
                <p className="mt-3 text-sm font-light text-charcoal/70">
                  {ADDRESS}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Social</p>
                <div className="mt-3 flex gap-6 text-sm font-light text-charcoal/70">
                  <a href="https://www.instagram.com/nailxpressmarietta/" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Instagram</a>
                  <a href="https://www.facebook.com/NailXpressMarietta" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Facebook</a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <StoreMap address={ADDRESS} />
            </FadeIn>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <FadeIn>
              <ImagePlaceholder
                label="Lifestyle Photography"
                sublabel="Studio entrance or reception, wide format"
                src="/media/contact-storefront.jpg"
                alt="Nail Xpress storefront"
                aspect="aspect-[21/9]"
                tone="beige"
                rounded="rounded-[2rem]"
              />
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
