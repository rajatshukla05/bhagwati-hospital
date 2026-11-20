import React, { useState } from 'react';
import { 
  FileCheck2, 
  ShieldCheck, 
  Building2, 
  Clock, 
  Users, 
  Receipt, 
  CreditCard, 
  CheckCircle,
  HelpCircle 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { tpaPartners, hospitalInfo } from '../../data/hospitalData';

export const PatientGuideTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'admission' | 'insurance' | 'visiting'>('admission');

  return (
    <section id="patient-guide" className="py-20 lg:py-28 bg-white border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Patient & Family Care Guide"
          title="Clear, Transparent Guidance Every Step of the Way"
          description="We understand that medical treatment can be stressful. We ensure transparent pricing, dedicated insurance assistance, and clear admission procedures so you can focus entirely on recovery."
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('admission')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'admission'
                ? 'bg-navy-900 text-white shadow-elevated'
                : 'bg-ivory-100 text-slate-700 hover:bg-ivory-200'
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-gold-400" />
            <span>Admission & Discharge Process</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('insurance')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'insurance'
                ? 'bg-navy-900 text-white shadow-elevated'
                : 'bg-ivory-100 text-slate-700 hover:bg-ivory-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Cashless Insurance & TPAs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('visiting')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'visiting'
                ? 'bg-navy-900 text-white shadow-elevated'
                : 'bg-ivory-100 text-slate-700 hover:bg-ivory-200'
            }`}
          >
            <Building2 className="w-4 h-4 text-gold-400" />
            <span>Hospital Amenities & Visitor Rules</span>
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="bg-ivory-50/70 rounded-2xl p-6 sm:p-10 border border-ivory-200 shadow-sm max-w-5xl mx-auto">
          
          {/* TAB 1: Admission & Discharge */}
          {activeTab === 'admission' && (
            <div className="space-y-8">
              <div className="border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Step-by-Step Inpatient Admission & Discharge Roadmap
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Designed for minimal waiting time and complete transparency from doctor consultation to room allocation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                    1
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy-900 mb-1.5">
                    Admission Desk Check-In
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Bring the doctor's admission advice note, government photo ID (Aadhaar/Voter ID), and medical records.
                  </p>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-800/20">
                    Takes approx. 10–15 mins
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-gold-600 text-navy-950 flex items-center justify-center font-bold text-sm mb-3">
                    2
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy-900 mb-1.5">
                    Room Category Selection
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Choose between Deluxe Private Suites, Twin-Sharing Semi-Private, or Clean Economy Wards with upfront estimates.
                  </p>
                  <span className="text-[11px] font-semibold text-gold-800 bg-gold-50 px-2 py-0.5 rounded border border-gold-500/30">
                    Transparent tariff sheets
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm mb-3">
                    3
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy-900 mb-1.5">
                    Smooth Discharge & Summary
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Receive typed clinical discharge summary, medication timetable, diet instructions, and schedule for follow-up review.
                  </p>
                  <span className="text-[11px] font-semibold text-navy-900 bg-navy-50 px-2 py-0.5 rounded border border-navy-900/20">
                    Full post-discharge support
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-ivory-200 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
                <span className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-teal-800" />
                  Detailed itemized billing provided for all medicines and consumables.
                </span>
                <span className="font-semibold text-navy-900">
                  Admission Helpdesk: {hospitalInfo.receptionPhone}
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: Insurance & TPA */}
          {activeTab === 'insurance' && (
            <div className="space-y-8">
              <div className="border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Cashless Mediclaim & Empaneled TPA Partners
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Our dedicated In-House TPA Coordination Desk assists families with pre-authorization and claims settlement.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tpaPartners.map((tpa) => (
                  <div
                    key={tpa.name}
                    className="p-4 rounded-xl bg-white border border-ivory-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-800/20 inline-block mb-2">
                        {tpa.category}
                      </span>
                      <h4 className="font-serif text-base font-bold text-navy-900">
                        {tpa.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tpa.description}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-ivory-200 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Cashless Empaneled</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-800/20 text-xs text-teal-900">
                <h5 className="font-bold mb-1 flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-teal-800" />
                  What to Bring for Cashless Hospitalization:
                </h5>
                <ul className="list-disc list-inside space-y-1 text-teal-800/90 pl-1">
                  <li>Valid Health Insurance Card or Policy Copy with E-card Number</li>
                  <li>Patient's Government ID (Aadhaar Card / Voter ID / Passport)</li>
                  <li>Previous consultation prescriptions and relevant diagnostic lab reports</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: Visiting Rules & Amenities */}
          {activeTab === 'visiting' && (
            <div className="space-y-8">
              <div className="border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Hospital Amenities & Attendant Care Guidelines
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Ensuring a safe, hygienic, and peaceful recovery environment for all admitted patients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-teal-800" />
                    <h4 className="font-serif text-lg font-bold text-navy-900">
                      Visiting Hours Policy
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex justify-between border-b border-ivory-200 pb-1.5">
                      <span className="font-semibold">General & Private Wards:</span>
                      <span className="text-navy-900 font-mono">04:00 PM – 07:00 PM Daily</span>
                    </li>
                    <li className="flex justify-between border-b border-ivory-200 pb-1.5">
                      <span className="font-semibold">ICU / Critical Care Units:</span>
                      <span className="text-crimson-700 font-mono">05:00 PM – 06:00 PM (1 Attendant)</span>
                    </li>
                    <li className="text-xs text-slate-500 pt-1">
                      Children below 12 years are not advised inside ICU corridors to prevent infection.
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-gold-600" />
                    <h4 className="font-serif text-lg font-bold text-navy-900">
                      On-Campus Amenities
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-800" />
                      <span><strong>24/7 In-House Pharmacy:</strong> Full stock of critical care & surgical items.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-800" />
                      <span><strong>Patient Dietetics:</strong> Customized therapeutic meals supervised by clinical dieticians.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-800" />
                      <span><strong>Attendant Waiting Lounges:</strong> Clean seating, clean drinking water, and sanitization stations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
