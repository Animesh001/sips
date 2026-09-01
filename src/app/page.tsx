import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import AboutSnippet from '@/app/components/AboutSnippet';
import ProgrammeHighlight from '@/app/components/ProgrammeHighlight';
import AdmissionCTA from '@/app/components/AdmissionCTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSnippet />
        <ProgrammeHighlight />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}