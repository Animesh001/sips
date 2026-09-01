'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programmes', href: '/about#programmes' },
  { label: 'Admission', href: '/admission' },
  { label: 'Infrastructure', href: '/about#infrastructure' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Blog', href: '/blog' },
  { label: 'Faculty', href: '/about#faculty' },
  { label: 'Additional Info', href: '/about#additional' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  const isScrolled = mounted && scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-border shadow-purple-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={handleLinkClick}>
            <AppLogo
              src="/assets/images/WhatsApp_Image_2026-08-08_at_12.19.47_PM-1788253111239.jpeg"
              size={40}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-xs tracking-tight text-primary leading-tight">SILIGURI INSTITUTE OF</span>
              <span className="font-display font-bold text-xs tracking-tight text-primary leading-tight">PHARMACEUTICAL SCIENCES</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks?.slice(0, 6)?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/about#additional" className="text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors px-3 py-2">
              Additional Info
            </Link>
            <Link href="/admission" className="btn-primary text-xs">
              Apply Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-primary/5 transition-colors ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-purple-lg flex flex-col transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div className="flex items-center gap-2">
              <AppLogo
                src="/assets/images/WhatsApp_Image_2026-08-08_at_12.19.47_PM-1788253111239.jpeg"
                size={36}
              />
              <span className="font-display font-bold text-primary text-xs leading-tight">SILIGURI INSTITUTE OF&lt;br/&gt;PHARMACEUTICAL SCIENCES</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={handleLinkClick}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/5 transition-colors min-h-[44px]"
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="p-5 border-t border-border">
            <Link
              href="/admission"
              onClick={handleLinkClick}
              className="btn-primary w-full justify-center text-sm"
            >
              Apply Now for 2026
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}