import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Poco from "./pages/poco";
import Footer from "./components/organisms/Footer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poco" element={<Poco />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
