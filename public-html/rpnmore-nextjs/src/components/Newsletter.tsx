'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter for the latest insights, industry trends, and exclusive content.
          </p>

          {isSubmitted ? (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
              <p className="text-green-400 text-lg font-medium">
                🎉 Thank you for subscribing! You&apos;ll receive our latest updates soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-dark border border-dark-border text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}