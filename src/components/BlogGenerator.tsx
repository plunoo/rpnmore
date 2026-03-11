import { motion } from 'motion/react';
import { useState } from 'react';
import { generateBlogContent, generateBlogImage } from '../services/geminiService';
import { BlogPost } from '../types';
import { Sparkles, Loader2, Send, Image as ImageIcon, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

interface BlogGeneratorProps {
  onPostGenerated: (post: BlogPost) => void;
}

export default function BlogGenerator({ onPostGenerated }: BlogGeneratorProps) {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState<'idle' | 'content' | 'image'>('idle');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setStep('content');

    try {
      // 1. Generate Content
      const contentData = await generateBlogContent(topic);
      
      setStep('image');
      // 2. Generate Image
      const imageUrl = await generateBlogImage(contentData.title);

      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: contentData.title,
        excerpt: contentData.excerpt,
        content: contentData.content,
        imageUrl: imageUrl,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        author: 'RPNMORE AI',
        tags: contentData.tags
      };

      onPostGenerated(newPost);
      setTopic('');
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
      setStep('idle');
    }
  };

  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 border-y border-black/5 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
        >
          <Sparkles className="text-emerald-600 dark:text-emerald-400" size={16} />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            AI Content Studio
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 tracking-tighter">
          GENERATE <span className="text-emerald-500 italic">INSIGHTS.</span>
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
          Enter a topic and let our AI engine craft a professional blog post with custom visuals 
          to promote your brand.
        </p>

        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., The Future of NFT Branding"
            className="w-full px-8 py-6 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all text-lg shadow-sm dark:shadow-none"
            disabled={isGenerating}
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim()}
            className={cn(
              "absolute right-2 top-2 bottom-2 px-8 bg-emerald-500 text-black font-black rounded-2xl transition-all flex items-center gap-2",
              (isGenerating || !topic.trim()) ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-400 hover:scale-105 shadow-lg shadow-emerald-500/20"
            )}
          >
            {isGenerating ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <>GENERATE <Send size={18} /></>
            )}
          </button>
        </div>

        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex items-center justify-center gap-8"
          >
            <div className={cn("flex items-center gap-2 text-sm font-bold transition-opacity", step === 'content' ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-400 dark:text-zinc-600")}>
              <FileText size={16} className={step === 'content' ? "animate-pulse" : ""} />
              WRITING CONTENT
            </div>
            <div className={cn("flex items-center gap-2 text-sm font-bold transition-opacity", step === 'image' ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-400 dark:text-zinc-600")}>
              <ImageIcon size={16} className={step === 'image' ? "animate-pulse" : ""} />
              CRAFTING VISUALS
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
