'use client';

import { useState } from 'react';

export default function FloatingBlog() {
  const [isExpanded, setIsExpanded] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: '🚀 AI Trends 2024',
      excerpt: 'Latest AI innovations...',
      readTime: '5 min',
      category: 'AI'
    },
    {
      id: 2,
      title: '💰 Crypto Analysis',
      excerpt: 'Q1 market insights...',
      readTime: '8 min',
      category: 'Crypto'
    },
    {
      id: 3,
      title: '📈 Business Growth',
      excerpt: 'Scaling strategies...',
      readTime: '6 min',
      category: 'Business'
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className={`transition-all duration-500 ${isExpanded ? 'w-80' : 'w-12'}`}>
        <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-lg overflow-hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-3 text-center group hover:bg-muted/50 transition-colors duration-300"
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300 inline-block">
              {isExpanded ? '📖' : '📝'}
            </span>
          </button>
          
          {isExpanded && (
            <div className="p-4 border-t border-border">
              <h3 className="text-floating-text font-bold text-sm mb-3 text-center">
                ✨ Latest Insights
              </h3>
              <div className="space-y-3">
                {blogPosts.map((post) => (
                  <div key={post.id} className="group cursor-pointer p-3 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                    <h4 className="text-floating-text text-xs font-semibold mb-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary text-xs font-medium">{post.category}</span>
                      <span className="text-muted-foreground text-xs">{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="text-primary text-xs font-semibold hover:text-primary/80 transition-colors">
                  📚 View All Posts →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}