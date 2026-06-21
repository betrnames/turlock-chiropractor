export interface Chiropractor {
  id: string
  name: string
  doctor: string
  address: string
  phone: string
  rating: number
  reviewCount: number
  specialties: string[]
  hours: string
  website?: string
  highlight: string
  yearsExp?: number
}

export const chiropractors: Chiropractor[] = [
  {
    id: "crawford",
    name: "Crawford Chiropractic",
    doctor: "Dr. Lane Crawford, DC",
    address: "895 E Main St, Turlock, CA 95380",
    phone: "(209) 216-5588",
    rating: 5.0,
    reviewCount: 32,
    specialties: ["Sports Injuries", "Pediatric", "Geriatric", "Auto Accidents", "Wellness Care"],
    hours: "Mon-Tue, Thu: 9am-4pm | Wed: 9am-6pm | Sat: 9am-12pm",
    website: "https://www.chiropractorturlock.com",
    highlight: "Voted one of Turlock's top chiropractors. Known for a gentle, professional approach and same-day appointments.",
  },
  {
    id: "valley",
    name: "Valley Chiropractic Care",
    doctor: "Dr. Christopher Akin, DC",
    address: "1801 Colorado Ave, Ste 150, Turlock, CA 95382",
    phone: "(209) 622-3304",
    rating: 4.8,
    reviewCount: 18,
    specialties: ["Upper Cervical", "Active Release Technique (A.R.T)", "Chronic Conditions", "Sports Medicine"],
    hours: "Mon-Thu: 8am-5pm | Fri: 8am-1:30pm",
    website: "https://www.valleychirocare.com",
    highlight: "The only Active Release Techniques (A.R.T) provider in the Central Valley. Specializes in chronic and complex cases.",
  },
  {
    id: "turlock-family",
    name: "Turlock Family Chiropractic",
    doctor: "Dr. Greg T. Jones, DC",
    address: "2360 W Monte Vista Ave, Turlock, CA 95382",
    phone: "(209) 668-3841",
    rating: 4.6,
    reviewCount: 48,
    specialties: ["Corrective Care", "Back Pain", "Neck Pain", "Sciatica", "Scoliosis"],
    hours: "Mon, Wed: 8am-12pm & 2pm-6pm | Thu: 2pm-6pm | Fri: 8am-12pm",
    website: "https://www.turlockchiro.com",
    highlight: "Offers free consultations. Specializes in corrective chiropractic care for long-term pain relief.",
  },
  {
    id: "atkinson",
    name: "Atkinson Chiropractic",
    doctor: "Dr. David Atkinson, DC",
    address: "130 Regis St, Ste A, Turlock, CA 95382",
    phone: "(209) 554-2170",
    rating: 4.9,
    reviewCount: 13,
    specialties: ["Family Care", "All Ages", "Pain Management", "Wellness"],
    hours: "Mon, Wed: 8am-6pm | Tue, Thu: 9am-6pm | Fri: 9am-12pm",
    website: "https://atkinsonchiroca.com",
    highlight: "Voted Best Chiropractor in Turlock multiple times. Nearly 35 years of experience treating patients of all ages.",
    yearsExp: 35,
  },
  {
    id: "health-science",
    name: "Health & Science Chiropractic",
    doctor: "Dr. Betoushana, DC",
    address: "800 Wayside Dr, Turlock, CA 95380",
    phone: "(209) 667-7333",
    rating: 4.7,
    reviewCount: 15,
    specialties: ["Work Injuries", "Auto Accidents", "Headaches", "TMJ", "Carpal Tunnel"],
    hours: "Mon-Fri: 9am-5pm",
    highlight: "Board Certified Industrial Disability Evaluator and Qualified Medical Evaluator. Work injury and auto accident specialist.",
  },
  {
    id: "mas-vida",
    name: "Mas Vida Chiropractic",
    doctor: "Chiropractic Team",
    address: "310 E Main St, Ste M, Turlock, CA 95380",
    phone: "(209) 620-8020",
    rating: 4.8,
    reviewCount: 22,
    specialties: ["Bilingual (Spanish)", "Family Care", "Pain Relief", "Wellness"],
    hours: "Mon-Fri: 9am-6pm",
    highlight: "Bilingual chiropractic care serving Turlock's diverse community. Welcoming environment for Spanish-speaking families.",
  },
  {
    id: "the-joint",
    name: "The Joint Chiropractic",
    doctor: "Licensed Chiropractors",
    address: "3212 W Monte Vista Ave, Turlock, CA 95382",
    phone: "(209) 427-5252",
    rating: 4.5,
    reviewCount: 30,
    specialties: ["Walk-In", "Affordable Care", "Maintenance Plans", "Spinal Adjustments"],
    hours: "Mon-Fri: 10am-7pm | Sat: 10am-4pm",
    highlight: "No appointment needed. Affordable membership plans. Walk-in chiropractic care with flexible hours.",
  },
  {
    id: "screen",
    name: "Screen Chiropractic",
    doctor: "Dr. Screen, DC",
    address: "1518 Colorado Ave, Turlock, CA 95382",
    phone: "(209) 668-5000",
    rating: 4.7,
    reviewCount: 10,
    specialties: ["General Chiropractic", "Pain Relief", "Rehabilitation"],
    hours: "Mon-Fri: 9am-5pm",
    highlight: "Established Turlock practice offering personalized chiropractic care and rehabilitation services.",
  },
]
