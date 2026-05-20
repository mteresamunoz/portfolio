"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const certifications = [
  {
    key: "cert.langchain",
    logo: "images/langchain.jpg",
    logoAlt: "LangChain",
    url: "https://academy.langchain.com/certificates/wnfxxxvaln",
  },
  {
    key: "cert.microsoft",
    logo: "images/microsoft.png",
    logoAlt: "Microsoft",
    url: "https://learn.microsoft.com/es-es/users/marateresamuozmartn-1752/credentials/abfe754980025ef6?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    key: "cert.hf",
    logo: "images/huggingface.png",
    logoAlt: "Hugging Face",
    url: "https://huggingface.co/datasets/agents-course/final-certificates/resolve/main/certificates/maytemuma/2026-04-29.png",
  },
  {
    key: "cert.anthropic1",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/8qc3ju4o5kib",
  },
  {
    key: "cert.anthropic2",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/c92kze37cpua",
  },
  {
    key: "cert.anthropic3",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/we2pbzy95eg3",
  },
  {
    key: "cert.anthropic4",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/6foiefdgojh2",
  },
]

export function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="cert.title" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <Card
              key={cert.key}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm flex flex-col"
            >
              <CardContent className="p-5 flex flex-col items-center text-center space-y-4 flex-1">
                <img
                  src={cert.logo}
                  alt={cert.logoAlt}
                  className="h-12 w-auto object-contain"
                />
                <p className="text-sm font-medium text-[#2D2A26] flex-1">
                  {t(cert.key)}
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-full border-[#C75B39]/30 text-[#C75B39] hover:bg-[#C75B39] hover:text-white text-xs px-4"
                >
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3 w-3" />
                    {t("cert.credential")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
