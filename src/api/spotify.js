import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const clientId = "e7068238a1014501a6fd96f15a173118";
const clientSecret = "a5f34de27326405d935ae49766ab9a59";

// 🔹 Fonction pour récupérer le token d'accès
const fetchAccessToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data.access_token;
};

// 🔹 Hook React Query pour obtenir le token
export const useAccessToken = () => {
  return useQuery({
    queryKey: ["accessToken"],
    queryFn: fetchAccessToken,
    staleTime: 3600000,
    cacheTime: 7200000,
  });
};

// 🔹 Fonction pour rechercher des morceaux
const fetchSpotifySearch = async ({ queryKey }) => {
  const [, query, token] = queryKey;
  if (!query) return null;

  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// 🔹 Hook React Query pour chercher des morceaux
export const useSpotifySearch = (query, token) => {
  return useQuery({
    queryKey: ["search", query, token],
    queryFn: fetchSpotifySearch,
    enabled: !!query && !!token,
    staleTime: 300000,
    cacheTime: 600000,
  });
};

// 🔹 Fonction pour récupérer les détails d'un artiste
const fetchArtistDetails = async ({ queryKey }) => {
  const [, id, token] = queryKey;
  if (!id) return null;

  const response = await axios.get(
    `https://api.spotify.com/v1/artists/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// 🔹 Hook React Query pour récupérer les détails d'un artiste
export const useArtistDetails = (id, token) => {
  return useQuery({
    queryKey: ["artist", id, token],
    queryFn: fetchArtistDetails,
    enabled: !!id && !!token,
    staleTime: 300000,
    cacheTime: 600000,
  });
};
