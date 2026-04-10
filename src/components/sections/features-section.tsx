import PhoneFrame from "@/components/mockups/phone-frame";
import MockupAnalysis from "@/components/mockups/analysis-mockup";
import MockupNutrition from "@/components/mockups/nutrition-mockup";
import MockupTraining from "@/components/mockups/training-mockup";
import MockupChat from "@/components/mockups/chat-mockup";

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#00E676]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M2.5 6L5 8.5L9.5 3.5"
          stroke="#00E676"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface FeatureBlockProps {
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
  reversed?: boolean;
  padding: string;
  delay: string;
}

function FeatureBlock({
  title,
  description,
  bullets,
  mockup,
  reversed,
  padding,
  delay,
}: FeatureBlockProps) {
  return (
    <div className={`${padding}`}>
      <div
        className={`max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12 lg:gap-20`}
      >
        {/* Text */}
        <div className="flex-1 max-w-lg">
          <h3
            className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: delay }}
          >
            {title}
          </h3>
          <p
            className="text-base sm:text-lg text-white/45 leading-relaxed mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: `calc(${delay} + 0.08s)` }}
          >
            {description}
          </p>
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li
                key={bullet}
                className="flex items-start gap-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `calc(${delay} + ${0.16 + i * 0.06}s)` }}
              >
                <CheckIcon />
                <span className="text-sm sm:text-base text-white/55">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup */}
        <div className="flex-shrink-0">
          <div className="rotate-2 drop-shadow-[0_20px_50px_rgba(0,230,118,0.12)]">
            <PhoneFrame>{mockup}</PhoneFrame>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#0A0A0A]">
      <FeatureBlock
        title="Frame-by-frame technique analysis"
        description="Our AI watches every frame of your shot and scores your technique across five dimensions. See exactly where you lose points and get actionable tips to fix it."
        bullets={[
          "Grip, stance, swing path scoring",
          "Personalized coaching tips",
          "Track progress over time",
        ]}
        mockup={<MockupAnalysis />}
        padding="py-24"
        delay="0.1s"
      />

      <FeatureBlock
        title="Nutrition tracking, simplified"
        description="Snap a photo of your meal and get instant calorie and macro estimates. No more manual logging or guessing portions."
        bullets={[
          "Instant calorie and macro estimates",
          "Daily and weekly tracking",
          "Meal calendar history",
        ]}
        mockup={<MockupNutrition />}
        reversed
        padding="py-20"
        delay="0.1s"
      />

      <FeatureBlock
        title="Training plans that adapt to you"
        description="Get daily drills tailored to your weak spots. Each plan adjusts based on your analysis scores and completed sessions."
        bullets={[
          "Based on your analysis scores",
          "Daily drills with timers",
          "Streak tracking and XP",
        ]}
        mockup={<MockupTraining />}
        padding="py-16"
        delay="0.1s"
      />

      <FeatureBlock
        title="Your personal padel coach"
        description="Ask any padel question and get expert-level answers instantly. From technique tweaks to strategy for your next tournament."
        bullets={[
          "Technique advice on demand",
          "Strategy and rules",
          "Equipment recommendations",
        ]}
        mockup={<MockupChat />}
        reversed
        padding="py-24"
        delay="0.1s"
      />
    </section>
  );
}
