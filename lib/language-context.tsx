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
    "hero.tagline": "I like building AI that makes life lighter, not just smarter.",
    "hero.description": "I'm a Computer Engineer specialised in NLP, LLMs and Generative AI. We live in a world that moves fast and demands answers faster, and that's exactly where I want AI to make a difference. Not by replacing people, but by helping them: making the hard stuff easier, cutting through the noise, and turning 'I don't know where to start' into a clear next step. I build with responsibility at the core: ethical, sustainable, human-centred. With curiosity, perseverance, and the right technology, there's very little we can't figure out.",
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
    "nav.professional": "Professional Projects",
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
    "edu.bach.sub.title": "Erasmus+ Program",
    "edu.bach.sub.desc": "Erasmus+ Roma 2019 — 1 of 2 students selected from 150 candidates.",
    "edu.bsc.sub.title": "Erasmus+ Exchange",
    "edu.bsc.sub.desc": "Exchange at Vilnius University (Kaunas Faculty), Lithuania (2023–24).",
    "edu.bsc.sub.thesis": "Thesis: BoTCA: RAG chatbot for eating-disorder prevention. Grade: 9.8/10",
    "edu.erasmus.sub1.title": "First Year (2024–25)",
    "edu.erasmus.sub1.institution": "University of Basque Country (EHU)",
    "edu.erasmus.sub2.title": "Second Year (2025–26)",
    "edu.erasmus.sub2.institution": "University of Groningen (RUG)",
    "edu.erasmus.thesis": "Thesis: QLoRA vs LoRA-Q Pipelines for Basque: a Multi-Model Efficiency Analysis.",

    // Experience
    "exp.title": "Work Experience",
    "exp.alia.title": "Machine Learning Researcher",
    "exp.alia.company": "SINAI Research Group, University of Jaén",
    "exp.alia.date": "Jan 2026 – Present",
    "exp.alia.desc1": "Spanish Government strategic initiative for sovereign Spanish LLMs.",
    "exp.alia.desc2": "Engineered multi-million-token Spanish corpus-curation pipelines for retrieval-augmented LLM training.",
    "exp.alia.desc3": "Contributing to RomaNET (European Commission): multilingual NLP pipelines for hate-speech detection targeting anti-Roma discourse.",
    "exp.alia.desc4": "Building a web platform for LLM-driven counter-narrative generation against antigypsyism with KAMIRA.",
    "exp.alia.desc5": "Defined model-evaluation protocols aligned with EU AI Act transparency requirements.",
    
    "exp.investigo.title": "LLM Researcher",
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
    "skills.programming": "Programming Languages",
    "skills.databases": "Databases",
    "skills.llm": "LLM & GenAI",
    "skills.rag": "RAG & Retrieval",
    "skills.nlp": "NLP Tasks",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.infra": "Infrastructure & MLOps",

    // Publications
    "pub.title": "Publications & Research",
    "pub.semeval.title": "Sylloscope at SemEval-2026 Task 11",
    "pub.semeval.venue": "SemEval-2026 Workshop Task 11, co-located with ACL 2026",
    "pub.semeval.desc": "Designed a novel pipeline combining DeepSeek-enhanced knowledge distillation with Qwen models to decouple logical reasoning from belief-based inference in stereotyped-claim detection. Achieved 96.86% accuracy on Subtask 1 and 91.67% on Subtask 3.",
    "pub.semeval.diagram.label": "Paper Diagram — System Architecture",
    "pub.semeval.diagram.caption": "Figure: Sylloscope pipeline architecture — DeepSeek-enhanced knowledge distillation combined with Qwen models for stereotyped-claim detection.",
    "pub.legal.title": "Performant Lightweight Encoders for Spanish in the Legal and Administrative Domains",
    "pub.legal.venue": "Journal of Natural Language Processing (SEPLN 2026), Issue 77",
    "pub.legal.desc": "Introduced two lightweight, domain-adapted models (bi-encoder and cross-encoder) for Spanish legal and administrative information retrieval built on the MrBERT-es backbone. Utilized a synthetic data generation pipeline combined with a six-phase curriculum learning strategy and positive-aware mining. Outperformed larger general-purpose models like bge-m3 and Qwen3-Embedding on specialized benchmarks, demonstrating that targeted domain adaptation and careful training design can effectively compensate for model scale.",

    // Professional Projects
    "pro.title": "Research & Development Projects",
    "pro.alia.title": "ALIA (National Strategic AI Initiative)",
    "pro.alia.subtitle": "Sovereign Spanish LLMs — SINAI Research Group, UJA",
    "pro.alia.desc": "Direct contribution to ALIA, the Spanish Government's strategic initiative for sovereign Spanish Language Models (LLMs). Developed within the SINAI Research Group at the University of Jaén (UJA).\nDesigned and implemented large-scale Spanish corpus-curation pipelines with millions of tokens for retrieval-augmented LLM training, integrating deduplication, language identification and toxicity filtering.\nDeveloped high-precision translation workflows (Spanish-English) and quality control to produce cross-lingual benchmarking corpora.\nDefined model-evaluation protocols aligned with EU AI Act transparency requirements and responsible-AI standards (bias and toxicity probes).\nParallel contribution to competitive research projects (CONSENSO, MODERATES, SocialTOX) generating publication-ready datasets and trained models.",
    "pro.romanet.title": "RomaNET (European Commission — CERV)",
    "pro.romanet.subtitle": "Multilingual NLP for anti-Roma hate-speech detection",
    "pro.romanet.desc": "Project funded by the European Commission (CERV-2024-CHAR-LITI-SPEECH) focused on developing multilingual NLP pipelines for detecting hate speech and hate crimes specifically targeting the Roma community (antigypsyism).\nTechnical development and deployment of an AI-powered web platform (\"AKANAI\") designed for the instant generation of positive counter-narratives against hate speech.",
    "pro.kamira.title": "KAMIRA Project (Counter-narratives against Antigypsyism)",
    "pro.kamira.subtitle": "AI-powered platform co-developed with civil society",
    "pro.kamira.desc": "Direct collaboration with the National Federation of Roma Women's Associations (KAMIRA) to build a specific web platform aimed at mitigating structural hate through AI.\nUnlike RomaNET, which is a general multilingual European detection and generation research framework, KAMIRA is a direct-impact application in the Spanish national ecosystem, co-developed hand-in-hand with the associative fabric (human-in-the-loop).\nDevelopment and engineering of a counter-narrative generation system using advanced prompt-engineering techniques and information-retrieval-based grounding to ensure content veracity.\nRigorous implementation of content-safety guardrails to prevent hallucinations or harmful responses in sensitive human-rights environments.",
    "pro.investigo.title": "Investigo Programme — HITZ Center (NextGenerationEU)",
    "pro.investigo.subtitle": "Efficient LLM fine-tuning for low-resource languages",
    "pro.investigo.desc": "Research stay at the prestigious HITZ (Language Technology Center of the University of the Basque Country — EHU) under the Investigo Programme, from which my Master's Thesis directly derived, focused on the efficiency of language models in low-resource languages.\nDesign and benchmarking of an efficient Parameter-Efficient Fine-Tuning (PEFT) protocol for Basque LLMs, comparing QLoRA workflows against LoRA-Q approaches (full-precision adaptation followed by post-hoc compression) in Int8, FP4 and NF4 precisions.\nComparative evaluation across three architectures: Gemma-2-9B, Qwen-3-8B and the Basque-specialised Latxa-3.1-8B model, determining that NF4 with Double Quantization is the most robust format in linguistic quality.\nAchievement of a >50% reduction in VRAM usage, enabling 8B-parameter LLMs to run on consumer GPUs (RTX 3090/4090) instead of costly data-center infrastructure, optimising inference latency and promoting Green AI and sustainability.",

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
    "cert.credential": "Show Credential",
    "cert.langchain": "LangChain — Introduction to LangGraph (Python)",
    "cert.microsoft": "Microsoft — Applied Skills: Create a Generative AI Chat App",
    "cert.hf": "Hugging Face — Agents Course",
    "cert.anthropic1": "Anthropic — AI Fluency: Framework & Foundations",
    "cert.anthropic2": "Anthropic — Claude Code in Action",
    "cert.anthropic3": "Anthropic — Introduction to Model Context Protocol (MCP)",
    "cert.anthropic4": "Anthropic — Introduction to Agent Skills",
    // Languages
    "lang.title": "Languages",
    "lang.spanish": "Spanish",
    "lang.spanish.level": "Native",
    "lang.english": "English",
    "lang.english.level": "Full Professional (Cambridge B2)",

    // Soft Skills
    "soft.title": "Soft Skills",
    "soft.cross": "Cross-cultural adaptability: research & study experience in Spain, Italy, Lithuania and the Netherlands.",
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
    "common.visitPlatform": "Access Platform",
    "common.present": "Present",
  },
  es: {
    // Hero
    "hero.greeting": "Hola, soy",
    "hero.tagline": "Me gusta construir IA que hace la vida más ligera, no solo más inteligente.",
    "hero.description": "Soy Ingeniera Informática especializada en PLN, LLMs e IA Generativa. Vivimos en un mundo que va rápido y exige respuestas aún más rápidas, y ahí es exactamente donde quiero que la IA marque la diferencia. No reemplazando a las personas, sino ayudándolas: haciendo que lo difícil sea más fácil, eliminando barreras, y convirtiendo el 'no sé por dónde empezar' en un siguiente paso claro. Construyo con responsabilidad como base: IA ética, sostenible y centrada en las personas. Con curiosidad, perseverancia y la tecnología adecuada, hay muy poco que no podamos resolver.",
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
    "nav.professional": "Proyectos Profesionales",
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
    "edu.bach.sub.title": "Programa Erasmus+",
    "edu.bach.sub.desc": "Erasmus+ Roma 2019 — 1 de 2 estudiantes seleccionados de 150 candidatos.",
    "edu.bsc.sub.title": "Intercambio Erasmus+",
    "edu.bsc.sub.desc": "Intercambio en Vilnius University (Kaunas Faculty), Lituania (2023–24).",
    "edu.bsc.sub.thesis": "TFG: BoTCA: RAG chatbot para prevención de TCA. Nota: 9.8/10",
    "edu.erasmus.sub1.title": "Primer Año (2024–25)",
    "edu.erasmus.sub1.institution": "Universidad del País Vasco (EHU)",
    "edu.erasmus.sub2.title": "Segundo Año (2025–26)",
    "edu.erasmus.sub2.institution": "Universidad de Groningen (RUG)",
    "edu.erasmus.thesis": "Tesis: QLoRA vs LoRA-Q Pipelines for Basque: a Multi-Model Efficiency Analysis.",

    // Experience
    "exp.title": "Experiencia Laboral",
    "exp.alia.title": "Investigadora de Machine Learning",
    "exp.alia.company": "Grupo de investigación SINAI, Universidad de Jaén",
    "exp.alia.date": "Ene 2026 – Presente",
    "exp.alia.desc1": "Iniciativa estratégica del Gobierno de España para LLMs soberanos en español.",
    "exp.alia.desc2": "Desarrollo de pipelines de curación de corpus en español con millones de tokens para entrenamiento de LLMs con RAG.",
    "exp.alia.desc3": "Contribución a RomaNET (Comisión Europea): pipelines NLP multilingües para detección de discurso de odio contra la comunidad gitana.",
    "exp.alia.desc4": "Desarrollo de plataforma web para generación de contranarrativas contra el antigitanismo con KAMIRA.",
    "exp.alia.desc5": "Definición de protocolos de evaluación alineados con los requisitos de transparencia del EU AI Act.",
    
    "exp.investigo.title": "Investigadora de LLM",
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
    "skills.programming": "Lenguajes de Programación",
    "skills.databases": "Bases de Datos",
    "skills.llm": "LLM y GenAI",
    "skills.rag": "RAG y Retrieval",
    "skills.nlp": "Tareas NLP",
    "skills.frameworks": "Frameworks y Librerías",
    "skills.infra": "Infraestructura y MLOps",

    // Publications
    "pub.title": "Publicaciones e Investigación",
    "pub.semeval.title": "Sylloscope at SemEval-2026 Task 11",
    "pub.semeval.venue": "SemEval-2026 Workshop Task 11, co-located with ACL 2026",
    "pub.semeval.desc": "Diseño de pipeline novedoso combinando destilación de conocimiento mejorada con DeepSeek y modelos Qwen para desacoplar razonamiento lógico de inferencia basada en creencias en detección de afirmaciones estereotipadas. 96.86% de precisión en Subtask 1 y 91.67% en Subtask 3.",
    "pub.semeval.diagram.label": "Diagrama del Paper — Arquitectura del Sistema",
    "pub.semeval.diagram.caption": "Figura: Arquitectura del pipeline Sylloscope — destilación de conocimiento mejorada con DeepSeek combinada con modelos Qwen para detección de afirmaciones estereotipadas.",
    "pub.legal.title": "Performant Lightweight Encoders for Spanish in the Legal and Administrative Domains",
    "pub.legal.venue": "Revista de Procesamiento del Lenguaje Natural (SEPLN 2026), Número 77",
    "pub.legal.desc": "Se presentaron dos modelos ligeros adaptados al dominio (bi-encoder y cross-encoder) para recuperación de información legal y administrativa en español, construidos sobre el backbone MrBERT-es. Se utilizó un pipeline de generación sintética de datos combinado con una estrategia de aprendizaje curricular de seis fases y minería consciente de positivos. Superaron a modelos de propósito general más grandes como bge-m3 y Qwen3-Embedding en benchmarks especializados, demostrando que la adaptación de dominio dirigida y el diseño cuidadoso del entrenamiento pueden compensar eficazmente la escala del modelo.",

    // Professional Projects
    "pro.title": "Proyectos de Investigación y Desarrollo",
    "pro.alia.title": "ALIA (Iniciativa Estratégica Nacional de IA)",
    "pro.alia.subtitle": "LLMs soberanos en español — Grupo SINAI, UJA",
    "pro.alia.desc": "Contribución directa a ALIA, la iniciativa estratégica del Gobierno de España para el desarrollo de Modelos de Lenguaje (LLMs) soberanos en español. Desarrollado dentro del Grupo de Investigación SINAI de la Universidad de Jaén (UJA).\nDiseño e implementación a gran escala de pipelines de curación de corpus en español con millones de tokens para el entrenamiento de LLMs con RAG, integrando desduplicación, identificación de idioma y filtrado de toxicidad.\nDesarrollo de flujos de trabajo de traducción de alta precisión (Español-Inglés) y control de calidad para producir corpus paralelos de evaluación comparativa cross-lingual.\nDefinición de protocolos de evaluación de modelos alineados con los requisitos de transparencia de la Ley de IA de la UE y estándares de IA responsable (probes de sesgo y toxicidad).\nContribución paralela a proyectos de investigación competitivos asociados (CONSENSO, MODERATES, SocialTOX) generando conjuntos de datos listos para publicación y modelos entrenados.",
    "pro.romanet.title": "RomaNET (Comisión Europea — CERV)",
    "pro.romanet.subtitle": "NLP multilingüe para detección de discurso de odio antigitano",
    "pro.romanet.desc": "Proyecto financiado por la Comisión Europea (CERV-2024-CHAR-LITI-SPEECH) enfocado en el desarrollo de pipelines de PLN multilingües para la detección de discurso y delitos de odio dirigidos específicamente contra la comunidad romaní (antigitanismo).\nDesarrollo técnico y despliegue de una plataforma web impulsada por IA (\"AKANAI\") diseñada para la generación instantánea de contranarrativas positivas frente al discurso de odio.",
    "pro.kamira.title": "Proyecto KAMIRA (Contranarrativas contra el Antigitanismo)",
    "pro.kamira.subtitle": "Plataforma impulsada por IA codesarrollada con la sociedad civil",
    "pro.kamira.desc": "Colaboración directa con la Federación Nacional de Asociaciones de Mujeres Gitanas (KAMIRA) para construir una plataforma web específica orientada a la mitigación del odio estructural mediante IA.\nMientras que RomaNET es un framework multilingüe europeo de detección y generación general centrado en la investigación académica, KAMIRA es una aplicación de impacto directo en el ecosistema nacional español, codesarrollada mano a mano con el tejido asociativo (human-in-the-loop).\nDesarrollo e ingeniería del sistema de generación de contranarrativas utilizando técnicas avanzadas de ingeniería de prompts y grounding basado en recuperación de información para asegurar la veracidad del contenido.\nImplementación rigurosa de filtros de seguridad de contenido (content-safety guardrails) para evitar alucinaciones o respuestas dañinas en entornos sensibles de derechos humanos.",
    "pro.investigo.title": "Programa Investigo — HITZ Center (NextGenerationEU)",
    "pro.investigo.subtitle": "Ajuste fino eficiente de LLM para lenguas de bajos recursos",
    "pro.investigo.desc": "Estancia de investigación en el prestigioso HITZ (Centro de Tecnología de la Lengua de la Universidad del País Vasco — EHU) bajo el Programa Investigo, del cual derivó directamente mi Trabajo de Fin de Máster (TFM) enfocado en la eficiencia de modelos de lenguaje en lenguas de bajos recursos.\nDiseño y benchmarking de un protocolo de ajuste fino eficiente (PEFT) para LLMs en euskera, comparando flujos de trabajo QLoRA contra enfoques LoRA-Q (adaptación en precisión completa seguida de compresión post-hoc) en precisiones Int8, FP4 y NF4.\nEvaluación y análisis comparativo sobre tres arquitecturas: Gemma-2-9B, Qwen-3-8B y el modelo especializado en euskera Latxa-3.1-8B, determinando que NF4 con Doble Cuantización es el formato más robusto en calidad lingüística.\nLogro de una reducción de más del 50% en el uso de VRAM, permitiendo que LLMs de 8B de parámetros se ejecuten en GPUs de consumo (RTX 3090/4090) en lugar de costosas infraestructuras de centros de datos, optimizando la latencia de inferencia y promoviendo una IA Verde (Green AI) y sostenible.",

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
    "cert.credential": "Mostrar Credencial",
    "cert.langchain": "LangChain — Introduction to LangGraph (Python)",
    "cert.microsoft": "Microsoft — Applied Skills: Create a Generative AI Chat App",
    "cert.hf": "Hugging Face — Agents Course",
    "cert.anthropic1": "Anthropic — AI Fluency: Framework & Foundations",
    "cert.anthropic2": "Anthropic — Claude Code in Action",
    "cert.anthropic3": "Anthropic — Introduction to Model Context Protocol (MCP)",
    "cert.anthropic4": "Anthropic — Introduction to Agent Skills",

    // Languages
    "lang.title": "Idiomas",
    "lang.spanish": "Español",
    "lang.spanish.level": "Nativo",
    "lang.english": "Inglés",
    "lang.english.level": "Profesional Completo (Cambridge B2)",

    // Soft Skills
    "soft.title": "Habilidades Blandas",
    "soft.cross": "Adaptabilidad intercultural: experiencia de investigación y estudio en España, Italia, Lituania y Países Bajos.",
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
    "common.visitPlatform": "Acceder a Plataforma",
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
