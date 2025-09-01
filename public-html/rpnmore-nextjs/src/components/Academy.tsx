'use client';

export default function Academy() {
  const courses = [
    {
      id: 'bs-fundamentals',
      title: 'Business Strategy Fundamentals',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn the core principles of business strategy and strategic planning.',
      price: '$89',
      originalPrice: '$199',
      provider: 'Coursera',
      rating: 4.8,
      students: '12,450',
      affiliateLink: 'https://www.coursera.org/learn/business-strategy?utm_source=rpnmore&utm_medium=affiliate',
      discount: '55% OFF'
    },
    {
      id: 'financial-modeling',
      title: 'Advanced Financial Modeling',
      duration: '12 weeks',
      level: 'Advanced',
      description: 'Master complex financial modeling techniques and analysis.',
      price: '$149',
      originalPrice: '$299',
      provider: 'Udemy',
      rating: 4.9,
      students: '8,230',
      affiliateLink: 'https://www.udemy.com/course/financial-modeling/?utm_source=rpnmore&utm_medium=affiliate',
      discount: '50% OFF'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Comprehensive digital marketing strategies and implementation.',
      price: '$79',
      originalPrice: '$179',
      provider: 'LinkedIn Learning',
      rating: 4.7,
      students: '15,680',
      affiliateLink: 'https://www.linkedin.com/learning/digital-marketing?utm_source=rpnmore&utm_medium=affiliate',
      discount: '56% OFF'
    },
    {
      id: 'leadership',
      title: 'Leadership & Management',
      duration: '6 weeks',
      level: 'All Levels',
      description: 'Develop essential leadership skills for modern business.',
      price: '$99',
      originalPrice: '$199',
      provider: 'MasterClass',
      rating: 4.6,
      students: '9,840',
      affiliateLink: 'https://www.masterclass.com/classes/leadership?utm_source=rpnmore&utm_medium=affiliate',
      discount: '50% OFF'
    }
  ];

  const trackAffiliateClick = async (courseId: string, provider: string) => {
    try {
      await fetch('/api/track-affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          courseId, 
          provider, 
          timestamp: new Date().toISOString(),
          source: 'academy'
        })
      });
    } catch (error) {
      console.error('Failed to track affiliate click:', error);
    }
  };

  const handleEnrollClick = (course: any) => {
    trackAffiliateClick(course.id, course.provider);
    window.open(course.affiliateLink, '_blank');
  };

  return (
    <section id="academy" className="py-20 bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            RPNMore Academy
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional development programs designed to enhance your skills and advance your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card-hover p-6 rounded-lg bg-dark border border-dark-border group cursor-pointer transform hover:scale-105 transition-all duration-300"
                 onClick={() => handleEnrollClick(course)}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                  {course.discount && (
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                      {course.discount}
                    </span>
                  )}
                </div>
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>
              
              <p className="text-gray-400 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⏱️ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students}</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">{course.provider}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-accent">{course.price}</span>
                  <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                </div>
                <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 group-hover:shadow-lg">
                  Enroll Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            🎯 Earn while you learn! Get exclusive discounts on top-rated courses.
          </p>
        </div>
      </div>
    </section>
  );
}