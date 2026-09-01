'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const facilities = [
{
  title: 'Pharmaceutical Lab',
  desc: 'Fully equipped with modern dispensing and manufacturing equipment for hands-on training.',
  icon: 'BeakerIcon',
  img: "/assets/images/WhatsApp_Image_2026-08-26_at_2.07.40_PM-1788255171697.jpeg",
  alt: 'Pharmaceutical laboratory at Siliguri Institute of Pharmaceutical Sciences',
  span: 'md:col-span-2'
},
{
  title: 'Laboratory Facilities',
  desc: 'Extensive collection of pharmaceutical texts, journals, and digital resources.',
  icon: 'BookOpenIcon',
  img: "/assets/images/WhatsApp_Image_2026-08-26_at_2.08.06_PM-1788255173133.jpeg",
  alt: 'Laboratory facilities at SIPS college',
  span: ''
},
{
  title: 'Seminar Hall',
  desc: 'Technology-enabled classrooms with projectors and interactive learning tools.',
  icon: 'ComputerDesktopIcon',
  img: "/assets/images/Semiar_Hall-1788255202540.png",
  alt: 'Seminar hall at Siliguri Institute of Pharmaceutical Sciences',
  span: ''
},
{
  title: 'College Facilities',
  desc: 'On-campus medicinal garden featuring herbs and plants used in pharmacognosy studies.',
  icon: 'SparklesIcon',
  img: "/assets/images/WhatsApp_Image_2026-08-26_at_2.08.07_PM-1788255199722.jpeg",
  alt: 'College facilities and infrastructure at SIPS',
  span: ''
},
{
  title: 'Campus Infrastructure',
  desc: 'Modern computing facility for pharmaceutical software and research databases.',
  icon: 'CpuChipIcon',
  img: "/assets/images/WhatsApp_Image_2026-08-26_at_2.50.56_PM-1788255199673.jpeg",
  alt: 'Campus infrastructure at Siliguri Institute of Pharmaceutical Sciences',
  span: ''
}];


export default function InfrastructureSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.js-reveal-hidden');
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
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="infrastructure" className="section-pad-lg px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 js-reveal-hidden space-y-4">
          <span className="section-label">Infrastructure</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            World-Class <span className="gradient-text">Facilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Our campus is designed to provide students with the best learning environment,
            equipped with modern laboratories, library, and digital resources.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
             Array has 5 cards: [Pharmaceutical Lab (cs-2), Library, Smart Classrooms, Medicinal Garden, Computer Lab]
             Row 1: [col-1..2: Pharmaceutical Lab cs-2] [col-3: Library]
             Row 2: [col-1: Smart Classrooms] [col-2: Medicinal Garden] [col-3: Computer Lab]
             Placed 5/5 cards ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pharmaceutical Lab — col-span-2 */}
          <div className="js-reveal-hidden md:col-span-2 group relative rounded-3xl overflow-hidden h-72 shadow-purple-md border border-border card-hover">
            <AppImage
              src={facilities[0].img}
              alt={facilities[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <Icon name={facilities[0].icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-white" />
                </div>
                <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Facility</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">{facilities[0].title}</h3>
              <p className="text-white/70 text-sm max-w-md">{facilities[0].desc}</p>
            </div>
          </div>

          {/* Library */}
          <div className="js-reveal-hidden group relative rounded-3xl overflow-hidden h-72 shadow-purple-sm border border-border card-hover">
            <AppImage
              src={facilities[1].img}
              alt={facilities[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-xl font-bold text-white mb-1">{facilities[1].title}</h3>
              <p className="text-white/70 text-xs">{facilities[1].desc}</p>
            </div>
          </div>

          {/* Smart Classrooms */}
          <div className="js-reveal-hidden group relative rounded-3xl overflow-hidden h-56 shadow-purple-sm border border-border card-hover">
            <AppImage
              src={facilities[2].img}
              alt={facilities[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">{facilities[2].title}</h3>
              <p className="text-white/70 text-xs">{facilities[2].desc}</p>
            </div>
          </div>

          {/* Medicinal Garden */}
          <div className="js-reveal-hidden group relative rounded-3xl overflow-hidden h-56 shadow-purple-sm border border-border card-hover">
            <AppImage
              src={facilities[3].img}
              alt={facilities[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">{facilities[3].title}</h3>
              <p className="text-white/70 text-xs">{facilities[3].desc}</p>
            </div>
          </div>

          {/* Computer Lab */}
          <div className="js-reveal-hidden group relative rounded-3xl overflow-hidden h-56 shadow-purple-sm border border-border card-hover">
            <AppImage
              src={facilities[4].img}
              alt={facilities[4].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">{facilities[4].title}</h3>
              <p className="text-white/70 text-xs">{facilities[4].desc}</p>
            </div>
          </div>
        </div>

        {/* Amenities list */}
        <div className="mt-8 js-reveal-hidden grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
          { icon: 'WifiIcon', label: 'WiFi Campus' },
          { icon: 'TruckIcon', label: 'Transport Facility' },
          { icon: 'HeartIcon', label: 'Medical Room' },
          { icon: 'ShieldCheckIcon', label: 'CCTV Security' }].
          map((a) =>
          <div key={a.label} className="flex items-center gap-3 bg-muted rounded-2xl px-5 py-4 border border-border">
              <Icon name={a.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">{a.label}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}