import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PadelUp",
  description: "PadelUp terms of service — the rules governing your use of the app.",
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

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
            <p style={{ color: "rgba(240, 244, 248, 0.45)" }}>
              Last updated: April 2026
            </p>
          </div>

          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using the PadelUp application (&ldquo;the App&rdquo;) or visiting trypadelup.com (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use PadelUp.
            </p>
            <p>
              PadelUp is operated by an individual developer. These Terms constitute a legally binding agreement between you and PadelUp. We reserve the right to update these Terms at any time. Continued use of the App after changes are posted constitutes acceptance.
            </p>
          </Section>

          <Section title="2. Account Creation and Responsibilities">
            <p>
              To use PadelUp, you must create an account using Sign In with Apple. You must be at least 13 years old (or 16 in certain jurisdictions) to create an account.
            </p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Providing accurate information about yourself, including height, weight, and fitness goals</li>
              <li>Notifying us immediately if you suspect unauthorized access to your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </Section>

          <Section title="3. Subscription and Billing">
            <p>
              PadelUp offers paid subscription plans (&ldquo;Premium&rdquo;) on a monthly ($9.99/month) or annual ($49.99/year) basis. All subscriptions include a 3-day free trial for new users.
            </p>
            <p>
              All purchases are processed through the Apple App Store. By subscribing, you agree to Apple&apos;s payment terms. Billing is handled entirely by Apple — PadelUp does not store your payment information.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the current period ends</li>
              <li>You can manage and cancel your subscription through your Apple ID settings</li>
              <li>Refunds are governed by Apple&apos;s refund policy — please contact Apple Support for refund requests</li>
              <li>Free trial access is automatically converted to a paid subscription unless cancelled before the trial period ends</li>
            </ul>
          </Section>

          <Section title="4. Fair Usage Policy">
            <p>
              To ensure quality service for all users, PadelUp enforces daily usage limits on AI-powered features. These limits are subject to change and apply to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>AI video analysis submissions per day</li>
              <li>Meal photo analyses per day</li>
              <li>AI Coach chat messages per day</li>
              <li>Training plan generation requests</li>
            </ul>
            <p>
              Current limits are displayed within the App. We reserve the right to adjust these limits to maintain service quality. Attempting to circumvent usage limits is prohibited.
            </p>
          </Section>

          <Section title="5. User-Generated Content">
            <p>
              PadelUp allows you to submit content including court locations, training session logs, and messages in the AI Coach chat (&ldquo;User Content&rdquo;). By submitting User Content, you grant PadelUp a non-exclusive, worldwide, royalty-free license to use, store, and display that content for the purpose of providing the service.
            </p>
            <p>You represent and warrant that your User Content:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Does not violate any applicable laws or regulations</li>
              <li>Does not infringe any third-party intellectual property rights</li>
              <li>Is accurate to the best of your knowledge (e.g., court location data)</li>
              <li>Does not contain spam, malware, or harmful content</li>
            </ul>
          </Section>

          <Section title="6. Prohibited Uses">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse engineer, decompile, or extract source code from the App</li>
              <li>Use automated scripts, bots, or scrapers to access the App</li>
              <li>Abuse, harass, or threaten other users</li>
              <li>Submit false or misleading content</li>
              <li>Attempt to circumvent subscription paywalls or usage limits</li>
              <li>Sell, resell, or sublicense access to PadelUp features</li>
              <li>Use the App in any way that could damage, disable, or overburden our infrastructure</li>
            </ul>
          </Section>

          <Section title="7. AI Analysis Disclaimer">
            <p>
              <strong className="text-white">Important:</strong> PadelUp&apos;s AI-powered features are provided for informational and entertainment purposes only.
            </p>
            <p>
              <strong className="text-white">Video analysis:</strong> AI technique analysis is not a substitute for professional coaching. The feedback provided is generated by AI and may not be accurate in all cases. Always consult a qualified padel coach for professional instruction.
            </p>
            <p>
              <strong className="text-white">Nutrition tracking:</strong> Macro and calorie estimates are approximations generated by AI and are not guaranteed to be accurate. This feature is not a substitute for advice from a registered dietitian or healthcare provider. Do not rely on PadelUp for medical or dietary decisions.
            </p>
            <p>
              <strong className="text-white">Training plans:</strong> AI-generated training plans are general fitness suggestions. Always consult your doctor before starting a new exercise program, especially if you have any pre-existing health conditions.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              PadelUp and all its content, features, and functionality (including but not limited to design, text, graphics, logos, and code) are owned by PadelUp and protected by applicable intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to use the App for your personal, non-commercial purposes. This license does not include the right to copy, modify, distribute, sell, or lease any part of the App.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, PadelUp and its operator shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App.
            </p>
            <p>
              PadelUp&apos;s total liability for any claims arising from these Terms or your use of the App shall not exceed the amount you paid for the App in the 12 months preceding the claim.
            </p>
            <p>
              PadelUp is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including fitness for a particular purpose or non-infringement.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              You may stop using PadelUp and delete your account at any time through the App settings. Deleting your account cancels your subscription for future billing cycles (refunds are subject to Apple&apos;s policy).
            </p>
            <p>
              We may suspend or terminate your account immediately if you violate these Terms, or if we discontinue the service with reasonable notice. Upon termination, your right to use the App ceases immediately.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms shall be resolved through good-faith negotiation. If we cannot resolve a dispute, it will be submitted to binding arbitration in accordance with applicable rules.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions about these Terms of Service, please contact us:
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
