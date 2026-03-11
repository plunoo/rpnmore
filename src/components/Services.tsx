import { motion } from 'motion/react';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none"
            >
              COMPREHENSIVE <br />
              <span className="text-zinc-400 dark:text-zinc-500 italic">SOLUTIONS.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-zinc-600 dark:text-zinc-400 text-lg"
          >
            From digital art to physical signage, we provide end-to-end creative services 
            powered by the latest in AI technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden">
          {services.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group h-full p-8 bg-white dark:bg-zinc-950 hover:bg-emerald-500 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-black/20 transition-colors">
                    {IconComponent && <IconComponent size={24} className="text-emerald-600 dark:text-emerald-400 group-hover:text-black transition-colors" />}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 group-hover:text-black/60 mb-2 transition-colors">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-black mb-4 leading-tight transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black/80 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
