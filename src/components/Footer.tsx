import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left: Logo + tagline + contact */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <AppLogo
                src="/assets/images/WhatsApp_Image_2026-08-08_at_12.19.47_PM-1788253111239.jpeg"
                size={44}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg text-primary">SIPS</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Siliguri Institute of Pharmaceutical Sciences
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shaping the next generation of pharmacy professionals in North Bengal.
              WBSCT &amp; VE &amp; SD affiliated.
            </p>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>Fulbari, Jotiyakali, Near Sannyasikata High School</p>
              <p>Akalugach, Rajganj, Jalpaiguri, Pin-735134</p>
              <div className="pt-1 space-y-1">
                <a href="tel:6296505232" className="block hover:text-primary transition-colors font-medium">
                  62965-05232
                </a>
                <a href="tel:9609908007" className="block hover:text-primary transition-colors font-medium">
                  9609908007
                </a>
                <a href="mailto:sips.siliguricampus@gmail.com" className="block hover:text-primary transition-colors font-medium break-all">
                  sips.siliguricampus@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Explore</p>
              <div className="space-y-2">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Programmes', href: '/about#programmes' },
                  { label: 'Infrastructure', href: '/about#infrastructure' },
                  { label: 'Faculty', href: '/about#faculty' },
                ]?.map((l) => (
                  <Link key={l?.href} href={l?.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors font-medium min-h-[44px] flex items-center">
                    {l?.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Admissions</p>
              <div className="space-y-2">
                {[
                  { label: 'How to Apply', href: '/admission' },
                  { label: 'Eligibility', href: '/admission#eligibility' },
                  { label: 'Fee Structure', href: '/admission#fees' },
                  { label: 'Additional Info', href: '/about#additional' },
                ]?.map((l) => (
                  <Link key={l?.href} href={l?.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors font-medium min-h-[44px] flex items-center">
                    {l?.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Siliguri Institute of Pharmaceutical Sciences. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground font-medium">
            <Link href="/about#additional" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/about#additional" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}