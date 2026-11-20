# New Maa Bhagwati Hospital — Digital Web Platform

A digital web platform and brand experience designed for **New Maa Bhagwati Hospital**.

## Brand Identity & Aesthetic Philosophy

* **Primary Emblem**: Medallion seal of Maa Bhagwati with serene closed eyes, sacred kumkum, blooming pink lotus (*Padma*), and cradling healing hands.
* **Palette**:
  * Imperial Navy Blue (`#0B2545`)
  * Sanctuary Deep Teal (`#0D6E77`)
  * Regal Burnished Gold (`#C5A059`)
  * Healing Vermilion Red (`#C81E2B`)
  * Alabaster Warm Ivory (`#FAF8F5`)
* **Typography**:
  * Display & Titles: *Cormorant Garamond* & *Cinzel*
  * UI, Forms & Clinical Schedules: *Plus Jakarta Sans*

---

## Architectural Highlights

1. **24/7 Emergency Header Strip**: Instant trauma hotline, ambulance dispatch, and clinic timings.
2. **Hero Sanctuary & Quick Consultation Dock**: Asymmetrical composition featuring the cradling frame, NABH quality seal, and a 3-step slot triage dropdown.
3. **4-Pillar Critical Care Action Strip**: Fast-track routing for Emergency Trauma, OPD Appointments, Cashless Mediclaim & TPA Helpdesk, and Diagnostic Lab Reports.
4. **Hospital Ethos & Sacred Care Philosophy**: A deep navy architectural narrative section linking the protective maternal ethos of Maa Bhagwati to modern evidence-based clinical science.
5. **Centers of Clinical Excellence**: Interactive split-screen department explorer (Cardiology, Orthopaedics, Mother & Child, General Surgery, Critical Care & ICU, Internal Medicine).
6. **Specialists & Medical Faculty Roster**: Filterable doctor directory with qualifications, experience, OPD hours, and one-click booking triggers.
7. **Infrastructure & Diagnostics**: Visual showcase of Modular OTs with Laminar Air Flow, 24/7 ICU beds, Digital Radiology/Pathology, and Ambulance fleet.
8. **Patient Care Roadmap**: Tabbed guidance on Admissions/Discharge, Cashless Insurance & TPAs (Ayushman Bharat empaneled), and Visitor Guidelines.
9. **Preventative Health Packages**: Structured screening tiers (Swasthya Basic, Executive Comprehensive, Senior Citizen Cardiac).
10. **Testimonials & Recovery Stories**: Verified patient recovery narratives.
11. **Accordion FAQs & 24/7 Campus Directory**: Emergency contact extensions and regulatory disclaimers.
12. **Interactive Consultation Booking Modal**: Automated booking reference code generation (`NMBH-XXXX`).

---

## Centralized Sample Data Layer

All hospital content is decoupled from components and managed in:
`src/data/hospitalData.ts`

When confirmed hospital data is provided by the administration, editing this single file immediately updates the entire platform.

---

## Tech Stack

* **Framework**: React 18 with TypeScript
* **Tooling & Bundler**: Vite
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Typography**: Google Fonts (Cormorant Garamond, Cinzel, Plus Jakarta Sans)

---

## Getting Started

### Prerequisites
* Node.js (v18+)
* npm (v9+)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd "bhagwati hospital"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
