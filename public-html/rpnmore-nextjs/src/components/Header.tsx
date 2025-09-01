'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full glass-effect z-50 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-white">RPNMore</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('academy')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Academy
            </button>
            <button
              onClick={() => scrollToSection('crypto')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Crypto Advisory
            </button>
            <button
              onClick={() => scrollToSection('ai')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              AI Solutions
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Blog
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
            >
              Contact
            </button>
            <button
              className="md:hidden text-white hover:text-accent transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-dark-border md:hidden">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('academy')}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
              >
                Academy
              </button>
              <button
                onClick={() => scrollToSection('crypto')}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
              >
                Crypto Advisory
              </button>
              <button
                onClick={() => scrollToSection('ai')}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
              >
                AI Solutions
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}