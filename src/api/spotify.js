import axios from "axios";

const clientId = "e7068238a1014501a6fd96f15a173118";
const clientSecret = "a5f34de27326405d935ae49766ab9a59";

// Fonction pour obtenir le token d'accès
export const getAccessToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`), // Utilisation de btoa
      },
    }
  );
  return response.data.access_token;
};

// Fonction pour rechercher des morceaux sur Spotify
export const searchSpotify = async (query, token) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// Fonction pour récupérer les détails d'un artiste
export const fetchArtistDetails = async (id, token) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/artists/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
