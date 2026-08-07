import { FadeIn } from "@/components/ui/fade-in";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <FadeIn className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && <p className={`eyebrow ${light ? "text-taupe" : ""}`}>{eyebrow}</p>}
      <h2
        className={`mt-4 font-sans text-4xl font-extralight leading-[1.1] tracking-tight sm:text-5xl ${
          light ? "text-warm-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base font-light leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-warm-white/60" : "text-charcoal/55"}`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
