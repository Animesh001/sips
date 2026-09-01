'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

type Category = 'All' | 'Admission' | 'Achievements' | 'Placements' | 'Events' | 'Regulatory';

interface BlogPost {
  id: number;
  category: Category;
  tag: string;
  tagColor: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
  icon: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Admission',
    tag: 'Admission',
    tagColor: 'bg-violet-100 text-violet-700',
    date: 'Aug 28, 2026',
    title: 'D. Pharm Admission 2026–28: Last Date to Apply is September 30',
    excerpt: 'The admission window for the D. Pharm batch 2026–28 is now open. Eligible candidates must submit their application along with Class 10 & 12 marksheets, Aadhaar card, and passport-size photographs before the deadline. Seats are limited — apply early to secure your place.',
    readTime: '3 min read',
    featured: true,
    icon: '📋',
  },
  {
    id: 2,
    category: 'Achievements',
    tag: 'Achievement',
    tagColor: 'bg-amber-100 text-amber-700',
    date: 'Aug 20, 2026',
    title: 'SIPS Receives "Best Pharmacy Institute" Award at North Bengal Education Summit',
    excerpt: 'We are proud to announce that Siliguri Institute of Pharmaceutical Sciences has been recognized as the Best Pharmacy Institute in North Bengal at the 2026 Education Excellence Summit held in Siliguri.',
    readTime: '2 min read',
    featured: true,
    icon: '🏆',
  },
  {
    id: 3,
    category: 'Placements',
    tag: 'Placement',
    tagColor: 'bg-emerald-100 text-emerald-700',
    date: 'Aug 15, 2026',
    title: 'Campus Drive: Sun Pharma & Apollo Pharmacy to Visit SIPS in September',
    excerpt: 'Two major pharmaceutical companies — Sun Pharmaceuticals and Apollo Pharmacy — will conduct campus recruitment drives at SIPS in September 2026. Final-year D. Pharm students are encouraged to register with the placement cell by September 5.',
    readTime: '2 min read',
    icon: '💼',
  },
  {
    id: 4,
    category: 'Events',
    tag: 'Event',
    tagColor: 'bg-blue-100 text-blue-700',
    date: 'Aug 10, 2026',
    title: 'Annual Pharmacy Week 2026: Seminars, Competitions & Guest Lectures Announced',
    excerpt: 'SIPS will host its Annual Pharmacy Week from September 15–20, 2026. The week-long event will feature seminars on drug safety, inter-college quiz competitions, and guest lectures by senior pharmacists from leading hospitals.',
    readTime: '3 min read',
    icon: '🎓',
  },
  {
    id: 5,
    category: 'Regulatory',
    tag: 'Regulatory',
    tagColor: 'bg-rose-100 text-rose-700',
    date: 'Aug 5, 2026',
    title: 'PCI Inspection 2026: SIPS Clears All Compliance Parameters',
    excerpt: 'The Pharmacy Council of India (PCI) conducted its annual inspection of SIPS in July 2026. We are pleased to inform that the institute has cleared all regulatory compliance parameters, reaffirming our commitment to quality pharmaceutical education.',
    readTime: '2 min read',
    icon: '✅',
  },
  {
    id: 6,
    category: 'Admission',
    tag: 'Admission',
    tagColor: 'bg-violet-100 text-violet-700',
    date: 'Jul 28, 2026',
    title: 'Documents Checklist for D. Pharm Admission 2026 — Download Now',
    excerpt: 'To help applicants prepare, SIPS has released a complete documents checklist for D. Pharm admission 2026. Ensure you have all originals and attested photocopies ready before visiting the campus.',
    readTime: '2 min read',
    icon: '📄',
  },
  {
    id: 7,
    category: 'Placements',
    tag: 'Placement',
    tagColor: 'bg-emerald-100 text-emerald-700',
    date: 'Jul 20, 2026',
    title: '12 Students from Batch 2024 Placed at MedPlus, Cipla & Government Hospitals',
    excerpt: 'The placement cell is proud to announce that 12 students from the D. Pharm batch of 2024 have been successfully placed at MedPlus Health Services, Cipla Ltd., and various government hospitals across West Bengal and Sikkim.',
    readTime: '3 min read',
    icon: '🌟',
  },
  {
    id: 8,
    category: 'Events',
    tag: 'Event',
    tagColor: 'bg-blue-100 text-blue-700',
    date: 'Jul 12, 2026',
    title: 'World Pharmacist Day Celebrated at SIPS with Oath-Taking Ceremony',
    excerpt: 'On September 25, SIPS celebrated World Pharmacist Day with an oath-taking ceremony, poster presentations, and a special address by the Principal on the evolving role of pharmacists in public health.',
    readTime: '2 min read',
    icon: '💊',
  },
  {
    id: 9,
    category: 'Regulatory',
    tag: 'Regulatory',
    tagColor: 'bg-rose-100 text-rose-700',
    date: 'Jul 5, 2026',
    title: 'WBSCTE&VESD Affiliation Renewed for 2026–27 Academic Year',
    excerpt: 'SIPS has successfully renewed its affiliation with the West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCTE&VESD) for the academic year 2026–27, ensuring continuity of recognized D. Pharm education.',
    readTime: '2 min read',
    icon: '📜',
  },
  {
    id: 10,
    category: 'Achievements',
    tag: 'Achievement',
    tagColor: 'bg-amber-100 text-amber-700',
    date: 'Jun 25, 2026',
    title: 'SIPS Student Tops WBSCTE D. Pharm Final Examination in North Bengal Zone',
    excerpt: 'Congratulations to Priya Sharma (Batch 2024) who secured the top rank in the WBSCTE D. Pharm Final Examination for the North Bengal zone. Her dedication and hard work are an inspiration to all current students.',
    readTime: '2 min read',
    icon: '🥇',
  },
];

const categories: Category[] = ['All', 'Admission', 'Achievements', 'Placements', 'Events', 'Regulatory'];

const categoryMeta: Record<Category, { label: string; color: string; bg: string }> = {
  All: { label: 'All Posts', color: 'text-primary', bg: 'bg-primary/10' },
  Admission: { label: 'Admission', color: 'text-violet-700', bg: 'bg-violet-100' },
  Achievements: { label: 'Achievements', color: 'text-amber-700', bg: 'bg-amber-100' },
  Placements: { label: 'Placements', color: 'text-emerald-700', bg: 'bg-emerald-100' },
  Events: { label: 'Events', color: 'text-blue-700', bg: 'bg-blue-100' },
  Regulatory: { label: 'Regulatory', color: 'text-rose-700', bg: 'bg-rose-100' },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
  const featuredPosts = blogPosts.filter(p => p.featured);
  const showFeatured = activeCategory === 'All';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-gradient-to-br from-primary/5 via-background to-violet-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-violet-200/30 blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
              SIPS News & Updates
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground leading-tight mb-4">
              Stay Informed,<br />
              <span className="text-primary">Stay Ahead</span>
            </h1>
            <p className="text-foreground/60 text-base sm:text-lg leading-relaxed">
              Admission deadlines, college achievements, placement news, campus events, and regulatory updates — everything you need to know about SIPS.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[60px] z-30 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-muted text-foreground/60 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {categoryMeta[cat].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Featured Posts (only on All) */}
        {showFeatured && (
          <div className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-5">Featured</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              {/* Large featured card */}
              <div className="lg:col-span-3 bg-gradient-to-br from-primary/8 to-violet-50 border border-primary/15 rounded-2xl p-7 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{featuredPosts[0]?.icon}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${featuredPosts[0]?.tagColor}`}>
                      {featuredPosts[0]?.tag}
                    </span>
                    <span className="text-xs text-foreground/40">{featuredPosts[0]?.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                    {featuredPosts[0]?.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">
                    {featuredPosts[0]?.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs text-foreground/40">{featuredPosts[0]?.readTime}</span>
                  <span className="text-xs font-semibold text-primary group-hover:underline">Read more →</span>
                </div>
              </div>

              {/* Second featured card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-7 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{featuredPosts[1]?.icon}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${featuredPosts[1]?.tagColor}`}>
                      {featuredPosts[1]?.tag}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/40 block mb-2">{featuredPosts[1]?.date}</span>
                  <h3 className="font-display font-bold text-lg text-foreground leading-snug mb-3 group-hover:text-amber-700 transition-colors">
                    {featuredPosts[1]?.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">
                    {featuredPosts[1]?.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs text-foreground/40">{featuredPosts[1]?.readTime}</span>
                  <span className="text-xs font-semibold text-amber-700 group-hover:underline">Read more →</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-5">
            {activeCategory === 'All' ? 'All Updates' : categoryMeta[activeCategory].label}
            <span className="ml-2 text-foreground/30">({filtered.length})</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, idx) => (
              <article
                key={post.id}
                className={`bg-white border border-border rounded-2xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group ${
                  idx === 0 && activeCategory !== 'All' ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{post.icon}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${post.tagColor}`}>
                      {post.tag}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/35 whitespace-nowrap">{post.date}</span>
                </div>

                <h3 className="font-display font-bold text-base text-foreground leading-snug mb-2.5 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-foreground/55 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border/60">
                  <span className="text-xs text-foreground/35">{post.readTime}</span>
                  <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-foreground/40">
              <span className="text-5xl block mb-4">📭</span>
              <p className="text-base font-medium">No posts in this category yet.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/8 to-violet-50 border border-primary/15 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">Never Miss an Update</h3>
            <p className="text-foreground/55 text-sm">Stay informed about admissions, events, and placement drives at SIPS.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="mailto:sips.siliguricampus@gmail.com"
              className="btn-primary text-sm whitespace-nowrap"
            >
              Contact Us
            </a>
            <Link href="/admission" className="btn-secondary text-sm whitespace-nowrap">
              Apply Now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
