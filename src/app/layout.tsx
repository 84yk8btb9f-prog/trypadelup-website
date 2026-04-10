import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PadelUp — Your AI Padel Coach",
  description:
    "AI-powered padel coaching — analyze your technique, track nutrition, and level up your game. Download PadelUp on the App Store.",
  openGraph: {
    title: "PadelUp — Your AI Padel Coach",
    description:
      "AI-powered padel coaching — analyze your technique, track nutrition, and level up your game.",
    type: "website",
    url: "https://trypadelup.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PadelUp — Your AI Padel Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PadelUp — Your AI Padel Coach",
    description:
      "AI-powered padel coaching — analyze your technique, track nutrition, and level up your game.",
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
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#f0f4f8" }}>
        {children}
      </body>
    </html>
  );
}
