export type CompareSlug =
  | "vs-playtomic"
  | "vs-swingvision"
  | "vs-private-coach"
  | "vs-squash"
  | "vs-padel-coach"
  | "vs-oipadel"
  | "vs-pelota"
  | "vs-padelio";

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
  "vs-padel-coach": {
    slug: "vs-padel-coach",
    competitor: "Padel Coach",
    h1: "PadelUp vs Padel Coach — two AI padel coaches compared",
    title: "PadelUp vs Padel Coach — AI Padel Coaching Apps Compared",
    description:
      "Padel Coach is one of the more established AI-powered padel apps. PadelUp covers the same brief with newer vision models and a tighter feature set. Here's the honest comparison.",
    intro:
      "Padel Coach has been a recognised name in AI padel coaching — structured drills, video upload, training plans, tactical Q&A. PadelUp covers the same brief, built later, with newer vision models trained from day one on padel-specific shot types. The right pick depends on which way you weight maturity vs. the current generation of AI.",
    positioning:
      "Padel Coach: established structured-coaching system. PadelUp: newer AI, sharper per-shot scoring, padel-native video analysis.",
    heroScreenshot: "/screenshots/raw/analyze.png",
    heroScreenshotAlt:
      "PadelUp frame-by-frame video analysis showing technique scores across five dimensions",
    table: [
      {
        feature: "Core function",
        padelup: "AI padel coaching",
        competitor: "AI padel coaching",
      },
      {
        feature: "Video analysis depth",
        padelup: "Frame-by-frame, 5 technique dimensions per shot",
        competitor: "Video upload with technique feedback",
      },
      {
        feature: "Shot types scored",
        padelup: "8 (forehand, backhand, bandeja, víbora, smash, lob, volley, glass)",
        competitor: "Core padel shots",
      },
      {
        feature: "Training plan adaptivity",
        padelup: "Re-targets your weakest shot every week",
        competitor: "Personalised drills + plans",
      },
      {
        feature: "AI coach chat",
        padelup: "24/7, trained on pro-match data",
        competitor: "Tactical Q&A coach mode",
      },
      {
        feature: "Nutrition tracking",
        padelup: "Photo-to-macros, training-load aware",
        competitor: "Not the focus",
      },
      {
        feature: "Approach to AI",
        padelup: "Newer vision models, padel-native from day one",
        competitor: "Established structured-coaching system",
      },
    ],
    sections: [
      {
        title: "Where Padel Coach is stronger",
        body: "Maturity. Padel Coach has been iterated on for longer, which usually translates into a more polished training-content library and a more battle-tested set of drills. If you value an app that's already had years of feedback baked into it, that's a real point in its favour.",
      },
      {
        title: "Where PadelUp is stronger",
        body: "The analysis layer. PadelUp scores five technique dimensions per shot type, every shot type, against padel-specific criteria — that depth-per-shot is what the newer vision models enable. The 24/7 coach chat is also closer to a real coaching conversation than a Q&A mode. And the nutrition tracker means you don't need a separate macro app for the days you're playing three matches.",
      },
      {
        title: "How to choose",
        body: "If you mainly want a structured drill library and tactical Q&A, Padel Coach is a fine choice. If you want detailed shot-by-shot scoring, an adaptive plan that retargets weekly, and a coaching chat that draws on professional match data, PadelUp is the more current generation of the same idea.",
      },
    ],
    verdict:
      "Both apps are AI padel coaches. PadelUp is the newer build with deeper per-shot analysis; Padel Coach is the more mature structured system. Pick the one whose tradeoff matches how you train.",
    keywords: [
      "PadelUp vs Padel Coach",
      "Padel Coach app alternative",
      "best AI padel coach app",
      "padel coach app comparison",
      "padel video analysis app",
    ],
    faq: [
      {
        q: "Is PadelUp a replacement for Padel Coach?",
        a: "Functionally yes — both cover AI video analysis, training plans, and coaching chat. The choice comes down to which generation of AI and which feature mix you prefer.",
      },
      {
        q: "Does PadelUp also recognise padel-specific shots like the bandeja and víbora?",
        a: "Yes. PadelUp recognises 8 padel shot types and scores each against shot-specific criteria, not generic motion patterns.",
      },
      {
        q: "Which app is better for an intermediate player?",
        a: "Either works. PadelUp's per-shot scoring is particularly useful for intermediate players who need to identify which specific shot is holding them back — that's the gap that's typically hardest to self-diagnose.",
      },
    ],
  },
  "vs-oipadel": {
    slug: "vs-oipadel",
    competitor: "OiPadel",
    h1: "PadelUp vs OiPadel — technical analysis vs tactical coaching",
    title: "PadelUp vs OiPadel — AI Padel Coaching Apps Compared",
    description:
      "OiPadel focuses on AI chat coaching, mental focus, and match reflection. PadelUp focuses on frame-by-frame technical analysis. Two different layers of the same problem — here's how they compare.",
    intro:
      "OiPadel is a community-built AI padel app that took the chat-and-tactics route — pre-game focus points, post-game reflection, conversational coaching. PadelUp took the video-and-technique route — frame-by-frame scoring of every shot, drills tied to scores, training plans built from analysis. Both are useful. They solve different parts of the same problem.",
    positioning:
      "OiPadel: AI for the mental and tactical layer. PadelUp: AI for the technique layer. Different layers of the same coaching stack.",
    heroScreenshot: "/screenshots/raw/chat.png",
    heroScreenshotAlt:
      "PadelUp 24/7 AI padel coach chat answering a technique question",
    table: [
      {
        feature: "Primary focus",
        padelup: "Technique analysis from video",
        competitor: "Mental and tactical coaching",
      },
      {
        feature: "AI video analysis",
        padelup: "Frame-by-frame, 5 dimensions, 8 shot types",
        competitor: "Not the focus",
      },
      {
        feature: "AI coach chat",
        padelup: "Yes, 24/7, integrated with your scores",
        competitor: "Yes, conversational coaching",
      },
      {
        feature: "Pre-game focus points",
        padelup: "Available via the chat",
        competitor: "Built into the flow",
      },
      {
        feature: "Match reflection",
        padelup: "Via uploaded clips and scoring",
        competitor: "Conversational reflection",
      },
      {
        feature: "Training plans",
        padelup: "Adaptive, generated from technique scores",
        competitor: "Tactical/mental focus",
      },
      {
        feature: "Nutrition tracking",
        padelup: "Photo-to-macros, training-load aware",
        competitor: "Not offered",
      },
    ],
    sections: [
      {
        title: "Where OiPadel is stronger",
        body: "If your gap is mental — overthinking on big points, no pre-match plan, struggling to reflect on what went wrong — OiPadel's conversational format is well-suited. The pre-game focus prompts and post-game reflection are useful for players whose technique is fine but whose head isn't.",
      },
      {
        title: "Where PadelUp is stronger",
        body: "If your gap is technical — your backhand keeps breaking, your bandeja lands short, you can't tell why — PadelUp's video analysis tells you the exact frame where the error starts and gives you the drill that fixes it. That's a different problem than the one OiPadel is trying to solve.",
      },
      {
        title: "Using them together",
        body: "Most serious players have both kinds of gap. PadelUp gives you the technical map; OiPadel gives you the mental routine. Used together, they cover the two layers most players don't address themselves: what's wrong with the swing, and what's wrong with the head.",
      },
    ],
    verdict:
      "Not direct competitors. OiPadel is the mental and tactical layer; PadelUp is the technical analysis layer. If your bottleneck is technique, PadelUp. If it's the head, OiPadel. Most players need both eventually.",
    keywords: [
      "PadelUp vs OiPadel",
      "OiPadel alternative",
      "AI padel coaching apps",
      "padel mental coaching app",
      "padel technique analysis app",
    ],
    faq: [
      {
        q: "Does PadelUp do pre-game focus points like OiPadel?",
        a: "You can ask the AI coach for a pre-match focus based on your weakest shots — but it's not built as a structured pre-game routine the way OiPadel is. OiPadel is more designed around that flow.",
      },
      {
        q: "Does OiPadel do video analysis?",
        a: "Not as a primary feature. OiPadel is built around chat-driven coaching, reflection, and match awareness rather than frame-by-frame video scoring.",
      },
      {
        q: "Should I use both?",
        a: "If technique and mental game are both gaps for you, yes. If only one is broken, pick the app that targets that one.",
      },
    ],
  },
  "vs-pelota": {
    slug: "vs-pelota",
    competitor: "Pelota",
    h1: "PadelUp vs Pelota — coaching vs match analytics",
    title: "PadelUp vs Pelota — Padel Coaching App vs Match Analytics",
    description:
      "Pelota leans into score tracking, highlights, and performance analytics. PadelUp focuses on coaching — analysing your technique and building plans to fix it. Here's the honest comparison.",
    intro:
      "Pelota and PadelUp both use AI, but they aim at different outcomes. Pelota is closer to a performance-analytics and social tool — score tracking, match highlights, stats. PadelUp is a coaching tool — analyse your shots, score your technique, get a training plan. The right pick depends on what you're trying to fix.",
    positioning:
      "Pelota: track and share what happened. PadelUp: change what happens next.",
    heroScreenshot: "/screenshots/raw/training.png",
    heroScreenshotAlt:
      "PadelUp personalised weekly padel training plan dashboard",
    table: [
      {
        feature: "Core function",
        padelup: "AI coaching and training plans",
        competitor: "Match analytics and highlights",
      },
      {
        feature: "Frame-by-frame technique scoring",
        padelup: "Yes — 5 dimensions per shot type",
        competitor: "Not the focus",
      },
      {
        feature: "Personalised training plans",
        padelup: "Adaptive, weekly, built from your scores",
        competitor: "Not the focus",
      },
      {
        feature: "Match score tracking",
        padelup: "Not offered",
        competitor: "Primary feature",
      },
      {
        feature: "Highlights and clip library",
        padelup: "Not offered",
        competitor: "Primary feature",
      },
      {
        feature: "AI coach chat",
        padelup: "Yes — trained on pro-match data, 24/7",
        competitor: "Not the focus",
      },
      {
        feature: "Nutrition tracking",
        padelup: "Photo-to-macros, training-load aware",
        competitor: "Not offered",
      },
    ],
    sections: [
      {
        title: "Where Pelota is stronger",
        body: "Capturing the match. If you want to log scores, save highlights, share clips, and look at performance stats over time, Pelota is built for that. The social and analytics layer is the point.",
      },
      {
        title: "Where PadelUp is stronger",
        body: "Closing the loop between watching and improving. Saving a clip is one thing — knowing what's wrong with the shot in that clip, getting it scored, and being handed the drill that fixes it is another. PadelUp is built for the second job.",
      },
      {
        title: "Using them together",
        body: "There's no real conflict. Track and share matches in Pelota. When a shot keeps breaking, send the clip to PadelUp for the analysis and the drill. The two apps fit the same week without overlap.",
      },
    ],
    verdict:
      "Pelota is for tracking and sharing your padel; PadelUp is for improving it. If you mainly want stats and highlights, Pelota. If you want to fix what's broken, PadelUp.",
    keywords: [
      "PadelUp vs Pelota",
      "Pelota padel app alternative",
      "padel match tracker vs coaching app",
      "padel analytics vs coaching",
      "best padel improvement app",
    ],
    faq: [
      {
        q: "Does PadelUp track match scores?",
        a: "Score tracking isn't a primary PadelUp feature. The focus is on technique improvement between and during sessions, not match logging.",
      },
      {
        q: "Does Pelota analyse my technique?",
        a: "Pelota is built around match analytics, scoring, and highlights rather than per-shot technique scoring. For frame-by-frame analysis, PadelUp is the more direct fit.",
      },
      {
        q: "Which app helps me actually improve faster?",
        a: "Improvement comes from objective feedback on technique plus targeted practice. PadelUp's analysis-and-plan loop is built for that. Pelota's analytics are useful for tracking outcomes, less so for changing them.",
      },
    ],
  },
  "vs-padelio": {
    slug: "vs-padelio",
    competitor: "Padelio",
    h1: "PadelUp vs Padelio — passive Apple Watch tracking vs deep video analysis",
    title: "PadelUp vs Padelio — Apple Watch Tracking vs AI Video Coaching",
    description:
      "Padelio uses Apple Watch ML to detect shots passively during play. PadelUp uses video analysis to score your technique frame by frame. Two very different approaches to padel tracking.",
    intro:
      "Padelio took the wearable route — strap on an Apple Watch, play, and the app detects shot types in the background using on-device ML. No video, no upload. PadelUp took the video route — record a clip, get frame-by-frame scoring with drills. Both are valuable; they answer different questions about your game.",
    positioning:
      "Padelio: passive shot counting and detection. PadelUp: active shot analysis and coaching. Different tools for different parts of improvement.",
    heroScreenshot: "/screenshots/raw/analyze.png",
    heroScreenshotAlt:
      "PadelUp frame-by-frame padel shot analysis showing scoring across five technique dimensions",
    table: [
      {
        feature: "Tracking method",
        padelup: "Video upload — phone camera",
        competitor: "Apple Watch ML — passive",
      },
      {
        feature: "Shot detection",
        padelup: "Per-clip with full scoring",
        competitor: "Per-match passively",
      },
      {
        feature: "Per-shot technique scoring",
        padelup: "Yes — 5 dimensions, 0–10 scale",
        competitor: "Not the focus",
      },
      {
        feature: "Hardware required",
        padelup: "Phone camera",
        competitor: "Apple Watch",
      },
      {
        feature: "Effort to use during play",
        padelup: "Record, then upload after the session",
        competitor: "Zero — runs in background",
      },
      {
        feature: "Training plans from data",
        padelup: "Adaptive, weekly, from your scores",
        competitor: "Not the focus",
      },
      {
        feature: "AI coach chat",
        padelup: "24/7, trained on pro-match data",
        competitor: "Not offered",
      },
      {
        feature: "Nutrition tracking",
        padelup: "Photo-to-macros, training-load aware",
        competitor: "Not offered",
      },
    ],
    sections: [
      {
        title: "Where Padelio is stronger",
        body: "Friction-free tracking. Padelio runs in the background and counts shots without you doing anything. If you mainly want to know how many forehands and backhands you hit per session — and don't want to film or upload anything — that's exactly the right job for an Apple Watch app.",
      },
      {
        title: "Where PadelUp is stronger",
        body: "Telling you what to actually fix. Counting shots is data. Scoring whether each shot is well-struck is feedback. PadelUp's frame-by-frame analysis identifies the specific frame an error starts and gives you the drill that fixes it. That's a different category of output than passive shot counts.",
      },
      {
        title: "Using them together",
        body: "Padelio for the volume picture (how many shots, what types, across the week). PadelUp for the quality picture (which shot is broken, what dimension is the issue, what drill fixes it). Volume + quality is the full performance loop.",
      },
    ],
    verdict:
      "Padelio counts what you hit. PadelUp scores how you hit it. If you want effortless background tracking, Padelio. If you want technique feedback and a training plan that adapts, PadelUp.",
    keywords: [
      "PadelUp vs Padelio",
      "Padelio alternative",
      "Apple Watch padel app vs video analysis",
      "padel shot tracking",
      "padel technique vs counting",
    ],
    faq: [
      {
        q: "Does PadelUp need an Apple Watch?",
        a: "No. PadelUp uses your phone camera. An Apple Watch is not required.",
      },
      {
        q: "Does Padelio score my technique like PadelUp?",
        a: "Padelio is built around passive shot detection on the Apple Watch — counting shots and recognising types — rather than scoring each shot's technique frame by frame. They're different layers of analysis.",
      },
      {
        q: "Which is easier to use during a match?",
        a: "Padelio — it runs in the background. PadelUp requires recording and uploading a clip, so it's more deliberate. The trade-off is depth of analysis.",
      },
    ],
  },
};

export const COMPARE_SLUGS = Object.keys(COMPARISONS) as CompareSlug[];
