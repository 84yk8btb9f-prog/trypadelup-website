"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Apple, Bell } from "lucide-react";

interface LaunchModalContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const LaunchModalContext = createContext<LaunchModalContextValue | null>(null);

export function useLaunchModal() {
  const ctx = useContext(LaunchModalContext);
  if (!ctx) {
    throw new Error("useLaunchModal must be used within LaunchModalProvider");
  }
  return ctx;
}

export function LaunchModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <LaunchModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <LaunchModal isOpen={isOpen} onClose={close} />
    </LaunchModalContext.Provider>
  );
}

function LaunchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="launch-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.72)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-3xl p-8 flex flex-col gap-6"
            style={{
              backgroundColor: "rgba(15, 18, 22, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(57, 255, 125, 0.08) inset",
            }}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{
                color: "rgba(240, 244, 248, 0.5)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
              }}
            >
              <X size={16} strokeWidth={2} />
            </button>

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: "rgba(57, 255, 125, 0.08)",
                border: "1px solid rgba(57, 255, 125, 0.18)",
              }}
            >
              <Apple size={26} strokeWidth={1.75} color="#39ff7d" />
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h2
                id="launch-modal-title"
                className="text-2xl font-bold leading-tight text-white"
              >
                Launching soon on iOS
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(240, 244, 248, 0.62)" }}
              >
                We&apos;re putting the finishing touches on PadelUp. The App Store
                listing goes live in the next few weeks — your invite code (and free
                week) will be ready to redeem the moment it does.
              </p>
            </div>

            {/* Notify me */}
            <a
              href="mailto:hello@trypadelup.com?subject=Notify%20me%20when%20PadelUp%20launches&body=Hi%20—%20please%20let%20me%20know%20when%20PadelUp%20is%20live%20on%20the%20App%20Store."
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all"
              style={{
                backgroundColor: "#39ff7d",
                color: "#0b0f14",
                boxShadow: "0 0 32px rgba(57, 255, 125, 0.25)",
              }}
            >
              <Bell size={16} strokeWidth={2} />
              Notify me when it launches
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-xs transition-colors"
              style={{ color: "rgba(240, 244, 248, 0.4)" }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
