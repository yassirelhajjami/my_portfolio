# Yassir El Hajjami — Teaching Portfolio

Portfolio site of **Mr. Yassir El Hajjami**, English Language Educator & EdTech Specialist.
Teaching English, Computer Science and Digital Media with AI integration.

**Live site:** [yassirelhajjami.vercel.app](https://yassirelhajjami.vercel.app) · available in English and Arabic

## What's on the site

- **Certificates:** B.A. in English Studies (Linguistics), 120-hour TESOL/TEFL, Ontario teaching PD, and more. Each one opens the original scan.
- **Interactive lessons:** an English placement test plus live lessons for kids, adults and business English, and Computer Science lessons for Grades 9–12.
- **EdTech & STEM:** CIST CodeQuest, a gamified coding and Arduino platform I built for Grades 1–8.
- **Design work:** school videos and reels, print design, and campus wall and sign designs.
- **Downloads:** a two-page CV (English + Arabic) and a full qualification portfolio PDF.

## Built with

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · GSAP

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editing content

| What | Where |
| --- | --- |
| Text (English / Arabic) | `src/lib/i18n/en.ts`, `src/lib/i18n/ar.ts` |
| Contact details, lessons, certificates, media | `src/lib/site.ts` |
| CV | `cv/resume.html`, then `npm run cv` to rebuild `public/cv.pdf` |
| Qualification portfolio PDF | `npm run portfolio` (built from the certificates in `src/lib/site.ts`) |

Both PDF scripts use your installed Chrome or Edge. Set `CHROME_PATH` if it isn't found.

## Privacy

Certificate copies have personal ID numbers covered, and student names are blurred in screenshots.
Original files are kept locally in `media-originals/`, which is not part of this repository.
