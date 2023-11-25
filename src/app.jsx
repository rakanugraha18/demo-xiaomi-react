import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import HomePage from "./pages/home";
import Poco from "./pages/poco";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import SmartPhone from "./pages/smartphone";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
