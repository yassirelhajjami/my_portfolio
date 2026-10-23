"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

// Glass card with a soft glow that follows the pointer.
export function SpotlightCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group/spot glass relative overflow-hidden rounded-2xl transition-[translate,border-color] duration-300 hover:-translate-y-1 hover:border-line-hover",
        className
      )}
      {...props}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), oklch(0.585 0.233 277.117 / 0.14), transparent 60%)",
        }}
      />
    </div>
  )
}
