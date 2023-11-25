import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Poco from "./pages/poco";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import SmartPhone from "./pages/smartphone";
function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poco" element={<Poco />} />
          {/* <Route path="/smartphone" element={<SmartPhone />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
