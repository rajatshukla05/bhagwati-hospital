import React from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Mail, 
  Clock, 
  Truck, 
  ShieldAlert, 
  Heart, 
  ArrowUpRight 
} from 'lucide-react';
import { hospitalInfo, departments } from '../../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 text-ivory-100 border-t-2 border-gold-500/30">
      
      {/* Upper 24/7 Emergency Callout Banner */}
      <div className="bg-navy-900 border-b border-navy-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson-600"></span>
            </span>
            <div>
              <span className="font-serif text-lg font-bold text-white block">
                24/7 Emergency & Acute Trauma Care
              </span>
              <span className="text-xs text-ivory-200/70">
                Casualty Medical Officer & On-Duty Emergency Team Available Round-the-Clock
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-crimson-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-crimson-700 transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Emergency: {hospitalInfo.emergencyPhone}</span>
            </a>

            <a
              href={`tel:${hospitalInfo.ambulancePhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-700 transition-colors shadow-sm"
            >
              <Truck className="w-4 h-4" />
              <span>Ambulance: {hospitalInfo.ambulancePhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Hospital Brand & Ethos (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.jpeg"
                alt="New Maa Bhagwati Hospital"
                className="w-14 h-14 object-contain rounded-full bg-white p-1"
              />
              <div>
                <span className="font-display text-lg font-bold text-white block leading-tight">
                  New Maa Bhagwati
                </span>
                <span className="font-serif text-xs font-semibold tracking-wider uppercase text-gold-400 block">
                  Hospital
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory-200/80 leading-relaxed pr-4">
              Dedicated to delivering compassionate, evidence-based medical treatment with modern surgical and intensive care capabilities. Built on the cultural values of trust, warmth, and ethical patient stewardship.
            </p>

            <div className="pt-2 text-xs space-y-2 text-ivory-200/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {hospitalInfo.address.line1}, {hospitalInfo.address.line2}, {hospitalInfo.address.city}, {hospitalInfo.address.state} - {hospitalInfo.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{hospitalInfo.opdTimings}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{hospitalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Departments (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-navy-800 pb-2">
              Clinical Specialties
            </h4>
            <ul className="space-y-2 text-xs text-ivory-200/80">
              {departments.map((dept) => (
                <li key={dept.id}>
                  <a
                    href="#departments"
                    className="hover:text-gold-300 transition-colors flex items-center justify-between"
                  >
                    <span>{dept.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Patient Care & Amenities (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-navy-800 pb-2">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs text-ivory-200/80">
              <li><a href="#patient-guide" className="hover:text-gold-300">Admission Process</a></li>
              <li><a href="#patient-guide" className="hover:text-gold-300">Cashless TPA Desk</a></li>
              <li><a href="#patient-guide" className="hover:text-gold-300">Visiting Hours</a></li>
              <li><a href="#packages" className="hover:text-gold-300">Health Packages</a></li>
              <li><a href="#facilities" className="hover:text-gold-300">Modular OTs & ICU</a></li>
              <li><a href="#doctors" className="hover:text-gold-300">Doctor Schedule</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Help & Location Landmark (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-navy-800 pb-2">
              Reception & Helpdesk
            </h4>
            
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2 text-xs">
              <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block">
                General Inquiries & OPD
              </span>
              <span className="font-mono text-base font-bold text-white block">
                {hospitalInfo.receptionPhone}
              </span>
              <p className="text-ivory-200/70 text-[11px]">
                Available Monday – Saturday 09:00 AM – 08:00 PM
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-1.5 text-xs">
              <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider block">
                Location Landmark
              </span>
              <p className="text-ivory-200/80 text-xs">
                {hospitalInfo.address.landmark}, easily accessible via all public and emergency transit routes.
              </p>
            </div>
          </div>

        </div>

        {/* Client Transparency & Sample Notice Box */}
        <div className="mt-12 pt-8 border-t border-navy-800/80">
          <div className="p-4 rounded-xl bg-navy-900/60 border border-gold-500/20 text-xs text-ivory-200/70 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Official Client Presentation Notice:</strong> This digital platform is customized specifically for New Maa Bhagwati Hospital based on the provided official emblem. All doctor bios, emergency numbers, department inventories, and package details are currently organized in a centralized data file (<code className="text-gold-300 bg-navy-950 px-1 py-0.5 rounded font-mono">src/data/hospitalData.ts</code>) and will be updated with confirmed hospital records upon final operational sign-off.
            </p>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="mt-8 pt-6 border-t border-navy-900 flex flex-wrap items-center justify-between text-xs text-ivory-200/50 gap-4">
          <p>
            © {new Date().getFullYear()} New Maa Bhagwati Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold-300">Patient Charter</a>
            <a href="#" className="hover:text-gold-300">Ethical Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
