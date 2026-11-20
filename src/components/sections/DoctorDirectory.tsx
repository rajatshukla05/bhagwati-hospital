import React, { useState } from 'react';
import { Calendar, Clock, GraduationCap, Languages, Info, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { doctors, departments, Doctor } from '../../data/hospitalData';

export interface DoctorDirectoryProps {
  onBookDoctor: (doctorId: string, deptId: string) => void;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({ onBookDoctor }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredDoctors = selectedFilter === 'all'
    ? doctors
    : doctors.filter(doc => doc.departmentId === selectedFilter);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Medical Faculty & Specialists"
          title="Distinguished Doctors Committed to Your Well-Being"
          description="Experienced consultants across major clinical specialties providing individualized care, evidence-based diagnoses, and empathetic family counselling."
        />

        {/* Client Transparency Notice */}
        <div className="mb-8 p-4 rounded-xl bg-ivory-100 border border-gold-500/40 text-xs sm:text-sm text-slate-700 flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
          <p>
            <strong>Editorial Note for Hospital Administration:</strong> The doctor profiles below are structured sample records demonstrating real-world clinical layout and OPD schedule formatting. When actual doctor bios, verified degrees, and photographs are provided, they will be updated in the centralized data file.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedFilter === 'all'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-ivory-100 text-slate-700 hover:bg-ivory-200'
            }`}
          >
            All Specialties ({doctors.length})
          </button>
          {departments.map((dept) => {
            const count = doctors.filter(d => d.departmentId === dept.id).length;
            if (count === 0) return null;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setSelectedFilter(dept.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedFilter === dept.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-ivory-100 text-slate-700 hover:bg-ivory-200'
                }`}
              >
                {dept.name.split('&')[0]} ({count})
              </button>
            );
          })}
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc: Doctor) => (
            <div
              key={doc.id}
              className="bg-ivory-50/60 rounded-2xl border border-ivory-200 hover:border-gold-500/50 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image & Experience Badge */}
              <div className="relative h-64 overflow-hidden bg-navy-950">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                
                {/* Department Tag Overlay */}
                <div className="absolute top-3 left-3">
                  <Badge variant="navy">
                    {doc.departmentName}
                  </Badge>
                </div>

                {/* Experience Pill Overlay */}
                <div className="absolute bottom-3 right-3 bg-navy-900/90 backdrop-blur-sm text-gold-300 px-3 py-1 rounded-full text-xs font-semibold border border-gold-500/30">
                  {doc.experienceYears}+ Years Exp.
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-900 group-hover:text-teal-800 transition-colors">
                    {doc.name}
                  </h3>

                  <p className="text-xs font-semibold text-teal-800 mt-1 mb-2">
                    {doc.designation}
                  </p>

                  {/* Qualifications */}
                  <div className="flex items-start gap-1.5 text-xs text-slate-600 mb-3 bg-white p-2 rounded-lg border border-ivory-200">
                    <GraduationCap className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{doc.qualifications}</span>
                  </div>

                  {/* OPD Schedule */}
                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-ivory-200 pt-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{doc.opdHours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{doc.opdDays.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Languages: {doc.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => onBookDoctor(doc.id, doc.departmentId)}
                  iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Book OPD Consultation
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
