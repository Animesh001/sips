import React from 'react';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function AdmissionHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden dot-pattern">
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-7">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping-slow inline-block" />
            Admissions Open 2026–27
          </span>

          <h1 className="font-display text-hero-xl font-extrabold text-foreground">
            Your Journey to <span className="gradient-text">Pharmacy</span> Starts Here
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Apply for the 2-year Diploma in Pharmacy (D.Pharm) programme at SIPS.
            Limited seats available. Affiliated with WBSCT &amp; VE &amp; SD and
            approved by the Pharmacy Council of India.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#inquiry-form" className="btn-primary">
              Apply Now
              <Icon name="ArrowRightIcon" size={16} />
            </a>
            <a href="#eligibility" className="btn-outline">
              Check Eligibility
            </a>
          </div>

          {/* Important dates */}
          <div className="bg-white rounded-2xl p-5 border border-border shadow-purple-sm space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Important Dates 2026</p>
            <div className="space-y-2">
              {[
              { event: 'Application Window Opens', date: 'June 1, 2026' },
              { event: 'Last Date to Apply', date: 'July 31, 2026' },
              { event: 'Merit List Declaration', date: 'August 10, 2026' },
              { event: 'Classes Commence', date: 'August 25, 2026' }]?.
              map((d) =>
              <div key={d?.event} className="flex items-center justify-between text-sm gap-4">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Icon name="CalendarIcon" size={13} className="text-accent shrink-0" />
                    {d?.event}
                  </span>
                  <span className="font-semibold text-foreground text-right shrink-0">{d?.date}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-80 lg:h-[520px] shadow-purple-lg">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_15b7c3760-1784728942105.png"
            alt="Happy pharmacy students in white lab coats holding books in a bright campus environment"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7 right-7">
            <div className="glass rounded-2xl p-5 border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Icon name="AcademicCapIcon" size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">D.Pharm Programme</p>
                  <p className="text-xs text-muted-foreground">2 Years · 60 Seats · WBSCT Affiliated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}