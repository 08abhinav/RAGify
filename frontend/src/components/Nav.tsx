import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border/30 backdrop-blur-sm bg-background/50 sticky top-0 z-50"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse-glow" />
          <Sparkles className="w-7 h-7 text-primary relative z-10" />
        </div>
        <span className="text-xl font-bold font-display gradient-text">
          RAGify
        </span>
      </Link>
    </motion.nav>
  );
};
