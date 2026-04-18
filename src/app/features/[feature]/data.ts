export type FeatureSlug =
  | "ai-video-analysis"
  | "training-plans"
  | "ai-nutrition"
  | "24-7-chat";

export interface FeatureData {
  slug: FeatureSlug;
  h1: string;
  title: string;
  description: string;
  intro: string;
  howItWorks: { step: string; body: string }[];
  details: { title: string; body: string }[];
  bullets: string[];
  keywords: string[];
  faq: { q: string; a: string }[];
  mockup: string;
  mockupAlt: string;
}

export const FEATURES: Record<FeatureSlug, FeatureData> = {
  "ai-video-analysis": {
    slug: "ai-video-analysis",
    h1: "AI padel video analysis — frame by frame",
    title: "AI Padel Video Analysis — Frame-by-Frame Technique Scoring",
    description:
      "Upload a clip of any padel shot. PadelUp's AI scores your stance, grip, swing path, body position, and racket angle on a 0–10 scale. Fix what's broken with matched drills.",
    intro:
      "Most padel advice is vague: \"rotate more,\" \"bend your knees,\" \"shorten your backswing.\" Useful — but only if you know which moment you're getting wrong. PadelUp's AI video analysis tells you exactly which frame the error starts and gives you a drill that fixes it.",
    howItWorks: [
      {
        step: "Record a 3–10 second clip",
        body: "From the side, with the ball in frame. Phone camera is fine — no special rig required.",
      },
      {
        step: "Upload it in the app",
        body: "The vision model parses every frame and identifies the shot type automatically (forehand, backhand, bandeja, víbora, smash, volley, lob, glass).",
      },
      {
        step: "See your scores",
        body: "Five dimensions graded 0–10: stance, grip, swing path, body position, racket angle. Weaknesses are flagged with visual overlays.",
      },
      {
        step: "Get the fix",
        body: "A specific drill pulled from our library addresses the lowest-scored dimension. Video demo included.",
      },
    ],
    details: [
      {
        title: "8 shot types recognized",
        body: "Forehand, backhand, bandeja, víbora, smash, volley, lob, glass play — each scored against shot-specific criteria.",
      },
      {
        title: "Frame-level error detection",
        body: "When your backhand breaks, we show you the exact frame where your wrist dropped or your shoulder opened. No guesswork.",
      },
      {
        title: "Drill library tuned to scores",
        body: "Score a 4/10 on stance? You get wall-drill 3 with foot marker tape. Score 7/10? You get the refinement drill instead.",
      },
      {
        title: "Progression tracking over time",
        body: "Every clip gets logged. See your stance score climb week over week — or catch a regression before it sets in.",
      },
    ],
    bullets: [
      "Frame-by-frame scoring across 5 dimensions",
      "Works with any phone camera",
      "8 shot types auto-detected",
      "Matched drill library",
    ],
    keywords: [
      "padel video analysis",
      "AI padel technique analysis",
      "padel shot analysis app",
      "frame by frame padel",
      "analyze padel swing",
    ],
    faq: [
      {
        q: "What's the minimum video length?",
        a: "Three seconds is enough. Longer clips (up to 30s) let the AI average across multiple reps.",
      },
      {
        q: "Do I need a tripod?",
        a: "No. Handheld works as long as the ball and your full body are in frame.",
      },
      {
        q: "Which shots does it analyze?",
        a: "Forehand, backhand, bandeja, víbora, smash, volley, lob, and glass-wall shots.",
      },
    ],
    mockup: "/screenshots/raw/analyze.png",
    mockupAlt: "PadelUp AI video analysis showing frame-by-frame scoring of a padel shot",
  },
  "training-plans": {
    slug: "training-plans",
    h1: "Personalized padel training plans",
    title: "Personalized Padel Training Plans — Built from Your Video Analysis",
    description:
      "Stop doing generic drills. PadelUp builds a 7-day padel training plan from your video analysis scores — technique, footwork, positioning, fitness, tactics. Adapts as you improve.",
    intro:
      "Generic training plans assume everyone has the same weaknesses. You don't. PadelUp generates a weekly plan that targets your lowest scores first — and rebalances as those scores climb.",
    howItWorks: [
      {
        step: "The AI reads your analysis",
        body: "It looks at your shot-type scores, your technique dimensions, and your session history.",
      },
      {
        step: "It generates a 7-day curriculum",
        body: "Daily sessions cover technique (your lowest-scored shot), footwork, positioning, fitness, and tactics.",
      },
      {
        step: "Sessions slot into your schedule",
        body: "Each day is 20–45 minutes. Court work, wall work, or no-court shadow drills — based on what you have access to.",
      },
      {
        step: "It adapts weekly",
        body: "Finish a week, upload new clips, watch the next week retarget the next-weakest shot.",
      },
    ],
    details: [
      {
        title: "Technique-first sequencing",
        body: "Lowest-scored shot gets priority. You don't waste reps on what's already at 8/10.",
      },
      {
        title: "Mix of court, wall, and shadow drills",
        body: "Can't get to a court every day? Wall and shadow drills keep the progression going from your garage or living room.",
      },
      {
        title: "Streaks and XP",
        body: "Completion tracked. Streak broken? The plan compresses the missed day instead of shaming you.",
      },
      {
        title: "Rest and recovery baked in",
        body: "Plans auto-insert low-intensity days — because smashing the same shot 500 times in a row is how you get injured.",
      },
    ],
    bullets: [
      "7-day plans regenerated weekly",
      "Technique, footwork, positioning, fitness, tactics",
      "Wall and shadow drills included",
      "Adapts as your scores improve",
    ],
    keywords: [
      "padel training plan",
      "personalized padel drills",
      "padel workout app",
      "weekly padel training",
      "padel practice plan",
    ],
    faq: [
      {
        q: "How often is the plan updated?",
        a: "Weekly, triggered by new video analysis or session check-ins.",
      },
      {
        q: "Can I use it without court access?",
        a: "Yes. Wall and shadow drills make up a full plan on court-light weeks.",
      },
      {
        q: "What if I miss a day?",
        a: "The plan compresses remaining days — no penalty, no lost streak for a single miss.",
      },
    ],
    mockup: "/screenshots/raw/training.png",
    mockupAlt: "PadelUp personalized padel training plan dashboard",
  },
  "ai-nutrition": {
    slug: "ai-nutrition",
    h1: "AI nutrition tracking built for padel players",
    title: "AI Nutrition Tracking for Padel Players — Photo-to-Macros in Seconds",
    description:
      "Fueling a 3-set padel match shouldn't require a spreadsheet. Snap your plate — PadelUp's AI logs calories, protein, carbs, and fats instantly. Built for racket-sport athletes.",
    intro:
      "Three sets of padel burns real calories — 600–900 per match. You need fuel in, not a food diary you abandon after four days. PadelUp's nutrition tracker is a photo, not a search bar.",
    howItWorks: [
      {
        step: "Snap your meal",
        body: "Phone camera. Single shot. No angle requirements.",
      },
      {
        step: "AI identifies everything on the plate",
        body: "Individual ingredients, estimated portions, macro breakdown within 5–10% accuracy.",
      },
      {
        step: "Logged to your daily targets",
        body: "Daily protein, carbs, fats, calories — all adjusted for your training load.",
      },
      {
        step: "Adjust if needed",
        body: "Portion looked off? Slide it up or down. The AI learns your eye for estimates.",
      },
    ],
    details: [
      {
        title: "Training-load-aware targets",
        body: "Match day? Carb target goes up. Rest day? Cals drop. No manual cycling required.",
      },
      {
        title: "Hydration tracking",
        body: "Track water plus electrolytes — padel's high-intensity bursts drain sodium and potassium fast.",
      },
      {
        title: "Weekly trend charts",
        body: "See 7-day averages for protein, carbs, and fats. Spot under-fueling patterns before they tank your sessions.",
      },
      {
        title: "Works offline",
        body: "No signal at the club? Photos queue and sync when you're back online.",
      },
    ],
    bullets: [
      "Photo-to-macros in under 3 seconds",
      "Thousands of foods recognized",
      "Training-load-aware daily targets",
      "Hydration + electrolytes tracked",
    ],
    keywords: [
      "padel nutrition app",
      "AI food tracker",
      "athlete nutrition app",
      "macros from photo",
      "padel player diet app",
    ],
    faq: [
      {
        q: "How accurate is the macro estimation?",
        a: "Within 5–10% for standard foods. Adjust portions manually for precision meals.",
      },
      {
        q: "Does it work with restaurant food?",
        a: "Yes. It identifies common dishes and estimates portions from visual cues.",
      },
      {
        q: "Can I log supplements?",
        a: "Yes, separately from food logs so your daily macros stay clean.",
      },
    ],
    mockup: "/screenshots/raw/nutrition.png",
    mockupAlt: "PadelUp nutrition tracker identifying food macros from a photo",
  },
  "24-7-chat": {
    slug: "24-7-chat",
    h1: "24/7 AI padel coach in your pocket",
    title: "24/7 AI Padel Coach Chat — Trained on Pro Matches & Coaching Manuals",
    description:
      "Ask anything about padel and get an answer built on pro-tour data and coaching manuals. Technique, strategy, rules, equipment. Available 24/7.",
    intro:
      "Generic chatbots don't know padel. Ours is trained on professional match data, coaching manuals, shot mechanics, and equipment specs. Ask it anything at 11pm after a match — you'll get the answer a pro coach would give.",
    howItWorks: [
      {
        step: "Open the chat",
        body: "Single tap from the home screen. No booking, no session limit.",
      },
      {
        step: "Ask anything",
        body: "\"Why do my backhands land short?\" \"What racket for a defensive player?\" \"How do I handle a left-hander?\"",
      },
      {
        step: "Get a specific answer",
        body: "Not a Wikipedia paragraph. A specific diagnosis, a drill if relevant, a strategy if tactical.",
      },
      {
        step: "It remembers context",
        body: "Your analysis history, your level, your previous questions. Answers get more personal the more you use it.",
      },
    ],
    details: [
      {
        title: "Trained on professional match data",
        body: "Shot patterns, movement data, and tactical decisions from hundreds of pro matches feed the model.",
      },
      {
        title: "Integrated with your analysis",
        body: "When you ask about a weak shot, the AI already knows your scores. No need to explain — it pulls context automatically.",
      },
      {
        title: "Equipment advice",
        body: "Ask about rackets, grips, shoes — answers reference your play style, not a generic buyer's guide.",
      },
      {
        title: "Rules and edge cases",
        body: "Glass rules, let calls, tournament regulations — the stuff your partner argues about on court.",
      },
    ],
    bullets: [
      "Trained on pro-match data",
      "Remembers your analysis history",
      "Available 24/7 — no session booking",
      "Rules, technique, strategy, equipment",
    ],
    keywords: [
      "AI padel coach chat",
      "padel chatbot",
      "ask AI about padel",
      "padel strategy chat",
      "padel rules app",
    ],
    faq: [
      {
        q: "Is there a usage limit?",
        a: "Subscribers get unlimited conversations. Free trial includes 20 messages.",
      },
      {
        q: "Can it reference my video analysis?",
        a: "Yes — if you ask about a shot you've analyzed, it pulls your scores into the answer.",
      },
      {
        q: "Does it speak Spanish?",
        a: "Yes. English and Spanish are fully supported. Other languages coming.",
      },
    ],
    mockup: "/screenshots/raw/chat.png",
    mockupAlt: "PadelUp 24/7 AI padel coach chat answering a technique question",
  },
};

export const FEATURE_SLUGS = Object.keys(FEATURES) as FeatureSlug[];
