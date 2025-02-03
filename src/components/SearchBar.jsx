import React from "react";

const SearchBar = ({ query, onChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Recherchez un artiste ou une chanson"
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
    </div>
  );
};

export default SearchBar;
