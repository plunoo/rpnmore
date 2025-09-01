export default function CryptoAdvisory() {
  const services = [
    {
      icon: '📈',
      title: 'Portfolio Management',
      description: 'Professional crypto portfolio management and optimization strategies.'
    },
    {
      icon: '🔍',
      title: 'Market Analysis',
      description: 'In-depth market research and trend analysis for informed decisions.'
    },
    {
      icon: '🛡️',
      title: 'Risk Assessment',
      description: 'Comprehensive risk evaluation and mitigation strategies.'
    },
    {
      icon: '💡',
      title: 'Investment Strategy',
      description: 'Customized investment strategies aligned with your goals.'
    }
  ];

  return (
    <section id="crypto" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Crypto Advisory Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert guidance for navigating the complex world of cryptocurrency investments and blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover p-6 rounded-lg bg-dark-card border border-dark-border text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Our Crypto Advisory?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Expert Team</h4>
                <p className="text-gray-400">
                  Certified professionals with years of crypto market experience.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Proven Track Record</h4>
                <p className="text-gray-400">
                  Successful strategies and consistent client returns.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">24/7 Support</h4>
                <p className="text-gray-400">
                  Round-the-clock assistance for urgent market decisions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Custom Solutions</h4>
                <p className="text-gray-400">
                  Tailored strategies for your unique investment profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}