export default function Blog() {
  const articles = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Discover how artificial intelligence is reshaping industries and creating new opportunities for growth.',
      date: 'March 15, 2024',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      title: 'Crypto Investment Strategies for 2024',
      excerpt: 'Expert insights on navigating the volatile cryptocurrency market and building a resilient portfolio.',
      date: 'March 10, 2024',
      category: 'Cryptocurrency',
      readTime: '7 min read'
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world examples of businesses that successfully transformed their operations with technology.',
      date: 'March 5, 2024',
      category: 'Digital Transformation',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed with our latest articles, insights, and industry analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="card-hover bg-dark-card border border-dark-border rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <button className="text-accent hover:text-yellow-400 transition-colors duration-300 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}