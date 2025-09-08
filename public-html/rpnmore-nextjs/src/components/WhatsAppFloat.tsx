'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in Ripple & More's services. Can you tell me more about your business solutions?");
    // TODO: Replace with your actual WhatsApp number (including country code, e.g., "233xxxxxxxxx" for Ghana)
    const whatsappNumber = "1234567890"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expandable message bubble */}
      {isExpanded && (
        <div className="mb-4 max-w-xs bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#25D366] font-bold text-sm">R</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Ripple & More</p>
                <p className="text-xs opacity-90">Business Solutions</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-3">
              👋 Hi there! How can we help you with your business solutions today?
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#25D366]/90 transition-colors"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => {
          if (isExpanded) {
            openWhatsApp();
          } else {
            setIsExpanded(true);
          }
        }}
        className="relative bg-[#25D366] hover:bg-[#25D366]/90 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45 transform -translate-y-1/2"></div>
        </div>
      </button>
    </div>
  );
}