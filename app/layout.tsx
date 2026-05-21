import type { Metadata } from 'next'
import { Inter, Lora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'María Teresa Muñoz Martín · ML Engineer & NLP Researcher',
  description: 'Machine Learning Engineer specializing in LLMs, GenAI, and Natural Language Processing. Passionate about Green AI, responsible AI, and human-in-the-loop systems.',
  keywords: ['Machine Learning', 'NLP', 'LLM', 'GenAI', 'RAG', 'Green AI', 'Researcher'],
  authors: [{ name: 'María Teresa Muñoz Martín' }],
  openGraph: {
    title: 'María Teresa Muñoz Martín · ML Engineer & NLP Researcher',
    description: 'Machine Learning Engineer specializing in LLMs, GenAI, and Natural Language Processing.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: 'favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: 'icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: 'apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${lora.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
