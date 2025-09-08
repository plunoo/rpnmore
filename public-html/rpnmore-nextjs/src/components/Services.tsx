import { Briefcase, TrendingUp, Rocket, Shield, BarChart3, Handshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic planning, process optimization, and growth strategies for businesses of all sizes.',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Comprehensive financial planning, investment strategies, and risk management solutions.',
      color: 'bg-green-500'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology and digital solutions.',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate risks to protect your business and investments.',
      color: 'bg-red-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Improve efficiency, productivity, and overall business performance.',
      color: 'bg-orange-500'
    },
    {
      icon: Handshake,
      title: 'Partnership Development',
      description: 'Strategic partnerships and business development opportunities.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to meet your business needs and drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card rounded-lg p-6 border border-border"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}