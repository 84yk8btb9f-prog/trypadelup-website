import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { FEATURES, FEATURE_SLUGS } from "./[feature]/data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

const PAGE_URL = `${BASE_URL}/features`;

export const metadata: Metadata = {
  title: "PadelUp Features — AI Video Analysis, Training, Nutrition, Chat",
  description:
    "Every PadelUp feature in one place. AI video analysis, personalized training plans, AI nutrition tracking, and 24/7 expert padel chat — all built for the padel player serious about improving.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "padel app features",
    "padel coaching features",
    "AI padel tools",
    "padel video analysis",
    "padel training plan",
  ],
  openGraph: {
    url: PAGE_URL,
    title: "PadelUp Features — AI Video Analysis, Training, Nutrition, Chat",
    description:
      "The full PadelUp feature set — AI video analysis, training plans, nutrition tracking, and expert coach chat.",
  },
};

export default function FeaturesHub() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PadelUp Features",
    itemListElement: FEATURE_SLUGS.map((slug, i) => {
      const f = FEATURES[slug];
      return {
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/features/${slug}`,
        name: f.title,
        description: f.description,
      };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Features", item: PAGE_URL },
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
              Features
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Every tool you need to improve at padel.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              Four AI-powered tools that work together — analyse your
              technique, plan your training, fuel your body, and ask anything
              about padel. Built for iOS.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURE_SLUGS.map((slug) => {
              const f = FEATURES[slug];
              return (
                <Link
                  key={slug}
                  href={`/features/${slug}`}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors duration-200 hover:border-[#00E676]/30 hover:bg-white/[0.035]"
                >
                  <h2 className="mb-3 text-xl font-semibold text-white group-hover:text-[#00E676]">
                    {f.h1}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-white/55">
                    {f.description}
                  </p>
                  <ul className="space-y-1.5">
                    {f.bullets.slice(0, 3).map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-xs text-white/45"
                      >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#00E676]/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>

          <section className="mt-20 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Try every feature free for 3 days
            </h2>
            <p className="mb-6 text-sm text-white/50">
              Cancel anytime from the App Store before the trial ends.
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
