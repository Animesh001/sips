'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function AboutSnippet() {
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
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad-lg px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10 blob-primary pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="js-reveal-hidden relative">
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/3] shadow-purple-lg">
            <AppImage
              src="/assets/images/WhatsApp_Image_2026-08-08_at_12.18.13_PM-1788254682487.jpeg"
              alt="Siliguri Institute of Pharmaceutical Sciences college building exterior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          {/* Floating accreditation card */}
          <div className="absolute -bottom-6 -right-4 lg:-right-8 glass rounded-2xl p-5 shadow-purple-md z-20 border border-white/60 max-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="CheckBadgeIcon" size={18} className="text-accent" variant="solid" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Recognized</span>
            </div>
            <p className="text-sm font-bold text-foreground leading-tight">
              Pharmacy Council of India
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">PCI Approved Institution</p>
          </div>
        </div>

        {/* Text side */}
        <div className="space-y-8">
          <div className="js-reveal-hidden space-y-4">
            <span className="section-label">About SIPS</span>
            <h2 className="font-display text-section-title font-extrabold text-foreground">
              A New Standard for{' '}
              <span className="gradient-text">Pharmacy</span>{' '}
              Education
            </h2>
          </div>

          <p className="js-reveal-hidden text-base text-muted-foreground leading-relaxed">
            Siliguri Institute of Pharmaceutical Sciences (SIPS) is a premier pharmacy institution
            in North Bengal, committed to producing competent and ethical pharmacy professionals.
            Established in the growing educational hub of Siliguri, we combine rigorous academic
            training with hands-on laboratory experience.
          </p>

          <div className="js-reveal-hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
            {
              icon: 'AcademicCapIcon',
              title: 'WBSCT Affiliated',
              desc: 'Recognized by West Bengal State Council of Technical & Vocational Education',
              color: 'text-primary',
              bg: 'bg-primary/8'
            },
            {
              icon: 'BeakerIcon',
              title: 'Modern Labs',
              desc: 'Fully equipped pharmaceutical and dispensing laboratories',
              color: 'text-accent',
              bg: 'bg-accent/8'
            },
            {
              icon: 'UsersIcon',
              title: 'Expert Faculty',
              desc: 'Experienced professors with industry and academic backgrounds',
              color: 'text-secondary',
              bg: 'bg-secondary/8'
            },
            {
              icon: 'BriefcaseIcon',
              title: 'Career Support',
              desc: 'Dedicated placement cell connecting graduates to pharmacies & hospitals',
              color: 'text-primary',
              bg: 'bg-primary/8'
            }].
            map((item) =>
            <div key={item.title} className="flex gap-4 items-start">
                <div className={`shrink-0 w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={20} className={item.color} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-0.5">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )}
          </div>

          <div className="js-reveal-hidden">
            <Link href="/about" className="btn-primary">
              Learn More About Us
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}