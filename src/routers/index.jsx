import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home.jsx";
import SmartPhone from "../pages/smartphone.jsx";
import Poco from "../pages/poco.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/smartphone", element: <SmartPhone /> },
  { path: "/poco", element: <Poco /> },
]);

export default router;
