"use client"

import { useI18n } from "@/components/i18n-provider"

// A plain link on purpose: /en and /ar share one root layout, so a client-side <Link>
// would re-render <html> in the browser, dropping the theme class and re-running the
// theme script. A full page load keeps the saved theme and switches lang/dir cleanly.
export function LanguageSwitch() {
  const { lang, t } = useI18n()
  const other = lang === "en" ? "ar" : "en"

  return (
    <a
      href={`/${other}`}
      hrefLang={other}
      lang={other}
      aria-label={t.nav.switchLangLabel}
      title={t.nav.switchLangLabel}
      className="grid h-9 min-w-9 place-items-center rounded-lg px-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
    >
      {t.nav.switchLang}
    </a>
  )
}
