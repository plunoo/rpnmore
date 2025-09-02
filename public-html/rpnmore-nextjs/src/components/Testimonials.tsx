'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '💼 Sarah Chen',
      role: 'CEO',
      company: 'TechStart Inc',
      content: '✨ RPNMore transformed our business strategy completely! Their crypto advisory helped us achieve 🚀 40% returns in just 6 months. Absolutely amazing!',
      rating: 5,
      avatar: '👩‍💼',
      gradient: 'from-pink-500/20 to-purple-500/20',
      accent: 'text-pink-400'
    },
    {
      id: 2,
      name: '🎯 Marcus Johnson',
      role: 'Investment Director',
      company: 'Capital Ventures',
      content: '🤖 The AI solutions implemented by RPNMore automated 60% of our processes! ROI was evident within the first quarter. Game changer! 💪',
      rating: 5,
      avatar: '👨‍💻',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      accent: 'text-blue-400'
    },
    {
      id: 3,
      name: '🌟 Elena Rodriguez',
      role: 'Founder',
      company: 'Digital Innovations',
      content: '📚 RPNMore Academy courses were absolutely life-changing! The financial modeling course increased our accuracy by 85%. Worth every penny! 💎',
      rating: 5,
      avatar: '👩‍🚀',
      gradient: 'from-green-500/20 to-emerald-500/20',
      accent: 'text-green-400'
    },
    {
      id: 4,
      name: '⭐ David Kim',
      role: 'COO',
      company: 'Growth Labs',
      content: '🏆 Professional, insightful, and incredibly results-driven! RPNMore exceeded every single expectation. Highly recommend! 🙌',
      rating: 5,
      avatar: '👨‍🎯',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      accent: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-4xl">🌟</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Happy Clients Say
            </h2>
            <span className="text-4xl">✨</span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            💝 See how we&apos;ve helped businesses transform and grow with our comprehensive solutions! 
            <span className="text-accent font-semibold">Join the success story! 🎉</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`group relative testimonial-card p-8 rounded-3xl bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-700 cursor-pointer transform hover:scale-105`}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500">💫</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center text-2xl mr-4 shadow-lg group-hover:shadow-accent/25 transition-shadow duration-500">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{testimonial.name}</h4>
                    <p className={`${testimonial.accent} text-sm font-semibold`}>{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                  ))}
                </div>

                <blockquote className="text-gray-200 leading-relaxed text-lg font-medium text-center">
                  {testimonial.content}
                </blockquote>
                
                <div className="text-center mt-6">
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                    💎 Verified Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-accent/20 to-yellow-400/20 backdrop-blur-xl px-8 py-6 rounded-3xl border border-accent/30 shadow-2xl">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center text-lg border-3 border-white/20 shadow-lg animate-bounce" style={{animationDelay: `${i * 0.2}s`}}>
                  {t.avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">🎉 Join 200+ Happy Clients!</p>
              <p className="text-accent text-sm font-semibold">⭐ Average rating: 4.9/5 ⭐</p>
            </div>
          </div>
          
          <div className="mt-8">
            <button className="modern-button group relative overflow-hidden">
              <span className="relative z-10">💫 Start Your Success Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}