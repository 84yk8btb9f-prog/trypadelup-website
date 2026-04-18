export type LearnSlug =
  | "padel-rules"
  | "padel-vs-tennis"
  | "bandeja-technique";

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
};

export const LEARN_SLUGS = Object.keys(LEARN) as LearnSlug[];
