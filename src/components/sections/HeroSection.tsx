import React, { useState } from 'react';
import { Calendar, Shield, Activity, Clock, ArrowRight, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { departments, hospitalInfo } from '../../data/hospitalData';

export interface HeroSectionProps {
  onOpenBookingModal: (deptId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleQuickDockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal(selectedDept);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-50 via-white to-ivory-100/60 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-ivory-200">
      
      {/* Background Decorative Aureole Halo (Subtle gold ripples inspired by the logo) */}
      <div className="absolute top-0 right-1/4 -translate-y-1/3 w-[600px] h-[600px] rounded-full aureole-glow pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] rounded-full teal-aura pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Quick Consultation Dock (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gold-500/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-700 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-navy-900">
                Ethical Healthcare • 24/7 Trauma Ready
              </span>
              <span className="text-[11px] text-gold-700 font-medium pl-1 border-l border-gold-300">
                Serving All Families
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-semibold text-navy-900 leading-[1.12] tracking-tight">
              Dignity in Healing,{' '}
              <span className="italic font-normal text-teal-800">Excellence</span> in Medicine.
            </h1>

            {/* Subhead / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Inspired by the sacred spirit of maternal protection, New Maa Bhagwati Hospital bridges compassionate medical stewardship with advanced surgical precision, 24/7 intensive care, and accessible healthcare for every family.
            </p>

            {/* Interactive Quick Consultation Dock */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-elevated border border-gold-500/25 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-800 via-gold-500 to-teal-800" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-800" />
                  Quick OPD Appointment Booking
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Doctor Available Today
                </span>
              </div>

              <form onSubmit={handleQuickDockSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Step 1: Department */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    1. Specialty
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full text-xs sm:text-sm rounded-lg border border-slate-300 px-3 py-2.5 bg-ivory-50/50 focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                  >
                    <option value="">Choose Department</option>
                    {departments.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 2: Date */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    2. Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full text-xs sm:text-sm rounded-lg border border-slate-300 px-3 py-2.5 bg-ivory-50/50 focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                  />
                </div>

                {/* Step 3: Button */}
                <div className="flex items-end">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="md"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Find Slot
                  </Button>
                </div>
              </form>

              <div className="mt-3.5 pt-3 border-t border-ivory-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                  Instant SMS Slot Confirmation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                  Zero Waiting for Critical Trauma
                </span>
              </div>
            </div>

            {/* Quick Stat Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-gold-500 pl-3">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-navy-900">24/7</span>
                <span className="text-xs text-slate-600">Trauma & Emergency Care</span>
              </div>
              <div className="border-l-2 border-teal-700 pl-3">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-navy-900">100%</span>
                <span className="text-xs text-slate-600">Transparent Medical Billing</span>
              </div>
              <div className="border-l-2 border-navy-800 pl-3">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-navy-900">30+</span>
                <span className="text-xs text-slate-600">Cashless Insurance TPAs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Art-Directed Visual Composition (5 Columns) */}
          <div className="lg:col-span-5 relative">
            
            {/* The Cradling Arc Container (Organic curve inspired by the logo hands) */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame with Gold Accent */}
              <div className="relative rounded-[2.5rem] rounded-tr-[5rem] overflow-hidden border-2 border-gold-500/40 shadow-elevated-lg bg-navy-900">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900"
                  alt="Doctor consulting with care and compassion"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top opacity-95 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Inset Credibility Card at bottom */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-dark text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-800/80 border border-gold-400 flex items-center justify-center shrink-0">
                      <HeartPulse className="w-5 h-5 text-gold-300" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-white">
                        Specialized Emergency Response
                      </h4>
                      <p className="text-xs text-ivory-200/80 mt-0.5">
                        In-house ICU, modular OT, and rapid cardiac resuscitation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top-Left Quality Seal */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white rounded-xl shadow-elevated p-3 border border-gold-500/30 flex items-center gap-3 animate-pulse-subtle">
                <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-gold-700" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Quality Benchmark
                  </span>
                  <span className="font-serif text-xs font-bold text-navy-900">
                    NABH Protocol Standards
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Emergency 24/7 Hotline Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-crimson-600 text-white rounded-xl shadow-elevated p-3.5 border border-white/30">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/80">
                      Emergency Ambulance
                    </span>
                    <span className="font-mono text-xs font-bold tracking-wider text-white">
                      {hospitalInfo.emergencyPhone}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
