import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-white dark:bg-[#0A0F1E] transition-colors duration-300 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-[140px]" />
        {/* Subtle Africa outline dots */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #F5A623 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623]">
            Start Small, Grow Smart — Digital Assets for Every African
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-black dark:text-white leading-[0.85] mb-8"
        >
          BUILDING <br />
          <span className="text-[#F5A623]">DIGITAL</span> <br />
          <span className="text-[#00C2FF]">WEALTH.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed"
        >
          One company. Multiple ventures. One mission.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mx-auto text-base text-zinc-500 dark:text-zinc-500 mb-12"
        >
          From crypto education to AI automation, e-commerce, branding, and automotive services — built for Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="#ventures"
            className="w-full md:w-auto px-8 py-4 bg-[#F5A623] text-[#0A0F1E] font-black text-lg rounded-2xl hover:bg-[#F5A623]/80 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            EXPLORE OUR VENTURES <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="w-full md:w-auto px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white font-black text-lg rounded-2xl hover:bg-[#00C2FF]/10 hover:border-[#00C2FF]/30 transition-all"
          >
            GET STARTED
          </a>
        </motion.div>

        {/* Venture pill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-16"
        >
          {['TechAfrik', 'Dobuygoods', 'SignupGhana', 'Biskaken', 'ResearchClaw'].map((v, i) => (
            <motion.span
              key={v}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="px-4 py-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest"
            >
              {v}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-10 hidden lg:block"
      >
        <div className="w-20 h-20 border border-[#F5A623]/20 rounded-2xl rotate-12 flex items-center justify-center text-[#F5A623]/20 font-black text-2xl">
          ₿
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="w-24 h-24 border border-[#00C2FF]/20 rounded-full -rotate-12 flex items-center justify-center text-[#00C2FF]/20 font-black text-xl">
          AI
        </div>
      </motion.div>
    </section>
  );
}
