import React from 'react';
import { PhoneCall, Calendar, ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalData';

export interface EmergencyActionStripProps {
  onOpenBookingModal: () => void;
}

export const EmergencyActionStrip: React.FC<EmergencyActionStripProps> = ({ onOpenBookingModal }) => {
  const actions = [
    {
      title: "24/7 Emergency & Trauma",
      description: "Immediate triage, resuscitation, and on-call trauma surgeon response.",
      actionLabel: `Call: ${hospitalInfo.emergencyPhone}`,
      href: `tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`,
      isExternalLink: true,
      icon: PhoneCall,
      theme: "crimson",
      badge: "Zero Delay",
    },
    {
      title: "Book Specialist OPD",
      description: "Consult senior cardiologists, surgeons, gynaecologists, and physicians.",
      actionLabel: "Choose Slot Online",
      onClick: onOpenBookingModal,
      isExternalLink: false,
      icon: Calendar,
      theme: "teal",
      badge: "Easy Scheduling",
    },
    {
      title: "Cashless Mediclaim & TPA",
      description: "Empaneled with Ayushman Bharat and 30+ leading private health insurers.",
      actionLabel: "View Insurance Desk",
      href: "#patient-guide",
      isExternalLink: true,
      icon: ShieldCheck,
      theme: "navy",
      badge: "Hassle-Free",
    },
    {
      title: "Diagnostic & Lab Scans",
      description: "Rapid pathology and radiology test report dispatch directly to your phone.",
      actionLabel: "Collect Online Report",
      href: `https://wa.me/${hospitalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=Please%20send%20my%20diagnostic%20lab%20report`,
      isExternalLink: true,
      icon: FileText,
      theme: "gold",
      badge: "Digital Reports",
    },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((act) => {
          const Icon = act.icon;
          const isCrimson = act.theme === "crimson";
          const isTeal = act.theme === "teal";
          const isGold = act.theme === "gold";

          const cardContent = (
            <div
              className={`h-full p-5 sm:p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group shadow-elevated ${
                isCrimson
                  ? 'bg-gradient-to-br from-crimson-600 to-crimson-800 text-white hover:shadow-lg hover:-translate-y-1'
                  : isTeal
                  ? 'bg-white border-2 border-teal-800/30 hover:border-teal-800 text-slate-800 hover:shadow-elevated-lg hover:-translate-y-1'
                  : 'bg-white border border-ivory-200 hover:border-gold-500/50 text-slate-800 hover:shadow-elevated-lg hover:-translate-y-1'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                    isCrimson
                      ? 'bg-white/20 text-white'
                      : isTeal
                      ? 'bg-teal-50 text-teal-800 border border-teal-800/20'
                      : isGold
                      ? 'bg-gold-50 text-gold-800 border border-gold-500/30'
                      : 'bg-navy-50 text-navy-900'
                  }`}
                >
                  {act.badge}
                </span>

                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isCrimson
                      ? 'bg-white/20 text-white'
                      : isTeal
                      ? 'bg-teal-800 text-white'
                      : isGold
                      ? 'bg-gold-500 text-navy-950'
                      : 'bg-navy-900 text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className={`font-serif text-lg font-bold mb-1.5 ${
                  isCrimson ? 'text-white' : 'text-navy-900'
                }`}
              >
                {act.title}
              </h3>
              <p
                className={`text-xs leading-relaxed mb-4 ${
                  isCrimson ? 'text-white/80' : 'text-slate-600'
                }`}
              >
                {act.description}
              </p>

              {/* Action Link Row */}
              <div
                className={`flex items-center gap-1.5 text-xs font-semibold ${
                  isCrimson
                    ? 'text-gold-300 group-hover:text-white'
                    : isTeal
                    ? 'text-teal-800 group-hover:text-teal-900'
                    : 'text-navy-900 group-hover:text-teal-800'
                }`}
              >
                <span>{act.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          );

          if (act.onClick) {
            return (
              <button
                key={act.title}
                type="button"
                onClick={act.onClick}
                className="text-left w-full focus:outline-none"
              >
                {cardContent}
              </button>
            );
          }

          return (
            <a
              key={act.title}
              href={act.href}
              className="block focus:outline-none"
              {...(act.isExternalLink && act.href?.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
};
