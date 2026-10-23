// Cached so prerendering with Cache Components stays deterministic.
export async function CopyrightYear() {
  "use cache"
  return new Date().getFullYear()
}
