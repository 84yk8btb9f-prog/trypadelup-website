import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/structured-data";

const BASE_URL = "https://trypadelup.com";
// TODO: Replace with your actual App Store app ID once live
const APP_STORE_ID = "0000000000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "PadelUp — AI Padel Coach App",
    template: "%s | PadelUp",
  },
  description:
    "PadelUp is the #1 AI padel coaching app. Get frame-by-frame video analysis, personalized training plans, AI nutrition tracking, and 24/7 expert chat. Trusted by 8,000+ players in 40+ countries. Start your free trial.",
  keywords: [
    "padel coaching app",
    "AI padel coach",
    "padel training app",
    "padel technique analysis",
    "padel video analysis",
    "padel training plan",
    "padel nutrition tracking",
    "AI sports coach",
    "padel improvement app",
    "padel app iOS",
    "padel AI",
    "best padel app",
    "padel racket sport app",
    "padel performance tracker",
  ],

  // ── Canonical / Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "PadelUp",
    title: "PadelUp — AI Padel Coach App",
    description:
      "Frame-by-frame technique analysis, personalized training plans, and AI nutrition tracking. The padel coach in your pocket.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PadelUp — AI Padel Coach App",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "PadelUp — AI Padel Coach App",
    description:
      "Frame-by-frame technique analysis, personalized training plans, AI nutrition tracking. The padel coach in your pocket.",
    images: ["/og-image.png"],
    // creator: "@padelup", // TODO: add when you have a Twitter handle
  },

  // ── App-specific / ASO ────────────────────────────────────────────────────
  // Smart App Banner — prompts iOS Safari users to open/download the app
  appLinks: {
    ios: {
      app_store_id: APP_STORE_ID,
      url: `https://apps.apple.com/app/padelup/id${APP_STORE_ID}`,
    },
  },
  itunes: {
    appId: APP_STORE_ID,
    // affiliateData: "",  // optional iTunesAffiliates token
  },

  // ── App / PWA meta ────────────────────────────────────────────────────────
  appleWebApp: {
    capable: true,
    title: "PadelUp",
    statusBarStyle: "black-translucent",
    startupImage: ["/og-image.png"],
  },

  // ── Favicons / App Icons ─────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ── Authorship ────────────────────────────────────────────────────────────
  authors: [{ name: "PadelUp", url: BASE_URL }],
  creator: "PadelUp",
  publisher: "PadelUp",
  category: "Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Preconnect to font providers for faster loading */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f0f4f8]">
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wb1lb6hljq");`}
        </Script>
      </body>
    </html>
  );
}
