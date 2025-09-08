import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { Suspense } from 'react';
import "./globals.css";
import { initWebVitals, initPerformanceObserver } from '@/lib/analytics';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "RPNMore - Business Solutions & Advisory",
  description: "RPNMore provides comprehensive business solutions, crypto advisory, AI solutions, and professional training services.",
  keywords: "business consulting, crypto advisory, AI solutions, professional training, financial advisory, digital transformation",
  authors: [{ name: "RPNMore" }],
  metadataBase: new URL('https://rpnmore.com'),
  openGraph: {
    title: "RPNMore - Business Solutions & Advisory",
    description: "Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.",
    type: "website",
    locale: "en_US",
    url: "https://rpnmore.com",
    siteName: "RPNMore",
  },
  twitter: {
    card: "summary_large_image",
    title: "RPNMore - Business Solutions & Advisory",
    description: "Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.",
    site: "@kwakuDame1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Performance monitoring component
function PerformanceMonitor() {
  if (typeof window !== 'undefined') {
    // Initialize on client side only
    setTimeout(() => {
      initWebVitals();
      initPerformanceObserver();
    }, 0);
  }
  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#095292" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Critical CSS inlining hint */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Resource hints for performance */}
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        
        {/* Early loading script for theme to prevent FOUC */}
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.className = theme;
            } catch (e) {}
          `
        }} />
      </head>
      <body className={`${inter.variable} ${openSans.variable} antialiased min-h-screen flex flex-col`}>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          {children}
        </Suspense>
        <PerformanceMonitor />
      </body>
    </html>
  );
}
