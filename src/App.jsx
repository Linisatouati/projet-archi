import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import ListView from "./pages/ListView";
import DetailView from "./pages/DetailView";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListView />} />
          <Route path="/details/:id" element={<DetailView />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
