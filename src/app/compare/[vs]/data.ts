export type CompareSlug =
  | "vs-playtomic"
  | "vs-swingvision"
  | "vs-private-coach";

export interface CompareData {
  slug: CompareSlug;
  competitor: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  positioning: string;
  heroScreenshot: string;
  heroScreenshotAlt: string;
  table: {
    feature: string;
    padelup: string;
    competitor: string;
  }[];
  sections: { title: string; body: string }[];
  verdict: string;
  keywords: string[];
  faq: { q: string; a: string }[];
}

export const COMPARISONS: Record<CompareSlug, CompareData> = {
  "vs-playtomic": {
    slug: "vs-playtomic",
    competitor: "Playtomic",
    h1: "PadelUp vs Playtomic — coaching and booking, side by side",
    title: "PadelUp vs Playtomic — AI Coaching vs Court Booking Compared",
    description:
      "Playtomic books the court. PadelUp teaches you to win on it. Here's how the two apps compare — and why most serious players use both.",
    intro:
      "Playtomic is the default court-booking app across Europe. It does one thing and does it well: find courts, book times, match with players. It doesn't coach you. PadelUp is the opposite — it analyses your technique, builds your training plan, and answers padel questions 24/7. Most players who are actually trying to improve use both.",
    positioning:
      "These two apps don't compete — they complement. Think of Playtomic as your diary and PadelUp as your coach.",
    heroScreenshot: "/screenshots/raw/home.png",
    heroScreenshotAlt: "PadelUp home screen showing training progress and quick access to analysis",
    table: [
      { feature: "Core function", padelup: "AI padel coaching", competitor: "Court booking + matchmaking" },
      { feature: "AI video analysis", padelup: "Frame-by-frame, 0–10 scores", competitor: "None" },
      { feature: "Personalised training plans", padelup: "Weekly, adapts to your scores", competitor: "None" },
      { feature: "AI nutrition tracking", padelup: "Photo-to-macros, training-load aware", competitor: "None" },
      { feature: "24/7 coach chat", padelup: "Trained on pro matches", competitor: "None" },
      { feature: "Court booking", padelup: "Not offered", competitor: "Primary feature" },
      { feature: "Matchmaking by level", padelup: "Not offered", competitor: "Primary feature" },
      { feature: "Level rating system", padelup: "Technique scores per shot type", competitor: "Playtomic level (1.0–7.0)" },
      { feature: "Platforms", padelup: "iOS (Android soon)", competitor: "iOS + Android + web" },
    ],
    sections: [
      {
        title: "When Playtomic wins",
        body: "You need a court and a partner at 7pm Thursday. Playtomic has every bookable court in your city and a level-matching system that's been tuned for years. Nothing else comes close for the logistics of actually getting on court.",
      },
      {
        title: "When PadelUp wins",
        body: "You already play two or three times a week and your progress has stalled. You can't tell if your backhand is breaking from a grip issue or a stance issue. Playtomic can't help with that — PadelUp tells you the exact frame the error starts and hands you the drill that fixes it.",
      },
      {
        title: "Using them together",
        body: "Book your court on Playtomic. Record a five-second clip of a weak shot during the session. Upload to PadelUp that evening. Get your scored analysis and a targeted drill for next week's booking. That loop is how you turn court time into actual improvement.",
      },
    ],
    verdict:
      "Not a replacement for Playtomic — a complement. Use Playtomic to book. Use PadelUp to improve.",
    keywords: [
      "PadelUp vs Playtomic",
      "Playtomic alternative",
      "padel coaching app vs Playtomic",
      "Playtomic with coaching",
      "padel video analysis app",
    ],
    faq: [
      {
        q: "Does PadelUp book courts?",
        a: "No. PadelUp is a coaching app. For court booking and matchmaking, Playtomic is the strongest option in most markets.",
      },
      {
        q: "Can I import my Playtomic level into PadelUp?",
        a: "Not automatically. You can enter your Playtomic level when setting up your PadelUp profile — the AI uses it as a starting reference, then adjusts as it scores your actual shots.",
      },
      {
        q: "Do I need both apps?",
        a: "If you're playing casually once a month, one is probably enough. If you're trying to improve, most serious players use both.",
      },
    ],
  },
  "vs-swingvision": {
    slug: "vs-swingvision",
    competitor: "SwingVision",
    h1: "PadelUp vs SwingVision — padel AI vs tennis AI ported to padel",
    title: "PadelUp vs SwingVision — Padel-Native AI Compared",
    description:
      "SwingVision is a tennis-first AI that added padel. PadelUp was built for padel from day one. Here's how the two video-analysis apps actually compare for padel players.",
    intro:
      "SwingVision is an excellent AI for tennis — line calling, rally stats, swing analysis. It added padel support, but the underlying model is tennis-trained. PadelUp was built for padel from day one, with shot types (bandeja, víbora, glass play) and scoring criteria that don't exist in tennis. If you play padel specifically, that difference matters.",
    positioning:
      "Tennis-ported AI vs padel-native AI. Both do video analysis. One understands bandeja; the other doesn't.",
    heroScreenshot: "/screenshots/raw/analyze.png",
    heroScreenshotAlt: "PadelUp frame-by-frame video analysis scoring a padel shot across 5 technique dimensions",
    table: [
      { feature: "Primary sport", padelup: "Padel", competitor: "Tennis (padel added)" },
      { feature: "Padel shot types recognised", padelup: "8 (inc. bandeja, víbora, glass)", competitor: "Limited" },
      { feature: "Scoring framework", padelup: "Padel-specific criteria", competitor: "Tennis-derived" },
      { feature: "Video analysis depth", padelup: "Frame-by-frame, 5 dimensions", competitor: "Frame-by-frame, tennis dimensions" },
      { feature: "Training plans", padelup: "Padel-specific, adaptive", competitor: "Tennis-first" },
      { feature: "Nutrition tracking", padelup: "Built in", competitor: "Not offered" },
      { feature: "24/7 coach chat", padelup: "Trained on pro padel data", competitor: "Not offered" },
      { feature: "Line calling", padelup: "Not offered", competitor: "Strong (tennis-first)" },
      { feature: "Platforms", padelup: "iOS", competitor: "iOS + Apple TV" },
    ],
    sections: [
      {
        title: "Why padel-native matters",
        body: "A bandeja isn't a slow overhead. A víbora isn't a spin serve. Glass play has no tennis equivalent. A tennis-trained model sees these shots and scores them against criteria that don't apply. The feedback is technically plausible and subtly wrong — the worst kind of coaching feedback.",
      },
      {
        title: "Where SwingVision is stronger",
        body: "If you also play tennis seriously, SwingVision's line-calling and match-stats features are genuinely impressive and don't have a padel equivalent. For a tennis/padel hybrid athlete, SwingVision covers the tennis half better.",
      },
      {
        title: "Where PadelUp is stronger",
        body: "Shot-type coverage, scoring depth per shot, and the surrounding ecosystem (training plans, nutrition, 24/7 chat) are all padel-native. If padel is your primary sport, everything in PadelUp was designed for it — not adapted from tennis.",
      },
    ],
    verdict:
      "If you play tennis and padel, SwingVision covers the tennis side better. If padel is your sport, PadelUp was built for it from the ground up.",
    keywords: [
      "PadelUp vs SwingVision",
      "SwingVision padel",
      "SwingVision alternative padel",
      "padel AI video analysis",
      "best padel video analysis app",
    ],
    faq: [
      {
        q: "Does SwingVision work for padel?",
        a: "Yes, it has padel support, but the underlying AI was trained on tennis. Padel-specific shots (bandeja, víbora, glass) are scored against tennis-adjacent criteria that don't always apply.",
      },
      {
        q: "Does PadelUp do line calling like SwingVision?",
        a: "No. PadelUp focuses on technique analysis and coaching, not match officiating.",
      },
      {
        q: "Which is better for a beginner?",
        a: "PadelUp — the drills, training plans, and coach chat are designed for players who need structured guidance, not just video annotation.",
      },
    ],
  },
  "vs-private-coach": {
    slug: "vs-private-coach",
    competitor: "a private coach",
    h1: "PadelUp vs a private padel coach — which makes you improve faster",
    title: "PadelUp vs Private Padel Coach — Cost, Depth, Availability",
    description:
      "A private padel coach costs $60–100 an hour and sees you once a week. PadelUp costs less per month and analyses every session. Here's the honest trade-off.",
    intro:
      "A good private padel coach is the fastest way to fix a broken shot — while you're on court with them. The limitation is time and cost. You get one hour a week, the rest of your training happens unmonitored, and a full package runs into thousands. PadelUp isn't trying to replace a coach. It's trying to be the other 167 hours a week.",
    positioning:
      "Private coach: deep, expensive, weekly. PadelUp: broad, affordable, always on. Not a replacement — a complement.",
    heroScreenshot: "/screenshots/raw/training.png",
    heroScreenshotAlt: "PadelUp personalized weekly padel training plan tailored to the player's weakest shots",
    table: [
      { feature: "Typical cost", padelup: "Monthly subscription", competitor: "$60–100 per hour" },
      { feature: "Availability", padelup: "24/7", competitor: "Weekly, by appointment" },
      { feature: "Sessions analysed", padelup: "Every clip you upload", competitor: "The ones they attend" },
      { feature: "Objective technique scoring", padelup: "0–10 across 5 dimensions", competitor: "Subjective, coach-dependent" },
      { feature: "In-person feel correction", padelup: "Not possible", competitor: "Primary strength" },
      { feature: "Live tactical adjustment", padelup: "Not possible", competitor: "Primary strength" },
      { feature: "Long-term trend tracking", padelup: "Automatic, per shot type", competitor: "Depends on coach's notes" },
      { feature: "Drill library", padelup: "Pulled on demand, per score", competitor: "Coach's memory" },
      { feature: "Nutrition guidance", padelup: "Built in", competitor: "Usually separate" },
    ],
    sections: [
      {
        title: "Where a private coach wins",
        body: "On-court, in real time, a good coach feels what's wrong the moment you hit the ball. They can adjust your stance with their hands, place a cone, and have you hit 20 balls until the correction sticks. No AI replicates that.",
      },
      {
        title: "Where PadelUp wins",
        body: "Between sessions. Every clip gets the same analysis rigour as the last. You can't be too embarrassed to ask the same question three times. The cost of getting feedback on your backhand is the time it takes to record five seconds of video.",
      },
      {
        title: "Using them together",
        body: "Most PadelUp users who also take lessons book coaching targeted at their lowest score. Instead of generic technique work, they walk in with: 'my swing-path score is 4/10 on my backhand, the AI flagged a wrist-drop at frame 8.' Their coach confirms or corrects and the hour gets used surgically.",
      },
    ],
    verdict:
      "Not a replacement for a good coach. A coach for the 167 hours a week they aren't with you.",
    keywords: [
      "PadelUp vs private coach",
      "padel coaching cost",
      "padel app vs coach",
      "AI padel coaching",
      "affordable padel coaching",
    ],
    faq: [
      {
        q: "Can PadelUp fully replace a coach?",
        a: "For most players, no. For players without access to a coach, it gets you significantly further than going without feedback. Used alongside a coach, it makes their time more effective.",
      },
      {
        q: "How much does PadelUp cost vs a coach?",
        a: "A month of PadelUp typically costs less than one hour with a private coach. The value is in the frequency and depth of feedback, not in replacing the in-person correction.",
      },
      {
        q: "Will my coach find PadelUp useful?",
        a: "Yes — several coaches already use the analysis output to structure lessons. Some clubs offer it as a member benefit.",
      },
    ],
  },
};

export const COMPARE_SLUGS = Object.keys(COMPARISONS) as CompareSlug[];
