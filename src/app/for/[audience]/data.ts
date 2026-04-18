export type AudienceSlug =
  | "beginners"
  | "intermediate-players"
  | "advanced-players"
  | "coaches"
  | "clubs";

export interface AudienceData {
  slug: AudienceSlug;
  h1: string;
  title: string;
  description: string;
  intro: string;
  painPoints: { title: string; body: string }[];
  valueProps: { title: string; body: string }[];
  outcomes: string[];
  keywords: string[];
}

export const AUDIENCES: Record<AudienceSlug, AudienceData> = {
  beginners: {
    slug: "beginners",
    h1: "The best padel app for beginners",
    title: "Padel App for Beginners — Learn Padel Fast with AI Coaching",
    description:
      "Just started padel? PadelUp is the AI padel coach that teaches you the fundamentals — grip, stance, swing, positioning — with frame-by-frame video analysis. 3-day free trial through the App Store.",
    intro:
      "Starting padel is exciting — and confusing. There's forehand, backhand, bandeja, víbora, glass shots, wall plays. Most apps throw drills at you. PadelUp teaches you the fundamentals the way a real coach would: by analyzing your actual swing.",
    painPoints: [
      {
        title: "You don't know what you don't know",
        body: "Without a coach, you can't tell if your grip is wrong, your stance is too wide, or your follow-through is cutting you off. You copy what looks right on YouTube and hope.",
      },
      {
        title: "Private coaching costs $60–100/hour",
        body: "A single beginner-level coaching package runs $500+. Most people can't justify that before they even know if they like the sport.",
      },
      {
        title: "Group clinics skip your specific problem",
        body: "One instructor, six players, 60 minutes. You get generic drills. Nobody watches your stance for 20 minutes straight.",
      },
    ],
    valueProps: [
      {
        title: "Frame-by-frame analysis of every shot",
        body: "Upload a 5-second clip. The AI scores stance, grip, swing path, body position, and racket angle on a 0–10 scale. You see exactly what's wrong.",
      },
      {
        title: "A 7-day plan built around the fundamentals",
        body: "Footwork drills, shadow swings, wall practice. Structured so you learn in the right order — not whichever TikTok came up first.",
      },
      {
        title: "An AI padel coach that answers real questions",
        body: "\"Why does my backhand keep going into the net?\" Get a specific answer with the drill that fixes it. Available 24/7.",
      },
    ],
    outcomes: [
      "Proper grip and stance within week one",
      "First clean forehands and backhands by week three",
      "Confidence to play matches by week six",
    ],
    keywords: [
      "padel app for beginners",
      "learn padel",
      "padel basics app",
      "beginner padel coaching",
      "how to play padel",
    ],
  },
  "intermediate-players": {
    slug: "intermediate-players",
    h1: "The padel app for intermediate players stuck at the same level",
    title: "Padel App for Intermediate Players — Break Through Plateaus with AI",
    description:
      "Been playing padel for a year and stopped improving? PadelUp's AI identifies your specific weak spots and builds a plan to fix them. Stop guessing, start progressing.",
    intro:
      "You know the shots. You can hold a rally. But your win rate stopped moving and you can't tell why. The problem isn't practice time — it's that you're practicing the wrong things.",
    painPoints: [
      {
        title: "You practice your strengths",
        body: "Nobody wants to drill the shot they hate. So you hit forehands 80% of the time and your backhand stays broken forever.",
      },
      {
        title: "Feedback is inconsistent",
        body: "One coach tells you to shorten your swing. Another says your grip is off. Your friend says you're late on contact. All three might be right. Which one matters most?",
      },
      {
        title: "You don't see yourself play",
        body: "Your mental model of your technique is 30% off from reality. Until you see a frame-by-frame breakdown, you can't fix what you can't observe.",
      },
    ],
    valueProps: [
      {
        title: "Ruthless weak-spot identification",
        body: "Upload clips from a match. The AI scores every shot type and ranks your biggest liabilities. No ego protection — just data.",
      },
      {
        title: "A plan that adapts as you improve",
        body: "As your backhand score climbs, training shifts to the next weakest shot. You stop wasting reps on what's already working.",
      },
      {
        title: "Match-level strategy chat",
        body: "Ask the coach: \"My partner keeps getting lobbed. How do we defend?\" Get real tactical answers trained on pro matches.",
      },
    ],
    outcomes: [
      "Objective weak-spot scores inside 48 hours",
      "Measurable improvement on your worst shot within 30 days",
      "A reason to practice the drills you'd normally avoid",
    ],
    keywords: [
      "padel app for intermediate players",
      "improve at padel",
      "padel plateau",
      "fix padel backhand",
      "padel shot analysis",
    ],
  },
  "advanced-players": {
    slug: "advanced-players",
    h1: "The padel app advanced players use for marginal gains",
    title: "Padel App for Advanced Players — Marginal Gains with AI Analysis",
    description:
      "At competitive level, every shot matters. PadelUp gives advanced padel players frame-by-frame technique data, consistency scores across all 8 shot types, and strategic chat trained on pro matches.",
    intro:
      "At a competitive level, the gap between winning and losing a tournament is a handful of points. Those points come from consistency, not new shots. PadelUp measures your consistency at a granularity a human coach can't.",
    painPoints: [
      {
        title: "Your coach can't review every session",
        body: "An hour a week of coaching captures maybe 200 shots. You hit 2,000+ across training and matches. The other 90% goes unanalyzed.",
      },
      {
        title: "You need to quantify marginal improvements",
        body: "Is your smash 5% faster this month? Is your reset ball landing deeper? You need numbers, not feel.",
      },
      {
        title: "Tournament prep needs opponent-specific tactics",
        body: "Generic strategy content won't tell you how to handle a left-hander with a heavy víbora. Your AI coach can.",
      },
    ],
    valueProps: [
      {
        title: "Consistency scoring across 8 shot types",
        body: "Not just technique — variance. See whether your bandeja is reliable or just occasionally brilliant.",
      },
      {
        title: "Session-over-session trend charts",
        body: "Watch your technique scores move week over week. Identify regressions before they become habits.",
      },
      {
        title: "Tactical chat trained on pro-tour matches",
        body: "Ask about patterns, opponents' tendencies, and tournament prep. Answers drawn from professional match data, not generic content.",
      },
    ],
    outcomes: [
      "Objective consistency metrics on every shot type",
      "Early detection of technical regressions",
      "Tactical depth that matches your practice intensity",
    ],
    keywords: [
      "padel app for advanced players",
      "padel consistency tracking",
      "pro padel analysis",
      "competitive padel app",
      "padel tournament prep app",
    ],
  },
  coaches: {
    slug: "coaches",
    h1: "The AI assistant for padel coaches",
    title: "Padel App for Coaches — AI-Powered Student Analysis",
    description:
      "Coach more students without sacrificing quality. PadelUp's AI video analysis lets your students self-review between sessions, so your hour together focuses on what only a human coach can do.",
    intro:
      "You have 20 students. You see each of them for an hour a week. The rest of the time, their progress stalls or drifts into bad habits. PadelUp is your assistant coach between sessions.",
    painPoints: [
      {
        title: "Students don't remember feedback",
        body: "You explain the grip change on Tuesday. Saturday they're back to the old grip. The lesson repeats for weeks.",
      },
      {
        title: "You can't watch them practice at home",
        body: "Most learning happens between sessions. Without feedback, reps reinforce whatever they were already doing — good or bad.",
      },
      {
        title: "Group lessons dilute attention",
        body: "With six students you can't give each one 10 minutes of technique focus. You give general tips and hope they stick.",
      },
    ],
    valueProps: [
      {
        title: "Students self-analyze between sessions",
        body: "They upload clips. The AI scores their technique against your framework. They arrive at the next lesson already knowing what's broken.",
      },
      {
        title: "Shared progress dashboards",
        body: "See each student's weekly scores, shot-type consistency, and training completion. Walk in prepared, not improvising.",
      },
      {
        title: "A drill library you don't have to maintain",
        body: "Personalized drill recommendations fire automatically based on analysis scores. Your students practice the right things without you needing to assign them.",
      },
    ],
    outcomes: [
      "Higher retention — students see progress they can measure",
      "Better lessons — you skip the re-teaching and focus on nuance",
      "Coach more students without dropping quality",
    ],
    keywords: [
      "padel app for coaches",
      "coaching tools padel",
      "padel instructor app",
      "AI coach assistant",
      "padel teaching app",
    ],
  },
  clubs: {
    slug: "clubs",
    h1: "The padel app for clubs that want members who improve",
    title: "Padel App for Clubs — Member Improvement at Scale",
    description:
      "Retain members longer by helping them improve. PadelUp is a white-label AI padel coaching tool clubs can offer alongside court booking and clinics.",
    intro:
      "Members leave clubs when they stop improving. PadelUp gives them a reason to stay — a measurable improvement curve that ties directly to your courts and coaches.",
    painPoints: [
      {
        title: "Churn spikes at the intermediate plateau",
        body: "New players are enthusiastic. Advanced players are loyal. The middle tier, where most members sit, quits when progress stalls.",
      },
      {
        title: "Clinics are underused",
        body: "Members don't sign up for clinics because they don't know what they need to work on. Without a specific problem, it's easy to skip.",
      },
      {
        title: "You have no data on member progression",
        body: "You know who books courts. You don't know who's improving, plateauing, or about to quit.",
      },
    ],
    valueProps: [
      {
        title: "Member skill data you've never had",
        body: "See aggregate progression across your member base. Identify members drifting toward churn and trigger clinic invitations tied to their weakest shots.",
      },
      {
        title: "Drives clinic and private lesson bookings",
        body: "When the AI says \"your backhand score is 4/10,\" members suddenly want a backhand clinic. Conversion rises.",
      },
      {
        title: "White-label option available",
        body: "Co-branded with your club. Your members, your colors, PadelUp's engine.",
      },
    ],
    outcomes: [
      "Reduced churn from the intermediate tier",
      "Higher clinic and private-lesson attach rate",
      "Membership data your competitors don't have",
    ],
    keywords: [
      "padel app for clubs",
      "padel club software",
      "member retention padel",
      "padel club tools",
      "white label padel app",
    ],
  },
};

export const AUDIENCE_SLUGS = Object.keys(AUDIENCES) as AudienceSlug[];
