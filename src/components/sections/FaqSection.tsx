import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { faqs, FaqItem, hospitalInfo } from '../../data/hospitalData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory-50/60 border-b border-ivory-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Essential Information for Patients & Families"
          description="Quick answers regarding our emergency triage, OPD appointment process, cashless insurance guidelines, and hospital facilities."
        />

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-ivory-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-800/20 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-navy-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-ivory-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-gold-500/30 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-800/20 flex items-center justify-center text-teal-800 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-navy-900 block">Have a specific medical inquiry or requirement?</span>
              <span className="text-slate-500 text-xs">Our reception desk is here to assist you 24/7.</span>
            </div>
          </div>

          <a
            href={`tel:${hospitalInfo.receptionPhone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 text-white font-semibold text-xs hover:bg-navy-800 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
            <span>Call Reception: {hospitalInfo.receptionPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
