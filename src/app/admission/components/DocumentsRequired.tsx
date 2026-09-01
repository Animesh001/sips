'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const documents = [
  { doc: 'Class X (Madhyamik) Marksheet & Certificate', copies: '2 attested copies' },
  { doc: 'Class XII (Higher Secondary) Marksheet & Certificate', copies: '2 attested copies' },
  { doc: 'School Leaving / Transfer Certificate', copies: '1 original' },
  { doc: 'Caste Certificate (if applicable)', copies: '1 attested copy' },
  { doc: 'Domicile / Residence Certificate', copies: '1 attested copy' },
  { doc: 'Aadhaar Card', copies: '1 self-attested copy' },
  { doc: 'Passport Size Photographs (recent)', copies: '6 copies' },
  { doc: 'Medical Fitness Certificate', copies: '1 original' },
  { doc: 'Income Certificate (for scholarship)', copies: '1 copy if applicable' },
  { doc: 'Migration Certificate (if from outside WB)', copies: '1 original' },
];

export default function DocumentsRequired() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref?.current?.querySelectorAll('.js-reveal-hidden');
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
      { threshold: 0.15 }
    );
    items?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad px-4 sm:px-6 bg-muted dot-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 js-reveal-hidden space-y-4">
          <span className="section-label">Documents</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Documents <span className="gradient-text">Required</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Please ensure all documents are ready before submitting your application.
          </p>
        </div>

        <div className="js-reveal-hidden bg-white rounded-3xl p-8 border border-border shadow-purple-sm">
          <div className="grid sm:grid-cols-2 gap-3">
            {documents?.map((item, i) => (
              <div
                key={item?.doc}
                className="flex items-start gap-3 py-3 px-4 rounded-xl bg-muted border border-border"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="DocumentTextIcon" size={12} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{item?.doc}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item?.copies}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-accent/8 rounded-2xl p-5 border border-accent/15 flex gap-3 items-start">
            <Icon name="ExclamationTriangleIcon" size={18} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Important:</strong> All documents must be submitted at thetime of admission. Originals will be verified and returned. Keep attested photocopies ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}