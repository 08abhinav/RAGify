import { Nav } from '@/components/Nav'
import { Button } from "@/components/ui/button"
import { FileText, Search, MessageSquare } from "lucide-react"
import { Link } from 'react-router-dom'
import { steps } from '@/utils/Steps'

export const Explore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-gray-300">
      <Nav />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Explore <span className="text-indigo-400">RAGify</span>
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-400">
          Upload documents, ask natural questions, and extract real insights —
          powered by Retrieval-Augmented Generation.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Feature
            icon={<FileText className="w-12 h-12 text-indigo-400" />}
            title="Summarization"
            desc="Turn long documents into clear, concise summaries in seconds."
          />
          <Feature
            icon={<Search className="w-12 h-12 text-indigo-400" />}
            title="Ask Anything"
            desc="Query your files directly and get precise, grounded answers."
          />
          <Feature
            icon={<MessageSquare className="w-12 h-12 text-indigo-400" />}
            title="Deep Insights"
            desc="Uncover hidden patterns, key takeaways, and structured knowledge."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-28">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔍 How RAGify Works
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-gray-400">
            Three simple steps to turn raw documents into instant intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map(step => (
            <div
              key={step.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800
              border border-gray-700 rounded-2xl p-8 shadow-lg
              hover:scale-105 hover:shadow-indigo-600/40 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full
                bg-indigo-600 text-white text-xl font-bold mb-6">
                {step.id}
              </div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-gray-800 py-20 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to use your documents <span className="text-indigo-400">intelligently?</span>
        </h2>

        <Button
          size="lg"
          className="rounded-full px-12 py-6 text-xl bg-indigo-600 text-white
          hover:bg-indigo-500 hover:scale-110 transition-all"
          asChild
        >
          <Link to="/rag">✨ Get Started</Link>
        </Button>
      </section>
    </div>
  )
}

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) => (
  <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800
    border border-gray-700 rounded-2xl text-center
    hover:shadow-xl hover:shadow-indigo-600/30 transition-all"
  >
    <div className="flex justify-center mb-5">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
)
