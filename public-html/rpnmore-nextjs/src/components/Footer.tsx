export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-white">RPNMore</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                🔗
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                📘
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#crypto" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Crypto Advisory
                </a>
              </li>
              <li>
                <a href="#ai" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#academy" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Academy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RPNMore. All rights reserved. |
            <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300 ml-2">
              Privacy Policy
            </a> |
            <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300 ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}