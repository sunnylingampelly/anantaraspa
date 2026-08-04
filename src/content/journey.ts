export type JourneyStep = {
  title: string;
  description: string;
};

export const journeySteps: JourneyStep[] = [
  {
    title: "Book",
    description: "Reserve your slot by phone, WhatsApp, or a two-minute call — we confirm within minutes.",
  },
  {
    title: "Arrive",
    description: "Step into our Gachibowli sanctuary, away from traffic and noise, ten minutes before your session.",
  },
  {
    title: "Welcome Drink",
    description: "Settle in with a warm herbal welcome drink while your private suite is prepared.",
  },
  {
    title: "Consultation",
    description: "A short, unhurried conversation with your therapist to tailor pressure, focus areas, and technique.",
  },
  {
    title: "Treatment",
    description: "Your chosen therapy, delivered in a private room with warmed oils and complete quiet.",
  },
  {
    title: "Relaxation Lounge",
    description: "Linger afterward in our lounge — no rush back into the world just yet.",
  },
  {
    title: "Tea",
    description: "A closing cup of herbal tea to gently bring you back to the present.",
  },
  {
    title: "Checkout",
    description: "A calm, simple close to the visit — with priority rebooking if you'd like to return.",
  },
];
