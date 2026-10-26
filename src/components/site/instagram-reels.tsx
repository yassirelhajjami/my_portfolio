"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { instagram } from "@/lib/site"
import { useNearViewport } from "@/hooks/use-near-viewport"

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function ReelEmbed({ id, fallback }: { id: string; fallback: string }) {
  const ref = useRef<HTMLDivElement>(null)

  // Instagram's script replaces the blockquote with an iframe, so React must not own that node.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const url = `https://www.instagram.com/reel/${id}/`
    el.innerHTML = `<blockquote class="instagram-media" data-instgrm-permalink="${url}?utm_source=ig_embed" data-instgrm-version="14" style="background:#fff;border:0;border-radius:12px;margin:0;min-width:300px;max-width:540px;width:100%;padding:0;"><a href="${url}" target="_blank" rel="noreferrer" style="display:block;padding:16px;font:14px sans-serif;color:#3897f0;text-align:center;">${fallback}</a></blockquote>`
    window.instgrm?.Embeds.process()
    return () => {
      el.innerHTML = ""
    }
  }, [id, fallback])

  return <div ref={ref} dir="ltr" className="min-h-[520px] overflow-hidden rounded-xl bg-muted/70" />
}

export function InstagramReels() {
  const { t } = useI18n()
  const r = t.creative.reels
  // Instagram's script and iframes are heavy, so load them only when the reels are near the screen.
  const [ref, near] = useNearViewport<HTMLDivElement>("600px")

  return (
    <div ref={ref}>
      {near && (
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
          onLoad={() => window.instgrm?.Embeds.process()}
        />
      )}
      <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6">
        {instagram.reels.map((id) => (
          <div key={id} className="w-[min(328px,calc(100vw-2rem))] shrink-0 snap-start">
            {near ? (
              <ReelEmbed id={id} fallback={r.fallback} />
            ) : (
              <div className="min-h-[520px] rounded-xl bg-muted/70" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {r.madeFor}{" "}
          <span dir="ltr" className="font-medium text-foreground/90">
            @{instagram.handle}
          </span>{" "}
          — {r.swipe}
        </p>
        <a
          href={instagram.url}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-amber-500 px-5 text-white hover:opacity-90"
          )}
        >
          <InstagramIcon className="size-4" />
          {r.seeMore}
          <ArrowUpRight data-icon="inline-end" className="rtl:-scale-x-100" />
        </a>
      </div>
    </div>
  )
}
