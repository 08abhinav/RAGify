import { useState } from "react"
import axios from "axios"
import { Nav } from "@/components/Nav"
import { toast } from "react-toastify"

export const Rag = () => {
  const [file, setFile] = useState<File | null>(null)
  const [docId, setDocId] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      if (res.status === 200) {
        setDocId(res.data.doc_id)
        toast.success("File uploaded successfully!")
      }
    } catch (err) {
      console.error(err)
      toast.error("Upload failed")
    }
  }

  const handleAsk = async () => {
    if (!docId) {
      toast.error("Upload file first")
      return
    }
    
    setLoading(true)
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/ask", {
        doc_id: docId,
        query,
      })
      if (res.status === 200) {
        setAnswer(res.data.answer)
        toast.success("Got the answer!")
      }
    } catch (err) {
      console.error(err)
      toast.error("Query failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 px-6 py-28">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Upload Section */}
          <div className="bg-gray-800/40 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 font-serif">📂 Start Uploading</h2>
            <p className="text-gray-400 mb-4">
              Upload your PDF, DOCX, or CSV file to begin exploring it with AI.
            </p>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept=".pdf,.docx,.csv"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="block text-gray-300 file:mr-4 file:py-2 file:px-4 
                           file:rounded-lg file:border-0 
                           file:bg-blue-600 file:text-white 
                           hover:file:bg-blue-700 hover:cursor-pointer"
              />
              <button
                onClick={handleUpload}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg hover:cursor-pointer"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Query Section */}
          <div className="bg-gray-800/40 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">🤖 Ask Your Document</h2>
            {!docId ? (
              <p className="text-gray-500">Upload a file first to unlock this section.</p>
            ) : (
              <>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question about your document..."
                  className="w-full h-28 p-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                />
                <button
                  onClick={handleAsk}
                  disabled={loading}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
                >
                  {loading ? "Thinking..." : "Ask"}
                </button>
                {answer && (
                  <div className="mt-6 p-4 border border-gray-700 rounded-lg bg-gray-900/70 text-gray-200">
                    <strong className="text-green-400">Answer:</strong>
                    <p className="mt-2">{answer}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
