'use client';

import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactForm {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-foreground">📍</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Business Street, Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-foreground">📧</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">ask@rpnmore.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/971508472503" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-400 transition-colors duration-300"
                    >
                      +971 50 847 2503
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                  <p className="text-green-400 text-lg font-medium mb-2">
                    🎉 Thank you for your message!
                  </p>
                  <p className="text-green-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-foreground font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="business-consulting">Business Consulting</option>
                      <option value="crypto-advisory">Crypto Advisory</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="academy">Academy Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}