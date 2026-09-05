import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

const quotes = [
  {
    quote:
      "I have never been here and so glad I stopped in! I had my nails done by Kelly and she did an amazing job! Her attention to detail is amazing! Can't recommend her enough.",
    name: "Shelley Longwell",
    rating: 5,
  },
  {
    quote:
      "New owner, newly renovated beautiful interior. I had the pedicure and manicure done today and they did not disappoint. Their prices are reasonable, they're not pushy but suggestive to what would work for you. I recommend Donna and her colleague (forgot name) both very professionals, They don't rush, they took their time to do my nails and made sure I was satisfied with their work.",
    name: "Juveria K.",
    rating: 5,
  },
  {
    quote:
      "This salon is a hidden gem. Great location, clean, bright, recently renovated and expanded with beautiful, upscale interior and luxurious chairs. Huge selection of colors and services. Relaxing experience. They taken “getting your nails done” to a new level.",
    name: "Nell Roney",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1 sm:justify-start" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-taupe-dark">
          <path d="M12 2.5l2.9 6.3 6.9.7-5.1 4.7 1.5 6.8L12 17.8l-6.2 3.2 1.5-6.8-5.1-4.7 6.9-.7L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="In Their Words" title="Guests on the experience." align="center" />

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {quotes.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1} className="border-t border-charcoal/15 pt-8 text-center sm:text-left">
              <Stars count={t.rating} />
              <p className="mt-4 font-serif text-xl italic leading-relaxed text-charcoal/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 text-xs uppercase tracking-wide2 text-charcoal/40">{t.name}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
