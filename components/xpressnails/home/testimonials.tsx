import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

const quotes = [
  { quote: "The most relaxing hour of my week, every week. It never feels rushed.", name: "M. Alvarez" },
  { quote: "Finally a nail studio that feels like a spa instead of an assembly line.", name: "J. Kim" },
  { quote: "Immaculate attention to detail — my gel manicure lasted three full weeks.", name: "R. Thompson" },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="In Their Words" title="Guests on the experience." align="center" />

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {quotes.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1} className="border-t border-charcoal/15 pt-8 text-center sm:text-left">
              <p className="font-serif text-xl italic leading-relaxed text-charcoal/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 text-xs uppercase tracking-wide2 text-charcoal/40">{t.name}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
