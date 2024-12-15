export interface Anime {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  genre: string[];
  rating: number;
}

export interface User {
  id: string;
  username: string;
  isAdmin: boolean;
}