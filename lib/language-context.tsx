"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.tagline": "I build intelligent systems for language understanding.",
    "hero.description": "A passionate Computer Engineer specializing in Natural Language Processing. I tend to make use of AI carefully, embracing Green AI principles and ethical practices, to build systems that work great, feel intuitive, and respect both users and the planet.",
    "hero.cta.cv": "Download CV",
    "hero.cta.explore": "Explore my work",
    "hero.role.computer": "Computer Engineer",
    "hero.role.llm": "ML & GenAI",
    "hero.role.nlp": "Natural Language Processing",
    
    // Navigation
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.publications": "Publications",
    "nav.projects": "Weekend Projects",
    "nav.certifications": "Certifications",
    "nav.languages": "Languages",
    "nav.contact": "Contact",
    
    // Section titles
    "section.explore": "Explore my universe",
    "section.explore.sub": "Click on each bubble to discover more",
    
    // Education
    "edu.title": "Education",
    "edu.erasmus.title": "Erasmus Mundus M.Sc. — Language & Communication Technologies",
    "edu.erasmus.institution": "University of Basque Country (EHU) & University of Groningen (RUG)",
    "edu.erasmus.date": "2024 – 2026",
    "edu.erasmus.desc": "Erasmus Mundus Scholar. Thesis: QLoRA vs LoRA-Q Pipelines for Basque: a Multi-Model Efficiency Analysis.",
    "edu.bsc.title": "B.Sc. in Computer Engineering",
    "edu.bsc.institution": "University of Jaén (UJA)",
    "edu.bsc.date": "2020 – 2024",
    "edu.bsc.gpa": "GPA: 8.22 / 10",
    "edu.bsc.desc": "Erasmus+ exchange at KTU, Lithuania (2023–24). Thesis: BoTCA: RAG chatbot for eating-disorder prevention. Grade: 9.8/10",
    "edu.bach.title": "Technological Baccalaureate",
    "edu.bach.institution": "IES Santa Catalina de Alejandría, Jaén",
    "edu.bach.date": "2018 – 2020",
    "edu.bach.desc": "Erasmus+ Rome 2019 — 1 of 2 students selected from 150 candidates.",

    // Experience
    "exp.title": "Work Experience",
    "exp.alia.title": "Machine Learning Researcher — ALIA Project",
    "exp.alia.company": "SINAI Research Group, University of Jaén",
    "exp.alia.date": "Jan 2026 – Present",
    "exp.alia.desc1": "Spanish Government strategic initiative for sovereign Spanish LLMs.",
    "exp.alia.desc2": "Engineered multi-million-token Spanish corpus-curation pipelines for retrieval-augmented LLM training.",
    "exp.alia.desc3": "Contributing to RomaNET (European Commission): multilingual NLP pipelines for hate-speech detection targeting anti-Roma discourse.",
    "exp.alia.desc4": "Building a web platform for LLM-driven counter-narrative generation against antigypsyism with KAMIRA.",
    "exp.alia.desc5": "Defined model-evaluation protocols aligned with EU AI Act transparency requirements.",
    
    "exp.investigo.title": "LLM Researcher — Investigo Programme (NextGenerationEU)",
    "exp.investigo.company": "HITZ Center for Language Technology, University of Basque Country",
    "exp.investigo.date": "Nov 2024 – Oct 2025",
    "exp.investigo.desc1": "Designed and benchmarked a Parameter-Efficient Fine-Tuning protocol for Basque LLMs (QLoRA vs LoRA-Q).",
    "exp.investigo.desc2": "Evaluated Gemma-2-9B, Qwen-3-8B, and Latxa-3.1-8B; established NF4 with Double Quantization as the most robust configuration.",
    "exp.investigo.desc3": "Achieved >50% VRAM reduction, enabling 8B-parameter LLMs on consumer-grade GPUs (RTX 3090/4090).",
    
    "exp.initiation.title": "Research Assistant — Initiation to Research Grant",
    "exp.initiation.company": "SINAI Research Group, University of Jaén",
    "exp.initiation.date": "Sep 2023 – May 2024",
    "exp.initiation.desc": "Studied and implemented early RAG pipelines with FAISS, Sentence-BERT, and prompt-constrained generation over GPT-3.5 and LLaMA-2.",
    
    "exp.icaro.title": "NLP Research Intern — Ícaro Programme",
    "exp.icaro.company": "SINAI Research Group, University of Jaén",
    "exp.icaro.date": "Oct 2023 – Mar 2024",
    "exp.icaro.desc": "Applied research in NLP/ML; supported retrieval-augmented systems and corpus-engineering pipelines.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.programming": "Programming",
    "skills.llm": "LLM & GenAI",
    "skills.rag": "RAG & Retrieval",
    "skills.nlp": "NLP Tasks",
    "skills.frameworks": "Frameworks",
    "skills.infra": "Infrastructure & MLOps",

    // Publications
    "pub.title": "Publications & Research",
    "pub.semeval.title": "Sylloscope at SemEval-2026 Task 11",
    "pub.semeval.venue": "SemEval-2026 Workshop Task 11, co-located with ACL 2026",
    "pub.semeval.desc": "Designed a novel pipeline combining DeepSeek-enhanced knowledge distillation with Qwen models to decouple logical reasoning from belief-based inference in stereotyped-claim detection. Achieved 96.86% accuracy on Subtask 1 and 91.67% on Subtask 3.",

    // Projects
    "projects.title": "Weekend Projects",
    "projects.gender.title": "Gender Gap in Open-Source AI",
    "projects.gender.desc": "Full-stack data platform measuring gender representation in open-source AI: surfaced 5% women in the top 500 GitHub accounts and 7.4% across contributors to 20 major AI repositories (PyTorch, Transformers, LangChain, JAX, etc.). Built a tiered, fully offline gender-inference pipeline with no third-party gender-API calls.",
    "projects.gender.stack": "Python, GitHub REST/GraphQL, Next.js, Tailwind, D3.js",
    "projects.pergamia.title": "PergamIA — Multi-tenant Corporate RAG System",
    "projects.pergamia.desc": "Production-grade multi-tenant RAG with RBAC: hybrid search (BM25 + dense, RRF fusion), cross-encoder re-ranking, query rewriting, streaming, RAGAS evaluation and per-query audit logs.",
    "projects.pergamia.stack": "FastAPI, LangChain, ChromaDB, Ollama, React/Next.js, Docker",

    // Certifications
    "cert.title": "Certifications",
    "cert.langchain": "LangChain — Introduction to LangGraph (Python)",
    "cert.microsoft": "Microsoft — Applied Skills: Create a Generative AI Chat App",
    "cert.hf": "Hugging Face — Agents Course",
    "cert.anthropic1": "Anthropic — AI Fluency: Framework & Foundations",
    "cert.anthropic2": "Anthropic — Claude Code in Action",
    "cert.anthropic3": "Anthropic — Introduction to Model Context Protocol (MCP)",

    // Languages
    "lang.title": "Languages",
    "lang.spanish": "Spanish",
    "lang.spanish.level": "Native",
    "lang.english": "English",
    "lang.english.level": "Full Professional (Cambridge B2)",

    // Soft Skills
    "soft.title": "Soft Skills",
    "soft.cross": "Cross-cultural adaptability: research & study experience in Spain, Italy, Lithuania, Netherlands.",
    "soft.research": "Research mindset: design experiments, build benchmarks from scratch, iterate fast.",
    "soft.ethical": "Ethical commitment: human-in-the-loop and responsible-AI advocate.",
    "soft.discipline": "Discipline: competitive athlete (skiing, swimming, weightlifting).",

    // Contact
    "contact.title": "Get in touch",
    "contact.email": "Email",
    "contact.location": "Jaén, Spain",

    // Footer
    "footer.built": "Built with intention",
    "footer.rights": "© 2026 María Teresa Muñoz Martín",
    
    // Common
    "common.viewCode": "View Code",
    "common.visitSite": "Visit Site",
    "common.present": "Present",
  },
  es: {
    // Hero
    "hero.greeting": "Hola, soy",
    "hero.tagline": "Construyo sistemas inteligentes para la comprensión del lenguaje.",
    "hero.description": "Una apasionada Ingeniera Informática especializada en Procesamiento del Lenguaje Natural. Uso la IA con cuidado, siguiendo principios de Green AI y prácticas éticas, para construir sistemas que funcionan bien, son intuitivos y respetan tanto a los usuarios como al planeta.",
    "hero.cta.cv": "Descargar CV",
    "hero.cta.explore": "Explorar mi trabajo",
    "hero.role.computer": "Ingeniera Informática",
    "hero.role.llm": "ML & GenAI",
    "hero.role.nlp": "Procesamiento del Lenguaje Natural",
    
    // Navigation
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.publications": "Publicaciones",
    "nav.projects": "Proyectos Personales",
    "nav.certifications": "Certificaciones",
    "nav.languages": "Idiomas",
    "nav.contact": "Contacto",
    
    // Section titles
    "section.explore": "Explora mi universo",
    "section.explore.sub": "Haz clic en cada burbuja para descubrir más",
    
    // Education
    "edu.title": "Educación",
    "edu.erasmus.title": "Erasmus Mundus M.Sc. — Language & Communication Technologies",
    "edu.erasmus.institution": "Universidad del País Vasco (EHU) & Universidad de Groningen (RUG)",
    "edu.erasmus.date": "2024 – 2026",
    "edu.erasmus.desc": "Becaria Erasmus Mundus. Tesis: QLoRA vs LoRA-Q Pipelines for Basque: a Multi-Model Efficiency Analysis.",
    "edu.bsc.title": "Grado en Ingeniería Informática",
    "edu.bsc.institution": "Universidad de Jaén (UJA)",
    "edu.bsc.date": "2020 – 2024",
    "edu.bsc.gpa": "Nota media: 8.22 / 10",
    "edu.bsc.desc": "Erasmus+ en KTU, Lituania (2023–24). TFG: BoTCA: RAG chatbot para prevención de TCA. Nota: 9.8/10",
    "edu.bach.title": "Bachillerato Tecnológico",
    "edu.bach.institution": "IES Santa Catalina de Alejandría, Jaén",
    "edu.bach.date": "2018 – 2020",
    "edu.bach.desc": "Erasmus+ Roma 2019 — 1 de 2 estudiantes seleccionadas de entre 150 candidatas.",

    // Experience
    "exp.title": "Experiencia Laboral",
    "exp.alia.title": "Investigadora de Machine Learning — Proyecto ALIA",
    "exp.alia.company": "Grupo de investigación SINAI, Universidad de Jaén",
    "exp.alia.date": "Ene 2026 – Presente",
    "exp.alia.desc1": "Iniciativa estratégica del Gobierno de España para LLMs soberanos en español.",
    "exp.alia.desc2": "Desarrollo de pipelines de curación de corpus en español con millones de tokens para entrenamiento de LLMs con RAG.",
    "exp.alia.desc3": "Contribución a RomaNET (Comisión Europea): pipelines NLP multilingües para detección de discurso de odio contra la comunidad gitana.",
    "exp.alia.desc4": "Desarrollo de plataforma web para generación de contranarrativas contra el antigitanismo con KAMIRA.",
    "exp.alia.desc5": "Definición de protocolos de evaluación alineados con los requisitos de transparencia del EU AI Act.",
    
    "exp.investigo.title": "Investigadora de LLM — Programa Investigo (NextGenerationEU)",
    "exp.investigo.company": "Centro HITZ para Tecnología del Lenguaje, Universidad del País Vasco",
    "exp.investigo.date": "Nov 2024 – Oct 2025",
    "exp.investigo.desc1": "Diseño y evaluación de protocolo PEFT para LLMs en euskera (QLoRA vs LoRA-Q).",
    "exp.investigo.desc2": "Evaluación de Gemma-2-9B, Qwen-3-8B y Latxa-3.1-8B; establecimiento de NF4 con Double Quantization como configuración óptima.",
    "exp.investigo.desc3": "Reducción de >50% en VRAM, permitiendo LLMs de 8B parámetros en GPUs consumer (RTX 3090/4090).",
    
    "exp.initiation.title": "Asistente de Investigación — Beca de Iniciación a la Investigación",
    "exp.initiation.company": "Grupo de investigación SINAI, Universidad de Jaén",
    "exp.initiation.date": "Sep 2023 – May 2024",
    "exp.initiation.desc": "Estudio e implementación de pipelines RAG tempranos con FAISS, Sentence-BERT y generación con restricciones sobre GPT-3.5 y LLaMA-2.",
    
    "exp.icaro.title": "Becaria de Investigación NLP — Programa Ícaro",
    "exp.icaro.company": "Grupo de investigación SINAI, Universidad de Jaén",
    "exp.icaro.date": "Oct 2023 – Mar 2024",
    "exp.icaro.desc": "Investigación aplicada en NLP/ML; apoyo en sistemas RAG y pipelines de ingeniería de corpus.",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.programming": "Programación",
    "skills.llm": "LLM y GenAI",
    "skills.rag": "RAG y Retrieval",
    "skills.nlp": "Tareas NLP",
    "skills.frameworks": "Frameworks",
    "skills.infra": "Infraestructura y MLOps",

    // Publications
    "pub.title": "Publicaciones e Investigación",
    "pub.semeval.title": "Sylloscope at SemEval-2026 Task 11",
    "pub.semeval.venue": "SemEval-2026 Workshop Task 11, co-located with ACL 2026",
    "pub.semeval.desc": "Diseño de pipeline novedoso combinando destilación de conocimiento mejorada con DeepSeek y modelos Qwen para desacoplar razonamiento lógico de inferencia basada en creencias en detección de afirmaciones estereotipadas. 96.86% de precisión en Subtask 1 y 91.67% en Subtask 3.",

    // Projects
    "projects.title": "Proyectos Personales",
    "projects.gender.title": "Gender Gap in Open-Source AI",
    "projects.gender.desc": "Plataforma full-stack para medir la representación de género en IA open-source: 5% mujeres en los top 500 de GitHub y 7.4% en contribuidores de 20 repositorios principales de IA (PyTorch, Transformers, LangChain, JAX, etc.). Pipeline de inferencia de género completamente offline sin APIs de terceros.",
    "projects.gender.stack": "Python, GitHub REST/GraphQL, Next.js, Tailwind, D3.js",
    "projects.pergamia.title": "PergamIA — Sistema RAG Corporativo Multi-tenant",
    "projects.pergamia.desc": "RAG multi-tenant de grado producción con RBAC: búsqueda híbrida (BM25 + dense, fusión RRF), re-ranking con cross-encoder, reescritura de queries, streaming, evaluación RAGAS y logs de auditoría por query.",
    "projects.pergamia.stack": "FastAPI, LangChain, ChromaDB, Ollama, React/Next.js, Docker",

    // Certifications
    "cert.title": "Certificaciones",
    "cert.langchain": "LangChain — Introduction to LangGraph (Python)",
    "cert.microsoft": "Microsoft — Applied Skills: Create a Generative AI Chat App",
    "cert.hf": "Hugging Face — Agents Course",
    "cert.anthropic1": "Anthropic — AI Fluency: Framework & Foundations",
    "cert.anthropic2": "Anthropic — Claude Code in Action",
    "cert.anthropic3": "Anthropic — Introduction to Model Context Protocol (MCP)",

    // Languages
    "lang.title": "Idiomas",
    "lang.spanish": "Español",
    "lang.spanish.level": "Nativo",
    "lang.english": "Inglés",
    "lang.english.level": "Profesional Completo (Cambridge B2)",

    // Soft Skills
    "soft.title": "Habilidades Blandas",
    "soft.cross": "Adaptabilidad intercultural: experiencia de investigación y estudio en España, Italia, Lituania, Países Bajos.",
    "soft.research": "Mentalidad investigadora: diseñar experimentos, construir benchmarks desde cero, iterar rápido.",
    "soft.ethical": "Compromiso ético: defensora de human-in-the-loop e IA responsable.",
    "soft.discipline": "Disciplina: atleta competitiva (esquí, natación, halterofilia).",

    // Contact
    "contact.title": "Contacto",
    "contact.email": "Email",
    "contact.location": "Jaén, España",

    // Footer
    "footer.built": "Construido con intención",
    "footer.rights": "© 2026 María Teresa Muñoz Martín",
    
    // Common
    "common.viewCode": "Ver Código",
    "common.visitSite": "Visitar Web",
    "common.present": "Presente",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
