"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="inline-flex items-center rounded-full border border-[#E8DDD3] bg-white px-3 py-1 text-xs font-semibold text-[#2D2A26] hover:border-[#C75B39] hover:text-[#C75B39] transition-colors"
      aria-label="Toggle language"
    >
      {language === "en" ? "EN" : "ES"}
    </button>
  )
}
