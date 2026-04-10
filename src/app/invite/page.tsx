import { Suspense } from "react";
import InviteContent from "./invite-content";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You've been invited to PadelUp!",
  description:
    "Your friend wants you to join them on PadelUp. Sign up and you'll both receive 100 XP!",
};

export default function InvitePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-16 min-h-screen">
        <Suspense fallback={<InviteFallback />}>
          <InviteContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function InviteFallback() {
  return (
    <div className="w-full max-w-lg mx-auto py-16 flex flex-col items-center gap-4">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: "#39ff7d", borderTopColor: "transparent" }}
      />
    </div>
  );
}
