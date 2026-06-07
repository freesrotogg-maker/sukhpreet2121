export interface Review {
  id: string;
  targetId: string; // store, restaurant, or attraction ID
  author: string;
  rating: number;
  comment: string;
  date: string;
  approved: boolean;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string; // string emoji/icon
  rating: number;
  reviewCount: number;
  location: string;
  nearestParking: string;
  popularProducts: string[];
  
  // Backward compatibility fields for other system modules
  store_name?: string;
  floor?: number;
  zone_id?: string;
  seo_intro?: string;
  faqs?: { q: string; a: string }[];
  hours?: string;
  phone?: string;
  nearestEntrance?: string;
  heroImage?: string;
  website?: string;
  whyVisit?: string;
  shoppingTips?: string[];
  faq?: { question: string; answer: string }[];
  gallery?: string[];
  relatedStoreIds?: string[];
  nearbyRestaurantIds?: string[];
  nearbyAttractionIds?: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  logo: string;
  rating: number;
  reviewCount: number;
  location: string;
  nearestParking: string;
  priceRange: string; // e.g., '$$'
  features?: string[]; // user requirement
  
  // Backward compatibility fields for existing components
  ratingCategory?: 'Casual' | 'Fine Dining' | 'Sweet Treats' | 'Quick Bite' | string;
  isFamilyFriendly?: boolean;
  bestDishes?: string[];
  hours?: string;
  phone?: string;
  nearestEntrance?: string;
  website?: string;
  nearbyStoreIds?: string[];
  nearbyAttractionIds?: string[];
  gallery?: string[];
  visitorTips?: string[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  type?: string; // user requirement
  logo: string;
  rating: number;
  reviewCount: number;
  location: string;
  nearestParking: string;
  ticketRequired?: boolean; // user requirement
  waitTime?: number; // user requirement
  
  // Backward compatibility fields for anchor template structures
  hours?: string;
  ticketInfo?: string;
  visitorTips?: string[];
  ageRecommendation?: string;
  parkingAdvice?: string;
  nearbyRestaurantIds?: string[];
  nearbyStoreIds?: string[];
  faq?: { question: string; answer: string }[];
  gallery?: string[];
  heroImage?: string;
}

export interface Garage {
  id: string;
  name: string; // e.g., "Garage A"
  bestForTags: string[]; // e.g., ["Theme Parks", "Luxury Shopping"]
  advantages: string[];
  disadvantages: string[];
  walkingTimes: { [destination: string]: string }; // e.g., "Nickelodeon Universe": "4 mins"
  nearbyLocations: string[];
  parkingTips: string;
  capacityLevel: 'Low' | 'Moderate' | 'High';
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  targetAudience: string;
  description: string;
  steps: {
    time: string;
    activity: string;
    description: string;
    locationId?: string; // Links to store, restaurant, or attraction
    type?: 'store' | 'restaurant' | 'attraction' | 'parking';
  }[];
}

export interface ShoppingGuide {
  id: string;
  title: string;
  category: string; // Sneaker, Luxury, Kids, Beauty, Tech, Gift
  description: string;
  featuredStoreIds: string[];
  insiderTips: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
}
