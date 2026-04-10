"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does PadelUp cost?",
    answer:
      "PadelUp offers a 3-day free trial so you can try everything risk-free. After that, choose between a monthly plan at $9.99/mo or our most popular yearly plan at $49.99/yr (just $4.17/mo — saving you 58%). Cancel anytime through the App Store.",
  },
  {
    question: "What devices are supported?",
    answer:
      "PadelUp is currently available on iOS (iPhone and iPad). We're working on an Android version — join the waitlist in the app to be the first to know when it launches.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI model is trained on thousands of hours of professional padel footage and reviewed by certified coaches. It provides frame-by-frame breakdowns of your technique with specific, actionable feedback on grip, footwork, positioning, and shot execution.",
  },
  {
    question: "Can I use PadelUp for tennis too?",
    answer:
      "While PadelUp is optimized for padel-specific technique, many core mechanics like volleys, footwork, and positioning overlap with tennis. Several of our users play both sports and find the analysis helpful for their tennis game as well.",
  },
  {
    question: "Does it work on any court?",
    answer:
      "Yes! You can record and upload videos from any padel court — indoor or outdoor. The AI adapts to different camera angles and lighting conditions. For best results, we recommend recording from behind the baseline or from the side of the court.",
  },
];

export default function FaqSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, contentRef.current];
    const observers: IntersectionObserver[] = [];
    els.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="faq"
      className="py-24 px-4"
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#00f5d4" }}
          >
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently asked questions
          </h2>
        </div>

        <div ref={contentRef} className="scroll-reveal">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="border-b border-white/8"
              >
                <AccordionTrigger className="py-5 text-base font-medium text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p style={{ color: "rgba(240, 244, 248, 0.6)" }}>
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
