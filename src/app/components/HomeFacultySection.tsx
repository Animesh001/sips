'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const faculty = [
  {
    name: 'Sourave Saha',
    qualification: 'M.Pharm',
    img: '/assets/images/Sourav_Saha-1791042859424.jpeg',
    alt: 'Sourave Saha, M.Pharm faculty member at SIPS Siliguri'
  },
  {
    name: 'Sneha Roy',
    qualification: 'M.Pharm',
    img: '/assets/images/Sneha_Roy-1791042859545.jpeg',
    alt: 'Sneha Roy, M.Pharm faculty member at SIPS Siliguri'
  },
  {
    name: 'Debdatta Sarkar',
    qualification: 'M.Pharm',
    img: '/assets/images/Debdutta_Sarkar-1791187023339.jpeg',
    alt: 'Debdatta Sarkar, M.Pharm faculty member at SIPS Siliguri'
  },
  {
    name: 'Sourabh Palliwal',
    qualification: 'M.Pharm',
    img: '/assets/images/faculty_sourabh_palliwal.png',
    alt: 'Sourabh Palliwal, M.Pharm faculty member at SIPS Siliguri'
  },
  {
    name: 'Bhakti Pradhan Mali',
    qualification: 'M.Pharm',
    img: '/assets/images/faculty_bhakti_pradhan_mali.png',
    alt: 'Bhakti Pradhan Mali, M.Pharm faculty member at SIPS Siliguri'
  }
];

export default function HomeFacultySection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref?.current?.querySelectorAll('.js-reveal-hidden');
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
      { threshold: 0.1 }
    );
    items?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} id="home-faculty" className="section-pad-lg px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Meet Our Faculty</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Our <span className="gradient-text">Expert Faculty</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Dedicated educators with strong academic backgrounds committed to shaping the next generation of pharmacy professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {faculty?.map((member, i) => (
            <div
              key={member?.name}
              className="js-reveal-hidden flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4 group-hover:border-primary/60 transition-all duration-300">
                <AppImage
                  src={member?.img}
                  alt={member?.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 144px, 160px"
                />
              </div>
              <h3 className="font-display font-bold text-base text-foreground leading-tight">
                {member?.name}
              </h3>
              <p className="text-accent text-sm font-semibold mt-1">{member?.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
