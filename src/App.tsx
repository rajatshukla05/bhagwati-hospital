import React, { useState } from 'react';
import { TopEmergencyBar } from './components/layout/TopEmergencyBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { EmergencyActionStrip } from './components/sections/EmergencyActionStrip';
import { EthosSection } from './components/sections/EthosSection';
import { DepartmentExplorer } from './components/sections/DepartmentExplorer';
import { DoctorDirectory } from './components/sections/DoctorDirectory';
import { InfrastructureGrid } from './components/sections/InfrastructureGrid';
import { PatientGuideTabs } from './components/sections/PatientGuideTabs';
import { HealthPackages } from './components/sections/HealthPackages';
import { TestimonialSlider } from './components/sections/TestimonialSlider';
import { FaqSection } from './components/sections/FaqSection';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/booking/ConsultationModal';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState<string>('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');

  const handleOpenBookingModal = (deptId?: string, doctorId?: string) => {
    setSelectedDeptId(deptId || '');
    setSelectedDoctorId(doctorId || '');
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-slate-800 selection:bg-teal-800 selection:text-white">
      
      {/* 1. 24/7 Emergency & Accessibility Top Utility Bar */}
      <TopEmergencyBar />

      {/* 2. Main Brand Navbar */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      <main className="flex-grow">
        {/* 3. Hero Section with Quick Consultation Dock */}
        <HeroSection onOpenBookingModal={(deptId) => handleOpenBookingModal(deptId)} />

        {/* 4. Critical Care & Emergency Action Strip */}
        <EmergencyActionStrip onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 5. Hospital Ethos & Sacred Care Philosophy */}
        <EthosSection />

        {/* 6. Centers of Clinical Excellence (Split-Screen Explorer) */}
        <DepartmentExplorer
          onSelectDepartmentForBooking={(deptId) => handleOpenBookingModal(deptId)}
        />

        {/* 7. Distinguished Specialists & Medical Faculty */}
        <DoctorDirectory
          onBookDoctor={(docId, deptId) => handleOpenBookingModal(deptId, docId)}
        />

        {/* 8. Clinical Infrastructure & Diagnostic Prowess */}
        <InfrastructureGrid />

        {/* 9. Patient Care & Family Guidance Roadmap */}
        <PatientGuideTabs />

        {/* 10. Preventative Care & Health Checkup Packages */}
        <HealthPackages
          onBookPackage={(packageTitle) => {
            handleOpenBookingModal();
          }}
        />

        {/* 11. Stories of Recovery & Community Trust */}
        <TestimonialSlider />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 13. Comprehensive Campus Directory & Footer */}
      <Footer />

      {/* Global Consultation Booking Dialog */}
      <ConsultationModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        preselectedDepartmentId={selectedDeptId}
        preselectedDoctorId={selectedDoctorId}
      />

    </div>
  );
};

export default App;
