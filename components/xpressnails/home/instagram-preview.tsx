import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { FadeIn } from "@/components/ui/fade-in";

const posts = [
  "/media/insta-1.jpg",
  "/media/insta-2.jpg",
  "/media/insta-3.jpg",
  "/media/insta-4.jpg",
  "/media/insta-5.jpg",
];

export function InstagramPreview() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <p className="eyebrow">Follow Along</p>
          <h2 className="mt-4 font-sans text-4xl font-extralight leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
            <a
              href="https://www.instagram.com/nailxpressmarietta/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-taupe-dark"
            >
              @nailxpressmarietta
            </a>
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {posts.map((src, i) => (
            <FadeIn key={src} delay={i * 0.05} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
              <ImagePlaceholder
                label="Instagram"
                src={src}
                alt="Nail Xpress Instagram post"
                aspect="aspect-square"
                rounded="rounded-xl"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
