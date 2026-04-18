# ASO — App Store Connect metadata for PadelUp

Draft metadata to paste into App Store Connect when the app is ready to submit. Keyword choices are based on what padel players actually search in the App Store, not web SEO.

## Core fields

### App name (30 chars max)
```
PadelUp: AI Padel Coach
```
(22 chars — leaves room to iterate without breaking)

### Subtitle (30 chars max)
```
Technique, Plans, Nutrition
```
(27 chars — packs three feature keywords)

Alternates to A/B test later:
- `Frame-by-frame AI analysis` (26)
- `Padel coaching in your pocket` (29)
- `Your AI padel coach, 24/7` (25)

### Primary category
`Sports`

### Secondary category
`Health & Fitness`

## Keywords field (100 chars, comma-separated, no spaces after commas)

Apple indexes these but hides them from users. Use every character. Avoid repeating words that already appear in app name or subtitle (Apple indexes those separately).

### English (US) — 100 chars exact
```
padel,coach,video,analysis,training,drills,technique,sport,racket,nutrition,macros,fitness,court
```
(98 chars)

### Spanish (ES-ES) — 100 chars exact
```
padel,pádel,entrenador,analisis,video,tecnica,jugador,raqueta,deporte,nutricion,macros,clase,pista
```
(99 chars)

## Promotional text (170 chars, editable without re-review)

Use this for short-term campaigns — launch, product updates, seasonal pushes. Change freely.

Default:
```
Your swing, scored frame by frame. A training plan built around your weaknesses. And an AI padel coach that remembers every shot you've ever analysed.
```
(151 chars)

## Description (4,000 chars max)

The long-form field. First two lines are the only ones visible without tapping "more" — treat them as ad copy.

```
The AI padel coach that sees every frame of your swing, builds a plan around your weaknesses, and answers any padel question at 3 a.m.

Upload a five-second clip of any shot. PadelUp's vision AI scores your stance, grip, swing path, body position, and racket angle on a 0–10 scale. When your bandeja breaks, we show you the exact frame your wrist dropped — and hand you the drill that fixes it.

WHAT'S INSIDE

Frame-by-frame video analysis
Eight padel shot types recognised — forehand, backhand, bandeja, víbora, smash, volley, lob, and glass play. Scored against padel-specific criteria. No generic tennis heuristics.

Personalized weekly training plans
Your plan rebuilds every week based on your latest scores. Technique, footwork, positioning, fitness, and tactics — with court, wall, and shadow drill options. Your weakest shot always comes first.

AI nutrition tracking
Photo-to-macros in under three seconds. Calories, protein, carbs, and fats, adjusted for training load. A match-day calorie target that actually reflects what a match burns.

24/7 AI padel coach chat
Ask anything. Technique, tactics, equipment, rules, edge cases. Trained on professional match data and coaching manuals. Remembers your analysis history so answers are personal.

WHO IT'S FOR

Beginners — learn the fundamentals with feedback loop that doesn't require a coach.
Intermediate players — break through plateaus with ruthless weak-spot identification.
Advanced players — track marginal gains and consistency across all shot types.
Coaches — give your students a tool that works between sessions.
Clubs — reduce churn at the intermediate tier with measurable member improvement.

WHY PADELUP IS DIFFERENT

Built for padel from day one — not ported from tennis. Padel-native shot types. Coaching-level scoring depth. No generic sports-app feel.

PRIVACY

Your videos are encrypted in transit and at rest. Used only for your own analysis. Never shared with third parties. Delete anytime from settings.

SUBSCRIPTION

3-day free trial, every feature included, no credit card required. Monthly and yearly plans available. Cancel any time from the App Store.
```

## Version release notes template

```
Version 1.x brings:
- [headline feature]
- [second feature or fix]
- [third feature or fix]
- Performance and stability improvements.

As always, keep uploading clips. Keep sending feedback. The AI gets sharper every time.
```

## Screenshots — 6.7" iPhone (1290 x 2796)

Order and headline copy for each:

1. **Hero** — "The AI padel coach in your pocket." · home screen mockup
2. **Analysis** — "Frame-by-frame scoring on every shot." · analysis screen with scores overlaid
3. **Plan** — "A training plan that adapts to your weakest shot." · weekly plan view
4. **Nutrition** — "Snap your plate. See your macros." · nutrition tracking screen
5. **Chat** — "Ask anything. Get the answer a pro coach would give." · chat screen
6. **Outcome** — "Built for players serious about improvement." · progress chart

## iPad screenshots — 2048 x 2732

Same sequence, landscape variants where applicable.

## App Preview video (30s max)

Storyboard:
- 0–3s: split-screen — player hits a shot (left), score appears frame by frame (right)
- 3–8s: training plan fans out week by week
- 8–13s: food photo → macros appear
- 13–18s: chat question → answer
- 18–23s: progress chart climbs
- 23–30s: tagline + CTA: "PadelUp. The AI padel coach in your pocket."

## Localization plan

Launch with:
- English (US)
- English (UK)
- Spanish (Spain)  — 40% of global padel players are in Spain
- Spanish (Mexico) — emerging LATAM market

Phase 2:
- Italian — strong padel market
- Swedish — top per-capita padel market globally
- Portuguese (Portugal + Brazil)
- French
- Dutch

## Checklist before submission

- [ ] Replace `APP_STORE_ID` in `src/lib/config.ts` with the real App Store ID
- [ ] Add the real App Store ID to `src/app/layout.tsx` `itunes.appId`
- [ ] Re-enable `offers` in `src/components/structured-data.tsx` once pricing is confirmed
- [ ] Once the app has genuine reviews (≥50), re-introduce `aggregateRating` in the MobileApplication schema — Google requires real review data
- [ ] Add Google, Bing, Yandex verification codes in `src/app/layout.tsx` after creating each Webmaster account
- [ ] Submit sitemap to Search Console + Bing Webmaster Tools
- [ ] Claim App Store listing in Apple Search Ads Basic for organic keyword insights
