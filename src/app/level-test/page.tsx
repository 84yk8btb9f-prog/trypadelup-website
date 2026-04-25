import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL } from "@/lib/config";
import LevelQuiz from "./quiz";

export const metadata: Metadata = {
  title: "Padel Level Test — Find Your Level in 2 Minutes",
  description:
    "Answer 10 questions and find your padel level on the 1–7 scale used by Playtomic and the FIP. Free, instant, no signup required.",
  alternates: { canonical: `${BASE_URL}/level-test` },
  openGraph: {
    url: `${BASE_URL}/level-test`,
    title: "Padel Level Test — Find Your Level in 2 Minutes",
    description:
      "10 questions. 2 minutes. Your padel level on the 1–7 scale.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  keywords: [
    "padel level test",
    "what is my padel level",
    "padel level calculator",
    "estimate padel level",
    "Playtomic level test",
    "FIP padel level",
    "padel skill test",
  ],
};

export default function LevelTestPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Padel Level Test",
        item: `${BASE_URL}/level-test`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know my padel level?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your padel level is determined by your experience, technical ability across all shots (forehand, backhand, bandeja, víbora, glass play), tactical awareness, and competition level. The standard scale used by Playtomic and the FIP runs from 1.0 (complete beginner) to 7.0 (world-class professional). Most recreational players fall between 2.0 and 4.5.",
        },
      },
      {
        "@type": "Question",
        name: "What is the padel level scale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The padel level scale runs from 1.0 to 7.0. Levels 1.0–1.5 are complete beginners. Levels 2.0–2.5 are developing players who can sustain rallies. Levels 3.0–3.5 are intermediate players with consistent core shots. Levels 4.0–4.5 are advanced recreational players. Levels 5.0–5.5 are competitive players in leagues and tournaments. Levels 6.0+ are semi-professional and professional players.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is an online padel level test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A self-assessment test gives a reliable estimate based on your honest answers about technique, experience, and competition level. It won't match the precision of a Playtomic rating built from hundreds of real matches, but it gives you a useful starting reference — especially if you're new to padel or don't yet have a Playtomic account.",
        },
      },
      {
        "@type": "Question",
        name: "What padel level should a beginner aim for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most beginners start at level 1.0–1.5 and can expect to reach level 2.5–3.0 within 12–18 months of regular play. The jump from 2.5 to 3.5 is where most players plateau — it requires deliberate technique work on the bandeja, glass play, and consistent backhand, not just more court time.",
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
          <LevelQuiz />
        </div>
      </main>
      <Footer />
    </>
  );
}
