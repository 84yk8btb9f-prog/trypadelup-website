import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trypadelup.com"),
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
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#f0f4f8]">
        {children}
      </body>
    </html>
  );
}
