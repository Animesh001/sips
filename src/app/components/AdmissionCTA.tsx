'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function AdmissionCTA() {
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
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 blob-primary opacity-5 scale-150" aria-hidden="true" />

      <div className="max-w-5xl mx-auto">
        <div className="js-reveal-hidden relative bg-primary rounded-4xl overflow-hidden shadow-purple-lg">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" aria-hidden="true" />

          <div className="relative z-10 p-8 sm:p-14 grid sm:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping-slow" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  Admissions Open 2026–27
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Begin Your Pharmacy Career Today
              </h2>

              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Seats are limited. Submit your application for the D.Pharm programme
                and take the first step toward a rewarding career in pharmaceutical sciences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-bold text-sm tracking-wide hover:bg-muted transition-all"
                >
                  Apply Now
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right side: Key facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'CalendarIcon', label: 'Session Start', value: 'August 2026' },
                { icon: 'DocumentCheckIcon', label: 'Eligibility', value: '10+2 Science' },
                { icon: 'CurrencyRupeeIcon', label: 'Annual Fee', value: 'Affordable' },
                { icon: 'MapPinIcon', label: 'Location', value: 'Siliguri, WB' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-2xl p-5 border border-white/15">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-white/70 mb-2" />
                  <p className="text-white font-bold text-base">{item.value}</p>
                  <p className="text-white/60 text-xs font-medium mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}