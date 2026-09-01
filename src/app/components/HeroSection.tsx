'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.hero-reveal');
    if (!els) return;
    els.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(32px)';
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 120 + i * 120);
    });

    const imgEl = heroRef.current?.querySelector('.hero-img-reveal') as HTMLElement;
    if (imgEl) {
      imgEl.style.opacity = '0';
      imgEl.style.transform = 'translateX(40px)';
      setTimeout(() => {
        imgEl.style.transition = 'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)';
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'translateX(0)';
      }, 300);
    }
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden dot-pattern">
      
      {/* Background blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 opacity-20 blob-primary pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 opacity-15 blob-secondary pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">
          <div className="hero-reveal">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping-slow inline-block" />
              Admissions Open · 2026–27
            </span>
          </div>

          <h1 className="hero-reveal font-display text-hero-xl font-extrabold text-foreground">
            Shaping Tomorrow&apos;s{' '}
            <span className="gradient-text">Pharmacy</span>{' '}
            Professionals
          </h1>

          <p className="hero-reveal text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            Siliguri Institute of Pharmaceutical Sciences — offering a{' '}
            <strong className="text-foreground font-semibold">2-year Diploma in Pharmacy (D.Pharm)</strong>{' '}
            affiliated with WBSCT &amp; VE &amp; SD. Located in the heart of North Bengal.
          </p>

          {/* Affiliation badges */}
          <div className="hero-reveal flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="glass flex items-center gap-2 px-4 py-2.5 rounded-full border border-border shadow-purple-sm">
              <Icon name="AcademicCapIcon" size={16} className="text-primary" />
              <span className="text-xs font-bold text-foreground">WBSCT Affiliated</span>
            </div>
            <div className="glass flex items-center gap-2 px-4 py-2.5 rounded-full border border-border shadow-purple-sm">
              <Icon name="ShieldCheckIcon" size={16} className="text-secondary" />
              <span className="text-xs font-bold text-foreground">PCI Approved</span>
            </div>
          </div>

          <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/admission" className="btn-primary">
              Apply Now for 2026
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
            <Link href="/about" className="btn-outline">
              Explore College
            </Link>
          </div>
        </div>

        {/* Right: Circular image with spinning border */}
        <div className="hero-img-reveal relative flex items-center justify-center order-1 lg:order-2">
          {/* Spinning dashed ring */}
          <div
            className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-primary/30 spin-slow"
            aria-hidden="true" />
          
          {/* Outer glow ring */}
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-accent/20" aria-hidden="true" />

          {/* Main circular image */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-purple-lg z-10">
            <AppImage
              src="/assets/images/WhatsApp_Image_2026-09-01_at_6.49.47_PM-1788268831120.jpeg"
              alt="Pharmacy student in white lab coat standing in the college laboratory"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 256px, 320px" />
            
          </div>

          {/* Floating glass card: Affiliation */}
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 glass rounded-2xl px-5 py-4 shadow-purple-md z-20 float-anim border border-white/60">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">Affiliated</p>
            <p className="text-sm font-bold text-foreground leading-tight max-w-[160px]">
              WBSCT &amp; VE &amp; SD
            </p>
          </div>

          {/* Floating glass card: D.Pharm */}
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 glass rounded-2xl px-5 py-4 shadow-purple-md z-20 border border-white/60">
            <p className="font-display text-2xl font-extrabold text-primary">D.Pharm</p>
            <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">2-Year Diploma</p>
          </div>

          {/* SIPS Logo badge */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 glass rounded-2xl p-3 shadow-purple-md z-20 border border-white/60">
            <AppImage
              src="/assets/images/WhatsApp_Image_2026-08-08_at_12.19.47_PM-1788253111239.jpeg"
              alt="SIPS college logo circular badge with caduceus symbol in purple and blue"
              width={56}
              height={56}
              className="rounded-xl object-contain" />
            
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </header>);

}