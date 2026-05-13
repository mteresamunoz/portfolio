"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"

interface SkillItem {
  name: string
  logo?: string
}

interface SkillCategory {
  key: string
  items: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    key: "skills.programming",
    items: [
      { name: "Python", logo: "images/python.png" },
      { name: "SQL / MySQL", logo: "images/sql.png" },
      { name: "C / C++", logo: "images/c++.png" },
      { name: "Java", logo: "images/java.png" },
    ],
  },
  {
    key: "skills.llm",
    items: [
      { name: "PyTorch", logo: "images/pytorch.png" },
      { name: "Transformers", logo: "images/huggingface.png" },
      { name: "LangChain", logo: "images/langchain.jpg" },
      { name: "LangGraph", logo: "images/langgraph.png" },
      { name: "HuggingFace Hub", logo: "images/huggingface.png" },
      { name: "Ollama", logo: "images/ollama.png" },
      { name: "LlamaIndex", logo: "images/llamaindex.jpg" },
      { name: "Latxa", logo: "images/latxa.png" },
    ],
  },
  {
    key: "skills.rag",
    items: [
      { name: "ChromaDB", logo: "images/chromadb.png" },
      { name: "vLLM", logo: "images/vllm.png" },
      { name: "W&B", logo: "images/w&b.png" },
    ],
  },
  {
    key: "skills.frameworks",
    items: [
      { name: "FastAPI", logo: "images/fastapi.png" },
      { name: "React / Next.js", logo: "images/nextjs.png" },
    ],
  },
  {
    key: "skills.infra",
    items: [
      { name: "Docker", logo: "images/docker.png" },
      { name: "GitHub Actions", logo: "images/githubactions.png" },
      { name: "Vercel", logo: "images/vercelv0.png" },
    ],
  },
]

const nlpTasks = [
  "LoRA", "QLoRA", "NF4", "FP4", "Int8", "Double Quantization", "bitsandbytes",
  "Knowledge Distillation", "Prompt Engineering", "lm-evaluation-harness",
  "RAGAS", "LLM-as-a-judge", "Hybrid Search (BM25+dense)", "Cross-encoder Re-ranking",
  "Reciprocal Rank Fusion", "Query Rewriting / HyDE", "Semantic Chunking",
  "Argument Mining", "Stance Detection", "Hate-Speech Detection",
  "Multilingual / Low-resource NLP", "Cross-lingual Evaluation",
  "Responsible / Green AI", "LaTeX", "HPC / GPU Clusters", "Qdrant",
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
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white border border-[#E8DDD3] hover:border-[#C75B39]/30 transition-colors"
                  >
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-10 w-10 object-contain"
                      />
                    )}
                    <span className="text-xs text-center font-medium text-[#2D2A26] leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* NLP Tasks — text badges */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C75B39] mb-4">
              {t("skills.nlp")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {nlpTasks.map((task) => (
                <Badge
                  key={task}
                  variant="outline"
                  className="border-[#E8DDD3] text-[#2D2A26] bg-white hover:border-[#5A8F7B] hover:text-[#5A8F7B] transition-colors text-xs font-normal px-3 py-1"
                >
                  {task}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
