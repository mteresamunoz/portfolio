"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const certifications = [
  {
    key: "cert.langchain",
    logo: "images/langchain.jpg",
    logoAlt: "LangChain",
    url: "https://academy.langchain.com/certificates/wnfxxxvaln",
  },
  {
    key: "cert.microsoft",
    logo: "images/microsoft.png",
    logoAlt: "Microsoft",
    url: "https://learn.microsoft.com/es-es/users/marateresamuozmartn-1752/credentials/abfe754980025ef6?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    key: "cert.hf",
    logo: "images/huggingface.png",
    logoAlt: "Hugging Face",
    url: "https://cas-bridge.xethub.hf.co/xet-bridge-us/6800ea554845e4edbca48825/23529efccbc65eb43928d8c426eebe3d2fd0bcb02959b7c594d80a94569e8420?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20260520%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260520T110235Z&X-Amz-Expires=3600&X-Amz-Signature=0abeec0c9ee179cfe6846bfad04e73195efc2a5a529480e5ee8575b579a9c54e&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=6784e2bfdacadead50c67c05&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272026-04-29.png%3B+filename%3D%222026-04-29.png%22%3B&response-content-type=image%2Fpng&x-amz-checksum-mode=ENABLED&x-id=GetObject&Expires=1779278555&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3OTI3ODU1NX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82ODAwZWE1NTQ4NDVlNGVkYmNhNDg4MjUvMjM1MjllZmNjYmM2NWViNDM5MjhkOGM0MjZlZWJlM2QyZmQwYmNiMDI5NTliN2M1OTRkODBhOTQ1NjllODQyMCoifV19&Signature=I3hkh%7EKXoN9yBQwM965AepiAx6JhhPAbN7J6VWkeeHQzRjoPys90sLXgUfaa39KnETgG2iDU3-tddOAhFGK4DnCRVwfcIwoUmN0B-R3ykCagCvDr-IZj1VyR9Tfun3rYoil5kZG4qxRN-K-8IVGP0PQRgyoQ4llSCp8Z7kKwARY8nRkhD6La%7Eayf%7E6YthVdpMe8g7MchP3SgvEFlCSDuUNUIouQjt94LOmYM1oQ1hyGnvBvCLIXNoOWra5WEpgL7dVlJjrvzxpBoYxgIDw1FWvxahWZJHj5GEM1Ltbkby5pRDvYHUvyX1KmDJXCEUoCWNrvteD6FjiiIQjzrZUyPyQ__&Key-Pair-Id=K2L8F4GPSG1IFC",
  },
  {
    key: "cert.anthropic1",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/8qc3ju4o5kib",
  },
  {
    key: "cert.anthropic2",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/c92kze37cpua",
  },
  {
    key: "cert.anthropic3",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/we2pbzy95eg3",
  },
  {
    key: "cert.anthropic4",
    logo: "images/anthropic.png",
    logoAlt: "Anthropic",
    url: "https://verify.skilljar.com/c/6foiefdgojh2",
  },
]

export function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="cert.title" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <Card
              key={cert.key}
              className="bg-white border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors duration-300 shadow-sm flex flex-col"
            >
              <CardContent className="p-5 flex flex-col items-center text-center space-y-4 flex-1">
                <img
                  src={cert.logo}
                  alt={cert.logoAlt}
                  className="h-12 w-auto object-contain"
                />
                <p className="text-sm font-medium text-[#2D2A26] flex-1">
                  {t(cert.key)}
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-full border-[#C75B39]/30 text-[#C75B39] hover:bg-[#C75B39] hover:text-white text-xs px-4"
                >
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3 w-3" />
                    {t("cert.credential")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
