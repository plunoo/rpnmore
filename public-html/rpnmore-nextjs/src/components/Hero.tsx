'use client';

interface HeroProps {
  onSectionChange?: (section: string) => void;
}

export default function Hero({ onSectionChange }: HeroProps) {
  const handleSectionClick = (sectionId: string) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  return (
    <section className="hero-section py-12 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/5 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center">
            Welcome to <span className="text-primary font-bold">Ripple & More</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleSectionClick('services')}
              className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg text-primary-foreground"
            >
              Explore Services
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
              className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}