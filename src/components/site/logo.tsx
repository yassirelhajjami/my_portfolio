import Image from "next/image"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

// The logo is white on black; inverting it in light mode gives a black mark on white.
export function Logo({ className, preload }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src={site.logo}
      alt=""
      width={40}
      height={40}
      preload={preload}
      className={cn("size-9 shrink-0 rounded-lg invert dark:invert-0", className)}
    />
  )
}
