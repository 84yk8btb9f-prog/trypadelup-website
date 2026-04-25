export type LearnSlug =
  | "padel-rules"
  | "padel-vs-tennis"
  | "bandeja-technique"
  | "ai-padel-coaching"
  | "padel-video-analysis"
  | "padel-technique-weaknesses"
  | "padel-backhand-technique"
  | "padel-court-positioning"
  | "padel-improvement-plateau"
  | "padel-forehand-technique"
  | "padel-footwork-drills"
  | "padel-vibora-shot"
  | "padel-doubles-strategy"
  | "padel-rules-mistakes"
  | "ai-sports-coaching-future"
  | "padel-tournament-prep"
  | "how-to-read-opponents"
  | "master-padel-technique-ai"
  | "advanced-padel-strategy-tactics"
  | "ai-padel-coaching-performance";

export interface LearnSection {
  title: string;
  body: string;
}

export interface LearnData {
  slug: LearnSlug;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: LearnSection[];
  keyTakeaways: string[];
  keywords: string[];
  faq: { q: string; a: string }[];
  relatedFeature: string;
  relatedFeatureLabel: string;
}

export const LEARN: Record<LearnSlug, LearnData> = {
  "padel-rules": {
    slug: "padel-rules",
    h1: "Padel rules, explained simply",
    title: "Padel Rules — A Clear, Complete Guide (2026)",
    description:
      "The full rules of padel without the jargon. Scoring, serves, glass walls, lets, and the edge cases that cost casual players points. Written for beginners and improvers.",
    intro:
      "Padel borrows its scoring from tennis but its court from something else entirely — four walls, two cages, and a service box that's smaller than you'd expect. The rules are simple enough to pick up in a session; the edge cases take longer. This is a clean reference: what you need to play, what casual players routinely get wrong, and the calls that decide close matches.",
    sections: [
      {
        title: "The court",
        body: "A padel court is 20 m long, 10 m wide, divided by a net roughly the same height as tennis. All four sides are enclosed — two end walls (solid glass or concrete) and two side walls that transition into metal mesh. The service box is 6.95 m from the net and split by a centre line.",
      },
      {
        title: "Scoring",
        body: "Identical to tennis: 15, 30, 40, game. Deuce at 40–40. Advantage to the winning side, or back to deuce if the other wins the next point. Six games wins a set; you need two sets to win a match. Most recreational play uses 'Golden Point' at deuce — next point wins the game.",
      },
      {
        title: "The serve",
        body: "Serves are underhand. You bounce the ball once behind the service line, then strike it at or below waist height into the opponent's diagonal service box. Two chances per point. The serve must bounce in the service box before hitting any wall. If the serve clips the net and lands in, it's a let — replay the point.",
      },
      {
        title: "Walls in play",
        body: "After the ball crosses the net, it can hit any wall and still be in play. The defining rule: it must bounce on the ground first, then can bounce off walls freely. You can play a ball off your own back wall after it has crossed the net, travelled past you, and bounced behind you — a huge part of advanced padel.",
      },
      {
        title: "Out of play",
        body: "A ball hits your own court's wall or ceiling before crossing the net? Lost point. A ball hits any object outside the court (light, net post, ceiling)? Lost point. A volley that goes straight into a wall without bouncing first (from your side, after receiving a hit)? Lost point.",
      },
      {
        title: "Volleys and smashes",
        body: "Any ball is volleyable after it crosses the net, except the serve — the return of serve must bounce first. Smashes can be hit directly out of the court ('por tres' — through the opening at the top corner) and the point is still yours if it clears cleanly.",
      },
      {
        title: "Common edge cases",
        body: "The ball clips the net during a rally and lands in: play on. The ball hits the net post and bounces in: out. The ball brushes your clothing or racket during a swing: lost point. The ball passes your ear between bounces: in play as long as it eventually bounces inside your court. Double-hits on the same swing: lost point. A coach shouting from the side: allowed in recreational play, restricted in tournament play.",
      },
    ],
    keyTakeaways: [
      "Scoring is tennis scoring. 15, 30, 40, game.",
      "Serves are underhand, below waist, and must bounce in the diagonal service box.",
      "Walls are in play after the ball bounces on the ground once.",
      "A ball hitting your side's wall before crossing the net loses the point.",
      "Volleys are legal except on serve returns.",
    ],
    keywords: [
      "padel rules",
      "how to play padel",
      "padel scoring",
      "padel serve rules",
      "padel wall rules",
    ],
    faq: [
      {
        q: "Is padel scored like tennis?",
        a: "Yes. 15, 30, 40, game. Deuce at 40–40. Sets are first to six games. Many recreational matches use Golden Point (first point after deuce wins the game).",
      },
      {
        q: "Can you volley the serve in padel?",
        a: "No. The return of serve must bounce once before being struck. Every subsequent shot in the rally can be volleyed.",
      },
      {
        q: "Can the ball hit the wall before the ground?",
        a: "Only after it has crossed the net. On your side, the ball must bounce on the ground first — then it can hit any wall. A ball that hits your wall before bouncing is a lost point.",
      },
      {
        q: "What's 'por tres' in padel?",
        a: "A smash hit hard enough to bounce on the opponent's side and fly out of the court through the gap between the fence and the glass. Legal — and the point is yours.",
      },
    ],
    relatedFeature: "/features/24-7-chat",
    relatedFeatureLabel: "Ask the AI coach any rules edge case",
  },
  "padel-vs-tennis": {
    slug: "padel-vs-tennis",
    h1: "Padel vs tennis — which is harder, which is easier to start",
    title: "Padel vs Tennis — Differences, Similarities, and Which to Play",
    description:
      "Padel vs tennis, from a player's perspective. Court, racket, scoring, technique crossovers, and which sport rewards which type of athlete.",
    intro:
      "Padel looks like tennis on a smaller court with walls. It isn't. The scoring is shared, the stance is familiar, and the ball is tennis-ish — but the rallies, the court geometry, and the fundamental tactical logic are a different game. Here's how they actually compare.",
    sections: [
      {
        title: "The court",
        body: "A padel court is 20 m x 10 m with walls on all sides. A tennis court is 23.77 m x 10.97 m (doubles) with no walls. Padel is always doubles. Tennis is played singles or doubles.",
      },
      {
        title: "The racket",
        body: "Padel rackets are perforated composite, roughly 45 cm long, with no strings — the surface is solid with punched holes. Tennis rackets are strung and longer. Padel's short racket makes volleys and wall reads easier but takes power out of groundstrokes.",
      },
      {
        title: "The ball",
        body: "Padel balls look identical to tennis balls but are slightly lower-pressure, giving a shorter bounce. A tennis ball in a padel court bounces too high and breaks wall tactics.",
      },
      {
        title: "The serve",
        body: "Padel serves are underhand and below waist height. Tennis serves can be hit overhead at over 200 km/h. The serve is a decisive weapon in tennis; in padel it's a neutral opener.",
      },
      {
        title: "The walls",
        body: "The single largest tactical difference. A defensive ball in tennis is recovered by running. In padel, it can come off a back wall into a reset. Whole rally patterns exist in padel that don't exist in tennis.",
      },
      {
        title: "Technique crossover",
        body: "A tennis player starting padel has an immediate advantage on forehands and volleys — the hand and eye already understand the strike. The backhand often hurts: tennis two-handers need to re-learn padel backhands. The biggest unlearning is the service motion and anything requiring a long swing — padel punishes it.",
      },
      {
        title: "Which rewards which athlete",
        body: "Tennis rewards power, reach, and explosiveness. Padel rewards anticipation, positioning, and touch. A heavy hitter who dominated on a tennis court can lose in padel to a slower player with sharper reads. If you preferred doubles to singles in tennis, padel is almost certainly your sport.",
      },
    ],
    keyTakeaways: [
      "Padel is always doubles. Tennis can be singles or doubles.",
      "The walls in padel change rally construction fundamentally.",
      "Tennis players pick up padel quickly on forehands and volleys.",
      "Padel rewards anticipation over power.",
    ],
    keywords: [
      "padel vs tennis",
      "padel tennis differences",
      "is padel easier than tennis",
      "switching from tennis to padel",
      "padel compared to tennis",
    ],
    faq: [
      {
        q: "Is padel easier than tennis?",
        a: "Easier to start — the smaller court, underhand serve, and softer bounces make the first sessions genuinely playable. Harder to master — wall reads and doubles positioning take years.",
      },
      {
        q: "Can tennis players transition to padel?",
        a: "Yes, usually with about 10–20 sessions to rewire the serve, shorten the swing, and learn wall reads. Forehands and volleys transfer almost directly.",
      },
      {
        q: "Is padel faster or slower than tennis?",
        a: "The ball travels slower, but the reaction time at net is faster — the court is smaller so exchanges are tighter.",
      },
      {
        q: "Do padel and tennis use the same ball?",
        a: "Visually identical but padel balls are slightly lower pressure. Using tennis balls on a padel court ruins the bounce.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "See your padel technique scored frame by frame",
  },
  "bandeja-technique": {
    slug: "bandeja-technique",
    h1: "Bandeja technique — the shot that defines padel",
    title: "Bandeja Technique — The Defining Padel Shot, Explained",
    description:
      "The bandeja is the shot that separates casual players from real ones. Grip, swing, contact point, and the three mistakes almost everyone makes. Written with coaching-level detail.",
    intro:
      "The bandeja is the padel shot with no tennis equivalent. It's a defensive overhead, hit with slice, that lets you stay at the net without over-committing. Played well, it suffocates your opponents. Played badly, it hands them a free ride to the back wall and a clean attacking lob. Here's how it actually works.",
    sections: [
      {
        title: "What the bandeja is for",
        body: "The bandeja is a controlled, sliced overhead played when you're at the net and your opponents send a lob that's too good to smash but too weak to ignore. It's the middle option. Hit it well and you stay at the net, keeping the point's pressure where you want it.",
      },
      {
        title: "The grip",
        body: "Continental, the same grip you'd use for a serve in tennis or a volley in padel. Some players drift toward eastern forehand on the bandeja — don't. You lose the slice, which is the shot's defining quality.",
      },
      {
        title: "The preparation",
        body: "Turn your shoulders early. The non-dominant arm tracks the ball like a pointer. The racket head sits high and slightly behind you, not above your head like a full smash. Think 'loaded for a slice', not 'coiled for a smash'.",
      },
      {
        title: "The contact point",
        body: "Out in front of the shoulder, not overhead. A common error — taking the ball too late and pulling it down into the net — comes from a contact point behind the shoulder line. Early is better than late on every bandeja.",
      },
      {
        title: "The swing path",
        body: "High-to-low-to-high. You cut across the ball, not through it. The racket face stays slightly open, brushing the ball's upper back quadrant. The follow-through finishes across the body, not down. A tennis-style full follow-through is almost always an error.",
      },
      {
        title: "Placement",
        body: "Target the back glass at the opponent's weaker side, aiming for a ball that dies short and deep — no height, no pace, no angle. A good bandeja takes the attacking option off the table for the receiver.",
      },
      {
        title: "Three mistakes beginners make",
        body: "One: hitting it flat. Without slice, the ball sits up at the back wall and becomes a gift. Two: reaching too far behind. Late contact pulls everything into the net. Three: over-hitting. The bandeja is a defensive tool — pace makes it easier for the opponent, not harder.",
      },
    ],
    keyTakeaways: [
      "The bandeja is a sliced defensive overhead, not a smash.",
      "Continental grip. Always.",
      "Contact point ahead of the shoulder line.",
      "The swing path is high-to-low-to-high, cutting across the ball.",
      "Low, short, and deep beats fast and flat.",
    ],
    keywords: [
      "bandeja technique",
      "bandeja padel",
      "how to hit bandeja",
      "padel bandeja grip",
      "padel slice overhead",
    ],
    faq: [
      {
        q: "What's the difference between a bandeja and a víbora?",
        a: "A bandeja is a defensive slice overhead aimed low and short. A víbora is an aggressive, spin-heavy overhead played with a forehand-like swing and targeting wide angles. Both are played from the same loose position but serve different tactical purposes.",
      },
      {
        q: "Why is it called bandeja?",
        a: "'Bandeja' means 'tray' in Spanish. The name refers to the motion — the racket face stays flat and open through the shot, as if carrying a tray.",
      },
      {
        q: "When should I use a smash instead of a bandeja?",
        a: "When the lob is short enough that you can step under it comfortably and strike overhead from in front of your body. If you're stretching or leaning back, play a bandeja — the attacking smash from a compromised position usually goes out or gives up the net.",
      },
      {
        q: "How long does it take to learn a decent bandeja?",
        a: "Most players can hit a recognisable bandeja within a month of focused work. Making it consistent under match pressure takes closer to a year.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Analyse your bandeja frame by frame",
  },
  "ai-padel-coaching": {
    slug: "ai-padel-coaching",
    h1: "What is AI padel coaching — and how does it work",
    title: "What is AI Padel Coaching and How Does it Work? | PadelUp",
    description:
      "AI padel coaching uses computer vision to analyse your technique frame by frame, build personalised training plans, and answer coaching questions 24/7. Here's what it actually does.",
    intro:
      "Traditional coaching gives you one hour a week. The other 167 hours you're on your own — guessing, repeating, hoping. AI padel coaching changes the ratio. Here's exactly how it works.",
    sections: [
      {
        title: "The core idea",
        body: "AI coaching uses computer vision to analyse your padel shots from video. It identifies your technique across five dimensions — stance, grip, swing path, body position, racket angle — and scores each on a 0–10 scale. Unlike a human coach who watches one session a week, the AI analyses every clip you upload, regardless of when or how often.",
      },
      {
        title: "Computer vision and what it sees",
        body: "Object detection tracks the ball and racket in every frame. Motion prediction maps your swing path. Technique recognition identifies the shot type — forehand, backhand, bandeja, víbora, smash, lob, volley, glass — then scores it against padel-specific criteria for that shot. The technology is the same used in sports broadcast and biomechanics research, now running on a phone.",
      },
      {
        title: "Personalised training plans",
        body: "After analysis, the AI builds a 7-day training plan targeting your lowest-scored dimension first. A stance problem gets stance drills. A swing-path issue gets wall-pattern work. The plan adapts week over week as scores change — so you're never drilling what's already working.",
      },
      {
        title: "24/7 coaching chat",
        body: "Between sessions, you can ask the AI anything about padel: technique, rules, tactics, equipment. It draws on professional match data and coaching manuals, not generic sports content. Ask why your backhand keeps landing short at 11pm and you'll get a specific answer, not a paragraph.",
      },
      {
        title: "AI coaching vs. a human coach",
        body: "A human coach reads your body language, adjusts your grip with their hands, and catches things in real time that no camera sees. That's irreplaceable. What AI adds is coverage — every session, every clip, every week. Most players who use both walk into coaching sessions already knowing their lowest score, which makes the hour far more productive.",
      },
      {
        title: "What AI coaching can't do",
        body: "It can't feel what's wrong in your stance the way a coach can. It doesn't know how tired you were, or whether you played three matches before the clip was recorded. It analyses what the camera sees. For best results, film intentionally: side angle, full body in frame, three to ten seconds of focused reps.",
      },
      {
        title: "Getting started",
        body: "You need an iPhone and three seconds of video. Upload a clip of any shot. The AI identifies the shot type, scores five technique dimensions, and hands you a drill for the weakest one. From there, a training plan builds automatically around your current scores.",
      },
      {
        title: "What the best padel coaching app needs to do",
        body: "Padel has grown from around 6 million players in 2019 to over 25 million in 2024, according to the International Padel Federation (FIP) — making it the world's fastest-growing racket sport. As the player base has scaled, so has demand for coaching that doesn't require a court booking and a €60–100 hourly fee. The best padel coaching app needs to do four things well: analyse real padel technique (not tennis movements relabelled), build training plans around what's actually broken, answer coaching questions at any hour, and track progression objectively over time. Apps that do one of these well are useful. An app that does all four — with models trained on padel-specific shot types rather than adapted from other racket sports — is the closest thing to a full coaching system in your pocket.",
      },
    ],
    keyTakeaways: [
      "Computer vision scores your technique across 5 dimensions on a 0–10 scale",
      "The AI recognises 8 padel-specific shot types, not generic categories",
      "Training plans update weekly based on your lowest scores",
      "24/7 coaching chat draws on pro-match data, not generic advice",
      "AI covers the 167 hours a week a coach isn't with you",
    ],
    keywords: [
      "AI padel coaching",
      "best padel coaching app",
      "what is AI padel coaching",
      "how does AI padel coaching work",
      "padel coaching app",
      "AI video analysis padel",
    ],
    faq: [
      {
        q: "Is AI padel coaching accurate?",
        a: "For technique scoring, yes — the AI is consistent and objective. It scores every clip against the same criteria, so you're not comparing apples to one coach's opinion and oranges to another's.",
      },
      {
        q: "Can it replace a private coach?",
        a: "For most players, no. A private coach catches things no camera sees. What AI does is provide constant feedback between coaching sessions and make those sessions far more targeted.",
      },
      {
        q: "How long does analysis take?",
        a: "Seconds. Upload a clip, the AI processes it, and you have scores and a matched drill almost immediately.",
      },
      {
        q: "Do I need special equipment?",
        a: "No. A smartphone camera, side angle, full body in frame. That's it.",
      },
      {
        q: "What is the best padel coaching app?",
        a: "The best padel coaching app combines four things: AI video analysis trained on padel-specific shot types (including bandeja, víbora, and glass play), personalised weekly training plans that adapt to your weakest shots, nutrition tracking built for racket-sport athletes, and 24/7 coach chat drawing on professional match data. PadelUp is built for padel from the ground up — not a tennis AI repurposed for padel — and covers all four in a single subscription. It's available on iOS with a 3-day free trial.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "See your technique scored in seconds",
  },
  "padel-video-analysis": {
    slug: "padel-video-analysis",
    h1: "How padel video analysis improves your game faster than practice alone",
    title: "How Padel Video Analysis Can Drastically Improve Your Game",
    description:
      "Padel video analysis uses frame-by-frame review to find technique flaws invisible during live play. Here's what it reveals and how to use it to improve faster.",
    intro:
      "You can practice a bad swing for years and only get more consistent at doing it wrong. Video analysis fixes that — it shows you what's actually happening, not what you think is happening.",
    sections: [
      {
        title: "Why your mental model of your swing is wrong",
        body: "Every player carries a mental model of how they hit the ball. That model is based on feel, not data. Research on self-perception in sports consistently shows the same thing: what athletes think they're doing and what cameras show them doing are separated by a significant gap. The earlier you close that gap, the faster you improve.",
      },
      {
        title: "What frame-by-frame analysis reveals",
        body: "Slow-motion and frame-by-frame playback catches things invisible at match speed. Grip drift between shots. Wrist drop at the critical contact moment. Early shoulder opening on the backhand. Incomplete follow-through on the bandeja. These aren't flaws you feel — they only become visible when you can pause at the exact frame they occur.",
      },
      {
        title: "Shot types and what to look for in each",
        body: "Each padel shot has its own failure patterns. Forehand errors cluster around late contact and a dropped elbow. Backhand errors show up as a two-hand-tennis-style swing that loses the slice. Bandeja errors are almost always a contact point too far behind the shoulder, pulling the ball into the net. Identifying the shot type first focuses your review on the right criteria.",
      },
      {
        title: "The difference AI makes",
        body: "Manual video review is useful but slow. You watch, pause, rewind, guess. AI video analysis automates the diagnostic step — it identifies the shot, scores each technical dimension, and tells you which frame the error starts. What takes a coach twenty minutes to assess, the AI does in seconds with no subjective variance between sessions.",
      },
      {
        title: "How to record useful clips",
        body: "Bad footage produces bad feedback. Record from the side, far enough back that your full body is in frame. Film three to ten seconds of focused reps on a single shot type. Avoid filming from behind the glass or directly behind you — the AI needs to see the swing path. A tripod or a water bottle wedged on a bench works fine.",
      },
      {
        title: "Using analysis between coaching sessions",
        body: "The best use of video analysis isn't replacing your coach — it's arriving at each session with a specific problem identified. Tell your coach your swing-path score is 4/10 on the backhand and the AI flagged a wrist drop at frame 8. That coach now has a precise target and the hour gets used on what actually matters.",
      },
      {
        title: "Tracking improvement over time",
        body: "A single analysis tells you where you are. Repeated analysis over weeks shows you if you're moving. Score trends per shot type are the clearest signal of real improvement — not how the session felt, not how your partner complimented your smash, but whether the number moved.",
      },
    ],
    keyTakeaways: [
      "Your mental model of your swing is consistently less accurate than video",
      "Frame-by-frame analysis catches errors invisible at match speed",
      "Each shot type has distinct failure patterns — analysis tells you which applies",
      "AI scores technique in seconds; manual review takes minutes per clip",
      "Record from the side, full body in frame, single shot type per clip",
      "Score trends over weeks are the most honest measure of improvement",
    ],
    keywords: [
      "padel video analysis",
      "how padel video analysis improves game",
      "padel self-analysis",
      "padel technique analysis",
      "benefits of video analysis padel",
    ],
    faq: [
      {
        q: "What camera do I need?",
        a: "Your phone. 1080p at 60fps is more than sufficient. A tripod helps but isn't required — set it against a fence or hand it to your partner.",
      },
      {
        q: "How often should I record?",
        a: "Once or twice a week, focusing on one shot type per session. More footage isn't better if it's all the same shot — variety of shot types gives a fuller picture.",
      },
      {
        q: "Can I analyse match footage or only practice?",
        a: "Both. Match footage shows your decision-making and how technique holds up under pressure. Practice footage is cleaner for technique detail.",
      },
      {
        q: "How do I know if I'm improving?",
        a: "The same clip, the same shot, three weeks apart. Or better: score trends per shot type over time in PadelUp's dashboard.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Analyse your padel technique frame by frame",
  },
  "padel-technique-weaknesses": {
    slug: "padel-technique-weaknesses",
    h1: "How to find your padel technique weaknesses — and actually fix them",
    title: "Identifying Padel Technique Weaknesses with AI Analysis | PadelUp",
    description:
      "Most padel players practice their strengths. AI analysis identifies your real weaknesses — ranked by impact — and builds a plan that fixes them in order.",
    intro:
      "The shots you avoid in practice are usually the ones costing you matches. Finding your real weaknesses, not the ones that feel obvious, requires objective data.",
    sections: [
      {
        title: "The problem with self-diagnosis",
        body: "Asking players to name their weaknesses reliably produces one answer: the shot they hate practicing most. That's not always the weakest shot — it's the one with the most negative emotional association. Actual weaknesses are determined by technique scores, not feelings. The difference matters because drilling the wrong thing for six months is how players stay stuck.",
      },
      {
        title: "What technique dimensions tell you",
        body: "A complete padel shot is five separate decisions made in under a second: stance, grip, swing path, body position, and racket angle. A 7/10 backhand might score 9/10 on grip and 4/10 on swing path. The shot works most of the time but breaks under pressure for a reason that's invisible without the breakdown. Knowing which dimension is the problem changes what you drill.",
      },
      {
        title: "Shot types as a diagnostic layer",
        body: "Different shot types have different failure patterns at different player levels. Beginners lose points to forehand grip and late contact. Intermediates lose points to bandeja contact point and backhand swing path. Advanced players lose points to subtle consistency drops in specific dimensions under match pressure. Scoring across all eight shot types shows where your game has unexplored blind spots.",
      },
      {
        title: "Ranking weaknesses by impact",
        body: "Not all weaknesses matter equally. A poor lob technique costs fewer points in recreational padel than a broken backhand. AI analysis ranks your shots by score so you know which to fix first. The drill that addresses your lowest score is always the highest-return training investment.",
      },
      {
        title: "The fixing cycle",
        body: "Identify the weakest dimension. Get the matched drill. Practice it deliberately, not mindlessly. Re-upload a clip of the same shot two weeks later. Check if the score moved. This cycle — diagnose, drill, re-score — is the fastest path to measurable improvement. Without the re-score step, you're guessing whether the drill worked.",
      },
      {
        title: "Common weaknesses by player level",
        body: "Beginners: forehand grip and stance width. Intermediates: backhand swing path and bandeja contact point. Advanced: smash consistency and glass-shot positioning. Knowing where your level typically breaks helps calibrate expectations — and confirms whether your individual scores are on pattern or genuinely unusual.",
      },
    ],
    keyTakeaways: [
      "Emotional associations with shots don't reliably identify real weaknesses",
      "Score across 5 dimensions per shot to find where a shot actually breaks",
      "Ranking weaknesses by score tells you which to fix first",
      "The fixing cycle: diagnose, drill, re-score — never guess if it worked",
      "Shot types have predictable weakness patterns at each player level",
    ],
    keywords: [
      "identifying padel technique weaknesses",
      "padel AI technique analysis",
      "find my padel flaws",
      "padel weak spots",
      "padel coaching analysis",
    ],
    faq: [
      {
        q: "How do I know which weakness to fix first?",
        a: "Fix the lowest score on your most-played shot type. That's usually the one costing you the most points.",
      },
      {
        q: "My technique feels fine but scores are low — why?",
        a: "Feel and mechanics diverge more than players expect. Low scores on a shot that feels okay usually mean a subtle flaw in swing path or contact point that's invisible during a rally but consistent enough to flag.",
      },
      {
        q: "How quickly can weaknesses improve?",
        a: "Small technical adjustments show score improvements within two to four weeks of focused drilling. Larger mechanical changes take longer.",
      },
      {
        q: "Should I film practice or matches?",
        a: "Both tell you different things. Practice footage gives clean technique data. Match footage shows whether the technique holds under pressure — which is where weaknesses cost you actual points.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Score your technique across 5 dimensions",
  },
  "padel-backhand-technique": {
    slug: "padel-backhand-technique",
    h1: "Padel backhand technique — grip, stance, swing path, and consistency",
    title: "Best Padel Backhand Technique for Consistency | PadelUp",
    description:
      "The padel backhand is the shot most intermediate players break on. Here's the grip, stance, swing path, and three mistakes that explain almost every error.",
    intro:
      "The padel backhand breaks differently from the tennis backhand and gets worse in a different way. Understanding exactly how it fails is the starting point for fixing it.",
    sections: [
      {
        title: "Why the padel backhand is different",
        body: "The padel backhand isn't a scaled-down tennis backhand. It's a slice-dominant, compact-swing shot that needs a completely different grip and contact point. Players who learned tennis first tend to overcomplicate it: too much swing, too much shoulder, contact point too late. The most common padel backhand errors come directly from tennis muscle memory asserting itself.",
      },
      {
        title: "The grip",
        body: "Continental grip, same as the bandeja and serve. The common error is drifting toward an eastern backhand grip, which removes the slice and produces a flat shot that sits up at the back wall. Keep the V of the hand on the top bevel of the racket. If the backhand starts flattening out under pressure, check the grip first.",
      },
      {
        title: "Stance and unit turn",
        body: "The unit turn is the whole upper body rotating as one piece — not just the shoulder. Both hips and both shoulders turn simultaneously toward the ball, loading the shot. A half-turn is the most common stance failure: the feet and hips stay square while the shoulder reaches. The ball then comes off flat and with no angle.",
      },
      {
        title: "Contact point",
        body: "Earlier than you think. The contact point on the padel backhand should be in front of the front foot, not beside the body. Late contact — which is what most players default to — produces a shot that either goes into the net or floats long. Move the contact point forward and the shot suddenly has direction.",
      },
      {
        title: "The swing path",
        body: "Compact, high-to-low, finishing across the body. The follow-through ends around waist height on the non-dominant side. A long, looping follow-through is almost always a sign of tennis habit — it adds no power on a padel backhand and kills control. Shorter swing, cleaner contact, more consistent placement.",
      },
      {
        title: "Three common backhand mistakes",
        body: "One: late contact, which produces net errors and floaters. Two: square stance, which removes angle and forces the ball straight. Three: continental grip drift toward eastern, which eliminates slice and produces shots that bounce high at the back wall, handing the opponent an easy attacking position.",
      },
      {
        title: "Drilling the backhand",
        body: "The wall is your best practice partner for backhands. Hit continuous rallies against the front wall from two to three metres back, focusing on contact point and unit turn. Once those feel consistent, add the full swing path. Only move to live-ball practice when the wall drills are automatic — or you'll drift back to whatever felt comfortable before.",
      },
    ],
    keyTakeaways: [
      "Continental grip — not eastern backhand",
      "Unit turn: hips and shoulders together, not just the shoulder",
      "Contact point in front of the front foot, not beside the body",
      "High-to-low swing, short follow-through — not a full tennis loop",
      "Three causes of most backhand errors: late contact, square stance, grip drift",
    ],
    keywords: [
      "padel backhand technique",
      "best padel backhand for consistency",
      "padel backhand grip",
      "improve padel backhand",
      "padel backhand drills",
    ],
    faq: [
      {
        q: "Should the padel backhand be one-handed or two-handed?",
        a: "One-handed. Two-handed padel backhands exist but are rare and generally considered less adaptable for the wide range of positions padel creates.",
      },
      {
        q: "Why does my backhand keep going into the net?",
        a: "Almost certainly late contact. Move the contact point further in front of the body and the shot comes up. Also check the grip — an eastern backhand grip removes the natural slice that creates lift.",
      },
      {
        q: "How long until the backhand is reliable?",
        a: "Most players see meaningful improvement in four to eight weeks of focused wall work. Making it automatic under match pressure takes three to six months.",
      },
      {
        q: "Can I use the same backhand for all shots from that side?",
        a: "The base swing is the same. Shot type (backhand volley, backhand lob, backhand drive) adjusts contact point and follow-through length, not the fundamental grip and unit turn.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Score your backhand across 5 technique dimensions",
  },
  "padel-court-positioning": {
    slug: "padel-court-positioning",
    h1: "Padel court positioning — where to stand and why it determines who wins",
    title: "Padel Court Positioning for Beginners: Master the Court | PadelUp",
    description:
      "Court positioning in padel determines which team controls the rally. Here's the default positions, when to break them, and the transitions beginners get wrong most often.",
    intro:
      "Most rally errors in padel don't come from a technical failure — they come from being in the wrong position when the ball arrives. Positioning determines whether a shot is hard or impossible before you even swing.",
    sections: [
      {
        title: "The net is worth fighting for",
        body: "In padel, the team at the net wins most exchanges. The geometry is simple: from the net, you attack down at the opponents' feet. From the back, you defend at height against volleys angled into your body. The entire tactical logic of the game flows from this asymmetry. One team tries to stay at the net; the other tries to dislodge them with lobs.",
      },
      {
        title: "Default position: net team",
        body: "Standing at the net, your default position is approximately three metres from the net, in the middle of your half of the court. Not pressed against the net — vulnerable to lobs — and not retreating too far, which loses the angle advantage. Your partner mirrors you: same depth, same lateral alignment. Both should be able to cover a shot to either side without crossing.",
      },
      {
        title: "Default position: back team",
        body: "From the back, your default is roughly one metre from the back wall, centred on your half. Close enough to the wall to let a lob bounce into it and still play the ball, but not so close the wall limits your swing. Beginners consistently stand too far from the wall, which forces an awkward half-shot on deep lobs.",
      },
      {
        title: "Moving together as a unit",
        body: "The biggest positioning error beginners make is moving independently. If you step wide to cover a ball, your partner must shift to close the gap you created. If they don't, a simple cross-court pass opens the court wide. Effective doubles means the two-player unit moves like one body — same lateral shifts, same forward and backward pressure.",
      },
      {
        title: "The transition: net to back",
        body: "When you get lobbed out of the net, retreat fast. Don't back-pedal — turn and run. The most common mistake is retreating too slowly, arriving at the ball cramped and off-balance. Get behind the ball, let it bounce, reset from the back wall if needed. Surrendering the net temporarily is fine; playing a back-wall reset from a compromised position is not.",
      },
      {
        title: "The transition: back to net",
        body: "When the opponents hit a weak ball short, the back team attacks the net. Move too early and you get lobbed before reaching the net. Move too late and the attackable ball is gone. A general rule: if the ball is going to bounce in the middle of the opponent's court, that's your signal to advance.",
      },
      {
        title: "Beginners' positioning mistakes",
        body: "Three that cost the most points: standing too close to the net (lobbed constantly), not moving as a unit (giving away passes), and staying stuck at the back after the opponents hit a weak ball (missing attacking opportunities). Correct these three and you'll win more rallies without changing a single shot.",
      },
    ],
    keyTakeaways: [
      "The team at the net controls the rally — positioning determines who that is",
      "Net position: 3m back, centred on your half, mirroring your partner",
      "Back position: 1m from the wall, centred — not too far from the wall",
      "Move as a unit — lateral shifts require your partner to mirror",
      "Three biggest beginner errors: too close to net, moving independently, staying back after weak balls",
    ],
    keywords: [
      "padel court positioning for beginners",
      "where to stand in padel",
      "correct padel position",
      "padel strategy basics",
      "padel doubles positioning",
    ],
    faq: [
      {
        q: "Should beginners try to get to the net?",
        a: "Yes. Even beginner padel is won by the team that spends more time at the net. Getting comfortable attacking the net early is the highest-leverage positioning habit to build.",
      },
      {
        q: "What happens when one partner covers a lob and the other doesn't?",
        a: "The uncovered side opens up for a pass. Either both players retreat together, or the partner anticipates and crosses to cover. Half-retreats are the most common way beginners give up the net unnecessarily.",
      },
      {
        q: "How do I know when to advance to the net?",
        a: "When the ball lands short and central in your opponents' court — that's the signal. Anything landing deep or into the back corners is not an invitation to advance.",
      },
      {
        q: "Does positioning matter more or technique?",
        a: "Positioning matters more for beginners. A well-placed player with average technique beats a technically sound player in the wrong position. Fix positioning before obsessing over technique refinements.",
      },
    ],
    relatedFeature: "/features/training-plans",
    relatedFeatureLabel: "Get a training plan that addresses positioning and technique",
  },
  "padel-improvement-plateau": {
    slug: "padel-improvement-plateau",
    h1: "Why you've stopped improving at padel — and what to actually do about it",
    title: "Why Am I Not Improving at Padel? Break Your Plateau | PadelUp",
    description:
      "Padel plateaus are almost always caused by the same three things: practicing the wrong things, getting no objective feedback, and reinforcing the same errors week after week.",
    intro:
      "Playing more padel isn't the same as getting better at padel. When the two things diverge, you get a plateau. Here's what causes it and how to break it.",
    sections: [
      {
        title: "Playing is not practicing",
        body: "A match puts you in situations you didn't choose, under pressure you can't control, rewarding the shots you already know rather than the ones you need to build. Matches are for testing. Practice is for building. Most players who plateau are doing the same ratio of matches to deliberate practice they were doing when they started, and wondering why the results haven't changed.",
      },
      {
        title: "Practicing your strengths",
        body: "Nobody wants to drill the shot they're bad at. So forehands get 80% of the reps and the backhand stays broken. The improvement curve follows the practice curve — and if you're only practicing what already works, the curve flattens. Objective weak-spot identification forces you to practice the shots that matter, not the ones that feel good.",
      },
      {
        title: "Feedback quality",
        body: "'Good shot' and 'unlucky' are not feedback. Neither is the vague impression that a session felt better or worse than last week. Real feedback is specific, consistent, and tied to objective data. Knowing your stance score is 4/10 and your grip score is 8/10 tells you exactly what to fix. Playing three sets and walking off with a general sense of how it went does not.",
      },
      {
        title: "Ingraining errors instead of fixing them",
        body: "The hardest thing about plateaus is that the practice you're doing isn't neutral — it's actively reinforcing the wrong patterns. A hundred backhands per session with late contact doesn't improve the backhand. It deepens the habit of late contact. The longer you practice an error unidentified, the harder it becomes to unlearn.",
      },
      {
        title: "How to break through",
        body: "Three changes that work: First, add deliberate practice to your schedule — not more matches, dedicated drill time on identified weaknesses. Second, get objective feedback on the shots you think are fine. The weaknesses you're unaware of are the ones actually costing you points. Third, measure improvement systematically — re-score the same shot type after four weeks of targeted work and see if the number moved.",
      },
      {
        title: "The role of AI coaching",
        body: "AI analysis compresses the feedback loop. Instead of weeks of vague feeling, you get a score on your worst shot within seconds of uploading a clip. The matched drill addresses the specific dimension that's breaking. Re-score four weeks later and the data tells you whether it worked. This loop — score, drill, re-score — is what breaks a plateau faster than any increase in court time alone.",
      },
    ],
    keyTakeaways: [
      "Playing more matches doesn't break plateaus — deliberate practice of identified weaknesses does",
      "Practicing strengths while avoiding weaknesses is the most common cause of stagnation",
      "Vague match feelings aren't feedback — scores tied to specific dimensions are",
      "Unidentified errors get reinforced with every practice rep",
      "The fix: score your weaknesses, get the matched drill, re-score after four weeks",
    ],
    keywords: [
      "why am I not improving at padel",
      "padel plateau solutions",
      "stuck at padel level",
      "breaking padel plateaus",
      "padel improvement tips",
    ],
    faq: [
      {
        q: "How do I know if I'm plateaued or just having a bad run?",
        a: "A plateau persists across weeks regardless of match results. If technique scores on your weakest shots aren't moving over a four-to-six week period despite practice, that's a plateau.",
      },
      {
        q: "How much deliberate practice do I need?",
        a: "Twenty to thirty minutes of focused drill work twice a week moves the needle faster than three extra matches. The quality of the practice matters more than the volume.",
      },
      {
        q: "Does playing with better players help?",
        a: "It helps with tactical awareness and pressure tolerance. It doesn't fix technique weaknesses — and can make them worse if errors are reinforced at higher intensity.",
      },
      {
        q: "What's the fastest way out of a plateau?",
        a: "Objective weak-spot scoring followed by deliberate drilling of the lowest-scored dimension. Skip the introspection, go straight to data.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Find your weakest shot in seconds",
  },
  "padel-forehand-technique": {
    slug: "padel-forehand-technique",
    h1: "Padel forehand technique for beginners — the essentials that build a clean shot",
    title: "Padel Forehand Technique for Beginners: Essential Tips | PadelUp",
    description:
      "The padel forehand is shorter and more compact than tennis, but the fundamentals — grip, stance, contact point — transfer directly. Here's how to build it right from the start.",
    intro:
      "The forehand is usually the first padel shot that starts clicking. It's also the first one that develops bad habits if you don't build it correctly from the beginning.",
    sections: [
      {
        title: "The grip",
        body: "Semi-western or eastern forehand grip works well for most padel forehands. The racket V sits on the top-right bevel of the handle. Don't grip too tight — the padel racket's solid surface requires a relaxed grip to generate natural feel on contact. Tension kills the forehand before the swing starts.",
      },
      {
        title: "Stance",
        body: "Open or semi-open stance on the forehand is standard in padel. Your non-dominant shoulder doesn't need to point at the ball the way it does in tennis — the shorter swing and smaller court make a fully closed stance impractical. Load weight on the back foot, transfer through contact. Stay balanced rather than lunging.",
      },
      {
        title: "The backswing",
        body: "Compact. This is where beginners who played tennis overcook it. The padel forehand backswing ends with the racket roughly level with your ear — not above your head, not looping behind your back. Early preparation is more important than a big swing. Get the racket back early and the rest of the shot takes care of itself.",
      },
      {
        title: "Contact point",
        body: "In front of the body, at waist height or slightly below. The forehand in padel isn't a topspin shot — you're hitting relatively flat or with slight lift. A contact point too low produces net errors. Too late produces floaters. At waist height, slightly forward, the ball tends to go where you aimed it.",
      },
      {
        title: "Follow-through",
        body: "Finish upward and across the body. The follow-through shouldn't be long — it should complete the shot's natural arc and stop. A common beginner error is stopping the follow-through early, killing pace and direction. A common intermediate error is letting it loop into a long finish that adds nothing and costs recovery time.",
      },
      {
        title: "The most common forehand mistakes",
        body: "Late preparation — the swing starts when the ball is already at your side, producing rushed contact. Tight grip — the ball comes off rigid rather than clean. Over-swinging — a long backswing produces timing errors in the constrained padel court. Fix these in order: prepare early, loosen the grip, shorten the swing.",
      },
      {
        title: "Drilling the forehand",
        body: "Forehand against the front wall from two metres: hit, let it bounce, hit again. Focus on consistent contact height and the same follow-through each time. Once you have that, start adding direction — alternate between the left and right wall. Deliberate repetition at close range builds muscle memory faster than open-court rallying.",
      },
    ],
    keyTakeaways: [
      "Semi-western or eastern forehand grip, held loosely",
      "Open or semi-open stance — closed stance is impractical in padel",
      "Compact backswing: racket level with ear, not above the head",
      "Contact point at waist height, in front of the body",
      "Short follow-through — not a full tennis loop",
      "Three fixes for most forehand errors: earlier prep, looser grip, shorter swing",
    ],
    keywords: [
      "padel forehand technique for beginners",
      "easy padel forehand",
      "learn padel forehand",
      "padel forehand tips",
      "padel forehand grip",
    ],
    faq: [
      {
        q: "Is the padel forehand the same as a tennis forehand?",
        a: "Similar fundamentals — grip, stance, contact point — but significantly shorter backswing and follow-through. Tennis players pick it up quickly once they shorten the swing.",
      },
      {
        q: "Why does my forehand keep going into the net?",
        a: "Contact point is probably too low. Try hitting the ball slightly higher — at waist height rather than below. Also check that you're not swinging late.",
      },
      {
        q: "Should I use topspin on the padel forehand?",
        a: "Minimal or none. Topspin is possible but unnecessary for most recreational players and hard to execute consistently on a solid racket. Flat to slightly lifted works for 95% of situations.",
      },
      {
        q: "How long until my forehand is reliable?",
        a: "Two to four weeks of regular drilling produces a recognisably clean forehand. Making it automatic under match pressure takes two to three months.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Get your forehand scored frame by frame",
  },
  "padel-footwork-drills": {
    slug: "padel-footwork-drills",
    h1: "Essential padel footwork drills that actually improve court coverage",
    title: "Essential Padel Footwork Drills for Better Court Coverage | PadelUp",
    description:
      "Padel footwork isn't about speed — it's about positioning before the ball arrives. These drills build the movement patterns that make every shot easier.",
    intro:
      "The most underestimated part of a padel improvement plan is footwork. Players focus on shot technique while their movement stays inefficient — and then wonder why well-executed shots still go wrong.",
    sections: [
      {
        title: "Why footwork is the foundation",
        body: "A technically sound padel shot hit from the wrong position is still a bad shot. Good footwork means arriving at the ball in balance, with time to execute. Bad footwork means always catching up, always improvising, always hitting from a compromised stance. Every technique improvement you make is multiplied by your footwork quality.",
      },
      {
        title: "The split step",
        body: "The split step is the fundamental movement reset in padel. Just as your opponent contacts the ball, you hop slightly, landing with feet shoulder-width apart and weight forward. This primes you to move in any direction instantly. Without the split step, you're flat-footed and always a fraction late. With it, your first step to the ball is explosive and early.",
      },
      {
        title: "Side shuffle drill",
        body: "Mark two points 4 metres apart on the court. Shuffle side to side between them without crossing your feet, keeping your racket up and weight forward. Aim for ten to twenty passes, then rest. This builds the lateral movement pattern used for defending volleys and reaching wide forehand or backhand positions.",
      },
      {
        title: "Shadow footwork",
        body: "Shadow footwork is movement practice without a ball — you move to each corner of the court following a pattern called by a partner or set on a timer. Six positions: forehand, backhand, forehand volley, backhand volley, smash, and net reset. Each position has a specific footwork pattern. Three minutes of shadow footwork is more targeted work than most players do in a month.",
      },
      {
        title: "The T-drill",
        body: "Place four cones in a T shape: three metres to each side of the centre and six metres straight ahead. Start at the base. Sprint forward to the top cone, shuffle left, shuffle right, shuffle back to centre, sprint back. This covers the movements you make when chasing balls to both sides and transitioning between net and back positions.",
      },
      {
        title: "Transition footwork",
        body: "The most important movement in padel is the net-to-back transition when you've been lobbed. The correct technique: turn your back foot first, then your whole body, and run — don't back-pedal. Practice this with a partner lobbing over your shoulder repeatedly. The discomfort of turning your back on the ball goes away with repetition; the habit of back-pedalling is much harder to undo.",
      },
      {
        title: "Building it into training",
        body: "Footwork drills should run before ball work, not after. When your legs are fresh, movement patterns form faster. Five minutes of footwork before every session: split step practice, side shuffles, one T-drill run. Do that consistently for a month and your court coverage changes noticeably.",
      },
    ],
    keyTakeaways: [
      "Good footwork multiplies every technique improvement you make",
      "Split step before every opponent contact — never be flat-footed",
      "Side shuffle: lateral movement without crossing feet, weight forward",
      "Shadow footwork: 3 minutes, 6 positions, no ball — builds movement patterns fast",
      "Net-to-back transition: turn and run, never back-pedal",
      "Footwork drills go first, before ball work, when legs are fresh",
    ],
    keywords: [
      "essential padel footwork drills",
      "quick padel footwork",
      "agility drills padel",
      "padel movement training",
      "padel court coverage",
    ],
    faq: [
      {
        q: "How often should I do footwork drills?",
        a: "Before every session, for five minutes. More is fine; the goal is consistency over volume.",
      },
      {
        q: "Can I do footwork drills without a court?",
        a: "Yes. Shadow footwork and side shuffles need a few metres of space. A living room or garage works. The movement pattern is what matters.",
      },
      {
        q: "What's more important — speed or positioning?",
        a: "Positioning. Getting to the right place at the right time is more valuable than being fast to the wrong place. The split step and reading the ball early beat raw speed every time.",
      },
      {
        q: "How long before footwork improvements show in matches?",
        a: "Two to three weeks of consistent pre-session drills before you notice easier ball-reaching. Four to six weeks before it feels automatic.",
      },
    ],
    relatedFeature: "/features/training-plans",
    relatedFeatureLabel: "Get a training plan that includes footwork work",
  },
  "padel-vibora-shot": {
    slug: "padel-vibora-shot",
    h1: "The víbora in padel — how to hit it, when to use it, and what separates it from the bandeja",
    title: "Mastering the Padel Víbora Shot for Advanced Play | PadelUp",
    description:
      "The víbora is the aggressive overhead complement to the defensive bandeja. Here's the grip, swing, contact point, and the tactical situation that calls for each.",
    intro:
      "If the bandeja is the controlled exit from a difficult overhead, the víbora is its opposite: an attacking shot that puts the point away. Getting them confused is one of the most costly errors in intermediate padel.",
    sections: [
      {
        title: "Bandeja vs. víbora — the tactical split",
        body: "Both are played from the net when your opponent sends a lob. The choice depends on one thing: can you reach the ball comfortably and strike in front of your body? If yes — víbora, attack the ball. If no — bandeja, reset the point. Playing a víbora from a compromised position produces errors. Playing a bandeja when you could attack gives the opponent free time.",
      },
      {
        title: "The grip",
        body: "The víbora uses a continental grip, same as the bandeja. Some players drift slightly toward a forehand grip when trying to add pace — this is a mistake. The continental grip gives you the wrist freedom and angle control the víbora needs. Grip changes under pressure are almost always what turn a víbora into a net ball.",
      },
      {
        title: "The swing path — where víbora differs from bandeja",
        body: "The bandeja cuts across the ball with a high-to-low swing. The víbora accelerates through the ball with more pronation, producing pace and heavy side spin. Think of the víbora swing as a controlled whip: the contact is crisp, the follow-through crosses the body, and the racket finishes pointing down and across rather than in a full arc.",
      },
      {
        title: "Contact point",
        body: "Slightly higher than on the bandeja and more directly overhead. The ball needs to be reachable comfortably — if you're leaning back to make contact, you've already lost the shot. The contact point should be where you'd comfortably smash, but you're choosing to add spin rather than raw power.",
      },
      {
        title: "Targeting and exit angle",
        body: "A well-hit víbora exits the court through the gap between the side fence and the glass — what's called hitting 'por tres'. Aimed correctly, the ball bounces once in the opponent's court and flies out at a low angle. Targeting the back glass instead of the exit gap turns a winner into an easy defensive shot for the opponent.",
      },
      {
        title: "When to use it",
        body: "The víbora is your shot when the lob is attackable: short, well inside the service line, arriving at a comfortable height. Against a deep, well-placed lob that forces you to stretch or shuffle, use the bandeja. Against a short, central lob when you're well-positioned, use the víbora. The decision happens before the ball arrives.",
      },
      {
        title: "Common víbora mistakes",
        body: "Hitting it flat when you intend spin — usually a grip issue. Hitting it from a compromised position — contact is behind the shoulder and the ball goes anywhere. Overusing it — experienced opponents expect the víbora when the lob is short, so mixing in a well-disguised bandeja from the same position creates genuine confusion.",
      },
    ],
    keyTakeaways: [
      "Víbora is used when attackable; bandeja when you need to reset",
      "Continental grip — not forehand grip, even under pressure",
      "Swing path: accelerate through the ball with pronation, not across it like the bandeja",
      "Contact point is high and directly overhead — reachable comfortably",
      "Target the 'por tres' exit gap, not the back glass",
      "Three mistakes: flat swing, compromised position, overuse",
    ],
    keywords: [
      "mastering the padel víbora shot",
      "padel víbora technique",
      "how to hit a víbora",
      "advanced padel shots",
      "víbora vs bandeja padel",
    ],
    faq: [
      {
        q: "When should I choose the víbora over the bandeja?",
        a: "When the lob is short enough that you can reach the ball comfortably, contact in front of your body, and attack. Any lob that forces you to stretch or reach behind your shoulder calls for the bandeja.",
      },
      {
        q: "How do I add spin to the víbora?",
        a: "Pronation at contact — the racket face rotates through the ball from high to low. Think of brushing the ball's upper surface aggressively. The spin comes from the wrist and forearm, not from muscling the shot.",
      },
      {
        q: "Can beginners learn the víbora?",
        a: "Not productively until the bandeja is reliable. The víbora requires solid overhead mechanics and court sense to use correctly. Build the bandeja first — the víbora will follow.",
      },
      {
        q: "Why does my víbora keep going into the net?",
        a: "Likely a contact point too far behind the shoulder. The ball needs to be in front of and above you. Also check you're not using a forehand grip — it removes the natural lift that the continental grip provides.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Get your overhead shots scored frame by frame",
  },
  "padel-doubles-strategy": {
    slug: "padel-doubles-strategy",
    h1: "Basic padel doubles strategy — positioning, patterns, and how to win more points",
    title: "Basic Padel Strategy for Doubles: Win More Points | PadelUp",
    description:
      "Padel is always doubles. Understanding the core patterns — who attacks, who defends, where to stand, when to advance — separates players who improve from players who just play.",
    intro:
      "You can have technically sound shots and still lose every match because your doubles strategy is wrong. Padel strategy is learnable, logical, and makes every technique improvement worth more.",
    sections: [
      {
        title: "The core principle: attack the net",
        body: "Every padel rally resolves around which team controls the net. The team at the net dictates direction and pace. The team at the back defends upward, which gives the net team angular control. Getting to the net and staying there is the most valuable strategic habit in doubles padel.",
      },
      {
        title: "Serve strategy",
        body: "The serve in padel is a neutral opener, not a weapon. Serve wide to force the return cross-court, or serve at the body to limit the return angle. Either way, the goal is a return that lets you advance to the net. Serving for aces is largely wasted energy — use it to set up your net approach instead.",
      },
      {
        title: "The return of serve",
        body: "Return deep and cross-court. A deep return gives you time to advance. A short return invites the serving team to volley at your feet as you move forward. Cross-court returns keep the ball away from the net player closest to you. Don't try to do too much with the return — depth and direction matter more than pace.",
      },
      {
        title: "The lob: your main defensive weapon",
        body: "From the back, the lob is how you force the net team to retreat. A good defensive lob is deep, high enough to pass over the net player's reach, and aimed at the weaker back-wall player. A lob that's too short or flat becomes a smash opportunity. Height and depth win; pace loses.",
      },
      {
        title: "Attacking weak balls",
        body: "A weak ball — one that lands short and central — is your invitation to advance. Both players move together toward the net, with the player nearest to the ball taking it and the other covering the opposite half. The first ball you attack doesn't need to be a winner; it needs to put you at the net in control.",
      },
      {
        title: "Communication patterns",
        body: "Two players who communicate win more points than two players with better technique who don't. Call 'mine' when taking the ball. Call 'yours' to signal your partner is closer. When the ball goes through the middle — the most common point-losing situation in doubles — whoever is on the forehand side takes it by default. Set a rule and stick to it.",
      },
      {
        title: "Adapting to your opponents",
        body: "Observe the first five points: who is the weaker player? Which side breaks under pressure? Where do they stand when defending? Aim your lobs at the weaker player, serve to the returner's backhand, and attack the side that shows defensive gaps. Padel at recreational level is won as much by reading opponents as by superior technique.",
      },
    ],
    keyTakeaways: [
      "Control the net — all padel doubles strategy flows from this",
      "Serve to set up the net approach, not for aces",
      "Return deep and cross-court — depth matters more than pace",
      "Defensive lob: high, deep, aimed at the weaker back player",
      "Move as a unit — both advance or both retreat together",
      "Identify the weaker opponent in the first five points and target them",
    ],
    keywords: [
      "basic padel strategy for doubles",
      "padel doubles positioning",
      "winning padel tactics",
      "beginner padel strategy",
      "padel doubles tips",
    ],
    faq: [
      {
        q: "What's the single biggest tactical mistake beginners make?",
        a: "Staying at the back when they could advance. The instinct to play it safe from the back costs more points than it saves. When you have a short ball, attack the net.",
      },
      {
        q: "What if my partner and I keep hitting the same ball at the same time?",
        a: "Set a default rule for middle balls: forehand player takes it. Apply it consistently for two sessions and the confusion disappears.",
      },
      {
        q: "Should we always lob from the back?",
        a: "Not always — a hard drive at the net player's body or feet can also be effective and harder to predict. But the lob is the safest and most reliable way to reset when under pressure.",
      },
      {
        q: "How do we handle a team that smashes everything?",
        a: "Lob high, make them work to get under the ball, and aim at the player with the weaker overhead. Nobody smashes perfectly when pushed further back than they want to be.",
      },
    ],
    relatedFeature: "/features/24-7-chat",
    relatedFeatureLabel: "Ask the AI coach anything about padel tactics",
  },
  "padel-rules-mistakes": {
    slug: "padel-rules-mistakes",
    h1: "Common padel rules mistakes — and the correct calls that end arguments on court",
    title: "Common Padel Rules Mistakes and How to Avoid Them | PadelUp",
    description:
      "Most padel rules disagreements come from the same five situations. Here are the correct rulings, the logic behind each, and the edge cases that cause the most confusion.",
    intro:
      "Padel rules are simple until they're not — and the edge cases that seem rare are exactly the ones that end up deciding close games. Here are the calls that get argued most, and what the rules actually say.",
    sections: [
      {
        title: "The ball on the wall before the ground",
        body: "The single most argued rule: a ball hits your side's wall before bouncing on the ground. The ruling is absolute: lost point, always. On your side of the net, the ball must bounce on the ground first, then can hit any wall freely. A ball that touches any surface before the ground is a fault. No exceptions.",
      },
      {
        title: "The serve let and where it goes",
        body: "If the serve clips the net and lands in the correct service box, it's a let — replay the point. If the serve clips the net and lands outside the service box, it's a fault. If the serve hits the net, then hits the net post, and lands in — it's a fault. The net post is not the net; a ball deflecting off a post is out.",
      },
      {
        title: "The glass clips on the serve",
        body: "A serve that bounces in the service box then hits the side glass before being returned is a fault — even if the ball is still technically in the court. The serve must bounce cleanly in the box without hitting any glass or wall. This rule surprises players who assume the walls are in play on the serve; they are not.",
      },
      {
        title: "Can the ball go out over the top?",
        body: "Yes — and it's legal. A smash hit hard enough to bounce in the opponent's court and exit through the gap at the top of the fence scores the point. This is called 'por tres'. What's not legal: a ball that exits through a door or side opening without first bouncing on the court. Bounce first, then exit — point to you.",
      },
      {
        title: "Double hits and carries",
        body: "A ball that hits your racket twice in a single stroke is a lost point. A ball that 'carries' — rolls along the racket during the swing — is allowed as long as it's a single continuous stroke. The distinction: one continuous swing motion is legal; two separate contacts in the same stroke is a fault.",
      },
      {
        title: "Out of court play",
        body: "A ball that hits the ceiling, a light fixture, or any object outside the court during a rally is an immediate lost point — for whichever team it was heading toward when it hit the obstruction. Disputed calls here usually need the benefit of the doubt extended in recreational play.",
      },
      {
        title: "Serve foot faults",
        body: "The server must keep at least one foot behind the service line when serving and cannot step on or over it during the delivery. Both feet must remain behind the line from the start of the service motion until contact. A serve that otherwise lands correctly but was delivered with a foot fault is still a fault.",
      },
    ],
    keyTakeaways: [
      "Ball on wall before ground = lost point, always",
      "Serve let: clips net and lands in box = replay; lands out = fault",
      "Serve cannot hit glass or walls after bouncing — it's a fault if it does",
      "Por tres: legal exit through the top gap after bouncing in the court",
      "Double hit in one stroke = fault; carry in one continuous motion = allowed",
      "Foot fault on serve: both feet behind service line until contact",
    ],
    keywords: [
      "common padel rules mistakes",
      "padel rules explained",
      "scoring in padel",
      "correct padel rules",
      "padel rule disputes",
    ],
    faq: [
      {
        q: "What happens if the ball hits the net post during a rally?",
        a: "Lost point for the team that hit the ball. The net post is a fixed part of the structure; a ball deflecting off it during play is treated as if it went out.",
      },
      {
        q: "Can I catch a ball that's heading out to show it's out?",
        a: "No. If you catch or stop a ball before it bounces, even to show it's going out, you lose the point. Let it go — out is out once it lands.",
      },
      {
        q: "Is a ball landing on the line in or out?",
        a: "In. Any part of the ball touching the line is a good ball.",
      },
      {
        q: "What if a ball hits a player's body during the rally?",
        a: "The player who was hit loses the point — regardless of whether the ball was heading in or out. This includes clothing, jewellery, and the racket if it's not in hand.",
      },
    ],
    relatedFeature: "/features/24-7-chat",
    relatedFeatureLabel: "Ask the AI coach any rules edge case, 24/7",
  },
  "ai-sports-coaching-future": {
    slug: "ai-sports-coaching-future",
    h1: "The future of AI in sports coaching — what's already here and what's coming",
    title: "The Future of AI in Sports Coaching: What to Expect | PadelUp",
    description:
      "AI is already changing how athletes in racket sports get coached. Here's what's live today, what's in development, and where padel fits in the shift.",
    intro:
      "Sports coaching is being rebuilt from the ground up by AI — not gradually, but at the pace that software moves. Here's what that actually means for athletes who train with real intent.",
    sections: [
      {
        title: "What AI coaching already does",
        body: "Frame-by-frame video analysis, personalised training plan generation, 24/7 coaching chat, and objective performance tracking are all in production today. These aren't research prototypes. The same capabilities that required a full-time sports science team five years ago now run on a phone. The gap between elite-level feedback access and recreational player access has effectively closed.",
      },
      {
        title: "Computer vision as the foundation",
        body: "The core technology enabling AI coaching is computer vision — the ability to parse video and extract quantified data. In sports, this means tracking player position, ball trajectory, racket movement, and technique execution frame by frame. Computer vision that required bespoke hardware setups in 2015 now runs at real-time speeds on consumer hardware. The quality of analysis available to a recreational padel player today matched what was available to elite athletes a decade ago.",
      },
      {
        title: "Personalisation at scale",
        body: "The most powerful shift AI enables is true personalisation. Traditional coaching personalises to the degree one coach can track and remember across dozens of students. AI doesn't forget, doesn't have bad days, and applies the same analytical rigour to every session. A training plan that responds dynamically to your actual performance data — not a fixed template — is now a solved problem.",
      },
      {
        title: "What's in development",
        body: "The next wave of AI coaching includes real-time feedback during play via court-mounted cameras, predictive models that forecast technique regression before it happens, and opponent modelling that generates tactical briefings based on video of specific players. These are months to a few years away from widespread deployment, not decades.",
      },
      {
        title: "The human coach's changing role",
        body: "AI doesn't eliminate coaching; it changes what coaching is for. The routine diagnostic work — identifying what's broken, prescribing the drill — is increasingly handled by AI. What human coaches provide that AI cannot: real-time tactile correction, emotional intelligence, and the relational dimension that keeps athletes motivated through plateaus. The best coaches will use AI to make their sessions more precise.",
      },
      {
        title: "Padel's position in this shift",
        body: "Padel is one of the fastest-growing sports in the world and technically complex enough that AI coaching adds real value — the number of distinct shot types, the role of walls, and the doubles dynamics create a rich analytical environment. The sport is young enough that AI-native training tools are growing alongside it, rather than retrofitting into established coaching cultures.",
      },
      {
        title: "What this means for you now",
        body: "The improvement available to a padel player with an AI coaching tool today would have required a full-time private coach ten years ago. Technique scoring, personalised drill programmes, tactical Q&A based on pro-level data — all of this is accessible. The athletes who use these tools in the next three years will have a meaningful skill advantage over those who don't.",
      },
    ],
    keyTakeaways: [
      "Frame-by-frame analysis, adaptive training plans, and 24/7 coaching chat are all live today",
      "Computer vision now runs at real-time quality on consumer hardware",
      "AI personalises to your actual data — not a fixed template",
      "Next wave: real-time in-play feedback, predictive regression detection, opponent modelling",
      "Human coaches shift to high-value work: tactical, emotional, relational",
      "Padel is one of the best sports for AI coaching due to its technical complexity",
    ],
    keywords: [
      "future of AI in sports coaching",
      "AI revolutionizing sports",
      "AI coaching trends",
      "technology in padel",
      "AI padel coaching future",
    ],
    faq: [
      {
        q: "Is AI coaching only for elite athletes?",
        a: "No — and this is the most important thing to understand. AI coaching is most valuable for the recreational player who has no access to the daily coaching sessions that elite athletes receive. It democratises elite-level feedback.",
      },
      {
        q: "Will AI replace sports coaches?",
        a: "For routine diagnostic and drill-prescription tasks, AI will handle an increasing share. The irreplaceable parts of coaching — real-time physical correction, motivation, athlete relationships — remain human.",
      },
      {
        q: "How accurate is AI technique analysis right now?",
        a: "For padel-specific shots scored against padel-specific criteria: very accurate for identifying the key technique dimensions and ranking them. The analysis is consistent and objective in a way human coaching is not.",
      },
      {
        q: "What developments in AI coaching should I pay attention to?",
        a: "Real-time in-play feedback via court cameras and opponent modelling. These are the capabilities that most dramatically change what training looks like.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Try AI padel coaching today",
  },
  "padel-tournament-prep": {
    slug: "padel-tournament-prep",
    h1: "How to prepare for a padel tournament — the week-by-week guide",
    title: "How to Prepare for a Padel Tournament: Your Winning Guide | PadelUp",
    description:
      "Tournament preparation in padel isn't about cramming technique in the final week. Here's the structured approach: what to do in the weeks before, the days before, and the morning of.",
    intro:
      "Tournament padel is a different game from recreational padel — same shots, different mental load, higher consequence for errors. Preparation is what makes the difference.",
    sections: [
      {
        title: "Four weeks out: identify what needs fixing",
        body: "The biggest mistake in tournament prep is trying to overhaul your game in the final week. Technique changes need four to six weeks to become automatic under pressure. Four weeks out, run a full analysis of your shot types, identify your two weakest, and commit to drilling those exclusively. New techniques introduced in the final days will fall apart under match conditions.",
      },
      {
        title: "Three weeks out: targeted drilling",
        body: "Structured drill sessions on your identified weaknesses, three to four times this week. Focus on the mechanics rather than match play. Wall work for backhands and forehands. Footwork patterns for transition and positioning. No match play this week — reps on identified weaknesses only.",
      },
      {
        title: "Two weeks out: mix drills and match practice",
        body: "Start integrating your improved technique into match play. Play practice matches and specifically track whether the drilled shots hold under pressure. If they do, build confidence. If they don't, go back to drilling the specific dimension that breaks — you still have time.",
      },
      {
        title: "One week out: sharpen, don't change",
        body: "Final week is about confidence and sharpness, not fixing new problems. Short, high-quality sessions. Work on your serve and return patterns — these are disproportionately important in tournaments because they determine every point's starting position. Light fitness work to keep sharp without accumulating fatigue.",
      },
      {
        title: "Scouting your opponents",
        body: "If you know who you're playing, analyse what you can find. Which side is weaker — forehand or backhand? Do they smash everything, or prefer the bandeja? Are they physical or tactical players? Even five minutes of video or asking players who've faced them gives you an edge most recreational players don't bother to acquire.",
      },
      {
        title: "The two days before",
        body: "No match play. Light hitting to stay sharp, then rest. Sleep quality affects reaction time and decision-making in competition more than most players realise. Two nights of good sleep before a tournament matters. Hydration from forty-eight hours out — not just the morning of.",
      },
      {
        title: "Match day preparation",
        body: "Warm up progressively: footwork patterns first, then groundstrokes from the service line, then net volleys, then overhead shots. Ten to fifteen minutes total. Have a game plan for the first five points of the first set — how you'll serve, how you'll return, which opponent you'll target first. Execution under pressure improves dramatically when the decisions are already made.",
      },
    ],
    keyTakeaways: [
      "Start prep four weeks out — technique changes need time to become automatic",
      "Three weeks out: drill weaknesses only, no match play",
      "Two weeks out: integrate into match practice and test what holds under pressure",
      "Final week: sharpen existing strengths, don't introduce new changes",
      "Scout opponents even informally — five minutes of intel has outsized impact",
      "Two days before: rest, hydrate; match day: warm up progressively with a plan",
    ],
    keywords: [
      "how to prepare for a padel tournament",
      "padel tournament tips",
      "pre-match padel routine",
      "mental preparation padel",
      "padel tournament guide",
    ],
    faq: [
      {
        q: "How long before a tournament should I start preparing?",
        a: "Four weeks is the minimum for meaningful technique improvement. Six weeks is better. Anything less than two weeks and you're better off maintaining current form than trying to fix weaknesses.",
      },
      {
        q: "Should I play matches the week before a tournament?",
        a: "Minimal. Light practice sessions to stay sharp, but avoid heavy match play that accumulates fatigue. Your goal is to arrive fresh, not exhausted.",
      },
      {
        q: "What if I have a weak shot that I know will be tested?",
        a: "Work on it intensively four to three weeks out. In the final week, focus on disguising or reducing exposure to it rather than fixing it — there isn't time.",
      },
      {
        q: "How should I handle nerves on match day?",
        a: "The game plan reduces nerves: having decided how you'll serve, return, and target makes decisions automatic when anxiety tries to slow your thinking. Trust the preparation.",
      },
    ],
    relatedFeature: "/features/training-plans",
    relatedFeatureLabel: "Build a tournament prep training plan",
  },
  "how-to-read-opponents": {
    slug: "how-to-read-opponents",
    h1: "How to read opponents in padel — the cues that tell you where the ball is going",
    title: "How to Read Opponents in Padel: Gain a Tactical Edge | PadelUp",
    description:
      "Reading opponents in padel means picking up on movement, positioning, and swing cues before the ball is struck. Here's what to watch and how to translate it into earlier positioning.",
    intro:
      "The players who move best on a padel court aren't reacting faster — they're reading earlier. Anticipation is a skill, not a talent, and it's built by knowing what to look for.",
    sections: [
      {
        title: "Anticipation vs. reaction",
        body: "Reaction time in elite padel is roughly 200–300 milliseconds from ball contact to the moment you need to start moving. That's not enough time to respond to the ball alone — you need to be moving before contact. The players who look fast aren't faster; they read earlier. Anticipation is about extracting information from the opponent's setup before they swing.",
      },
      {
        title: "What the body tells you",
        body: "The most reliable cue is the opponent's shoulder position during their setup. An open shoulder tends to produce a cross-court shot; a closed shoulder tends to drive down the line. At recreational level, the shoulder-to-shot relationship is consistent enough to be worth reading. Watch the shoulder, not the racket.",
      },
      {
        title: "Footwork cues",
        body: "Weight loaded on the front foot at contact usually signals an attacking, forward shot. Weight loaded on the back foot usually signals a lob or defensive drive. Watch how the opponent's weight is distributed as they approach the ball — it tells you more about the shot's intention than the swing does.",
      },
      {
        title: "Racket face and grip",
        body: "An open racket face before contact is a strong signal for lob or lofted shot. A closed or neutral face signals a drive or flat shot. Players who can read the racket face angle before contact are effectively reading the ball flight before it happens. This takes practice to notice consistently, but once automatic it collapses the reaction gap dramatically.",
      },
      {
        title: "Positional tells",
        body: "Where an opponent stands before the rally starts often reflects where they're comfortable sending the ball. A player who drifts wide tends to go cross-court from the wide position. A player who crowds the centre line may favour the down-the-line angle. Positioning patterns are the slowest-changing tendency in recreational players — they rarely adapt mid-match.",
      },
      {
        title: "Building a mental map of your opponent",
        body: "The first five points of any match are your data collection window. Note: do they go to the forehand or backhand under pressure? Do they lob when pushed or try to drive? Do they signal cross-court or line with their shoulder? By the sixth point you should have enough of a pattern to start positioning proactively rather than reactively.",
      },
      {
        title: "How to practice reading",
        body: "Shadow work without a ball: have a partner go through serving and swing motions without hitting, and call your read — 'cross' or 'line' — before the swing completes. Start with exaggerated signals, gradually reduce them. On court, spend five minutes in a session watching an opponent's preparation rather than watching the ball. Reading improves with focused attention more than with match experience alone.",
      },
    ],
    keyTakeaways: [
      "Anticipation is a skill — built by reading cues, not by having faster reflexes",
      "Shoulder position before contact is the most reliable shot-direction cue",
      "Footwork cues: front-foot weight = attacking, back-foot weight = lob or defensive",
      "Open racket face = lob or lofted shot; neutral/closed = drive",
      "Use the first five points as a data window — identify patterns early",
      "Practice reading with shadow drills, not just match exposure",
    ],
    keywords: [
      "how to read opponents in padel",
      "padel opponent analysis",
      "predicting padel shots",
      "padel tactical awareness",
      "padel anticipation",
    ],
    faq: [
      {
        q: "Can you learn to read opponents or is it natural ability?",
        a: "Mostly learned. The cues are consistent across players — shoulder position, weight distribution, racket face — and can be specifically practised. Natural awareness helps initially; deliberate practice is what makes it reliable.",
      },
      {
        q: "What's the most important cue to focus on first?",
        a: "Shoulder position. It's the largest movement, easiest to pick up, and most correlated with shot direction. Start there before layering in footwork and racket cues.",
      },
      {
        q: "My opponents disguise their shots well — does reading still work?",
        a: "Good disguise reduces the reliability of individual cues, not the value of the overall practice. Even partially reading three out of five shots gives you an anticipation edge. No one disguises everything.",
      },
      {
        q: "How long until anticipation becomes intuitive?",
        a: "Four to six weeks of deliberate practice — actively calling reads during sessions — before it starts becoming automatic. A year of consistent focus before it's reliable under tournament pressure.",
      },
    ],
    relatedFeature: "/features/24-7-chat",
    relatedFeatureLabel: "Ask the AI coach about opponent reading and tactics",
  },
  "master-padel-technique-ai": {
    slug: "master-padel-technique-ai",
    h1: "Master padel technique with AI — the complete guide to improving every shot",
    title: "Master Padel Technique: Improve Your Game with AI | PadelUp",
    description:
      "A comprehensive guide to mastering padel technique — forehand, backhand, bandeja, víbora, volley, serve, footwork — and how AI analysis accelerates the process of fixing each one.",
    intro:
      "Padel technique is not one skill — it's eight shot types, each with its own grip, stance, swing path, and failure pattern. This guide covers all of them and explains how AI coaching accelerates mastery of each.",
    sections: [
      {
        title: "Why technique is the long game",
        body: "Padel technique builds in layers. The grip and stance take weeks to correct. The swing path takes months. Making all of it automatic under match pressure takes years. That timeline compresses dramatically when every session produces objective feedback — you stop reinforcing errors and start building correct patterns from day one.",
      },
      {
        title: "The forehand: building the foundation",
        body: "The forehand is usually the first padel shot that feels natural. Build it correctly early — semi-western grip, compact backswing, contact at waist height in front of the body, short follow-through. Tennis players tend to over-swing; beginners tend to under-rotate. Frame-by-frame scoring catches both errors within the first few sessions.",
      },
      {
        title: "The backhand: the most broken shot at intermediate level",
        body: "Continental grip, unit turn, early contact point, compact follow-through. The padel backhand breaks because of late contact and grip drift toward eastern. Most intermediate players who plateau do so because their backhand has a consistent technical flaw they can't see. AI analysis identifies which dimension is breaking — grip, stance, or swing path — and gives you the specific drill.",
      },
      {
        title: "The serve: a neutral opener, not a weapon",
        body: "Underhand, below waist height, landing in the diagonal service box. The padel serve is a setup tool, not a point-winner. The goal is depth and direction to control where the return lands, so you can advance to the net. Serve wide to force cross-court returns, or at the body to limit angle.",
      },
      {
        title: "Volleys: the net game",
        body: "The padel volley is compact and controlled. Racket face slightly open, punch through the ball, minimal follow-through. The most common volley errors are too big a backswing and late contact. At the net you have less time than you think — the preparation starts as soon as you see the ball heading toward you.",
      },
      {
        title: "The bandeja: the defining shot",
        body: "Continental grip, high-to-low slice, contact point in front of the shoulder, low and short target placement. The bandeja is the shot that separates casual padel from real padel. It's not a smash — it's a controlled defensive overhead that keeps you at the net on difficult positions. Build it before the víbora.",
      },
      {
        title: "The víbora: attacking from overhead",
        body: "The aggressive complement to the bandeja. Used when the lob is short and you can attack comfortably. Continental grip, more pronation than the bandeja, contact point high and in front. The víbora targets the por tres exit gap or the opponent's weaker side. Learn it after the bandeja is reliable.",
      },
      {
        title: "Glass play: the uniquely padel skill",
        body: "Playing a ball off the back or side glass has no equivalent in tennis. The ball arrives from behind you — you need to track it off the glass, let it travel the right distance, then strike it as it comes back into the court. The instinct to face the net is wrong; turn and face the glass before the ball arrives.",
      },
      {
        title: "Footwork: the force multiplier",
        body: "Every technical improvement you make is multiplied by your movement quality. Good footwork means arriving at the ball with time, balance, and position to execute. Bad footwork means improvising from a compromised stance regardless of how good your technique drills are. Practice footwork before ball work, every session.",
      },
      {
        title: "Using AI to track all of it",
        body: "The advantage of AI scoring across all eight shot types simultaneously is that it shows you where your game has blind spots you didn't know existed. Most players improve on the shots they focus on and neglect what they don't notice. A full technique profile reveals the complete picture and ranks which improvement delivers the highest return.",
      },
    ],
    keyTakeaways: [
      "Padel technique is 8 shot types — each needs specific grip, stance, and swing criteria",
      "Forehand: semi-western grip, compact swing, waist-height contact",
      "Backhand: continental grip, unit turn, early contact — not tennis mechanics",
      "Bandeja before víbora — get the defensive overhead right first",
      "Glass play requires turning to face the glass, not the net",
      "AI analysis reveals blind spots across all shot types simultaneously",
    ],
    keywords: [
      "master padel technique",
      "improve padel technique with AI",
      "padel technique guide",
      "padel shot mechanics",
      "AI padel technique analysis",
    ],
    faq: [
      {
        q: "Which shot should I improve first?",
        a: "Whichever gets the lowest score when you analyse all eight. Usually the backhand at intermediate level, but AI scoring removes the guesswork.",
      },
      {
        q: "How long does it take to master padel technique?",
        a: "Foundational technique — playable forehands, backhands, and volleys — takes two to four months of regular practice. The bandeja adds several months. Full technical competence across all shot types is a one-to-two year project.",
      },
      {
        q: "Does AI coaching work for beginners?",
        a: "Yes. In fact, the earlier you start analysing technique, the fewer errors you entrench. Beginners who get AI feedback from month one build correct patterns instead of correcting bad ones later.",
      },
      {
        q: "Can I analyse multiple shot types in one session?",
        a: "Yes. Upload clips of different shots — the AI identifies each type automatically. A full technique profile across all eight shot types gives you a complete picture of where your game stands.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Score every shot in your game",
  },
  "advanced-padel-strategy-tactics": {
    slug: "advanced-padel-strategy-tactics",
    h1: "Advanced padel strategy — the patterns, decisions, and positioning that win matches",
    title: "Win More Matches: Advanced Padel Strategy & Tactics | PadelUp",
    description:
      "Advanced padel strategy goes beyond shot selection — it's about reading patterns, controlling tempo, managing positioning, and making better decisions under pressure.",
    intro:
      "Technical improvement has a ceiling. Beyond it, what separates players at the same level is tactical intelligence — who reads the patterns faster, who controls tempo, who makes better decisions under pressure.",
    sections: [
      {
        title: "Tempo control: the advanced player's edge",
        body: "Recreational padel is often played at one speed regardless of the situation. Advanced padel uses tempo deliberately: fast when attacking, slow when resetting, and varied to break opponents out of their rhythm. The simplest tempo tool is the lob: a well-timed high lob forces the opponent to wait for the ball to drop, breaking their attacking momentum and giving your team time to reposition.",
      },
      {
        title: "The golden point pattern",
        body: "The most important tactical principle in doubles padel is engineering the point: set up with two or three neutral balls, then attack when you get the short ball you've been engineering. Most recreational players attack randomly. Advanced players engineer specific court positions — pushing opponents to the back wall, then attacking the side open to them.",
      },
      {
        title: "Managing the middle of the court",
        body: "The most points in doubles padel are lost through the middle — the gap between the two players. Advanced teams make explicit agreements: the player on the forehand side takes middle balls. But beyond the default, advanced players also know to shift the two-player unit based on where the ball is going, closing the middle before it opens.",
      },
      {
        title: "Reading the lob before it's hit",
        body: "Advanced opponents disguise lobs by using the same preparation as drives. The reads: back foot loading signals a lob, racket face opening signals a lofted shot, slightly wider contact point signals lob rather than flat drive. Learning to read these cues a fraction early is the difference between a lob you chase and one you're already moving back for.",
      },
      {
        title: "Targeting the weaker player systematically",
        body: "In recreational doubles, one player almost always has a clearer weakness. Advanced strategy means routing balls to that weakness consistently — not occasionally when it's convenient. Serve to their backhand. Lob to their weaker overhead side. Direct volleys at their feet. Pressure applied to one player is more effective than pressure distributed equally.",
      },
      {
        title: "Exploiting the transition moment",
        body: "The moment a team transitions from back to net is the highest-risk moment in a rally. One player is still moving while the other is taking a shot. Advanced players identify when the opponent is mid-transition and attack the ball to the moving player's side, where coverage is momentarily incomplete.",
      },
      {
        title: "Varying serve patterns",
        body: "Most recreational servers serve to the same spot every time. Advanced servers use three or four distinct service patterns and introduce them unpredictably: wide to force the cross-court return, at the body to limit angle, deep to limit advance. Variation in serve pattern forces the returner to think rather than react on autopilot.",
      },
      {
        title: "Defensive depth and neutralisation",
        body: "When trapped at the back by a well-placed lob, the goal is neutralisation, not immediate counter-attack. A deep, high lob buys time. A hard drive aimed at the net player's feet forces an error rather than a volley winner. The instinct to attack immediately from the back usually produces errors. Neutralise first, attack when you've won the net.",
      },
    ],
    keyTakeaways: [
      "Tempo control is the highest-leverage advanced tactic — vary speed deliberately",
      "Engineer the short ball rather than attacking randomly",
      "Manage the middle explicitly — forehand player takes it by default, then adapt",
      "Read lob cues: back foot loading, open racket face, wide contact point",
      "Target the weaker player systematically, not occasionally",
      "Vary serve patterns unpredictably — consistency in location makes you easy to read",
    ],
    keywords: [
      "advanced padel strategy",
      "padel tactics for intermediate players",
      "padel doubles strategy advanced",
      "win more padel matches",
      "padel tactical awareness",
    ],
    faq: [
      {
        q: "At what level does strategy start mattering more than technique?",
        a: "Once your technique is reliable enough that you're no longer fighting shots — roughly 12 to 18 months of regular play. Before that, technique fixes deliver more improvement per hour than tactical work.",
      },
      {
        q: "How do I improve tactical awareness without a coach?",
        a: "Play sets with specific objectives rather than just playing to win. 'This set, I only attack on short balls.' Constraint-based practice builds tactical thinking faster than free play.",
      },
      {
        q: "What's the fastest tactical improvement for an intermediate player?",
        a: "Stop attacking from the back. The constraint 'I only attack when I'm at the net' removes one of the most common point-losing decision patterns immediately.",
      },
      {
        q: "How do I make better decisions under pressure?",
        a: "Pre-decide. Before a point starts, have a plan: how you'll serve, where you'll return, which player you'll target. Pressure degrades decisions made in the moment; it rarely degrades decisions made in advance.",
      },
    ],
    relatedFeature: "/features/24-7-chat",
    relatedFeatureLabel: "Ask the AI coach about advanced padel tactics",
  },
  "ai-padel-coaching-performance": {
    slug: "ai-padel-coaching-performance",
    h1: "AI padel coaching — how data-driven analysis translates into better performance",
    title: "AI Padel Coaching: Analyze Your Game, Boost Performance | PadelUp",
    description:
      "AI padel coaching uses computer vision, personalised training plans, and 24/7 coaching chat to turn your performance data into measurable improvement. Here's how the system works end to end.",
    intro:
      "Performance improvement in padel has always required objective feedback, consistent measurement, and personalised training. AI makes all three accessible to every player, not just those with full-time coaches.",
    sections: [
      {
        title: "The performance feedback problem",
        body: "Most players train without objective feedback. They practice shots, play matches, and form impressions of what's improving — impressions that are regularly wrong. Performance science has known for decades that self-assessment in skilled motor tasks is unreliable. The gap between what athletes think they're doing and what cameras show them doing is consistent and significant. AI coaching closes that gap.",
      },
      {
        title: "What analysis actually measures",
        body: "PadelUp's AI analyses padel shots across five technique dimensions: stance, grip, swing path, body position, and racket angle. Each is scored on a 0–10 scale against padel-specific criteria — not generic sports movement patterns. Eight shot types are recognised independently, because a forehand and a bandeja are scored against completely different criteria.",
      },
      {
        title: "From scores to training",
        body: "Analysis produces two outputs: a dimension score (what's broken) and a matched drill (what fixes it). A stance score of 4/10 doesn't produce generic 'improve your stance' advice — it produces a specific drill targeted at the exact failure pattern associated with that score level. This is the difference between a training plan and a template.",
      },
      {
        title: "The 7-day adaptive plan",
        body: "Each week, the training plan is generated from your current scores. It prioritises your lowest-scored shot type, balances technique work with footwork and positioning sessions, and adjusts the drill mix as scores change. When your backhand score reaches 7/10, the plan shifts to the next weakest dimension automatically.",
      },
      {
        title: "Nutrition and recovery as performance inputs",
        body: "Technique deteriorates when you're under-fuelled or under-recovered. PadelUp's nutrition tracker uses photo recognition to log meals instantly. Daily targets are adjusted for training load: higher carbs and calories on match days, lower on recovery days. Padel is an intermittent high-intensity sport that depletes glycogen and electrolytes significantly — tracking what goes in matters for what comes out on court.",
      },
      {
        title: "24/7 coaching access — what it changes",
        body: "Between sessions, most players have no way to get specific answers to specific questions. The AI coaching chat changes that. It draws on professional match data and coaching manuals to answer technique questions, tactical queries, and equipment questions at any hour. Ask why your backhand keeps landing short. Get the specific answer, not a generic paragraph.",
      },
      {
        title: "Measuring real improvement",
        body: "Progress in PadelUp is measured by technique score trends across sessions, not by match results or subjective feel. Score trends on your specific shot types over four, eight, and twelve weeks show you whether the training is working. This is the kind of measurement feedback that elite sports science programmes charge thousands for.",
      },
      {
        title: "Building the loop",
        body: "The most effective use of AI coaching is iterative: upload a clip, get the score, do the matched drill, re-upload after two weeks, compare. Every iteration gives you cleaner data and a more targeted plan. Players who run the loop consistently improve faster than players who use the tool intermittently. Frequency of feedback matters more than any individual session's quality.",
      },
    ],
    keyTakeaways: [
      "Self-assessment in motor tasks is consistently unreliable — objective analysis fixes this",
      "5 technique dimensions scored per shot, against padel-specific criteria",
      "Matched drills address the exact failure pattern behind a low score",
      "7-day plans regenerate weekly from current scores — not a fixed template",
      "Nutrition tracking adjusts daily targets for training load automatically",
      "The improvement loop: score → drill → re-score → adapt. Repeat.",
    ],
    keywords: [
      "AI padel coaching performance",
      "padel coaching app",
      "AI padel analysis",
      "improve padel performance",
      "padel coaching technology",
    ],
    faq: [
      {
        q: "How quickly does performance improve with AI coaching?",
        a: "Technique dimension scores typically show movement within two to four weeks of targeted drilling. Full shot improvement under match pressure takes eight to twelve weeks. Progress is measurable from the start.",
      },
      {
        q: "Do I need to already have a coach to use PadelUp?",
        a: "No. PadelUp works as a standalone coaching system. Players with coaches use it to extend feedback between sessions; players without coaches use it as their primary improvement tool.",
      },
      {
        q: "How is PadelUp different from just watching match video?",
        a: "Watching video shows you what happened. PadelUp scores it, ranks the dimensions by impact, and prescribes the drill. The analysis step is what turns video into a training direction.",
      },
      {
        q: "What if my scores don't improve despite drilling?",
        a: "The plan adapts when scores plateau — it tries different drill approaches for the same dimension. If scores still don't move after multiple attempts, that's a signal to involve a human coach for in-person mechanical assessment.",
      },
    ],
    relatedFeature: "/features/ai-video-analysis",
    relatedFeatureLabel: "Start your AI padel coaching journey",
  },
};

export const LEARN_SLUGS = Object.keys(LEARN) as LearnSlug[];
