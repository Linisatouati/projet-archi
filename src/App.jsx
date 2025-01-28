// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListView from "./pages/ListView";
import DetailView from "./pages/DetailView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/details/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
};

export default App;
