import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { LEARN, LEARN_SLUGS, type LearnSlug } from "./data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

export function generateStaticParams() {
  return LEARN_SLUGS.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const data = LEARN[topic as LearnSlug];
  if (!data) return {};
  const url = `${BASE_URL}/learn/${data.slug}`;
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      url,
      type: "article",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = LEARN[topic as LearnSlug];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: `${BASE_URL}/learn`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.h1,
        item: `${BASE_URL}/learn/${data.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.h1,
    description: data.description,
    author: { "@type": "Organization", name: "PadelUp" },
    publisher: {
      "@type": "Organization",
      name: "PadelUp",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/learn/${data.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <article className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <header className="mb-14">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              Learn
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              {data.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              {data.intro}
            </p>
          </header>

          {data.sections.map((s) => (
            <section key={s.title} className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-white/65">
                {s.body}
              </p>
            </section>
          ))}

          <section className="mb-14 rounded-2xl border border-[#00E676]/15 bg-[#00E676]/[0.03] p-6 sm:p-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#00E676]">
              Key takeaways
            </h2>
            <ul className="space-y-2">
              {data.keyTakeaways.map((k) => (
                <li
                  key={k}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00E676]" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Questions
            </h2>
            <div className="space-y-4">
              {data.faq.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {f.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              {data.relatedFeatureLabel}
            </h2>
            <p className="mb-6 text-sm text-white/50">
              Try PadelUp free for 3 days. No credit card.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <AppStoreBadge href={APP_STORE_URL} height="h-12" />
              <Link
                href={data.relatedFeature}
                className="text-sm font-medium text-[#00E676] underline-offset-4 hover:underline"
              >
                Learn about the feature
              </Link>
            </div>
          </section>

          <section className="border-t border-white/[0.06] pt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              More guides
            </h2>
            <ul className="flex flex-wrap gap-3">
              {LEARN_SLUGS.filter((s) => s !== data.slug).map((s) => (
                <li key={s}>
                  <Link
                    href={`/learn/${s}`}
                    className="inline-block rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-[#00E676]/30 hover:text-white"
                  >
                    {LEARN[s].h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
