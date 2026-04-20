export type CompareSlug =
  | "vs-playtomic"
  | "vs-swingvision"
  | "vs-private-coach"
  | "vs-squash";

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
  "vs-squash": {
    slug: "vs-squash",
    competitor: "squash",
    h1: "Padel vs squash — how the two sports compare for racket players",
    title: "Padel vs Squash: Key Differences for Racket Sport Players | PadelUp",
    description:
      "Padel and squash both use walls, but they're completely different sports. Here's how court, serve, ball, and tactics compare — and what transfers between them.",
    intro:
      "Both padel and squash use walls. That's where most of the similarities end. The court dimensions, the equipment, the serve, and the tactical logic are different enough that squash players starting padel have a genuine advantage on some things and a genuine handicap on others.",
    positioning:
      "Squash uses walls offensively; padel uses them defensively. Both sports reward positioning — but the positions that win are completely different.",
    heroScreenshot: "/screenshots/raw/home.png",
    heroScreenshotAlt:
      "PadelUp home screen showing AI padel coaching for players switching from other racket sports",
    table: [
      {
        feature: "Court dimensions",
        padelup: "20m × 10m, enclosed, outdoors or indoors",
        competitor: "9.75m × 6.4m, fully enclosed, indoors",
      },
      {
        feature: "Players",
        padelup: "Always doubles (4 players)",
        competitor: "Singles or doubles",
      },
      {
        feature: "Racket",
        padelup: "Solid composite, no strings, ~45cm",
        competitor: "Strung, longer handle, more like tennis",
      },
      {
        feature: "Ball",
        padelup: "Low-pressure rubber, similar to tennis ball",
        competitor: "Hollow rubber, much smaller, very fast",
      },
      {
        feature: "Serve",
        padelup: "Underhand, bounced, into diagonal service box",
        competitor: "Overhead, against front wall, service box rules",
      },
      {
        feature: "Wall use",
        padelup: "After bounce — defensive reset off back/side glass",
        competitor: "Directly off front wall — primary shot surface",
      },
      {
        feature: "Scoring",
        padelup: "Tennis scoring: 15, 30, 40, game",
        competitor: "Point-a-rally to 11, best of 5",
      },
      {
        feature: "AI coaching",
        padelup: "Frame-by-frame analysis, 8 shot types",
        competitor: "Not offered by PadelUp",
      },
    ],
    sections: [
      {
        title: "The wall logic is completely different",
        body: "In squash, the front wall is the primary playing surface — every shot goes to the front wall first. In padel, the walls are a secondary surface used after the ball bounces on the ground. A squash player's instinct to attack with the wall works against them in padel: you're looking for defensive resets off the back glass, not offensive wall play. The tactical instinct needs to invert.",
      },
      {
        title: "What squash players get right immediately",
        body: "Court awareness, reading a moving ball off surfaces, quick reflexes, and the physical discipline for racket sport movement all transfer. Squash players tend to pick up padel volleys faster than tennis players — the punching motion and wrist control are closer to squash strokes than tennis strokes. Footwork and split-step habits also carry over well.",
      },
      {
        title: "What squash players get wrong",
        body: "The serve — squash players instinctively want to hit overhead or against the front wall, neither of which is legal in padel. The doubles logic is unfamiliar; squash is almost always singles, and padel's partner coordination is a new skill. The back wall reset requires a specific footwork pattern (turn and face the glass) that squash instincts actively work against.",
      },
      {
        title: "Equipment differences that affect play",
        body: "The padel racket is solid — no strings, perforated composite face, about 45cm long. The squash racket is strung and longer. The padel ball is larger and lower-pressure than a squash ball, giving a slower bounce and more time to react. Squash players typically find padel gives them more time than they're used to — which they can use to improve positioning rather than racing to the ball.",
      },
      {
        title: "Fitness and physical demands",
        body: "Squash is one of the most aerobically demanding sports. Padel is high intensity but less continuously demanding — points are shorter and doubles sharing of court coverage reduces individual movement load. Squash players entering padel are typically over-fit for the physical demands, which lets them focus on technique and positioning rather than managing fatigue.",
      },
      {
        title: "Which sport is harder to master",
        body: "Squash is harder to start — the ball speed and court size make early sessions genuinely difficult. Padel is easier to start and harder to master at an advanced level. The tactical depth of doubles positioning, the shot variety (bandeja, víbora, glass play), and the partner coordination create a complexity that rewards long-term investment. For a squash player making the switch, expect a faster early improvement curve than the average beginner.",
      },
    ],
    verdict:
      "Squash and padel reward similar physical traits but require completely different tactical instincts. Squash players pick up padel faster than most — but need to explicitly unlearn the front-wall instinct and learn the doubles game.",
    keywords: [
      "padel vs squash",
      "padel squash differences",
      "squash player starting padel",
      "racket sport comparison padel",
      "padel court vs squash court",
    ],
    faq: [
      {
        q: "Is padel easier than squash?",
        a: "Easier to start — the slower ball and larger court give beginners more time. Harder to master at an advanced level due to the tactical complexity of doubles and the range of shot types required.",
      },
      {
        q: "Do squash players pick up padel quickly?",
        a: "Yes, typically faster than tennis or other racket sport players. Reflexes, wall awareness, and movement discipline all carry over. The serve and doubles coordination are the main things to learn from scratch.",
      },
      {
        q: "Can I use a squash racket in padel?",
        a: "No. Padel requires a solid-faced racket within specific dimensions. Squash rackets are strung and would be both illegal and impractical on a padel court.",
      },
      {
        q: "Do the wall skills from squash transfer to padel?",
        a: "Partially. Reading a ball bouncing off a surface transfers. The specific instincts — hitting toward the front wall, playing the ball directly off the wall without a ground bounce — do not. Those need to be explicitly unlearned.",
      },
    ],
  },
};

export const COMPARE_SLUGS = Object.keys(COMPARISONS) as CompareSlug[];
