import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import { COMPARISONS, COMPARE_SLUGS, type CompareSlug } from "./data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

export function generateStaticParams() {
  return COMPARE_SLUGS.map((vs) => ({ vs }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vs: string }>;
}): Promise<Metadata> {
  const { vs } = await params;
  const data = COMPARISONS[vs as CompareSlug];
  if (!data) return {};
  const url = `${BASE_URL}/compare/${data.slug}`;
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: data.title,
      description: data.description,
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ vs: string }>;
}) {
  const { vs } = await params;
  const data = COMPARISONS[vs as CompareSlug];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare",
        item: `${BASE_URL}/compare`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `PadelUp vs ${data.competitor}`,
        item: `${BASE_URL}/compare/${data.slug}`,
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
        <article className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <header className="mb-16">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              Compare · PadelUp vs {data.competitor}
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {data.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              {data.intro}
            </p>
            <p className="mt-4 rounded-xl border-l-2 border-[#00E676]/40 bg-white/[0.02] p-5 text-sm leading-relaxed text-white/65">
              {data.positioning}
            </p>
          </header>

          <section className="mb-16">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Side by side
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] text-xs uppercase tracking-[0.12em] text-white/40">
                    <th className="px-5 py-4 font-semibold">Feature</th>
                    <th className="px-5 py-4 font-semibold text-[#00E676]">
                      PadelUp
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      {data.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.table.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < data.table.length - 1
                          ? "border-b border-white/[0.04]"
                          : ""
                      }
                    >
                      <td className="px-5 py-4 text-white/75">{row.feature}</td>
                      <td className="px-5 py-4 text-white/85">{row.padelup}</td>
                      <td className="px-5 py-4 text-white/55">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {data.sections.map((s) => (
            <section key={s.title} className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-white/60">
                {s.body}
              </p>
            </section>
          ))}

          <section className="mb-16 rounded-2xl border border-[#00E676]/15 bg-[#00E676]/[0.03] p-6 sm:p-8">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#00E676]">
              The verdict
            </span>
            <p className="text-lg leading-relaxed text-white/80">
              {data.verdict}
            </p>
          </section>

          <section className="mb-16">
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
              Try PadelUp free for 3 days
            </h2>
            <p className="mb-6 text-sm text-white/50">
              Every feature. Cancel anytime from the App Store.
            </p>
            <div className="flex justify-center">
              <AppStoreBadge href={APP_STORE_URL} height="h-12" />
            </div>
          </section>

          <section className="border-t border-white/[0.06] pt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Other comparisons
            </h2>
            <ul className="flex flex-wrap gap-3">
              {COMPARE_SLUGS.filter((s) => s !== data.slug).map((s) => (
                <li key={s}>
                  <Link
                    href={`/compare/${s}`}
                    className="inline-block rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-[#00E676]/30 hover:text-white"
                  >
                    vs {COMPARISONS[s].competitor}
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
