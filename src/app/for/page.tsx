import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { AUDIENCES, AUDIENCE_SLUGS } from "./[audience]/data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

const PAGE_URL = `${BASE_URL}/for`;

export const metadata: Metadata = {
  title: "PadelUp for Every Level — Beginners to Advanced, Coaches, Clubs",
  description:
    "Whoever you are in padel, PadelUp meets you where you are. Beginner fundamentals, intermediate plateau-breakers, advanced marginal gains, coach tooling, and club-level analytics.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "padel app by level",
    "padel app for every player",
    "padel coaching by skill level",
    "padel app beginner intermediate advanced",
  ],
  openGraph: {
    url: PAGE_URL,
    title: "PadelUp for Every Level — Beginners, Advanced, Coaches, Clubs",
    description:
      "Pick your level. PadelUp adjusts the depth, the drills, and the analysis to match where you are.",
  },
};

export default function AudienceHub() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PadelUp — Who It's For",
    itemListElement: AUDIENCE_SLUGS.map((slug, i) => {
      const a = AUDIENCES[slug];
      return {
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/for/${slug}`,
        name: a.title,
        description: a.description,
      };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Who it's for", item: PAGE_URL },
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
              Who it&apos;s for
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Pick your level. We&apos;ll meet you there.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              PadelUp adapts depth, drills, and analysis to the player. A
              beginner gets fundamentals. An advanced player gets consistency
              metrics. A coach gets tools. A club gets retention data.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCE_SLUGS.map((slug) => {
              const a = AUDIENCES[slug];
              return (
                <Link
                  key={slug}
                  href={`/for/${slug}`}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-200 hover:border-[#00E676]/30 hover:bg-white/[0.035]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00E676]/70">
                    For {slug.replace(/-/g, " ")}
                  </span>
                  <h2 className="mt-3 mb-3 text-lg font-semibold text-white group-hover:text-[#00E676]">
                    {a.h1}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/55">
                    {a.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <section className="mt-20 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Start your free trial
            </h2>
            <p className="mb-6 text-sm text-white/50">
              3 days, every feature, no credit card.
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
