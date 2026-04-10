import Link from 'next/link';

const APP_STORE_URL = 'https://apps.apple.com/app/padelup/id0000000000';

export default function FinalCta() {
  return (
    <footer className="pt-28 pb-10 px-6 sm:px-10 bg-[#0A0A0A] relative">
      {/* CTA */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-heading leading-none">
          Ready?
        </h2>
        <div className="mt-8">
          <a
            href={APP_STORE_URL}
            className="inline-flex px-8 py-4 rounded-full font-semibold text-base bg-[#00E676] text-[#0A0A0A] hover:brightness-110 transition-all"
          >
            Download PadelUp
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto border-t border-white/[0.06] pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
            <a href="mailto:support@trypadelup.com" className="hover:text-white/50 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/padelup"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white/60 transition-colors"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com/padelup"
              aria-label="X"
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white/60 transition-colors"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@padelup"
              aria-label="TikTok"
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white/60 transition-colors"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.55V6.79a4.85 4.85 0 01-1.06-.1z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-white/15 mt-8">
          &copy; 2026 PadelUp
        </p>
      </div>
    </footer>
  );
}
