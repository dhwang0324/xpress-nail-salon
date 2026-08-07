import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function FinalCta() {
  return (
    <section className="bg-black-soft py-28 text-warm-white sm:py-36">
      <Container className="text-center">
        <FadeIn>
          <p className="eyebrow text-taupe">Reserve Your Moment</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-sans text-4xl font-extralight leading-tight tracking-tight sm:text-5xl">
            A little stillness is only an appointment away.
          </h2>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-warm-white px-9 py-4 text-xs uppercase tracking-wide2 text-charcoal transition-colors hover:bg-cream"
          >
            <span>Book Appointment</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
