import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL } from "@/lib/config";
import RacketFinder from "./finder";

export const metadata: Metadata = {
  title: "Padel Racket Finder — Free Quiz to Find Your Perfect Racket",
  description:
    "Find your perfect padel racket in 2 minutes. 5 questions about your level, style, and budget — get a recommendation matched to shape, balance, and hardness.",
  alternates: { canonical: `${BASE_URL}/racket-finder` },
  openGraph: {
    url: `${BASE_URL}/racket-finder`,
    title: "Padel Racket Finder — Free Quiz",
    description:
      "5 questions, 2 minutes. Get a padel racket recommendation matched to your level and style.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  keywords: [
    "padel racket finder",
    "best padel racket for me",
    "padel racket quiz",
    "find padel racket",
    "padel racket recommendation",
    "which padel racket",
  ],
};

export default function RacketFinderPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Racket Finder",
        item: `${BASE_URL}/racket-finder`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I choose the right padel racket?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Padel rackets vary by three key dimensions: shape (round, teardrop, diamond), balance (low, mid, high), and hardness of the EVA core (soft, medium, hard). Beginners need round/low/soft. Advanced power players need diamond/high/hard. Most intermediates land on teardrop/mid with medium hardness.",
        },
      },
      {
        "@type": "Question",
        name: "Should I buy the racket a pro player uses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only if you're at advanced or pro level yourself. Pro rackets are diamond-shape, hard EVA, high balance — they punish anything below elite technique and reduce power for recreational players. Match the racket to your level, not your idol.",
        },
      },
      {
        "@type": "Question",
        name: "How much should I spend on my first padel racket?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "€60–120 for a first racket is the sweet spot. Below €40 tends to use cheap materials. Above €150 has features (stiff carbon, high balance) you can't use yet — they only matter after a year of regular play.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-20 pb-24">
        <div className="mx-auto max-w-lg">
          <RacketFinder />
        </div>
      </main>
      <Footer />
    </>
  );
}
