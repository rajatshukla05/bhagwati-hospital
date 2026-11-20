import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { testimonials, Testimonial } from '../../data/hospitalData';

export const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Voice of Care"
          title="Stories of Recovery, Dignity, and Trust"
          description="Read genuine experiences from families who entrusted New Maa Bhagwati Hospital during their critical health emergencies and milestones."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: Testimonial) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-ivory-50/70 border border-ivory-200 shadow-sm flex flex-col justify-between relative group hover:border-gold-500/40 hover:shadow-elevated transition-all duration-300"
            >
              <div>
                {/* Header Rating & Department */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-800/20">
                    {t.department}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.story}"
                </p>
              </div>

              {/* Patient Author Info */}
              <div className="pt-4 border-t border-ivory-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-navy-900">
                      {t.patientName}
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {t.relationOrAge}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {t.date}
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-[11px] text-slate-500">
                  Care under: <span className="font-medium text-navy-900">{t.treatingDoctor}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
