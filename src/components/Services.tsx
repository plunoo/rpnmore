import { motion } from 'motion/react';
import { Service } from '../types';
import { ExternalLink } from 'lucide-react';

interface ServicesProps {
  services: Service[];
}

const VENTURE_EMOJIS: Record<string, string> = {
  techafrik: '📱',
  dobuygoods: '🛒',
  signupghana: '🎨',
  biskaken: '🔧',
  researchclaw: '🤖',
};

export default function Services({ services }: ServicesProps) {
  return (
    <section id="ventures" className="py-32 px-6 bg-white dark:bg-[#0D1426] transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-4"
          >
            Everything We Build
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none mb-6"
          >
            UNDER ONE <span className="text-[#F5A623] italic">ROOF.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg"
          >
            Each venture operates independently on its own subdomain, purpose-built for its market and audience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const emoji = VENTURE_EMOJIS[service.id] || '🚀';
            const href = service.externalLink || `/service/${service.id}`;
            const isExternal = !!service.externalLink;

            return (
              <motion.a
                key={service.id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-8 rounded-3xl border border-white/5 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.03] hover:border-[#F5A623]/40 hover:bg-[#F5A623]/5 transition-all duration-300 cursor-pointer block ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F5A623]/0 to-[#F5A623]/0 group-hover:from-[#F5A623]/5 group-hover:to-[#00C2FF]/5 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl">{emoji}</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-200 dark:border-white/10 rounded-full px-3 py-1">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-black dark:text-white group-hover:text-[#F5A623] transition-colors mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-[#F5A623] opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                    {isExternal ? (
                      <>Visit {service.title} <ExternalLink size={14} /></>
                    ) : (
                      <>Learn More →</>
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
    </section>
  );
}
