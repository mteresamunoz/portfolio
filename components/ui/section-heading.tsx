"use client"

import { useLanguage } from "@/lib/language-context"

interface SectionHeadingProps {
  titleKey: string
  className?: string
}

export function SectionHeading({ titleKey, className = "" }: SectionHeadingProps) {
  const { t } = useLanguage()

  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2A26]">
        {t(titleKey)}
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-[#C75B39]" />
    </div>
  )
}
