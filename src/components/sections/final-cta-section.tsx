import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function FinalCta() {
  return (
    <footer className="bg-[#0A0A0A]">
      {/* CTA */}
      <div className="py-24 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            Ready to improve?
          </h2>
          <div className="mt-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.18s_forwards]">
            <a
              href={APP_STORE_URL}
              className="inline-flex px-8 py-4 rounded-full font-semibold text-base bg-[#00E676] text-[#0A0A0A] hover:brightness-110 transition-all"
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-bold text-white font-heading mb-2">
                PadelUp
              </p>
              <p className="text-sm text-white/30 max-w-[200px]">
                AI-powered padel coaching to analyze, train, and level up your game.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="text-sm font-medium text-white/50 mb-3">
                Product
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-sm font-medium text-white/50 mb-3">
                Legal
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-sm font-medium text-white/50 mb-3">
                Support
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@trypadelup.com" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/padelup" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/padelup" className="text-sm text-white/30 hover:text-white/50 transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/15">
              &copy; 2026 PadelUp. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/15">
              <Link href="/privacy" className="hover:text-white/30 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/30 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
