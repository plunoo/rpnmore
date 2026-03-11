import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full mb-8"
        >
          <Sparkles className="text-emerald-500 dark:text-emerald-400" size={16} />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Rebranded & AI-Powered
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-black dark:text-white leading-[0.85] mb-8"
        >
          CREATIVE <br />
          <span className="text-emerald-500">EVOLUTION.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed"
        >
          RPNMORE is your partner in branding, digital art, and AI-powered solutions. 
          We combine human creativity with machine intelligence to build future-proof brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="w-full md:w-auto px-8 py-4 bg-emerald-500 text-black font-black text-lg rounded-2xl hover:bg-emerald-400 hover:scale-105 transition-all flex items-center justify-center gap-2">
            EXPLORE SERVICES <ArrowRight size={20} />
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white font-black text-lg rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-all">
            VIEW OUR BLOG
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 hidden lg:block"
      >
        <div className="w-24 h-24 border border-black/10 dark:border-white/10 rounded-3xl rotate-12 flex items-center justify-center text-black/10 dark:text-white/20 font-bold text-4xl">
          AI
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="w-32 h-32 border border-black/10 dark:border-white/10 rounded-full -rotate-12 flex items-center justify-center text-black/10 dark:text-white/20 font-bold text-4xl">
          3D
        </div>
      </motion.div>
    </section>
  );
}
