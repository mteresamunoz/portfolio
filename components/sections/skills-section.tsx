"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"

const logoMap: Record<string, string> = {
  "Python": "images/python.png",
  "SQL / MySQL": "images/sql.png",
  "MySQL": "images/sql.png",
  "C / C++": "images/c++.png",
  "Java": "images/java.png",
  "ChromaDB": "images/chromadb.png",
  "vLLM": "images/vllm.png",
  "PyTorch": "images/pytorch.png",
  "Transformers": "images/huggingface.png",
  "LangChain": "images/langchain.jpg",
  "LangGraph": "images/langgraph.png",
  "LlamaIndex": "images/llamaindex.jpg",
  "FastAPI": "images/fastapi.png",
  "React / Next.js": "images/nextjs.png",
  "W&B": "images/w&b.png",
  "Ollama": "images/ollama.png",
  "HuggingFace Hub": "images/huggingface.png",
  "Docker": "images/docker.png",
  "GitHub Actions": "images/githubactions.png",
  "Vercel": "images/vercelv0.png",
}

const skillCategories = [
  {
    key: "skills.programming",
    items: ["Python", "C / C++", "Java"],
  },
  {
    key: "skills.databases",
    items: ["MySQL", "ChromaDB", "Qdrant"],
  },
  {
    key: "skills.llm",
    items: [
      "LoRA", "QLoRA", "NF4", "FP4", "Int8", "Double Quantization", "bitsandbytes",
      "vLLM", "Knowledge Distillation", "Prompt Engineering", "lm-evaluation-harness",
      "RAGAS", "LLM-as-a-judge", "Responsible / Green AI", "Multilingual", "Low-resource",
    ],
  },
  {
    key: "skills.rag",
    items: [
      "Hybrid Search (BM25+dense)", "Cross-encoder Re-ranking", "Reciprocal Rank Fusion",
      "Query Rewriting / HyDE", "Semantic Chunking",
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
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => {
                  const logo = logoMap[item]
                  return (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD3] bg-white px-3.5 py-1.5 text-xs font-medium text-[#2D2A26] hover:border-[#C75B39]/40 transition-colors"
                    >
                      {logo && (
                        <img
                          src={logo}
                          alt={item}
                          className="h-4 w-auto object-contain"
                        />
                      )}
                      <span>{item}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
