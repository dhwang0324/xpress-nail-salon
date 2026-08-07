import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    n: "01",
    title: "Meticulous Hygiene",
    body: "Hospital-grade sterilization and single-use tools for every guest, every visit.",
  },
  {
    n: "02",
    title: "Considered Products",
    body: "Non-toxic, low-odor formulas sourced for skin health, not just shine.",
  },
  {
    n: "03",
    title: "Unhurried Appointments",
    body: "Longer time slots so no service ever feels rushed through.",
  },
  {
    n: "04",
    title: "A Calmer Space",
    body: "Warm materials, soft light, and quiet — designed to slow you down.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-stone py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="Small details, held to a high standard." align="center" />

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <FadeIn key={r.n} delay={i * 0.08}>
              <p className="font-serif text-3xl italic text-taupe-dark">{r.n}</p>
              <h3 className="mt-4 font-sans text-lg font-light tracking-tight">{r.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">{r.body}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
