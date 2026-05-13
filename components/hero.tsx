"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { Github, Mail, Download, Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

function EmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("maytemuma@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-white px-5 py-2 text-sm font-medium text-[#2D2A26]">
      <Mail className="h-4 w-4 text-[#C75B39]" />
      <a href="mailto:maytemuma@gmail.com" className="hover:text-[#C75B39] transition-colors">
        maytemuma@gmail.com
      </a>
      <button
        onClick={handleCopy}
        className="p-1 rounded-md hover:bg-[#E8DDD3]/50 text-[#6B6560] hover:text-[#C75B39] transition-colors"
        aria-label="Copy email"
        title="Copy email"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-[#5A8F7B]" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative px-4 py-20 sm:py-28 lg:py-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-14">
        {/* Profile photo - left, same height as text */}
        <div className="shrink-0 flex justify-center md:justify-start">
          <img
            src="images/foto mia.jpg"
            alt="María Teresa Muñoz Martín"
            className="h-auto max-h-[380px] w-auto rounded-2xl object-cover border-4 border-white shadow-md ring-2 ring-[#E8DDD3]"
          />
        </div>

        {/* Content - right */}
        <div className="flex-1 flex flex-col justify-center space-y-5 text-center md:text-left">
          {/* Greeting */}
          <p className="text-sm font-medium tracking-widest uppercase text-[#C75B39]">
            {t("hero.greeting")}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D2A26]">
            <span className="block">María Teresa</span>
            <span className="block text-[#6B6560]">Muñoz Martín</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-serif text-[#6B6560] leading-relaxed">
            {t("hero.tagline")}
          </p>

          {/* Role badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
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
          <p className="max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-[#6B6560] leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Button
              asChild
              className="bg-[#C75B39] hover:bg-[#A84A2D] text-white rounded-full px-6"
            >
              <a href="CV_Maria_Teresa_Munoz_Martin.pdf" download>
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
            <EmailButton />
          </div>
        </div>
      </div>
    </section>
  )
}
