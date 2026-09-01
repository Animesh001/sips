'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function VisionMission() {
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
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: 'EyeIcon',
              title: 'Our Vision',
              color: 'text-primary',
              bg: 'bg-primary/8',
              border: 'border-primary/15',
              text:
                'To be the leading pharmacy institution in North Bengal, recognized for academic excellence, ethical practice, and producing graduates who contribute meaningfully to public health.',
            },
            {
              icon: 'RocketLaunchIcon',
              title: 'Our Mission',
              color: 'text-accent',
              bg: 'bg-accent/8',
              border: 'border-accent/15',
              text:
                'To provide comprehensive pharmaceutical education through modern infrastructure, experienced faculty, and industry-aligned curriculum that prepares students for diverse career pathways in the healthcare sector.',
            },
            {
              icon: 'StarIcon',
              title: 'Our Values',
              color: 'text-secondary',
              bg: 'bg-secondary/8',
              border: 'border-secondary/15',
              text:
                'Integrity, innovation, and inclusivity guide everything we do. We foster a learning environment that values discipline, compassion, and a commitment to the wellbeing of patients and communities.',
            },
          ].map((item) => (
            <div key={item.title} className={`js-reveal-hidden feature-card border ${item.border}`}>
              <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}>
                <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={22} className={item.color} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Affiliation strip */}
        <div className="mt-10 js-reveal-hidden bg-muted rounded-3xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
              <Icon name="BuildingLibraryIcon" size={26} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Affiliation &amp; Recognition
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SIPS is affiliated with the{' '}
                <strong className="text-foreground">
                  West Bengal State Council of Technical &amp; Vocational Education and Skill Development (WBSCT &amp; VE &amp; SD)
                </strong>{' '}
                and approved by the{' '}
                <strong className="text-foreground">Pharmacy Council of India (PCI)</strong>.
                The D.Pharm qualification is recognized nationally, enabling graduates to register
                as pharmacists across India.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <span className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">WBSCT</span>
              <span className="px-4 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full uppercase tracking-wider">PCI Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}