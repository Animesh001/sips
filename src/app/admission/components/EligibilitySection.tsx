'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function EligibilitySection() {
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
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="eligibility" className="section-pad px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 js-reveal-hidden space-y-4">
          <span className="section-label">Eligibility</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Who Can <span className="gradient-text">Apply?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="js-reveal-hidden space-y-5">
            <h3 className="font-display font-bold text-xl text-foreground">Academic Requirements</h3>
            {[
              {
                title: '10+2 (Class XII) Passed',
                desc: 'From a recognized board (WBBSE, CBSE, ICSE or equivalent)',
                required: true,
              },
              {
                title: 'Science Stream Mandatory',
                desc: 'Physics, Chemistry with Biology or Mathematics as compulsory subjects',
                required: true,
              },
              {
                title: 'Minimum 50% Aggregate',
                desc: 'In PCB/PCM subjects. Relaxation for SC/ST/OBC as per government norms',
                required: true,
              },
              {
                title: 'Age Requirement',
                desc: 'Minimum 17 years as on 31st December of the year of admission',
                required: true,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start bg-muted rounded-2xl p-5 border border-border">
                <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${item.required ? 'bg-primary' : 'bg-muted-foreground/20'}`}>
                  <Icon name={item.required ? 'CheckIcon' : 'InformationCircleIcon'} size={14} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="js-reveal-hidden space-y-5">
            <h3 className="font-display font-bold text-xl text-foreground">Additional Notes</h3>
            <div className="bg-muted rounded-3xl p-7 border border-border space-y-4">
              {[
                {
                  icon: 'DocumentCheckIcon',
                  text: 'Students who have appeared in 10+2 exams and are awaiting results may also apply provisionally.',
                },
                {
                  icon: 'GlobeAltIcon',
                  text: 'NRI and foreign nationals with equivalent qualifications are eligible subject to PCI guidelines.',
                },
                {
                  icon: 'ScaleIcon',
                  text: 'Reservation of seats follows West Bengal government norms for SC, ST, OBC and EWS categories.',
                },
                {
                  icon: 'ShieldCheckIcon',
                  text: 'All admissions are subject to verification of original documents and medical fitness.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary rounded-3xl p-6 text-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="ExclamationCircleIcon" size={18} className="text-white/80" />
                <p className="font-bold text-sm">Still unsure if you qualify?</p>
              </div>
              <p className="text-sm text-white/80 mb-4">
                Contact our admissions office directly. We are happy to guide you through
                the eligibility requirements.
              </p>
              <a
                href="tel:+917001000000"
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-muted transition-colors"
              >
                <Icon name="PhoneIcon" size={14} />
                Call Admissions Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}