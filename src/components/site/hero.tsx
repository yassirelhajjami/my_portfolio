"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Download, Languages } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"
import { useI18n } from "@/components/i18n-provider"

gsap.registerPlugin(useGSAP)

export function Hero() {
  const { t } = useI18n()
  const root = useRef<HTMLElement>(null)

  // The text and portrait animate with CSS (.hero-in, .hero-photo) so they show without
  // waiting for JavaScript. GSAP pops in the floating chips, which start `invisible`.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-hero='chip']",
          { autoAlpha: 0, scale: 0.8, y: 12 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)", delay: 0.6 }
        )
      })

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero]", { autoAlpha: 1 })
      })
    },
    { scope: root }
  )

  return (
    <section ref={root} id="top" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Gradient mesh + grid backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="animate-float absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-600/25" />
        <div
          className="animate-float absolute top-40 -right-32 h-[380px] w-[480px] rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/15"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
          <div
            className="glow-border hero-in inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-xs text-foreground/80 sm:text-sm"
          >
            <span className="text-brand-2">✦</span>
            <span className="text-balance">{t.hero.badge}</span>
          </div>

          <h1 className="mt-8 text-[2.1rem] leading-[1.1] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem] rtl:leading-[1.35]">
            {t.hero.headline.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
                <span
                  className={cn("hero-in hero-word inline-block", word.accent && "text-gradient")}
                  style={{ "--d": `${0.15 + i * 0.05}s` } as React.CSSProperties}
                >
                  {word.text}
                </span>
                {i < t.hero.headline.length - 1 && " "}
              </span>
            ))}
          </h1>

          <p
            className="hero-in mt-5 max-w-2xl text-lg font-medium text-pretty text-foreground/85 md:text-xl"
            style={{ "--d": "0.45s" } as React.CSSProperties}
          >
            {t.hero.tagline}
          </p>
          <p
            style={{ "--d": "0.55s" } as React.CSSProperties}
            className="hero-in mt-4 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
          >
            {t.hero.sub}
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
            <a
              href="#lessons"
              style={{ "--d": "0.65s" } as React.CSSProperties}
              className={cn(
                buttonVariants({ size: "lg" }),
                "hero-in h-12 w-full rounded-full px-6 text-[15px] shadow-[0_0_40px_-8px] shadow-indigo-500/60 sm:w-auto"
              )}
            >
              {t.hero.ctaPrimary}
              <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
            </a>
            <a
              href={site.cvUrl}
              download={site.cvFileName}
              style={{ "--d": "0.73s" } as React.CSSProperties}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "hero-in h-12 w-full rounded-full border-line-strong bg-subtle px-6 text-[15px] backdrop-blur sm:w-auto"
              )}
            >
              <Download data-icon="inline-start" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <HeroPortrait />
      </div>
    </section>
  )
}

function HeroPortrait() {
  const { t } = useI18n()

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-sm lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-indigo-500/30 via-transparent to-cyan-400/25 blur-3xl"
      />
      <div
        className="hero-photo rounded-[2rem] bg-gradient-to-br from-indigo-400/70 via-foreground/10 to-cyan-400/70 p-px shadow-2xl shadow-indigo-500/20"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1px)] bg-muted">
          <Image
            src={site.portrait}
            alt={t.nameWithTitle}
            fill
            preload
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <div>
              <p className="font-semibold text-white">{t.nameWithTitle}</p>
              <p className="text-xs text-white/70">{t.hero.portraitRole}</p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-white backdrop-blur">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              {t.hero.city}
            </span>
          </div>
        </div>
      </div>

      <FloatingChip className="top-8 start-3 sm:-start-8" delay={0}>
        <Languages className="size-3.5 text-brand-2" /> {t.hero.chipTefl}
      </FloatingChip>
      <FloatingChip className="top-[42%] end-3 sm:-end-8" delay={1.5}>
        <Cpu className="size-3.5 text-brand" /> {t.hero.chipRobotics}
      </FloatingChip>
    </div>
  )
}

// GSAP reveals the outer element; Framer Motion bobs the inner one, so their transforms never collide.
function FloatingChip({
  className,
  delay,
  children,
}: {
  className: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <div data-hero="chip" className={cn("invisible absolute", className)}>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className="glass flex items-center gap-2 rounded-full bg-background/70 px-3.5 py-2 text-xs font-medium whitespace-nowrap text-foreground/90"
      >
        {children}
      </motion.div>
    </div>
  )
}
