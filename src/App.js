import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loader from "./components/Loader.js";
import { UserProvider } from "./utils/context/userContext.js";
// import Instamart from "./components/Instamart.js";

// Dynamic Import
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
    <UserProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserProvider>
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Loader/>}>
            <Instamart />
          </Suspense>
        ),
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
