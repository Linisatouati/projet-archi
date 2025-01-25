// ListView.js
import React, { useState } from "react";
import { getAccessToken, searchSpotify } from "../api/spotify";
import SearchBar from "../components/SearchBar";
import ResultItem from "../components/ResultItem";
import { SpotifyTrack } from "../types/spotify";

const ListView: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SpotifyTrack[]>([]);

  const handleSearch = async () => {
    const token = await getAccessToken();
    const data = await searchSpotify(query, token);
    setResults(data.tracks.items);
  };

  return (
    <div className="container">
      <h1>Rechercher des morceaux ou artistes</h1>
      <SearchBar query={query} onChange={setQuery} onSearch={handleSearch} />
      <div className="card-list">
        {results.map((track) => (
          <ResultItem key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
