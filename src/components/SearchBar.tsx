import React from "react";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange, onSearch }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Recherchez un artiste ou une chanson"
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <button
        onClick={onSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
