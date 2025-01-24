export interface SpotifyAlbum {
    id: string;
    name: string;
    images: { url: string; height: number; width: number }[];
    artists: { name: string }[];
  }
  
  export interface SpotifyTrack {
    id: string;
    name: string;
    album: SpotifyAlbum;
    artists: { name: string; id: string }[];
  }
  
  export interface SpotifyArtist {
    id: string;
    name: string;
    genres: string[];
    images: { url: string; height: number; width: number }[];
    popularity: number;
  }
  