'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/assets/images/WhatsApp_Image_2026-08-08_at_12.18.13_PM-1788254682487.jpeg',
    alt: 'SIPS campus building exterior view',
    category: 'Campus',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-08-08_at_12.19.47_PM-1788253111239.jpeg',
    alt: 'Siliguri Institute of Pharmaceutical Sciences main entrance',
    category: 'Campus',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-08-26_at_2.08.07_PM-1788255199722.jpeg',
    alt: 'SIPS college building and surroundings',
    category: 'Campus',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-08-26_at_2.07.40_PM-1788255171697.jpeg',
    alt: 'SIPS campus grounds and facilities',
    category: 'Campus',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-08-26_at_2.50.56_PM-1788255199673.jpeg',
    alt: 'SIPS college infrastructure and campus view',
    category: 'Campus',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-08-26_at_2.08.06_PM-1788255173133.jpeg',
    alt: 'SIPS campus area and building',
    category: 'Campus',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-09-01_at_6.49.47_PM-1788268831120.jpeg',
    alt: 'SIPS college event or activity',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.33.59_PM-1791043506915.jpeg',
    alt: 'SIPS college event gathering and activities',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.33.59_PM__1_-1791043507016.jpeg',
    alt: 'SIPS students and faculty at college event',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.33.59_PM__2_-1791043506996.jpeg',
    alt: 'SIPS college event celebration and program',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.00_PM-1791043536264.jpeg',
    alt: 'SIPS event highlights and student activities',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.00_PM__1_-1791043507014.jpeg',
    alt: 'SIPS college event moments and memories',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.02_PM__1_-1791043668688.jpeg',
    alt: 'SIPS college event highlights and student participation',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.02_PM__2_-1791043668744.jpeg',
    alt: 'SIPS event activities and college program',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.02_PM-1791043668784.jpeg',
    alt: 'SIPS college event gathering and celebration',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.03_PM__1_-1791043668872.jpeg',
    alt: 'SIPS students and faculty at college event program',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.04_PM__1_-1791043668796.jpeg',
    alt: 'SIPS college event moments and campus activities',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.05_PM-1791043823148.jpeg',
    alt: 'SIPS college event program and student activities',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.05_PM__1_-1791043823434.jpeg',
    alt: 'SIPS students participating in college event',
    category: 'Events',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-03_at_9.34.05_PM__2_-1791043823425.jpeg',
    alt: 'SIPS college event celebration and gathering',
    category: 'Events',
  },
  {
    src: '/assets/images/Semiar_Hall-1788255202540.png',
    alt: 'SIPS seminar hall interior with seating arrangement',
    category: 'Infrastructure',
  },
  {
    src: '/assets/images/Sourav_Saha-1791042859424.jpeg',
    alt: 'Sourave Saha, M.Pharm – Faculty member at SIPS',
    category: 'Faculty',
  },
  {
    src: '/assets/images/Sneha_Roy-1791042859545.jpeg',
    alt: 'Sneha Roy, M.Pharm – Faculty member at SIPS',
    category: 'Faculty',
  },
  {
    src: '/assets/images/Debdatta_Sarkar-1791042859571.jpeg',
    alt: 'Debdatta Sarkar, M.Pharm – Faculty member at SIPS',
    category: 'Faculty',
  },
  {
    src: '/assets/images/faculty_sourabh_palliwal.png',
    alt: 'Sourabh Palliwal, M.Pharm – Faculty member at SIPS',
    category: 'Faculty',
  },
  {
    src: '/assets/images/faculty_bhakti_pradhan_mali.png',
    alt: 'Bhakti Pradhan Mali, M.Pharm – Faculty member at SIPS',
    category: 'Faculty',
  },
];

const categories = ['All', 'Campus', 'Infrastructure', 'Faculty', 'Events'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i === 0 ? filtered.length - 1 : i - 1) : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i === filtered.length - 1 ? 0 : i + 1) : null));

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
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Photo Gallery
            </span>
            <h1 className="font-display font-bold text-white text-section-title mb-6">
              Life at{' '}
              <span
                className="gradient-text"
                style={{
                  WebkitTextFillColor: 'transparent',
                  background: 'linear-gradient(135deg, #c084fc, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                SIPS
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our campus, infrastructure, faculty, and memorable moments through our photo gallery.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-pad bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filtered.map((img, idx) => (
                <div
                  key={img.src}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="relative w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-violet-300 bg-violet-900/60 px-2 py-0.5 rounded-full">
                        {img.category}
                      </span>
                      <p className="text-white text-sm mt-1 font-medium line-clamp-2">{img.alt}</p>
                    </div>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No images in this category yet.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-300">
                {filtered[lightboxIndex].category}
              </span>
              <p className="text-white/80 text-sm mt-1">{filtered[lightboxIndex].alt}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
