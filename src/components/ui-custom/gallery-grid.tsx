"use client";

import Image from "next/image";
import { Expand } from "lucide-react";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Reveal } from "@/components/ui-custom/reveal";
import type { GalleryImage } from "@/content/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {images.map((img, i) => (
        <Reveal
          key={img.src}
          delay={(i % 8) * 0.04}
          y={16}
          className={cn(
            img.span === "both" && "col-span-2 row-span-2",
            img.span === "col" && "row-span-2"
          )}
        >
          <Dialog>
            <DialogTrigger
              className="group relative block h-full w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <div className={cn("relative w-full", img.span ? "aspect-square h-full" : "aspect-square")}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity group-hover:bg-ink/30 group-hover:opacity-100">
                  <Expand className="size-6 text-cream" strokeWidth={1.5} />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none sm:max-w-3xl">
              <DialogTitle className="sr-only">{img.alt}</DialogTitle>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
            </DialogContent>
          </Dialog>
        </Reveal>
      ))}
    </div>
  );
}
