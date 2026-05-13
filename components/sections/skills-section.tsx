"use client"

import { useLanguage } from "@/lib/language-context"
import { SectionHeading } from "@/components/ui/section-heading"

const logoMap: Record<string, string> = {
  "Python": "images/python.png",
  "MySQL": "images/sql.png",
  "C / C++": "images/c++.png",
  "Java": "images/java.png",
  "ChromaDB": "images/chromadb.png",
  "vLLM": "images/vllm.png",
  "Latxa": "images/latxa.png",
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
  "Vercel": "images/vercel.png",
  "V0": "images/v0.png",
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
      "RAGAS", "LLM-as-a-judge", "Responsible / Green AI",
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
      "Multilingual", "Low-resource", "Cross-lingual Evaluation", "Counter-narrative Generation",
      "Text Classification", "Corpus Curation & Annotation", "Inter-annotator Agreement", "Language Identification", "Toxicity Detection", 
      "Knowledge Distillation", "Question Answering (RAG-based)", "Clinical NLP", "Stereotype Detection", "Natural Language Inference (NLI)",
    ],
  },
  {
    key: "skills.frameworks",
    items: [
      "PyTorch", "Transformers", "PEFT", "LangChain", "LangGraph", "LlamaIndex",
      "FastAPI", "React / Next.js", "W&B", "Ollama", "HuggingFace Hub", "V0",
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
          {skillCategories.map((category) => {
            const withLogo = category.items.filter((item) => logoMap[item])
            const withoutLogo = category.items.filter((item) => !logoMap[item])

            return (
              <div key={category.key}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C75B39] mb-4">
                  {t(category.key)}
                </h3>

                {/* Icons with logos */}
                {withLogo.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-4">
                    {withLogo.map((item) => (
                      <div
                        key={item}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-[#E8DDD3] hover:border-[#C75B39]/40 transition-colors"
                      >
                        <img
                          src={logoMap[item]}
                          alt={item}
                          className="h-11 w-11 object-contain"
                        />
                        <span className="text-xs text-center font-medium text-[#2D2A26] leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Text-only pills */}
                {withoutLogo.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {withoutLogo.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-[#E8DDD3] bg-white px-3.5 py-1.5 text-xs font-medium text-[#2D2A26] hover:border-[#5A8F7B] hover:text-[#5A8F7B] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
