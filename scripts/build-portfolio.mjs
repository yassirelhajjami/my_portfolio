// Builds public/Yassir_El_Hajjami_Full_Portfolio.pdf: a cover page plus one page per certificate.
// Certificates and English titles come straight from the site (src/lib/site.ts, src/lib/i18n/en.ts),
// so the PDF always matches the website. Usage: npm run portfolio
import { existsSync, writeFileSync, mkdtempSync, rmSync } from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import puppeteer from "puppeteer-core"
import { certificates, qualificationPortfolio, site } from "../src/lib/site.ts"
import { en } from "../src/lib/i18n/en.ts"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicDir = path.join(root, "public")
const output = path.join(publicDir, qualificationPortfolio.replace(/^\//, ""))

const browsers = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean)
const executablePath = browsers.find((p) => existsSync(p))
if (!executablePath) {
  console.error("No Chrome or Edge found. Set CHROME_PATH to your browser's executable.")
  process.exit(1)
}

const escape = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const fileUrl = (publicPath) => pathToFileURL(path.join(publicDir, publicPath)).href
const items = en.credentials.items

// One entry per document page, in the same order as the website.
const groups = [
  { label: "Core qualifications", list: certificates.primary },
  { label: "Additional certificates & extracurricular achievements", list: certificates.additional },
]
const pages = []
for (const group of groups) {
  for (const cert of group.list) {
    cert.pages.forEach((src, i) => pages.push({ group: group.label, cert, src, part: cert.pages.length > 1 ? i + 1 : 0 }))
  }
}

// Page 1 is the cover; certificate pages start at 2.
const contents = groups
  .map((group) => {
    const rows = group.list
      .map((cert) => {
        const first = pages.findIndex((p) => p.cert === cert) + 2
        const item = items[cert.id]
        return `<li><div><b>${escape(item.title)}</b><span>${escape(item.issuer)} · ${escape(cert.year)}</span></div><em>p. ${first}</em></li>`
      })
      .join("")
    return `<h3>${escape(group.label)}</h3><ul class="toc">${rows}</ul>`
  })
  .join("")

const practical = en.credentials.practical.points.map((p) => `<li>${escape(p)}</li>`).join("")

const certificatePages = pages
  .map((p, i) => {
    const item = items[p.cert.id]
    const part = p.part ? ` (${p.part}/${p.cert.pages.length})` : ""
    return `
    <section class="cert">
      <header>
        <span>${escape(p.group)}</span>
        <h2>${escape(item.title)}${part}</h2>
        <p>${escape(item.issuer)} · ${escape(p.cert.year)} — ${escape(item.note)}</p>
      </header>
      <div class="frame"><img src="${fileUrl(p.src)}" alt="" /></div>
      <footer>${escape(en.name)} — Full Qualification Portfolio <b>${i + 2}</b></footer>
    </section>`
  })
  .join("")

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
  @page { size: A4 portrait; margin: 0 }
  @page wide { size: A4 landscape; margin: 0 }
  * { box-sizing: border-box; margin: 0; padding: 0 }
  body { font-family: "Geist", "Segoe UI", sans-serif; color: #18181b; font-size: 10pt; -webkit-print-color-adjust: exact; print-color-adjust: exact }
  .cover { width: 210mm; height: 297mm; padding: 16mm 16mm 14mm; display: flex; flex-direction: column; break-after: page; position: relative; overflow: hidden }
  .cover::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 78mm; background: linear-gradient(120deg, #0f0f1a, #1e1b4b 60%, #164e63) }
  .top { position: relative; display: flex; gap: 8mm; align-items: center; color: #fff; height: 50mm }
  .top img { width: 38mm; height: 38mm; border-radius: 50%; object-fit: cover; object-position: 50% 28%; border: 1mm solid rgba(255,255,255,.15) }
  .top small { font-family: "Geist Mono", monospace; letter-spacing: .14em; text-transform: uppercase; color: #a5b4fc; font-size: 8pt }
  .top h1 { font-size: 24pt; letter-spacing: -.02em; margin-top: 1.5mm }
  .top p { color: #d4d4d8; margin-top: 1.5mm; font-size: 9.5pt }
  .contact { position: relative; margin-top: 12mm; display: flex; gap: 6mm; flex-wrap: wrap; font-size: 9pt; color: #3f3f46 }
  .contact b { color: #4f46e5; font-weight: 600 }
  h3 { font-family: "Geist Mono", monospace; font-size: 8pt; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: #4f46e5; margin: 7mm 0 2.5mm; display: flex; gap: 3mm; align-items: center }
  h3::after { content: ""; flex: 1; height: .25mm; background: #e4e4e7 }
  .toc { list-style: none }
  .toc li { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; padding: 1.8mm 0; border-bottom: .25mm solid #e4e4e7 }
  .toc b { display: block; font-weight: 600; font-size: 10pt }
  .toc span { display: block; font-size: 8.5pt; color: #0e7490 }
  .toc em { font-style: normal; font-family: "Geist Mono", monospace; font-size: 8.5pt; color: #71717a }
  .practical { list-style: none; columns: 2; column-gap: 8mm; font-size: 9pt; color: #3f3f46 }
  .practical li { break-inside: avoid; padding: 1.2mm 0 1.2mm 4mm; position: relative }
  .practical li::before { content: ""; position: absolute; left: 0; top: 2.9mm; width: 1.6mm; height: 1.6mm; border-radius: 50%; background: #6366f1 }
  .note { margin-top: auto; font-size: 8pt; color: #71717a; border-top: .25mm solid #e4e4e7; padding-top: 3mm }
  .cert { width: 210mm; height: 297mm; padding: 12mm 14mm 10mm; display: flex; flex-direction: column; break-after: page }
  .cert.wide { page: wide; width: 297mm; height: 210mm }
  .cert header span { font-family: "Geist Mono", monospace; font-size: 7.5pt; letter-spacing: .12em; text-transform: uppercase; color: #4f46e5 }
  .cert h2 { font-size: 14pt; margin-top: 1mm }
  .cert header p { font-size: 9pt; color: #52525b; margin-top: .8mm }
  .frame { flex: 1; min-height: 0; margin: 5mm 0 4mm; border: .3mm solid #d4d4d8; border-radius: 2mm; background: #f4f4f5; display: flex; align-items: center; justify-content: center; padding: 4mm }
  .frame img { max-width: 100%; max-height: 100%; object-fit: contain; box-shadow: 0 1mm 4mm rgba(0,0,0,.12) }
  .cert footer { display: flex; justify-content: space-between; font-size: 8pt; color: #71717a }
</style></head><body>
  <section class="cover">
    <div class="top">
      <img src="${pathToFileURL(path.join(root, "cv", "portrait.jpg")).href}" alt="" />
      <div>
        <small>Full Qualification Portfolio</small>
        <h1>${escape(en.nameWithTitle)}</h1>
        <p>${escape(en.hero.headline.map((w) => w.text).join(" "))}<br />${escape(en.hero.tagline)}</p>
      </div>
    </div>
    <div class="contact">
      <span><b>Email</b> ${escape(site.email)}</span>
      <span><b>Phone</b> ${escape(site.phone)}</span>
      <span><b>Location</b> ${escape(en.location)}</span>
      <span><b>Portfolio</b> ${escape(site.url.replace(/^https?:\/\//, ""))}</span>
    </div>
    ${contents}
    <h3>${escape(en.credentials.practical.title)}</h3>
    <ul class="practical">${practical}</ul>
    <p class="note">Copies of original documents. Personal ID numbers are covered for privacy; originals available on request.</p>
  </section>
  ${certificatePages}
</body></html>`

const tmp = mkdtempSync(path.join(os.tmpdir(), "portfolio-"))
const htmlPath = path.join(tmp, "portfolio.html")
writeFileSync(htmlPath, html)

const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--allow-file-access-from-files"] })
try {
  const page = await browser.newPage()
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" })
  await page.evaluateHandle("document.fonts.ready")
  // Landscape scans get a landscape page so they fill the sheet.
  const missing = await page.evaluate(() => {
    const broken = []
    document.querySelectorAll(".cert").forEach((section) => {
      const img = section.querySelector("img")
      if (!img.naturalWidth) broken.push(img.src)
      if (img.naturalWidth > img.naturalHeight) section.classList.add("wide")
    })
    return broken
  })
  if (missing.length) throw new Error(`Missing certificate images: ${missing.join(", ")}`)
  await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true })
  console.log(`Saved ${path.relative(root, output)} (${pages.length + 1} pages)`)
} finally {
  await browser.close()
  rmSync(tmp, { recursive: true, force: true })
}
