import React from "react";
// import { RouterProvider } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import HomePage from "./pages/home";
import Poco from "./pages/poco";
import SmartPhone from "./pages/smartphone";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/poco" element={<Poco />} />
        <Route path="/smartphone" element={<SmartPhone />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
