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
import { Provider } from "react-redux";
import store from "./utils/redux/store.js";
import Cart from "./components/Cart.js";
import Login from "./components/auth/Login.js";
import { AuthProvider } from "./utils/context/useAuth.js";

// Dynamic Import
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <UserProvider>
            <Header />
            <Outlet />
            <Footer />
          </UserProvider>
        </AuthProvider>
      </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Loader />}>
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
