import React, { useState } from 'react';
import { 
  HeartPulse, 
  Bone, 
  Baby, 
  Scissors, 
  Activity, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  UserCheck 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { departments, Department } from '../../data/hospitalData';

export interface DepartmentExplorerProps {
  onSelectDepartmentForBooking: (deptId: string) => void;
}

export const DepartmentExplorer: React.FC<DepartmentExplorerProps> = ({
  onSelectDepartmentForBooking,
}) => {
  const [activeDeptId, setActiveDeptId] = useState(departments[0].id);

  const activeDept = departments.find((d) => d.id === activeDeptId) || departments[0];

  // Helper to map department icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return HeartPulse;
      case 'Bone': return Bone;
      case 'Baby': return Baby;
      case 'Scissors': return Scissors;
      case 'Activity': return Activity;
      default: return Stethoscope;
    }
  };

  return (
    <section id="departments" className="py-20 lg:py-28 bg-ivory-50/80 border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Centers of Clinical Excellence"
          title="Specialized Departments Built Around Patient Recovery"
          description="From acute emergency trauma to minimally invasive laparoscopic surgery and maternal care, our departments are led by distinguished specialists and supported by modern diagnostic technology."
        />

        {/* Split-View Interactive Department Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Department Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 px-1">
              Select Department to Explore
            </span>

            {departments.map((dept) => {
              const Icon = getIcon(dept.iconName);
              const isActive = dept.id === activeDeptId;

              return (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setActiveDeptId(dept.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-navy-900 text-white border-navy-950 shadow-elevated'
                      : 'bg-white text-slate-700 border-ivory-200 hover:border-gold-500/40 hover:bg-ivory-100/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-teal-800 text-gold-300'
                          : 'bg-ivory-100 text-teal-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-semibold leading-tight ${
                          isActive ? 'text-white' : 'text-navy-900'
                        }`}
                      >
                        {dept.name}
                      </h3>
                      <p
                        className={`text-xs line-clamp-1 mt-0.5 ${
                          isActive ? 'text-ivory-200/70' : 'text-slate-500'
                        }`}
                      >
                        {dept.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-gold-400 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Department Deep-Dive Stage (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-elevated border border-gold-500/25 relative overflow-hidden">
            
            {/* Header with Title & Lead Doctor Badge */}
            <div className="border-b border-ivory-200 pb-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <Badge variant="teal" dot>
                  Active Department
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-ivory-100 px-3 py-1 rounded-full border border-ivory-300">
                  {activeDept.bedCapacityPlaceholder}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mt-1">
                {activeDept.name}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-slate-600">
                <UserCheck className="w-4 h-4 text-teal-800 shrink-0" />
                <span>Department Lead: <strong>{activeDept.headOfDepartment}</strong></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {activeDept.fullDescription}
            </p>

            {/* Key Clinical Procedures */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-800" />
                Key Clinical Procedures & Treatment Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDept.procedures.map((proc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg bg-ivory-50 border border-ivory-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-2 shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Equipment & Technology */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-gold-600" />
                Diagnostic Infrastructure & Operative Technology
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDept.equipment.map((eq, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-ivory-100 text-slate-800 px-3 py-1.5 rounded-lg border border-ivory-300"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 border-t border-ivory-200 flex flex-wrap items-center justify-between gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onSelectDepartmentForBooking(activeDept.id)}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Book with {activeDept.name.split('&')[0]} Specialist
              </Button>

              <span className="text-xs text-slate-500 italic">
                Walk-ins accommodated during OPD hours
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
