import React from 'react';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden dot-pattern">
      <div className="absolute inset-0 blob-primary opacity-8 scale-150 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-14">
          <div className="flex justify-center">
            <AppLogo
              src="/assets/images/WhatsApp_Image_2026-08-08_at_12.19.47_PM-1788253111239.jpeg"
              size={80} />
            
          </div>
          <span className="section-label">About Us</span>
          <h1 className="font-display text-hero-xl font-extrabold text-white">
            Siliguri Institute of{' '}
            <span className="text-white">Pharmaceutical Sciences</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A WBSCT-affiliated pharmacy institution in the heart of North Bengal, dedicated
            to producing skilled, ethical, and industry-ready pharmacists through quality
            education and practical training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 rounded-3xl overflow-hidden h-72 md:h-96 relative shadow-purple-lg">
            <AppImage
              src="https://images.unsplash.com/photo-1641789373567-7ef59cdea464"
              alt="Wide view of pharmacy college campus building with clear sky and green trees"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 66vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl overflow-hidden h-44 relative shadow-purple-md">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1a42f56ef-1776317046962.png"
                alt="Bright pharmacy laboratory with students conducting experiments at lab benches"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
            </div>
            <div className="rounded-3xl overflow-hidden flex-1 relative shadow-purple-md">
              <AppImage
                src="https://images.unsplash.com/photo-1571508369658-ad7922833f7b"
                alt="Library with books and well-lit study area with wooden furniture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}