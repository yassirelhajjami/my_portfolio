"use client"

import { ArrowUp, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"
import { Section } from "@/components/site/section"
import { Reveal } from "@/components/site/reveal"
import { Logo } from "@/components/site/logo"

export function Contact() {
  const { t } = useI18n()
  const c = t.contact

  return (
    <Section id="contact" className="pb-16 md:pb-20">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div
            aria-hidden
            className="absolute -top-32 -right-24 size-96 rounded-full bg-indigo-400/20 blur-[100px] dark:bg-indigo-600/25"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-20 size-80 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/15"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs tracking-widest text-brand uppercase">09 — {c.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
                {c.title[0]}
                <span className="text-gradient">{c.title[1]}</span>
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">{c.text}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email}`}
                  className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6 text-[15px]")}
                >
                  <Mail data-icon="inline-start" />
                  {t.dialog.send}
                </a>
                <a
                  href={site.cvUrl}
                  download={site.cvFileName}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-line-strong bg-subtle px-6 text-[15px]"
                  )}
                >
                  <Download data-icon="inline-start" />
                  {c.downloadCv}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 rounded-xl border border-line bg-subtle px-4 py-3 text-sm text-foreground/80 transition-colors hover:border-line-hover hover:text-foreground"
              >
                <Phone className="size-4 text-brand" />
                <span dir="ltr">{site.phone}</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-line bg-subtle px-4 py-3 text-sm text-foreground/80">
                <MapPin className="size-4 text-brand-2" />
                {t.location}
              </div>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-line bg-subtle px-4 py-3 text-sm text-foreground/80 transition-colors hover:border-line-hover hover:text-foreground"
                >
                  {s.label}
                  <ArrowUpRight className="size-4 text-muted-foreground/80 transition-transform group-hover:-translate-y-0.5 group-hover:text-foreground/90 rtl:-scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

// `year` is rendered on the server (see copyright-year.tsx) and passed in.
export function Footer({ year }: { year: React.ReactNode }) {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground/80 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Logo className="size-7 rounded-md" />
          <p>
            © {year} {t.name} · {t.location}
          </p>
        </div>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground/90">
          {t.nav.backToTop} <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  )
}
