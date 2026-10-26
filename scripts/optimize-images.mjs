// Converts every JPG/PNG/JFIF in public/ to WebP (auto-rotated, longest side ≤ 1600px)
// and moves the original into media-originals/public/ (kept locally, not committed).
// Usage: npm run images   — then update any paths in src/lib/site.ts to the .webp files.
import { copyFileSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync, unlinkSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

// Read from memory and disable sharp's cache so Windows never keeps a source file locked.
sharp.cache(false)

function move(from, to) {
  try {
    renameSync(from, to)
  } catch {
    copyFileSync(from, to)
    unlinkSync(from)
  }
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicDir = path.join(root, "public")
const backupDir = path.join(root, "media-originals", "public")
const MAX_SIDE = 1600
const QUALITY = 80

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name)
    if (statSync(full).isDirectory()) yield* walk(full)
    else yield full
  }
}

let before = 0
let after = 0
for (const file of walk(publicDir)) {
  if (!/\.(jpe?g|png|jfif)$/i.test(file)) continue
  const rel = path.relative(publicDir, file)
  const out = file.replace(/\.(jpe?g|png|jfif)$/i, ".webp")
  const info = await sharp(readFileSync(file))
    .rotate() // apply the photo's EXIF orientation
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(out)
  const size = statSync(file).size
  before += size
  after += info.size
  const backup = path.join(backupDir, rel)
  mkdirSync(path.dirname(backup), { recursive: true })
  move(file, backup)
  console.log(`${rel.padEnd(58)} ${(size / 1024).toFixed(0).padStart(6)} KB -> ${(info.size / 1024).toFixed(0).padStart(5)} KB  ${info.width}x${info.height}`)
}
console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`)
