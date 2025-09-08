'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Building2, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export default function Header({ onSectionChange, currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.className = initialTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Academy", href: "academy" },
    { name: "Crypto Advisory", href: "crypto" },
    { name: "AI Solutions", href: "ai" },
    { name: "Blog", href: "blog" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => handleSectionClick('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Ripple & More</h1>
                <p className="text-xs text-muted-foreground">Business Solutions</p>
              </div>
            </button>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                className="p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300"
                onClick={toggleTheme}
              >
                {theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </button>
              
              <button
                onClick={() => handleSectionClick('contact')}
                className="hidden sm:inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Get Started
              </button>
              
              <button
                className="p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-card border-l border-border shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent/50 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                  <button
                    onClick={() => handleSectionClick('home')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      currentSection === 'home' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    Home
                  </button>
                  
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleSectionClick(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        currentSection === item.href 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-border">
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}