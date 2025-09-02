import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Academy from '@/components/Academy';
import CryptoAdvisory from '@/components/CryptoAdvisory';
import AISolutions from '@/components/AISolutions';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="bg-dark text-white transition-colors duration-500">
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Services />
      <Academy />
      <CryptoAdvisory />
      <AISolutions />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
