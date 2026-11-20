import React from 'react';
import { PhoneCall, Truck, Clock, MapPin, MessageCircle } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalData';

export const TopEmergencyBar: React.FC = () => {
  return (
    <div className="bg-navy-950 text-ivory-100 border-b border-gold-500/20 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        
        {/* Left: Emergency Alert Badges */}
        <div className="flex items-center flex-wrap gap-4">
          {/* 24/7 Trauma Hotline */}
          <a
            href={`tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 group text-white hover:text-gold-300 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-600"></span>
            </span>
            <span className="font-semibold text-crimson-400 uppercase tracking-wider text-[11px]">
              24/7 Emergency:
            </span>
            <span className="font-bold tracking-wide font-mono text-[13px] text-white group-hover:text-gold-300">
              {hospitalInfo.emergencyPhone}
            </span>
          </a>

          {/* Ambulance Dispatch */}
          <span className="hidden md:inline-block w-px h-3.5 bg-navy-800" />
          <a
            href={`tel:${hospitalInfo.ambulancePhone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-1.5 text-ivory-200/80 hover:text-white transition-colors"
          >
            <Truck className="w-3.5 h-3.5 text-teal-400" />
            <span>Ambulance:</span>
            <span className="font-mono font-medium text-ivory-100">{hospitalInfo.ambulancePhone}</span>
          </a>
        </div>

        {/* Right: OPD Timing & Location Landmark */}
        <div className="flex items-center gap-4 text-ivory-200/80 text-[11px] sm:text-xs">
          {/* OPD Timing */}
          <div className="hidden lg:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>OPD: 09:00 AM – 08:00 PM</span>
          </div>

          <span className="hidden lg:inline-block w-px h-3.5 bg-navy-800" />

          {/* Location Landmark */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span className="truncate max-w-[200px] sm:max-w-none">
              {hospitalInfo.address.city}, {hospitalInfo.address.state}
            </span>
          </a>

          <span className="hidden sm:inline-block w-px h-3.5 bg-navy-800" />

          {/* WhatsApp Direct Help */}
          <a
            href={`https://wa.me/${hospitalInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Help</span>
          </a>
        </div>

      </div>
    </div>
  );
};
