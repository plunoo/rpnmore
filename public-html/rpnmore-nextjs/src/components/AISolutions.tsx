export default function AISolutions() {
  const solutions = [
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Seamlessly integrate AI technologies into your existing business processes.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Advanced analytics and insights powered by machine learning algorithms.'
    },
    {
      icon: '🔮',
      title: 'Predictive Modeling',
      description: 'Forecast trends and make data-driven decisions with AI-powered predictions.'
    },
    {
      icon: '🔄',
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.'
    },
    {
      icon: '🎯',
      title: 'Personalization',
      description: 'AI-driven personalization for enhanced customer experiences.'
    },
    {
      icon: '🛡️',
      title: 'AI Security',
      description: 'Protect your business with intelligent security and fraud detection.'
    }
  ];

  return (
    <section id="ai" className="py-20 bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business and stay ahead of the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="card-hover p-6 rounded-lg bg-dark border border-dark-border">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-px rounded-lg">
            <div className="bg-dark rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Embrace AI?
              </h3>
              <p className="text-gray-400 mb-6">
                Let us help you identify the best AI opportunities for your business and implement them effectively.
              </p>
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                Schedule AI Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}