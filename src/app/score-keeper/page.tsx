import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL } from "@/lib/config";
import PadelScoreboard from "./scoreboard";

export const metadata: Metadata = {
  title: "Padel Score Keeper — Free Online Match Scoreboard",
  description:
    "Keep score in your padel match online. Tracks points, games, sets, deuce, advantage, golden point, and STAR POINT. Free, instant, no signup.",
  alternates: { canonical: `${BASE_URL}/score-keeper` },
  openGraph: {
    url: `${BASE_URL}/score-keeper`,
    title: "Padel Score Keeper — Free Online Match Scoreboard",
    description:
      "Free online padel scoreboard. Tracks the full match — points, games, sets, deuce, golden point, STAR POINT, tiebreaks.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  keywords: [
    "padel score keeper",
    "padel scoreboard",
    "padel score app",
    "padel match score",
    "online padel scoreboard",
    "padel scoring tool",
  ],
};

export default function ScoreKeeperPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Score Keeper",
        item: `${BASE_URL}/score-keeper`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does padel scoring work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Padel uses tennis scoring: points are 0, 15, 30, 40, game. Six games (with a two-game lead) wins a set. Best of three sets wins the match. At 40-40 (deuce), you can use traditional advantage scoring, Classic Golden Point, or the new STAR POINT introduced by FIP in 2026.",
        },
      },
      {
        "@type": "Question",
        name: "What is the STAR POINT in padel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "STAR POINT is the FIP's new 2026 deciding-point system. Unlike Classic Golden Point (decisive point at the first deuce), STAR POINT only kicks in after multiple deuces in the same game. Tournament organisers choose which scoring system to use.",
        },
      },
      {
        "@type": "Question",
        name: "When does a tiebreak start in padel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When a set reaches 6-6, a tiebreak starts. First team to 7 points wins the tiebreak (and the set), as long as they're ahead by two. Serving alternates every two points in the tiebreak.",
        },
      },
      {
        "@type": "Question",
        name: "How many sets are in a padel match?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Best of three sets — first team to win two sets wins the match. A typical two-set match lasts 60–90 minutes; a three-set match runs 90–120 minutes.",
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
      <main className="flex-1 pt-24 pb-24">
        <div className="mx-auto max-w-xl px-6">
          <header className="mb-10 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              Tool · Free
            </span>
            <h1
              className="font-heading font-bold text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              Padel score keeper
            </h1>
            <p className="text-base text-white/45 max-w-md mx-auto leading-relaxed">
              Track points, games, sets and deuce situations. Supports
              traditional advantage, Classic Golden Point, and STAR POINT (2026).
            </p>
          </header>
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015]">
            <PadelScoreboard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
