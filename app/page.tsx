import { Nav } from "@/components/xpressnails/nav";
import { Footer } from "@/components/xpressnails/footer";
import { Hero } from "@/components/xpressnails/home/hero";
import { About } from "@/components/xpressnails/home/about";
import { WhyChooseUs } from "@/components/xpressnails/home/why-choose-us";
import { FeaturedServices } from "@/components/xpressnails/home/featured-services";
import { GalleryPreview } from "@/components/xpressnails/home/gallery-preview";
import { Testimonials } from "@/components/xpressnails/home/testimonials";
import { InstagramPreview } from "@/components/xpressnails/home/instagram-preview";
import { FinalCta } from "@/components/xpressnails/home/final-cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseUs />
        <FeaturedServices />
        <GalleryPreview />
        <Testimonials />
        <InstagramPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
