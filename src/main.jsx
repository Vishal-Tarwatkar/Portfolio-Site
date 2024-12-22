import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioSingle from "./pages/portfolio/PortfolioSingle";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import BlogSingle from "./pages/blog/BlogSingle";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/portfolio",
      element: <Portfolio />,
   },
   {
      path: "/portfolio/:title",
      element: <PortfolioSingle />,
   },
   {
      path: "/about",
      element: <About />,
   },
   {
      path: "/contact",
      element: <Contact />,
   },
   {
      path: "/blog",
      element: <Blog />,
   },
   {
      path: "/blog/:",
      element: <BlogSingle />,
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
