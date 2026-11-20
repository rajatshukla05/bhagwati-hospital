import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { departments, doctors, hospitalInfo } from '../../data/hospitalData';

export interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDepartmentId?: string;
  preselectedDoctorId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedDepartmentId = '',
  preselectedDoctorId = '',
}) => {
  const [departmentId, setDepartmentId] = useState(preselectedDepartmentId);
  const [doctorId, setDoctorId] = useState(preselectedDoctorId);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('male');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update selection if preselected props change
  React.useEffect(() => {
    if (preselectedDepartmentId) setDepartmentId(preselectedDepartmentId);
    if (preselectedDoctorId) setDoctorId(preselectedDoctorId);
  }, [preselectedDepartmentId, preselectedDoctorId]);

  if (!isOpen) return null;

  // Filter doctors based on selected department
  const filteredDoctors = departmentId
    ? doctors.filter(doc => doc.departmentId === departmentId)
    : doctors;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    // Generate sample booking reference
    const refCode = `NMBH-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPatientPhone('');
    setSymptoms('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-elevated-lg border border-gold-500/30 max-w-2xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-navy-900 transition-colors p-1 rounded-full hover:bg-slate-100"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-ivory-200 pb-4">
              <span className="text-xs font-semibold tracking-widest text-teal-800 uppercase">
                New Maa Bhagwati Hospital Care Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900 mt-1">
                Schedule a Consultation
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Book an OPD consultation with our specialist doctors. Walk-ins are also supported during clinic hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Department Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Medical Department
                  </label>
                  <select
                    value={departmentId}
                    onChange={(e) => {
                      setDepartmentId(e.target.value);
                      setDoctorId(''); // reset doctor if department changes
                    }}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-ivory-50/50"
                  >
                    <option value="">All Departments / General Physician</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Specialist
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-ivory-50/50"
                  >
                    <option value="">First Available Specialist</option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.departmentName})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full text-sm rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full text-sm rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Age, Gender & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Age
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="115"
                    placeholder="Years"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Gender
                  </label>
                  <select
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-white"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-sm rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Time Slot Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Time Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPreferredTime('morning')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                      preferredTime === 'morning'
                        ? 'border-teal-800 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    Morning Slot (09:00 AM – 01:00 PM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredTime('evening')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                      preferredTime === 'evening'
                        ? 'border-teal-800 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    Evening Slot (03:00 PM – 07:00 PM)
                  </button>
                </div>
              </div>

              {/* Brief Symptoms / Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Medical Reason / Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your health concern or previous medical condition..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 bg-white"
                />
              </div>

              {/* Emergency Warning */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-crimson-50 border border-crimson-600/20 text-xs text-crimson-800">
                <AlertCircle className="w-4 h-4 shrink-0 text-crimson-600 mt-0.5" />
                <p>
                  <strong>For Acute Emergencies:</strong> Do not wait for an online appointment. Please proceed directly to our Emergency & Trauma Center or call our 24/7 hotline at{' '}
                  <span className="font-bold underline">{hospitalInfo.emergencyPhone}</span>.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <Button type="button" variant="ghost" onClick={handleResetAndClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md">
                  Confirm Consultation Request
                </Button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-800/20 text-teal-800 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-800/20 mb-2">
              Appointment Request Registered
            </span>

            <h3 className="font-serif text-3xl font-semibold text-navy-900 mb-2">
              Thank You, {patientName}
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Your appointment request has been recorded with booking reference code:
            </p>

            <div className="inline-block bg-ivory-100 border border-gold-500/40 rounded-xl px-6 py-3 mb-6">
              <span className="block text-xs uppercase tracking-wider text-slate-500">Booking Reference</span>
              <span className="font-mono text-2xl font-bold text-navy-900 tracking-wider">{bookingRef}</span>
            </div>

            <div className="text-left bg-ivory-50 border border-ivory-200 rounded-xl p-4 text-xs text-slate-700 space-y-2 mb-6">
              <div className="flex justify-between border-b border-ivory-200 pb-1.5">
                <span className="font-semibold text-navy-900">Patient:</span>
                <span>{patientName} ({patientAge || 'Age not specified'}, {patientGender})</span>
              </div>
              <div className="flex justify-between border-b border-ivory-200 pb-1.5">
                <span className="font-semibold text-navy-900">Hospital Desk Contact:</span>
                <span>{hospitalInfo.receptionPhone}</span>
              </div>
              <div className="flex justify-between border-b border-ivory-200 pb-1.5">
                <span className="font-semibold text-navy-900">Time Preference:</span>
                <span className="capitalize">{preferredTime} OPD Slot</span>
              </div>
              <p className="pt-1 text-slate-500 italic">
                Our care coordinator will send an SMS confirmation to <strong>{patientPhone}</strong>. Please arrive 15 minutes before your time slot with prior prescriptions or diagnostic files.
              </p>
            </div>

            <Button variant="primary" onClick={handleResetAndClose}>
              Done & Return to Website
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
