import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServicePageProps {
  services: Service[];
}

export default function ServicePage({ services }: ServicePageProps) {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center text-black dark:text-white transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-emerald-600 dark:text-emerald-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  const IconComponent = (Icons as any)[service.icon];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white mb-12 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8">
            {IconComponent && <IconComponent size={40} className="text-emerald-600 dark:text-emerald-500" />}
          </div>
          
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 block">
            {service.category}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            {service.title}
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
            {service.description}
          </p>

          {service.imageUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-16 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}

          {service.externalLink && (
            <a 
              href={service.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 transition-all mb-12 shadow-lg shadow-emerald-500/20"
            >
              VISIT OFFICIAL PAGE <ExternalLink size={20} />
            </a>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-8">
              <div className="p-12 bg-zinc-50 dark:bg-zinc-950 border border-black/10 dark:border-white/10 rounded-3xl shadow-sm dark:shadow-none">
                <h2 className="text-2xl font-bold mb-6">Service Details</h2>
                <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                  {service.longDescription || "More details about this service will be updated by the admin soon."}
                </div>
              </div>

              {service.additionalInfo && (
                <div className="p-12 bg-zinc-50 dark:bg-zinc-950 border border-black/10 dark:border-white/10 rounded-3xl shadow-sm dark:shadow-none">
                  <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
                  <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                    {service.additionalInfo}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-500">Service Updates</h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.updates || "No recent updates for this service."}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
