export default function Services() {
  const services = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Strategic planning, process optimization, and growth strategies for businesses of all sizes.'
    },
    {
      icon: '📊',
      title: 'Financial Advisory',
      description: 'Comprehensive financial planning, investment strategies, and risk management solutions.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology and digital solutions.'
    },
    {
      icon: '🔒',
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate risks to protect your business and investments.'
    },
    {
      icon: '📈',
      title: 'Performance Optimization',
      description: 'Improve efficiency, productivity, and overall business performance.'
    },
    {
      icon: '🤝',
      title: 'Partnership Development',
      description: 'Strategic partnerships and business development opportunities.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your business needs and drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover p-6 rounded-lg bg-dark-card border border-dark-border">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}