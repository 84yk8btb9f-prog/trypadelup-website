import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { COMPARISONS, COMPARE_SLUGS } from "./[vs]/data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

const PAGE_URL = `${BASE_URL}/compare`;

export const metadata: Metadata = {
  title: "PadelUp vs Alternatives — Playtomic, SwingVision, Private Coach",
  description:
    "Honest, side-by-side comparisons of PadelUp against the tools players actually use — Playtomic for booking, SwingVision for tennis-ported AI, and private coaches.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "PadelUp vs",
    "padel app comparison",
    "padel coaching alternatives",
    "best padel app",
  ],
  openGraph: {
    url: PAGE_URL,
    title: "PadelUp vs Alternatives — Honest Comparisons",
    description:
      "Where PadelUp wins. Where it doesn't. Side-by-side vs Playtomic, SwingVision, and private coaching.",
  },
};

export default function CompareHub() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PadelUp Comparisons",
    itemListElement: COMPARE_SLUGS.map((slug, i) => {
      const c = COMPARISONS[slug];
      return {
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/compare/${slug}`,
        name: c.title,
        description: c.description,
      };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Compare", item: PAGE_URL },
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
              Compare
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              PadelUp vs the alternatives.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              Most "vs" pages exist to trash the competition. These don&apos;t.
              Where PadelUp wins, we say so. Where something else is better, we
              say that too.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARE_SLUGS.map((slug) => {
              const c = COMPARISONS[slug];
              return (
                <Link
                  key={slug}
                  href={`/compare/${slug}`}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-200 hover:border-[#00E676]/30 hover:bg-white/[0.035]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00E676]/70">
                    vs {c.competitor}
                  </span>
                  <h2 className="mt-3 mb-3 text-lg font-semibold text-white group-hover:text-[#00E676]">
                    {c.h1}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/55">
                    {c.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <section className="mt-20 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Try PadelUp yourself
            </h2>
            <p className="mb-6 text-sm text-white/50">
              3 days free. Cancel anytime from the App Store. See where you land.
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
