import { Nav } from "@/components/Nav"
import { Button } from "@/components/ui/button"
import { FileText, Search, Zap } from "lucide-react"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-gray-200">
      {/* Background Glow Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px]" />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[120px]" />

      <Nav />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-28">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl px-8 py-10 md:px-14 md:py-14 shadow-2xl shadow-black/40 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Talk to your documents <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              like a human
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Upload PDFs, DOCX, CSVs and ask real questions.{" "}
            <span className="text-white font-medium">
              RAGify answers using your data — not hallucinations.
            </span>
          </p>

          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white
            hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            asChild
          >
            <Link to="/explore">✨ Explore RAGify</Link>
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<FileText className="w-10 h-10 text-indigo-300" />}
            title="Document Intelligence"
            desc="Understand long documents instantly with grounded AI answers."
          />

          <Feature
            icon={<Search className="w-10 h-10 text-cyan-300" />}
            title="Ask Anything"
            desc="Ask natural questions and get precise answers from your files."
          />

          <Feature
            icon={<Zap className="w-10 h-10 text-purple-300" />}
            title="RAG Accuracy"
            desc="Powered by vector search + LLMs — designed to reduce hallucinations."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500 backdrop-blur-md bg-white/5">
        © 2025 RAGify — Retrieval-Augmented Intelligence
      </footer>
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
  <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
    hover:bg-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-indigo-500/20">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 rounded-2xl" />

    <div className="relative flex flex-col items-center text-center">
      <div className="mb-5 p-3 rounded-xl bg-white/5 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
)

export default Home
