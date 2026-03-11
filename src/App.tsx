/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import BlogGenerator from './components/BlogGenerator';
import FeaturedWork from './components/FeaturedWork';
import ServicePage from './components/ServicePage';
import AdminDashboard from './components/AdminDashboard';
import { BlogPost, Service } from './types';
import { SERVICES as INITIAL_SERVICES } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, X, Eye, EyeOff } from 'lucide-react';
import { cn } from './lib/utils';


const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of AI in Modern Branding',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we think about brand identity and customer engagement.',
    content: 'Full content here...',
    imageUrl: 'https://picsum.photos/seed/ai-branding/1280/720',
    date: 'March 10, 2026',
    author: 'RPNMORE Team',
    tags: ['AI', 'Branding', 'Tech']
  },
  {
    id: '2',
    title: '3D Signage: Standing Out in a Digital World',
    excerpt: 'Why physical presence still matters and how 3D signage can transform your storefront into a landmark.',
    content: 'Full content here...',
    imageUrl: 'https://picsum.photos/seed/signage/1280/720',
    date: 'March 8, 2026',
    author: 'Design Studio',
    tags: ['Design', 'Physical', 'Retail']
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('rpnmore_theme');
    return saved ? saved === 'dark' : true;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('rpnmore_admin') === 'true';
  });

  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [adminInput, setAdminInput] = useState('');
  const [adminError, setAdminError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const adminInputRef = useRef<HTMLInputElement>(null);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, postsRes] = await Promise.all([
          fetch('/api/services'),
          fetch('/api/posts')
        ]);
        
        if (servicesRes.ok) {
          const servicesData = await servicesRes.json();
          if (servicesData.length > 0) setServices(servicesData);
          else setServices(INITIAL_SERVICES);
        }
        
        if (postsRes.ok) {
          const postsData = await postsRes.json();
          if (postsData.length > 0) setPosts(postsData);
          else setPosts(INITIAL_POSTS);
        }
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setServices(INITIAL_SERVICES);
        setPosts(INITIAL_POSTS);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePostGenerated = async (newPost: BlogPost) => {
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      if (res.ok) {
        setPosts([newPost, ...posts]);
      }
    } catch (err) {
      console.error('Failed to save post:', err);
    }
  };

  const updateServices = async (newServices: Service[]) => {
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newServices)
      });
      if (res.ok) {
        setServices(newServices);
      }
    } catch (err) {
      console.error('Failed to save services:', err);
    }
  };

  const toggleAdmin = () => {
    if (isAdmin) {
      // Log out of admin
      setIsAdmin(false);
      localStorage.setItem('rpnmore_admin', 'false');
    } else {
      // Show password prompt
      setAdminInput('');
      setAdminError('');
      setShowAdminPrompt(true);
      setTimeout(() => adminInputRef.current?.focus(), 100);
    }
  };

  const handleAdminLogin = async () => {
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminInput }),
      });
      if (res.ok) {
        setIsAdmin(true);
        localStorage.setItem('rpnmore_admin', 'true');
        setShowAdminPrompt(false);
        setAdminInput('');
        setAdminError('');
      } else {
        setAdminError('Incorrect password. Try again.');
        setAdminInput('');
      }
    } catch {
      setAdminError('Server error. Please try again.');
    }
  };

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 font-bold tracking-widest text-xs animate-pulse">INITIALIZING RPNMORE...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />

      {/* Admin Password Modal */}
      <AnimatePresence>
        {showAdminPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
            onClick={(e) => { if (e.target === e.currentTarget) setShowAdminPrompt(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-950 border border-black/10 dark:border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black tracking-tighter text-black dark:text-white">ADMIN <span className="text-emerald-500 italic">ACCESS</span></h3>
                <button onClick={() => setShowAdminPrompt(false)} className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <X size={20} className="text-zinc-500" />
                </button>
              </div>
              <div className="relative mb-4">
                <input
                  ref={adminInputRef}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter admin password"
                  className="w-full bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-4 pr-12 text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={adminInput}
                  onChange={e => { setAdminInput(e.target.value); setAdminError(''); }}
                  onKeyDown={e => { if (e.key === 'Enter') handleAdminLogin(); }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {adminError && (
                <p className="text-red-500 text-sm font-medium mb-4">{adminError}</p>
              )}
              <button
                onClick={handleAdminLogin}
                className="w-full bg-emerald-500 text-black font-black py-4 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                UNLOCK ADMIN
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={cn(
        "min-h-screen transition-colors duration-300 selection:bg-emerald-500 selection:text-black",
        isDark ? "bg-black text-white dark" : "bg-white text-black"
      )}>
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              
              <Services services={services} />

              <FeaturedWork />
              
              {isAdmin && <BlogGenerator onPostGenerated={handlePostGenerated} />}
              
              <Blog posts={posts} />

              {isAdmin && (
                <AdminDashboard 
                  services={services} 
                  onUpdateServices={updateServices} 
                />
              )}

              {/* Contact Section */}
              <section id="contact" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-black text-black dark:text-white tracking-tighter mb-12"
                  >
                    READY TO <span className="text-emerald-500 italic">EVOLVE?</span>
                  </motion.h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
                    Let's discuss your next project. Whether it's a new brand identity, 
                    AI automation, or high-impact signage, we're here to help.
                  </p>
                  <a
                    href="mailto:info@rpnmore.com"
                    className="inline-block px-12 py-6 bg-black dark:bg-white text-white dark:text-black font-black text-xl rounded-3xl hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
                  >
                    CONTACT US NOW
                  </a>
                </div>
              </section>
            </main>
          } />
          
          <Route path="/service/:id" element={<ServicePage services={services} />} />
        </Routes>

        <footer className="py-12 px-6 border-t border-black/5 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-black font-black">R</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-black dark:text-white">RPNMORE</span>
            </div>
            <div className="text-zinc-500 text-sm">
              © 2026 RPNMORE Creative & AI Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-zinc-500 dark:text-zinc-400 text-sm font-medium">
              <button 
                onClick={toggleAdmin}
                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                {isAdmin ? <Unlock size={14} /> : <Lock size={14} />}
                {isAdmin ? 'Admin Mode On' : 'Admin Login'}
              </button>
              <a href="https://twitter.com/rpnmore" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
              <a href="https://instagram.com/rpnmore" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
              <a href="https://linkedin.com/company/rpnmore" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
