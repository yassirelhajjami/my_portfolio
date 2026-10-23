"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Baby, Briefcase, ChevronDown, Clock, Cpu, LayoutGrid, type LucideIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { buttonVariants } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { csLessons, csLessonsHub, englishLessons, featuredLessons } from "@/lib/site"
import { Section, SectionHeading } from "@/components/site/section"
import { Reveal } from "@/components/site/reveal"
import { LessonCard } from "@/components/site/lesson-card"

type Tab = "kids" | "adults" | "cs"
type Lesson = { id: string; url: string; image: string; badge: string; title: string; topic: string; tabs: Tab[] }

const tabIcons: Record<Tab, LucideIcon> = { kids: Baby, adults: Briefcase, cs: Cpu }

// Lessons shown per tab before "View more" (one row on desktop).
const PREVIEW_COUNT = 3

// Recruiters see 4 featured lessons first; the full library sits behind tabs.
export function Lessons() {
  const { t } = useI18n()
  const l = t.lessons
  const [tab, setTab] = useState<Tab>("kids")
  const [expanded, setExpanded] = useState(false)

  const english = t.english.lessons.items
  const cs = t.teaching.lessons.items
  const all: Lesson[] = [
    {
      id: "diagnostic",
      url: englishLessons.diagnostic.url,
      image: englishLessons.diagnostic.image,
      badge: l.placement,
      title: l.diagnostic.title,
      topic: l.diagnostic.topic,
      tabs: [],
    },
    ...englishLessons.items.map((lesson) => ({
      id: lesson.id,
      url: lesson.url,
      image: lesson.image,
      badge: lesson.level,
      title: english[lesson.id].title,
      topic: english[lesson.id].topic,
      tabs: [...lesson.groups] as Tab[],
    })),
    ...csLessons.map((lesson) => ({
      id: lesson.id,
      url: lesson.url,
      image: lesson.image,
      badge: `${l.grade} ${lesson.grade} · ${lesson.course}`,
      title: cs[lesson.id].title,
      topic: cs[lesson.id].topic,
      tabs: ["cs"] as Tab[],
    })),
  ]
  const featured = featuredLessons.map((id) => all.find((lesson) => lesson.id === id)).filter((x) => x !== undefined)
  const inTab = all.filter((lesson) => lesson.tabs.includes(tab))
  const visible = expanded ? inTab : inTab.slice(0, PREVIEW_COUNT)
  const hidden = inTab.length - PREVIEW_COUNT
  const count = (key: Tab) => all.filter((lesson) => lesson.tabs.includes(key)).length

  return (
    <Section id="lessons">
      <SectionHeading
        index="03"
        eyebrow={l.eyebrow}
        title={
          <>
            {l.title[0]}
            <span className="text-gradient">{l.title[1]}</span>
          </>
        }
        description={l.description}
      />

      <Reveal className="mb-5 flex items-center gap-3">
        <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{l.featured}</h3>
        <span className="h-px flex-1 bg-line" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((lesson, i) => (
          <Reveal key={lesson.id} delay={i * 0.08}>
            <LessonCard {...lesson} openLabel={l.open} englishTitle />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 mb-5 flex items-center gap-3">
        <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{l.browse}</h3>
        <span className="h-px flex-1 bg-line" />
      </Reveal>
      <Tabs
        value={tab}
        onValueChange={(v) => {
          setTab(v as Tab)
          setExpanded(false)
        }}
      >
        <TabsList className="glass h-auto! w-full flex-wrap justify-start gap-1 rounded-2xl p-1.5 sm:w-fit">
          {(Object.keys(tabIcons) as Tab[]).map((key) => {
            const Icon = tabIcons[key]
            return (
              <TabsTrigger
                key={key}
                value={key}
                className="relative isolate h-10 flex-none rounded-xl px-4 text-muted-foreground data-active:border-transparent! data-active:bg-transparent! data-active:text-foreground"
              >
                {tab === key && (
                  <motion.span
                    layoutId="lessons-tab"
                    className="absolute inset-0 -z-10 rounded-xl border border-line bg-gradient-to-r from-indigo-500/25 to-cyan-400/15"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon />
                {l.tabs[key]}
                <span className="font-mono text-xs text-muted-foreground">{count(key)}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <div id="lesson-grid" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {visible.map((lesson, i) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: i >= PREVIEW_COUNT ? (i - PREVIEW_COUNT) * 0.05 : 0 }}
                >
                  <LessonCard {...lesson} openLabel={l.open} englishTitle />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {hidden > 0 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls="lesson-grid"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-subtle px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-line-hover hover:text-foreground"
              >
                {expanded ? l.showLess : l.showMore}
                {!expanded && (
                  <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-brand">+{hidden}</span>
                )}
                <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} />
              </button>
            </div>
          )}

          {tab === "cs" && <ViewAllCs label={l.viewAll} comingSoon={l.comingSoon} />}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

function ViewAllCs({ label, comingSoon }: { label: string; comingSoon: string }) {
  // Long label, so let it wrap on phones instead of widening the page.
  const shape = "h-auto min-h-12 max-w-full rounded-full px-6 py-3 text-center text-[15px] whitespace-normal"

  return (
    <div className="mt-10 flex justify-center">
      {csLessonsHub ? (
        <a
          href={csLessonsHub}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg" }), shape, "shadow-[0_0_40px_-10px] shadow-indigo-500/60")}
        >
          <LayoutGrid data-icon="inline-start" />
          {label}
          <ArrowUpRight data-icon="inline-end" className="rtl:-scale-x-100" />
        </a>
      ) : (
        <span
          aria-disabled
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            shape,
            "pointer-events-none flex-wrap justify-center border-dashed border-line-strong bg-subtle text-muted-foreground"
          )}
        >
          <LayoutGrid data-icon="inline-start" />
          {label}
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-brand">
            <Clock className="size-3" />
            {comingSoon}
          </span>
        </span>
      )}
    </div>
  )
}
