"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Box, CircuitBoard, Cog, Gamepad2, GraduationCap, Radar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/components/i18n-provider"
import { media } from "@/lib/site"
import { Chip, Section, SectionHeading } from "@/components/site/section"
import { Gallery } from "@/components/site/gallery"
import { Reveal } from "@/components/site/reveal"
import { SpotlightCard } from "@/components/site/spotlight-card"
import { LazyVideo } from "@/components/site/lazy-video"

const courses = ["ICS4U", "ICS3U", "ICD2O", "TAS1O"]
const highlightIcons = [CircuitBoard, Radar, Cog, Box, Gamepad2]

export function Teaching() {
  const { t } = useI18n()
  const tt = t.teaching

  return (
    <Section id="teaching">
      <SectionHeading
        index="05"
        eyebrow={tt.eyebrow}
        title={
          <>
            {tt.title[0]}
            <span className="text-gradient">{tt.title[1]}</span>
          </>
        }
        description={tt.description}
      />

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Reveal>
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-brand" />
                <p className="text-sm font-medium text-foreground">{tt.coursesTitle}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 font-mono text-sm text-brand"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{tt.coursesNote}</p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="glass divide-y divide-line rounded-2xl">
              {tt.highlights.map((h, i) => {
                const Icon = highlightIcons[i]
                return (
                  <li key={h.title} className="flex gap-4 p-5">
                    <div className="h-fit rounded-lg border border-line bg-subtle p-2">
                      <Icon className="size-4 text-brand-2" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{h.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{h.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-3">
          <SpotlightCard className="flex h-full flex-col p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge className="border-cyan-400/20 bg-cyan-400/10 text-brand-2">{tt.codequest.badge}</Badge>
              <a
                href="https://cistcodequest.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                cistcodequest.org <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
              </a>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">CIST CodeQuest</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{tt.codequest.text}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tt.codequest.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
            <a
              href="https://cistcodequest.org"
              target="_blank"
              rel="noreferrer"
              aria-label={`${tt.codequest.visit}: cistcodequest.org`}
              className="group/shot relative mt-8 block aspect-[1897/907] overflow-hidden rounded-xl border border-line bg-muted"
            >
              <Image
                src={media.teaching.codequestScreenshot}
                alt={tt.codequest.screenshot}
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02]"
              />
              <span className="absolute end-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs text-white opacity-0 backdrop-blur transition-opacity group-hover/shot:opacity-100">
                {tt.codequest.visit} <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
              </span>
            </a>
          </SpotlightCard>
        </Reveal>
      </div>

      <Reveal className="mt-20 mb-8">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{tt.inside.title}</h3>
        <p className="mt-2 text-muted-foreground">{tt.inside.text}</p>
      </Reveal>
      <Gallery
        className="grid gap-4 md:grid-cols-3"
        items={[
          { src: media.teaching.codequestArcade, caption: tt.inside.arcade, aspect: "aspect-[1917/905]" },
          { src: media.teaching.codequestGarage, caption: tt.inside.garage, aspect: "aspect-[1887/896]" },
          { src: media.teaching.codequestSimulator, caption: tt.inside.simulator, aspect: "aspect-[1912/912]" },
        ]}
      />

      <Reveal className="mt-20 mb-8">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{tt.classroomTitle}</h3>
        <p className="mt-2 text-muted-foreground">{tt.classroomText}</p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Gallery
          className="contents"
          items={[
            { src: media.teaching.fullClass, caption: tt.gallery.fullClass, aspect: "aspect-[3/4]" },
            { src: media.teaching.codequestClassroom, caption: tt.gallery.codequestClassroom, aspect: "aspect-[3/4]" },
            { src: media.teaching.smartboard, caption: tt.gallery.smartboard, aspect: "aspect-[3/4]" },
            { src: media.teaching.workshop, caption: tt.gallery.workshop, aspect: "aspect-[3/4]" },
          ]}
        />
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <LazyVideo
            src={media.teaching.handVideo}
            poster={media.teaching.handPoster}
            className="aspect-[3/4] w-full rounded-xl border border-line object-cover"
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-foreground/80">{tt.video}</figcaption>
        </motion.figure>
      </div>
    </Section>
  )
}
