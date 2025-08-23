import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen w-full text-gray-300">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-white mb-6 tracking-tight">
          Welcome to <span className="text-indigo-400 drop-shadow-lg">RAGify</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl leading-relaxed text-gray-400 mb-8">
          <span className="font-semibold text-white">RAGify</span> is your personal{" "}
          <span className="text-indigo-400 font-semibold">AI-powered assistant</span> that
          lets you upload PDFs, DOCX, CSV files, or provide web links — and then
          interact with them using natural language questions.
        </p>
        <Button
          className="rounded-full px-10 text-lg bg-indigo-600 text-white font-semibold font-serif
          shadow-lg hover:bg-indigo-500 hover:scale-105 hover:shadow-indigo-700/50
          transition-all duration-300 ease-in-out"
        >
          <Link to="/explore">Explore</Link>
        </Button>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 py-6 mb-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-800/50 shadow-md rounded-2xl p-8 
        hover:shadow-indigo-700/50 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">
            📖 What is RAGify?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            RAGify is built using{" "}
            <span className="font-medium text-white">Retrieval-Augmented Generation</span>.
            It combines powerful search with{" "}
            <span className="text-indigo-400 font-medium">Google Gemini</span> to give you
            accurate, context-aware answers directly from your documents or websites.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-800/50 shadow-md rounded-2xl p-8 
        hover:shadow-purple-700/50 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">
            💡 What can you do here?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
            <li>Upload PDFs, DOCX, CSV files, or enter URLs</li>
            <li>Ask natural language questions about your data</li>
            <li>Get instant, AI-powered insights and summaries</li>
            <li>Use RAGify for study, research, or work automation</li>
          </ul>
        </div>
      </div>

      {/* Why RAGify */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-800/30 rounded-2xl p-12 shadow-lg mb-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          ✨ Why Choose RAGify?
        </h2>
        <p className="text-xl leading-relaxed text-gray-300">
          Built with{" "}
          <span className="text-white font-semibold">Retrieval-Augmented Generation (RAG)</span>{" "}
          and powered by{" "}
          <span className="text-indigo-400 font-semibold">Google Gemini</span>,{" "}
          <span className="text-white font-semibold">RAGify</span> ensures your answers are not only accurate  
          but also context-aware, fast, and reliable.  
          <br /><br />
          Perfect for{" "}
          <span className="text-indigo-300 font-semibold">students and researchers</span>{" "}
          who want smarter ways to work with knowledge — without wasting hours scrolling through documents.
        </p>
      </div>
    </div>
  );
};
