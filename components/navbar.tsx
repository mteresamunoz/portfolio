"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navKeys = [
  { key: "nav.experience", href: "#experience" },
  { key: "nav.education", href: "#education" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.publications", href: "#publications" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.certifications", href: "#certifications" },
  { key: "nav.languages", href: "#languages" },
]

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8DDD3] bg-[#FAF8F5]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-end px-4 sm:px-6 lg:px-8">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navKeys.map((item) => (
            <button
              key={item.key}
              onClick={() => handleClick(item.href)}
              className="text-sm font-medium text-[#6B6560] hover:text-[#C75B39] transition-colors"
            >
              {t(item.key)}
            </button>
          ))}
          <div className="ml-2">
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-[#2D2A26] hover:text-[#C75B39] transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] bg-[#FAF8F5] border-l border-[#E8DDD3]">
              <div className="flex flex-col gap-6 mt-8">
                {navKeys.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleClick(item.href)}
                    className="text-left text-base font-medium text-[#2D2A26] hover:text-[#C75B39] transition-colors"
                  >
                    {t(item.key)}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
