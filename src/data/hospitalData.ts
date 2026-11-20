/**
 * NEW MAA BHAGWATI HOSPITAL - CENTRALIZED DATA STORE
 * 
 * NOTE FOR CLIENT & DEVELOPERS:
 * This file serves as the Single Source of Truth for all hospital content.
 * All doctor profiles, department details, facilities, contact info, and health packages
 * here are structured sample records ready to be replaced with the hospital's actual verified data.
 */

export interface HospitalInfo {
  name: string;
  tagline: string;
  subTagline: string;
  establishedPlaceholder: string;
  emergencyPhone: string;
  ambulancePhone: string;
  receptionPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  opdTimings: string;
  emergencyAvailability: string;
  isSampleData: boolean;
}

export interface Department {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  colorTone: string;
  headOfDepartment: string;
  procedures: string[];
  equipment: string[];
  bedCapacityPlaceholder: string;
}

export interface Doctor {
  id: string;
  name: string;
  departmentId: string;
  departmentName: string;
  designation: string;
  qualifications: string;
  experienceYears: number;
  opdDays: string[];
  opdHours: string;
  languages: string[];
  bio: string;
  image: string;
  isAcceptingNewPatients: boolean;
  sampleNotice: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  badge: string;
  image: string;
}

export interface HealthPackage {
  id: string;
  title: string;
  targetAudience: string;
  testCount: number;
  priceNote: string;
  isPopular?: boolean;
  testsIncluded: string[];
  preparationNotice: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  relationOrAge: string;
  department: string;
  treatingDoctor: string;
  story: string;
  rating: number;
  date: string;
  verifiedReview: boolean;
}

export interface TpaPartner {
  name: string;
  category: 'Government / Ayushman' | 'Private Insurance' | 'Corporate TPA';
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Emergency' | 'Admission & TPA' | 'OPD' | 'General';
}

// -------------------------------------------------------------
// CENTRALIZED DATA DEFINITIONS
// -------------------------------------------------------------

export const hospitalInfo: HospitalInfo = {
  name: "New Maa Bhagwati Hospital",
  tagline: "Dignity in Healing, Excellence in Medicine",
  subTagline: "Compassionate multi-specialty healthcare and 24/7 emergency response dedicated to patient wellness and family trust.",
  establishedPlaceholder: "Serving the Community with Care",
  emergencyPhone: "+91 98765 43210", // Sample Emergency Hotline
  ambulancePhone: "+91 98765 43211", // Sample Ambulance Hotline
  receptionPhone: "+91 (0522) 2345-678", // Sample Landline
  whatsappNumber: "+91 98765 43212", // Sample WhatsApp
  email: "care@newmaabhagwatihospital.com",
  address: {
    line1: "Main Medical Enclave, Civil Road",
    line2: "Opposite Mother & Child Park",
    city: "Regional City Center",
    state: "Uttar Pradesh",
    pincode: "226001",
    landmark: "Near Central Crossways",
  },
  opdTimings: "Monday – Saturday: 09:00 AM – 08:00 PM | Sunday: 10:00 AM – 02:00 PM",
  emergencyAvailability: "24 Hours / 7 Days a Week (Trauma & Critical Care)",
  isSampleData: true,
};

export const departments: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology & Cardiac Care",
    shortDescription: "Comprehensive diagnostic cardiology, ICU cardiac monitoring, and preventive cardiovascular wellness.",
    fullDescription: "Our Cardiac Care wing provides rapid-response evaluation for acute chest pain, 24/7 cardiac monitoring in our Intensive Care Unit, non-invasive diagnostics (2D Echo, TMT, Holter), and dedicated post-cardiac rehabilitation management.",
    iconName: "HeartPulse",
    colorTone: "navy",
    headOfDepartment: "Dr. A. K. Sharma (Sample MD, DM)",
    procedures: [
      "24/7 Acute Coronary & Chest Pain Evaluation",
      "Digital Echocardiography (2D Echo & Colour Doppler)",
      "Treadmill Stress Testing (TMT)",
      "24-Hour Ambulatory Holter Monitoring",
      "Hypertension & Heart Failure Management Clinic"
    ],
    equipment: [
      "Philips Affinity Colour Doppler Echo",
      "GE Healthcare Stress Test System",
      "Centralized Multi-Para Telemetry Monitors"
    ],
    bedCapacityPlaceholder: "12 Dedicated Cardiac Care Beds"
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics & Trauma Surgery",
    shortDescription: "Round-the-clock emergency trauma fixation, joint preservation, spine care, and fracture rehabilitation.",
    fullDescription: "Specialized in emergency orthopedic trauma management, fracture reduction, arthroscopic joint evaluation, degenerative arthritis therapy, and comprehensive physiotherapy rehabilitation.",
    iconName: "Bone",
    colorTone: "teal",
    headOfDepartment: "Dr. Rajesh V. Singh (Sample MS Ortho)",
    procedures: [
      "24/7 Emergency Polytrauma & Fracture Fixation",
      "Knee, Hip & Shoulder Arthroscopy & Reconstruction",
      "Degenerative Joint Disease & Osteoarthritis Clinics",
      "Pediatric Orthopedic & Deformity Correction",
      "Physiotherapy & Post-Surgical Mobility Rehab"
    ],
    equipment: [
      "High-Frequency C-Arm Image Intensifier",
      "Pneumatic Surgical Drill & Saw Systems",
      "Dedicated Orthopedic Traction & Fracture Tables"
    ],
    bedCapacityPlaceholder: "Modular Ortho OT Suite + Dedicated Post-Op Ward"
  },
  {
    id: "mother-child",
    name: "Mother & Child Care (Obs & Gynae)",
    shortDescription: "Compassionate maternal health, high-risk pregnancy management, painless labor, and neonatal care.",
    fullDescription: "Reflecting the hospital's foundational spirit of maternal protection, our department offers compassionate obstetrics, advanced gynaecological laparoscopy, modern labor delivery suites, and neonatal intensive nursery care.",
    iconName: "Baby",
    colorTone: "lotus",
    headOfDepartment: "Dr. Meenakshi Srivastava (Sample MS, DGO)",
    procedures: [
      "Comprehensive Antenatal & Postnatal Mother Care",
      "Normal & High-Risk Pregnancy Management",
      "Minimally Invasive Gynaecological Laparoscopy",
      "Menopause & Adolescent Health Advisory",
      "Neonatal Resuscitation & Newborn Phototherapy"
    ],
    equipment: [
      "Modern Labour Delivery Recovery (LDR) Suites",
      "High-Resolution 4D Obstetric Ultrasound",
      "Warmers & Phototherapy Units for Newborns"
    ],
    bedCapacityPlaceholder: "Private Mother-Child Suites + Special Care Nursery"
  },
  {
    id: "general-surgery",
    name: "General & Laparoscopic Surgery",
    shortDescription: "Minimally invasive keyhole surgeries, emergency acute abdomen care, hernia repair, and wound clinic.",
    fullDescription: "Equipped with modular laparoscopic towers, performing keyhole gallbladder removal, hernia repairs, appendix surgeries, and emergency abdominal interventions with minimal scarring and expedited recovery.",
    iconName: "Scissors",
    colorTone: "navy",
    headOfDepartment: "Dr. S. K. Gupta (Sample MS, FIAGES)",
    procedures: [
      "Laparoscopic Cholecystectomy (Gallbladder)",
      "Laparoscopic Appendectomy & Hernia Repairs",
      "Emergency Gastrointestinal Surgery & Perforation Care",
      "Thyroid, Breast, & Soft Tissue Tumour Excision",
      "Diabetic Foot & Advanced Wound Care Clinics"
    ],
    equipment: [
      "Karl Storz Full HD Laparoscopy Tower",
      "Erbe Electrosurgical Unit with Vessel Sealer",
      "Laminar Airflow Modular Operation Theatres"
    ],
    bedCapacityPlaceholder: "Dual Modular Operation Theatres"
  },
  {
    id: "critical-care",
    name: "Critical Care & ICU (24/7)",
    shortDescription: "Multidisciplinary intensive care, invasive mechanical ventilation, continuous haemodynamic monitoring.",
    fullDescription: "A state-of-the-art closed ICU operated 24/7 by experienced intensivists and certified critical care nursing staff, managing multi-organ failure, severe sepsis, respiratory distress, and post-operative monitoring.",
    iconName: "Activity",
    colorTone: "crimson",
    headOfDepartment: "Dr. R. P. Verma (Sample MD Anaesthesia / IDCCM)",
    procedures: [
      "Advanced Invasive & Non-Invasive Mechanical Ventilation",
      "Central Venous & Arterial Pressure Monitoring",
      "Bedside Hemodialysis & CRRT for Acute Renal Injury",
      "Emergency Airway & Percutaneous Tracheostomy",
      "Infection Control Isolation Protocols"
    ],
    equipment: [
      "Hamilton / Dräger High-End Intensive Care Ventilators",
      "Philips Multi-Channel Invasive Patient Monitors",
      "Dedicated Bedside Ultrasound & Blood Gas Analyzer (ABG)"
    ],
    bedCapacityPlaceholder: "Multi-Bed High-Dependency & ICU Facility"
  },
  {
    id: "internal-medicine",
    name: "General & Internal Medicine",
    shortDescription: "Holistic diagnosis and long-term management of diabetes, hypertension, infectious fevers, and chronic disorders.",
    fullDescription: "Primary diagnosis and evidence-based therapeutic management for complex systemic illnesses, metabolic syndrome, monsoon fevers (Dengue, Malaria, Typhoid), and geriatric patient care.",
    iconName: "Stethoscope",
    colorTone: "teal",
    headOfDepartment: "Dr. Anita Pandey (Sample MD Medicine)",
    procedures: [
      "Comprehensive Diabetic Care & Complication Screening",
      "Seasonal Fever, Dengue, & Infectious Disease Triage",
      "Chronic Respiratory Diseases (Asthma, COPD)",
      "Senior Citizen Comprehensive Health Evaluation",
      "Preventive Health Checkup Review & Counselling"
    ],
    equipment: [
      "Point-of-Care Rapid Diagnostic Analyzer",
      "Spirometry (Lung Function Testing)",
      "Continuous Blood Glucose Monitoring (CGM)"
    ],
    bedCapacityPlaceholder: "Inpatient Medical Wards & Deluxe Private Rooms"
  }
];

export const doctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. A. K. Sharma",
    departmentId: "cardiology",
    departmentName: "Cardiology",
    designation: "Senior Consultant - Interventional & Clinical Cardiology",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    experienceYears: 18,
    opdDays: ["Monday", "Wednesday", "Friday"],
    opdHours: "10:00 AM – 02:00 PM",
    languages: ["Hindi", "English"],
    bio: "Sample profile: Dedicated clinical cardiologist with extensive experience in acute coronary syndromes, preventive cardiac health, and managing complex hypertension.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    isAcceptingNewPatients: true,
    sampleNotice: "Sample Doctor Profile — Will be updated with hospital's verified faculty"
  },
  {
    id: "doc-2",
    name: "Dr. Meenakshi Srivastava",
    departmentId: "mother-child",
    departmentName: "Obstetrics & Gynaecology",
    designation: "Head of Department & Senior Gynaecologist",
    qualifications: "MBBS, MS (Obs & Gynae), DGO, Fellowship in Minimal Access",
    experienceYears: 16,
    opdDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    opdHours: "11:00 AM – 04:00 PM",
    languages: ["Hindi", "English"],
    bio: "Sample profile: Renowned obstetrician focusing on maternal wellbeing, high-risk delivery planning, compassionate childbirth, and minimally invasive laparoscopy.",
    image: "https://images.unsplash.com/photo-1594824813589-354316d860e6?auto=format&fit=crop&q=80&w=600",
    isAcceptingNewPatients: true,
    sampleNotice: "Sample Doctor Profile — Will be updated with hospital's verified faculty"
  },
  {
    id: "doc-3",
    name: "Dr. Rajesh V. Singh",
    departmentId: "orthopaedics",
    departmentName: "Orthopaedics & Trauma",
    designation: "Senior Consultant Orthopaedic & Joint Surgeon",
    qualifications: "MBBS, MS (Orthopaedics), M.Ch (Ortho)",
    experienceYears: 15,
    opdDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    opdHours: "01:00 PM – 06:00 PM",
    languages: ["Hindi", "English"],
    bio: "Sample profile: Expert in emergency polytrauma stabilization, complex intra-articular fractures, joint reconstruction, and geriatric mobility restoration.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    isAcceptingNewPatients: true,
    sampleNotice: "Sample Doctor Profile — Will be updated with hospital's verified faculty"
  },
  {
    id: "doc-4",
    name: "Dr. S. K. Gupta",
    departmentId: "general-surgery",
    departmentName: "General & Laparoscopic Surgery",
    designation: "Senior Consultant Minimal Access & General Surgeon",
    qualifications: "MBBS, MS (General Surgery), FIAGES, FMAS",
    experienceYears: 20,
    opdDays: ["Tuesday", "Thursday", "Friday"],
    opdHours: "10:00 AM – 03:00 PM",
    languages: ["Hindi", "English"],
    bio: "Sample profile: Pioneer in keyhole abdominal procedures, single-incision appendectomy, advanced hernia repairs, and surgical critical care.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
    isAcceptingNewPatients: true,
    sampleNotice: "Sample Doctor Profile — Will be updated with hospital's verified faculty"
  },
  {
    id: "doc-5",
    name: "Dr. Anita Pandey",
    departmentId: "internal-medicine",
    departmentName: "General & Internal Medicine",
    designation: "Consultant Physician & Diabetologist",
    qualifications: "MBBS, MD (Internal Medicine), PGD (Diabetology)",
    experienceYears: 12,
    opdDays: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
    opdHours: "09:00 AM – 02:00 PM",
    languages: ["Hindi", "English"],
    bio: "Sample profile: Dedicated physician specializing in glycemic management, chronic multisystem illnesses, lifestyle disorders, and post-viral recovery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    isAcceptingNewPatients: true,
    sampleNotice: "Sample Doctor Profile — Will be updated with hospital's verified faculty"
  },
  {
    id: "doc-6",
    name: "Dr. R. P. Verma",
    departmentId: "critical-care",
    departmentName: "Critical Care & ICU",
    designation: "Director - Critical Care Medicine & Anaesthesia",
    qualifications: "MBBS, MD (Anaesthesiology), IDCCM, EDIC",
    experienceYears: 17,
    opdDays: ["24/7 ICU On-Duty & Critical Rounds"],
    opdHours: "Emergency & ICU Coverage",
    languages: ["Hindi", "English"],
    bio: "Sample profile: Certified intensivist managing acute emergency resuscitations, sepsis bundles, neuro-critical care, and round-the-clock ICU surveillance.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    isAcceptingNewPatients: true,
    sampleNotice: "Sample Doctor Profile — Will be updated with hospital's verified faculty"
  }
];

export const facilities: Facility[] = [
  {
    id: "fac-1",
    title: "Modular Operation Theatres with Laminar Air Flow",
    category: "Surgical Prowess",
    description: "Equipped with HEPA-filtered laminar airflow, seamless anti-bacterial walls, and modern surgical consoles for zero-infection operative sterility.",
    highlights: ["Class 10,000 Cleanroom Standard", "Full HD Laparoscopy & Imaging", "Centralized Medical Gas Piping"],
    badge: "Surgical Excellence",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-2",
    title: "24/7 Advanced Intensive Care Unit (ICU)",
    category: "Critical Care",
    description: "Round-the-clock intensivist coverage, motorized ICU beds, invasive hemodynamic monitoring, and isolated step-down dependency beds.",
    highlights: ["1:1 Nurse-to-Patient Ratio for Critical Beds", "Advanced Multi-Mode Ventilators", "Integrated Point-of-Care Blood Gas"],
    badge: "24/7 Critical Care",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-3",
    title: "Comprehensive Radiology & Automated Pathology",
    category: "Diagnostics",
    description: "Fully automated biochemistry analyzers, digital X-ray, high-resolution ultrasound, and rapid turnaround emergency lab tests.",
    highlights: ["Digital Low-Radiation X-Ray", "4D Ultrasound & Colour Doppler", "Rapid Cardiac Marker (Troponin) Panels"],
    badge: "Accurate Diagnostics",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fac-4",
    title: "24/7 Emergency, Trauma & Ambulance Services",
    category: "Urgent Care",
    description: "Dedicated triage bay with immediate resuscitation equipment, mobile ICU ambulance with oxygen and defibrillator support.",
    highlights: ["Immediate Zero-Delay Triage", "Life-Support Equipped Ambulance", "On-Call Emergency Trauma Surgeons"],
    badge: "Life-Saving Response",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800"
  }
];

export const healthPackages: HealthPackage[] = [
  {
    id: "pkg-1",
    title: "Swasthya Basic Health Check",
    targetAudience: "Adults seeking annual wellness screening & early detection",
    testCount: 42,
    priceNote: "Affordable Community Health Initiative",
    testsIncluded: [
      "Complete Blood Count (CBC) with ESR",
      "Fasting Blood Sugar & HbA1c",
      "Liver Function Tests (SGOT, SGPT, Bilirubin)",
      "Kidney Function Tests (Serum Creatinine, Blood Urea)",
      "Urine Routine & Microscopic Examination",
      "Physician Consultation & BMI Assessment"
    ],
    preparationNotice: "Requires 10-12 hours overnight fasting prior to morning sample collection."
  },
  {
    id: "pkg-2",
    title: "Maa Bhagwati Executive Comprehensive Check",
    targetAudience: "Working professionals & adults 35+ seeking vital organ evaluation",
    testCount: 68,
    priceNote: "Most Recommended Preventive Package",
    isPopular: true,
    testsIncluded: [
      "Complete Hematology & Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)",
      "Advanced Glycemic Index & HbA1c",
      "Comprehensive Liver & Kidney Panels",
      "Digital Chest X-Ray & Resting ECG",
      "Ultrasound Whole Abdomen & Pelvis",
      "Thyroid Stimulating Hormone (TSH)",
      "Senior Physician & Dietician Counselling"
    ],
    preparationNotice: "Overnight fasting required. Full bladder needed for ultrasound exam."
  },
  {
    id: "pkg-3",
    title: "Senior Citizen Cardiac & Wellness Package",
    targetAudience: "Individuals aged 55+ with history of hypertension or cardiac risk",
    testCount: 55,
    priceNote: "Targeted Geriatric Screening",
    testsIncluded: [
      "2D Echocardiography with Colour Doppler",
      "Cardiologist Consultation & Resting 12-Lead ECG",
      "Complete Lipid Profile & Serum Electrolytes",
      "Kidney Function with eGFR & Uric Acid",
      "HbA1c & Fasting Glucose",
      "Bone Health (Calcium & Vitamin D3 Screen)"
    ],
    preparationNotice: "Please bring all ongoing medications and previous cardiac reports."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    patientName: "Rameshwar Prasad Pandey",
    relationOrAge: "62 years, Civil Lines",
    department: "Orthopaedics & Trauma",
    treatingDoctor: "Dr. Rajesh V. Singh",
    story: "Sample testimonial: When I suffered a severe leg fracture late in the evening, the emergency team at New Maa Bhagwati Hospital acted without a moment's delay. The nursing care was attentive like family, and within a few weeks I was walking again comfortably.",
    rating: 5,
    date: "October 2026",
    verifiedReview: true
  },
  {
    id: "test-2",
    patientName: "Priyanka & Vivek Mishra",
    relationOrAge: "New Parents",
    department: "Mother & Child Care",
    treatingDoctor: "Dr. Meenakshi Srivastava",
    story: "Sample testimonial: Our first baby was delivered at New Maa Bhagwati Hospital. The warmth, hygiene of the delivery room, and Dr. Meenakshi's calming reassurance made our journey effortless and filled with joy. We are deeply grateful to the entire team.",
    rating: 5,
    date: "September 2026",
    verifiedReview: true
  },
  {
    id: "test-3",
    patientName: "Harish Chandra Verma",
    relationOrAge: "54 years, Gomti Nagar",
    department: "General & Laparoscopic Surgery",
    treatingDoctor: "Dr. S. K. Gupta",
    story: "Sample testimonial: I had my gallbladder surgery performed via laparoscopy. Everything from the clear explanation before admission to the painless discharge within 36 hours was executed with high professional discipline and transparent billing.",
    rating: 5,
    date: "August 2026",
    verifiedReview: true
  }
];

export const tpaPartners: TpaPartner[] = [
  {
    name: "Ayushman Bharat PM-JAY",
    category: "Government / Ayushman",
    description: "Empaneled for eligible beneficiaries with dedicated Ayushman Mitra assistance desk."
  },
  {
    name: "Star Health & Allied Insurance",
    category: "Private Insurance",
    description: "Direct cashless hospitalization approval with pre-authorization support."
  },
  {
    name: "HDFC ERGO General Insurance",
    category: "Private Insurance",
    description: "Fast-track digital cashless claims for planned and emergency admissions."
  },
  {
    name: "ICICI Lombard Health Care",
    category: "Private Insurance",
    description: "Seamless hospital billing integration with paperless settlement."
  },
  {
    name: "Medi Assist TPA",
    category: "Corporate TPA",
    description: "Serving leading corporate employees with cashless admission authorization."
  },
  {
    name: "Paramount Health Services TPA",
    category: "Corporate TPA",
    description: "Comprehensive coordination for PSU, bank employees, and private policyholders."
  }
];

export const faqs: FaqItem[] = [
  {
    question: "What should I do in case of an acute medical emergency?",
    answer: "Call our 24/7 Emergency Line directly at +91 98765 43210 or our Ambulance Helpline at +91 98765 43211. Our Emergency Triage team is available 24 hours a day, 365 days a year with on-duty casualty medical officers and trauma surgeons ready to assist immediately upon arrival.",
    category: "Emergency"
  },
  {
    question: "How do I book an OPD consultation with a specialist doctor?",
    answer: "You can book directly using the 'Book Consultation' form on this website, call our OPD Reception at +91 (0522) 2345-678, or visit the hospital registration desk. Walk-in appointments are also accommodated based on doctor availability.",
    category: "OPD"
  },
  {
    question: "Does the hospital support cashless mediclaim and insurance policies?",
    answer: "Yes, New Maa Bhagwati Hospital has an active Cashless Insurance & TPA Helpdesk that assists patients with pre-authorization and claims across major private insurers (Star Health, HDFC ERGO, ICICI Lombard) and corporate TPAs (Medi Assist, Paramount, Vidal). Please bring the patient's health insurance card and Aadhaar ID during admission.",
    category: "Admission & TPA"
  },
  {
    question: "What are the visiting hours for relatives of admitted patients?",
    answer: "To ensure patient rest and stringent infection control: General Wards visiting hours are 04:00 PM to 07:00 PM daily. ICU patient visits are restricted to 05:00 PM to 06:00 PM for one attendant at a time wearing protective sanitary covers.",
    category: "General"
  }
];
