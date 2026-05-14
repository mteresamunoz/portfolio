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
  "Oracle": "images/oracle.png",
  "Qdrant": "images/qdrant.png",
  "LaTeX": "images/latex.png",
  "Claude Code": "images/claudecode.png",
}

const skillCategories = [
  {
    key: "skills.programming",
    items: ["Python", "C / C++", "Java"],
  },
  {
    key: "skills.databases",
    items: ["MySQL", "ChromaDB", "Qdrant", "Oracle"],
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
      "FastAPI", "React / Next.js", "W&B", "Ollama", "HuggingFace Hub",
    ],
  },
  {
    key: "skills.infra",
    items: [
      "Docker", "GitHub Actions", "Vercel", "HPC / GPU Clusters", "LaTeX", "Claude Code",
    ],
  },
]

function SkillCategoryCard({ category }: { category: typeof skillCategories[0] }) {
  const { t } = useLanguage()
  const withLogo = category.items.filter((item) => logoMap[item])
  const withoutLogo = category.items.filter((item) => !logoMap[item])

  return (
    <div className="bg-white rounded-xl border border-[#E8DDD3] p-5 sm:p-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C75B39] mb-4">
        {t(category.key)}
      </h3>

      {/* Icon cards — skills with logos */}
      {withLogo.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {withLogo.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8DDD3]/60 hover:border-[#C75B39]/40 transition-colors"
            >
              <img
                src={logoMap[item]}
                alt={item}
                className="h-10 w-10 object-contain"
              />
              <span className="text-[11px] text-center font-medium text-[#2D2A26] leading-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Subtle separator between icons and pills */}
      {withLogo.length > 0 && withoutLogo.length > 0 && (
        <div className="my-4 border-t border-[#E8DDD3]/60" />
      )}

      {/* Pill badges — skills without logos */}
      {withoutLogo.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {withoutLogo.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-[#E8DDD3] bg-white px-3 py-1 text-xs font-medium text-[#2D2A26] hover:border-[#5A8F7B] hover:text-[#5A8F7B] transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="skills.title" />

        {/* 2-column grid for categories, paired for balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategoryCard category={skillCategories[0]} />
          <SkillCategoryCard category={skillCategories[1]} />
          <SkillCategoryCard category={skillCategories[2]} />
          <SkillCategoryCard category={skillCategories[3]} />
          <SkillCategoryCard category={skillCategories[4]} />
          <SkillCategoryCard category={skillCategories[5]} />
        </div>

        {/* Last category centered below on desktop */}
        <div className="mt-6 md:max-w-[calc(50%-12px)] md:mx-auto">
          <SkillCategoryCard category={skillCategories[6]} />
        </div>
      </div>
    </section>
  )
}
