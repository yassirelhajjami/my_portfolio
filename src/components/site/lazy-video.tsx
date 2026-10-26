"use client"

import { cn } from "@/lib/utils"
import { useNearViewport } from "@/hooks/use-near-viewport"

// A <video> that downloads nothing (not even its poster) until it is near the screen.
export function LazyVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const [ref, near] = useNearViewport<HTMLVideoElement>()

  return (
    <video
      ref={ref}
      src={near ? src : undefined}
      poster={near ? poster : undefined}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      className={cn("bg-black", className)}
    />
  )
}
