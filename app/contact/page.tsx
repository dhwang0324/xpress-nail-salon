import type { Metadata } from "next";
import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { ContactForm } from "@/components/xpressnails/contact/contact-form";
import { MapPlaceholder } from "@/components/xpressnails/contact/map-placeholder";

export const metadata: Metadata = {
  title: "Contact | Xpress Spa & Nails",
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
                Send a note below or call the studio directly — we typically reply within a
                business day.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-20 sm:pb-28">
          <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Hours</p>
                <ul className="mt-3 space-y-1.5 text-sm font-light text-charcoal/70">
                  <li>Monday &ndash; Friday, 10am &ndash; 7pm</li>
                  <li>Saturday, 10am &ndash; 6pm</li>
                  <li>Sunday, 11am &ndash; 5pm</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Phone</p>
                  <a href="tel:+10000000000" className="mt-3 block text-sm font-light text-charcoal/70 hover:text-charcoal">
                    (000) 000-0000
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Email</p>
                  <a href="mailto:hello@xpressspanails.com" className="mt-3 block text-sm font-light text-charcoal/70 hover:text-charcoal">
                    hello@xpressspanails.com
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Address</p>
                <p className="mt-3 text-sm font-light text-charcoal/70">
                  100 Main Street, Suite 2<br />
                  Woodstock, GA 30188
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide2 text-charcoal/40">Social</p>
                <div className="mt-3 flex gap-6 text-sm font-light text-charcoal/70">
                  <a href="#" className="hover:text-charcoal">Instagram</a>
                  <a href="#" className="hover:text-charcoal">Facebook</a>
                </div>
              </div>

              <MapPlaceholder />
            </FadeIn>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <FadeIn>
              <ImagePlaceholder
                label="Lifestyle Photography"
                sublabel="Studio entrance or reception, wide format"
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
