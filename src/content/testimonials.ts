// Illustrative guest testimonials. Replace with verified guest quotes / Google
// reviews before launch — these are written as representative placeholders only
// and are not attributed to real, identifiable guests.

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    role: "Product Manager, HITEC City",
    quote:
      "Between back-to-back calls all week, the deep tissue session here is the one hour that actually resets me. The private suite makes it feel worlds away from the office, even though it's five minutes down the road.",
    service: "Deep Tissue Massage",
  },
  {
    name: "Karthik & Meera",
    role: "Couple, Financial District",
    quote:
      "We booked the couples suite for our anniversary and it set a new standard. Two therapists, perfectly in sync, in a room that felt genuinely private and calm — we've since made it a quarterly ritual.",
    service: "Couples Massage",
  },
  {
    name: "Sarah T.",
    role: "Consultant, Gachibowli",
    quote:
      "I've tried spas across the city and this is the first one that feels intentional rather than transactional. The therapists actually listen before they start, and the hygiene standard is visibly a level above.",
    service: "Balinese Massage",
  },
  {
    name: "Rohan V.",
    role: "Software Engineer, Mindspace",
    quote:
      "Years of desk work had left my shoulders permanently tight. Three sessions of Thai + Deep Tissue combination and the difference in my posture is something my physiotherapist actually commented on.",
    service: "Thai + Deep Tissue Combination",
  },
  {
    name: "Priya N.",
    role: "Founder, Raidurg",
    quote:
      "The little details — the welcome tea, the unhurried consultation, the relaxation lounge afterward — make this feel like a proper wellness retreat rather than a quick massage stop between meetings.",
    service: "Aromatic Massage",
  },
];
