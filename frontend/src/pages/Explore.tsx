import { Nav } from '@/components/Nav'
import { Button } from "@/components/ui/button"
import { FileText, Search, MessageSquare, Sparkles } from "lucide-react"
import { Link } from 'react-router-dom'
import { steps } from '@/utils/Steps'

export const Explore = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-gray-200">
      {/* background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-600/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <Nav />

      {/* HERO (different from home: product + interactive feel) */}
      <section className="relative px-6 pt-28 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-center gap-2 text-indigo-300 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest">Explore Mode</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Turn documents into
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"> intelligence </span>
              instantly
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              Stop reading pages. Start asking questions. RAGify extracts meaning,
              context, and answers directly from your files.
            </p>

            {/* moved CTA UP */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:scale-105 transition-all"
                asChild
              >
                <Link to="/rag">🚀 Try It Now</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-5 border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/docs">Learn How It Works</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT MOCK VISUAL */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <p className="text-sm text-gray-400 mb-4">Live Example</p>

              <div className="space-y-3">
                <div className="bg-black/40 p-3 rounded-lg text-gray-300">
                  What is this document about?
                </div>
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg text-gray-200">
                  It discusses retrieval augmented generation and how it improves AI accuracy.
                </div>

                <div className="bg-black/40 p-3 rounded-lg text-gray-300">
                  Summarize key insights
                </div>
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg text-gray-200">
                  Focus on grounding LLM outputs using vector search over documents.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES (more engaging wording) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What you can actually do
          </h2>
          <p className="text-gray-400 text-lg">
            Not just search. Real understanding from your data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Feature
            icon={<FileText className="w-10 h-10 text-indigo-300" />}
            title="Compress Knowledge"
            desc="Reduce 100 pages into key decisions and insights instantly."
          />
          <Feature
            icon={<Search className="w-10 h-10 text-cyan-300" />}
            title="Ask Like a Human"
            desc="No keywords needed — just ask naturally and get exact answers."
          />
          <Feature
            icon={<MessageSquare className="w-10 h-10 text-purple-300" />}
            title="Reason Over Data"
            desc="Extract patterns, not just text matches from documents."
          />
        </div>
      </section>

      {/* HOW IT WORKS (more narrative + visual hierarchy) */}
      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three steps to clarity
          </h2>
          <p className="text-gray-400 text-lg">
            Upload → Understand → Act
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map(step => (
            <div
              key={step.id}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
              hover:bg-white/10 hover:scale-105 transition-all shadow-lg"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                {step.id}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA (stronger urgency) */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop reading. Start understanding.
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Your documents already contain answers. RAGify just reveals them.
          </p>

          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:scale-105 transition-all"
            asChild
          >
            <Link to="/rag">⚡ Launch Workspace</Link>
          </Button>
        </div>
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
  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl
    hover:bg-white/10 hover:shadow-indigo-500/20 transition-all">
    <div className="mb-5">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
)
