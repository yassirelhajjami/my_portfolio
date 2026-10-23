"use client"

import { Briefcase, CheckCircle2, Globe2, Quote, Users } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { youtubeLessons } from "@/lib/site"
import { Section, SectionHeading } from "@/components/site/section"
import { Reveal } from "@/components/site/reveal"
import { SpotlightCard } from "@/components/site/spotlight-card"
import { YoutubeLesson } from "@/components/site/youtube-lesson"

const roleIcons = [Users, Briefcase]

export function English() {
  const { t } = useI18n()
  const en = t.english

  return (
    <Section id="english">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            className="mb-10 md:mb-10"
            index="04"
            eyebrow={en.eyebrow}
            title={
              <>
                {en.title[0]}
                <span className="text-gradient">{en.title[1]}</span>
              </>
            }
            description={en.description}
          />
          <ul className="space-y-4">
            {en.points.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <li className="flex gap-3 text-foreground/80">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-2" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          {en.roles.map((r, i) => {
            const Icon = roleIcons[i]
            return (
              <Reveal key={r.title} delay={0.1 + i * 0.1}>
                <SpotlightCard className="p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-line bg-indigo-500/10 p-2">
                      <Icon className="size-4 text-brand" />
                    </div>
                    <h3 className="font-semibold text-foreground">{r.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                    {r.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] text-muted-foreground/80">
                        #{tag.replace(/\s+/g, "_")}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            )
          })}

          <Reveal delay={0.3}>
            <div className="glass relative rounded-2xl p-6 md:p-7">
              <Quote className="absolute end-5 top-5 size-8 text-foreground/5" />
              <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                <Globe2 className="size-3.5" /> TEFL · Linguistics
              </div>
              <p className="mt-3 text-lg leading-snug text-foreground/90">&ldquo;{en.quote}&rdquo;</p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20 mb-8">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{en.videosTitle}</h3>
        <p className="mt-2 text-muted-foreground">{en.videosText}</p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {youtubeLessons.map((id, i) => (
          <Reveal key={id} delay={i * 0.1}>
            <YoutubeLesson id={id} title={en.videoTitles[i]} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
