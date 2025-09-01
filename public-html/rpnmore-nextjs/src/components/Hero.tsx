'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to <span className="text-accent">RPNMore</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}