"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    key: "skills.programming",
    items: ["Python", "SQL", "C / C++", "Java"],
  },
  {
    key: "skills.llm",
    items: [
      "LoRA", "QLoRA", "NF4", "FP4", "Int8", "Double Quantization", "bitsandbytes",
      "vLLM", "Knowledge Distillation", "Prompt Engineering", "lm-evaluation-harness",
      "RAGAS", "LLM-as-a-judge", "Responsible / Green AI","Latxa",
    ],
  },
  {
    key: "skills.rag",
    items: [
      "Hybrid Search (BM25+dense)", "Cross-encoder Re-ranking", "Reciprocal Rank Fusion",
      "Query Rewriting / HyDE", "Semantic Chunking", "ChromaDB", "Qdrant",
    ],
  },
  {
    key: "skills.nlp",
    items: [
      "Argument Mining", "Stance Detection", "Hate-Speech Detection",
      "Multilingual / Low-resource NLP", "Cross-lingual Evaluation",
    ],
  },
  {
    key: "skills.frameworks",
    items: [
      "PyTorch", "Transformers", "LangChain", "LangGraph", "LlamaIndex",
      "FastAPI", "React / Next.js", "W&B", "Ollama", "HuggingFace Hub",
    ],
  },
  {
    key: "skills.infra",
    items: [
      "Docker", "GitHub Actions", "Vercel", "HPC / GPU Clusters", "LaTeX",
    ],
  },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="skills.title" />

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.key}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C75B39] mb-4">
                {t(category.key)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-[#E8DDD3] text-[#2D2A26] bg-white hover:border-[#5A8F7B] hover:text-[#5A8F7B] transition-colors text-xs font-normal px-3 py-1.5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
