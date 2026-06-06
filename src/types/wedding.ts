export interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  mapLink: string;
  image: string;
}

export interface FamilyMember {
  name: string;
  relation: string;
}

eexport interface WeddingData {
  groom: string;
  bride: string;
  date: string;
  location: string;
  countdownDate: string;
  music: string;
  heroImage: string;
  envelopeBackground: string; // Add this line
  metadata: {
    shareTitle: string;
    shareDescription: string;
    shareImage: string;
  };
  events: EventDetail[];
  gallery: string[];
  family: {
    parents: FamilyMember[];
    blessingMessage: string;
  };
}
// ... keep EventDetail and FamilyMember interfaces as they were