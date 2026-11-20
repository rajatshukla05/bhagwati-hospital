import React from 'react';
import { CheckCircle2, Shield, Activity, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { facilities } from '../../data/hospitalData';

export const InfrastructureGrid: React.FC = () => {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-ivory-50/60 border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Clinical Infrastructure"
          title="State-of-the-Art Facilities Engineered for Zero Compromise"
          description="High standards of infection prevention, surgical sterility, and round-the-clock emergency infrastructure designed to give every patient the safest healing environment."
        />

        {/* 4-Part Architectural Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl border border-ivory-200 hover:border-gold-500/40 shadow-sm hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Facility Visual */}
              <div className="relative h-64 overflow-hidden bg-navy-950">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="teal" dot>
                    {fac.category}
                  </Badge>
                </div>

                {/* Inset Badge */}
                <div className="absolute bottom-4 right-4 bg-navy-900/90 backdrop-blur-sm text-gold-300 text-xs px-3 py-1 rounded-full border border-gold-500/30 font-semibold">
                  {fac.badge}
                </div>
              </div>

              {/* Facility Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-ivory-200 space-y-2">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Key Clinical Highlights
                  </span>
                  {fac.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
