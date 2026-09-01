'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const year1 = [
  'Pharmaceutics — I',
  'Pharmaceutical Chemistry — I',
  'Pharmacognosy',
  'Human Anatomy & Physiology — I',
  'Social Pharmacy',
];

const year2 = [
  'Pharmaceutics — II',
  'Pharmaceutical Chemistry — II',
  'Pharmacology & Toxicology',
  'Pharmaceutical Jurisprudence',
  'Drug Store & Business Management',
  'Hospital & Clinical Pharmacy',
];

export default function ProgrammesSection() {
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
    <section ref={ref} id="programmes" className="section-pad-lg px-4 sm:px-6 bg-muted dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Programmes Offered</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Diploma in <span className="gradient-text">Pharmacy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Our flagship 2-year D.Pharm programme is designed as per the PCI syllabus with
            emphasis on both theoretical knowledge and practical skills.
          </p>
        </div>

        {/* Programme overview */}
        <div className="grid md:grid-cols-4 gap-5 mb-10 js-reveal-hidden">
          {[
            { label: 'Duration', value: '2 Years', icon: 'ClockIcon' },
            { label: 'Total Semesters', value: '4', icon: 'CalendarDaysIcon' },
            { label: 'Annual Intake', value: '60 Students', icon: 'UsersIcon' },
            { label: 'Affiliation', value: 'WBSCT', icon: 'AcademicCapIcon' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-6 border border-border text-center shadow-purple-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
              </div>
              <p className="font-display font-bold text-lg text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Year 1 */}
          <div className="js-reveal-hidden bg-white rounded-3xl p-8 border border-border shadow-purple-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y1</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">First Year</h3>
                <p className="text-xs text-muted-foreground">Foundation Subjects</p>
              </div>
            </div>
            <div className="space-y-3">
              {year1.map((sub) => (
                <div key={sub} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-muted border border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Year 2 */}
          <div className="js-reveal-hidden bg-white rounded-3xl p-8 border border-border shadow-purple-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y2</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Second Year</h3>
                <p className="text-xs text-muted-foreground">Advanced &amp; Applied Subjects</p>
              </div>
            </div>
            <div className="space-y-3">
              {year2.map((sub) => (
                <div key={sub} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-muted border border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career paths */}
        <div className="mt-8 js-reveal-hidden bg-primary rounded-3xl p-8 text-primary-foreground">
          <h3 className="font-display text-xl font-bold mb-5 flex items-center gap-2">
            <Icon name="BriefcaseIcon" size={20} className="text-white/80" />
            Career Pathways After D.Pharm
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Registered Pharmacist',
              'Hospital Pharmacy',
              'Retail Pharmacy',
              'Drug Inspector',
              'Pharmaceutical Industry',
              'Community Health',
              'Clinical Research',
              'Further Studies (B.Pharm)',
            ].map((career) => (
              <div key={career} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
                <Icon name="CheckCircleIcon" size={14} className="text-white/70 shrink-0" />
                <span className="text-sm font-medium text-white/90">{career}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center js-reveal-hidden">
          <Link href="/admission" className="btn-primary">
            Apply for D.Pharm 2026
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}