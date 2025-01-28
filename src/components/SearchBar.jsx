// SearchBar.js
import React from "react";

const SearchBar = ({ query, onChange, onSearch }) => {
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
