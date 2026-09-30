'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const faculty = [
{
  name: 'Dr. Subhasish Mukherjee',
  title: 'Principal',
  qualification: 'M.Pharm, Ph.D (Pharmaceutical Sciences)',
  specialization: 'Pharmaceutics & Drug Delivery',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1de3a1945-1763294319195.png",
  alt: 'Professional male academic in formal attire against neutral background with warm lighting'
},
{
  name: 'Mr. Arjun Sharma',
  title: 'Vice Principal',
  qualification: 'M.Pharm (Pharmacology)',
  specialization: 'Pharmacology & Toxicology',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1883b5ac4-1763299482546.png",
  alt: 'Professional male educator in semi-formal attire with confident expression against light background'
},
{
  name: 'Ms. Priya Chakraborty',
  title: 'Senior Lecturer',
  qualification: 'M.Pharm (Pharmaceutical Chemistry)',
  specialization: 'Organic & Medicinal Chemistry',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_18505ac4c-1772799887215.png",
  alt: 'Professional female academic in formal attire with pleasant expression and natural lighting'
},
{
  name: 'Mr. Ranjit Rai',
  title: 'Lecturer',
  qualification: 'M.Pharm (Pharmacognosy)',
  specialization: 'Pharmacognosy & Phytochemistry',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_14cf3877f-1763299977365.png",
  alt: 'Professional male faculty member in formal shirt against neutral office background'
},
{
  name: 'Ms. Debasmita Roy',
  title: 'Lecturer',
  qualification: 'M.Pharm (Pharmaceutics)',
  specialization: 'Hospital & Clinical Pharmacy',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_12946c7bf-1763300744525.png",
  alt: 'Professional female lecturer in semi-formal attire with warm smile against light background'
},
{
  name: 'Mr. Sourav Dey',
  title: 'Lab Instructor',
  qualification: 'B.Pharm, D.Pharm',
  specialization: 'Pharmaceutical Lab Techniques',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d979e73c-1768920485884.png",
  alt: 'Professional male lab instructor in white coat against clean laboratory background'
},
{
  name: 'Sourave Saha',
  title: 'Faculty',
  qualification: 'M.Pharm',
  specialization: 'Pharmaceutical Sciences',
  img: "/assets/images/faculty_sourave_saha.png",
  alt: 'Professional illustrated portrait of Sourave Saha, pharmacy faculty member in formal academic attire'
},
{
  name: 'Sneha Roy',
  title: 'Faculty',
  qualification: 'M.Pharm',
  specialization: 'Pharmaceutical Sciences',
  img: "/assets/images/faculty_sneha_roy.png",
  alt: 'Professional illustrated portrait of Sneha Roy, pharmacy faculty member in formal academic attire'
},
{
  name: 'Debdatta Sarkar',
  title: 'Faculty',
  qualification: 'M.Pharm',
  specialization: 'Pharmaceutical Sciences',
  img: "/assets/images/faculty_debdatta_sarkar.png",
  alt: 'Professional illustrated portrait of Debdatta Sarkar, pharmacy faculty member in formal academic attire'
}];


export default function FacultySection() {
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
    <section ref={ref} id="faculty" className="section-pad-lg px-4 sm:px-6 bg-muted dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Our Faculty</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Expert <span className="gradient-text">Educators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Our faculty brings together academic excellence and industry experience to
            deliver quality pharmaceutical education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty?.map((member, i) =>
          <div
            key={member?.name}
            className="js-reveal-hidden bg-white rounded-3xl overflow-hidden border border-border shadow-purple-sm card-hover"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={member?.img}
                alt={member?.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">{member?.name}</h3>
                  <p className="text-accent text-sm font-semibold">{member?.title}</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <Icon name="AcademicCapIcon" size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-xs text-muted-foreground">{member?.qualification}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="BeakerIcon" size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-xs text-muted-foreground">{member?.specialization}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}