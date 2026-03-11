import { motion } from 'motion/react';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
      isDark ? "bg-black/80 border-white/10" : "bg-white/80 border-black/10"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Zap className="text-black fill-black" size={24} />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tighter transition-colors",
            isDark ? "text-white" : "text-black"
          )}>RPNMORE</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Work', 'Blog', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-sm font-medium transition-colors",
                isDark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
              )}
            >
              {item}
            </motion.a>
          ))}
          
          <button 
            onClick={onToggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isDark ? "bg-white/5 text-zinc-400 hover:text-white" : "bg-black/5 text-zinc-600 hover:text-black"
            )}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
              "px-5 py-2 text-sm font-bold rounded-full transition-colors",
              isDark ? "bg-white text-black hover:bg-emerald-400" : "bg-black text-white hover:bg-emerald-500"
            )}
          >
            Get Started
          </motion.button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={onToggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isDark ? "bg-white/5 text-zinc-400" : "bg-black/5 text-zinc-600"
            )}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={isDark ? "text-white" : "text-black"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "md:hidden border-b px-6 py-8 flex flex-col gap-6 transition-colors",
            isDark ? "bg-black border-white/10" : "bg-white border-black/10"
          )}
        >
          {['Services', 'Work', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={cn(
                "text-xl font-medium transition-colors",
                isDark ? "text-white" : "text-black"
              )} 
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className={cn(
            "w-full py-4 font-bold rounded-xl transition-colors",
            isDark ? "bg-emerald-500 text-black" : "bg-black text-white"
          )}>
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}
