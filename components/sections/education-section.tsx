"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    id: "erasmus",
    logos: [
      { src: "images/ehu.png", alt: "EHU" },
      { src: "images/rug.png", alt: "RUG" },
      { src: "images/lct.png", alt: "LCT" },
    ],
    hasGpa: false,
  },
  {
    id: "bsc",
    logos: [
      { src: "images/uja.png", alt: "UJA" },
    ],
    hasGpa: true,
  },
  {
    id: "bach",
    logos: [
      { src: "images/iesSantaCatalina.jpg", alt: "IES Santa Catalina" },
    ],
    hasGpa: false,
  },
]

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="edu.title" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <Card
              key={edu.id}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center gap-2 h-16">
                  {edu.logos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto object-contain"
                    />
                  ))}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-[#2D2A26]">
                    {t(`edu.${edu.id}.title`)}
                  </h3>
                  <p className="text-sm text-[#6B6560]">
                    {t(`edu.${edu.id}.institution`)}
                  </p>
                  <p className="text-xs text-[#C75B39] font-medium">
                    {t(`edu.${edu.id}.date`)}
                  </p>
                  {edu.hasGpa && (
                    <p className="text-xs text-[#5A8F7B] font-semibold">
                      {t(`edu.${edu.id}.gpa`)}
                    </p>
                  )}
                </div>

                <p className="text-sm text-[#6B6560] leading-relaxed">
                  {t(`edu.${edu.id}.desc`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
