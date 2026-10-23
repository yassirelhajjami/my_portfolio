"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Eye,
  Files,
  Plus,
  Wrench,
} from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { buttonVariants } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { certificates, qualificationPortfolio, type CertificateId } from "@/lib/site"
import { Section, SectionHeading } from "@/components/site/section"
import { Reveal } from "@/components/site/reveal"
import { SpotlightCard } from "@/components/site/spotlight-card"

type Certificate = { id: CertificateId; pages: readonly string[]; year: string }

// Degree and TEFL are wider on large screens; the next three share a row and the
// practical card gets a full-width row of its own.
const primarySpans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "sm:col-span-2 lg:col-span-2"]

export function Credentials() {
  const { t } = useI18n()
  const cr = t.credentials
  const [active, setActive] = useState<Certificate | null>(null)
  const [page, setPage] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function open(cert: Certificate) {
    setActive(cert)
    setPage(0)
  }

  return (
    <Section id="credentials">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          className="mb-0 md:mb-0"
          index="02"
          eyebrow={cr.eyebrow}
          title={
            <>
              {cr.title[0]}
              <span className="text-gradient">{cr.title[1]}</span>
            </>
          }
          description={cr.description}
        />
        <Reveal delay={0.1} className="shrink-0">
          <a
            href={qualificationPortfolio}
            download
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full px-6 text-[15px] shadow-[0_0_40px_-10px] shadow-indigo-500/60"
            )}
          >
            <Download data-icon="inline-start" />
            {cr.downloadPortfolio}
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-6">
        {certificates.primary.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 0.08} className={primarySpans[i]}>
            <CertificateCard cert={cert} onOpen={open} />
          </Reveal>
        ))}
        <Reveal delay={0.16} className="sm:col-span-2 lg:col-span-6">
          <PracticalCard />
        </Reveal>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          aria-expanded={showMore}
          aria-controls="more-certificates"
          className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-subtle px-5 py-2.5 text-start text-sm font-medium text-foreground/90 transition-colors hover:border-line-hover hover:text-foreground"
        >
          <motion.span animate={{ rotate: showMore ? 45 : 0 }} transition={{ duration: 0.25 }} className="grid">
            <Plus className="size-4 text-brand" />
          </motion.span>
          {showMore ? cr.showLess : cr.showMore}
          <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-brand">
            {certificates.additional.length}
          </span>
        </button>
        {!showMore && <p className="text-center text-xs text-muted-foreground">{cr.moreText}</p>}
      </div>

      <AnimatePresence initial={false}>
        {showMore && (
          <motion.div
            id="more-certificates"
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-8 mb-5 text-sm text-muted-foreground">{cr.moreText}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.additional.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                >
                  <CertificateCard cert={cert} onOpen={open} compact />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={active !== null} onOpenChange={(isOpen) => !isOpen && setActive(null)}>
        <DialogContent className="border-line bg-background p-2 sm:max-w-5xl">
          {active && (
            <figure>
              <div className="relative h-[72vh] w-full bg-subtle">
                <Image
                  key={active.pages[page]}
                  src={active.pages[page]}
                  alt={cr.items[active.id].title}
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
                {active.pages.length > 1 && (
                  <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPage((p) => (p - 1 + active.pages.length) % active.pages.length)}
                      aria-label={cr.prev}
                      className="grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/75"
                    >
                      <ChevronLeft className="size-5 rtl:-scale-x-100" />
                    </button>
                    <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                      {page + 1} / {active.pages.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPage((p) => (p + 1) % active.pages.length)}
                      aria-label={cr.next}
                      className="grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/75"
                    >
                      <ChevronRight className="size-5 rtl:-scale-x-100" />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-3 pb-1">
                <DialogTitle className="text-sm font-medium text-foreground">
                  {cr.items[active.id].title}
                  <span className="ms-2 font-normal text-muted-foreground">
                    {cr.items[active.id].issuer} · {active.year}
                  </span>
                </DialogTitle>
                <a
                  href={active.pages[page]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  {cr.openFull} <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
                </a>
              </div>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  )
}

function CertificateCard({
  cert,
  onOpen,
  compact = false,
}: {
  cert: Certificate
  onOpen: (cert: Certificate) => void
  compact?: boolean
}) {
  const { t } = useI18n()
  const item = t.credentials.items[cert.id]

  return (
    <SpotlightCard className="flex h-full flex-col">
      <button
        type="button"
        onClick={() => onOpen(cert)}
        aria-label={`${t.credentials.view}: ${item.title}`}
        className={cn(
          "group/thumb relative block w-full cursor-zoom-in overflow-hidden border-b border-line bg-subtle",
          compact ? "aspect-[16/10]" : "aspect-[16/9]"
        )}
      >
        <Image
          src={cert.pages[0]}
          alt=""
          fill
          sizes={
            compact
              ? "(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
              : "(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          }
          className="object-contain p-3 transition-transform duration-500 group-hover/thumb:scale-[1.03]"
        />
        {cert.pages.length > 1 && (
          <span className="absolute end-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white backdrop-blur">
            <Files className="size-3" /> {t.credentials.pagesBadge}
          </span>
        )}
      </button>

      <div className={cn("flex flex-1 flex-col", compact ? "p-4" : "p-5 md:p-6")}>
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-2.5 py-0.5 text-[11px] text-foreground/80">
            <Award className="size-3 text-brand" />
            {item.tag}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-semibold text-foreground",
            compact ? "text-sm leading-snug" : "text-lg leading-snug"
          )}
        >
          {item.title}
        </h3>
        <p className={cn("mt-1 text-brand-2", compact ? "text-xs" : "text-sm")}>{item.issuer}</p>
        <p className={cn("leading-relaxed text-muted-foreground", compact ? "mt-1.5 text-xs" : "mt-2 text-sm")}>
          {item.note}
        </p>

        <div className={cn("mt-auto", compact ? "pt-4" : "pt-5")}>
          <button
            type="button"
            onClick={() => onOpen(cert)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle font-medium text-foreground/90 transition-colors hover:border-line-hover hover:text-foreground",
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
            )}
          >
            <Eye className={compact ? "size-3.5" : "size-4"} />
            {t.credentials.view}
          </button>
        </div>
      </div>
    </SpotlightCard>
  )
}

// Shows practical tech work instead of a formal CS certificate.
function PracticalCard() {
  const { t } = useI18n()
  const p = t.credentials.practical

  return (
    <SpotlightCard className="relative flex h-full flex-col overflow-hidden p-5 md:p-6">
      <div
        aria-hidden
        className="absolute -top-16 -end-16 size-48 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/20"
      />
      <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] text-brand-2">
        <Wrench className="size-3" />
        {p.tag}
      </span>
      <h3 className="relative mt-3 text-lg leading-snug font-semibold text-foreground">{p.title}</h3>
      <p className="relative mt-2 text-sm text-muted-foreground">{p.text}</p>
      <ul className="relative mt-4 grid gap-2.5 md:grid-cols-2 md:gap-x-8">
        {p.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm leading-snug text-foreground/85">
            <Code2 className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
        <a
          href="https://cistcodequest.org"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-line-hover hover:text-foreground"
        >
          {p.codequest} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
        </a>
        <a
          href="#lessons"
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-brand transition-colors hover:text-foreground"
        >
          {p.teaching}
        </a>
      </div>
    </SpotlightCard>
  )
}
