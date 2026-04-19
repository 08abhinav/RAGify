import { Nav } from "@/components/Nav"
import { BookOpen, Code2, Sparkles, Database } from "lucide-react"

export const Docs = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-gray-200">
      {/* background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <Nav />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 text-indigo-300 mb-3">
          <BookOpen className="w-5 h-5" />
          <span className="text-sm uppercase tracking-widest">Documentation</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Understand how <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">RAGify works</span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          A simple breakdown of architecture, flow, and how your data becomes intelligence.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-10">

        {/* What is RAG */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3 text-indigo-300">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl font-semibold">What is RAG?</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Retrieval-Augmented Generation (RAG) combines search + LLMs. Instead of relying only on model memory,
            it retrieves relevant chunks from your documents and generates grounded answers.
          </p>
        </div>

        {/* Architecture */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3 text-cyan-300">
            <Database className="w-5 h-5" />
            <h2 className="text-xl font-semibold">System Architecture</h2>
          </div>

          <div className="space-y-2 text-gray-300">
            <p>1. Document Upload → parsed into chunks</p>
            <p>2. Embeddings → stored in vector database</p>
            <p>3. Query → converted into embedding</p>
            <p>4. Similarity Search → top relevant chunks retrieved</p>
            <p>5. LLM (Gemini / GPT) → generates final answer</p>
          </div>
        </div>

        {/* API */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3 text-purple-300">
            <Code2 className="w-5 h-5" />
            <h2 className="text-xl font-semibold">API Endpoints</h2>
          </div>

          <div className="space-y-4 text-gray-300">
            <div>
              <p className="text-indigo-300">POST /api/upload</p>
              <p className="text-sm text-gray-400">Uploads and processes document into chunks</p>
            </div>

            <div>
              <p className="text-indigo-300">POST /api/ask</p>
              <p className="text-sm text-gray-400">Accepts doc_id + query and returns grounded answer</p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="relative text-center pt-14">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full" />
          </div>

            <p className="text-gray-400 mt-4 text-lg">
              You don’t search documents anymore. You *talk* to them.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-sm tracking-wide uppercase">
                Retrieval-Augmented Generation powered system
              </span>
            </div>
        </div>
      </section>
    </div>
  )
}
