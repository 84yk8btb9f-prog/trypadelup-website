'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const faqs = [
  {
    question: 'How much does PadelUp cost?',
    answer:
      'PadelUp offers a 3-day free trial so you can try everything risk-free. After that, choose between a monthly plan at $9.99/mo or our most popular yearly plan at $49.99/yr (just $4.17/mo — saving you 58%). Cancel anytime through the App Store.',
  },
  {
    question: 'What devices are supported?',
    answer:
      'PadelUp is currently available on iOS (iPhone and iPad). We\'re working on an Android version — join the waitlist in the app to be the first to know when it launches.',
  },
  {
    question: 'How accurate is the AI analysis?',
    answer:
      'Our AI model is trained on thousands of hours of professional padel footage and reviewed by certified coaches. It provides frame-by-frame breakdowns of your technique with specific, actionable feedback on grip, footwork, positioning, and shot execution.',
  },
  {
    question: 'Can I use PadelUp for tennis too?',
    answer:
      'While PadelUp is optimized for padel-specific technique, many core mechanics like volleys, footwork, and positioning overlap with tennis. Several of our users play both sports and find the analysis helpful for their tennis game as well.',
  },
  {
    question: 'Does it work on any court?',
    answer:
      'Yes! You can record and upload videos from any padel court — indoor or outdoor. The AI adapts to different camera angles and lighting conditions. For best results, we recommend recording from behind the baseline or from the side of the court.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-32 px-4 bg-[#0A0A0A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-2xl mx-auto">
        <MotionDiv className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-[#00E676]">
            FAQ
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Frequently asked questions
          </h2>
        </MotionDiv>

        <MotionDiv delay={0.15}>
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
            <Accordion>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="border-b border-white/[0.06] last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-base font-medium text-white hover:no-underline data-[state=open]:text-[#00E676] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
