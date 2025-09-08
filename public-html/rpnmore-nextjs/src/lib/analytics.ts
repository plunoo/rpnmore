import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
}

// Function to send analytics data
function sendToAnalytics(metric: unknown) {
  const body = JSON.stringify(metric);
  
  // Send to your analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body);
  } else {
    fetch('/api/analytics', {
      body,
      method: 'POST',
      keepalive: true,
    });
  }
}

// Initialize Web Vitals tracking
export function initWebVitals() {
  try {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // INP replaces FID in modern web-vitals
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (err) {
    console.error('Web Vitals tracking error:', err);
  }
}

// Performance observer for resource timing
export function initPerformanceObserver() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Track long tasks
          if (entry.entryType === 'longtask') {
            console.warn('Long task detected:', entry);
          }
          
          // Track layout shifts
          if (entry.entryType === 'layout-shift' && !(entry as LayoutShift).hadRecentInput) {
            console.log('Layout shift:', entry);
          }
        });
      });

      observer.observe({ entryTypes: ['longtask', 'layout-shift'] });
    } catch (err) {
      console.error('Performance Observer error:', err);
    }
  }
}

// Resource preloading helper
export function preloadResource(href: string, as: string, type?: string) {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
}

// Critical resource preloading
export function preloadCriticalResources() {
  // Preload critical CSS
  preloadResource('/fonts/inter.woff2', 'font', 'font/woff2');
  
  // Preload hero image if any
  // preloadResource('/hero-image.webp', 'image');
}