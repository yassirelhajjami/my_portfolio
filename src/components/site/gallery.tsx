"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Maximize2 } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"

export type GalleryItem = {
  src: string
  caption: string
  // Tailwind aspect class for the thumbnail, e.g. "aspect-[3/4]".
  aspect?: string
}

// Photo grid; each photo opens full size in a dialog.
// `masonry` keeps every photo's own shape instead of cropping to a shared ratio.
// `className` replaces the default layout, e.g. "contents" to join a parent grid.
export function Gallery({
  items,
  className,
  masonry = false,
}: {
  items: GalleryItem[]
  className?: string
  masonry?: boolean
}) {
  const { t } = useI18n()
  const [active, setActive] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className={className ?? (masonry ? "columns-1 gap-4 sm:columns-2 lg:columns-3" : "grid gap-4")}>
        {items.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={cn("group", masonry && "mb-4 break-inside-avoid")}
          >
            <button
              type="button"
              onClick={() => setActive(item)}
              aria-label={`${t.common.enlarge}: ${item.caption}`}
              className={cn(
                "relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-muted",
                item.aspect ?? "aspect-[4/5]"
              )}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute end-3 top-3 grid size-8 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </span>
            </button>
            <figcaption className="mt-3 text-sm leading-relaxed text-foreground/80">{item.caption}</figcaption>
          </motion.figure>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="border-line bg-background p-2 sm:max-w-5xl">
          {active && (
            <figure>
              <div className="relative h-[75vh] w-full">
                <Image src={active.src} alt={active.caption} fill sizes="95vw" className="object-contain" />
              </div>
              <DialogTitle className="px-2 pt-3 pb-1 text-sm font-normal text-foreground/80">
                {active.caption}
              </DialogTitle>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
