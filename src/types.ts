export type EventCategory = 'all' | 'weddings' | 'corporate' | 'celebrations' | 'stage';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weddings' | 'corporate' | 'celebrations' | 'stage';
  categoryLabel: string;
  image: string;
  location?: string;
  description: string;
  highlights?: string[];
  span?: string; // Masonry grid span class
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  items: string[];
}

export interface TimelineMilestone {
  year: string;
  period?: string;
  title: string;
  role: string;
  description: string;
  image?: string;
  tag: string;
  highlights: string[];
}

export interface CityHub {
  name: string;
  state: string;
  isBase?: boolean;
  featuredEvent?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  message: string;
  honeypot?: string;
}

