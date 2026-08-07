import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { FadeIn } from "@/components/ui/fade-in";

export function BeforeAfter({ title }: { title: string }) {
  return (
    <FadeIn className="grid grid-cols-2 gap-3 sm:gap-4">
      <div>
        <ImagePlaceholder label="Before" sublabel={title} tone="stone" aspect="aspect-square" rounded="rounded-2xl" />
      </div>
      <div>
        <ImagePlaceholder label="After" sublabel={title} tone="beige" aspect="aspect-square" rounded="rounded-2xl" />
      </div>
    </FadeIn>
  );
}
