import { Nav } from "@/components/Nav"
import { Button } from "@/components/ui/button"
import { FileText, Search, Zap } from "lucide-react"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-gray-300">
      <Nav />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-18 pb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Talk to your documents <br />
          <span className="text-indigo-400">like a human</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-10">
          Upload PDFs, DOCX, CSVs, or URLs and ask real questions.  
          <span className="text-white font-medium">
            {" "}RAGify answers using your data — not guesses.
          </span>
        </p>
        <Button
          size="lg"
          className="rounded-full px-12 py-6 text-xl bg-indigo-600 text-white
          hover:bg-indigo-500 hover:scale-110 transition-all"
          asChild
        >
          <Link to="/explore">✨ Try RAGify Now</Link>
        </Button>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature
            icon={<FileText className="w-10 h-10 text-indigo-400" />}
            title="Document Intelligence"
            desc="Understand long documents instantly with grounded AI answers."
          />

          <Feature
            icon={<Search className="w-10 h-10 text-indigo-400" />}
            title="Ask Anything"
            desc="Ask natural questions and get precise answers from your files."
          />

          <Feature
            icon={<Zap className="w-10 h-10 text-indigo-400" />}
            title="RAG Accuracy"
            desc="Powered by vector search + Gemini — no hallucinations."
          />
        </div>
      </section>

      {/* CTA
      <section className="border-t border-gray-800 py-20 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stop searching. <span className="text-indigo-400">Start thinking.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
          Built for students, researchers, and engineers who value time over page numbers.
        </p>

        
      </section> */}

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
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
  <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 
    border border-gray-700 rounded-2xl text-center
    hover:shadow-xl hover:shadow-indigo-600/30 transition-all"
  >
    <div className="flex justify-center mb-5">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
)

export default Home
