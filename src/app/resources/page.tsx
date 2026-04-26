import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL } from "@/lib/config";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Padel Resources — Federations, Rules, Courts & More",
  description:
    "A curated list of the most useful padel resources: governing bodies, professional circuits, court finders, rules, and community links.",
  alternates: { canonical: `${BASE_URL}/resources` },
  openGraph: {
    url: `${BASE_URL}/resources`,
    title: "Padel Resources — Federations, Rules, Courts & More",
    description:
      "Curated padel resources: federations, tour circuits, court finders, rules, and community.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  keywords: [
    "padel resources",
    "padel federation",
    "padel training resources",
    "padel rules",
    "padel community",
    "FIP padel",
    "World Padel Tour",
  ],
};

type Resource = {
  name: string;
  url: string;
  description: string;
};

type Category = {
  title: string;
  description: string;
  items: Resource[];
};

const CATEGORIES: Category[] = [
  {
    title: "Governing bodies & tours",
    description: "The official organisations that run padel globally.",
    items: [
      {
        name: "International Padel Federation (FIP)",
        url: "https://fip.es",
        description:
          "The world governing body for padel. Official rules, rankings, and international competition calendar.",
      },
      {
        name: "Premier Padel (A1 Padel)",
        url: "https://premierpadel.com",
        description:
          "The FIP-sanctioned elite professional padel circuit. Live scores, player rankings, and match highlights.",
      },
      {
        name: "World Padel Tour",
        url: "https://worldpadeltour.com",
        description:
          "Long-running professional padel circuit with an extensive archive of matches and player data.",
      },
    ],
  },
  {
    title: "Find courts & book",
    description: "The main platforms for finding and booking padel courts.",
    items: [
      {
        name: "Playtomic",
        url: "https://playtomic.com",
        description:
          "The largest court-booking platform in Europe. Also provides player level ratings from 1.0 to 7.0.",
      },
      {
        name: "Padel Nuestro",
        url: "https://padelcamp.com",
        description:
          "Court finder and equipment retailer, strong in southern Europe.",
      },
    ],
  },
  {
    title: "Rules & officiating",
    description: "Where to find the official rules and understand padel scoring.",
    items: [
      {
        name: "FIP Official Rulebook",
        url: "https://fip.es/rules",
        description:
          "The complete, official rules of padel. Covers serve, let calls, glass rules, scoring, and edge cases.",
      },
      {
        name: "Padel Reference",
        url: "https://padelreference.com",
        description:
          "Rules explanations, shot definitions, and officiating guides in plain language.",
      },
    ],
  },
  {
    title: "Community & learning",
    description: "Where padel players discuss technique, gear, and the game.",
    items: [
      {
        name: "r/padel — Reddit",
        url: "https://reddit.com/r/padel",
        description:
          "The largest English-language padel community. Technique questions, gear recommendations, and match clips.",
      },
      {
        name: "YouTube: Premier Padel",
        url: "https://youtube.com/@PremierPadel",
        description:
          "Full match replays and highlights from the top professional circuit. Essential for studying high-level tactics.",
      },
    ],
  },
  {
    title: "Free tools",
    description: "Interactive tools — no signup required.",
    items: [
      {
        name: "Padel level test",
        url: "/level-test",
        description:
          "10 questions. Find your level on the 1–7 scale in under 2 minutes.",
      },
      {
        name: "Padel score keeper",
        url: "/score-keeper",
        description:
          "Track points, games, sets and deuce situations live during a match. Supports advantage, golden point, and STAR POINT scoring.",
      },
      {
        name: "Padel racket finder",
        url: "/racket-finder",
        description:
          "5 questions about your level and style. Get a racket recommendation matched to shape, balance, and hardness.",
      },
    ],
  },
  {
    title: "From PadelUp",
    description: "Our own guides for players at every level.",
    items: [
      {
        name: "Learn padel — guides & technique",
        url: "/learn",
        description:
          "30+ guides covering rules, shot technique, tactics, training, and AI coaching.",
      },
      {
        name: "AI padel coaching — how it works",
        url: "/learn/ai-padel-coaching",
        description:
          "What AI video analysis actually does, how training plans are built, and where it fits alongside a human coach.",
      },
      {
        name: "Padel rules 2026",
        url: "/learn/padel-rules-2026",
        description:
          "STAR POINT, service trajectory, time enforcement, heat protocol — every FIP rule change effective January 1, 2026.",
      },
    ],
  },
];

export default function ResourcesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Padel Resources",
        item: `${BASE_URL}/resources`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <article className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <header className="mb-16">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              Resources
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl mb-5">
              Padel resources
            </h1>
            <p className="text-lg leading-relaxed text-white/50 max-w-xl">
              The most useful external links for padel players — governing
              bodies, professional circuits, court finders, rules, and
              community.
            </p>
          </header>

          <div className="space-y-16">
            {CATEGORIES.map((cat) => (
              <section key={cat.title}>
                <h2 className="font-heading text-xl font-semibold text-white mb-1 capitalize">
                  {cat.title}
                </h2>
                <p className="text-sm text-white/40 mb-6">{cat.description}</p>
                <div className="space-y-3">
                  {cat.items.map((item) => {
                    const isExternal = item.url.startsWith("http");
                    const linkProps = isExternal
                      ? {
                          href: item.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { href: item.url };

                    return (
                      <Link
                        key={item.name}
                        {...linkProps}
                        className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-white group-hover:text-[#00E676] transition-colors">
                              {item.name}
                            </span>
                            {isExternal && (
                              <ExternalLink className="size-3 text-white/25 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-sm leading-relaxed text-white/45">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
