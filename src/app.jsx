import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Poco from "./pages/poco";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poco" element={<Poco />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
