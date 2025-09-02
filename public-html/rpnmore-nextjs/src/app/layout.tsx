import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#095292" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={`${inter.variable} ${openSans.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
