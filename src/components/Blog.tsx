import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4"
            >
              Latest Insights
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none"
            >
              AI-POWERED <br />
              <span className="text-zinc-400 dark:text-zinc-500 italic">THOUGHTS.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-zinc-600 dark:text-zinc-400 text-lg"
          >
            Stay updated with the latest trends in branding, digital art, and AI. 
            Our blog is powered by human-AI collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-50 dark:bg-zinc-950 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-black dark:text-white group-hover:gap-4 transition-all">
                  READ MORE <ArrowRight size={16} className="text-emerald-500" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
