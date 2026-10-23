"use client"

import Image from "next/image"
import { AppWindow, ArrowUpRight, Cloud, School, Server, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/components/i18n-provider"
import { media } from "@/lib/site"
import { Chip, Section, SectionHeading } from "@/components/site/section"
import { MediaPlaceholder } from "@/components/site/media-placeholder"
import { Reveal } from "@/components/site/reveal"
import { SpotlightCard } from "@/components/site/spotlight-card"

const toolIcons = [AppWindow, Cloud, Server]

export function ItWeb() {
  const { t } = useI18n()
  const it = t.it

  return (
    <Section id="it">
      <SectionHeading
        index="06"
        eyebrow={it.eyebrow}
        title={
          <>
            {it.title[0]}
            <span className="text-gradient">{it.title[1]}</span>
          </>
        }
        description={it.description}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <SpotlightCard className="flex h-full flex-col p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge className="border-indigo-400/20 bg-indigo-500/10 text-brand">{it.cist.badge}</Badge>
              <a
                href="https://cist.ma"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                cist.ma <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <School className="size-5 shrink-0 text-brand" />
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{it.cist.title}</h3>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">{it.cist.text}</p>
            <a
              href="https://cist.ma"
              target="_blank"
              rel="noreferrer"
              aria-label="cist.ma"
              className="group/shot relative mt-8 block aspect-[1877/887] overflow-hidden rounded-xl border border-line bg-muted"
            >
              <Image
                src={media.web.cistWebsite}
                alt={it.cist.screenshot}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02]"
              />
            </a>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="flex h-full flex-col p-6 md:p-8">
            <Badge className="w-fit border-cyan-400/20 bg-cyan-400/10 text-brand-2">{it.tools.badge}</Badge>
            <div className="mt-5 flex items-center gap-3">
              <Wrench className="size-5 shrink-0 text-brand-2" />
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{it.tools.title}</h3>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">{it.tools.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {it.tools.chips.map((c, i) => {
                const Icon = toolIcons[i]
                return (
                  <Chip key={c}>
                    <Icon className="size-3.5 text-brand" /> {c}
                  </Chip>
                )
              })}
            </div>
            <MediaPlaceholder
              className="mt-8"
              label={it.tools.placeholder}
              icon={AppWindow}
              aspect="video"
              tag={it.tools.tag}
            />
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  )
}
