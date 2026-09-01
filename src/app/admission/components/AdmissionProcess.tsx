'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Check Eligibility',
    desc: 'Verify that you meet the academic requirements: 10+2 with PCB/PCM and minimum 50% marks.',
    icon: 'ClipboardDocumentCheckIcon',
    color: 'bg-primary',
  },
  {
    number: '02',
    title: 'Obtain Application Form',
    desc: 'Collect the application form from the college office or download it from our website. A nominal form fee applies.',
    icon: 'DocumentArrowDownIcon',
    color: 'bg-accent',
  },
  {
    number: '03',
    title: 'Submit Application',
    desc: 'Fill the form carefully and submit it along with all required documents before the last date.',
    icon: 'PaperAirplaneIcon',
    color: 'bg-secondary',
  },
  {
    number: '04',
    title: 'Merit List Declaration',
    desc: 'Admissions are merit-based. Selected candidates will be notified via the merit list published on the notice board.',
    icon: 'ListBulletIcon',
    color: 'bg-primary',
  },
  {
    number: '05',
    title: 'Fee Payment & Enrollment',
    desc: 'Shortlisted candidates must pay the prescribed fees and complete enrollment formalities within the stipulated time.',
    icon: 'CreditCardIcon',
    color: 'bg-accent',
  },
  {
    number: '06',
    title: 'Classes Begin',
    desc: 'Attend the orientation programme and commence your D.Pharm journey at SIPS!',
    icon: 'AcademicCapIcon',
    color: 'bg-secondary',
  },
];

export default function AdmissionProcess() {
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
    <section ref={ref} className="section-pad-lg px-4 sm:px-6 bg-muted dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Process</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            How to <span className="gradient-text">Apply</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Follow these simple steps to secure your seat in the D.Pharm programme at SIPS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="js-reveal-hidden bg-white rounded-3xl p-7 border border-border shadow-purple-sm card-hover"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center`}>
                  <Icon name={step.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-white" />
                </div>
                <span className="font-display font-extrabold text-4xl text-foreground/8">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}