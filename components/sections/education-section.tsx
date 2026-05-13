"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Plane } from "lucide-react"

const education = [
  {
    id: "bach",
    mainLogo: "images/iesSantaCatalina.jpg",
    mainLogoAlt: "IES Santa Catalina",
    hasGpa: false,
    subCards: [
      {
        type: "text-icon" as const,
        icon: Plane,
        titleKey: "edu.bach.sub.title",
        descKey: "edu.bach.sub.desc",
      },
    ],
  },
  {
    id: "bsc",
    mainLogo: "images/uja.png",
    mainLogoAlt: "UJA",
    hasGpa: true,
    subCards: [
      {
        type: "logo-text" as const,
        logo: "images/vilnaUni.png",
        logoAlt: "Vilnius University",
        titleKey: "edu.bsc.sub.title",
        descKey: "edu.bsc.sub.desc",
        extraKey: "edu.bsc.sub.thesis",
      },
    ],
  },
  {
    id: "erasmus",
    mainLogo: "images/lct.png",
    mainLogoAlt: "Erasmus Mundus LCT",
    hasGpa: false,
    subCards: [
      {
        type: "logo-text" as const,
        logo: "images/ehu.png",
        logoAlt: "EHU",
        titleKey: "edu.erasmus.sub1.title",
        descKey: "edu.erasmus.sub1.institution",
        extraKey: null,
      },
      {
        type: "logo-text" as const,
        logo: "images/rug.png",
        logoAlt: "RUG",
        titleKey: "edu.erasmus.sub2.title",
        descKey: "edu.erasmus.sub2.institution",
        extraKey: "edu.erasmus.thesis",
      },
    ],
  },
]

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="edu.title" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col">
              {/* Main card */}
              <Card className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <img
                    src={edu.mainLogo}
                    alt={edu.mainLogoAlt}
                    className={`${edu.id === "erasmus" ? "h-16" : "h-12"} w-auto object-contain`}
                  />

                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[#2D2A26]">
                      {t(`edu.${edu.id}.title`)}
                    </h3>
                    {edu.id !== "erasmus" && (
                      <p className="text-sm text-[#6B6560]">
                        {t(`edu.${edu.id}.institution`)}
                      </p>
                    )}
                    <p className="text-xs text-[#C75B39] font-medium">
                      {t(`edu.${edu.id}.date`)}
                    </p>
                    {edu.hasGpa && (
                      <p className="text-xs text-[#5A8F7B] font-semibold">
                        {t(`edu.${edu.id}.gpa`)}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Connector line */}
              <div className="flex justify-center py-1">
                <div className="h-6 border-l-2 border-dashed border-[#D4C4B5]" />
              </div>

              {/* Sub-cards */}
              <div className="flex flex-col gap-3">
                {edu.subCards.map((sub, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-white/80 border border-[#E8DDD3]/60 p-5 space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      {sub.type === "logo-text" && sub.logo && (
                        <img
                          src={sub.logo}
                          alt={(sub as any).logoAlt}
                          className="h-9 w-auto object-contain shrink-0"
                        />
                      )}
                      {sub.type === "text-icon" && sub.icon && (
                        <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#F5F0EB] shrink-0">
                          <Plane className="h-5 w-5 text-[#C75B39]" />
                        </div>
                      )}
                      <h4 className="text-sm font-semibold text-[#2D2A26]">
                        {t(sub.titleKey)}
                      </h4>
                    </div>

                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {t(sub.descKey)}
                    </p>

                    {sub.extraKey && (
                      <p className="text-xs text-[#5A8F7B] font-medium leading-relaxed border-l-2 border-[#5A8F7B]/30 pl-3">
                        {t(sub.extraKey)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
