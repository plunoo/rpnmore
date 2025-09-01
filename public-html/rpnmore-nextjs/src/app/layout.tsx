import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RPNMore - Business Solutions & Advisory",
  description: "RPNMore provides comprehensive business solutions, crypto advisory, AI solutions, and professional training services.",
  keywords: "business consulting, crypto advisory, AI solutions, professional training, financial advisory, digital transformation",
  authors: [{ name: "RPNMore" }],
  openGraph: {
    title: "RPNMore - Business Solutions & Advisory",
    description: "Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RPNMore - Business Solutions & Advisory",
    description: "Your trusted partner for comprehensive business solutions, crypto advisory, AI innovation, and professional development.",
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
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
