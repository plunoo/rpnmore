'use client';

import { useState, lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingBlog from '@/components/FloatingBlog';
import WhatsAppFloat from '@/components/WhatsAppFloat';

// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const Academy = lazy(() => import('@/components/Academy'));
const CryptoAdvisory = lazy(() => import('@/components/CryptoAdvisory'));
const AISolutions = lazy(() => import('@/components/AISolutions'));
const Blog = lazy(() => import('@/components/Blog'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading component for better UX
const SectionLoading = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 bg-muted rounded w-48 mb-4"></div>
      <div className="h-4 bg-muted rounded w-96 mb-2"></div>
      <div className="h-4 bg-muted rounded w-80"></div>
    </div>
  </div>
);

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'about':
        return (
          <Suspense fallback={<SectionLoading />}>
            <About />
          </Suspense>
        );
      case 'services':
        return (
          <Suspense fallback={<SectionLoading />}>
            <Services />
          </Suspense>
        );
      case 'academy':
        return (
          <Suspense fallback={<SectionLoading />}>
            <Academy />
          </Suspense>
        );
      case 'crypto':
        return (
          <Suspense fallback={<SectionLoading />}>
            <CryptoAdvisory />
          </Suspense>
        );
      case 'ai':
        return (
          <Suspense fallback={<SectionLoading />}>
            <AISolutions />
          </Suspense>
        );
      case 'blog':
        return (
          <Suspense fallback={<SectionLoading />}>
            <Blog />
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<SectionLoading />}>
            <Contact />
          </Suspense>
        );
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
