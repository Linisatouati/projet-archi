import axios from "axios";
import { SpotifyTrack, SpotifyArtist } from "../types/spotify";

const clientId = "e7068238a1014501a6fd96f15a173118";
const clientSecret = "a5f34de27326405d935ae49766ab9a59";

// Typage de la réponse pour l'obtention du token
interface AccessTokenResponse {
  access_token: string;
}

export const getAccessToken = async (): Promise<string> => {
    const response = await axios.post<AccessTokenResponse>(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization:
            "Basic " +
            btoa(`${clientId}:${clientSecret}`), // Utilisation de btoa
        },
      }
    );
    return response.data.access_token;
  };
  

// Typage de la réponse pour la recherche de morceaux
interface SpotifySearchResponse {
  tracks: { items: SpotifyTrack[] };
}

export const searchSpotify = async (
  query: string,
  token: string
): Promise<{ tracks: { items: SpotifyTrack[] } }> => {
  const response = await axios.get<SpotifySearchResponse>(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// Typage pour les détails d'artiste
export const fetchArtistDetails = async (
  id: string,
  token: string
): Promise<SpotifyArtist> => {
  const response = await axios.get<SpotifyArtist>(
    `https://api.spotify.com/v1/artists/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
