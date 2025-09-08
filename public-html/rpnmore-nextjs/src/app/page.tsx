'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Academy from '@/components/Academy';
import CryptoAdvisory from '@/components/CryptoAdvisory';
import AISolutions from '@/components/AISolutions';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingBlog from '@/components/FloatingBlog';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'academy':
        return <Academy />;
      case 'crypto':
        return <CryptoAdvisory />;
      case 'ai':
        return <AISolutions />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <FloatingBlog />
      <WhatsAppFloat />
      <Header onSectionChange={handleSectionChange} currentSection={currentSection} />
      <main className="min-h-screen">
        {renderCurrentSection()}
      </main>
      <Footer />
    </div>
  );
}
