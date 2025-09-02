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
      className="fixed top-6 right-6 z-50 group relative overflow-hidden p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-yellow-400/20 backdrop-blur-xl border border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-accent/25"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 flex items-center gap-2">
        <span className="text-2xl transition-transform duration-500 group-hover:scale-110">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
        <span className="text-white font-semibold text-sm hidden sm:block">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      </div>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </button>
  );
}