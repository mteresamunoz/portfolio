"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Globe } from "lucide-react"

const professionalProjects = [
  {
    id: "alia",
    image: "images/alia.png",
    imageAlt: "ALIA",
    tags: ["LLMs", "RAG", "NLP", "Python", "EU AI Act", "Corpus Curation"],
    links: [
      { type: "site", href: "https://alia.gob.es/" },
      { type: "github", href: "https://github.com/sinai-uja/ALIA-UJA" },
    ],
  },
  {
    id: "romanet",
    image: "images/RomaNet Logo.png",
    imageAlt: "RomaNET",
    tags: ["NLP", "Hate Speech Detection", "Multilingual", "Counter-narratives", "Web Platform"],
    links: [
      { type: "site", href: "https://sinai.ujaen.es/romanet/" },
      { type: "platform", href: "https://sinai.ujaen.es/romanet/akanai/login" },
    ],
  },
  {
    id: "kamira",
    image: "images/logo-kamira.jpg",
    imageAlt: "KAMIRA",
    tags: ["Prompt Engineering", "RAG", "Content Safety", "Human Rights", "Web Platform"],
    links: [
      { type: "platform", href: "https://sinai.ujaen.es/kamira/login" },
    ],
  },
  {
    id: "investigo",
    image: "images/latxa.png",
    imageAlt: "Latxa",
    tags: ["QLoRA", "LoRA", "PEFT", "Basque", "GPU", "Green AI", "NF4"],
    links: [],
  },
]

export function ProfessionalProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="professional-projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="pro.title" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center justify-center h-20">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#2D2A26] text-center">
                    {t(`pro.${project.id}.title`)}
                  </h3>
                  <p className="text-xs text-[#C75B39] font-medium mt-1 text-center">
                    {t(`pro.${project.id}.subtitle`)}
                  </p>
                </div>

                <ul className="space-y-2 flex-1">
                  {t(`pro.${project.id}.desc`)
                    .split("\n")
                    .map((line, i) => line.trim())
                    .filter(Boolean)
                    .map((line, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#6B6560] leading-relaxed pl-3 border-l-2 border-[#E8DDD3]"
                      >
                        {line}
                      </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#F5F0EB] text-[#5A8F7B] hover:bg-[#F5F0EB] text-xs font-medium border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.links.map((link) => (
                      <Button
                        key={link.type}
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full border-[#E8DDD3] text-[#2D2A26] hover:bg-[#F5F0EB] hover:text-[#C75B39]"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.type === "site" ? (
                            <>
                              <Globe className="mr-2 h-3.5 w-3.5" />
                              {t("common.visitSite")}
                            </>
                          ) : link.type === "github" ? (
                            <>
                              <Github className="mr-2 h-3.5 w-3.5" />
                              {t("common.viewCode")}
                            </>
                          ) : (
                            <>
                              <ExternalLink className="mr-2 h-3.5 w-3.5" />
                              {t("common.visitPlatform")}
                            </>
                          )}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
