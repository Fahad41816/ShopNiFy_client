import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LoginPage from "./pages/Login/LoginPage.tsx";
import Registration from "./pages/Registration/Registration.tsx";
import CartPage from "./pages/AddToCartPage/CartPage.tsx";
import WishListPage from "./pages/Wishlist/WishListPage.tsx";
import Comparepage from "./pages/ComparePage/Comparepage.tsx";
import ContactusPage from "./pages/Contact/ContactusPage.tsx";
import CollectionsPage from "./pages/AllCollections/CollectionsPage.tsx";
import AboutusPage from "./pages/Aboutus/AboutusPage.tsx";
// ..
AOS.init();
// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },  
      {
        path: "/Compares",
        element: <Comparepage></Comparepage>,
      },
      {
        path: "/Wishlist",
        element: <WishListPage></WishListPage>,
      },
      {
        path: "/Cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/Contact",
        element: <ContactusPage></ContactusPage>,
      },
      {
        path: "/About",
        element: <AboutusPage></AboutusPage>,
      },
      {
        path: "/Collections",
        element: <CollectionsPage></CollectionsPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
