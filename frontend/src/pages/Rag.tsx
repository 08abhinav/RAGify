import { useState } from "react"
import axios from "axios"
import { Nav } from "@/components/Nav"
import { toast } from "react-toastify"
import { Upload, Send, FileText, Sparkles } from "lucide-react"

const steps = [
  "Searching your document...",
  "Extracting relevant context...",
  "Generating grounded answer..."
]

export const Rag = () => {
  const [file, setFile] = useState<File | null>(null)
  const [docId, setDocId] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)

  const handleUpload = async () => {
    if (!file) {
      toast.error("Select a file first")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await axios.post("http://127.0.0.1:8080/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })

      if (res.status === 200) {
        setDocId(res.data.doc_id)
        toast.success("Document ready for exploration")
      }
    } catch (err) {
      toast.error("Upload failed")
    }
  }

  const handleAsk = async () => {
    if (!docId) {
      toast.error("Upload a document first")
      return
    }

    if (!query.trim()) return

    setLoading(true)
    setAnswer("")
    setStepIndex(0)

    let interval: any

    try {
      interval = setInterval(() => {
        setStepIndex(prev => (prev + 1) % steps.length)
      }, 1000)

      const res = await axios.post("http://127.0.0.1:8080/api/ask", {
        doc_id: docId,
        query
      })

      if (res.status === 200) {
        setAnswer(res.data.answer)
        toast.success("Answer ready")
      }
    } catch (err) {
      toast.error("Failed to get answer")
    } finally {
      clearInterval(interval)
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-gray-200">
      {/* background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <Nav />

      <div className="max-w-5xl mx-auto px-6 py-28 space-y-10">
        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-indigo-300 mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest">Workspace</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Chat with your <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">documents</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Upload a file and ask questions like you would ask a human expert.
          </p>
        </div>

        {/* UPLOAD CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Upload className="w-5 h-5 text-indigo-300" />
            <h2 className="text-xl font-semibold">Upload Document</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="file"
              accept=".pdf,.docx,.csv"
              onChange={e => setFile(e.target.files?.[0] || null)}
              className="text-gray-300 file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
            />

            <button
              onClick={handleUpload}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white hover:scale-105 transition-all cursor-pointer"
            >
              Upload
            </button>
          </div>

          {docId && (
            <p className="text-green-400 mt-3 text-sm">
              Document ready
            </p>
          )}
        </div>

        {/* QUERY CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-white">
            <FileText className="w-5 h-5 text-cyan-300" />
            <h2 className="text-xl font-semibold">Ask Anything</h2>
          </div>

          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Ask something from your document..."
            className="w-full h-28 p-4 rounded-xl bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={!docId}
          />

          <button
            onClick={handleAsk}
            disabled={loading || !docId}
            className="mt-4 flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
            {loading ? steps[stepIndex] : "Ask"}
          </button>

          {loading && (
            <div className="mt-4 text-indigo-300 animate-pulse">
              {steps[stepIndex]}
            </div>
          )}
        </div>

        {/* ANSWER */}
        {answer && (
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-green-400 mb-3">Answer</h3>
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </div>
  )
}
