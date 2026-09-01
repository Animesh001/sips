'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '2026', label: 'Est. Year', suffix: '' },
  { value: '60', label: 'Student Intake', suffix: '+' },
  { value: '10', label: 'Expert Faculty', suffix: '+' },
  { value: '100', label: 'Placement Support', suffix: '%' },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-0 border-y border-border bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {stats?.map((stat, i) => (
            <div
              key={stat?.label}
              className="py-10 px-6 text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
              }}
            >
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
                {stat?.value}
                <span className="text-accent">{stat?.suffix}</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}