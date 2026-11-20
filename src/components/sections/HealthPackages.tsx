import React from 'react';
import { Sparkles, Check, ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { healthPackages, HealthPackage } from '../../data/hospitalData';

export interface HealthPackagesProps {
  onBookPackage: (packageTitle: string) => void;
}

export const HealthPackages: React.FC<HealthPackagesProps> = ({ onBookPackage }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-ivory-50/80 border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Preventative Care & Wellness"
          title="Comprehensive Health Screening Packages for Your Family"
          description="Early detection saves lives. Our health checkups combine detailed pathology, diagnostic radiology, and senior physician evaluations at subsidized community rates."
        />

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {healthPackages.map((pkg: HealthPackage) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  isPopular
                    ? 'bg-white border-2 border-gold-500 shadow-elevated-lg -translate-y-2'
                    : 'bg-white border border-ivory-200 shadow-sm hover:shadow-elevated'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 font-bold text-xs uppercase tracking-widest py-1.5 px-4 text-center">
                    ★ Most Recommended Checkup ★
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-800/20">
                        {pkg.testCount}+ Diagnostic Tests
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {pkg.priceNote}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-navy-900 mt-2 mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mb-6">
                      {pkg.targetAudience}
                    </p>

                    {/* Inclusions List */}
                    <div className="space-y-2.5 pt-4 border-t border-ivory-200 mb-6">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-navy-900">
                        Included Clinical Investigations:
                      </span>
                      {pkg.testsIncluded.map((test, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                          <span>{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preparation Notice & CTA */}
                  <div>
                    <div className="p-3 rounded-lg bg-ivory-100 border border-ivory-300 text-xs text-slate-600 mb-5 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{pkg.preparationNotice}</span>
                    </div>

                    <Button
                      variant={isPopular ? 'gold' : 'primary'}
                      size="md"
                      fullWidth
                      onClick={() => onBookPackage(pkg.title)}
                      iconRight={<ArrowRight className="w-4 h-4" />}
                    >
                      Book This Health Package
                    </Button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
