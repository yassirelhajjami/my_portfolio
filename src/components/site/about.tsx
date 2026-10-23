"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { BookOpen, Code2, Download, GraduationCap, Languages } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { media, site } from "@/lib/site"
import { Section, SectionHeading } from "@/components/site/section"
import { Gallery } from "@/components/site/gallery"
import { Reveal } from "@/components/site/reveal"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const timelineIcons = [BookOpen, Code2, Languages, GraduationCap]

export function About() {
  const { t } = useI18n()
  const ab = t.about
  const listRef = useRef<HTMLOListElement>(null)

  // The accent line fills as the timeline scrolls through the viewport.
  useGSAP(
    () => {
      gsap.fromTo(
        "[data-timeline-progress]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: listRef.current, start: "top 70%", end: "bottom 60%", scrub: 0.6 },
        }
      )
    },
    { scope: listRef }
  )

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            className="mb-8 md:mb-8"
            index="08"
            eyebrow={ab.eyebrow}
            title={
              <>
                {ab.title[0]}
                <span className="text-gradient">{ab.title[1]}</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {ab.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a
              href={site.cvUrl}
              download={site.cvFileName}
              className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 rounded-full px-5")}
            >
              <Download data-icon="inline-start" />
              {t.contact.downloadCv}
            </a>
          </Reveal>
          <Gallery
            className="mt-8"
            items={[{ src: media.events.graduation, caption: ab.photo, aspect: "aspect-[3/2]" }]}
          />
        </div>

        <ol ref={listRef} className="relative space-y-6 ps-10 md:ps-12">
          <span aria-hidden className="absolute start-[15px] top-2 bottom-2 w-px bg-line md:start-[19px]" />
          <span
            aria-hidden
            data-timeline-progress
            className="absolute start-[15px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-indigo-400 via-cyan-300 to-indigo-500 md:start-[19px]"
          />
          {ab.timeline.map((item, i) => {
            const Icon = timelineIcons[i]
            return (
              <li key={item.role} className="relative">
                <div className="absolute -start-10 top-5 grid size-8 place-items-center rounded-full border border-line-strong bg-background md:-start-12 md:size-10">
                  <Icon className="size-4 text-brand" />
                </div>
                <Reveal delay={i * 0.05}>
                  <div className="glass rounded-2xl p-5 transition-colors hover:border-line-hover md:p-6">
                    <span className="font-mono text-[11px] tracking-wider text-brand-2 uppercase">{item.tag}</span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
