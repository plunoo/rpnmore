import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-50 dark:bg-[#0A0F1E] transition-colors duration-300 relative overflow-hidden">
      {/* Gold divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-4"
            >
              Who We Are
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none mb-8"
            >
              RIPPLE &<br />
              <span className="text-[#F5A623] italic">MORE</span>{' '}
              <span className="text-zinc-400 dark:text-zinc-500 italic">LIMITED.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6"
            >
              Ripple & More Limited is a digital asset and technology company founded in Ghana and operating from Dubai — building tools, platforms, and services that empower Africans to participate in the digital economy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10"
            >
              From crypto education to AI automation, e-commerce, branding, and automotive services — we operate across multiple sectors with one unified goal: <span className="text-[#F5A623] font-bold">To make digital wealth accessible to every African.</span>
            </motion.p>

            {/* Location tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { flag: '🇬🇭', label: 'Founded in Ghana' },
                { flag: '🇦🇪', label: 'Operating from Dubai' },
                { flag: '🌍', label: 'Built for Africa' },
              ].map(({ flag, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/5"
                >
                  <span className="text-base">{flag}</span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — venture grid preview */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '📱', name: 'TechAfrik', desc: 'AI & Blockchain Media' },
              { emoji: '🛒', name: 'Dobuygoods', desc: 'Crypto Commerce' },
              { emoji: '🎨', name: 'SignupGhana', desc: 'Branding & Signage' },
              { emoji: '🔧', name: 'Biskaken', desc: 'Auto Services' },
              { emoji: '🤖', name: 'ResearchClaw', desc: 'AI Automation' },
            ].map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border border-white/5 bg-white dark:bg-white/[0.03] hover:border-[#F5A623]/30 hover:bg-[#F5A623]/5 transition-all group ${i === 4 ? 'col-span-2' : ''}`}
              >
                <span className="text-3xl mb-3 block">{v.emoji}</span>
                <p className="font-black text-black dark:text-white group-hover:text-[#F5A623] transition-colors">{v.name}</p>
                <p className="text-xs text-zinc-500 mt-1">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent" />
    </section>
  );
}
