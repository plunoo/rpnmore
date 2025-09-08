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
    <section className="py-12 bg-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🌟</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Happy Clients Say
            </h2>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            💝 See how we&apos;ve helped businesses transform and grow! 
            <span className="text-accent font-semibold">Join the success story! 🎉</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`group relative testimonial-card p-5 rounded-2xl bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer transform hover:scale-102`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center text-lg mr-3 shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{testimonial.name}</h4>
                    <p className={`${testimonial.accent} text-xs font-semibold`}>{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">⭐</span>
                  ))}
                </div>

                <blockquote className="text-gray-200 leading-relaxed text-sm font-medium text-center">
                  {testimonial.content}
                </blockquote>
                
                <div className="text-center mt-4">
                  <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    💎 Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/20 to-yellow-400/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-accent/30 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center text-sm shadow-md">
                  {t.avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">🎉 Join 200+ Happy Clients!</p>
              <p className="text-accent text-xs font-semibold">⭐ 4.9/5 rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}