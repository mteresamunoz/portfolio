"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Brain, Shield, Dumbbell, Plane } from "lucide-react"

const softSkills = [
  { key: "soft.cross", icon: Plane },
  { key: "soft.research", icon: Brain },
  { key: "soft.ethical", icon: Shield },
  { key: "soft.discipline", icon: Dumbbell },
]

export function LanguagesSection() {
  const { t } = useLanguage()

  return (
    <section id="languages" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="lang.title" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <Card className="bg-white border-[#E8DDD3] shadow-sm">
            <CardContent className="p-6 space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C75B39]">
                {t("lang.title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#5A8F7B]" />
                    <span className="text-base font-medium text-[#2D2A26]">
                      {t("lang.spanish")}
                    </span>
                  </div>
                  <Badge className="bg-[#F5F0EB] text-[#5A8F7B] border-0 font-medium">
                    {t("lang.spanish.level")}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#5A8F7B]" />
                    <span className="text-base font-medium text-[#2D2A26]">
                      {t("lang.english")}
                    </span>
                  </div>
                  <Badge className="bg-[#F5F0EB] text-[#5A8F7B] border-0 font-medium">
                    {t("lang.english.level")}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-white border-[#E8DDD3] shadow-sm">
            <CardContent className="p-6 space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C75B39]">
                {t("soft.title")}
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.key} className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-[#5A8F7B] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#6B6560] leading-relaxed">
                        {t(skill.key)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
