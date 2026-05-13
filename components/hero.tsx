"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Mail, Download, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-20 sm:py-28 lg:py-32 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Profile photo */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/images/foto mia.jpg"
              alt="María Teresa Muñoz Martín"
              className="h-40 w-40 sm:h-44 sm:w-44 rounded-full object-cover border-4 border-white shadow-md ring-2 ring-[#E8DDD3]"
            />
          </div>
        </div>

        {/* Greeting */}
        <p className="text-sm font-medium tracking-widest uppercase text-[#C75B39]">
          {t("hero.greeting")}
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D2A26]">
          María Teresa Muñoz Martín
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-serif text-[#6B6560] leading-relaxed">
          {t("hero.tagline")}
        </p>

        {/* Role badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {["hero.role.computer", "hero.role.llm", "hero.role.nlp"].map((key) => (
            <span
              key={key}
              className="inline-flex items-center rounded-full border border-[#E8DDD3] bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-[#2D2A26] shadow-sm"
            >
              {t(key)}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6B6560] leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            asChild
            className="bg-[#C75B39] hover:bg-[#A84A2D] text-white rounded-full px-6"
          >
            <a href="/CV_mtmm.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              {t("hero.cta.cv")}
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="rounded-full border-[#E8DDD3] text-[#2D2A26] hover:bg-[#F5F0EB] hover:text-[#C75B39] px-6"
          >
            <a href="https://github.com/mteresamunoz" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="rounded-full border-[#E8DDD3] text-[#2D2A26] hover:bg-[#F5F0EB] hover:text-[#C75B39] px-6"
          >
            <a href="https://www.linkedin.com/in/mariateresamunozmartin/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="rounded-full border-[#E8DDD3] text-[#2D2A26] hover:bg-[#F5F0EB] hover:text-[#C75B39] px-6"
          >
            <a href="mailto:maytemuma@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
