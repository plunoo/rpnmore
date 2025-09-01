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
              <a 
                href="https://www.linkedin.com/in/kwaku-dame-1b1321181/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              >
                <span className="sr-only">LinkedIn</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/kwakuDame1?t=ihs3PeBq7LgqZSFIpGRcTw&s=09" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/kwaku.dame/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
              >
                <span className="sr-only">Facebook</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
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
            <a href="/privacy" className="text-gray-400 hover:text-accent transition-colors duration-300 ml-2">
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