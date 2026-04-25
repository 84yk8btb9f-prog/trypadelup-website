import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AppStoreBadge from "@/components/app-store-badge";
import PadelCourt from "@/components/diagrams/padel-court";
import TennisCourt from "@/components/diagrams/tennis-court";
import BandejaSwing from "@/components/diagrams/bandeja-swing";
import { LEARN, LEARN_SLUGS, type LearnSlug, type LearnData } from "./data";
import { APP_STORE_URL, BASE_URL } from "@/lib/config";

const PUBLISHED_AT = "2025-01-15";
const UPDATED_AT = "2026-04-25";
const UPDATED_AT_DISPLAY = "April 25, 2026";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getReadMinutes(data: LearnData): number {
  const text = [
    data.intro,
    ...data.sections.flatMap((s) => [s.title, s.body]),
    ...data.keyTakeaways,
    ...data.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 220));
}

function DiagramFor({ slug }: { slug: LearnSlug }) {
  if (slug === "padel-rules") {
    return (
      <figure className="mt-10 mb-4 rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-10">
        <PadelCourt className="mx-auto w-full max-w-2xl" />
        <figcaption className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-white/40">
          Padel court — 20 m × 10 m, net at centre
        </figcaption>
      </figure>
    );
  }
  if (slug === "padel-vs-tennis") {
    return (
      <figure className="mt-10 mb-4 rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <PadelCourt className="mx-auto w-full" />
            <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[#00E676]/80">
              Padel · 20 × 10 m · walled
            </p>
          </div>
          <div>
            <TennisCourt className="mx-auto w-full" />
            <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-white/40">
              Tennis · 23.77 × 10.97 m · open
            </p>
          </div>
        </div>
        <figcaption className="mt-8 text-center text-xs uppercase tracking-[0.18em] text-white/40">
          Courts drawn to scale
        </figcaption>
      </figure>
    );
  }
  if (slug === "bandeja-technique") {
    return (
      <figure className="mt-10 mb-4 rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-10">
        <BandejaSwing className="mx-auto w-full max-w-3xl" />
        <figcaption className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-white/40">
          Bandeja swing path — side view
        </figcaption>
      </figure>
    );
  }
  return null;
}

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

  const readMinutes = getReadMinutes(data);
  const sectionItems = data.sections.map((s) => ({
    id: slugify(s.title),
    label: s.title,
  }));
  const tocItems = [
    ...sectionItems,
    { id: "key-takeaways", label: "Key takeaways" },
    { id: "questions", label: "Questions" },
  ];

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
    datePublished: PUBLISHED_AT,
    dateModified: UPDATED_AT,
    image: `${BASE_URL}/og-image.png`,
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
        <nav
          aria-label="Breadcrumb"
          className="mx-auto mb-10 max-w-7xl px-6 sm:px-10 lg:px-16 text-xs text-white/35"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-white/60 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/20">/</li>
            <li>
              <Link
                href="/learn"
                className="hover:text-white/60 transition-colors"
              >
                Learn
              </Link>
            </li>
            <li className="text-white/20">/</li>
            <li className="text-white/55 truncate max-w-[60vw]">
              {data.h1}
            </li>
          </ol>
        </nav>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Table of contents
                </h2>
                <nav>
                  <ul className="space-y-3 border-l border-white/[0.06] pl-4">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block text-sm leading-snug text-white/45 transition-colors hover:text-white"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <article className="max-w-3xl">
              <header className="mb-12">
                <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" strokeWidth={1.75} />
                    Updated {UPDATED_AT_DISPLAY}
                  </span>
                  <span className="text-white/15">·</span>
                  <span>PadelUp</span>
                  <span className="text-white/15">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" strokeWidth={1.75} />
                    {readMinutes} min read
                  </span>
                </div>
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

              <details className="mb-10 rounded-xl border border-white/[0.06] bg-white/[0.02] lg:hidden">
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-white/70 marker:hidden">
                  Table of contents
                </summary>
                <ul className="space-y-2.5 border-t border-white/[0.04] px-5 py-4">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>

              <DiagramFor slug={data.slug} />

              {data.sections.map((s) => (
                <section key={s.title} id={slugify(s.title)} className="mb-10 scroll-mt-24">
                  <h2 className="mb-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="text-base leading-relaxed text-white/65">
                    {s.body}
                  </p>
                </section>
              ))}

              <section
                id="key-takeaways"
                className="mb-14 scroll-mt-24 rounded-2xl border border-[#00E676]/15 bg-[#00E676]/[0.03] p-6 sm:p-8"
              >
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

              <section id="questions" className="mb-14 scroll-mt-24">
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
                  Try PadelUp free for 3 days. Cancel anytime from the App Store.
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
