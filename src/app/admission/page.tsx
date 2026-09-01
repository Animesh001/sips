import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdmissionHero from '@/app/admission/components/AdmissionHero';
import EligibilitySection from '@/app/admission/components/EligibilitySection';
import AdmissionProcess from '@/app/admission/components/AdmissionProcess';
import FeeStructure from '@/app/admission/components/FeeStructure';
import DocumentsRequired from '@/app/admission/components/DocumentsRequired';
import InquiryForm from '@/app/admission/components/InquiryForm';

export default function AdmissionPage() {
  return (
    <>
      <Header />
      <main>
        <AdmissionHero />
        <EligibilitySection />
        <AdmissionProcess />
        <FeeStructure />
        <DocumentsRequired />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}