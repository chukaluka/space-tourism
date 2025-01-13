export interface Destination {
  name: string;
  images: string;
  description: string;
  distance: string;
  travel: string;
}

export interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: {
    jpg: string;
    landscape: string;
  };
  description: string;
}

export interface Data {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}
