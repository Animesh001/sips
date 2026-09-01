'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const subjects = [
'Pharmaceutics',
'Pharmaceutical Chemistry',
'Pharmacognosy',
'Human Anatomy & Physiology',
'Biochemistry & Clinical Pathology',
'Hospital & Clinical Pharmacy',
'Pharmacology & Toxicology',
'Drug Store Management'];


export default function ProgrammeHighlight() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.js-reveal-hidden');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('js-reveal-visible');
            entry.target.classList.remove('js-reveal-hidden');
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad-lg px-4 sm:px-6 bg-muted dot-pattern" id="programme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Our Programme</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Diploma in <span className="gradient-text">Pharmacy</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive 2-year programme designed to build pharmaceutical knowledge,
            laboratory skills, and professional ethics in aspiring pharmacists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Programme card */}
          <div className="js-reveal-hidden bg-white rounded-3xl overflow-hidden shadow-purple-md border border-border flex flex-col">
            <div className="relative h-52 shrink-0">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1a42f56ef-1776317046962.png"
                alt="Pharmacy students in white lab coats conducting experiments in a well-lit laboratory with equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  D.Pharm
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  {[
                  { icon: 'ClockIcon', label: '2 Years', sub: 'Duration' },
                  { icon: 'DocumentTextIcon', label: '4 Semesters', sub: 'Structure' },
                  { icon: 'UserGroupIcon', label: '60 Seats', sub: 'Intake' }].
                  map((item) =>
                  <div key={item.label} className="flex items-center gap-2.5 bg-muted rounded-xl px-4 py-3">
                      <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-bold text-foreground">{item.label}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.sub}</p>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  The D.Pharm programme provides foundational and applied knowledge in pharmaceutical
                  sciences, preparing students for roles in retail pharmacies, hospitals, drug
                  manufacturing, and regulatory affairs.
                </p>
              </div>

              <Link href="/about#programmes" className="btn-primary self-start">
                View Full Curriculum
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Subject list */}
          <div className="js-reveal-hidden space-y-4">
            <div className="bg-white rounded-3xl p-8 border border-border shadow-purple-sm">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="BookOpenIcon" size={20} className="text-primary" />
                Key Subjects
              </h3>
              <div className="space-y-3">
                {subjects.map((subject, i) =>
                <div
                  key={subject}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
                  style={{
                    transitionDelay: `${i * 50}ms`
                  }}>
                  
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{subject}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                  <Icon name="BriefcaseIcon" size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-2">Career Opportunities</h4>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    Graduates can work as Registered Pharmacists in retail, hospital, community pharmacies,
                    pharmaceutical manufacturing, drug inspection, and clinical research roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}