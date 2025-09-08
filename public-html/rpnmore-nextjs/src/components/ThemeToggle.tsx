'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 group relative overflow-hidden p-2 rounded-xl bg-gradient-to-br from-accent/30 to-yellow-400/30 backdrop-blur-xl border border-accent/50 hover:border-accent/80 transition-all duration-300 shadow-lg hover:shadow-accent/40"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 flex items-center">
        <span className="text-xl transition-transform duration-300 group-hover:scale-110">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </div>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </button>
  );
}