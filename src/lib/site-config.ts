// Single source of truth for business data, used across pages, metadata, and JSON-LD.
// Contact details below are pulled from the live site (anantaraspa.co.in) and public
// listings. Working hours are not published anywhere we could verify — the value below
// is a placeholder and should be confirmed by the client before launch.

export const siteConfig = {
  name: "Anantara Spa",
  legalName: "Anantara Spa",
  tagline: "Sanctuary of Reflection",
  shortDescription:
    "A luxury day spa in Gachibowli-Raidurg, Hyderabad's IT corridor, offering Swedish, Thai, Balinese and deep-tissue massage for busy professionals.",
  url: "https://anantaraspa.co.in",
  ogImage: "/opengraph-image",
  locale: "en_IN",
  themeColor: "#2e5e57",
  gtmId: "GTM-PSFS2JJS",

  contact: {
    phoneDisplay: "+91 78427 66363",
    phoneRaw: "+917842766363",
    whatsappRaw: "917842766363",
    email: "anantaraspa2025@gmail.com",
  },

  address: {
    streetAddress: "1st Floor, G Square Building, Madhura Nagar Colony",
    addressLocality: "Gachibowli, Raidurg",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
    full: "1st Floor, G Square Building, Madhura Nagar Colony, Gachibowli, Raidurg, Hyderabad, Telangana 500081",
    mapsQuery:
      "Anantara Spa, G Square Building, Madhura Nagar Colony, Gachibowli, Raidurg, Hyderabad, Telangana 500081",
    // Real embed pulled from the actual "Anantara spa" Google Maps listing via
    // Share > Embed a map (the classic /maps/embed?pb=... share link, not the
    // deprecated keyless output=embed query trick — this one stays free, no API key).
    mapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8188.47714860176!2d78.3798283!3d17.423797200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9328f75b4e0f%3A0x1ff1f675b128461e!2sAnantara%20spa!5e1!3m2!1sen!2sin!4v1785757494569!5m2!1sen!2sin",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Anantara+Spa+G+Square+Building+Madhura+Nagar+Colony+Gachibowli+Raidurg+Hyderabad+Telangana+500081",
  },

  // Placeholder — confirm real hours with the client before launch.
  hours: [
    { days: "Monday — Sunday", time: "10:00 AM – 9:00 PM" },
  ],
  hoursNote: "Open all seven days · Last booking 8:00 PM",

  social: {
    instagram: "https://instagram.com/anantaraspa",
    facebook: "https://facebook.com/anantaraspa",
  },

  founded: 2015,
  yearsOfExperience: 10,

  nearbyLandmarks: [
    "HITEC City",
    "Financial District",
    "Wipro Circle",
    "Raidurg Metro Station",
    "Mindspace",
    "DLF Cyber City",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Membership", href: "/membership" },
    { label: "Gallery", href: "/gallery" },
    { label: "Journal", href: "/blog" },
  ],
  support: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
