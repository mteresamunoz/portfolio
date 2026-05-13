"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { Github, Mail, ExternalLink, Linkedin, Copy, Check } from "lucide-react"

function CopyEmailButton() {
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
    <button
      onClick={handleCopy}
      className="ml-1 p-1 rounded-md hover:bg-[#E8DDD3]/50 text-[#6B6560] hover:text-[#C75B39] transition-colors"
      aria-label="Copy email"
      title="Copy email"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-[#5A8F7B]" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  )
}

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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-[#FAF8F5] px-5 py-2.5 text-sm font-medium text-[#2D2A26]">
              <Mail className="h-4 w-4 text-[#C75B39]" />
              <span>maytemuma@gmail.com</span>
              <CopyEmailButton />
            </div>
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
