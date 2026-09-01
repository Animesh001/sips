import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import VisionMission from '@/app/about/components/VisionMission';
import ProgrammesSection from '@/app/about/components/ProgrammesSection';
import InfrastructureSection from '@/app/about/components/InfrastructureSection';
import MapSection from '@/app/about/components/MapSection';
import AdditionalInfo from '@/app/about/components/AdditionalInfo';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <VisionMission />
        <ProgrammesSection />
        <InfrastructureSection />
        <MapSection />
        <AdditionalInfo />
      </main>
      <Footer />
    </>
  );
}