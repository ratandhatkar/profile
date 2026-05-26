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

export const metadata: Metadata = {
  title: "Ratnadeep Dhatkar — Director of Engineering",
  description:
    "Ratnadeep Dhatkar is a Director of Engineering at AlphaSense with 15+ years of experience building innovative products and leading world-class engineering teams in Pune, India.",
  keywords: [
    "Ratnadeep Dhatkar",
    "Director of Engineering",
    "AlphaSense",
    "Engineering Leader",
    "Pune",
    "India",
    "Software Engineering",
    "AI",
  ],
  authors: [{ name: "Ratnadeep Dhatkar" }],
  creator: "Ratnadeep Dhatkar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ratnadeepdhatkar.com",
    title: "Ratnadeep Dhatkar — Director of Engineering",
    description:
      "Engineering leader with 15+ years of experience. Director of Engineering at AlphaSense, Pune.",
    siteName: "Ratnadeep Dhatkar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratnadeep Dhatkar — Director of Engineering",
    description: "Engineering leader with 15+ years of experience at AlphaSense, Pune.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
