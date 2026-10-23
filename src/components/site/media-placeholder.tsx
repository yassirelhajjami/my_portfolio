import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const aspects = {
  video: { className: "aspect-video", label: "16:9" },
  wide: { className: "aspect-[16/10]", label: "16:10" },
  square: { className: "aspect-square", label: "1:1" },
  portrait: { className: "aspect-[4/5]", label: "4:5" },
  story: { className: "aspect-[9/16]", label: "9:16" },
}

// Dark aspect-ratio box that stands in for real screenshots and artwork.
export function MediaPlaceholder({
  label,
  icon: Icon,
  aspect = "video",
  tag,
  className,
}: {
  label: string
  icon: LucideIcon
  aspect?: keyof typeof aspects
  tag?: string
  className?: string
}) {
  const ratio = aspects[aspect]

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-muted/70 bg-grid",
        ratio.className,
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.585_0.233_277.117/0.18),transparent_60%),radial-gradient(ellipse_at_bottom_right,oklch(0.789_0.154_211.53/0.12),transparent_55%)]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
        <div className="rounded-xl border border-line bg-foreground/5 p-3 shadow-lg shadow-indigo-500/10">
          <Icon className="size-6 text-brand" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-[11px] leading-snug text-muted-foreground sm:text-xs">
          [ Image: {label} ]
        </span>
      </div>
      {tag && (
        <span className="absolute top-3 start-3 rounded-md border border-line bg-background/60 px-2 py-0.5 font-mono text-[10px] tracking-wider text-foreground/80 uppercase backdrop-blur">
          {tag}
        </span>
      )}
      <span className="absolute end-3 bottom-3 font-mono text-[10px] text-muted-foreground/60">
        {ratio.label}
      </span>
    </div>
  )
}
