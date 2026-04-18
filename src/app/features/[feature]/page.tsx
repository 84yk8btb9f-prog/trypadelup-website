import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PhoneFrame from "@/components/mockups/phone-frame";
import AppStoreBadge from "@/components/app-store-badge";
import { FEATURES, FEATURE_SLUGS, type FeatureSlug } from "./data";
import { APP_STORE_URL, BASE_URL as SITE_URL } from "@/lib/config";

export function generateStaticParams() {
  return FEATURE_SLUGS.map((feature) => ({ feature }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}): Promise<Metadata> {
  const { feature } = await params;
  const data = FEATURES[feature as FeatureSlug];
  if (!data) return {};
  const url = `${SITE_URL}/features/${data.slug}`;
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: data.title,
      description: data.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature } = await params;
  const data = FEATURES[feature as FeatureSlug];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: `${SITE_URL}/features`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.h1,
        item: `${SITE_URL}/features/${data.slug}`,
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <article className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <header className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center mb-20">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
                Feature
              </span>
              <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {data.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/55">
                {data.intro}
              </p>
              <ul className="mt-8 space-y-2">
                {data.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00E676]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <AppStoreBadge href={APP_STORE_URL} height="h-12" />
              </div>
            </div>
            <div className="mx-auto w-56 sm:w-64 lg:w-72">
              <PhoneFrame>
                <div className="absolute inset-0">
                  <Image
                    src={data.mockup}
                    alt={data.mockupAlt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </PhoneFrame>
            </div>
          </header>

          <section className="mb-20">
            <h2 className="mb-8 font-heading text-2xl font-semibold text-white sm:text-3xl">
              How it works
            </h2>
            <ol className="space-y-6">
              {data.howItWorks.map((s, i) => (
                <li
                  key={s.step}
                  className="flex gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#00E676]/30 text-sm font-semibold text-[#00E676]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {s.step}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 font-heading text-2xl font-semibold text-white sm:text-3xl">
              What's under the hood
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {data.details.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="mb-8 font-heading text-2xl font-semibold text-white sm:text-3xl">
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

          <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Try it free for 3 days
            </h2>
            <p className="mb-6 text-sm text-white/50">
              Every feature. Cancel anytime from the App Store.
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
