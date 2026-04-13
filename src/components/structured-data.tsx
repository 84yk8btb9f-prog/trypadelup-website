// JSON-LD structured data for SEO
// Injected into <head> via layout.tsx

const APP_STORE_URL =
  "https://apps.apple.com/app/padelup/id0000000000";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PadelUp",
  url: "https://trypadelup.com",
  logo: "https://trypadelup.com/og-image.png",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PadelUp",
  url: "https://trypadelup.com",
  description:
    "AI-powered padel coaching app — analyze your technique, track nutrition, and level up your game.",
};

const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "PadelUp — AI Padel Coach",
  description:
    "AI-powered padel coaching — frame-by-frame technique analysis, personalized training plans, AI nutrition tracking, and 24/7 expert chat. Trusted by 8,000+ players across 40+ countries.",
  url: APP_STORE_URL,
  operatingSystem: "iOS",
  applicationCategory: "SportsApplication",
  offers: [
    {
      "@type": "Offer",
      price: "9.99",
      priceCurrency: "USD",
      name: "Monthly Plan",
    },
    {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      name: "Yearly Plan",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8000",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI video analysis",
    "Personalized training plans",
    "AI nutrition tracking",
    "24/7 expert padel chat",
    "Frame-by-frame technique breakdown",
    "Streak tracking and XP system",
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
