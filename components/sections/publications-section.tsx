"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, FileText } from "lucide-react"

export function PublicationsSection() {
  const { t } = useLanguage()

  return (
    <section id="publications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="pub.title" />

        <Card className="bg-white border-[#E8DDD3] shadow-sm overflow-hidden">
          <CardContent className="p-6 sm:p-8 space-y-6">
            {/* Top row: text + metrics */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#2D2A26]">
                    {t("pub.semeval.title")}
                  </h3>
                  <p className="text-sm text-[#C75B39] font-medium mt-1">
                    {t("pub.semeval.venue")}
                  </p>
                </div>

                <p className="text-base text-[#6B6560] leading-relaxed">
                  {t("pub.semeval.desc")}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#2D2A26] hover:bg-[#C75B39] text-white rounded-full"
                  >
                    <a
                      href="https://github.com/SemHuis/group6-shared-task"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t("common.viewCode")}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Metrics highlight */}
              <div className="flex gap-4 shrink-0">
                <div className="flex flex-col items-center justify-center rounded-xl bg-[#F5F0EB] px-6 py-5 min-w-[120px]">
                  <span className="text-3xl font-bold text-[#5A8F7B]">96.86%</span>
                  <span className="text-xs text-[#6B6560] mt-1 text-center">Subtask 1</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-[#F5F0EB] px-6 py-5 min-w-[120px]">
                  <span className="text-3xl font-bold text-[#C75B39]">91.67%</span>
                  <span className="text-xs text-[#6B6560] mt-1 text-center">Subtask 3</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E8DDD3]" />

            {/* Diagram */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#C75B39]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C75B39]">
                  {t("pub.semeval.diagram.label")}
                </span>
              </div>
              <div className="rounded-xl border border-[#E8DDD3] bg-[#FAF8F5] p-3 sm:p-4">
                <img
                  src="images/diagram.jpg"
                  alt="Sylloscope at SemEval-2026 Task 11 — System Architecture Diagram"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
              <p className="text-xs text-[#6B6560] text-center">
                {t("pub.semeval.diagram.caption")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
