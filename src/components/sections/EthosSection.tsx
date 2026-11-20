import React from 'react';
import { Heart, Sparkles, Shield, Award, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const EthosSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Maternal Compassion & Human Dignity",
      description: "Inspired by the protective embrace in our emblem, we treat every patient not as a medical case, but as a cherished family member entitled to gentle communication, comfort, and respect.",
      accent: "text-lotus-400",
      bgAccent: "bg-lotus-500/10",
    },
    {
      icon: Shield,
      title: "Evidence-Based Clinical Precision",
      description: "Compassion without rigorous medical science is incomplete. We adhere strictly to national infection control protocols, closed ICU management, and continuous peer audits.",
      accent: "text-teal-400",
      bgAccent: "bg-teal-500/10",
    },
    {
      icon: Award,
      title: "Ethical & Transparent Stewardship",
      description: "We take immense pride in honest healthcare. Every patient family receives crystal-clear diagnostic rationales, upfront estimates, and compassionate financial guidance.",
      accent: "text-gold-400",
      bgAccent: "bg-gold-500/10",
    },
  ];

  return (
    <section id="ethos" className="relative py-20 lg:py-28 bg-navy-900 text-ivory-50 overflow-hidden">
      
      {/* Background Subtle Ripple Aureole Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-500/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Hospital Philosophy"
          title="Where Sacred Compassion Meets Modern Medical Science"
          description="Named in honor of Maa Bhagwati—the embodiment of protective care and renewal—our institution was founded on a simple promise: to bring world-class healthcare within reach of every family with complete ethical integrity."
          dark
        />

        {/* Narrative & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: The Emblem & Brand Legacy (5 Cols) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="relative inline-block mx-auto lg:mx-0 p-6 rounded-3xl bg-navy-950/80 border border-gold-500/30 shadow-elevated">
              <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto relative rounded-full overflow-hidden p-2 bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-700 shadow-gold-glow">
                <img
                  src="/logo.jpeg"
                  alt="New Maa Bhagwati Hospital Seal"
                  className="w-full h-full object-contain rounded-full bg-white p-1"
                />
              </div>

              <div className="mt-6 text-center">
                <span className="font-serif text-lg font-bold text-gold-300 block">
                  New Maa Bhagwati Hospital
                </span>
                <span className="text-xs text-ivory-200/70 block mt-1">
                  Symbol of Healing, Life & Reassurance
                </span>
                
                <div className="mt-4 pt-4 border-t border-navy-800 flex items-center justify-around text-xs text-ivory-200/80">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-teal-400" /> Multi-Specialty
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-gold-400" /> 24/7 Trauma
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-crimson-400" /> Critical ICU
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Ethical Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-850/80 border border-navy-700/60 shadow-lg">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-ivory-100 leading-relaxed">
                "True healing begins long before surgical instruments or pharmaceuticals are deployed. It begins the moment a family feels protected, informed, and respected."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-gold-400" />
                <span className="text-xs tracking-widest uppercase font-semibold text-gold-300">
                  Hospital Board of Medical Governance
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed">
              In an era where modern healthcare often feels transactional, New Maa Bhagwati Hospital stands apart. Our clinical faculty, nursing staff, and patient coordinators are united by an institutional code of service where technical excellence and empathetic listening walk hand in hand.
            </p>
          </div>

        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-navy-850/60 border border-navy-700/60 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.bgAccent} ${pillar.accent} border border-current/20 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
