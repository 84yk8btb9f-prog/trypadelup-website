import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { LEARN, LEARN_SLUGS } from "./[topic]/data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

const PAGE_URL = `${BASE_URL}/learn`;

export const metadata: Metadata = {
  title: "Learn Padel — Rules, Technique, Strategy",
  description:
    "Clear, coaching-grade guides to padel. Rules without jargon. The shots that define the game. Padel vs tennis for switchers. Written for players who actually want to improve.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "learn padel",
    "padel guide",
    "padel rules",
    "padel technique guide",
    "how to play padel",
  ],
  openGraph: {
    url: PAGE_URL,
    title: "Learn Padel — Clear, Coaching-Grade Guides",
    description:
      "Rules, technique, and strategy guides for padel players at every level.",
  },
};

export default function LearnHub() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PadelUp Learn",
    itemListElement: LEARN_SLUGS.map((slug, i) => {
      const l = LEARN[slug];
      return {
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/learn/${slug}`,
        name: l.title,
        description: l.description,
      };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Learn", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <article className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <header className="mb-20 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              Learn
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Padel, explained properly.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              Rules without jargon. Technique with coaching-level detail.
              Comparisons written for real decisions. No filler.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEARN_SLUGS.map((slug) => {
              const l = LEARN[slug];
              return (
                <Link
                  key={slug}
                  href={`/learn/${slug}`}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-200 hover:border-[#00E676]/30 hover:bg-white/[0.035]"
                >
                  <h2 className="mb-3 text-lg font-semibold text-white group-hover:text-[#00E676]">
                    {l.h1}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/55">
                    {l.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <section className="mt-20 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Put it into practice
            </h2>
            <p className="mb-6 text-sm text-white/50">
              3-day free trial. See your shots scored frame by frame.
            </p>
            <div className="flex justify-center">
              <AppStoreBadge href={APP_STORE_URL} height="h-12" />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
