import { motion } from 'motion/react';

const PROJECTS = [
  { id: 1, title: 'NEON FUTURE', category: 'Digital Art', image: 'https://picsum.photos/seed/neon/800/600' },
  { id: 2, title: 'ECO BRAND', category: 'Branding', image: 'https://picsum.photos/seed/eco/800/600' },
  { id: 3, title: 'SKY LED', category: 'Advertising', image: 'https://picsum.photos/seed/led/800/600' },
  { id: 4, title: 'LUXE PACK', category: 'Packaging', image: 'https://picsum.photos/seed/pack/800/600' },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4"
            >
              Our Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none"
            >
              FEATURED <br />
              <span className="text-zinc-400 dark:text-zinc-500 italic">CREATIONS.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-black/5 dark:border-white/5"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                  {project.category}
                </span>
                <h3 className="text-4xl font-black text-white tracking-tighter">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
