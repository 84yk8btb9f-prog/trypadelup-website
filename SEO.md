# SEO — trypadelup.com

Everything done, why, and what's left. Written so a non-SEO person can read it.

## What's already in place (2026-04-18)

### Indexation
- `robots.ts` allows all major crawlers (Google, Bing, Yandex, DuckDuckGo, Applebot) plus AI crawlers (GPTBot, ClaudeBot, Perplexity, etc.)
- `sitemap.ts` lists every canonical URL: home, 4 hub pages (`/features`, `/for`, `/compare`, `/learn`), all dynamic child pages, `/privacy`, `/terms`
- `/invite` is `noindex, follow` — transactional page, correctly excluded from the index
- `/privacy` and `/terms` are `index: true` — trust signals for E-E-A-T

### Structured data (JSON-LD)
- `Organization` — with `sameAs` to Instagram, X, TikTok
- `WebSite` — for site-wide identity
- `MobileApplication` — for the iOS app (no fake `aggregateRating`; add once the app has real reviews)
- `FAQPage` — 8 site-wide FAQ entries on home
- `BreadcrumbList` — on every hub and child page
- `Article` — on each `/learn/*` guide
- `ItemList` — on each hub page (`/features`, `/for`, `/compare`, `/learn`)
- Per-page `FAQPage` — on `/features/*`, `/compare/*`, and `/learn/*`

### On-page
- Unique `title`, `description`, `keywords`, and canonical URL on every page
- One `<h1>` per page with the primary keyword
- Clean `<h2>` / `<h3>` hierarchy
- Dynamic OG images per route via `opengraph-image.tsx` (no more broken shares)

### Internal linking
- Navbar links every hub page (`Features`, `For you`, `Compare`, `Learn`, `Pricing`)
- Footer has four link columns pointing to every hub + every child page (previously orphaned)
- Every `/compare/*` page cross-links to its siblings
- Every `/learn/*` page cross-links to its siblings + a related feature

## URL map

```
/                               Home
/features                       Hub (ItemList schema)
  /features/ai-video-analysis
  /features/training-plans
  /features/ai-nutrition
  /features/24-7-chat
/for                            Hub
  /for/beginners
  /for/intermediate-players
  /for/advanced-players
  /for/coaches
  /for/clubs
/compare                        Hub (honest comparisons)
  /compare/vs-playtomic
  /compare/vs-swingvision
  /compare/vs-private-coach
/learn                          Hub (informational/article)
  /learn/padel-rules
  /learn/padel-vs-tennis
  /learn/bandeja-technique
/privacy                        Indexed trust signal
/terms                          Indexed trust signal
/invite                         noindex (transactional)
```

## Keyword strategy

### Primary cluster — commercial intent (home + feature pages)
| Keyword | Intent | Primary page |
|---|---|---|
| AI padel coach | Commercial | `/` |
| padel coaching app | Commercial | `/` |
| padel video analysis | Commercial | `/features/ai-video-analysis` |
| padel training plan | Commercial | `/features/training-plans` |
| padel nutrition app | Commercial | `/features/ai-nutrition` |

### Audience cluster — long-tail buyer intent
| Keyword | Primary page |
|---|---|
| padel app for beginners | `/for/beginners` |
| padel app for intermediate players | `/for/intermediate-players` |
| padel app for advanced players | `/for/advanced-players` |
| padel app for coaches | `/for/coaches` |
| padel app for clubs | `/for/clubs` |

### Comparison cluster — decision-stage intent
| Keyword | Primary page |
|---|---|
| PadelUp vs Playtomic | `/compare/vs-playtomic` |
| SwingVision padel alternative | `/compare/vs-swingvision` |
| padel coach cost / AI vs private coach | `/compare/vs-private-coach` |

### Informational cluster — top-of-funnel
| Keyword | Primary page |
|---|---|
| padel rules | `/learn/padel-rules` |
| padel vs tennis | `/learn/padel-vs-tennis` |
| bandeja technique | `/learn/bandeja-technique` |

## What to do when the app goes live

1. **Update `src/lib/config.ts`** — set `APP_STORE_ID` to the real ID. Every App Store link across the site updates automatically.
2. **Re-enable App Store Connect metadata** — `itunes.appId` in `layout.tsx` will light up automatically via the `APP_IS_LIVE` check.
3. **Submit sitemap** — `https://www.trypadelup.com/sitemap.xml` to:
   - Google Search Console
   - Bing Webmaster Tools
   - Yandex Webmaster
4. **Add verification codes** in `src/app/layout.tsx`:
   - `verification.google` — from Search Console
   - `verification.other["msvalidate.01"]` — from Bing
   - `verification.yandex` — from Yandex Webmaster
5. **Once you have ≥50 real App Store reviews**: re-introduce `aggregateRating` in `src/components/structured-data.tsx` with the real rating and review count. Google will pick it up on the next crawl and start showing star ratings in SERPs.

## Follow-up SEO work (in priority order)

### Immediate (post-launch)
1. **Replace Fontshare `<link>` stylesheet with `next/font/local`** — download Clash Display + Satoshi `.woff2` files from Fontshare and load them via `next/font/local` to eliminate render-blocking CSS. Expected LCP improvement: 200–500 ms.
2. **Write a homepage OG image variant** per A/B test — right now every page uses per-route OG; homepage could benefit from multiple variants for social-share CTR testing.
3. **Add `/api/feed.xml`** if you start a blog — RSS is still used by AI crawlers for freshness signals.

### Month 1
1. **Spanish localization** (`/es/*`) — Spain is the largest padel market globally (~5M players). Clone the structure in Spanish; set `hreflang` tags. Estimated traffic lift: 40–60% of total organic once established.
2. **Expand `/learn/*`** — add 10 more topics:
   - `/learn/padel-grip` · `/learn/padel-footwork` · `/learn/vibora-technique`
   - `/learn/padel-court-positioning` · `/learn/how-to-serve-padel`
   - `/learn/padel-equipment-guide` · `/learn/best-padel-racket`
   - `/learn/padel-strategy-beginners` · `/learn/doubles-positioning`
   - `/learn/padel-warmup-routine`
3. **Expand `/compare/*`** — add one more for each competitor discovered via organic searches: `vs-coachs-eye`, `vs-padel-intelligence`, etc.

### Quarter 1
1. **Geo pages** — `/padel-app/[country]` for top 10 markets. Programmatic but with locally-meaningful content (court directories, league info, local coach quotes).
2. **Blog/changelog** — `/blog/*` with product updates, feature dives, case studies. Critical for ongoing freshness signals to Google.
3. **Video content strategy** — each `/learn/*` page should eventually have an embedded YouTube video. Video schema markup doubles SERP real estate.
4. **Backlink strategy**:
   - Pitch articles to padel publications (Padel News, Padel FIP)
   - Sponsor tournament coverage for organic brand mentions
   - Guest posts on Playtomic blog, local club blogs

### Ongoing
- **Monitor Search Console** weekly for the first 3 months, monthly after. Watch: indexation coverage, CWV, click-through rates per query.
- **Refresh every 3 months** — any page that has slipped in rankings gets reviewed and updated.
- **Track keyword cannibalisation** — if multiple pages compete for the same query, consolidate.

## Technical SEO notes

- Framework: Next.js 16.2.3 (App Router) on Vercel
- All pages are statically generated (`○ Static` or `● SSG`) — no server-side latency
- Image optimization: Next.js `<Image>` component with `.webp` auto-generation
- Fonts: Fontshare (render-blocking — see follow-up #1 above)
- Microsoft Clarity analytics installed (`wb1lb6hljq`)
- No GA4 yet — add when ready to track conversions
