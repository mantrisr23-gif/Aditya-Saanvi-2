import { WeddingData } from "../types/wedding";

export const weddingData: WeddingData = {
  groom: "Aditya",
  bride: "Saanvi",
  date: "15 November 2026",
  location: "Bhubaneswar",
  countdownDate: "2026-11-15T19:00:00",
  music: "/music/theme.mp3",
  heroImage: "/images/hero.jpg",
  envelopeBackground: "/images/envelope-bg-1.jpg",

  metadata: {
    shareTitle: "Aditya & Saanvi are tying the knot!",
    shareDescription: "Join us in celebrating our big day on 15th November 2026.",
    shareImage: "/images/hero.jpg",
  },

  events: [
    {
      title: "Haldi",
      date: "14 Nov",
      time: "10:00 AM",
      venue: "Royal Lawn, Swosti Premium",
      mapLink: "https://maps.google.com/",
      image: "/images/haldi.jpg",
    },
    {
      title: "Wedding Ceremony",
      date: "15 Nov",
      time: "7:00 PM",
      venue: "Grand Ballroom, Swosti Premium",
      mapLink: "https://maps.google.com/",
      image: "/images/wedding.jpg",
    },
  ],

  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
  ],

  family: {
    parents: [
      { name: "Mr. Ramesh & Mrs. Sunita Sharma", relation: "Groom's Parents" },
      { name: "Mr. Anil & Mrs. Meena Dash", relation: "Bride's Parents" },
    ],
    blessingMessage: "Together with our families, we invite you to share in our joy.",
  },
};