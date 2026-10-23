// Prints cv/resume.html to public/cv.pdf with a locally installed Chrome or Edge.
// Usage: npm run cv   (set CHROME_PATH to use a different browser)
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import puppeteer from "puppeteer-core"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const source = path.join(root, "cv", "resume.html")
const output = path.join(root, "public", "cv.pdf")

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

const browser = await puppeteer.launch({ executablePath, headless: true })
try {
  const page = await browser.newPage()
  await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle0" })
  await page.evaluateHandle("document.fonts.ready")

  // Each .page is a fixed A4 sheet with overflow hidden (page 1 English, page 2 Arabic), so check
  // nothing gets cut off. Grid columns stretch with their content, so compare each column's last
  // child to the page bottom.
  const overflow = await page.evaluate(() =>
    [...document.querySelectorAll(".page")].flatMap((sheet, i) => {
      const pageBottom = sheet.getBoundingClientRect().bottom
      return ["aside", "main"]
        .filter((sel) => sheet.querySelector(sel).lastElementChild.getBoundingClientRect().bottom > pageBottom - 8)
        .map((sel) => `page ${i + 1} ${sel}`)
    })
  )
  if (overflow.length) {
    throw new Error(`CV text does not fit its A4 page (overflowing: ${overflow.join(", ")}). Shorten the text.`)
  }

  await page.pdf({ path: output, format: "A4", printBackground: true, preferCSSPageSize: true })
  console.log(`Saved ${path.relative(root, output)}`)
} finally {
  await browser.close()
}
