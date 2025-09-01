export default function Academy() {
  const courses = [
    {
      title: 'Business Strategy Fundamentals',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn the core principles of business strategy and strategic planning.'
    },
    {
      title: 'Advanced Financial Modeling',
      duration: '12 weeks',
      level: 'Advanced',
      description: 'Master complex financial modeling techniques and analysis.'
    },
    {
      title: 'Digital Marketing Mastery',
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Comprehensive digital marketing strategies and implementation.'
    },
    {
      title: 'Leadership & Management',
      duration: '6 weeks',
      level: 'All Levels',
      description: 'Develop essential leadership skills for modern business.'
    }
  ];

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
            <div key={index} className="card-hover p-6 rounded-lg bg-dark border border-dark-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{course.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>⏱️ {course.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}