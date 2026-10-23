"use client"

import Image from "next/image"
import { AppWindow, ArrowRight, ArrowUpRight, Cloud, School, Server, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { media } from "@/lib/site"
import { Chip, Section, SectionHeading } from "@/components/site/section"
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
          <WebsiteCard
            url="https://cist.ma"
            domain="cist.ma"
            image={media.web.cistWebsite}
            aspect="aspect-[1877/887]"
            badge={it.cist.badge}
            badgeClass="border-indigo-400/20 bg-indigo-500/10 text-brand"
            title={it.cist.title}
            text={it.cist.text}
            alt={it.cist.screenshot}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <WebsiteCard
            url="https://bist.ma"
            domain="bist.ma"
            image={media.web.bistWebsite}
            aspect="aspect-[1877/887]"
            badge={it.bist.badge}
            badgeClass="border-rose-400/25 bg-rose-500/10 text-rose-600 dark:text-rose-300"
            title={it.bist.title}
            text={it.bist.text}
            alt={it.bist.screenshot}
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <SpotlightCard className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-2xl">
              <Badge className="w-fit border-cyan-400/20 bg-cyan-400/10 text-brand-2">{it.tools.badge}</Badge>
              <div className="mt-4 flex items-center gap-3">
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
            </div>
            <a
              href="#lessons"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line-strong bg-subtle px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-line-hover hover:text-foreground md:self-center"
            >
              {it.tools.link}
              <ArrowRight className="size-4 rtl:-scale-x-100" />
            </a>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  )
}

function WebsiteCard({
  url,
  domain,
  image,
  aspect,
  badge,
  badgeClass,
  title,
  text,
  alt,
}: {
  url: string
  domain: string
  image: string
  aspect: string
  badge: string
  badgeClass: string
  title: string
  text: string
  alt: string
}) {
  return (
    <SpotlightCard className="flex h-full flex-col p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge className={badgeClass}>{badge}</Badge>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {domain} <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
        </a>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <School className="size-5 shrink-0 text-brand" />
        <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{title}</h3>
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
      <div className="mt-auto pt-8">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={domain}
          className={cn("group/shot relative block overflow-hidden rounded-xl border border-line bg-muted", aspect)}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02]"
          />
        </a>
      </div>
    </SpotlightCard>
  )
}
