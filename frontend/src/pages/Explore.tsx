import { Nav } from '@/components/Nav'
import { Button } from "@/components/ui/button"
import { FileText, Search, MessageSquare } from "lucide-react"
import { Link } from 'react-router-dom'
import { steps } from '@/utils/Steps'

export const Explore = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br text-gray-300'>
      <Nav/>

      {/* Hero */}
      <div className='flex flex-col items-center justify-center py-20 px-6 text-center'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight'>
          ⚡ Reading Made Smarter with <span className="text-indigo-400">RAGify</span>
        </h1>
        
        <p className='max-w-3xl text-lg md:text-xl text-gray-400'>
          Upload your <span className="text-white font-semibold">PDFs, DOCs, CSVs, or URLs </span>  
          and let <span className="text-indigo-400 font-semibold">AI powered by Google Gemini </span>  
          summarize, answer questions, and give you actionable insights instantly.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto px-6 py-16">
        <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-700/40 rounded-2xl 
          hover:shadow-xl hover:shadow-purple-700/40 transition duration-300 ease-in-out text-center">
          <FileText className="w-12 h-12 text-indigo-400 mx-auto mb-4"/>
          <h3 className="text-xl font-bold text-white mb-2">Summarization</h3>
          <p className="text-gray-400">Turn long documents into clear, concise summaries in seconds.</p>
        </div>
        
        <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-700/40 rounded-2xl 
          hover:shadow-xl hover:shadow-purple-700/40 transition duration-300 ease-in-out text-center">
          <Search className="w-12 h-12 text-indigo-400 mx-auto mb-4"/>
          <h3 className="text-xl font-bold text-white mb-2">Ask Anything</h3>
          <p className="text-gray-400">Query your files directly and get precise answers fast.</p>
        </div>
        
        <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-700/40 rounded-2xl 
          hover:shadow-xl hover:shadow-purple-700/40 transition duration-300 ease-in-out text-center">
          <MessageSquare className="w-12 h-12 text-indigo-400 mx-auto mb-4"/>
          <h3 className="text-xl font-bold text-white mb-2">Insights</h3>
          <p className="text-gray-400">Uncover hidden patterns, key takeaways, and structured knowledge.</p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-20 px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔍 How RAGify Works
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-400">
            Reading large documents has never been easier.  
            Just follow these three simple steps to turn your files into instant knowledge.
          </p>
        </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md 
                border border-gray-700/60 rounded-2xl p-8 shadow-lg hover:scale-105 
                hover:shadow-indigo-600/40 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white text-xl font-bold mb-6">
                  {step.id}
                </div>
                <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center mt-16">
            <Button
              className="rounded-full px-10 py-5 text-xl bg-indigo-600 text-white font-semibold shadow-lg
              hover:bg-indigo-500 hover:scale-110 hover:shadow-indigo-700/50 
              transition-all duration-300 ease-in-out"
            >
              <Link to="/rag">✨ Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
  )
}
