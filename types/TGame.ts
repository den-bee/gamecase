type TGame = {
  id: number;
  slug: string;
  name: string;
  released: Date;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  clip: null;
  tags: Genre[];
  short_screenshots: ShortScreenshot[];
};

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface PlatformElement {
  platform: PlatformPlatform;
  released_at: Date;
}

export interface PlatformPlatform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface ParentPlatform {
  platform: EsrbRating;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export default TGame;
