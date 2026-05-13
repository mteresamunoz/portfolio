"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  { key: "cert.langchain", logo: "/images/langchain.jpg", logoAlt: "LangChain" },
  { key: "cert.microsoft", logo: "/images/microsoft.png", logoAlt: "Microsoft" },
  { key: "cert.hf", logo: "/images/huggingface.png", logoAlt: "Hugging Face" },
  { key: "cert.anthropic1", logo: "/images/anthropic.png", logoAlt: "Anthropic" },
  { key: "cert.anthropic2", logo: "/images/anthropic.png", logoAlt: "Anthropic" },
  { key: "cert.anthropic3", logo: "/images/anthropic.png", logoAlt: "Anthropic" },
]

export function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="cert.title" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.key}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <img
                  src={cert.logo}
                  alt={cert.logoAlt}
                  className="h-14 w-auto object-contain"
                />
                <p className="text-sm font-medium text-[#2D2A26]">
                  {t(cert.key)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
