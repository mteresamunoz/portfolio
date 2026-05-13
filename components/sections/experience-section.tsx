"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: "alia",
    logo: "images/sinai.png",
    logoAlt: "SINAI",
    descKeys: ["exp.alia.desc1", "exp.alia.desc2", "exp.alia.desc3", "exp.alia.desc4", "exp.alia.desc5"],
    tags: ["LLMs", "RAG", "NLP", "Python", "EU AI Act"],
  },
  {
    id: "investigo",
    logo: "images/hitz.png",
    logoAlt: "HITZ",
    descKeys: ["exp.investigo.desc1", "exp.investigo.desc2", "exp.investigo.desc3"],
    tags: ["QLoRA", "LoRA", "PEFT", "Basque", "GPU", "Latxa"],
  },
  {
    id: "initiation",
    logo: "images/sinai.png",
    logoAlt: "SINAI",
    descKeys: ["exp.initiation.desc"],
    tags: ["RAG", "FAISS", "Sentence-BERT", "GPT-3.5", "LLaMA-2"],
  },
  {
    id: "icaro",
    logo: "images/sinai.png",
    logoAlt: "SINAI",
    descKeys: ["exp.icaro.desc"],
    tags: ["NLP", "ML", "RAG", "Corpus Engineering"],
  },
]

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="exp.title" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.logoAlt}
                      className="h-12 w-12 object-contain rounded-md"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-[#2D2A26]">
                      {t(`exp.${exp.id}.title`)}
                    </h3>
                    <p className="text-sm text-[#6B6560] mt-0.5">
                      {t(`exp.${exp.id}.company`)}
                    </p>
                    <p className="text-xs text-[#C75B39] font-medium mt-1">
                      {t(`exp.${exp.id}.date`)}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.descKeys.map((key, i) => (
                    <li key={i} className="text-sm text-[#6B6560] leading-relaxed pl-3 border-l-2 border-[#E8DDD3]">
                      {t(key)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#F5F0EB] text-[#5A8F7B] hover:bg-[#F5F0EB] text-xs font-medium border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
