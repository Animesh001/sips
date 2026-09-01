'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'What is the duration of the D.Pharm course at SIPS?',
    a: 'The Diploma in Pharmacy (D.Pharm) at SIPS is a 2-year full-time programme divided into 4 semesters, as per the Pharmacy Council of India syllabus.',
  },
  {
    q: 'Is SIPS recognized by the Pharmacy Council of India?',
    a: 'Yes, SIPS is an approved institution under the Pharmacy Council of India (PCI) and affiliated with the West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCT & VE & SD).',
  },
  {
    q: 'What is the eligibility for admission to D.Pharm?',
    a: 'Candidates must have passed 10+2 (Class XII) with Physics, Chemistry, and Biology/Mathematics from a recognized board. Minimum 50% aggregate marks are required.',
  },
  {
    q: 'What career opportunities are available after D.Pharm?',
    a: 'Graduates can work as Registered Pharmacists in retail pharmacies, hospitals, pharmaceutical companies, drug regulatory bodies, and clinical research organizations. They can also pursue higher studies like B.Pharm.',
  },
  {
    q: 'Does SIPS provide hostel or accommodation facilities?',
    a: 'SIPS assists students in finding suitable accommodation near the campus in Siliguri. Please contact the administrative office for details on available options.',
  },
  {
    q: 'Is there any scholarship or financial assistance available?',
    a: 'Students may be eligible for West Bengal government scholarships and central government schemes like NSP (National Scholarship Portal). SIPS provides guidance on scholarship applications.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted transition-colors min-h-[56px]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{question}</span>
        <Icon
          name="ChevronDownIcon"
          size={18}
          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function AdditionalInfo() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.js-reveal-hidden');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('js-reveal-visible');
            e.target.classList.remove('js-reveal-hidden');
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="additional" className="section-pad-lg px-4 sm:px-6 bg-muted dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Additional Information</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="js-reveal-hidden space-y-4">
            {faqs.slice(0, 3).map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div className="js-reveal-hidden space-y-4">
            {faqs.slice(3).map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}