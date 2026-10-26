"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/components/i18n-provider"
import { ContactDialog } from "@/components/site/contact-dialog"
import { LanguageSwitch } from "@/components/site/language-switch"
import { Logo } from "@/components/site/logo"
import { ThemeToggle } from "@/components/site/theme-toggle"

export function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 transition-all duration-300 sm:px-4",
          scrolled || open ? "glass bg-background/85" : "border border-transparent"
        )}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label={t.nav.backToTop}>
          <Logo preload />
          <span className="hidden truncate text-sm font-medium text-foreground/90 sm:inline">{t.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1">
          <LanguageSwitch />
          <ThemeToggle />
          <ContactDialog
            trigger={
              <button
                type="button"
                className="ms-1 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                {t.nav.contact}
              </button>
            }
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-lg text-foreground/80 hover:bg-foreground/5 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 grid max-w-6xl gap-1 rounded-2xl bg-background/80 p-2 lg:hidden"
          >
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
