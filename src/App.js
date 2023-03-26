import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// App Planning

/**
 * Header
 *      - Logo
 *      - Nav Items
 *      - Cart
 * Body
 *      - SearchBar
 *      - Restaurant List
 *          - Restaurant Card
 *              - Image
 *              - Name
 *              - Ratings
 *              - Cusines
 * Footer
 *      - Links
 *      - Copyrights
 *
 */
