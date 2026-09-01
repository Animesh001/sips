'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const fees = [
  {
    item: 'Admission Fees',
    note: '(One Time)',
    inst1: '₹10,000',
    inst2: '—',
    inst3: '—',
    inst4: '—',
    total: '₹10,000',
  },
  {
    item: 'Tuition Fees',
    note: '',
    inst1: '₹15,750',
    inst2: '₹15,750',
    inst3: '₹15,750',
    inst4: '₹15,750',
    total: '₹63,000',
  },
  {
    item: 'Lab Fees',
    note: '',
    inst1: '₹8,000',
    inst2: '₹8,000',
    inst3: '₹8,000',
    inst4: '₹8,000',
    total: '₹32,000',
  },
  {
    item: 'Library Fees',
    note: '',
    inst1: '₹700',
    inst2: '₹700',
    inst3: '₹700',
    inst4: '₹700',
    total: '₹2,800',
  },
  {
    item: 'Caution Deposit',
    note: '(Refundable)',
    inst1: '₹5,000',
    inst2: '—',
    inst3: '—',
    inst4: '—',
    total: '₹5,000',
  },
  {
    item: 'Institute Development Fees',
    note: '',
    inst1: '₹15,000',
    inst2: '—',
    inst3: '—',
    inst4: '—',
    total: '₹15,000',
  },
  {
    item: 'Skill Development Fees',
    note: '',
    inst1: '₹2,800',
    inst2: '₹2,800',
    inst3: '₹2,800',
    inst4: '₹2,800',
    total: '₹11,200',
  },
  {
    item: 'Prospectus with Form and ID Card',
    note: '',
    inst1: '₹1,000',
    inst2: '—',
    inst3: '—',
    inst4: '—',
    total: '₹1,000',
  },
  {
    item: 'Dress Kit',
    note: '',
    inst1: '₹5,000',
    inst2: '—',
    inst3: '—',
    inst4: '—',
    total: '₹5,000',
  },
];

export default function FeeStructure() {
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
      { threshold: 0.15 }
    );
    items?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} id="fees" className="section-pad px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Affiliation Highlight */}
        <div className="js-reveal-hidden flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md">
            <span className="text-yellow-300">★</span>
            <span>Approved by PCI and Affiliated to WBSCTE&amp;VESD</span>
            <span className="text-yellow-300">★</span>
          </div>
        </div>

        <div className="text-center mb-10 js-reveal-hidden space-y-3">
          <span className="section-label">Fee Structure</span>
          <h2 className="font-display text-section-title font-extrabold text-foreground">
            Fees Structure <span className="gradient-text">D. Pharm (2026–2028)</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            4 Installments · All charges listed below are inclusive of the complete programme.
          </p>
        </div>

        <div className="js-reveal-hidden rounded-3xl overflow-hidden border border-border shadow-purple-md">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold" colSpan={2}>Particulars</th>
                  <th className="px-4 py-3 font-semibold text-center">1st</th>
                  <th className="px-4 py-3 font-semibold text-center">2nd</th>
                  <th className="px-4 py-3 font-semibold text-center">3rd</th>
                  <th className="px-4 py-3 font-semibold text-center">4th</th>
                  <th className="px-4 py-3 font-semibold text-center">Grand Total</th>
                </tr>
              </thead>
              <tbody>
                {fees?.map((row, idx) => (
                  <tr key={row?.item} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}>
                    <td className="px-4 py-3 font-medium text-foreground">{row?.item}</td>
                    <td className="px-2 py-3 text-muted-foreground text-xs whitespace-nowrap">{row?.note}</td>
                    <td className="px-4 py-3 text-center text-foreground">{row?.inst1}</td>
                    <td className="px-4 py-3 text-center text-foreground">{row?.inst2}</td>
                    <td className="px-4 py-3 text-center text-foreground">{row?.inst3}</td>
                    <td className="px-4 py-3 text-center text-foreground">{row?.inst4}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary">{row?.total}</td>
                  </tr>
                ))}
                <tr className="bg-primary/10 border-t-2 border-primary">
                  <td className="px-4 py-3 font-bold text-primary" colSpan={2}>Total</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">₹63,250</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">₹42,250</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">₹42,250</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">₹42,250</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">₹1,85,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-6 js-reveal-hidden grid sm:grid-cols-2 gap-5">
          <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-200 flex gap-3 items-start">
            <Icon name="InformationCircleIcon" size={18} className="text-yellow-600 mt-0.5 shrink-0" />
            <p className="text-sm text-yellow-800 leading-relaxed">
              <span className="font-semibold">* Note:</span> Examination and Registration Fee for WBSCTE&amp;VESD are required to be paid extra by the students as per information received by the college from WBSCTE&amp;VESD.
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-5 border border-border flex gap-3 items-start">
            <Icon name="CurrencyRupeeIcon" size={18} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scholarships under the National Scholarship Portal (NSP) and West Bengal state
              schemes are available for eligible students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}