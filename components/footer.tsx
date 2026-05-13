"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Mail, ExternalLink, Linkedin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="border-t border-[#E8DDD3] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-xl font-semibold text-[#2D2A26]">
            {t("contact.title")}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:maytemuma@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-[#FAF8F5] px-5 py-2.5 text-sm font-medium text-[#2D2A26] hover:border-[#C75B39] hover:text-[#C75B39] transition-colors"
            >
              <Mail className="h-4 w-4" />
              maytemuma@gmail.com
            </a>
            <a
              href="https://github.com/mteresamunoz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-[#FAF8F5] px-5 py-2.5 text-sm font-medium text-[#2D2A26] hover:border-[#C75B39] hover:text-[#C75B39] transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mariateresamunozmartin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-[#FAF8F5] px-5 py-2.5 text-sm font-medium text-[#2D2A26] hover:border-[#C75B39] hover:text-[#C75B39] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://huggingface.co/maytemuma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-[#FAF8F5] px-5 py-2.5 text-sm font-medium text-[#2D2A26] hover:border-[#C75B39] hover:text-[#C75B39] transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              HuggingFace
            </a>
          </div>

          <p className="text-sm text-[#6B6560]">
            {t("contact.location")}
          </p>

          <div className="pt-6 border-t border-[#E8DDD3] w-full">
            <p className="text-xs text-[#6B6560]">
              Last updated 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
