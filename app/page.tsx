"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { PublicationsSection } from "@/components/sections/publications-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { LanguagesSection } from "@/components/sections/languages-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <PublicationsSection />
        <ProjectsSection />
        <CertificationsSection />
        <LanguagesSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
