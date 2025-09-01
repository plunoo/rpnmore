import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Academy from '@/components/Academy';
import CryptoAdvisory from '@/components/CryptoAdvisory';
import AISolutions from '@/components/AISolutions';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-dark text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Academy />
      <CryptoAdvisory />
      <AISolutions />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
