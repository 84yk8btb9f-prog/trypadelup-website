// JSON-LD structured data for SEO
// Injected into <head> via layout.tsx — runs on EVERY page.
//
// IMPORTANT: page-scoped schemas (FAQPage, HowTo, Article) must NOT live here.
// Google treats two FAQPage scripts on one page as a duplicate and disables
// rich results for both. Page-scoped schemas belong in the page component.
//
// Safe to keep here (entity-level, repeats fine across pages):
//   Organization, WebSite, MobileApplication

import { APP_IS_LIVE, APP_STORE_URL, BASE_URL } from "@/lib/config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PadelUp",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  sameAs: [
    "https://instagram.com/padelup",
    "https://x.com/padelup",
    "https://tiktok.com/@padelup",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PadelUp",
  url: BASE_URL,
  description:
    "AI-powered padel coaching app — analyze your technique, track nutrition, and level up your game.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/learn/{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// MobileApplication schema without aggregateRating — we don't have real reviews yet.
// Only emit Offer data once the app is actually on the App Store.
const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "PadelUp — AI Padel Coach",
  alternateName: "PadelUp",
  description:
    "AI-powered padel coaching — frame-by-frame technique analysis, personalized training plans, AI nutrition tracking, and 24/7 expert chat.",
  url: APP_STORE_URL,
  datePublished: "2025-01-15",
  dateModified: "2026-04-24",
  ...(APP_IS_LIVE
    ? { downloadUrl: APP_STORE_URL, installUrl: APP_STORE_URL }
    : {}),
  operatingSystem: "iOS 16+",
  applicationCategory: "SportsApplication",
  applicationSubCategory: "Padel Coaching",
  softwareVersion: "1.0",
  inLanguage: ["en", "es"],
  author: { "@type": "Organization", name: "PadelUp" },
  publisher: { "@type": "Organization", name: "PadelUp" },
  ...(APP_IS_LIVE
    ? {
        offers: [
          {
            "@type": "Offer",
            price: "9.99",
            priceCurrency: "USD",
            name: "Monthly Plan",
            availability: "https://schema.org/InStock",
            url: APP_STORE_URL,
          },
          {
            "@type": "Offer",
            price: "49.99",
            priceCurrency: "USD",
            name: "Yearly Plan",
            availability: "https://schema.org/InStock",
            url: APP_STORE_URL,
          },
        ],
      }
    : {}),
  featureList: [
    "AI video analysis of padel shots",
    "Personalized padel training plans",
    "AI nutrition tracking",
    "24/7 expert padel chat",
    "Frame-by-frame technique breakdown",
    "Streak tracking and XP system",
    "Court finder",
    "Progress tracking",
  ],
  screenshot: [
    `${BASE_URL}/screenshots/raw/home.png`,
    `${BASE_URL}/screenshots/raw/analyze.png`,
    `${BASE_URL}/screenshots/raw/training.png`,
    `${BASE_URL}/screenshots/raw/nutrition.png`,
    `${BASE_URL}/screenshots/raw/chat.png`,
  ],
};

// Exported for use on the homepage only — NOT auto-rendered globally.
// Pages with their own FAQs (learn, compare, level-test, etc.) define
// their own FAQPage schema. The homepage owns the brand-level FAQs.
export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the AI video analysis work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload a short clip of any padel shot. Our vision AI breaks it down frame-by-frame, scoring your technique across stance, grip, swing path, body position, and racket angle on a 0–10 scale. You get specific tips and matched drills to fix what it finds.",
      },
    },
    {
      "@type": "Question",
      name: "Is PadelUp only for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — PadelUp works for every level. Beginners get foundational technique feedback. Intermediate players identify and fix specific weak spots. Advanced players use it for marginal gains and maintaining consistency across all shot types.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the nutrition tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI recognizes thousands of foods from a single photo and estimates macros (calories, protein, carbs, fat) within 5–10% accuracy. You can always adjust portions manually for precision.",
      },
    },
    {
      "@type": "Question",
      name: "How does the free trial work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You start with a 3-day free trial that covers every feature. Billing is handled by Apple through the App Store, so your payment method is required up front — Apple only charges when the trial ends. Cancel anytime from your App Store subscriptions before the trial ends and you won't be charged.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cancel anytime through the App Store. Your access continues until the end of your current billing period — no penalties, no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "What devices are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PadelUp is available on iPhone and iPad running iOS 16 or later. An Android version is coming soon — join the waitlist to get notified.",
      },
    },
    {
      "@type": "Question",
      name: "How is PadelUp different from a private padel coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private coach costs $60–100/hour and sees you once a week. PadelUp analyzes every shot, every session, and is available 24/7. It doesn't replace a coach — it gives you expert-level feedback between sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Is my video data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your videos are encrypted in transit and at rest. They're used solely for your analysis and are never shared with third parties. You can delete your data at any time from the app settings.",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
    </>
  );
}
