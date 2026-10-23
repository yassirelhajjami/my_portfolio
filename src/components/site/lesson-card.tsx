"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SpotlightCard } from "@/components/site/spotlight-card"

// Card for a live lesson: screenshot, level badge, title, topic and an "open" link.
export function LessonCard({
  url,
  image,
  badge,
  title,
  topic,
  openLabel,
  englishTitle = false,
}: {
  url: string
  image: string
  badge: string
  title: string
  topic: string
  openLabel: string
  // Lesson names stay in English on the Arabic page, so keep them left-to-right.
  englishTitle?: boolean
}) {
  return (
    <SpotlightCard className="flex h-full flex-col">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden
        className="group/shot relative block aspect-[16/10] overflow-hidden border-b border-line bg-subtle"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.04]"
        />
        <span className="absolute start-3 top-3 rounded-md bg-black/60 px-2 py-0.5 font-mono text-[11px] text-white backdrop-blur">
          {badge}
        </span>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <h4
          dir={englishTitle ? "ltr" : undefined}
          className="text-start font-semibold text-foreground rtl:text-end"
        >
          {title}
        </h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{topic}</p>
        <div className="mt-auto pt-4">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-line-hover hover:text-foreground"
          >
            {openLabel}
            <ArrowUpRight className="size-4 rtl:-scale-x-100" />
          </a>
        </div>
      </div>
    </SpotlightCard>
  )
}
