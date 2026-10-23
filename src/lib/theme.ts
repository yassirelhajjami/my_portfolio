// Light/dark theme without a provider: the `dark` class on <html> drives all styles.
export type Theme = "light" | "dark"

const STORAGE_KEY = "theme"
const DEFAULT_THEME: Theme = "dark"

// Runs in <head> before the page paints, so the saved theme shows with no flash.
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem("${STORAGE_KEY}")}catch(e){}if(t!=="light"&&t!=="dark")t="${DEFAULT_THEME}";var d=document.documentElement;d.classList.toggle("dark",t==="dark");d.style.colorScheme=t})()`

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function setTheme(theme: Theme) {
  const root = document.documentElement
  // Pause CSS transitions so every element switches colors at once.
  const pause = document.createElement("style")
  pause.textContent = "*,*::before,*::after{transition:none!important}"
  document.head.appendChild(pause)

  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }

  // Wait two frames so the new colors paint before transitions come back.
  requestAnimationFrame(() => requestAnimationFrame(() => pause.remove()))
}
