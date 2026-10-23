"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Clapperboard, Megaphone, PaintRoller, type LucideIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useI18n } from "@/components/i18n-provider"
import { media } from "@/lib/site"
import { Section, SectionHeading } from "@/components/site/section"
import { Gallery, type GalleryItem } from "@/components/site/gallery"
import { InstagramReels } from "@/components/site/instagram-reels"

type TabKey = "video" | "print" | "walls"

const tabIcons: Record<TabKey, LucideIcon> = {
  video: Clapperboard,
  print: Megaphone,
  walls: PaintRoller,
}

export function Creative() {
  const { t } = useI18n()
  const cr = t.creative
  const [active, setActive] = useState<TabKey>("video")

  const galleries: Record<Exclude<TabKey, "video">, GalleryItem[]> = {
    print: [
      { src: media.print.poster, caption: cr.print.poster, aspect: "aspect-[941/1672]" },
      { src: media.print.invitation, caption: cr.print.invitation, aspect: "aspect-[1131/1600]" },
      { src: media.print.rollup, caption: cr.print.rollup, aspect: "aspect-[3/4]" },
    ],
    walls: [
      { src: media.walls.welcomeSign, caption: cr.walls.welcomeSign, aspect: "aspect-[4/3]" },
      { src: media.walls.valuesWall, caption: cr.walls.valuesWall, aspect: "aspect-[3/4]" },
      { src: media.walls.logoWall, caption: cr.walls.logoWall, aspect: "aspect-[4/3]" },
      { src: media.walls.welcomeWall, caption: cr.walls.welcomeWall, aspect: "aspect-[3/4]" },
      { src: media.walls.studentReception, caption: cr.walls.studentReception, aspect: "aspect-[4/3]" },
      { src: media.walls.levelSigns, caption: cr.walls.levelSigns, aspect: "aspect-[3/4]" },
      { src: media.walls.visionDoor, caption: cr.walls.visionDoor, aspect: "aspect-[3/4]" },
    ],
  }

  return (
    <Section id="creative">
      <SectionHeading
        index="07"
        eyebrow={cr.eyebrow}
        title={
          <>
            {cr.title[0]}
            <span className="text-gradient">{cr.title[1]}</span>
          </>
        }
        description={cr.description}
      />

      <Tabs value={active} onValueChange={(v) => setActive(v as TabKey)}>
        <TabsList className="glass h-auto! w-full flex-wrap justify-start gap-1 rounded-2xl p-1.5 sm:w-fit">
          {(Object.keys(tabIcons) as TabKey[]).map((key) => {
            const Icon = tabIcons[key]
            return (
              <TabsTrigger
                key={key}
                value={key}
                className="relative isolate h-10 flex-none rounded-xl px-4 text-muted-foreground data-active:border-transparent! data-active:bg-transparent! data-active:text-foreground"
              >
                {active === key && (
                  <motion.span
                    layoutId="creative-tab"
                    className="absolute inset-0 -z-10 rounded-xl border border-line bg-gradient-to-r from-indigo-500/25 to-cyan-400/15"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon />
                {cr.tabs[key].label}
              </TabsTrigger>
            )
          })}
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <p className="mb-6 max-w-2xl text-muted-foreground">{cr.tabs[active].description}</p>
          {active === "video" ? <InstagramReels /> : <Gallery items={galleries[active]} masonry />}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
