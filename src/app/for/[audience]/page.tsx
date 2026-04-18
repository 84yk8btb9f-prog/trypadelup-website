import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { AUDIENCES, AUDIENCE_SLUGS, type AudienceSlug } from "./data";
import { APP_STORE_URL, BASE_URL as SITE_URL } from "@/lib/config";

export function generateStaticParams() {
  return AUDIENCE_SLUGS.map((audience) => ({ audience }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  const data = AUDIENCES[audience as AudienceSlug];
  if (!data) return {};
  const url = `${SITE_URL}/for/${data.slug}`;
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

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const data = AUDIENCES[audience as AudienceSlug];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: data.h1,
        item: `${SITE_URL}/for/${data.slug}`,
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
      <main className="flex-1 pt-24 pb-24 px-6 sm:px-10 lg:px-16">
        <article className="mx-auto max-w-3xl">
          <header className="mb-14">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              For {data.slug.replace(/-/g, " ")}
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {data.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              {data.intro}
            </p>
            <div className="mt-8">
              <AppStoreBadge href={APP_STORE_URL} height="h-12" />
            </div>
          </header>

          <section className="mb-14">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
              The problem
            </h2>
            <div className="space-y-6">
              {data.painPoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
              How PadelUp helps
            </h2>
            <div className="space-y-6">
              {data.valueProps.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-[#00E676]/15 bg-[#00E676]/[0.03] p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
              What you'll notice
            </h2>
            <ul className="space-y-3">
              {data.outcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 text-base text-white/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00E676]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Start your free trial
            </h2>
            <p className="mb-6 text-sm text-white/50">
              3 days, every feature. Cancel anytime from the App Store.
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
