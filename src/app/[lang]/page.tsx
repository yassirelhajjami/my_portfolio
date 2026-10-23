import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Metrics } from "@/components/site/metrics"
import { Credentials } from "@/components/site/credentials"
import { Lessons } from "@/components/site/lessons"
import { Teaching } from "@/components/site/teaching"
import { ItWeb } from "@/components/site/it-web"
import { English } from "@/components/site/english"
import { Creative } from "@/components/site/creative"
import { About } from "@/components/site/about"
import { Contact, Footer } from "@/components/site/contact"
import { CopyrightYear } from "@/components/site/copyright-year"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Credentials />
        <Lessons />
        <English />
        <Teaching />
        <ItWeb />
        <Creative />
        <About />
        <Contact />
      </main>
      <Footer year={<CopyrightYear />} />
    </>
  )
}
