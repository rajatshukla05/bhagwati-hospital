import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { hospitalInfo } from '../../data/hospitalData';

export interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Specialties', href: '#departments' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Infrastructure', href: '#facilities' },
    { label: 'Patient Guide', href: '#patient-guide' },
    { label: 'Health Packages', href: '#packages' },
    { label: 'Ethos & About', href: '#ethos' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-elevated border-b border-gold-500/20 py-2.5'
          : 'bg-white border-b border-ivory-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Lockup */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="New Maa Bhagwati Hospital Home"
          >
            {/* Original Untouched Emblem */}
            <div className="relative shrink-0">
              <img
                src="/logo.jpeg"
                alt="New Maa Bhagwati Hospital Emblem"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 rounded-full"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-navy-900 group-hover:text-teal-800 transition-colors leading-tight">
                New Maa Bhagwati
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-600">
                  Hospital
                </span>
                <span className="text-[10px] text-slate-400 font-sans">• Multi-Specialty & Trauma Care</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-teal-800 hover:bg-ivory-100/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Emergency Call Icon */}
            <a
              href={`tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`}
              className="p-2 text-crimson-600 hover:bg-crimson-50 rounded-lg transition-colors border border-crimson-600/20"
              title="Quick Emergency Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Appointment CTA */}
            <Button
              variant="primary"
              size="sm"
              iconLeft={<Calendar className="w-4 h-4" />}
              onClick={onOpenBookingModal}
              className="shadow-sm"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="p-2 bg-teal-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-ivory-200 px-4 pt-3 pb-6 shadow-elevated">
          <div className="flex flex-col space-y-1 pb-4 border-b border-ivory-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-800 hover:bg-ivory-100 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <Button
              variant="primary"
              fullWidth
              size="md"
              iconLeft={<Calendar className="w-4 h-4" />}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal();
              }}
            >
              Book OPD Consultation
            </Button>

            <a
              href={`tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-crimson-600 text-white font-semibold text-sm hover:bg-crimson-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency: {hospitalInfo.emergencyPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
