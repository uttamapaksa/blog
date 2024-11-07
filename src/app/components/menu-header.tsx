import type { ImageType } from "@/lib/constants/types";

export default function MenuHeader({ image }: { image: ImageType }) {
  return (
    <header className="h-48">
      <img src={image.imageSrc} alt={image.imageAlt} className="w-full h-full object-cover object-center" />
    </header>
  );
}
