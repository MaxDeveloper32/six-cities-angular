interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface City {
  name: string;
  location: Location;
}

interface TypePlace {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
}

export type { TypePlace, Location };

