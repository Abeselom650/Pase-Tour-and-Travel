export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  highlights: string[];
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  highlights: string[];
  image: string;
  category: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export interface VlogItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
  image: string;
}

export interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  packageId: string;
  travelDate: string;
  travelersCount: number;
  message: string;
}

export interface ContactData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}





