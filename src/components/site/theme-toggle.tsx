"use client"

import { Moon, Sun } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { getTheme, setTheme } from "@/lib/theme"

export function ThemeToggle() {
  const { t } = useI18n()

  // Both icons render and CSS picks one, so server and client markup always match.
  return (
    <button
      type="button"
      onClick={() => setTheme(getTheme() === "dark" ? "light" : "dark")}
      aria-label={t.nav.toggleTheme}
      title={t.nav.toggleTheme}
      className="grid size-9 place-items-center rounded-lg text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
    >
      <Sun className="hidden size-[18px] dark:block" />
      <Moon className="size-[18px] dark:hidden" />
    </button>
  )
}
