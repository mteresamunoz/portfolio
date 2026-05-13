"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "gender",
    links: [
      { type: "site", href: "https://gender-gap-oss.vercel.app" },
    ],
  },
  {
    id: "pergamia",
    links: [],
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="projects.title" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-1 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-[#2D2A26]">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                </div>

                <p className="text-sm text-[#6B6560] leading-relaxed flex-1">
                  {t(`projects.${project.id}.desc`)}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {t(`projects.${project.id}.stack`)
                    .split(",")
                    .map((s) => s.trim())
                    .map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-[#E8DDD3] text-[#5A8F7B] text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                </div>

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
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                            {t("common.visitSite")}
                          </>
                        ) : (
                          <>
                            <Github className="mr-2 h-3.5 w-3.5" />
                            {t("common.viewCode")}
                          </>
                        )}
                      </a>
                    </Button>
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
