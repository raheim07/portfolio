import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { JourneySection } from "@/components/journey-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
