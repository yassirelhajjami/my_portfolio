import { cn } from "@/lib/utils"
import { Reveal } from "@/components/site/reveal"

export function Section({
  id,
  className,
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("relative isolate scroll-mt-20 py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl md:mb-16", className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-brand uppercase">
        <span className="text-muted-foreground/80">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-indigo-400 to-cyan-400" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-3 py-1 text-xs text-foreground/80",
        className
      )}
    >
      {children}
    </span>
  )
}
