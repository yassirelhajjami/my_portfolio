"use client"

import { useState } from "react"
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { buttonVariants } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

export function ContactDialog({ trigger }: { trigger: React.ReactElement }) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard can be blocked; the mailto button still works.
    }
  }

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="glass border-line bg-background/90 p-6 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground">{t.dialog.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{t.dialog.text}</DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-3">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-subtle px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <Mail className="size-4 shrink-0 text-brand" />
              <span dir="ltr" className="truncate text-sm text-foreground/90">
                {site.email}
              </span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {copied ? <Check className="size-3.5 text-brand-2" /> : <Copy className="size-3.5" />}
              {copied ? t.dialog.copied : t.dialog.copy}
            </button>
          </div>
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
        </div>

        <a
          href={`mailto:${site.email}`}
          className={cn(buttonVariants({ size: "lg" }), "mt-2 h-11 w-full rounded-full")}
        >
          <Mail data-icon="inline-start" />
          {t.dialog.send}
        </a>
      </DialogContent>
    </Dialog>
  )
}
