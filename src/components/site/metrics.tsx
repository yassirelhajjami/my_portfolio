"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView } from "framer-motion"
import { BookOpen, Globe2, GraduationCap, Languages } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

const icons = [GraduationCap, Languages, BookOpen, Globe2]

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return <span ref={ref}>{value}</span>
}

export function Metrics() {
  const { t } = useI18n()

  return (
    <section aria-label="Highlights" className="relative px-4 sm:px-6">
      <div className="glass mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line rounded-2xl sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {t.metrics.map((m, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 md:p-8"
            >
              <Icon className="mb-5 size-5 text-muted-foreground/80 transition-colors group-hover:text-brand-2" />
              <p className="text-gradient text-3xl font-semibold tracking-tight md:text-4xl">
                {m.count !== undefined ? (
                  <>
                    <CountUp to={m.count} />
                    {m.suffix}
                  </>
                ) : (
                  m.text
                )}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground/90">{m.label}</p>
              <p dir="auto" className="mt-1 font-mono text-[11px] text-muted-foreground/80">
                {m.detail}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
