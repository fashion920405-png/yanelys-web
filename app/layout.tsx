import type { Metadata } from "next";
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

export const metadata = {
  title: "Cheeseberry Delights",
  description:
    "Premium chocolate-covered strawberries, charcuterie boards, desserts, and custom sweet gifts in Florida.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cheeseberry Delights",
    description:
      "Custom strawberries, charcuterie boards, desserts, and premium sweet gifts.",
    url: "https://cheeseberrydelights.vercel.app",
    siteName: "Cheeseberry Delights",
    images: [
      {
        url: "/principal.jpg",
        width: 1200,
        height: 630,
        alt: "Cheeseberry Delights",
      },
    ],
    locale: "en_US",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
