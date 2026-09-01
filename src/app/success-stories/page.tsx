'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const placementStats = [
  { value: '92%', label: 'Placement Rate', sub: 'Class of 2024' },
  { value: '150+', label: 'Hiring Partners', sub: 'Across India' },
  { value: '₹3.2L', label: 'Avg. Starting Package', sub: 'Per Annum' },
  { value: '500+', label: 'Alumni Network', sub: 'Nationwide' },
];

const successStories = [
  {
    name: 'Priya Sharma',
    batch: 'D. Pharm 2022',
    role: 'Pharmacist',
    company: 'Apollo Pharmacy, Siliguri',
    quote: 'The practical training at SIPS gave me the confidence to handle real pharmacy operations from day one. The faculty\'s guidance was invaluable.',
    highlight: 'Placed within 2 months of graduation',
    initials: 'PS',
    color: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Rahul Das',
    batch: 'D. Pharm 2023',
    role: 'Medical Representative',
    company: 'Sun Pharmaceuticals',
    quote: 'SIPS prepared me not just academically but also professionally. The placement cell worked tirelessly to connect us with top pharma companies.',
    highlight: 'Selected in campus drive',
    initials: 'RD',
    color: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'Anjali Roy',
    batch: 'D. Pharm 2022',
    role: 'Hospital Pharmacist',
    company: 'North Bengal Medical College',
    quote: 'The hospital internship program at SIPS was a game-changer. I gained hands-on experience that directly helped me secure my position at NBMC.',
    highlight: 'Government hospital placement',
    initials: 'AR',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    name: 'Sourav Mondal',
    batch: 'D. Pharm 2023',
    role: 'Drug Inspector (Trainee)',
    company: 'West Bengal Drug Control',
    quote: 'The regulatory affairs curriculum at SIPS opened doors I never imagined. My professors encouraged me to aim for government roles.',
    highlight: 'Government sector achievement',
    initials: 'SM',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Tanisha Gupta',
    batch: 'D. Pharm 2024',
    role: 'Retail Pharmacist',
    company: 'MedPlus Health Services',
    quote: 'From day one, SIPS focused on both theory and practice. The communication skills training helped me excel in customer-facing roles.',
    highlight: 'Placed before final exams',
    initials: 'TG',
    color: 'from-pink-500 to-rose-700',
  },
  {
    name: 'Bikash Thapa',
    batch: 'D. Pharm 2022',
    role: 'Quality Control Analyst',
    company: 'Cipla Ltd., Baddi',
    quote: 'The lab infrastructure at SIPS is exceptional. Working in those labs prepared me for the quality standards demanded by top pharma manufacturers.',
    highlight: 'Relocated for dream job',
    initials: 'BT',
    color: 'from-cyan-500 to-blue-700',
  },
];

const alumniTestimonials = [
  {
    name: 'Debasmita Sarkar',
    batch: '2021',
    role: 'Senior Pharmacist, Medica Hospital',
    feedback: 'SIPS gave me a strong foundation. Three years into my career, I still rely on the fundamentals I learned here. The faculty truly cares about student success.',
    rating: 5,
    initials: 'DS',
  },
  {
    name: 'Arjun Chettri',
    batch: '2020',
    role: 'Pharma Sales Manager, Lupin Ltd.',
    feedback: 'The exposure to pharmaceutical marketing during my course was excellent. I climbed from MR to Sales Manager in just 4 years, thanks to the strong base SIPS provided.',
    rating: 5,
    initials: 'AC',
  },
  {
    name: 'Riya Banerjee',
    batch: '2023',
    role: 'Community Pharmacist, Jalpaiguri',
    feedback: 'Being from a small town, I was nervous about my career prospects. SIPS not only educated me but also connected me with local employers. I\'m now running my own pharmacy.',
    rating: 5,
    initials: 'RB',
  },
  {
    name: 'Manish Rai',
    batch: '2022',
    role: 'Clinical Research Associate, Hyderabad',
    feedback: 'The research methodology training at SIPS was surprisingly thorough for a D. Pharm program. It gave me the edge to transition into clinical research.',
    rating: 5,
    initials: 'MR',
  },
];

const placementCompanies = [
  'Apollo Pharmacy', 'Sun Pharma', 'Cipla Ltd.', 'MedPlus', 'Lupin Ltd.',
  'Dr. Reddy\'s', 'Mankind Pharma', 'Zydus Cadila', 'NBMC Hospital', 'WB Drug Control',
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SuccessStoriesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prev = () => setActiveTestimonial((p) => (p === 0 ? alumniTestimonials.length - 1 : p - 1));
  const next = () => setActiveTestimonial((p) => (p === alumniTestimonials.length - 1 ? 0 : p + 1));

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#1a0533] via-[#2d1060] to-[#0f2a6b]">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute top-20 right-10 w-72 h-72 blob-primary opacity-20 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 blob-secondary opacity-15 rounded-full" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="section-label border-violet-400/30 text-violet-300 mb-6 inline-flex">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Student Success Stories
            </span>
            <h1 className="font-display font-bold text-white text-section-title mb-6">
              Real Students.{' '}
              <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                Real Careers.
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              From our classrooms to leading pharmacies, hospitals, and pharmaceutical companies — discover how SIPS graduates are making their mark across India.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {placementStats.map((stat) => (
                <div key={stat.label} className="py-8 px-6 text-center">
                  <div className="font-display font-bold text-3xl text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="section-pad bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="section-label border-primary/20 text-accent mb-4 inline-flex">Placement Outcomes</span>
              <h2 className="font-display font-bold text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                Where Our Graduates Work
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Our students go on to build meaningful careers across retail pharmacy, hospitals, pharmaceutical manufacturing, and government services.
              </p>
            </div>

            {/* Bento-style asymmetric grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {successStories.map((story, idx) => (
                <div
                  key={story.name}
                  className={`feature-card group relative overflow-hidden ${idx === 0 ? 'lg:col-span-2' : ''}`}
                >
                  {/* Gradient accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${story.color}`} />

                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {story.initials}
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-base">{story.name}</div>
                      <div className="text-xs text-muted-foreground">{story.batch}</div>
                    </div>
                  </div>

                  <blockquote className="text-foreground/75 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <div className="border-t border-border pt-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-sm text-foreground">{story.role}</div>
                      <div className="text-xs text-muted-foreground">{story.company}</div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${story.color} text-white whitespace-nowrap`}>
                      {story.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Testimonials Carousel */}
        <section className="section-pad bg-muted/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="section-label border-primary/20 text-accent mb-4 inline-flex">Alumni Voices</span>
              <h2 className="font-display font-bold text-foreground" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                What Our Alumni Say
              </h2>
            </div>

            <div className="relative">
              {/* Carousel Card */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 blob-primary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-56 h-56 blob-secondary opacity-5 rounded-full translate-x-1/4 translate-y-1/4" />

                <div className="relative">
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 9.015 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C21.5 11.515 23.015 10 24 10V8z" />
                  </svg>

                  <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic">
                    &ldquo;{alumniTestimonials[activeTestimonial].feedback}&rdquo;
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
                        {alumniTestimonials[activeTestimonial].initials}
                      </div>
                      <div>
                        <div className="font-display font-bold text-foreground">{alumniTestimonials[activeTestimonial].name}</div>
                        <div className="text-xs text-muted-foreground">{alumniTestimonials[activeTestimonial].role}</div>
                        <div className="text-xs text-accent font-semibold">Batch of {alumniTestimonials[activeTestimonial].batch}</div>
                      </div>
                    </div>
                    <StarRating count={alumniTestimonials[activeTestimonial].rating} />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {alumniTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-6 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50'}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Partners */}
        <section className="section-pad bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="section-label border-primary/20 text-accent mb-4 inline-flex">Our Recruiters</span>
              <h2 className="font-display font-bold text-foreground" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Companies That Trust SIPS Graduates
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {placementCompanies.map((company) => (
                <div
                  key={company}
                  className="px-5 py-3 rounded-full bg-white border border-border text-sm font-semibold text-foreground/70 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              Your Success Story Starts Here
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of SIPS graduates who are building rewarding careers in pharmacy and pharmaceutical sciences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admission" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold text-sm tracking-wide hover:bg-white/90 transition-all duration-300 shadow-lg">
                Apply for 2026 Batch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300">
                Learn About SIPS
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
