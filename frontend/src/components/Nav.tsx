import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4
      bg-white/5 backdrop-blur-xl border-b border-white/10
      shadow-lg shadow-black/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="w-7 h-7 text-indigo-300 relative z-10 group-hover:text-cyan-300 transition-colors" />
          </div>

          <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            RAGify
          </span>
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link to="/explore" className="hover:text-white transition-colors">
            Explore
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}