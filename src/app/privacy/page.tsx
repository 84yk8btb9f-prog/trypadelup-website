import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PadelUp",
  description: "PadelUp privacy policy — how we collect, use, and protect your data.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="text-xl font-semibold text-white mb-4 pb-2"
        style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
      >
        {title}
      </h2>
      <div
        className="flex flex-col gap-3 text-sm leading-relaxed"
        style={{ color: "rgba(240, 244, 248, 0.7)" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#39ff7d" }}
            >
              Legal
            </p>
            <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p style={{ color: "rgba(240, 244, 248, 0.45)" }}>
              Last updated: April 2026
            </p>
          </div>

          <Section title="1. Introduction">
            <p>
              Welcome to PadelUp (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). PadelUp is operated by an individual developer and provides an AI-powered padel coaching application (&ldquo;the App&rdquo;) available on iOS.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our App and visit our website at trypadelup.com (&ldquo;the Site&rdquo;). By using PadelUp, you agree to the practices described in this policy.
            </p>
            <p>
              If you have questions about this policy, please contact us at{" "}
              <a href="mailto:support@trypadelup.com" style={{ color: "#39ff7d" }}>
                support@trypadelup.com
              </a>
              .
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p className="font-medium text-white">2.1 Account Information</p>
            <p>
              When you create an account using Apple Sign In, we receive your name and email address. We do not store your Apple credentials — authentication is handled entirely by Apple.
            </p>

            <p className="font-medium text-white">2.2 Photos and Videos</p>
            <p>
              <strong className="text-white">Meal photos:</strong> When you use the Smart Nutrition feature, you may upload photos of your meals. These images are processed by our AI to identify food items and estimate macronutrient content. Images are transmitted to our AI provider and are not stored permanently after analysis.
            </p>
            <p>
              <strong className="text-white">Technique videos:</strong> When you use the AI Video Analysis feature, you may upload short video clips of your padel play. These videos are processed to provide coaching feedback. Videos are transmitted to our AI provider for analysis and are not retained after processing.
            </p>

            <p className="font-medium text-white">2.3 Location Data</p>
            <p>
              We may request access to your device location to help you find nearby padel courts and other players. Location data is used solely for this purpose and is not stored permanently on our servers.
            </p>

            <p className="font-medium text-white">2.4 Health and Fitness Data</p>
            <p>
              We collect height, weight, and fitness goal information you provide during onboarding. This data is used to personalize training plans and nutrition recommendations.
            </p>

            <p className="font-medium text-white">2.5 Usage Analytics</p>
            <p>
              We use PostHog to collect anonymized analytics about how users interact with the App. This includes feature usage, session duration, and in-app events. This data helps us understand which features are most valuable and improve the product.
            </p>

            <p className="font-medium text-white">2.6 User-Generated Content</p>
            <p>
              You may submit court locations, session logs, and messages in the AI Coach chat. This content is stored on our servers to provide the service.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Create and manage your account</li>
              <li>Provide AI video analysis and coaching feedback</li>
              <li>Analyze meal photos and provide nutritional estimates</li>
              <li>Generate personalized training plans</li>
              <li>Show nearby padel courts and players</li>
              <li>Process subscription payments via Apple App Store and RevenueCat</li>
              <li>Send important service notifications (e.g., subscription status)</li>
              <li>Improve and develop new features based on anonymized usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell your personal information to third parties. We do not use your data for targeted advertising.
            </p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>PadelUp relies on the following third-party service providers. Each has its own privacy policy:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                <strong className="text-white">Supabase</strong> — Database and backend infrastructure. Your account data and app content are stored securely in Supabase.
              </li>
              <li>
                <strong className="text-white">Google Gemini</strong> — AI analysis for video technique and meal photos. Data submitted for analysis is processed according to Google&apos;s API data usage policies.
              </li>
              <li>
                <strong className="text-white">RevenueCat</strong> — Subscription management and purchase tracking. RevenueCat receives anonymized subscription status information.
              </li>
              <li>
                <strong className="text-white">PostHog</strong> — Product analytics. Usage events are anonymized and aggregated.
              </li>
              <li>
                <strong className="text-white">Apple</strong> — Sign In with Apple (authentication), App Store (payments and subscriptions), and iOS platform services.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal information for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required by law to retain it longer.
            </p>
            <p>
              Anonymized analytics data (PostHog) may be retained indefinitely as it cannot be linked back to you.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and at rest, access controls, and regular security reviews. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Your Rights (GDPR and Privacy)">
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-white">Correction:</strong> Request that we correct inaccurate or incomplete data.</li>
              <li><strong className="text-white">Deletion:</strong> Request that we delete your personal data. You can also delete your account directly within the App settings.</li>
              <li><strong className="text-white">Export:</strong> Request an export of your data in a machine-readable format.</li>
              <li><strong className="text-white">Restriction:</strong> Request that we restrict processing of your data in certain circumstances.</li>
              <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interests.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:support@trypadelup.com" style={{ color: "#39ff7d" }}>
                support@trypadelup.com
              </a>
              .
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              PadelUp is not intended for children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you believe a child has provided us with their information, please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of PadelUp after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:support@trypadelup.com" style={{ color: "#39ff7d" }}>
                support@trypadelup.com
              </a>
            </p>
            <p>
              <strong className="text-white">Website:</strong>{" "}
              <a href="https://trypadelup.com" style={{ color: "#39ff7d" }}>
                trypadelup.com
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
