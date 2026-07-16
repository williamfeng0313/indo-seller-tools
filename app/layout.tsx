import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indo Seller Tools - AI Tools for Indonesian Ecommerce Sellers",
  description:
    "Free AI tools for Shopee, TikTok Shop, Tokopedia and Lazada sellers in Indonesia.",

  verification: {
    google: "DJu4CM9sGEbV_G6jnBH45KncnUay2qK9dHZ2cT8UHWs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6279091849881318"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}

        <Analytics />
      </body>
    </html>
  );
}