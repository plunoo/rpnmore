import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - RPNMore",
  description: "RPNMore's privacy policy and data protection practices.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              Effective Date: March 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-400 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our newsletter, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and comply with legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-400 mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in specific circumstances outlined in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-400 mb-4">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <p className="text-white mb-2">
                  <strong>Email:</strong> info@rpnmore.com
                </p>
                <p className="text-white mb-2">
                  <strong>Phone:</strong> +971 50 847 2503
                </p>
                <p className="text-white">
                  <strong>WhatsApp:</strong> <a 
                    href="https://wa.me/971508472503" 
                    className="text-accent hover:text-yellow-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +971 50 847 2503
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12">
            <Link 
              href="/"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}