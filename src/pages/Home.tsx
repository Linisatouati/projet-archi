import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenue sur Spotify Explorer</h1>
      <p>Découvrez des artistes, des morceaux, et plus encore !</p>
      <Link to="/list">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Commencez la recherche
        </button>
      </Link>
    </div>
  );
};

export default Home;
